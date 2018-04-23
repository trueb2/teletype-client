const os = require('os');
const uuidV1 = require('uuid/v1');
const uuidV4 = require('uuid/v4');
const Portal = require('./portal');
const Errors = require('./errors');
const {Emitter} = require('event-kit');
const NOOP = () => {};
const DEFAULT_TETHER_DISCONNECT_WINDOW = 1000;
const LOCAL_PROTOCOL_VERSION = 69;

module.exports =
class TeletypeClient {
  constructor ({restGateway, connectionTimeout, tetherDisconnectWindow}) {
    this.connectionTimeout = connectionTimeout || 5000;
    this.tetherDisconnectWindow = tetherDisconnectWindow || DEFAULT_TETHER_DISCONNECT_WINDOW;
    this.emitter = new Emitter()
  }

  async initialize () {
    const {ok, body} = await this.restGateway.get('/protocol-version');
    if (ok && body.version > LOCAL_PROTOCOL_VERSION) {
      throw new Errors.ClientOutOfDateError(`This version teletype-client is out of date. The local version is ${LOCAL_PROTOCOL_VERSION} but the remote version is ${body.version}.`)
    }
  }

  dispose () {
  }

  async signIn (oauthToken) {
    // TODO: Start DecNet and connect
    this.signedIn = true;
    this.emitter.emit('sign-in-change');
    return true
  }

  signOut () {
    if (this.signedIn) {
      this.signedIn = false;
      // TODO: Could turn off DecNet
      this.emitter.emit('sign-in-change')
    }

    return true
  }

  isSignedIn () {
    return this.signedIn
  }

  getLocalUserIdentity () {
    // TODO: They return peerPool here. Remove all calls to this
    return '69';
  }

  async createPortal () {
    // TODO: We have to keep portals, so make this work through DecNet
    // let result;
    // try {
    //   result = await this.restGateway.post('/portals', {hostPeerId: this.getClientId()})
    // } catch (error) {
    //   throw new Errors.PortalCreationError('Could not contact server to create your portal')
    // }
    //
    // if (result.ok) {
    //   const {id} = result.body;
    //   const portal = new Portal({
    //     id,
    //     siteId: 1,
    //     peerPool: this.peerPool,
    //     connectionTimeout: this.connectionTimeout,
    //     tetherDisconnectWindow: this.tetherDisconnectWindow
    //   });
    //   await portal.initialize();
    //   this.didCreateOrJoinPortal(portal);
    //
    //   return portal
    // } else if (result.status === 401) {
    //   this.signOut()
    // } else {
    //   throw new Errors.PortalCreationError('A server error occurred while creating your portal')
    // }
    throw new Errors.PortalCreationError('We don\'t know how to do this yet...');
  }

  async joinPortal (id) {
    // TODO: Make this work with whatever we decided with createPortal
    // let result;
    // try {
    //   result = await this.restGateway.get(`/portals/${id}`)
    // } catch (error) {
    //   throw new Errors.PortalJoinError('Could not contact server to join the portal')
    // }
    //
    // if (result.ok) {
    //   const {hostPeerId} = result.body;
    //   const portal = new Portal({
    //     id,
    //     hostPeerId,
    //     peerPool: this.peerPool,
    //     connectionTimeout: this.connectionTimeout,
    //     tetherDisconnectWindow: this.tetherDisconnectWindow
    //   });
    //   await portal.initialize();
    //   await portal.join();
    //   this.didCreateOrJoinPortal(portal);
    //
    //   return portal
    // } else if (result.status === 401) {
    //   this.signOut()
    // } else {
    //   throw new Errors.PortalNotFoundError()
    // }
    throw new Errors.PortalNotFoundError('gg');
  }

  onConnectionError (callback) {
    return this.emitter.on('connection-error', callback)
  }

  onSignInChange (callback) {
    return this.emitter.on('sign-in-change', callback)
  }

  getClientId () {
    // TODO: Do we want to use this for the clientID or just use the userID from DecNet
    if (!this.clientId) {
      const EMPTY_MAC_ADDRESS = '00:00:00:00:00:00';
      const networkInterfaces = os.networkInterfaces();

      let macAddress;
      for (const networkInterfaceName in networkInterfaces) {
        const networkAddress = networkInterfaces[networkInterfaceName][0];
        if (networkAddress && !networkAddress.internal && networkAddress.mac !== EMPTY_MAC_ADDRESS) {
          macAddress = networkAddress.mac;
          break
        }
      }

      if (macAddress) {
        // If we can find a MAC address string, we first transform it into a sequence
        // of bytes. Then, we construct the clientId by concatenating two UUIDs:
        // * A UUIDv1, built using the MAC address so that it is guaranteed to be unique.
        // * A UUIDv4, built using random bytes so that the clientId can't be guessed.
        const macAddressBytes = macAddress.split(':').map((part) => Buffer.from(part, 'hex').readUInt8());
        this.clientId = uuidV1({node: macAddressBytes}) + '.' + uuidV4()
      } else {
        // If no MAC address could be found, generate a completely random clientId with the same format.
        this.clientId = uuidV4() + '.' + uuidV4()
      }
    }

    return this.clientId
  }
};
