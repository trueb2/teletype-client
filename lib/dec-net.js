const {Emitter, CompositeDisposable, Disposable} = require('event-kit');
const {RouterMessage, NetworkMessage} = require('./teletype-client-pb');
const {DecMessage} = require('./decnet-pb');
const {spawn} = require('child_process');
const {createConnection} = require('net');
const Errors = require('./errors');
const convertToProtobufCompatibleBuffer = require('./convert-to-protobuf-compatible-buffer');
const DEFAULT_TIMEOUT = 5000;
const DEFAULT_DECNET_START_PATH = '/home/jwtrueb/git/dec/start.py';
const DEFAULT_DECNET_SOCKET_PATH = '/home/jwtrueb/.dec/aaateletypeRouter/uds_socket';


module.exports =
class DecNet {

  constructor({id, isHub, connectionTimeout, startPath, socketPath}) {
    this.id = id;
    this.isHub = isHub;
    this.connectionTimeout = connectionTimeout || DEFAULT_TIMEOUT;
    this.startPath = startPath || DEFAULT_DECNET_START_PATH;
    this.socketPath = socketPath || DEFAULT_DECNET_SOCKET_PATH;
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

    this.clientSocket = null;
    this.instance = null;
    this.instanceState = 'disconnected';
    this.socketBuffer = Buffer.concat([]);
    this.newSocketMessage = true;
    this.socketMessageLength = 0;

    if(this.isHub) {
      this.state = 'connected';
    } else {
      this.state = 'disconnected';
    }
  }

  async initialize() {
    // TODO: Make sure that DecNet is up and running
    this.instanceState = 'connecting';
    this.instance = spawn('python', [`${this.startPath}`, `--teletype`]);

    this.instance.stdout.on('data', (data) => {
      if (data.contains("Waiting for teletype-client ...")) {
        // TODO: connect to UDS on port
        this.clientSocket = createConnection({path: this.socketPath}, () => {
          // 'connect' listener
          this.instanceState = 'connected';
          this.requestUserID();
        });

        this.clientSocket.on('end', () => {
          this.instanceState = 'disconnected';
          // TODO: kill teletype maybe
        });

        this.clientSocket.on('data', this.receiveWireData.bind(this));
      }

      console.log(`stdout: ${data}`)
    });

    this.instance.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`)
    });

    this.instance.on('close', (code) => {
      console.log(`child process exited with code ${code}`.);
      // TODO: Kill teletype
    });
  }

  receiveWireData(buffer) {
    this.socketBuffer = Buffer.concat([this.socketBuffer, buffer]);
    if (this.newSocketMessage) {
      if (this.socketBuffer.length < 4) return;

      this.socketMessageLength = buffer.readUInt32BE(0);
      this.socketBuffer = this.socketBuffer.slice(4);
      this.newSocketMessage = false;
    }

    if (this.socketBuffer.length >= this.socketMessageLength) {
      const messageBuffer = this.socketBuffer.slice(0,n);
      this.socketBuffer = this.socketBuffer.slice(n);
      this.receiveDecMessage(messageBuffer);
    }

  }

  frameAndSend(decMessage) {
    const messageBuffer = DecMessage.encode(decMessage).finish();
    const lengthBuffer = new Buffer(4);
    lengthBuffer.writeInt32BE(messageBuffer.length, 0);
    const framedBuffer = Buffer.concat([lengthBuffer, messageBuffer]);
    this.clientSocket.write(framedBuffer);

  }

  requestUserID() {
    const userIdRequest = new DecMessage.UserIdRequest({query: 1});
    const decMessage = new DecMessage({userIdRequest});
    this.frameAndSend(decMessage);
  }

  receiveDecMessage(data) {
    const decMessage = DecMessage.toObject(DecMessage.decode(data));

    if(decMessage.userIdResponse) {
      this.receiveUserIdResponse(decMessage.userIdResponse);
    } else if (decMessage.channelSubscriptionResponse) {
      this.receiveChannelSubscriptionResponse(decMessage.channelSubscriptionResponse);
    } else if (decMessage.channelLeaveRequest) {
      this.receiveChannelLeaveRequest(decMessage.channelLeaveRequest);
    } else if (decMessage.channelCloseNotification) {
      this.receiveChannelCloseNotification(decMessage.channelCloseNotification);
    } else if (decMessage.pong) {
      this.receivePong();
    }
  }

  receiveUserIdResponse(userIdResponse) {
    this.userId = userIdResponse.userId;
  }

  receiveChannelSubscriptionResponse(channelSubscriptionResponse) {
    // TODO: one of the methods wanted this info
    const hostId = channelSubscriptionResponse.hostId;
    const peerIds = channelSubscriptionResponse.peerIds;
  }

  receiveChannelLeaveRequest(channelLeaveRequest) {
    // TODO: handle peer leaving
    const peerId = channelLeaveRequest.userId;
    const channelId = channelLeaveRequest.channelId;
  }

  receiveChannelCloseNotification(channelCloseNotification) {
    // TODO: channel host closed channel ie portal closed
    const peerId = channelCloseNotification.userId;
    const channelId = channelCloseNotification.channelId;
  }

  receivePong() {
    this.awaitingPong = false;
    this.resolvePingPromise();
    this.resolvePingPromise = null;
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
    this.awaitingPong = true;
    const decMessage = new DecMessage({ping: new DecMessage.Ping({ping: 1, userId: this.hubId})});
    this.frameAndSend(decMessage);

    const pingTimeout = new Errors.NetworkConnectionError('Pinging hub timed out');
    const timeoutError = new Errors.NetworkConnectionError('Connecting to the portal network timed out');
    const pingPromise = new Promise((resolve, reject) => {
      this.resolvePingPromise = resolve;
      setTimeout(() => {
        if (this.awaitingPong) {
          this.state = 'timeout';
          this.disconnect();
          reject(pingTimeout);
        }
      }, this.connectionTimeout);
    }).then(() => {
      try {
        const joinRequest = new NetworkMessage.JoinRequest({senderId: this.userId});
        const networkMessage = new NetworkMessage({joinRequest, networkId: this.id});
        const decMessage = new DecMessage({networkMessage});
        this.frameAndSend(decMessage);
      } catch(error) {
        this.state = 'disconnected';
        this.hubId = null;
        throw error;
      }
    }).then(() => {
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
    });

    return pingPromise;
  }

  disconnect() {
    if (this.state === 'disconnected') return;

    const leaveNotification = new NetworkMessage.LeaveNotification({
      memberId: this.userId,
      connectionLost: false
    });
    const networkMessage = new NetworkMessage({networkId: this.userId, leaveNotification});

    let decMessage;
    if(this.isHub) {
      decMessage = new DecMessage({broadcast: new DecMessage.Broadcast({networkMessage})});
    } else {
      decMessage = new DecMessage({unicast: new DecMessage.Unicast({userId: this.hubId, networkMessage})});
    }
    this.frameAndSend(decMessage);

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
      networkId: this.id,
      unicast
    });
    this.frameAndSend(networkMessage);
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