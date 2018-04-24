const Messages = require('./teletype-client-pb');
const {CompositeDisposable} = require('event-kit');
const NOOP = () => {};

module.exports =
class EditorProxyMetadata {
  constructor ({id, bufferProxyId, bufferProxyURI, siteId, decNet, didDispose}) {
    this.id = id;
    this.bufferProxyId = bufferProxyId;
    this.bufferProxyURI = bufferProxyURI;
    this.subscriptions = new CompositeDisposable();
    this.didDispose = didDispose || NOOP;
    if (didDispose) {
      this.subscriptions.add(
        decNet.onNotification(`/buffers/${id}`, this.receiveBufferUpdate.bind(this))
      );
      this.subscriptions.add(
        decNet.onNotification(`/editors/${id}/disposal`, this.dispose.bind(this))
      )
    }
  }

  dispose () {
    this.subscriptions.dispose();
    this.didDispose()
  }

  serialize () {
    const editorProxyMetadata = new Messages.EditorProxyMetadata({
      id: this.id,
      bufferProxyId: this.bufferProxyId,
      bufferProxyURI: this.bufferProxyURI
    });

    return editorProxyMetadata;
  }

  static deserialize (message, props) {
    return new EditorProxyMetadata(Object.assign({
      id: message.id,
      bufferProxyId: message.bufferProxyId,
      bufferProxyURI: message.bufferProxyURI
    }, props))
  }


  receiveBufferUpdate ({body}) {
    const bufferProxyUpdate = Messages.BufferProxyUpdate.toObject(Messages.BufferProxyUpdate.decode(body));
    if (bufferProxyUpdate.uriUpdate) {
      this.bufferProxyURI = bufferProxyUpdate.uriUpdate.uri
    }
  }
};
