const {Emitter, CompositeDisposable, Disposable} = require('event-kit');
const {RouterMessage} = require('./teletype-client_pb');
const convertToProtobufCompatibleBuffer = require('./convert-to-protobuf-compatible-buffer');
const DEFAULT_TIMEOUT = 5000;


module.exports =
class DecNet {

  constructor({connectionTimeout}) {
    this.connectionTimeout = connectionTimeout || DEFAULT_TIMEOUT;
    this.emitter = new Emitter();
    this.subscriptions = new CompositeDisposable(this.receive.bind(this));
    this.nextRequestId = 0;
    this.requestPromiseResolveCallbacks = new Map();
    this.peerIdsByRequestId = new Map();
    this.lastReceivePromise = Promise.resolve();
  }

  dispose() {

  }

  // noinspection JSUnusedGlobalSymbols
  async initialize() {
    // TODO: Make sure that DecNet is up and running
    this.subscriptions.dispose();
  }

  receive({senderId, message}) {
    const routerMessage = RouterMessage.deserializeBinary(message);

    if (routerMessage.hasNotification()) {
      this.receiveNotification(senderId, routerMessage.getNotification());
    } else if (routerMessage.hasRequest()) {
      this.receiveRequest(senderId, routerMessage.getRequest());
    } else if (routerMessage.hasResponse()) {
      this.receiveResponse(routerMessage.getResponse());
    } else {
      throw new Error('Unsupported router message variant');
    }
  }

  receiveNotification(senderId, notification) {
    this.lastReceivePromise = this.lastReceivePromise.then(async () => {
      const channelId = notification.getChannelId();
      const body = convertToProtobufCompatibleBuffer(notification.getBody());
      await this.emitter.emitAsync('notification:' + channelId, {senderId, body});
    });
  }

  receiveRequest(senderId, request) {
    this.lastReceivePromise = this.lastReceivePromise.then(async () => {
      const channelId = request.getChannelId();
      const requestId = request.getRequestId();
      const eventName = 'request:' + channelId;
      const body = convertToProtobufCompatibleBuffer(request.getBody());
      this.peerIdsByRequestId.set(requestId, senderId);

      if (this.emitter.listenerCountForEventName === 0) {
        this.respond({requestId, ok: false});
      } else {
        await this.emitter.emitAsync(eventName, {senderId, requestId, body});
      }
    });
  }

  receiveResponse(response) {
    const requestId = response.getRequestId();
    const requestResolveCallback = this.requestPromiseResolveCallbacks.get(requestId);
    requestResolveCallback({
      body: convertToProtobufCompatibleBuffer(response.getBody()),
      ok: response.getOk()
    });
  }

  respond({requestId, ok, body}) {
    const recipientId = this.peerIdsByRequestId.get(requestId);
    if(!recipientId) throw new Error('Multiple responses to the same request not allowed');

    if (ok == null) ok = true;
    if (body) body = convertToProtobufCompatibleBuffer(body);

    const response = new RouterMessage.Response();
    response.setRequestId(requestId);
    response.setOk(ok);
    response.setBody(body);

    const routerMessage = new RouterMessage();
    routerMessage.setResponse(response);

    this.peerIdsByRequestId.delete(requestId);

    // TODO: DecNet send routerMessage.serializeBinary to recipientId
  }

  request({recipientId, channelId, body}) {
    if(body) body = convertToProtobufCompatibleBuffer(body);

    const requestId = this.nextRequestId++;
    const request = new RouterMessage.Request();
    request.setChannelId(channelId);
    request.setRequestId(requestId);
    if(body) request.setBody(body);

    const routerMessage = RouterMessage();
    routerMessage.setRequest(request);

    // TODO: DecNet send routerMessage.serializeBinary to recipientId

    return new Promise((resolve) => {
      this.requestPromiseResolveCallbacks.set(requestId, resolve);
    });
  }

  notify({recipientId, channelId, body}) {
    body = convertToProtobufCompatibleBuffer(body);

    const notification = new RouterMessage.Notification();
    notification.setChannelId(channelId);
    if (body != null) notification.setBody(body);
    const routerMessage = new RouterMessage();
    routerMessage.setNotification(notification);

    if(recipientId) {
      // TODO: DecNet send routerMessage.serializeBinary to only recipientId
    } else {
      // TODO: DecNet send routerMessage.serializerBinary to everyone
    }
  }

  onNotification(channelId, callback) {
    return this.emitter.on('notification:' + channelId, callback);
  }

  onRequest(channelId, callback) {
    return this.emitter.on('request:' + channelId, callback);
  }



};