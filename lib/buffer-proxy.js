const assert = require('assert');
const {CompositeDisposable, Emitter} = require('event-kit');
const {Document, serializeOperation, deserializeOperation} = require('@atom/teletype-crdt');
const Messages = require('./teletype-client-pb');

function doNothing () {}

module.exports =
class BufferProxy {

  constructor ({id, uri, text, history, operations, router, hostPeerId, siteId, didDispose}) {
    this.id = id;
    this.hostPeerId = hostPeerId;
    this.siteId = siteId;
    this.isHost = (this.siteId === 1);
    this.uri = uri;
    this.router = router;
    this.emitDidDispose = didDispose || doNothing;
    this.document = new Document({siteId, text, history});
    this.nextMarkerLayerId = 1;
    this.emitter = new Emitter();
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(
      this.router.onNotification(`/buffers/${id}`, this.receiveUpdate.bind(this))
    );
    if (this.isHost) {
      this.subscriptions.add(
        this.router.onRequest(`/buffers/${id}`, this.receiveFetch.bind(this)),
        this.router.onNotification(`/buffers/${id}/save`, this.receiveSave.bind(this))
      )
    } else {
      this.subscriptions.add(
        this.router.onNotification(`/buffers/${id}/disposal`, this.dispose.bind(this))
      )
    }

    if (operations) this.integrateOperations(operations)
  }

  dispose () {
    this.subscriptions.dispose();
    if (this.delegate) this.delegate.dispose();
    if (this.isHost) this.router.notify({channelId: `/buffers/${this.id}/disposal`});
    this.emitDidDispose()
  }

  serialize () {
    const bufferProxy = new Messages.BufferProxy({
      id: this.id,
      uri: this.uri,
      operations: Array.from(this.document.getOperations().map(serializeOperation))
    });
    return bufferProxy;
  }

  static deserialize (message, props) {
    return new BufferProxy(Object.assign({
      id: message.id,
      uri: message.uri,
      operations: message.operations.map(deserializeOperation)},
      props));
  }


  setDelegate (delegate) {
    this.delegate = delegate;
    if (this.siteId !== 1 && this.delegate) {
      this.delegate.setText(this.document.getText())
    }
  }

  getNextMarkerLayerId () {
    return this.nextMarkerLayerId++
  }

  setTextInRange (oldStart, oldEnd, newText) {
    const operations = this.document.setTextInRange(oldStart, oldEnd, newText);
    this.broadcastOperations(operations);
    this.emitter.emit('did-update-text', {remote: false})
  }

  setURI (uri) {
    assert(this.isHost, 'Only hosts can change the URI');
    this.uri = uri;
    this.broadcastURIChange(uri)
  }

  getMarkers () {
    return this.document.getMarkers()
  }

  updateMarkers (markerUpdatesByLayerId, broadcastOperations = true) {
    const operations = this.document.updateMarkers(markerUpdatesByLayerId);
    if (broadcastOperations) this.broadcastOperations(operations);
    return operations
  }

  onDidUpdateMarkers (listener) {
    return this.emitter.on('did-update-markers', listener)
  }

  onDidUpdateText (listener) {
    return this.emitter.on('did-update-text', listener)
  }

  undo () {
    const undoEntry = this.document.undo();
    if (undoEntry) {
      const {operations, textUpdates, markers} = undoEntry;
      this.broadcastOperations(operations);
      if (textUpdates.length > 0) {
        this.emitter.emit('did-update-text', {remote: false})
      }
      return {textUpdates, markers}
    } else {
      return null
    }
  }

  redo () {
    const redoEntry = this.document.redo();
    if (redoEntry) {
      const {operations, textUpdates, markers} = redoEntry;
      this.broadcastOperations(operations);
      if (textUpdates.length > 0) {
        this.emitter.emit('did-update-text', {remote: false})
      }
      return {textUpdates, markers}
    } else {
      return null
    }
  }

  createCheckpoint (options) {
    return this.document.createCheckpoint(options)
  }

  getChangesSinceCheckpoint (checkpoint) {
    return this.document.getChangesSinceCheckpoint(checkpoint)
  }

  groupChangesSinceCheckpoint (checkpoint, options) {
    return this.document.groupChangesSinceCheckpoint(checkpoint, options)
  }

  groupLastChanges () {
    return this.document.groupLastChanges()
  }

  revertToCheckpoint (checkpoint, options) {
    const result = this.document.revertToCheckpoint(checkpoint, options);
    if (result) {
      const {operations, textUpdates, markers} = result;
      this.broadcastOperations(operations);
      if (textUpdates.length > 0) {
        this.emitter.emit('did-update-text', {remote: false})
      }
      return {textUpdates, markers}
    } else {
      return false
    }
  }

  applyGroupingInterval (groupingInterval) {
    this.document.applyGroupingInterval(groupingInterval)
  }

  getHistory (maxEntries) {
    return this.document.getHistory(maxEntries)
  }

  requestSave () {
    assert(!this.isHost, 'Only guests can request a save');
    this.router.notify({recipientId: this.hostPeerId, channelId: `/buffers/${this.id}/save`})
  }

  receiveFetch ({requestId}) {
    const bufferProxy = this.serialize();
    const buffer = Messages.BufferProxy.encode(bufferProxy).finish();
    this.router.respond({requestId, body: buffer});
  }

  receiveUpdate ({bufferProxyUpdate}) {
    const update = Messages.BufferProxyUpdate.toObject(Messages.BufferProxyUpdate.decode(bufferProxyUpdate));
    if (update.operationsUpdate) {
      this.receiveOperationsUpdate(update.operationsUpdate);
    } else if (update.uriUpdate) {
      this.receiveURIUpdate(update.uriUpdate);
    } else {
      throw new Error('Received unknown update message')
    }
  }

  receiveOperationsUpdate (operationsUpdateMessage) {
    const operations = operationsUpdateMessage.operations.map(deserializeOperation);
    this.integrateOperations(operations);
  }

  receiveURIUpdate (uriUpdateMessage) {
    this.uri = uriUpdateMessage.uri
    this.delegate.didChangeURI(this.uri)
  }

  receiveSave () {
    this.delegate.save()
  }

  broadcastOperations (operations) {
    const operationsUpdate = new Messages.BufferProxyUpdate.OperationsUpdate({
      operations: operations.map(serializeOperation)
    });
    const bufferProxyUpdate = new Messages.BufferProxyUpdate({operationsUpdate});
    const buffer = Messages.BufferProxyUpdate.encode(bufferProxyUpdate).finish();

    this.broadcastUpdate(buffer)
  }

  integrateOperations (operations) {
    const {textUpdates, markerUpdates} = this.document.integrateOperations(operations);
    if (this.delegate) this.delegate.updateText(textUpdates);
    this.emitter.emit('did-update-markers', markerUpdates);
    if (textUpdates.length > 0) {
      this.emitter.emit('did-update-text', {remote: true})
    }
  }

  broadcastURIChange (uri) {
    const uriUpdate = new Messages.BufferProxyUpdate.URIUpdate({
      uri
    });
    const bufferProxyUpdate = new Messages.BufferProxyUpdate({
      uriUpdate
    });
    const buffer = Messages.BufferProxyUpdate.encode(bufferProxyUpdate).finish();

    this.broadcastUpdate(buffer);
  }

  broadcastUpdate (buffer) {
    // TODO: DecNet notify buffers for this site of the update (uri or operations
    // this.router.notify({channelId: `/buffers/${this.id}`, body: buffer})
  }
};
