const {Emitter, CompositeDisposable, Disposable} = require('event-kit');
const {RouterMessage, NetworkMessage} = require('./teletype-client-pb');
const Errors = require('./errors');
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

  async initialize() {
    // TODO: Make sure that DecNet is up and running
  }


  dispose() {
    this.subscriptions.dispose();
    this.disconnect();
  }

  connectTo(hubId) {
    assert(!this.isHub, 'The hub should only receive connections');
    assert(!this.hubId, 'Can connect to hub only once');

    this.state = 'connecting';
    this.hubId = hubId;
    // TODO: DecNet ping hubId to see if we can communicate with it

    try {
      // TODO: DecNet needs to set the userId to the actual userId
      const joinRequest = new NetworkMessage.JoinRequest({senderId: this.userId});
      const networkMessage = new NetworkMessage({joinRequest, networkId: this.id});
      const buffer = NetworkMessage.encode(networkMessage).finish();
      // TODO: DecNet send buffer to hubId
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

    const leaveNotification = new NetworkMessage.LeaveNotification({
      memberId: this.userId,
      connectionLost: false
    });
    const networkMessage = new NetworkMessage({networkId: this.userId, leaveNotification});
    const buffer = NetworkMessage.encode(networkMessage).finish();

    if(this.isHub) {
      // TODO: DecNet send this to everybody
    } else {
      // TODO: DecNet send buffer to this.hubId
    }

    this.state = 'disconnected';
  }

  unicast(recipientId, message) {
    message = convertToProtobufCompatibleBuffer(message);

    const unicast = new NetworkMessage.Unicast({
      senderId,
      recipientId,
      body: message
    });
    const networkMessage = new NetworkMessage({
      networkId: this.userId,
      unicast
    });
    const buffer = NetworkMessage.encode(networkMessage).finish();

    // TODO: DecNet send networkMessage.serializeBinary to recipientId
  }

  broadcast(message) {
    message = convertToProtobufCompatibleBuffer(message);

    const broadcast = new NetworkMessage.Broadcast({
      senderId: this.userId,
      body: message
    });
    const networkMessage = NetworkMessage({
      networkId: this.userId,
      broadcast
    });
    const buffer = NetworkMessage.encode(networkMessage).finish();

    // TODO: DecNet send networkMessage.serializeBinary to everyone on this network
  }


  receiveRouterMessage({senderId, message}) {
    const routerMessage = RouterMessage.toObject(RouterMessage.decode(message));

    if (routerMessage.notification) {
      this.receiveNotification(senderId, routerMessage.notification);
    } else if (routerMessage.request) {
      this.receiveRequest(senderId, routerMessage.request);
    } else if (routerMessage.response) {
      this.receiveResponse(routerMessage.response);
    } else {
      throw new Error('Unsupported router message variant');
    }
  }

  receiveNotification(senderId, notification) {
    this.lastReceivePromise = this.lastReceivePromise.then(async () => {
      const channelId = notification.channelId
      const body = convertToProtobufCompatibleBuffer(notification.body);
      await this.emitter.emitAsync('notification:' + channelId, {senderId, body});
    });
  }

  receiveRequest(senderId, request) {
    this.lastReceivePromise = this.lastReceivePromise.then(async () => {
      const channelId = request.channelId;
      const requestId = request.requestId;
      const eventName = 'request:' + channelId;
      const body = convertToProtobufCompatibleBuffer(request.body);
      this.peerIdsByRequestId.set(requestId, senderId);

      if (this.emitter.listenerCountForEventName(eventName) === 0) {
        this.respond({requestId, ok: false});
      } else {
        await this.emitter.emitAsync(eventName, {senderId, requestId, body});
      }
    });
  }

  receiveResponse(response) {
    const requestId = response.requestId;
    const requestResolveCallback = this.requestPromiseResolveCallbacks.get(requestId);
    requestResolveCallback({
      body: convertToProtobufCompatibleBuffer(response.body),
      ok: response.ok
    });
  }

  respond({requestId, ok, body}) {
    const recipientId = this.peerIdsByRequestId.get(requestId);
    if(!recipientId) throw new Error('Multiple responses to the same request not allowed');

    if (ok == null) ok = true;
    if (body) body = convertToProtobufCompatibleBuffer(body);

    const response = new RouterMessage.Response({
      requestId,
      ok,
      body
    });
    const routerMessage = new RouterMessage({response});
    const buffer = RouterMessage.encode(routerMessage).finish();

    this.peerIdsByRequestId.delete(requestId);

    // TODO: DecNet send routerMessage.serializeBinary to recipientId
  }

  request({recipientId, channelId, body}) {
    if(body) body = convertToProtobufCompatibleBuffer(body);

    const requestId = this.nextRequestId++;
    const request = new RouterMessage.Request({
      channelId,
      requestId,
      body
    });
    const routerMessage = RouterMessage({
      request
    });
    const buffer = RouterMessage.encode(routerMessage).finish();

    // TODO: DecNet send routerMessage.serializeBinary to recipientId

    return new Promise((resolve) => {
      this.requestPromiseResolveCallbacks.set(requestId, resolve);
    });
  }

  notify({recipientId, channelId, body}) {
    body = convertToProtobufCompatibleBuffer(body);

    const notification = new RouterMessage.Notification({
      channelId,
      body
    });
    const routerMessage = new RouterMessage({
      notification
    });
    const buffer = RouterMessage.encode(routerMessage).finish();

    if(recipientId) {
      // TODO: DecNet send routerMessage.serializeBinary to only recipientId
    } else {
      // TODO: DecNet send routerMessage.serializerBinary to everyone
    }
  }

  receiveNetworkMessage({senderId, message}) {
    if (this.state === 'disconnected') return;

    const networkMessage = NetworkMessage.toObject(NetworkMessage.decode(message));
    if (networkMessage.networkId !== this.id) return;


    if (networkMessage.joinRequest) {
      this.receiveJoinRequest(message, networkMessage.joinRequest);
    } else if (networkMessage.joinResponse) {
      this.receiveJoinResponse(network.joinResponse);
    } else if (networkMessage.joinNotification) {
      this.receiveJoinNotification(networkMessage.joinNotification);
    } else if (networkMessage.leaveNotification) {
      this.receiveLeaveNotification(message, networkMessage.leaveNotification);
    } else if (networkMessage.unicast) {
      this.receiveUnicast(message, networkMessage.unicast);
    } else if (networkMessage.broadcast) {
      this.receiveBroadcast(message, networkMessage.broadcast);
    } else {
      throw new Error('Unknown network message received.');
    }
  }
  
  receiveJoinRequest(rawMessage, joinRequest) {
    assert(this.isHub, 'Join requests should only be sent to the hub');
    const senderId =  joinRequest.senderId;
    
    this.state = 'connected';
    this.connectedMemberIds.add(senderId);
    
    // Respond to new member
    const joinResponse = new NetworkMessage.JoinResponse({
      memberIds: Array.from(this.connectedMemberIds)
    });
    let networkMessage = new NetworkMessage({
      networkId: this.id,
      joinResponse
    });
    let buffer = NetworkMessage.encode(networkMessage).finish();

    // TODO: DecNet send networkMessage.serializeBinary to senderId

    // Notify other members of new member
    const joinNotification = new NetworkMessage.JoinNotification({
      memberId: senderId
    });
    networkMessage = new NetworkMessage({
      networkId: this.userId,
      joinNotification
    });
    buffer = NetworkMessage.encode(networkMessage).finish();

    // TODO: DecNet send notificationNetworkMessage.serializeBinary to everyone but senderId

    this.emitter.emit('join', {peerId: senderId});
  }

  receiveJoinResponse(joinResponse) {
    assert(!this.isHub, 'Connection responses cannot be sent to the hub');

    joinResponse.memberIds.forEach((peerId) => {
      this.connectedMemberIds.add(peerId);
    });

    this.state = 'connected';
    this.resolveConnectionPromise();
    this.resolveConnectionPromise = null;
  }

  receiveJoinNotification(joinNotification) {
    const peerId = joinNotification.memberId;
    this.connectedMemberIds.add(peerId);

    this.emitter.emit('join', {peerId});
  }

  receiveLeaveNotification(rawMessage, leaveNotification) {
    const memberId = leaveNotification.memberId;
    if(!this.connectedMemberIds.has(memberId)) return;

    if(this.isHub) {
      // TODO: broadcast rawMessage to everyone but memberId
    }

    this.memberDidLeave(memberId, leaveNotification.connectionLost);

  }

  receiveUnicast(rawMessage, unicastMessage) {
    const recipientId = unicastMessage.recipientId;
    assert(recipientId === this.userId, 'Unicast should directly send with DecNet');

    this.emitter.emit('network:receive', {
      senderId: unicastMessage.senderId,
      message: convertToProtobufCompatibleBuffer(rawMessage)
    });
  }

  receiveBroadcast(rawMessage, broadcastMessage) {
    const senderId = broadcastMessage.senderId;
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
      const leaveNotification = new NetowrkMessage.LeaveNotification({
        memberId: peerId,
        connectionLost: true
      });
      const networkMessage = new NetworkMessage({
        networkId: this.userId,
        leaveNotification
      });
      const buffer = NetworkMessage.encode(networkMessage).finish();

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

  getMemberIds () {
    return Array.from(this.connectedMemberIds)
  }

  resetConnectedMembers() {
    this.connectedMemberIds.clear();
    this.connectedMemberIds.add(this.userId);
  }


};