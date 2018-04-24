const {CompositeDisposable, Emitter} = require('event-kit');
const {serializeRemotePosition, deserializeRemotePosition} = require('@atom/teletype-crdt');
const Messages = require('./teletype-client-pb');
const FollowState = require('./follow-state');
const NullEditorProxyDelegate = require('./null-editor-proxy-delegate');
const EditorProxyMetadata = require('./editor-proxy-metadata');

function doNothing () {}

module.exports =
class EditorProxy {

  constructor ({id, bufferProxy, selectionLayerIdsBySiteId, selections, decNet, siteId, didDispose, portal}) {
    this.id = id;
    this.siteId = siteId;
    this.isHost = (this.siteId === 1);
    this.bufferProxy = bufferProxy;
    this.decNet = decNet;
    this.emitDidDispose = didDispose || doNothing;
    this.selectionLayerIdsBySiteId = selectionLayerIdsBySiteId || new Map();
    this.localHiddenSelectionsLayerId = bufferProxy.getNextMarkerLayerId();
    this.delegate = new NullEditorProxyDelegate();
    this.emitter = new Emitter();
    this.selectionsVisible = true;
    this.portal = portal;
    this.createLocalSelectionsLayer(selections);

    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(
      this.bufferProxy.onDidUpdateMarkers(this.bufferProxyDidUpdateMarkers.bind(this))
    );
    this.subscriptions.add(
      this.decNet.onNotification(`/editors/${id}/updates`, this.receiveUpdate.bind(this))
    );
    if (this.isHost) {
      this.subscriptions.add(
        this.decNet.onRequest(`/editors/${id}`, this.receiveFetch.bind(this))
      )
    } else {
      this.subscriptions.add(
        this.decNet.onNotification(`/editors/${id}/disposal`, this.dispose.bind(this))
      )
    }
  }

  dispose () {
    this.subscriptions.dispose();
    this.delegate.dispose();
    if (this.isHost) this.decNet.notify({channelId: `/editors/${this.id}/disposal`});
    this.emitDidDispose()
  }

  serialize () {
    const editorProxy = new Messages.EditorProxy({
      id: this.id,
      bufferProxyId: this.bufferProxy.id,
      selectionLayerIdsBySiteId: new Map()
    });

    this.selectionLayerIdsBySiteId.forEach((layerId, siteId) => {
      editorProxy.selectionLayerIdsBySiteId.set(siteId, layerId)
    });

    return editorProxy;
  }

  static deserialize (message, props) {
    const id = message.id;
    const bufferProxyId = message.bufferProxyId;
    const bufferProxy = props.bufferProxiesById.get(bufferProxyId);

    const selectionLayerIdsBySiteId = new Map();
    message.selectionLayerIdsBySiteId.forEach((layerId, siteId) => {
      selectionLayerIdsBySiteId.set(siteId, layerId)
    });

    return new EditorProxy(Object.assign({id, bufferProxy, selectionLayerIdsBySiteId}, props))
  }


  getMetadata () {
    return new EditorProxyMetadata({
      id: this.id,
      bufferProxyId: this.bufferProxy.id,
      bufferProxyURI: this.bufferProxy.uri
    })
  }

  setDelegate (delegate) {
    this.delegate = delegate || new NullEditorProxyDelegate();
    this.bufferProxyDidUpdateMarkers(this.bufferProxy.getMarkers(), {initialUpdate: true})
  }

  createLocalSelectionsLayer (selections) {
    const localSelectionsLayerId = this.bufferProxy.getNextMarkerLayerId();
    this.selectionLayerIdsBySiteId.set(this.siteId, localSelectionsLayerId);

    const selectionsUpdate = new Messages.EditorProxyUpdate.SelectionsUpdate();
    selectionsUpdate.selectionLayerIdsBySiteId.set(this.siteId, localSelectionsLayerId);
    const editorProxyUpdate = new Messages.EditorProxyUpdate({selectionsUpdate});
    const buffer = Messages.EditorProxyUpdate.encode(editorProxyUpdate).finish();

    this.decNet.notify({channelId: `/editors/${this.id}/updates`, body: buffer});

    if (selections) this.updateSelections(selections, {initialUpdate: true})
  }

  updateSelections (selections = {}, options = {}) {
    this.bufferProxy.updateMarkers({
      [this.localHiddenSelectionsLayerId]: selections
    }, false);

    if (this.selectionsVisible) {
      const localSelectionsLayerId = this.selectionLayerIdsBySiteId.get(this.siteId);
      this.bufferProxy.updateMarkers({
        [localSelectionsLayerId]: selections
      })
    }

    this.emitter.emit('did-update-local-selections', options)
  }

  bufferProxyDidUpdateMarkers (markerUpdates, options = {}) {
    const selectionLayerIdsBySiteId = new Map();

    for (let siteId in markerUpdates) {
      siteId = parseInt(siteId);
      if (siteId !== this.siteId) {
        const layersById = markerUpdates[siteId];
        for (let layerId in layersById) {
          layerId = parseInt(layerId);
          if (this.selectionLayerIdsBySiteId.get(siteId) === layerId) {
            const selections = layersById[layerId];
            this.delegate.updateSelectionsForSiteId(siteId, selections);
            selectionLayerIdsBySiteId.set(siteId, layerId)
          }
        }
      }
    }

    this.emitter.emit('did-update-remote-selections', {selectionLayerIdsBySiteId, initialUpdate: options.initialUpdate})
  }

  didScroll (callback) {
    this.emitter.emit('did-scroll')
  }

  onDidScroll (callback) {
    return this.emitter.on('did-scroll', callback)
  }

  onDidUpdateLocalSelections (callback) {
    return this.emitter.on('did-update-local-selections', callback)
  }

  onDidUpdateRemoteSelections (callback) {
    return this.emitter.on('did-update-remote-selections', callback)
  }

  cursorPositionForSiteId (siteId) {
    let selections;

    if (siteId === this.siteId) {
      selections = this.getLocalHiddenSelections()
    } else if (this.selectionLayerIdsBySiteId.has(siteId)) {
      const layers = this.bufferProxy.getMarkers()[siteId];
      const selectionLayerId = this.selectionLayerIdsBySiteId.get(siteId);
      selections = layers ? layers[selectionLayerId] : {}
    } else {
      selections = {}
    }

    const selectionIds = Object.keys(selections).map((key) => parseInt(key));
    if (selectionIds.length > 0) {
      const lastSelection = selections[Math.max(...selectionIds)];
      return lastSelection.reversed ? lastSelection.range.start : lastSelection.range.end
    }
  }

  isScrollNeededToViewPosition (position) {
    return this.delegate.isScrollNeededToViewPosition(position)
  }

  hideSelections () {
    const localSelectionsLayerId = this.selectionLayerIdsBySiteId.get(this.siteId);
    if (this.selectionsVisible && localSelectionsLayerId) {
      const selectionsUpdate = {};
      for (const selectionId in this.getLocalHiddenSelections()) {
        selectionsUpdate[selectionId] = null
      }

      this.bufferProxy.updateMarkers({
        [localSelectionsLayerId]: selectionsUpdate
      })
    }

    this.selectionsVisible = false
  }

  showSelections () {
    const localSelectionsLayerId = this.selectionLayerIdsBySiteId.get(this.siteId);
    if (!this.selectionsVisible && localSelectionsLayerId) {
      this.bufferProxy.updateMarkers({
        [localSelectionsLayerId]: this.getLocalHiddenSelections()
      })
    }

    this.selectionsVisible = true
  }

  getLocalHiddenSelections () {
    const localLayers = this.bufferProxy.getMarkers()[this.siteId];
    const localHiddenSelectionsLayer = localLayers ? localLayers[this.localHiddenSelectionsLayerId] : null;
    return localHiddenSelectionsLayer || {}
  }

  hostDidDisconnect () {
    this.selectionLayerIdsBySiteId.forEach((_, siteId) => {
      this.siteDidDisconnect(siteId)
    })
  }

  siteDidDisconnect (siteId) {
    this.selectionLayerIdsBySiteId.delete(siteId);
    this.delegate.clearSelectionsForSiteId(siteId)
  }

  receiveFetch ({requestId}) {
    const editorProxy = this.serialize();
    const buffer = Messages.EditorProxy.encode(editorProxy).finish();
    this.decNet.respond({requestId, body: buffer});
  }

  receiveUpdate ({body}) {
    const editorProxyUpdate = Messages.EditorProxyUpdate.toObject(Messages.EditorProxyUpdate.decode(body));

    if (editorProxyUpdate.selectionsUpdate) {
      this.receiveSelectionsUpdate(editorProxyUpdate.selectionsUpdate);
    }
  }

  receiveSelectionsUpdate (selectionsUpdate) {
    selectionsUpdate.selectionLayerIdsBySiteId.forEach((layerId, siteId) => {
      this.selectionLayerIdsBySiteId.set(siteId, layerId)
    });
  }
};
