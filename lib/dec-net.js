const {Emitter, CompositeDisposable, Disposable} = require('event-kit');
const {RouterMessage, NetworkMessage} = require('./teletype-client_pb');
const convertToProtobufCompatibleBuffer = require('./convert-to-protobuf-compatible-buffer');
const DEFAULT_TIMEOUT = 5000;


module.exports =
class DecNet {

  constructor({id, isHub, connectionTimeout}) {
    this.id = id;
    // TODO: maybe this.userId = userId;
    this.isHub = isHub;
    this.connectionTimeout = connectionTimeout || DEFAULT_TIMEOUT;
    this.emitter = new Emitter();
    this.subscriptions = new CompositeDisposable(
      this.onRouterReceive(this.receiveRouterMessage.bind(this)),
      this.onNetworkReceive(this.receiveNetworkMessage.bind(this)),
      this.onDisconnection(this.didLoseConnectionToPeer.bind(this))
    );
    this.nextRequestId = 0;
    this.requestPromiseResolveCallbacks = new Map();
    this.peerIdsByRequestId = new Map();
    this.connectedMemberIds = new Set();
    this.lastReceivePromise = Promise.resolve();

    if(this.isHub) {
      this.state = 'connected';
    } else {
      this.state = 'disconnected';
    }
  }

  dispose() {
    this.disconnect();
  }

  connectTo(hubId) {
    assert(!this.isHub, 'The hub should only receive connections');
    assert(!this.hubId, 'Can connect to hub only once');

    this.state = 'connecting';
    this.hubId = hubId;
    // TODO: DecNet ping hubId to see if we can communicate with it

    try {
      const joinRequest = new NetworkMessage.JoinRequest();
      // TODO: DecNet needs to set userId at some point
      joinRequest.setSenderId(this.userId);
      const networkMessage = new NetworkMessage();
      networkMessage.setJoinRequest(joinRequest);
      networkMessage.setNetworkId(this.id);
      // TODO: DecNet send networkMessage.serializeBinary to hubId
    } catch(error) {
      this.state = 'disconnected';
      this.hubId = null;
      throw error;
    }

    const timeoutError = new Errors.NetworkConnectionError('Connecting to the portal network timed out');
    return new Promise((resolve, reject) => {
      this.resolveConnectionPromise = resolve;
      setTimeout(() => {
        if (this.state === 'connecting') {
          this.state = 'timeout';
          this.disconnect();
          reject(timeoutError);
        }
      }, this.connectionTimeout);
    });
  }

  disconnect() {
    if (this.state === 'disconnected') return;

    const leaveNotificationMessage = new NetworkMessage.LeaveNotification();
    leaveNotificationMessage.setMemberId(this.userId);
    leaveNotificationMessage.setConnectionLost(false);
    const networkMessage = new NetworkMessage()
    networkMessage.setLeaveNotification(leaveNotificationMessage);
    // TODO: Do we need this next line?
    networkMessage.setNetworkId(this.id);

    if(this.isHub) {
      // TODO: DecNet send this to everybody
    } else {
      // TODO: DecNet send networkMessage.serializeBinary to this.hubId
    }

    this.state = 'disconnected';
  }

  unicast(recipientId, message) {
    message = convertToProtobufCompatibleBuffer(message);

    const Unicast = new NetworkMessage.Unicast();
    Unicast.setSenderId(this.userId);
    Unicast.setRecipientId(recipientId);
    Unicast.setBody(message);
    const networkMessage = new NetworkMessage();
    networkMessage.setUnicast(Unicast);
    networkMessage.setNetworkId(this.id);

    // TODO: DecNet send networkMessage.serializeBinary to recipientId
  }

  broadcast(message) {
    message = convertToProtobufCompatibleBuffer(message);

    const Broadcast = new NetworkMessage.Broadcast();
    Broadcast.setSenderId(this.userId);
    Broadcast.setBody(message);
    const networkMessage = new NetworkMessage();
    networkMessage.setBroadcast(Broadcast);
    networkMessage.setNetworkId(this.id);

    // TODO: DecNet send networkMessage.serializeBinary to everyone on this network
  }


  async initialize() {
    // TODO: Make sure that DecNet is up and running
    this.subscriptions.dispose();
  }

  receiveRouterMessage({senderId, message}) {
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

  receiveNetworkMessage({senderId, message}) {
    if (this.state === 'disconnected') return;

    const networkMessage = NetworkMessage.deserializeBinary(message);
    if (networkMessage.getNetworkId() !== this.id) return;

    if (networkMessage.hasJoinRequest()) {
      this.receiveJoinRequest(message, networkMessage.getJoinRequest());
    } else if (networkMessage.hasJoinResponse()){
      this.receiveJoinResponse(networkMessage.getJoinResponse());
    } else if (networkMessage.hasJoinNotification()) {
      this.receiveJoinNotification(networkMessage.getJoinNotification());
    } else if (networkMessage.hasLeaveNotification()) {
      this.receiveLeaveNotification(message, networkMessage.getLeaveNotification());
    } else if (networkMessage.hasUnicast()) {
      this.receiveUnicast(message, networkMessage.getUnicast());
    } else if (networkMessage.hasBroadcast()) {
      this.receiveBroadcast(message, networkMessage.getBroadcast());
    }
  }
  
  receiveJoinRequest(rawMessage, joinRequest) {
    assert(this.isHub, 'Join requests should only be sent to the hub');
    const senderId =  joinRequest.getSenderId();
    
    this.state = 'connected';
    this.connectedMemberIds.add(senderId);
    
    // Respond to new member
    const joinResponse = new NetworkMessage.JoinResponse();
    joinResponse.setMemberIdList(this.connectedMemberIds);
    const networkMessage = new NetworkMessage();
    networkMessage.setNetworkId(this.id);
    networkMessage.setJoinResponse(joinResponse);

    // TODO: DecNet send networkMessage.serializeBinary to senderId

    // Notify other members of new member
    const joinNotification = new NetworkMessage.JoinNotification();
    joinNotification.setMemberId(senderId);
    const notificationNetworkMessage = new NetworkMessage();
    notificationNetworkMessage.setNetworkId(this.id);
    notificationNetworkmessage.setJoinNotification(joinNotification);

    // TODO: DecNet send notificationNetworkMessage.serializeBinary to everyone but senderId

    this.emitter.emit('join', {peerId: senderId});
    
  }

  receiveJoinResponse(joinResponse) {
    assert(!this.isHub, 'Connection responses cannot be sent to the hub');

    joinResponse.getMemberIdList().forEach((peerId) => {
      this.connectedMemberIds.add(peerId);
    });

    this.state = 'connected';
    this.resolveConnectionPromise();
    this.resolveConnectionPromise = null;
  }

  receiveJoinNotification(joinNotification) {
    const peerId = joinNotification.getMemberId();
    this.connectedMemberIds.add(peerId);

    this.emitter.emit('join', {peerId});
  }

  receiveLeaveNotification(rawMessage, leaveNotification) {
    const memberId = leaveNotification.getMemberId();
    if(!this.connectedMemberids.has(memberId)) return;

    if(this.isHub) {
      // TODO: broadcast rawMessage to everyone but memberId
    }

    this.memberDidLeave(memberId, leaveNotification.getConnectionLost());

  }

  receiveUnicast(rawMessage, unicastMessage) {
    const recipientId = unicastMessage.getRecipientId();
    assert(recipientId === this.userId, 'Unicast should directly send with DecNet');

    this.emitter.emit('network:receive', {
      senderId: unicastMessage.getSenderId(),
      message: convertToProtobufCompatibleBuffer(rawMessage)
    });
  }

  receiveBroadcast(rawMessage, broadcastMessage) {
    const senderId = broadcastMessage.getSenderId();
    this.emitter.emit('network:receive', {
      senderId,
      message: convertToProtobufCompatibleBuffer(rawMessage)
    });
  }

  onNotification(channelId, callback) {
    return this.emitter.on('notification:' + channelId, callback);
  }

  onRequest(channelId, callback) {
    return this.emitter.on('request:' + channelId, callback);
  }

  onNetworkReceive(callback) {
    return this.emitter.on('network:receive', callback);
  }

  onRouterReceive(callback) {
    return this.emitter.on('router:receive', callback);
  }

  onDisconnection(callback) {
    return this.emitter.on('disconnection', callback);
  }

  onMemberJoin(callback) {
    return this.emitter.on('join', callback);
  }

  onMemberLeave(callback) {
    return this.emitter.on('leave', callback);
  }

  didLoseConnectionToPeer({peerId}) {
    if(!this.connectedMemberIds.has(peerId)) return;

    if(this.isHub) {
      const leaveNotificationMessage = new NetworkMessage.LeaveNotification();
      leaveNotificationMessage.setMemberId(peerId);
      leaveNotificationMessage.setConnectionLost(true);
      const networkMessage = new NetworkMessage();
      networkMessage.setLeaveNotification(leaveNotificationMessage);
      networkMessage.setNetworkId(this.id);

      // TODO: DecNet send networkMessage.serializeBinary to all peers except peerId
    }

    this.memberDidLeave(peerId, true);
  }

  memberDidLeave(peerId, connectionLost) {
    if (peerId === this.hubId) {
      this.hubId = null;
      this.state = 'disconnected';
      this.resetConnectedMembers();
    } else {
      this.connectedMemberIds.delete(peerId);
    }

    this.emitter.emit('leave', {peerId, connectionLost});
  }

  resetConnectedMembers() {
    this.connectedMemberIds.clear();
    this.connectedMemberIds.add(this.userId);
  }


};