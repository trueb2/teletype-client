// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const PortalSubscriptionResponse = $root.PortalSubscriptionResponse = (() => {

    /**
     * Properties of a PortalSubscriptionResponse.
     * @exports IPortalSubscriptionResponse
     * @interface IPortalSubscriptionResponse
     * @property {Object.<string,number>|null} [siteIdsByPeerId] PortalSubscriptionResponse siteIdsByPeerId
     * @property {Array.<ITether>|null} [tethers] PortalSubscriptionResponse tethers
     * @property {Array.<IBufferProxy>|null} [activeBufferProxies] PortalSubscriptionResponse activeBufferProxies
     * @property {Array.<IEditorProxy>|null} [activeEditorProxies] PortalSubscriptionResponse activeEditorProxies
     * @property {Object.<string,number>|null} [activeEditorProxyIdsBySiteId] PortalSubscriptionResponse activeEditorProxyIdsBySiteId
     * @property {Array.<IEditorProxyMetadata>|null} [editorProxiesMetadata] PortalSubscriptionResponse editorProxiesMetadata
     */

    /**
     * Constructs a new PortalSubscriptionResponse.
     * @exports PortalSubscriptionResponse
     * @classdesc Represents a PortalSubscriptionResponse.
     * @implements IPortalSubscriptionResponse
     * @constructor
     * @param {IPortalSubscriptionResponse=} [properties] Properties to set
     */
    function PortalSubscriptionResponse(properties) {
        this.siteIdsByPeerId = {};
        this.tethers = [];
        this.activeBufferProxies = [];
        this.activeEditorProxies = [];
        this.activeEditorProxyIdsBySiteId = {};
        this.editorProxiesMetadata = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PortalSubscriptionResponse siteIdsByPeerId.
     * @member {Object.<string,number>} siteIdsByPeerId
     * @memberof PortalSubscriptionResponse
     * @instance
     */
    PortalSubscriptionResponse.prototype.siteIdsByPeerId = $util.emptyObject;

    /**
     * PortalSubscriptionResponse tethers.
     * @member {Array.<ITether>} tethers
     * @memberof PortalSubscriptionResponse
     * @instance
     */
    PortalSubscriptionResponse.prototype.tethers = $util.emptyArray;

    /**
     * PortalSubscriptionResponse activeBufferProxies.
     * @member {Array.<IBufferProxy>} activeBufferProxies
     * @memberof PortalSubscriptionResponse
     * @instance
     */
    PortalSubscriptionResponse.prototype.activeBufferProxies = $util.emptyArray;

    /**
     * PortalSubscriptionResponse activeEditorProxies.
     * @member {Array.<IEditorProxy>} activeEditorProxies
     * @memberof PortalSubscriptionResponse
     * @instance
     */
    PortalSubscriptionResponse.prototype.activeEditorProxies = $util.emptyArray;

    /**
     * PortalSubscriptionResponse activeEditorProxyIdsBySiteId.
     * @member {Object.<string,number>} activeEditorProxyIdsBySiteId
     * @memberof PortalSubscriptionResponse
     * @instance
     */
    PortalSubscriptionResponse.prototype.activeEditorProxyIdsBySiteId = $util.emptyObject;

    /**
     * PortalSubscriptionResponse editorProxiesMetadata.
     * @member {Array.<IEditorProxyMetadata>} editorProxiesMetadata
     * @memberof PortalSubscriptionResponse
     * @instance
     */
    PortalSubscriptionResponse.prototype.editorProxiesMetadata = $util.emptyArray;

    /**
     * Creates a new PortalSubscriptionResponse instance using the specified properties.
     * @function create
     * @memberof PortalSubscriptionResponse
     * @static
     * @param {IPortalSubscriptionResponse=} [properties] Properties to set
     * @returns {PortalSubscriptionResponse} PortalSubscriptionResponse instance
     */
    PortalSubscriptionResponse.create = function create(properties) {
        return new PortalSubscriptionResponse(properties);
    };

    /**
     * Encodes the specified PortalSubscriptionResponse message. Does not implicitly {@link PortalSubscriptionResponse.verify|verify} messages.
     * @function encode
     * @memberof PortalSubscriptionResponse
     * @static
     * @param {IPortalSubscriptionResponse} message PortalSubscriptionResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PortalSubscriptionResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.siteIdsByPeerId != null && message.hasOwnProperty("siteIdsByPeerId"))
            for (let keys = Object.keys(message.siteIdsByPeerId), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint32(message.siteIdsByPeerId[keys[i]]).ldelim();
        if (message.tethers != null && message.tethers.length)
            for (let i = 0; i < message.tethers.length; ++i)
                $root.Tether.encode(message.tethers[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.activeBufferProxies != null && message.activeBufferProxies.length)
            for (let i = 0; i < message.activeBufferProxies.length; ++i)
                $root.BufferProxy.encode(message.activeBufferProxies[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.activeEditorProxies != null && message.activeEditorProxies.length)
            for (let i = 0; i < message.activeEditorProxies.length; ++i)
                $root.EditorProxy.encode(message.activeEditorProxies[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.activeEditorProxyIdsBySiteId != null && message.hasOwnProperty("activeEditorProxyIdsBySiteId"))
            for (let keys = Object.keys(message.activeEditorProxyIdsBySiteId), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 7, wireType 2 =*/58).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint32(message.activeEditorProxyIdsBySiteId[keys[i]]).ldelim();
        if (message.editorProxiesMetadata != null && message.editorProxiesMetadata.length)
            for (let i = 0; i < message.editorProxiesMetadata.length; ++i)
                $root.EditorProxyMetadata.encode(message.editorProxiesMetadata[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified PortalSubscriptionResponse message, length delimited. Does not implicitly {@link PortalSubscriptionResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PortalSubscriptionResponse
     * @static
     * @param {IPortalSubscriptionResponse} message PortalSubscriptionResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PortalSubscriptionResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PortalSubscriptionResponse message from the specified reader or buffer.
     * @function decode
     * @memberof PortalSubscriptionResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PortalSubscriptionResponse} PortalSubscriptionResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PortalSubscriptionResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PortalSubscriptionResponse(), key;
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                reader.skip().pos++;
                if (message.siteIdsByPeerId === $util.emptyObject)
                    message.siteIdsByPeerId = {};
                key = reader.string();
                reader.pos++;
                message.siteIdsByPeerId[key] = reader.uint32();
                break;
            case 4:
                if (!(message.tethers && message.tethers.length))
                    message.tethers = [];
                message.tethers.push($root.Tether.decode(reader, reader.uint32()));
                break;
            case 5:
                if (!(message.activeBufferProxies && message.activeBufferProxies.length))
                    message.activeBufferProxies = [];
                message.activeBufferProxies.push($root.BufferProxy.decode(reader, reader.uint32()));
                break;
            case 6:
                if (!(message.activeEditorProxies && message.activeEditorProxies.length))
                    message.activeEditorProxies = [];
                message.activeEditorProxies.push($root.EditorProxy.decode(reader, reader.uint32()));
                break;
            case 7:
                reader.skip().pos++;
                if (message.activeEditorProxyIdsBySiteId === $util.emptyObject)
                    message.activeEditorProxyIdsBySiteId = {};
                key = reader.uint32();
                reader.pos++;
                message.activeEditorProxyIdsBySiteId[key] = reader.uint32();
                break;
            case 8:
                if (!(message.editorProxiesMetadata && message.editorProxiesMetadata.length))
                    message.editorProxiesMetadata = [];
                message.editorProxiesMetadata.push($root.EditorProxyMetadata.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PortalSubscriptionResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PortalSubscriptionResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PortalSubscriptionResponse} PortalSubscriptionResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PortalSubscriptionResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PortalSubscriptionResponse message.
     * @function verify
     * @memberof PortalSubscriptionResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PortalSubscriptionResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.siteIdsByPeerId != null && message.hasOwnProperty("siteIdsByPeerId")) {
            if (!$util.isObject(message.siteIdsByPeerId))
                return "siteIdsByPeerId: object expected";
            let key = Object.keys(message.siteIdsByPeerId);
            for (let i = 0; i < key.length; ++i)
                if (!$util.isInteger(message.siteIdsByPeerId[key[i]]))
                    return "siteIdsByPeerId: integer{k:string} expected";
        }
        if (message.tethers != null && message.hasOwnProperty("tethers")) {
            if (!Array.isArray(message.tethers))
                return "tethers: array expected";
            for (let i = 0; i < message.tethers.length; ++i) {
                let error = $root.Tether.verify(message.tethers[i]);
                if (error)
                    return "tethers." + error;
            }
        }
        if (message.activeBufferProxies != null && message.hasOwnProperty("activeBufferProxies")) {
            if (!Array.isArray(message.activeBufferProxies))
                return "activeBufferProxies: array expected";
            for (let i = 0; i < message.activeBufferProxies.length; ++i) {
                let error = $root.BufferProxy.verify(message.activeBufferProxies[i]);
                if (error)
                    return "activeBufferProxies." + error;
            }
        }
        if (message.activeEditorProxies != null && message.hasOwnProperty("activeEditorProxies")) {
            if (!Array.isArray(message.activeEditorProxies))
                return "activeEditorProxies: array expected";
            for (let i = 0; i < message.activeEditorProxies.length; ++i) {
                let error = $root.EditorProxy.verify(message.activeEditorProxies[i]);
                if (error)
                    return "activeEditorProxies." + error;
            }
        }
        if (message.activeEditorProxyIdsBySiteId != null && message.hasOwnProperty("activeEditorProxyIdsBySiteId")) {
            if (!$util.isObject(message.activeEditorProxyIdsBySiteId))
                return "activeEditorProxyIdsBySiteId: object expected";
            let key = Object.keys(message.activeEditorProxyIdsBySiteId);
            for (let i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "activeEditorProxyIdsBySiteId: integer key{k:uint32} expected";
                if (!$util.isInteger(message.activeEditorProxyIdsBySiteId[key[i]]))
                    return "activeEditorProxyIdsBySiteId: integer{k:uint32} expected";
            }
        }
        if (message.editorProxiesMetadata != null && message.hasOwnProperty("editorProxiesMetadata")) {
            if (!Array.isArray(message.editorProxiesMetadata))
                return "editorProxiesMetadata: array expected";
            for (let i = 0; i < message.editorProxiesMetadata.length; ++i) {
                let error = $root.EditorProxyMetadata.verify(message.editorProxiesMetadata[i]);
                if (error)
                    return "editorProxiesMetadata." + error;
            }
        }
        return null;
    };

    /**
     * Creates a PortalSubscriptionResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PortalSubscriptionResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PortalSubscriptionResponse} PortalSubscriptionResponse
     */
    PortalSubscriptionResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.PortalSubscriptionResponse)
            return object;
        let message = new $root.PortalSubscriptionResponse();
        if (object.siteIdsByPeerId) {
            if (typeof object.siteIdsByPeerId !== "object")
                throw TypeError(".PortalSubscriptionResponse.siteIdsByPeerId: object expected");
            message.siteIdsByPeerId = {};
            for (let keys = Object.keys(object.siteIdsByPeerId), i = 0; i < keys.length; ++i)
                message.siteIdsByPeerId[keys[i]] = object.siteIdsByPeerId[keys[i]] >>> 0;
        }
        if (object.tethers) {
            if (!Array.isArray(object.tethers))
                throw TypeError(".PortalSubscriptionResponse.tethers: array expected");
            message.tethers = [];
            for (let i = 0; i < object.tethers.length; ++i) {
                if (typeof object.tethers[i] !== "object")
                    throw TypeError(".PortalSubscriptionResponse.tethers: object expected");
                message.tethers[i] = $root.Tether.fromObject(object.tethers[i]);
            }
        }
        if (object.activeBufferProxies) {
            if (!Array.isArray(object.activeBufferProxies))
                throw TypeError(".PortalSubscriptionResponse.activeBufferProxies: array expected");
            message.activeBufferProxies = [];
            for (let i = 0; i < object.activeBufferProxies.length; ++i) {
                if (typeof object.activeBufferProxies[i] !== "object")
                    throw TypeError(".PortalSubscriptionResponse.activeBufferProxies: object expected");
                message.activeBufferProxies[i] = $root.BufferProxy.fromObject(object.activeBufferProxies[i]);
            }
        }
        if (object.activeEditorProxies) {
            if (!Array.isArray(object.activeEditorProxies))
                throw TypeError(".PortalSubscriptionResponse.activeEditorProxies: array expected");
            message.activeEditorProxies = [];
            for (let i = 0; i < object.activeEditorProxies.length; ++i) {
                if (typeof object.activeEditorProxies[i] !== "object")
                    throw TypeError(".PortalSubscriptionResponse.activeEditorProxies: object expected");
                message.activeEditorProxies[i] = $root.EditorProxy.fromObject(object.activeEditorProxies[i]);
            }
        }
        if (object.activeEditorProxyIdsBySiteId) {
            if (typeof object.activeEditorProxyIdsBySiteId !== "object")
                throw TypeError(".PortalSubscriptionResponse.activeEditorProxyIdsBySiteId: object expected");
            message.activeEditorProxyIdsBySiteId = {};
            for (let keys = Object.keys(object.activeEditorProxyIdsBySiteId), i = 0; i < keys.length; ++i)
                message.activeEditorProxyIdsBySiteId[keys[i]] = object.activeEditorProxyIdsBySiteId[keys[i]] >>> 0;
        }
        if (object.editorProxiesMetadata) {
            if (!Array.isArray(object.editorProxiesMetadata))
                throw TypeError(".PortalSubscriptionResponse.editorProxiesMetadata: array expected");
            message.editorProxiesMetadata = [];
            for (let i = 0; i < object.editorProxiesMetadata.length; ++i) {
                if (typeof object.editorProxiesMetadata[i] !== "object")
                    throw TypeError(".PortalSubscriptionResponse.editorProxiesMetadata: object expected");
                message.editorProxiesMetadata[i] = $root.EditorProxyMetadata.fromObject(object.editorProxiesMetadata[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a PortalSubscriptionResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PortalSubscriptionResponse
     * @static
     * @param {PortalSubscriptionResponse} message PortalSubscriptionResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PortalSubscriptionResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults) {
            object.tethers = [];
            object.activeBufferProxies = [];
            object.activeEditorProxies = [];
            object.editorProxiesMetadata = [];
        }
        if (options.objects || options.defaults) {
            object.siteIdsByPeerId = {};
            object.activeEditorProxyIdsBySiteId = {};
        }
        let keys2;
        if (message.siteIdsByPeerId && (keys2 = Object.keys(message.siteIdsByPeerId)).length) {
            object.siteIdsByPeerId = {};
            for (let j = 0; j < keys2.length; ++j)
                object.siteIdsByPeerId[keys2[j]] = message.siteIdsByPeerId[keys2[j]];
        }
        if (message.tethers && message.tethers.length) {
            object.tethers = [];
            for (let j = 0; j < message.tethers.length; ++j)
                object.tethers[j] = $root.Tether.toObject(message.tethers[j], options);
        }
        if (message.activeBufferProxies && message.activeBufferProxies.length) {
            object.activeBufferProxies = [];
            for (let j = 0; j < message.activeBufferProxies.length; ++j)
                object.activeBufferProxies[j] = $root.BufferProxy.toObject(message.activeBufferProxies[j], options);
        }
        if (message.activeEditorProxies && message.activeEditorProxies.length) {
            object.activeEditorProxies = [];
            for (let j = 0; j < message.activeEditorProxies.length; ++j)
                object.activeEditorProxies[j] = $root.EditorProxy.toObject(message.activeEditorProxies[j], options);
        }
        if (message.activeEditorProxyIdsBySiteId && (keys2 = Object.keys(message.activeEditorProxyIdsBySiteId)).length) {
            object.activeEditorProxyIdsBySiteId = {};
            for (let j = 0; j < keys2.length; ++j)
                object.activeEditorProxyIdsBySiteId[keys2[j]] = message.activeEditorProxyIdsBySiteId[keys2[j]];
        }
        if (message.editorProxiesMetadata && message.editorProxiesMetadata.length) {
            object.editorProxiesMetadata = [];
            for (let j = 0; j < message.editorProxiesMetadata.length; ++j)
                object.editorProxiesMetadata[j] = $root.EditorProxyMetadata.toObject(message.editorProxiesMetadata[j], options);
        }
        return object;
    };

    /**
     * Converts this PortalSubscriptionResponse to JSON.
     * @function toJSON
     * @memberof PortalSubscriptionResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PortalSubscriptionResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PortalSubscriptionResponse;
})();

export const PortalUpdate = $root.PortalUpdate = (() => {

    /**
     * Properties of a PortalUpdate.
     * @exports IPortalUpdate
     * @interface IPortalUpdate
     * @property {PortalUpdate.IEditorProxySwitch|null} [editorProxySwitch] PortalUpdate editorProxySwitch
     * @property {PortalUpdate.ISiteAssignment|null} [siteAssignment] PortalUpdate siteAssignment
     * @property {ITether|null} [tetherUpdate] PortalUpdate tetherUpdate
     * @property {PortalUpdate.IEditorProxyCreation|null} [editorProxyCreation] PortalUpdate editorProxyCreation
     */

    /**
     * Constructs a new PortalUpdate.
     * @exports PortalUpdate
     * @classdesc Represents a PortalUpdate.
     * @implements IPortalUpdate
     * @constructor
     * @param {IPortalUpdate=} [properties] Properties to set
     */
    function PortalUpdate(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PortalUpdate editorProxySwitch.
     * @member {PortalUpdate.IEditorProxySwitch|null|undefined} editorProxySwitch
     * @memberof PortalUpdate
     * @instance
     */
    PortalUpdate.prototype.editorProxySwitch = null;

    /**
     * PortalUpdate siteAssignment.
     * @member {PortalUpdate.ISiteAssignment|null|undefined} siteAssignment
     * @memberof PortalUpdate
     * @instance
     */
    PortalUpdate.prototype.siteAssignment = null;

    /**
     * PortalUpdate tetherUpdate.
     * @member {ITether|null|undefined} tetherUpdate
     * @memberof PortalUpdate
     * @instance
     */
    PortalUpdate.prototype.tetherUpdate = null;

    /**
     * PortalUpdate editorProxyCreation.
     * @member {PortalUpdate.IEditorProxyCreation|null|undefined} editorProxyCreation
     * @memberof PortalUpdate
     * @instance
     */
    PortalUpdate.prototype.editorProxyCreation = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * PortalUpdate variant.
     * @member {"editorProxySwitch"|"siteAssignment"|"tetherUpdate"|"editorProxyCreation"|undefined} variant
     * @memberof PortalUpdate
     * @instance
     */
    Object.defineProperty(PortalUpdate.prototype, "variant", {
        get: $util.oneOfGetter($oneOfFields = ["editorProxySwitch", "siteAssignment", "tetherUpdate", "editorProxyCreation"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new PortalUpdate instance using the specified properties.
     * @function create
     * @memberof PortalUpdate
     * @static
     * @param {IPortalUpdate=} [properties] Properties to set
     * @returns {PortalUpdate} PortalUpdate instance
     */
    PortalUpdate.create = function create(properties) {
        return new PortalUpdate(properties);
    };

    /**
     * Encodes the specified PortalUpdate message. Does not implicitly {@link PortalUpdate.verify|verify} messages.
     * @function encode
     * @memberof PortalUpdate
     * @static
     * @param {IPortalUpdate} message PortalUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PortalUpdate.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.editorProxySwitch != null && message.hasOwnProperty("editorProxySwitch"))
            $root.PortalUpdate.EditorProxySwitch.encode(message.editorProxySwitch, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.siteAssignment != null && message.hasOwnProperty("siteAssignment"))
            $root.PortalUpdate.SiteAssignment.encode(message.siteAssignment, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.tetherUpdate != null && message.hasOwnProperty("tetherUpdate"))
            $root.Tether.encode(message.tetherUpdate, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.editorProxyCreation != null && message.hasOwnProperty("editorProxyCreation"))
            $root.PortalUpdate.EditorProxyCreation.encode(message.editorProxyCreation, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified PortalUpdate message, length delimited. Does not implicitly {@link PortalUpdate.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PortalUpdate
     * @static
     * @param {IPortalUpdate} message PortalUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PortalUpdate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PortalUpdate message from the specified reader or buffer.
     * @function decode
     * @memberof PortalUpdate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PortalUpdate} PortalUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PortalUpdate.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PortalUpdate();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.editorProxySwitch = $root.PortalUpdate.EditorProxySwitch.decode(reader, reader.uint32());
                break;
            case 2:
                message.siteAssignment = $root.PortalUpdate.SiteAssignment.decode(reader, reader.uint32());
                break;
            case 4:
                message.tetherUpdate = $root.Tether.decode(reader, reader.uint32());
                break;
            case 5:
                message.editorProxyCreation = $root.PortalUpdate.EditorProxyCreation.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PortalUpdate message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PortalUpdate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PortalUpdate} PortalUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PortalUpdate.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PortalUpdate message.
     * @function verify
     * @memberof PortalUpdate
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PortalUpdate.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.editorProxySwitch != null && message.hasOwnProperty("editorProxySwitch")) {
            properties.variant = 1;
            {
                let error = $root.PortalUpdate.EditorProxySwitch.verify(message.editorProxySwitch);
                if (error)
                    return "editorProxySwitch." + error;
            }
        }
        if (message.siteAssignment != null && message.hasOwnProperty("siteAssignment")) {
            if (properties.variant === 1)
                return "variant: multiple values";
            properties.variant = 1;
            {
                let error = $root.PortalUpdate.SiteAssignment.verify(message.siteAssignment);
                if (error)
                    return "siteAssignment." + error;
            }
        }
        if (message.tetherUpdate != null && message.hasOwnProperty("tetherUpdate")) {
            if (properties.variant === 1)
                return "variant: multiple values";
            properties.variant = 1;
            {
                let error = $root.Tether.verify(message.tetherUpdate);
                if (error)
                    return "tetherUpdate." + error;
            }
        }
        if (message.editorProxyCreation != null && message.hasOwnProperty("editorProxyCreation")) {
            if (properties.variant === 1)
                return "variant: multiple values";
            properties.variant = 1;
            {
                let error = $root.PortalUpdate.EditorProxyCreation.verify(message.editorProxyCreation);
                if (error)
                    return "editorProxyCreation." + error;
            }
        }
        return null;
    };

    /**
     * Creates a PortalUpdate message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PortalUpdate
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PortalUpdate} PortalUpdate
     */
    PortalUpdate.fromObject = function fromObject(object) {
        if (object instanceof $root.PortalUpdate)
            return object;
        let message = new $root.PortalUpdate();
        if (object.editorProxySwitch != null) {
            if (typeof object.editorProxySwitch !== "object")
                throw TypeError(".PortalUpdate.editorProxySwitch: object expected");
            message.editorProxySwitch = $root.PortalUpdate.EditorProxySwitch.fromObject(object.editorProxySwitch);
        }
        if (object.siteAssignment != null) {
            if (typeof object.siteAssignment !== "object")
                throw TypeError(".PortalUpdate.siteAssignment: object expected");
            message.siteAssignment = $root.PortalUpdate.SiteAssignment.fromObject(object.siteAssignment);
        }
        if (object.tetherUpdate != null) {
            if (typeof object.tetherUpdate !== "object")
                throw TypeError(".PortalUpdate.tetherUpdate: object expected");
            message.tetherUpdate = $root.Tether.fromObject(object.tetherUpdate);
        }
        if (object.editorProxyCreation != null) {
            if (typeof object.editorProxyCreation !== "object")
                throw TypeError(".PortalUpdate.editorProxyCreation: object expected");
            message.editorProxyCreation = $root.PortalUpdate.EditorProxyCreation.fromObject(object.editorProxyCreation);
        }
        return message;
    };

    /**
     * Creates a plain object from a PortalUpdate message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PortalUpdate
     * @static
     * @param {PortalUpdate} message PortalUpdate
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PortalUpdate.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (message.editorProxySwitch != null && message.hasOwnProperty("editorProxySwitch")) {
            object.editorProxySwitch = $root.PortalUpdate.EditorProxySwitch.toObject(message.editorProxySwitch, options);
            if (options.oneofs)
                object.variant = "editorProxySwitch";
        }
        if (message.siteAssignment != null && message.hasOwnProperty("siteAssignment")) {
            object.siteAssignment = $root.PortalUpdate.SiteAssignment.toObject(message.siteAssignment, options);
            if (options.oneofs)
                object.variant = "siteAssignment";
        }
        if (message.tetherUpdate != null && message.hasOwnProperty("tetherUpdate")) {
            object.tetherUpdate = $root.Tether.toObject(message.tetherUpdate, options);
            if (options.oneofs)
                object.variant = "tetherUpdate";
        }
        if (message.editorProxyCreation != null && message.hasOwnProperty("editorProxyCreation")) {
            object.editorProxyCreation = $root.PortalUpdate.EditorProxyCreation.toObject(message.editorProxyCreation, options);
            if (options.oneofs)
                object.variant = "editorProxyCreation";
        }
        return object;
    };

    /**
     * Converts this PortalUpdate to JSON.
     * @function toJSON
     * @memberof PortalUpdate
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PortalUpdate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    PortalUpdate.EditorProxySwitch = (function() {

        /**
         * Properties of an EditorProxySwitch.
         * @memberof PortalUpdate
         * @interface IEditorProxySwitch
         * @property {number|null} [editorProxyId] EditorProxySwitch editorProxyId
         */

        /**
         * Constructs a new EditorProxySwitch.
         * @memberof PortalUpdate
         * @classdesc Represents an EditorProxySwitch.
         * @implements IEditorProxySwitch
         * @constructor
         * @param {PortalUpdate.IEditorProxySwitch=} [properties] Properties to set
         */
        function EditorProxySwitch(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EditorProxySwitch editorProxyId.
         * @member {number} editorProxyId
         * @memberof PortalUpdate.EditorProxySwitch
         * @instance
         */
        EditorProxySwitch.prototype.editorProxyId = 0;

        /**
         * Creates a new EditorProxySwitch instance using the specified properties.
         * @function create
         * @memberof PortalUpdate.EditorProxySwitch
         * @static
         * @param {PortalUpdate.IEditorProxySwitch=} [properties] Properties to set
         * @returns {PortalUpdate.EditorProxySwitch} EditorProxySwitch instance
         */
        EditorProxySwitch.create = function create(properties) {
            return new EditorProxySwitch(properties);
        };

        /**
         * Encodes the specified EditorProxySwitch message. Does not implicitly {@link PortalUpdate.EditorProxySwitch.verify|verify} messages.
         * @function encode
         * @memberof PortalUpdate.EditorProxySwitch
         * @static
         * @param {PortalUpdate.IEditorProxySwitch} message EditorProxySwitch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EditorProxySwitch.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.editorProxyId != null && message.hasOwnProperty("editorProxyId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.editorProxyId);
            return writer;
        };

        /**
         * Encodes the specified EditorProxySwitch message, length delimited. Does not implicitly {@link PortalUpdate.EditorProxySwitch.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PortalUpdate.EditorProxySwitch
         * @static
         * @param {PortalUpdate.IEditorProxySwitch} message EditorProxySwitch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EditorProxySwitch.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EditorProxySwitch message from the specified reader or buffer.
         * @function decode
         * @memberof PortalUpdate.EditorProxySwitch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PortalUpdate.EditorProxySwitch} EditorProxySwitch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EditorProxySwitch.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PortalUpdate.EditorProxySwitch();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.editorProxyId = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EditorProxySwitch message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PortalUpdate.EditorProxySwitch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PortalUpdate.EditorProxySwitch} EditorProxySwitch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EditorProxySwitch.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EditorProxySwitch message.
         * @function verify
         * @memberof PortalUpdate.EditorProxySwitch
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EditorProxySwitch.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.editorProxyId != null && message.hasOwnProperty("editorProxyId"))
                if (!$util.isInteger(message.editorProxyId))
                    return "editorProxyId: integer expected";
            return null;
        };

        /**
         * Creates an EditorProxySwitch message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PortalUpdate.EditorProxySwitch
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PortalUpdate.EditorProxySwitch} EditorProxySwitch
         */
        EditorProxySwitch.fromObject = function fromObject(object) {
            if (object instanceof $root.PortalUpdate.EditorProxySwitch)
                return object;
            let message = new $root.PortalUpdate.EditorProxySwitch();
            if (object.editorProxyId != null)
                message.editorProxyId = object.editorProxyId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an EditorProxySwitch message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PortalUpdate.EditorProxySwitch
         * @static
         * @param {PortalUpdate.EditorProxySwitch} message EditorProxySwitch
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EditorProxySwitch.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.editorProxyId = 0;
            if (message.editorProxyId != null && message.hasOwnProperty("editorProxyId"))
                object.editorProxyId = message.editorProxyId;
            return object;
        };

        /**
         * Converts this EditorProxySwitch to JSON.
         * @function toJSON
         * @memberof PortalUpdate.EditorProxySwitch
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EditorProxySwitch.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EditorProxySwitch;
    })();

    PortalUpdate.SiteAssignment = (function() {

        /**
         * Properties of a SiteAssignment.
         * @memberof PortalUpdate
         * @interface ISiteAssignment
         * @property {string|null} [peerId] SiteAssignment peerId
         * @property {number|null} [siteId] SiteAssignment siteId
         */

        /**
         * Constructs a new SiteAssignment.
         * @memberof PortalUpdate
         * @classdesc Represents a SiteAssignment.
         * @implements ISiteAssignment
         * @constructor
         * @param {PortalUpdate.ISiteAssignment=} [properties] Properties to set
         */
        function SiteAssignment(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SiteAssignment peerId.
         * @member {string} peerId
         * @memberof PortalUpdate.SiteAssignment
         * @instance
         */
        SiteAssignment.prototype.peerId = "";

        /**
         * SiteAssignment siteId.
         * @member {number} siteId
         * @memberof PortalUpdate.SiteAssignment
         * @instance
         */
        SiteAssignment.prototype.siteId = 0;

        /**
         * Creates a new SiteAssignment instance using the specified properties.
         * @function create
         * @memberof PortalUpdate.SiteAssignment
         * @static
         * @param {PortalUpdate.ISiteAssignment=} [properties] Properties to set
         * @returns {PortalUpdate.SiteAssignment} SiteAssignment instance
         */
        SiteAssignment.create = function create(properties) {
            return new SiteAssignment(properties);
        };

        /**
         * Encodes the specified SiteAssignment message. Does not implicitly {@link PortalUpdate.SiteAssignment.verify|verify} messages.
         * @function encode
         * @memberof PortalUpdate.SiteAssignment
         * @static
         * @param {PortalUpdate.ISiteAssignment} message SiteAssignment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SiteAssignment.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.peerId != null && message.hasOwnProperty("peerId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.peerId);
            if (message.siteId != null && message.hasOwnProperty("siteId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.siteId);
            return writer;
        };

        /**
         * Encodes the specified SiteAssignment message, length delimited. Does not implicitly {@link PortalUpdate.SiteAssignment.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PortalUpdate.SiteAssignment
         * @static
         * @param {PortalUpdate.ISiteAssignment} message SiteAssignment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SiteAssignment.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SiteAssignment message from the specified reader or buffer.
         * @function decode
         * @memberof PortalUpdate.SiteAssignment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PortalUpdate.SiteAssignment} SiteAssignment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SiteAssignment.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PortalUpdate.SiteAssignment();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.peerId = reader.string();
                    break;
                case 2:
                    message.siteId = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SiteAssignment message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PortalUpdate.SiteAssignment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PortalUpdate.SiteAssignment} SiteAssignment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SiteAssignment.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SiteAssignment message.
         * @function verify
         * @memberof PortalUpdate.SiteAssignment
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SiteAssignment.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.peerId != null && message.hasOwnProperty("peerId"))
                if (!$util.isString(message.peerId))
                    return "peerId: string expected";
            if (message.siteId != null && message.hasOwnProperty("siteId"))
                if (!$util.isInteger(message.siteId))
                    return "siteId: integer expected";
            return null;
        };

        /**
         * Creates a SiteAssignment message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PortalUpdate.SiteAssignment
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PortalUpdate.SiteAssignment} SiteAssignment
         */
        SiteAssignment.fromObject = function fromObject(object) {
            if (object instanceof $root.PortalUpdate.SiteAssignment)
                return object;
            let message = new $root.PortalUpdate.SiteAssignment();
            if (object.peerId != null)
                message.peerId = String(object.peerId);
            if (object.siteId != null)
                message.siteId = object.siteId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SiteAssignment message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PortalUpdate.SiteAssignment
         * @static
         * @param {PortalUpdate.SiteAssignment} message SiteAssignment
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SiteAssignment.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.peerId = "";
                object.siteId = 0;
            }
            if (message.peerId != null && message.hasOwnProperty("peerId"))
                object.peerId = message.peerId;
            if (message.siteId != null && message.hasOwnProperty("siteId"))
                object.siteId = message.siteId;
            return object;
        };

        /**
         * Converts this SiteAssignment to JSON.
         * @function toJSON
         * @memberof PortalUpdate.SiteAssignment
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SiteAssignment.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SiteAssignment;
    })();

    PortalUpdate.EditorProxyRemoval = (function() {

        /**
         * Properties of an EditorProxyRemoval.
         * @memberof PortalUpdate
         * @interface IEditorProxyRemoval
         * @property {number|null} [editorProxyId] EditorProxyRemoval editorProxyId
         */

        /**
         * Constructs a new EditorProxyRemoval.
         * @memberof PortalUpdate
         * @classdesc Represents an EditorProxyRemoval.
         * @implements IEditorProxyRemoval
         * @constructor
         * @param {PortalUpdate.IEditorProxyRemoval=} [properties] Properties to set
         */
        function EditorProxyRemoval(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EditorProxyRemoval editorProxyId.
         * @member {number} editorProxyId
         * @memberof PortalUpdate.EditorProxyRemoval
         * @instance
         */
        EditorProxyRemoval.prototype.editorProxyId = 0;

        /**
         * Creates a new EditorProxyRemoval instance using the specified properties.
         * @function create
         * @memberof PortalUpdate.EditorProxyRemoval
         * @static
         * @param {PortalUpdate.IEditorProxyRemoval=} [properties] Properties to set
         * @returns {PortalUpdate.EditorProxyRemoval} EditorProxyRemoval instance
         */
        EditorProxyRemoval.create = function create(properties) {
            return new EditorProxyRemoval(properties);
        };

        /**
         * Encodes the specified EditorProxyRemoval message. Does not implicitly {@link PortalUpdate.EditorProxyRemoval.verify|verify} messages.
         * @function encode
         * @memberof PortalUpdate.EditorProxyRemoval
         * @static
         * @param {PortalUpdate.IEditorProxyRemoval} message EditorProxyRemoval message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EditorProxyRemoval.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.editorProxyId != null && message.hasOwnProperty("editorProxyId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.editorProxyId);
            return writer;
        };

        /**
         * Encodes the specified EditorProxyRemoval message, length delimited. Does not implicitly {@link PortalUpdate.EditorProxyRemoval.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PortalUpdate.EditorProxyRemoval
         * @static
         * @param {PortalUpdate.IEditorProxyRemoval} message EditorProxyRemoval message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EditorProxyRemoval.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EditorProxyRemoval message from the specified reader or buffer.
         * @function decode
         * @memberof PortalUpdate.EditorProxyRemoval
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PortalUpdate.EditorProxyRemoval} EditorProxyRemoval
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EditorProxyRemoval.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PortalUpdate.EditorProxyRemoval();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.editorProxyId = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EditorProxyRemoval message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PortalUpdate.EditorProxyRemoval
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PortalUpdate.EditorProxyRemoval} EditorProxyRemoval
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EditorProxyRemoval.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EditorProxyRemoval message.
         * @function verify
         * @memberof PortalUpdate.EditorProxyRemoval
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EditorProxyRemoval.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.editorProxyId != null && message.hasOwnProperty("editorProxyId"))
                if (!$util.isInteger(message.editorProxyId))
                    return "editorProxyId: integer expected";
            return null;
        };

        /**
         * Creates an EditorProxyRemoval message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PortalUpdate.EditorProxyRemoval
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PortalUpdate.EditorProxyRemoval} EditorProxyRemoval
         */
        EditorProxyRemoval.fromObject = function fromObject(object) {
            if (object instanceof $root.PortalUpdate.EditorProxyRemoval)
                return object;
            let message = new $root.PortalUpdate.EditorProxyRemoval();
            if (object.editorProxyId != null)
                message.editorProxyId = object.editorProxyId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an EditorProxyRemoval message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PortalUpdate.EditorProxyRemoval
         * @static
         * @param {PortalUpdate.EditorProxyRemoval} message EditorProxyRemoval
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EditorProxyRemoval.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.editorProxyId = 0;
            if (message.editorProxyId != null && message.hasOwnProperty("editorProxyId"))
                object.editorProxyId = message.editorProxyId;
            return object;
        };

        /**
         * Converts this EditorProxyRemoval to JSON.
         * @function toJSON
         * @memberof PortalUpdate.EditorProxyRemoval
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EditorProxyRemoval.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EditorProxyRemoval;
    })();

    PortalUpdate.EditorProxyCreation = (function() {

        /**
         * Properties of an EditorProxyCreation.
         * @memberof PortalUpdate
         * @interface IEditorProxyCreation
         * @property {IEditorProxyMetadata|null} [editorProxyMetadata] EditorProxyCreation editorProxyMetadata
         */

        /**
         * Constructs a new EditorProxyCreation.
         * @memberof PortalUpdate
         * @classdesc Represents an EditorProxyCreation.
         * @implements IEditorProxyCreation
         * @constructor
         * @param {PortalUpdate.IEditorProxyCreation=} [properties] Properties to set
         */
        function EditorProxyCreation(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EditorProxyCreation editorProxyMetadata.
         * @member {IEditorProxyMetadata|null|undefined} editorProxyMetadata
         * @memberof PortalUpdate.EditorProxyCreation
         * @instance
         */
        EditorProxyCreation.prototype.editorProxyMetadata = null;

        /**
         * Creates a new EditorProxyCreation instance using the specified properties.
         * @function create
         * @memberof PortalUpdate.EditorProxyCreation
         * @static
         * @param {PortalUpdate.IEditorProxyCreation=} [properties] Properties to set
         * @returns {PortalUpdate.EditorProxyCreation} EditorProxyCreation instance
         */
        EditorProxyCreation.create = function create(properties) {
            return new EditorProxyCreation(properties);
        };

        /**
         * Encodes the specified EditorProxyCreation message. Does not implicitly {@link PortalUpdate.EditorProxyCreation.verify|verify} messages.
         * @function encode
         * @memberof PortalUpdate.EditorProxyCreation
         * @static
         * @param {PortalUpdate.IEditorProxyCreation} message EditorProxyCreation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EditorProxyCreation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.editorProxyMetadata != null && message.hasOwnProperty("editorProxyMetadata"))
                $root.EditorProxyMetadata.encode(message.editorProxyMetadata, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EditorProxyCreation message, length delimited. Does not implicitly {@link PortalUpdate.EditorProxyCreation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof PortalUpdate.EditorProxyCreation
         * @static
         * @param {PortalUpdate.IEditorProxyCreation} message EditorProxyCreation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EditorProxyCreation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EditorProxyCreation message from the specified reader or buffer.
         * @function decode
         * @memberof PortalUpdate.EditorProxyCreation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {PortalUpdate.EditorProxyCreation} EditorProxyCreation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EditorProxyCreation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PortalUpdate.EditorProxyCreation();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.editorProxyMetadata = $root.EditorProxyMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EditorProxyCreation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof PortalUpdate.EditorProxyCreation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {PortalUpdate.EditorProxyCreation} EditorProxyCreation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EditorProxyCreation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EditorProxyCreation message.
         * @function verify
         * @memberof PortalUpdate.EditorProxyCreation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EditorProxyCreation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.editorProxyMetadata != null && message.hasOwnProperty("editorProxyMetadata")) {
                let error = $root.EditorProxyMetadata.verify(message.editorProxyMetadata);
                if (error)
                    return "editorProxyMetadata." + error;
            }
            return null;
        };

        /**
         * Creates an EditorProxyCreation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof PortalUpdate.EditorProxyCreation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {PortalUpdate.EditorProxyCreation} EditorProxyCreation
         */
        EditorProxyCreation.fromObject = function fromObject(object) {
            if (object instanceof $root.PortalUpdate.EditorProxyCreation)
                return object;
            let message = new $root.PortalUpdate.EditorProxyCreation();
            if (object.editorProxyMetadata != null) {
                if (typeof object.editorProxyMetadata !== "object")
                    throw TypeError(".PortalUpdate.EditorProxyCreation.editorProxyMetadata: object expected");
                message.editorProxyMetadata = $root.EditorProxyMetadata.fromObject(object.editorProxyMetadata);
            }
            return message;
        };

        /**
         * Creates a plain object from an EditorProxyCreation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof PortalUpdate.EditorProxyCreation
         * @static
         * @param {PortalUpdate.EditorProxyCreation} message EditorProxyCreation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EditorProxyCreation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.editorProxyMetadata = null;
            if (message.editorProxyMetadata != null && message.hasOwnProperty("editorProxyMetadata"))
                object.editorProxyMetadata = $root.EditorProxyMetadata.toObject(message.editorProxyMetadata, options);
            return object;
        };

        /**
         * Converts this EditorProxyCreation to JSON.
         * @function toJSON
         * @memberof PortalUpdate.EditorProxyCreation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EditorProxyCreation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EditorProxyCreation;
    })();

    return PortalUpdate;
})();

export const Tether = $root.Tether = (() => {

    /**
     * Properties of a Tether.
     * @exports ITether
     * @interface ITether
     * @property {number|null} [followerSiteId] Tether followerSiteId
     * @property {number|null} [leaderSiteId] Tether leaderSiteId
     * @property {number|null} [state] Tether state
     */

    /**
     * Constructs a new Tether.
     * @exports Tether
     * @classdesc Represents a Tether.
     * @implements ITether
     * @constructor
     * @param {ITether=} [properties] Properties to set
     */
    function Tether(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Tether followerSiteId.
     * @member {number} followerSiteId
     * @memberof Tether
     * @instance
     */
    Tether.prototype.followerSiteId = 0;

    /**
     * Tether leaderSiteId.
     * @member {number} leaderSiteId
     * @memberof Tether
     * @instance
     */
    Tether.prototype.leaderSiteId = 0;

    /**
     * Tether state.
     * @member {number} state
     * @memberof Tether
     * @instance
     */
    Tether.prototype.state = 0;

    /**
     * Creates a new Tether instance using the specified properties.
     * @function create
     * @memberof Tether
     * @static
     * @param {ITether=} [properties] Properties to set
     * @returns {Tether} Tether instance
     */
    Tether.create = function create(properties) {
        return new Tether(properties);
    };

    /**
     * Encodes the specified Tether message. Does not implicitly {@link Tether.verify|verify} messages.
     * @function encode
     * @memberof Tether
     * @static
     * @param {ITether} message Tether message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Tether.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.followerSiteId != null && message.hasOwnProperty("followerSiteId"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.followerSiteId);
        if (message.leaderSiteId != null && message.hasOwnProperty("leaderSiteId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.leaderSiteId);
        if (message.state != null && message.hasOwnProperty("state"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.state);
        return writer;
    };

    /**
     * Encodes the specified Tether message, length delimited. Does not implicitly {@link Tether.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Tether
     * @static
     * @param {ITether} message Tether message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Tether.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Tether message from the specified reader or buffer.
     * @function decode
     * @memberof Tether
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Tether} Tether
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Tether.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Tether();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.followerSiteId = reader.uint32();
                break;
            case 2:
                message.leaderSiteId = reader.uint32();
                break;
            case 3:
                message.state = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Tether message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Tether
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Tether} Tether
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Tether.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Tether message.
     * @function verify
     * @memberof Tether
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Tether.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.followerSiteId != null && message.hasOwnProperty("followerSiteId"))
            if (!$util.isInteger(message.followerSiteId))
                return "followerSiteId: integer expected";
        if (message.leaderSiteId != null && message.hasOwnProperty("leaderSiteId"))
            if (!$util.isInteger(message.leaderSiteId))
                return "leaderSiteId: integer expected";
        if (message.state != null && message.hasOwnProperty("state"))
            if (!$util.isInteger(message.state))
                return "state: integer expected";
        return null;
    };

    /**
     * Creates a Tether message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Tether
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Tether} Tether
     */
    Tether.fromObject = function fromObject(object) {
        if (object instanceof $root.Tether)
            return object;
        let message = new $root.Tether();
        if (object.followerSiteId != null)
            message.followerSiteId = object.followerSiteId >>> 0;
        if (object.leaderSiteId != null)
            message.leaderSiteId = object.leaderSiteId >>> 0;
        if (object.state != null)
            message.state = object.state >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a Tether message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Tether
     * @static
     * @param {Tether} message Tether
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Tether.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.followerSiteId = 0;
            object.leaderSiteId = 0;
            object.state = 0;
        }
        if (message.followerSiteId != null && message.hasOwnProperty("followerSiteId"))
            object.followerSiteId = message.followerSiteId;
        if (message.leaderSiteId != null && message.hasOwnProperty("leaderSiteId"))
            object.leaderSiteId = message.leaderSiteId;
        if (message.state != null && message.hasOwnProperty("state"))
            object.state = message.state;
        return object;
    };

    /**
     * Converts this Tether to JSON.
     * @function toJSON
     * @memberof Tether
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Tether.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Tether;
})();

export const EditorProxy = $root.EditorProxy = (() => {

    /**
     * Properties of an EditorProxy.
     * @exports IEditorProxy
     * @interface IEditorProxy
     * @property {number|null} [id] EditorProxy id
     * @property {number|null} [bufferProxyId] EditorProxy bufferProxyId
     * @property {Object.<string,number>|null} [selectionLayerIdsBySiteId] EditorProxy selectionLayerIdsBySiteId
     */

    /**
     * Constructs a new EditorProxy.
     * @exports EditorProxy
     * @classdesc Represents an EditorProxy.
     * @implements IEditorProxy
     * @constructor
     * @param {IEditorProxy=} [properties] Properties to set
     */
    function EditorProxy(properties) {
        this.selectionLayerIdsBySiteId = {};
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EditorProxy id.
     * @member {number} id
     * @memberof EditorProxy
     * @instance
     */
    EditorProxy.prototype.id = 0;

    /**
     * EditorProxy bufferProxyId.
     * @member {number} bufferProxyId
     * @memberof EditorProxy
     * @instance
     */
    EditorProxy.prototype.bufferProxyId = 0;

    /**
     * EditorProxy selectionLayerIdsBySiteId.
     * @member {Object.<string,number>} selectionLayerIdsBySiteId
     * @memberof EditorProxy
     * @instance
     */
    EditorProxy.prototype.selectionLayerIdsBySiteId = $util.emptyObject;

    /**
     * Creates a new EditorProxy instance using the specified properties.
     * @function create
     * @memberof EditorProxy
     * @static
     * @param {IEditorProxy=} [properties] Properties to set
     * @returns {EditorProxy} EditorProxy instance
     */
    EditorProxy.create = function create(properties) {
        return new EditorProxy(properties);
    };

    /**
     * Encodes the specified EditorProxy message. Does not implicitly {@link EditorProxy.verify|verify} messages.
     * @function encode
     * @memberof EditorProxy
     * @static
     * @param {IEditorProxy} message EditorProxy message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EditorProxy.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
        if (message.bufferProxyId != null && message.hasOwnProperty("bufferProxyId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.bufferProxyId);
        if (message.selectionLayerIdsBySiteId != null && message.hasOwnProperty("selectionLayerIdsBySiteId"))
            for (let keys = Object.keys(message.selectionLayerIdsBySiteId), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint32(message.selectionLayerIdsBySiteId[keys[i]]).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EditorProxy message, length delimited. Does not implicitly {@link EditorProxy.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EditorProxy
     * @static
     * @param {IEditorProxy} message EditorProxy message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EditorProxy.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EditorProxy message from the specified reader or buffer.
     * @function decode
     * @memberof EditorProxy
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EditorProxy} EditorProxy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EditorProxy.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.EditorProxy(), key;
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.uint32();
                break;
            case 2:
                message.bufferProxyId = reader.uint32();
                break;
            case 3:
                reader.skip().pos++;
                if (message.selectionLayerIdsBySiteId === $util.emptyObject)
                    message.selectionLayerIdsBySiteId = {};
                key = reader.uint32();
                reader.pos++;
                message.selectionLayerIdsBySiteId[key] = reader.uint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EditorProxy message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EditorProxy
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EditorProxy} EditorProxy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EditorProxy.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EditorProxy message.
     * @function verify
     * @memberof EditorProxy
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EditorProxy.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.bufferProxyId != null && message.hasOwnProperty("bufferProxyId"))
            if (!$util.isInteger(message.bufferProxyId))
                return "bufferProxyId: integer expected";
        if (message.selectionLayerIdsBySiteId != null && message.hasOwnProperty("selectionLayerIdsBySiteId")) {
            if (!$util.isObject(message.selectionLayerIdsBySiteId))
                return "selectionLayerIdsBySiteId: object expected";
            let key = Object.keys(message.selectionLayerIdsBySiteId);
            for (let i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "selectionLayerIdsBySiteId: integer key{k:uint32} expected";
                if (!$util.isInteger(message.selectionLayerIdsBySiteId[key[i]]))
                    return "selectionLayerIdsBySiteId: integer{k:uint32} expected";
            }
        }
        return null;
    };

    /**
     * Creates an EditorProxy message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EditorProxy
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EditorProxy} EditorProxy
     */
    EditorProxy.fromObject = function fromObject(object) {
        if (object instanceof $root.EditorProxy)
            return object;
        let message = new $root.EditorProxy();
        if (object.id != null)
            message.id = object.id >>> 0;
        if (object.bufferProxyId != null)
            message.bufferProxyId = object.bufferProxyId >>> 0;
        if (object.selectionLayerIdsBySiteId) {
            if (typeof object.selectionLayerIdsBySiteId !== "object")
                throw TypeError(".EditorProxy.selectionLayerIdsBySiteId: object expected");
            message.selectionLayerIdsBySiteId = {};
            for (let keys = Object.keys(object.selectionLayerIdsBySiteId), i = 0; i < keys.length; ++i)
                message.selectionLayerIdsBySiteId[keys[i]] = object.selectionLayerIdsBySiteId[keys[i]] >>> 0;
        }
        return message;
    };

    /**
     * Creates a plain object from an EditorProxy message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EditorProxy
     * @static
     * @param {EditorProxy} message EditorProxy
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EditorProxy.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.objects || options.defaults)
            object.selectionLayerIdsBySiteId = {};
        if (options.defaults) {
            object.id = 0;
            object.bufferProxyId = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.bufferProxyId != null && message.hasOwnProperty("bufferProxyId"))
            object.bufferProxyId = message.bufferProxyId;
        let keys2;
        if (message.selectionLayerIdsBySiteId && (keys2 = Object.keys(message.selectionLayerIdsBySiteId)).length) {
            object.selectionLayerIdsBySiteId = {};
            for (let j = 0; j < keys2.length; ++j)
                object.selectionLayerIdsBySiteId[keys2[j]] = message.selectionLayerIdsBySiteId[keys2[j]];
        }
        return object;
    };

    /**
     * Converts this EditorProxy to JSON.
     * @function toJSON
     * @memberof EditorProxy
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EditorProxy.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EditorProxy;
})();

export const EditorProxyMetadata = $root.EditorProxyMetadata = (() => {

    /**
     * Properties of an EditorProxyMetadata.
     * @exports IEditorProxyMetadata
     * @interface IEditorProxyMetadata
     * @property {number|null} [id] EditorProxyMetadata id
     * @property {number|null} [bufferProxyId] EditorProxyMetadata bufferProxyId
     * @property {string|null} [bufferProxyUri] EditorProxyMetadata bufferProxyUri
     */

    /**
     * Constructs a new EditorProxyMetadata.
     * @exports EditorProxyMetadata
     * @classdesc Represents an EditorProxyMetadata.
     * @implements IEditorProxyMetadata
     * @constructor
     * @param {IEditorProxyMetadata=} [properties] Properties to set
     */
    function EditorProxyMetadata(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EditorProxyMetadata id.
     * @member {number} id
     * @memberof EditorProxyMetadata
     * @instance
     */
    EditorProxyMetadata.prototype.id = 0;

    /**
     * EditorProxyMetadata bufferProxyId.
     * @member {number} bufferProxyId
     * @memberof EditorProxyMetadata
     * @instance
     */
    EditorProxyMetadata.prototype.bufferProxyId = 0;

    /**
     * EditorProxyMetadata bufferProxyUri.
     * @member {string} bufferProxyUri
     * @memberof EditorProxyMetadata
     * @instance
     */
    EditorProxyMetadata.prototype.bufferProxyUri = "";

    /**
     * Creates a new EditorProxyMetadata instance using the specified properties.
     * @function create
     * @memberof EditorProxyMetadata
     * @static
     * @param {IEditorProxyMetadata=} [properties] Properties to set
     * @returns {EditorProxyMetadata} EditorProxyMetadata instance
     */
    EditorProxyMetadata.create = function create(properties) {
        return new EditorProxyMetadata(properties);
    };

    /**
     * Encodes the specified EditorProxyMetadata message. Does not implicitly {@link EditorProxyMetadata.verify|verify} messages.
     * @function encode
     * @memberof EditorProxyMetadata
     * @static
     * @param {IEditorProxyMetadata} message EditorProxyMetadata message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EditorProxyMetadata.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
        if (message.bufferProxyId != null && message.hasOwnProperty("bufferProxyId"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.bufferProxyId);
        if (message.bufferProxyUri != null && message.hasOwnProperty("bufferProxyUri"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.bufferProxyUri);
        return writer;
    };

    /**
     * Encodes the specified EditorProxyMetadata message, length delimited. Does not implicitly {@link EditorProxyMetadata.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EditorProxyMetadata
     * @static
     * @param {IEditorProxyMetadata} message EditorProxyMetadata message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EditorProxyMetadata.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EditorProxyMetadata message from the specified reader or buffer.
     * @function decode
     * @memberof EditorProxyMetadata
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EditorProxyMetadata} EditorProxyMetadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EditorProxyMetadata.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.EditorProxyMetadata();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.uint32();
                break;
            case 2:
                message.bufferProxyId = reader.uint32();
                break;
            case 3:
                message.bufferProxyUri = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EditorProxyMetadata message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EditorProxyMetadata
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EditorProxyMetadata} EditorProxyMetadata
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EditorProxyMetadata.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EditorProxyMetadata message.
     * @function verify
     * @memberof EditorProxyMetadata
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EditorProxyMetadata.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.bufferProxyId != null && message.hasOwnProperty("bufferProxyId"))
            if (!$util.isInteger(message.bufferProxyId))
                return "bufferProxyId: integer expected";
        if (message.bufferProxyUri != null && message.hasOwnProperty("bufferProxyUri"))
            if (!$util.isString(message.bufferProxyUri))
                return "bufferProxyUri: string expected";
        return null;
    };

    /**
     * Creates an EditorProxyMetadata message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EditorProxyMetadata
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EditorProxyMetadata} EditorProxyMetadata
     */
    EditorProxyMetadata.fromObject = function fromObject(object) {
        if (object instanceof $root.EditorProxyMetadata)
            return object;
        let message = new $root.EditorProxyMetadata();
        if (object.id != null)
            message.id = object.id >>> 0;
        if (object.bufferProxyId != null)
            message.bufferProxyId = object.bufferProxyId >>> 0;
        if (object.bufferProxyUri != null)
            message.bufferProxyUri = String(object.bufferProxyUri);
        return message;
    };

    /**
     * Creates a plain object from an EditorProxyMetadata message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EditorProxyMetadata
     * @static
     * @param {EditorProxyMetadata} message EditorProxyMetadata
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EditorProxyMetadata.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.id = 0;
            object.bufferProxyId = 0;
            object.bufferProxyUri = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.bufferProxyId != null && message.hasOwnProperty("bufferProxyId"))
            object.bufferProxyId = message.bufferProxyId;
        if (message.bufferProxyUri != null && message.hasOwnProperty("bufferProxyUri"))
            object.bufferProxyUri = message.bufferProxyUri;
        return object;
    };

    /**
     * Converts this EditorProxyMetadata to JSON.
     * @function toJSON
     * @memberof EditorProxyMetadata
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EditorProxyMetadata.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return EditorProxyMetadata;
})();

export const EditorProxyUpdate = $root.EditorProxyUpdate = (() => {

    /**
     * Properties of an EditorProxyUpdate.
     * @exports IEditorProxyUpdate
     * @interface IEditorProxyUpdate
     * @property {EditorProxyUpdate.ISelectionsUpdate|null} [selectionsUpdate] EditorProxyUpdate selectionsUpdate
     */

    /**
     * Constructs a new EditorProxyUpdate.
     * @exports EditorProxyUpdate
     * @classdesc Represents an EditorProxyUpdate.
     * @implements IEditorProxyUpdate
     * @constructor
     * @param {IEditorProxyUpdate=} [properties] Properties to set
     */
    function EditorProxyUpdate(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * EditorProxyUpdate selectionsUpdate.
     * @member {EditorProxyUpdate.ISelectionsUpdate|null|undefined} selectionsUpdate
     * @memberof EditorProxyUpdate
     * @instance
     */
    EditorProxyUpdate.prototype.selectionsUpdate = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * EditorProxyUpdate variant.
     * @member {"selectionsUpdate"|undefined} variant
     * @memberof EditorProxyUpdate
     * @instance
     */
    Object.defineProperty(EditorProxyUpdate.prototype, "variant", {
        get: $util.oneOfGetter($oneOfFields = ["selectionsUpdate"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new EditorProxyUpdate instance using the specified properties.
     * @function create
     * @memberof EditorProxyUpdate
     * @static
     * @param {IEditorProxyUpdate=} [properties] Properties to set
     * @returns {EditorProxyUpdate} EditorProxyUpdate instance
     */
    EditorProxyUpdate.create = function create(properties) {
        return new EditorProxyUpdate(properties);
    };

    /**
     * Encodes the specified EditorProxyUpdate message. Does not implicitly {@link EditorProxyUpdate.verify|verify} messages.
     * @function encode
     * @memberof EditorProxyUpdate
     * @static
     * @param {IEditorProxyUpdate} message EditorProxyUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EditorProxyUpdate.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.selectionsUpdate != null && message.hasOwnProperty("selectionsUpdate"))
            $root.EditorProxyUpdate.SelectionsUpdate.encode(message.selectionsUpdate, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified EditorProxyUpdate message, length delimited. Does not implicitly {@link EditorProxyUpdate.verify|verify} messages.
     * @function encodeDelimited
     * @memberof EditorProxyUpdate
     * @static
     * @param {IEditorProxyUpdate} message EditorProxyUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    EditorProxyUpdate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an EditorProxyUpdate message from the specified reader or buffer.
     * @function decode
     * @memberof EditorProxyUpdate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {EditorProxyUpdate} EditorProxyUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EditorProxyUpdate.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.EditorProxyUpdate();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.selectionsUpdate = $root.EditorProxyUpdate.SelectionsUpdate.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an EditorProxyUpdate message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof EditorProxyUpdate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {EditorProxyUpdate} EditorProxyUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    EditorProxyUpdate.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an EditorProxyUpdate message.
     * @function verify
     * @memberof EditorProxyUpdate
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    EditorProxyUpdate.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.selectionsUpdate != null && message.hasOwnProperty("selectionsUpdate")) {
            properties.variant = 1;
            {
                let error = $root.EditorProxyUpdate.SelectionsUpdate.verify(message.selectionsUpdate);
                if (error)
                    return "selectionsUpdate." + error;
            }
        }
        return null;
    };

    /**
     * Creates an EditorProxyUpdate message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof EditorProxyUpdate
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {EditorProxyUpdate} EditorProxyUpdate
     */
    EditorProxyUpdate.fromObject = function fromObject(object) {
        if (object instanceof $root.EditorProxyUpdate)
            return object;
        let message = new $root.EditorProxyUpdate();
        if (object.selectionsUpdate != null) {
            if (typeof object.selectionsUpdate !== "object")
                throw TypeError(".EditorProxyUpdate.selectionsUpdate: object expected");
            message.selectionsUpdate = $root.EditorProxyUpdate.SelectionsUpdate.fromObject(object.selectionsUpdate);
        }
        return message;
    };

    /**
     * Creates a plain object from an EditorProxyUpdate message. Also converts values to other types if specified.
     * @function toObject
     * @memberof EditorProxyUpdate
     * @static
     * @param {EditorProxyUpdate} message EditorProxyUpdate
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    EditorProxyUpdate.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (message.selectionsUpdate != null && message.hasOwnProperty("selectionsUpdate")) {
            object.selectionsUpdate = $root.EditorProxyUpdate.SelectionsUpdate.toObject(message.selectionsUpdate, options);
            if (options.oneofs)
                object.variant = "selectionsUpdate";
        }
        return object;
    };

    /**
     * Converts this EditorProxyUpdate to JSON.
     * @function toJSON
     * @memberof EditorProxyUpdate
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    EditorProxyUpdate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    EditorProxyUpdate.SelectionsUpdate = (function() {

        /**
         * Properties of a SelectionsUpdate.
         * @memberof EditorProxyUpdate
         * @interface ISelectionsUpdate
         * @property {Object.<string,number>|null} [selectionLayerIdsBySiteId] SelectionsUpdate selectionLayerIdsBySiteId
         */

        /**
         * Constructs a new SelectionsUpdate.
         * @memberof EditorProxyUpdate
         * @classdesc Represents a SelectionsUpdate.
         * @implements ISelectionsUpdate
         * @constructor
         * @param {EditorProxyUpdate.ISelectionsUpdate=} [properties] Properties to set
         */
        function SelectionsUpdate(properties) {
            this.selectionLayerIdsBySiteId = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SelectionsUpdate selectionLayerIdsBySiteId.
         * @member {Object.<string,number>} selectionLayerIdsBySiteId
         * @memberof EditorProxyUpdate.SelectionsUpdate
         * @instance
         */
        SelectionsUpdate.prototype.selectionLayerIdsBySiteId = $util.emptyObject;

        /**
         * Creates a new SelectionsUpdate instance using the specified properties.
         * @function create
         * @memberof EditorProxyUpdate.SelectionsUpdate
         * @static
         * @param {EditorProxyUpdate.ISelectionsUpdate=} [properties] Properties to set
         * @returns {EditorProxyUpdate.SelectionsUpdate} SelectionsUpdate instance
         */
        SelectionsUpdate.create = function create(properties) {
            return new SelectionsUpdate(properties);
        };

        /**
         * Encodes the specified SelectionsUpdate message. Does not implicitly {@link EditorProxyUpdate.SelectionsUpdate.verify|verify} messages.
         * @function encode
         * @memberof EditorProxyUpdate.SelectionsUpdate
         * @static
         * @param {EditorProxyUpdate.ISelectionsUpdate} message SelectionsUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelectionsUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.selectionLayerIdsBySiteId != null && message.hasOwnProperty("selectionLayerIdsBySiteId"))
                for (let keys = Object.keys(message.selectionLayerIdsBySiteId), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint32(message.selectionLayerIdsBySiteId[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SelectionsUpdate message, length delimited. Does not implicitly {@link EditorProxyUpdate.SelectionsUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof EditorProxyUpdate.SelectionsUpdate
         * @static
         * @param {EditorProxyUpdate.ISelectionsUpdate} message SelectionsUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SelectionsUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SelectionsUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof EditorProxyUpdate.SelectionsUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {EditorProxyUpdate.SelectionsUpdate} SelectionsUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelectionsUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.EditorProxyUpdate.SelectionsUpdate(), key;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    reader.skip().pos++;
                    if (message.selectionLayerIdsBySiteId === $util.emptyObject)
                        message.selectionLayerIdsBySiteId = {};
                    key = reader.uint32();
                    reader.pos++;
                    message.selectionLayerIdsBySiteId[key] = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SelectionsUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof EditorProxyUpdate.SelectionsUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {EditorProxyUpdate.SelectionsUpdate} SelectionsUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SelectionsUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SelectionsUpdate message.
         * @function verify
         * @memberof EditorProxyUpdate.SelectionsUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SelectionsUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.selectionLayerIdsBySiteId != null && message.hasOwnProperty("selectionLayerIdsBySiteId")) {
                if (!$util.isObject(message.selectionLayerIdsBySiteId))
                    return "selectionLayerIdsBySiteId: object expected";
                let key = Object.keys(message.selectionLayerIdsBySiteId);
                for (let i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "selectionLayerIdsBySiteId: integer key{k:uint32} expected";
                    if (!$util.isInteger(message.selectionLayerIdsBySiteId[key[i]]))
                        return "selectionLayerIdsBySiteId: integer{k:uint32} expected";
                }
            }
            return null;
        };

        /**
         * Creates a SelectionsUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof EditorProxyUpdate.SelectionsUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {EditorProxyUpdate.SelectionsUpdate} SelectionsUpdate
         */
        SelectionsUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.EditorProxyUpdate.SelectionsUpdate)
                return object;
            let message = new $root.EditorProxyUpdate.SelectionsUpdate();
            if (object.selectionLayerIdsBySiteId) {
                if (typeof object.selectionLayerIdsBySiteId !== "object")
                    throw TypeError(".EditorProxyUpdate.SelectionsUpdate.selectionLayerIdsBySiteId: object expected");
                message.selectionLayerIdsBySiteId = {};
                for (let keys = Object.keys(object.selectionLayerIdsBySiteId), i = 0; i < keys.length; ++i)
                    message.selectionLayerIdsBySiteId[keys[i]] = object.selectionLayerIdsBySiteId[keys[i]] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a SelectionsUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof EditorProxyUpdate.SelectionsUpdate
         * @static
         * @param {EditorProxyUpdate.SelectionsUpdate} message SelectionsUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SelectionsUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.selectionLayerIdsBySiteId = {};
            let keys2;
            if (message.selectionLayerIdsBySiteId && (keys2 = Object.keys(message.selectionLayerIdsBySiteId)).length) {
                object.selectionLayerIdsBySiteId = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.selectionLayerIdsBySiteId[keys2[j]] = message.selectionLayerIdsBySiteId[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this SelectionsUpdate to JSON.
         * @function toJSON
         * @memberof EditorProxyUpdate.SelectionsUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SelectionsUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SelectionsUpdate;
    })();

    return EditorProxyUpdate;
})();

export const BufferProxy = $root.BufferProxy = (() => {

    /**
     * Properties of a BufferProxy.
     * @exports IBufferProxy
     * @interface IBufferProxy
     * @property {number|null} [id] BufferProxy id
     * @property {string|null} [uri] BufferProxy uri
     * @property {Array.<IOperation>|null} [operations] BufferProxy operations
     */

    /**
     * Constructs a new BufferProxy.
     * @exports BufferProxy
     * @classdesc Represents a BufferProxy.
     * @implements IBufferProxy
     * @constructor
     * @param {IBufferProxy=} [properties] Properties to set
     */
    function BufferProxy(properties) {
        this.operations = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BufferProxy id.
     * @member {number} id
     * @memberof BufferProxy
     * @instance
     */
    BufferProxy.prototype.id = 0;

    /**
     * BufferProxy uri.
     * @member {string} uri
     * @memberof BufferProxy
     * @instance
     */
    BufferProxy.prototype.uri = "";

    /**
     * BufferProxy operations.
     * @member {Array.<IOperation>} operations
     * @memberof BufferProxy
     * @instance
     */
    BufferProxy.prototype.operations = $util.emptyArray;

    /**
     * Creates a new BufferProxy instance using the specified properties.
     * @function create
     * @memberof BufferProxy
     * @static
     * @param {IBufferProxy=} [properties] Properties to set
     * @returns {BufferProxy} BufferProxy instance
     */
    BufferProxy.create = function create(properties) {
        return new BufferProxy(properties);
    };

    /**
     * Encodes the specified BufferProxy message. Does not implicitly {@link BufferProxy.verify|verify} messages.
     * @function encode
     * @memberof BufferProxy
     * @static
     * @param {IBufferProxy} message BufferProxy message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BufferProxy.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
        if (message.uri != null && message.hasOwnProperty("uri"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.uri);
        if (message.operations != null && message.operations.length)
            for (let i = 0; i < message.operations.length; ++i)
                $root.Operation.encode(message.operations[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified BufferProxy message, length delimited. Does not implicitly {@link BufferProxy.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BufferProxy
     * @static
     * @param {IBufferProxy} message BufferProxy message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BufferProxy.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BufferProxy message from the specified reader or buffer.
     * @function decode
     * @memberof BufferProxy
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BufferProxy} BufferProxy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BufferProxy.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.BufferProxy();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.uint32();
                break;
            case 2:
                message.uri = reader.string();
                break;
            case 3:
                if (!(message.operations && message.operations.length))
                    message.operations = [];
                message.operations.push($root.Operation.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BufferProxy message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BufferProxy
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BufferProxy} BufferProxy
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BufferProxy.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BufferProxy message.
     * @function verify
     * @memberof BufferProxy
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BufferProxy.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.operations != null && message.hasOwnProperty("operations")) {
            if (!Array.isArray(message.operations))
                return "operations: array expected";
            for (let i = 0; i < message.operations.length; ++i) {
                let error = $root.Operation.verify(message.operations[i]);
                if (error)
                    return "operations." + error;
            }
        }
        return null;
    };

    /**
     * Creates a BufferProxy message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BufferProxy
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BufferProxy} BufferProxy
     */
    BufferProxy.fromObject = function fromObject(object) {
        if (object instanceof $root.BufferProxy)
            return object;
        let message = new $root.BufferProxy();
        if (object.id != null)
            message.id = object.id >>> 0;
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.operations) {
            if (!Array.isArray(object.operations))
                throw TypeError(".BufferProxy.operations: array expected");
            message.operations = [];
            for (let i = 0; i < object.operations.length; ++i) {
                if (typeof object.operations[i] !== "object")
                    throw TypeError(".BufferProxy.operations: object expected");
                message.operations[i] = $root.Operation.fromObject(object.operations[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a BufferProxy message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BufferProxy
     * @static
     * @param {BufferProxy} message BufferProxy
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BufferProxy.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.operations = [];
        if (options.defaults) {
            object.id = 0;
            object.uri = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.operations && message.operations.length) {
            object.operations = [];
            for (let j = 0; j < message.operations.length; ++j)
                object.operations[j] = $root.Operation.toObject(message.operations[j], options);
        }
        return object;
    };

    /**
     * Converts this BufferProxy to JSON.
     * @function toJSON
     * @memberof BufferProxy
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BufferProxy.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return BufferProxy;
})();

export const BufferProxyUpdate = $root.BufferProxyUpdate = (() => {

    /**
     * Properties of a BufferProxyUpdate.
     * @exports IBufferProxyUpdate
     * @interface IBufferProxyUpdate
     * @property {BufferProxyUpdate.IOperationsUpdate|null} [operationsUpdate] BufferProxyUpdate operationsUpdate
     * @property {BufferProxyUpdate.IURIUpdate|null} [uriUpdate] BufferProxyUpdate uriUpdate
     */

    /**
     * Constructs a new BufferProxyUpdate.
     * @exports BufferProxyUpdate
     * @classdesc Represents a BufferProxyUpdate.
     * @implements IBufferProxyUpdate
     * @constructor
     * @param {IBufferProxyUpdate=} [properties] Properties to set
     */
    function BufferProxyUpdate(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BufferProxyUpdate operationsUpdate.
     * @member {BufferProxyUpdate.IOperationsUpdate|null|undefined} operationsUpdate
     * @memberof BufferProxyUpdate
     * @instance
     */
    BufferProxyUpdate.prototype.operationsUpdate = null;

    /**
     * BufferProxyUpdate uriUpdate.
     * @member {BufferProxyUpdate.IURIUpdate|null|undefined} uriUpdate
     * @memberof BufferProxyUpdate
     * @instance
     */
    BufferProxyUpdate.prototype.uriUpdate = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * BufferProxyUpdate variant.
     * @member {"operationsUpdate"|"uriUpdate"|undefined} variant
     * @memberof BufferProxyUpdate
     * @instance
     */
    Object.defineProperty(BufferProxyUpdate.prototype, "variant", {
        get: $util.oneOfGetter($oneOfFields = ["operationsUpdate", "uriUpdate"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new BufferProxyUpdate instance using the specified properties.
     * @function create
     * @memberof BufferProxyUpdate
     * @static
     * @param {IBufferProxyUpdate=} [properties] Properties to set
     * @returns {BufferProxyUpdate} BufferProxyUpdate instance
     */
    BufferProxyUpdate.create = function create(properties) {
        return new BufferProxyUpdate(properties);
    };

    /**
     * Encodes the specified BufferProxyUpdate message. Does not implicitly {@link BufferProxyUpdate.verify|verify} messages.
     * @function encode
     * @memberof BufferProxyUpdate
     * @static
     * @param {IBufferProxyUpdate} message BufferProxyUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BufferProxyUpdate.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.operationsUpdate != null && message.hasOwnProperty("operationsUpdate"))
            $root.BufferProxyUpdate.OperationsUpdate.encode(message.operationsUpdate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.uriUpdate != null && message.hasOwnProperty("uriUpdate"))
            $root.BufferProxyUpdate.URIUpdate.encode(message.uriUpdate, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified BufferProxyUpdate message, length delimited. Does not implicitly {@link BufferProxyUpdate.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BufferProxyUpdate
     * @static
     * @param {IBufferProxyUpdate} message BufferProxyUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BufferProxyUpdate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BufferProxyUpdate message from the specified reader or buffer.
     * @function decode
     * @memberof BufferProxyUpdate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BufferProxyUpdate} BufferProxyUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BufferProxyUpdate.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.BufferProxyUpdate();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 2:
                message.operationsUpdate = $root.BufferProxyUpdate.OperationsUpdate.decode(reader, reader.uint32());
                break;
            case 3:
                message.uriUpdate = $root.BufferProxyUpdate.URIUpdate.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BufferProxyUpdate message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BufferProxyUpdate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BufferProxyUpdate} BufferProxyUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BufferProxyUpdate.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BufferProxyUpdate message.
     * @function verify
     * @memberof BufferProxyUpdate
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BufferProxyUpdate.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.operationsUpdate != null && message.hasOwnProperty("operationsUpdate")) {
            properties.variant = 1;
            {
                let error = $root.BufferProxyUpdate.OperationsUpdate.verify(message.operationsUpdate);
                if (error)
                    return "operationsUpdate." + error;
            }
        }
        if (message.uriUpdate != null && message.hasOwnProperty("uriUpdate")) {
            if (properties.variant === 1)
                return "variant: multiple values";
            properties.variant = 1;
            {
                let error = $root.BufferProxyUpdate.URIUpdate.verify(message.uriUpdate);
                if (error)
                    return "uriUpdate." + error;
            }
        }
        return null;
    };

    /**
     * Creates a BufferProxyUpdate message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BufferProxyUpdate
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BufferProxyUpdate} BufferProxyUpdate
     */
    BufferProxyUpdate.fromObject = function fromObject(object) {
        if (object instanceof $root.BufferProxyUpdate)
            return object;
        let message = new $root.BufferProxyUpdate();
        if (object.operationsUpdate != null) {
            if (typeof object.operationsUpdate !== "object")
                throw TypeError(".BufferProxyUpdate.operationsUpdate: object expected");
            message.operationsUpdate = $root.BufferProxyUpdate.OperationsUpdate.fromObject(object.operationsUpdate);
        }
        if (object.uriUpdate != null) {
            if (typeof object.uriUpdate !== "object")
                throw TypeError(".BufferProxyUpdate.uriUpdate: object expected");
            message.uriUpdate = $root.BufferProxyUpdate.URIUpdate.fromObject(object.uriUpdate);
        }
        return message;
    };

    /**
     * Creates a plain object from a BufferProxyUpdate message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BufferProxyUpdate
     * @static
     * @param {BufferProxyUpdate} message BufferProxyUpdate
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BufferProxyUpdate.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (message.operationsUpdate != null && message.hasOwnProperty("operationsUpdate")) {
            object.operationsUpdate = $root.BufferProxyUpdate.OperationsUpdate.toObject(message.operationsUpdate, options);
            if (options.oneofs)
                object.variant = "operationsUpdate";
        }
        if (message.uriUpdate != null && message.hasOwnProperty("uriUpdate")) {
            object.uriUpdate = $root.BufferProxyUpdate.URIUpdate.toObject(message.uriUpdate, options);
            if (options.oneofs)
                object.variant = "uriUpdate";
        }
        return object;
    };

    /**
     * Converts this BufferProxyUpdate to JSON.
     * @function toJSON
     * @memberof BufferProxyUpdate
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BufferProxyUpdate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    BufferProxyUpdate.OperationsUpdate = (function() {

        /**
         * Properties of an OperationsUpdate.
         * @memberof BufferProxyUpdate
         * @interface IOperationsUpdate
         * @property {Array.<IOperation>|null} [operations] OperationsUpdate operations
         */

        /**
         * Constructs a new OperationsUpdate.
         * @memberof BufferProxyUpdate
         * @classdesc Represents an OperationsUpdate.
         * @implements IOperationsUpdate
         * @constructor
         * @param {BufferProxyUpdate.IOperationsUpdate=} [properties] Properties to set
         */
        function OperationsUpdate(properties) {
            this.operations = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OperationsUpdate operations.
         * @member {Array.<IOperation>} operations
         * @memberof BufferProxyUpdate.OperationsUpdate
         * @instance
         */
        OperationsUpdate.prototype.operations = $util.emptyArray;

        /**
         * Creates a new OperationsUpdate instance using the specified properties.
         * @function create
         * @memberof BufferProxyUpdate.OperationsUpdate
         * @static
         * @param {BufferProxyUpdate.IOperationsUpdate=} [properties] Properties to set
         * @returns {BufferProxyUpdate.OperationsUpdate} OperationsUpdate instance
         */
        OperationsUpdate.create = function create(properties) {
            return new OperationsUpdate(properties);
        };

        /**
         * Encodes the specified OperationsUpdate message. Does not implicitly {@link BufferProxyUpdate.OperationsUpdate.verify|verify} messages.
         * @function encode
         * @memberof BufferProxyUpdate.OperationsUpdate
         * @static
         * @param {BufferProxyUpdate.IOperationsUpdate} message OperationsUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperationsUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.operations != null && message.operations.length)
                for (let i = 0; i < message.operations.length; ++i)
                    $root.Operation.encode(message.operations[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified OperationsUpdate message, length delimited. Does not implicitly {@link BufferProxyUpdate.OperationsUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BufferProxyUpdate.OperationsUpdate
         * @static
         * @param {BufferProxyUpdate.IOperationsUpdate} message OperationsUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OperationsUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OperationsUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof BufferProxyUpdate.OperationsUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BufferProxyUpdate.OperationsUpdate} OperationsUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperationsUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.BufferProxyUpdate.OperationsUpdate();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.operations && message.operations.length))
                        message.operations = [];
                    message.operations.push($root.Operation.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OperationsUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BufferProxyUpdate.OperationsUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BufferProxyUpdate.OperationsUpdate} OperationsUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OperationsUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OperationsUpdate message.
         * @function verify
         * @memberof BufferProxyUpdate.OperationsUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OperationsUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.operations != null && message.hasOwnProperty("operations")) {
                if (!Array.isArray(message.operations))
                    return "operations: array expected";
                for (let i = 0; i < message.operations.length; ++i) {
                    let error = $root.Operation.verify(message.operations[i]);
                    if (error)
                        return "operations." + error;
                }
            }
            return null;
        };

        /**
         * Creates an OperationsUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BufferProxyUpdate.OperationsUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BufferProxyUpdate.OperationsUpdate} OperationsUpdate
         */
        OperationsUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.BufferProxyUpdate.OperationsUpdate)
                return object;
            let message = new $root.BufferProxyUpdate.OperationsUpdate();
            if (object.operations) {
                if (!Array.isArray(object.operations))
                    throw TypeError(".BufferProxyUpdate.OperationsUpdate.operations: array expected");
                message.operations = [];
                for (let i = 0; i < object.operations.length; ++i) {
                    if (typeof object.operations[i] !== "object")
                        throw TypeError(".BufferProxyUpdate.OperationsUpdate.operations: object expected");
                    message.operations[i] = $root.Operation.fromObject(object.operations[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an OperationsUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BufferProxyUpdate.OperationsUpdate
         * @static
         * @param {BufferProxyUpdate.OperationsUpdate} message OperationsUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OperationsUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.operations = [];
            if (message.operations && message.operations.length) {
                object.operations = [];
                for (let j = 0; j < message.operations.length; ++j)
                    object.operations[j] = $root.Operation.toObject(message.operations[j], options);
            }
            return object;
        };

        /**
         * Converts this OperationsUpdate to JSON.
         * @function toJSON
         * @memberof BufferProxyUpdate.OperationsUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OperationsUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OperationsUpdate;
    })();

    BufferProxyUpdate.URIUpdate = (function() {

        /**
         * Properties of a URIUpdate.
         * @memberof BufferProxyUpdate
         * @interface IURIUpdate
         * @property {string|null} [uri] URIUpdate uri
         */

        /**
         * Constructs a new URIUpdate.
         * @memberof BufferProxyUpdate
         * @classdesc Represents a URIUpdate.
         * @implements IURIUpdate
         * @constructor
         * @param {BufferProxyUpdate.IURIUpdate=} [properties] Properties to set
         */
        function URIUpdate(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * URIUpdate uri.
         * @member {string} uri
         * @memberof BufferProxyUpdate.URIUpdate
         * @instance
         */
        URIUpdate.prototype.uri = "";

        /**
         * Creates a new URIUpdate instance using the specified properties.
         * @function create
         * @memberof BufferProxyUpdate.URIUpdate
         * @static
         * @param {BufferProxyUpdate.IURIUpdate=} [properties] Properties to set
         * @returns {BufferProxyUpdate.URIUpdate} URIUpdate instance
         */
        URIUpdate.create = function create(properties) {
            return new URIUpdate(properties);
        };

        /**
         * Encodes the specified URIUpdate message. Does not implicitly {@link BufferProxyUpdate.URIUpdate.verify|verify} messages.
         * @function encode
         * @memberof BufferProxyUpdate.URIUpdate
         * @static
         * @param {BufferProxyUpdate.IURIUpdate} message URIUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        URIUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uri != null && message.hasOwnProperty("uri"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
            return writer;
        };

        /**
         * Encodes the specified URIUpdate message, length delimited. Does not implicitly {@link BufferProxyUpdate.URIUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof BufferProxyUpdate.URIUpdate
         * @static
         * @param {BufferProxyUpdate.IURIUpdate} message URIUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        URIUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a URIUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof BufferProxyUpdate.URIUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {BufferProxyUpdate.URIUpdate} URIUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        URIUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.BufferProxyUpdate.URIUpdate();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.uri = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a URIUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof BufferProxyUpdate.URIUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {BufferProxyUpdate.URIUpdate} URIUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        URIUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a URIUpdate message.
         * @function verify
         * @memberof BufferProxyUpdate.URIUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        URIUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uri != null && message.hasOwnProperty("uri"))
                if (!$util.isString(message.uri))
                    return "uri: string expected";
            return null;
        };

        /**
         * Creates a URIUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof BufferProxyUpdate.URIUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {BufferProxyUpdate.URIUpdate} URIUpdate
         */
        URIUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.BufferProxyUpdate.URIUpdate)
                return object;
            let message = new $root.BufferProxyUpdate.URIUpdate();
            if (object.uri != null)
                message.uri = String(object.uri);
            return message;
        };

        /**
         * Creates a plain object from a URIUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof BufferProxyUpdate.URIUpdate
         * @static
         * @param {BufferProxyUpdate.URIUpdate} message URIUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        URIUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.uri = "";
            if (message.uri != null && message.hasOwnProperty("uri"))
                object.uri = message.uri;
            return object;
        };

        /**
         * Converts this URIUpdate to JSON.
         * @function toJSON
         * @memberof BufferProxyUpdate.URIUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        URIUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return URIUpdate;
    })();

    return BufferProxyUpdate;
})();

export const RouterMessage = $root.RouterMessage = (() => {

    /**
     * Properties of a RouterMessage.
     * @exports IRouterMessage
     * @interface IRouterMessage
     * @property {RouterMessage.INotification|null} [notification] RouterMessage notification
     * @property {RouterMessage.IRequest|null} [request] RouterMessage request
     * @property {RouterMessage.IResponse|null} [response] RouterMessage response
     */

    /**
     * Constructs a new RouterMessage.
     * @exports RouterMessage
     * @classdesc Represents a RouterMessage.
     * @implements IRouterMessage
     * @constructor
     * @param {IRouterMessage=} [properties] Properties to set
     */
    function RouterMessage(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RouterMessage notification.
     * @member {RouterMessage.INotification|null|undefined} notification
     * @memberof RouterMessage
     * @instance
     */
    RouterMessage.prototype.notification = null;

    /**
     * RouterMessage request.
     * @member {RouterMessage.IRequest|null|undefined} request
     * @memberof RouterMessage
     * @instance
     */
    RouterMessage.prototype.request = null;

    /**
     * RouterMessage response.
     * @member {RouterMessage.IResponse|null|undefined} response
     * @memberof RouterMessage
     * @instance
     */
    RouterMessage.prototype.response = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * RouterMessage variant.
     * @member {"notification"|"request"|"response"|undefined} variant
     * @memberof RouterMessage
     * @instance
     */
    Object.defineProperty(RouterMessage.prototype, "variant", {
        get: $util.oneOfGetter($oneOfFields = ["notification", "request", "response"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new RouterMessage instance using the specified properties.
     * @function create
     * @memberof RouterMessage
     * @static
     * @param {IRouterMessage=} [properties] Properties to set
     * @returns {RouterMessage} RouterMessage instance
     */
    RouterMessage.create = function create(properties) {
        return new RouterMessage(properties);
    };

    /**
     * Encodes the specified RouterMessage message. Does not implicitly {@link RouterMessage.verify|verify} messages.
     * @function encode
     * @memberof RouterMessage
     * @static
     * @param {IRouterMessage} message RouterMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RouterMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.notification != null && message.hasOwnProperty("notification"))
            $root.RouterMessage.Notification.encode(message.notification, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.request != null && message.hasOwnProperty("request"))
            $root.RouterMessage.Request.encode(message.request, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.response != null && message.hasOwnProperty("response"))
            $root.RouterMessage.Response.encode(message.response, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified RouterMessage message, length delimited. Does not implicitly {@link RouterMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RouterMessage
     * @static
     * @param {IRouterMessage} message RouterMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RouterMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RouterMessage message from the specified reader or buffer.
     * @function decode
     * @memberof RouterMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RouterMessage} RouterMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RouterMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RouterMessage();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 2:
                message.notification = $root.RouterMessage.Notification.decode(reader, reader.uint32());
                break;
            case 3:
                message.request = $root.RouterMessage.Request.decode(reader, reader.uint32());
                break;
            case 4:
                message.response = $root.RouterMessage.Response.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RouterMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RouterMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RouterMessage} RouterMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RouterMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RouterMessage message.
     * @function verify
     * @memberof RouterMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RouterMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.notification != null && message.hasOwnProperty("notification")) {
            properties.variant = 1;
            {
                let error = $root.RouterMessage.Notification.verify(message.notification);
                if (error)
                    return "notification." + error;
            }
        }
        if (message.request != null && message.hasOwnProperty("request")) {
            if (properties.variant === 1)
                return "variant: multiple values";
            properties.variant = 1;
            {
                let error = $root.RouterMessage.Request.verify(message.request);
                if (error)
                    return "request." + error;
            }
        }
        if (message.response != null && message.hasOwnProperty("response")) {
            if (properties.variant === 1)
                return "variant: multiple values";
            properties.variant = 1;
            {
                let error = $root.RouterMessage.Response.verify(message.response);
                if (error)
                    return "response." + error;
            }
        }
        return null;
    };

    /**
     * Creates a RouterMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RouterMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RouterMessage} RouterMessage
     */
    RouterMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.RouterMessage)
            return object;
        let message = new $root.RouterMessage();
        if (object.notification != null) {
            if (typeof object.notification !== "object")
                throw TypeError(".RouterMessage.notification: object expected");
            message.notification = $root.RouterMessage.Notification.fromObject(object.notification);
        }
        if (object.request != null) {
            if (typeof object.request !== "object")
                throw TypeError(".RouterMessage.request: object expected");
            message.request = $root.RouterMessage.Request.fromObject(object.request);
        }
        if (object.response != null) {
            if (typeof object.response !== "object")
                throw TypeError(".RouterMessage.response: object expected");
            message.response = $root.RouterMessage.Response.fromObject(object.response);
        }
        return message;
    };

    /**
     * Creates a plain object from a RouterMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RouterMessage
     * @static
     * @param {RouterMessage} message RouterMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RouterMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (message.notification != null && message.hasOwnProperty("notification")) {
            object.notification = $root.RouterMessage.Notification.toObject(message.notification, options);
            if (options.oneofs)
                object.variant = "notification";
        }
        if (message.request != null && message.hasOwnProperty("request")) {
            object.request = $root.RouterMessage.Request.toObject(message.request, options);
            if (options.oneofs)
                object.variant = "request";
        }
        if (message.response != null && message.hasOwnProperty("response")) {
            object.response = $root.RouterMessage.Response.toObject(message.response, options);
            if (options.oneofs)
                object.variant = "response";
        }
        return object;
    };

    /**
     * Converts this RouterMessage to JSON.
     * @function toJSON
     * @memberof RouterMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RouterMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    RouterMessage.Notification = (function() {

        /**
         * Properties of a Notification.
         * @memberof RouterMessage
         * @interface INotification
         * @property {string|null} [channelId] Notification channelId
         * @property {Uint8Array|null} [body] Notification body
         */

        /**
         * Constructs a new Notification.
         * @memberof RouterMessage
         * @classdesc Represents a Notification.
         * @implements INotification
         * @constructor
         * @param {RouterMessage.INotification=} [properties] Properties to set
         */
        function Notification(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Notification channelId.
         * @member {string} channelId
         * @memberof RouterMessage.Notification
         * @instance
         */
        Notification.prototype.channelId = "";

        /**
         * Notification body.
         * @member {Uint8Array} body
         * @memberof RouterMessage.Notification
         * @instance
         */
        Notification.prototype.body = $util.newBuffer([]);

        /**
         * Creates a new Notification instance using the specified properties.
         * @function create
         * @memberof RouterMessage.Notification
         * @static
         * @param {RouterMessage.INotification=} [properties] Properties to set
         * @returns {RouterMessage.Notification} Notification instance
         */
        Notification.create = function create(properties) {
            return new Notification(properties);
        };

        /**
         * Encodes the specified Notification message. Does not implicitly {@link RouterMessage.Notification.verify|verify} messages.
         * @function encode
         * @memberof RouterMessage.Notification
         * @static
         * @param {RouterMessage.INotification} message Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Notification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.channelId);
            if (message.body != null && message.hasOwnProperty("body"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.body);
            return writer;
        };

        /**
         * Encodes the specified Notification message, length delimited. Does not implicitly {@link RouterMessage.Notification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof RouterMessage.Notification
         * @static
         * @param {RouterMessage.INotification} message Notification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Notification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Notification message from the specified reader or buffer.
         * @function decode
         * @memberof RouterMessage.Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RouterMessage.Notification} Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Notification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RouterMessage.Notification();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
                    break;
                case 2:
                    message.body = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Notification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof RouterMessage.Notification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {RouterMessage.Notification} Notification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Notification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Notification message.
         * @function verify
         * @memberof RouterMessage.Notification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Notification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                if (!$util.isString(message.channelId))
                    return "channelId: string expected";
            if (message.body != null && message.hasOwnProperty("body"))
                if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                    return "body: buffer expected";
            return null;
        };

        /**
         * Creates a Notification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof RouterMessage.Notification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {RouterMessage.Notification} Notification
         */
        Notification.fromObject = function fromObject(object) {
            if (object instanceof $root.RouterMessage.Notification)
                return object;
            let message = new $root.RouterMessage.Notification();
            if (object.channelId != null)
                message.channelId = String(object.channelId);
            if (object.body != null)
                if (typeof object.body === "string")
                    $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
                else if (object.body.length)
                    message.body = object.body;
            return message;
        };

        /**
         * Creates a plain object from a Notification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof RouterMessage.Notification
         * @static
         * @param {RouterMessage.Notification} message Notification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Notification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.channelId = "";
                object.body = options.bytes === String ? "" : [];
            }
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = message.channelId;
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = options.bytes === String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === Array ? Array.prototype.slice.call(message.body) : message.body;
            return object;
        };

        /**
         * Converts this Notification to JSON.
         * @function toJSON
         * @memberof RouterMessage.Notification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Notification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Notification;
    })();

    RouterMessage.Request = (function() {

        /**
         * Properties of a Request.
         * @memberof RouterMessage
         * @interface IRequest
         * @property {string|null} [channelId] Request channelId
         * @property {number|null} [requestId] Request requestId
         * @property {Uint8Array|null} [body] Request body
         */

        /**
         * Constructs a new Request.
         * @memberof RouterMessage
         * @classdesc Represents a Request.
         * @implements IRequest
         * @constructor
         * @param {RouterMessage.IRequest=} [properties] Properties to set
         */
        function Request(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Request channelId.
         * @member {string} channelId
         * @memberof RouterMessage.Request
         * @instance
         */
        Request.prototype.channelId = "";

        /**
         * Request requestId.
         * @member {number} requestId
         * @memberof RouterMessage.Request
         * @instance
         */
        Request.prototype.requestId = 0;

        /**
         * Request body.
         * @member {Uint8Array} body
         * @memberof RouterMessage.Request
         * @instance
         */
        Request.prototype.body = $util.newBuffer([]);

        /**
         * Creates a new Request instance using the specified properties.
         * @function create
         * @memberof RouterMessage.Request
         * @static
         * @param {RouterMessage.IRequest=} [properties] Properties to set
         * @returns {RouterMessage.Request} Request instance
         */
        Request.create = function create(properties) {
            return new Request(properties);
        };

        /**
         * Encodes the specified Request message. Does not implicitly {@link RouterMessage.Request.verify|verify} messages.
         * @function encode
         * @memberof RouterMessage.Request
         * @static
         * @param {RouterMessage.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.channelId);
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.requestId);
            if (message.body != null && message.hasOwnProperty("body"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.body);
            return writer;
        };

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link RouterMessage.Request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof RouterMessage.Request
         * @static
         * @param {RouterMessage.IRequest} message Request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @function decode
         * @memberof RouterMessage.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RouterMessage.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RouterMessage.Request();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.channelId = reader.string();
                    break;
                case 2:
                    message.requestId = reader.uint32();
                    break;
                case 3:
                    message.body = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof RouterMessage.Request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {RouterMessage.Request} Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Request message.
         * @function verify
         * @memberof RouterMessage.Request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                if (!$util.isString(message.channelId))
                    return "channelId: string expected";
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                if (!$util.isInteger(message.requestId))
                    return "requestId: integer expected";
            if (message.body != null && message.hasOwnProperty("body"))
                if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                    return "body: buffer expected";
            return null;
        };

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof RouterMessage.Request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {RouterMessage.Request} Request
         */
        Request.fromObject = function fromObject(object) {
            if (object instanceof $root.RouterMessage.Request)
                return object;
            let message = new $root.RouterMessage.Request();
            if (object.channelId != null)
                message.channelId = String(object.channelId);
            if (object.requestId != null)
                message.requestId = object.requestId >>> 0;
            if (object.body != null)
                if (typeof object.body === "string")
                    $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
                else if (object.body.length)
                    message.body = object.body;
            return message;
        };

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof RouterMessage.Request
         * @static
         * @param {RouterMessage.Request} message Request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.channelId = "";
                object.requestId = 0;
                object.body = options.bytes === String ? "" : [];
            }
            if (message.channelId != null && message.hasOwnProperty("channelId"))
                object.channelId = message.channelId;
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                object.requestId = message.requestId;
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = options.bytes === String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === Array ? Array.prototype.slice.call(message.body) : message.body;
            return object;
        };

        /**
         * Converts this Request to JSON.
         * @function toJSON
         * @memberof RouterMessage.Request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Request;
    })();

    RouterMessage.Response = (function() {

        /**
         * Properties of a Response.
         * @memberof RouterMessage
         * @interface IResponse
         * @property {number|null} [requestId] Response requestId
         * @property {Uint8Array|null} [body] Response body
         * @property {boolean|null} [ok] Response ok
         */

        /**
         * Constructs a new Response.
         * @memberof RouterMessage
         * @classdesc Represents a Response.
         * @implements IResponse
         * @constructor
         * @param {RouterMessage.IResponse=} [properties] Properties to set
         */
        function Response(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Response requestId.
         * @member {number} requestId
         * @memberof RouterMessage.Response
         * @instance
         */
        Response.prototype.requestId = 0;

        /**
         * Response body.
         * @member {Uint8Array} body
         * @memberof RouterMessage.Response
         * @instance
         */
        Response.prototype.body = $util.newBuffer([]);

        /**
         * Response ok.
         * @member {boolean} ok
         * @memberof RouterMessage.Response
         * @instance
         */
        Response.prototype.ok = false;

        /**
         * Creates a new Response instance using the specified properties.
         * @function create
         * @memberof RouterMessage.Response
         * @static
         * @param {RouterMessage.IResponse=} [properties] Properties to set
         * @returns {RouterMessage.Response} Response instance
         */
        Response.create = function create(properties) {
            return new Response(properties);
        };

        /**
         * Encodes the specified Response message. Does not implicitly {@link RouterMessage.Response.verify|verify} messages.
         * @function encode
         * @memberof RouterMessage.Response
         * @static
         * @param {RouterMessage.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.requestId);
            if (message.body != null && message.hasOwnProperty("body"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.body);
            if (message.ok != null && message.hasOwnProperty("ok"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.ok);
            return writer;
        };

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link RouterMessage.Response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof RouterMessage.Response
         * @static
         * @param {RouterMessage.IResponse} message Response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @function decode
         * @memberof RouterMessage.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {RouterMessage.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RouterMessage.Response();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.requestId = reader.uint32();
                    break;
                case 2:
                    message.body = reader.bytes();
                    break;
                case 3:
                    message.ok = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof RouterMessage.Response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {RouterMessage.Response} Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Response message.
         * @function verify
         * @memberof RouterMessage.Response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                if (!$util.isInteger(message.requestId))
                    return "requestId: integer expected";
            if (message.body != null && message.hasOwnProperty("body"))
                if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                    return "body: buffer expected";
            if (message.ok != null && message.hasOwnProperty("ok"))
                if (typeof message.ok !== "boolean")
                    return "ok: boolean expected";
            return null;
        };

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof RouterMessage.Response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {RouterMessage.Response} Response
         */
        Response.fromObject = function fromObject(object) {
            if (object instanceof $root.RouterMessage.Response)
                return object;
            let message = new $root.RouterMessage.Response();
            if (object.requestId != null)
                message.requestId = object.requestId >>> 0;
            if (object.body != null)
                if (typeof object.body === "string")
                    $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
                else if (object.body.length)
                    message.body = object.body;
            if (object.ok != null)
                message.ok = Boolean(object.ok);
            return message;
        };

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof RouterMessage.Response
         * @static
         * @param {RouterMessage.Response} message Response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.requestId = 0;
                object.body = options.bytes === String ? "" : [];
                object.ok = false;
            }
            if (message.requestId != null && message.hasOwnProperty("requestId"))
                object.requestId = message.requestId;
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = options.bytes === String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === Array ? Array.prototype.slice.call(message.body) : message.body;
            if (message.ok != null && message.hasOwnProperty("ok"))
                object.ok = message.ok;
            return object;
        };

        /**
         * Converts this Response to JSON.
         * @function toJSON
         * @memberof RouterMessage.Response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Response;
    })();

    return RouterMessage;
})();

export const NetworkMessage = $root.NetworkMessage = (() => {

    /**
     * Properties of a NetworkMessage.
     * @exports INetworkMessage
     * @interface INetworkMessage
     * @property {string|null} [networkId] NetworkMessage networkId
     * @property {NetworkMessage.IJoinRequest|null} [joinRequest] NetworkMessage joinRequest
     * @property {NetworkMessage.IJoinResponse|null} [joinResponse] NetworkMessage joinResponse
     * @property {NetworkMessage.IJoinNotification|null} [joinNotification] NetworkMessage joinNotification
     * @property {NetworkMessage.ILeaveNotification|null} [leaveNotification] NetworkMessage leaveNotification
     * @property {NetworkMessage.IUnicast|null} [unicast] NetworkMessage unicast
     * @property {NetworkMessage.IBroadcast|null} [broadcast] NetworkMessage broadcast
     */

    /**
     * Constructs a new NetworkMessage.
     * @exports NetworkMessage
     * @classdesc Represents a NetworkMessage.
     * @implements INetworkMessage
     * @constructor
     * @param {INetworkMessage=} [properties] Properties to set
     */
    function NetworkMessage(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NetworkMessage networkId.
     * @member {string} networkId
     * @memberof NetworkMessage
     * @instance
     */
    NetworkMessage.prototype.networkId = "";

    /**
     * NetworkMessage joinRequest.
     * @member {NetworkMessage.IJoinRequest|null|undefined} joinRequest
     * @memberof NetworkMessage
     * @instance
     */
    NetworkMessage.prototype.joinRequest = null;

    /**
     * NetworkMessage joinResponse.
     * @member {NetworkMessage.IJoinResponse|null|undefined} joinResponse
     * @memberof NetworkMessage
     * @instance
     */
    NetworkMessage.prototype.joinResponse = null;

    /**
     * NetworkMessage joinNotification.
     * @member {NetworkMessage.IJoinNotification|null|undefined} joinNotification
     * @memberof NetworkMessage
     * @instance
     */
    NetworkMessage.prototype.joinNotification = null;

    /**
     * NetworkMessage leaveNotification.
     * @member {NetworkMessage.ILeaveNotification|null|undefined} leaveNotification
     * @memberof NetworkMessage
     * @instance
     */
    NetworkMessage.prototype.leaveNotification = null;

    /**
     * NetworkMessage unicast.
     * @member {NetworkMessage.IUnicast|null|undefined} unicast
     * @memberof NetworkMessage
     * @instance
     */
    NetworkMessage.prototype.unicast = null;

    /**
     * NetworkMessage broadcast.
     * @member {NetworkMessage.IBroadcast|null|undefined} broadcast
     * @memberof NetworkMessage
     * @instance
     */
    NetworkMessage.prototype.broadcast = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * NetworkMessage variant.
     * @member {"joinRequest"|"joinResponse"|"joinNotification"|"leaveNotification"|"unicast"|"broadcast"|undefined} variant
     * @memberof NetworkMessage
     * @instance
     */
    Object.defineProperty(NetworkMessage.prototype, "variant", {
        get: $util.oneOfGetter($oneOfFields = ["joinRequest", "joinResponse", "joinNotification", "leaveNotification", "unicast", "broadcast"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new NetworkMessage instance using the specified properties.
     * @function create
     * @memberof NetworkMessage
     * @static
     * @param {INetworkMessage=} [properties] Properties to set
     * @returns {NetworkMessage} NetworkMessage instance
     */
    NetworkMessage.create = function create(properties) {
        return new NetworkMessage(properties);
    };

    /**
     * Encodes the specified NetworkMessage message. Does not implicitly {@link NetworkMessage.verify|verify} messages.
     * @function encode
     * @memberof NetworkMessage
     * @static
     * @param {INetworkMessage} message NetworkMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NetworkMessage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.networkId != null && message.hasOwnProperty("networkId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.networkId);
        if (message.joinRequest != null && message.hasOwnProperty("joinRequest"))
            $root.NetworkMessage.JoinRequest.encode(message.joinRequest, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.joinResponse != null && message.hasOwnProperty("joinResponse"))
            $root.NetworkMessage.JoinResponse.encode(message.joinResponse, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.joinNotification != null && message.hasOwnProperty("joinNotification"))
            $root.NetworkMessage.JoinNotification.encode(message.joinNotification, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.leaveNotification != null && message.hasOwnProperty("leaveNotification"))
            $root.NetworkMessage.LeaveNotification.encode(message.leaveNotification, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.unicast != null && message.hasOwnProperty("unicast"))
            $root.NetworkMessage.Unicast.encode(message.unicast, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.broadcast != null && message.hasOwnProperty("broadcast"))
            $root.NetworkMessage.Broadcast.encode(message.broadcast, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified NetworkMessage message, length delimited. Does not implicitly {@link NetworkMessage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NetworkMessage
     * @static
     * @param {INetworkMessage} message NetworkMessage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NetworkMessage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NetworkMessage message from the specified reader or buffer.
     * @function decode
     * @memberof NetworkMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NetworkMessage} NetworkMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NetworkMessage.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NetworkMessage();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.networkId = reader.string();
                break;
            case 2:
                message.joinRequest = $root.NetworkMessage.JoinRequest.decode(reader, reader.uint32());
                break;
            case 3:
                message.joinResponse = $root.NetworkMessage.JoinResponse.decode(reader, reader.uint32());
                break;
            case 4:
                message.joinNotification = $root.NetworkMessage.JoinNotification.decode(reader, reader.uint32());
                break;
            case 5:
                message.leaveNotification = $root.NetworkMessage.LeaveNotification.decode(reader, reader.uint32());
                break;
            case 6:
                message.unicast = $root.NetworkMessage.Unicast.decode(reader, reader.uint32());
                break;
            case 7:
                message.broadcast = $root.NetworkMessage.Broadcast.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NetworkMessage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NetworkMessage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NetworkMessage} NetworkMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NetworkMessage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NetworkMessage message.
     * @function verify
     * @memberof NetworkMessage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NetworkMessage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.networkId != null && message.hasOwnProperty("networkId"))
            if (!$util.isString(message.networkId))
                return "networkId: string expected";
        if (message.joinRequest != null && message.hasOwnProperty("joinRequest")) {
            properties.variant = 1;
            {
                let error = $root.NetworkMessage.JoinRequest.verify(message.joinRequest);
                if (error)
                    return "joinRequest." + error;
            }
        }
        if (message.joinResponse != null && message.hasOwnProperty("joinResponse")) {
            if (properties.variant === 1)
                return "variant: multiple values";
            properties.variant = 1;
            {
                let error = $root.NetworkMessage.JoinResponse.verify(message.joinResponse);
                if (error)
                    return "joinResponse." + error;
            }
        }
        if (message.joinNotification != null && message.hasOwnProperty("joinNotification")) {
            if (properties.variant === 1)
                return "variant: multiple values";
            properties.variant = 1;
            {
                let error = $root.NetworkMessage.JoinNotification.verify(message.joinNotification);
                if (error)
                    return "joinNotification." + error;
            }
        }
        if (message.leaveNotification != null && message.hasOwnProperty("leaveNotification")) {
            if (properties.variant === 1)
                return "variant: multiple values";
            properties.variant = 1;
            {
                let error = $root.NetworkMessage.LeaveNotification.verify(message.leaveNotification);
                if (error)
                    return "leaveNotification." + error;
            }
        }
        if (message.unicast != null && message.hasOwnProperty("unicast")) {
            if (properties.variant === 1)
                return "variant: multiple values";
            properties.variant = 1;
            {
                let error = $root.NetworkMessage.Unicast.verify(message.unicast);
                if (error)
                    return "unicast." + error;
            }
        }
        if (message.broadcast != null && message.hasOwnProperty("broadcast")) {
            if (properties.variant === 1)
                return "variant: multiple values";
            properties.variant = 1;
            {
                let error = $root.NetworkMessage.Broadcast.verify(message.broadcast);
                if (error)
                    return "broadcast." + error;
            }
        }
        return null;
    };

    /**
     * Creates a NetworkMessage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NetworkMessage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NetworkMessage} NetworkMessage
     */
    NetworkMessage.fromObject = function fromObject(object) {
        if (object instanceof $root.NetworkMessage)
            return object;
        let message = new $root.NetworkMessage();
        if (object.networkId != null)
            message.networkId = String(object.networkId);
        if (object.joinRequest != null) {
            if (typeof object.joinRequest !== "object")
                throw TypeError(".NetworkMessage.joinRequest: object expected");
            message.joinRequest = $root.NetworkMessage.JoinRequest.fromObject(object.joinRequest);
        }
        if (object.joinResponse != null) {
            if (typeof object.joinResponse !== "object")
                throw TypeError(".NetworkMessage.joinResponse: object expected");
            message.joinResponse = $root.NetworkMessage.JoinResponse.fromObject(object.joinResponse);
        }
        if (object.joinNotification != null) {
            if (typeof object.joinNotification !== "object")
                throw TypeError(".NetworkMessage.joinNotification: object expected");
            message.joinNotification = $root.NetworkMessage.JoinNotification.fromObject(object.joinNotification);
        }
        if (object.leaveNotification != null) {
            if (typeof object.leaveNotification !== "object")
                throw TypeError(".NetworkMessage.leaveNotification: object expected");
            message.leaveNotification = $root.NetworkMessage.LeaveNotification.fromObject(object.leaveNotification);
        }
        if (object.unicast != null) {
            if (typeof object.unicast !== "object")
                throw TypeError(".NetworkMessage.unicast: object expected");
            message.unicast = $root.NetworkMessage.Unicast.fromObject(object.unicast);
        }
        if (object.broadcast != null) {
            if (typeof object.broadcast !== "object")
                throw TypeError(".NetworkMessage.broadcast: object expected");
            message.broadcast = $root.NetworkMessage.Broadcast.fromObject(object.broadcast);
        }
        return message;
    };

    /**
     * Creates a plain object from a NetworkMessage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NetworkMessage
     * @static
     * @param {NetworkMessage} message NetworkMessage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NetworkMessage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.networkId = "";
        if (message.networkId != null && message.hasOwnProperty("networkId"))
            object.networkId = message.networkId;
        if (message.joinRequest != null && message.hasOwnProperty("joinRequest")) {
            object.joinRequest = $root.NetworkMessage.JoinRequest.toObject(message.joinRequest, options);
            if (options.oneofs)
                object.variant = "joinRequest";
        }
        if (message.joinResponse != null && message.hasOwnProperty("joinResponse")) {
            object.joinResponse = $root.NetworkMessage.JoinResponse.toObject(message.joinResponse, options);
            if (options.oneofs)
                object.variant = "joinResponse";
        }
        if (message.joinNotification != null && message.hasOwnProperty("joinNotification")) {
            object.joinNotification = $root.NetworkMessage.JoinNotification.toObject(message.joinNotification, options);
            if (options.oneofs)
                object.variant = "joinNotification";
        }
        if (message.leaveNotification != null && message.hasOwnProperty("leaveNotification")) {
            object.leaveNotification = $root.NetworkMessage.LeaveNotification.toObject(message.leaveNotification, options);
            if (options.oneofs)
                object.variant = "leaveNotification";
        }
        if (message.unicast != null && message.hasOwnProperty("unicast")) {
            object.unicast = $root.NetworkMessage.Unicast.toObject(message.unicast, options);
            if (options.oneofs)
                object.variant = "unicast";
        }
        if (message.broadcast != null && message.hasOwnProperty("broadcast")) {
            object.broadcast = $root.NetworkMessage.Broadcast.toObject(message.broadcast, options);
            if (options.oneofs)
                object.variant = "broadcast";
        }
        return object;
    };

    /**
     * Converts this NetworkMessage to JSON.
     * @function toJSON
     * @memberof NetworkMessage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NetworkMessage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    NetworkMessage.JoinRequest = (function() {

        /**
         * Properties of a JoinRequest.
         * @memberof NetworkMessage
         * @interface IJoinRequest
         * @property {string|null} [senderId] JoinRequest senderId
         */

        /**
         * Constructs a new JoinRequest.
         * @memberof NetworkMessage
         * @classdesc Represents a JoinRequest.
         * @implements IJoinRequest
         * @constructor
         * @param {NetworkMessage.IJoinRequest=} [properties] Properties to set
         */
        function JoinRequest(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinRequest senderId.
         * @member {string} senderId
         * @memberof NetworkMessage.JoinRequest
         * @instance
         */
        JoinRequest.prototype.senderId = "";

        /**
         * Creates a new JoinRequest instance using the specified properties.
         * @function create
         * @memberof NetworkMessage.JoinRequest
         * @static
         * @param {NetworkMessage.IJoinRequest=} [properties] Properties to set
         * @returns {NetworkMessage.JoinRequest} JoinRequest instance
         */
        JoinRequest.create = function create(properties) {
            return new JoinRequest(properties);
        };

        /**
         * Encodes the specified JoinRequest message. Does not implicitly {@link NetworkMessage.JoinRequest.verify|verify} messages.
         * @function encode
         * @memberof NetworkMessage.JoinRequest
         * @static
         * @param {NetworkMessage.IJoinRequest} message JoinRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.senderId != null && message.hasOwnProperty("senderId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.senderId);
            return writer;
        };

        /**
         * Encodes the specified JoinRequest message, length delimited. Does not implicitly {@link NetworkMessage.JoinRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NetworkMessage.JoinRequest
         * @static
         * @param {NetworkMessage.IJoinRequest} message JoinRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinRequest message from the specified reader or buffer.
         * @function decode
         * @memberof NetworkMessage.JoinRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NetworkMessage.JoinRequest} JoinRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NetworkMessage.JoinRequest();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.senderId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NetworkMessage.JoinRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NetworkMessage.JoinRequest} JoinRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinRequest message.
         * @function verify
         * @memberof NetworkMessage.JoinRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.senderId != null && message.hasOwnProperty("senderId"))
                if (!$util.isString(message.senderId))
                    return "senderId: string expected";
            return null;
        };

        /**
         * Creates a JoinRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NetworkMessage.JoinRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NetworkMessage.JoinRequest} JoinRequest
         */
        JoinRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.NetworkMessage.JoinRequest)
                return object;
            let message = new $root.NetworkMessage.JoinRequest();
            if (object.senderId != null)
                message.senderId = String(object.senderId);
            return message;
        };

        /**
         * Creates a plain object from a JoinRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NetworkMessage.JoinRequest
         * @static
         * @param {NetworkMessage.JoinRequest} message JoinRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.senderId = "";
            if (message.senderId != null && message.hasOwnProperty("senderId"))
                object.senderId = message.senderId;
            return object;
        };

        /**
         * Converts this JoinRequest to JSON.
         * @function toJSON
         * @memberof NetworkMessage.JoinRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinRequest;
    })();

    NetworkMessage.JoinResponse = (function() {

        /**
         * Properties of a JoinResponse.
         * @memberof NetworkMessage
         * @interface IJoinResponse
         * @property {Array.<string>|null} [memberIds] JoinResponse memberIds
         */

        /**
         * Constructs a new JoinResponse.
         * @memberof NetworkMessage
         * @classdesc Represents a JoinResponse.
         * @implements IJoinResponse
         * @constructor
         * @param {NetworkMessage.IJoinResponse=} [properties] Properties to set
         */
        function JoinResponse(properties) {
            this.memberIds = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinResponse memberIds.
         * @member {Array.<string>} memberIds
         * @memberof NetworkMessage.JoinResponse
         * @instance
         */
        JoinResponse.prototype.memberIds = $util.emptyArray;

        /**
         * Creates a new JoinResponse instance using the specified properties.
         * @function create
         * @memberof NetworkMessage.JoinResponse
         * @static
         * @param {NetworkMessage.IJoinResponse=} [properties] Properties to set
         * @returns {NetworkMessage.JoinResponse} JoinResponse instance
         */
        JoinResponse.create = function create(properties) {
            return new JoinResponse(properties);
        };

        /**
         * Encodes the specified JoinResponse message. Does not implicitly {@link NetworkMessage.JoinResponse.verify|verify} messages.
         * @function encode
         * @memberof NetworkMessage.JoinResponse
         * @static
         * @param {NetworkMessage.IJoinResponse} message JoinResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.memberIds != null && message.memberIds.length)
                for (let i = 0; i < message.memberIds.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.memberIds[i]);
            return writer;
        };

        /**
         * Encodes the specified JoinResponse message, length delimited. Does not implicitly {@link NetworkMessage.JoinResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NetworkMessage.JoinResponse
         * @static
         * @param {NetworkMessage.IJoinResponse} message JoinResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinResponse message from the specified reader or buffer.
         * @function decode
         * @memberof NetworkMessage.JoinResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NetworkMessage.JoinResponse} JoinResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NetworkMessage.JoinResponse();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.memberIds && message.memberIds.length))
                        message.memberIds = [];
                    message.memberIds.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NetworkMessage.JoinResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NetworkMessage.JoinResponse} JoinResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinResponse message.
         * @function verify
         * @memberof NetworkMessage.JoinResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.memberIds != null && message.hasOwnProperty("memberIds")) {
                if (!Array.isArray(message.memberIds))
                    return "memberIds: array expected";
                for (let i = 0; i < message.memberIds.length; ++i)
                    if (!$util.isString(message.memberIds[i]))
                        return "memberIds: string[] expected";
            }
            return null;
        };

        /**
         * Creates a JoinResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NetworkMessage.JoinResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NetworkMessage.JoinResponse} JoinResponse
         */
        JoinResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.NetworkMessage.JoinResponse)
                return object;
            let message = new $root.NetworkMessage.JoinResponse();
            if (object.memberIds) {
                if (!Array.isArray(object.memberIds))
                    throw TypeError(".NetworkMessage.JoinResponse.memberIds: array expected");
                message.memberIds = [];
                for (let i = 0; i < object.memberIds.length; ++i)
                    message.memberIds[i] = String(object.memberIds[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a JoinResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NetworkMessage.JoinResponse
         * @static
         * @param {NetworkMessage.JoinResponse} message JoinResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.memberIds = [];
            if (message.memberIds && message.memberIds.length) {
                object.memberIds = [];
                for (let j = 0; j < message.memberIds.length; ++j)
                    object.memberIds[j] = message.memberIds[j];
            }
            return object;
        };

        /**
         * Converts this JoinResponse to JSON.
         * @function toJSON
         * @memberof NetworkMessage.JoinResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinResponse;
    })();

    NetworkMessage.JoinNotification = (function() {

        /**
         * Properties of a JoinNotification.
         * @memberof NetworkMessage
         * @interface IJoinNotification
         * @property {string|null} [memberId] JoinNotification memberId
         */

        /**
         * Constructs a new JoinNotification.
         * @memberof NetworkMessage
         * @classdesc Represents a JoinNotification.
         * @implements IJoinNotification
         * @constructor
         * @param {NetworkMessage.IJoinNotification=} [properties] Properties to set
         */
        function JoinNotification(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinNotification memberId.
         * @member {string} memberId
         * @memberof NetworkMessage.JoinNotification
         * @instance
         */
        JoinNotification.prototype.memberId = "";

        /**
         * Creates a new JoinNotification instance using the specified properties.
         * @function create
         * @memberof NetworkMessage.JoinNotification
         * @static
         * @param {NetworkMessage.IJoinNotification=} [properties] Properties to set
         * @returns {NetworkMessage.JoinNotification} JoinNotification instance
         */
        JoinNotification.create = function create(properties) {
            return new JoinNotification(properties);
        };

        /**
         * Encodes the specified JoinNotification message. Does not implicitly {@link NetworkMessage.JoinNotification.verify|verify} messages.
         * @function encode
         * @memberof NetworkMessage.JoinNotification
         * @static
         * @param {NetworkMessage.IJoinNotification} message JoinNotification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinNotification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.memberId != null && message.hasOwnProperty("memberId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.memberId);
            return writer;
        };

        /**
         * Encodes the specified JoinNotification message, length delimited. Does not implicitly {@link NetworkMessage.JoinNotification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NetworkMessage.JoinNotification
         * @static
         * @param {NetworkMessage.IJoinNotification} message JoinNotification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinNotification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinNotification message from the specified reader or buffer.
         * @function decode
         * @memberof NetworkMessage.JoinNotification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NetworkMessage.JoinNotification} JoinNotification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinNotification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NetworkMessage.JoinNotification();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.memberId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinNotification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NetworkMessage.JoinNotification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NetworkMessage.JoinNotification} JoinNotification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinNotification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinNotification message.
         * @function verify
         * @memberof NetworkMessage.JoinNotification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinNotification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.memberId != null && message.hasOwnProperty("memberId"))
                if (!$util.isString(message.memberId))
                    return "memberId: string expected";
            return null;
        };

        /**
         * Creates a JoinNotification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NetworkMessage.JoinNotification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NetworkMessage.JoinNotification} JoinNotification
         */
        JoinNotification.fromObject = function fromObject(object) {
            if (object instanceof $root.NetworkMessage.JoinNotification)
                return object;
            let message = new $root.NetworkMessage.JoinNotification();
            if (object.memberId != null)
                message.memberId = String(object.memberId);
            return message;
        };

        /**
         * Creates a plain object from a JoinNotification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NetworkMessage.JoinNotification
         * @static
         * @param {NetworkMessage.JoinNotification} message JoinNotification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinNotification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.memberId = "";
            if (message.memberId != null && message.hasOwnProperty("memberId"))
                object.memberId = message.memberId;
            return object;
        };

        /**
         * Converts this JoinNotification to JSON.
         * @function toJSON
         * @memberof NetworkMessage.JoinNotification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinNotification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinNotification;
    })();

    NetworkMessage.LeaveNotification = (function() {

        /**
         * Properties of a LeaveNotification.
         * @memberof NetworkMessage
         * @interface ILeaveNotification
         * @property {string|null} [memberId] LeaveNotification memberId
         * @property {boolean|null} [connectionLost] LeaveNotification connectionLost
         */

        /**
         * Constructs a new LeaveNotification.
         * @memberof NetworkMessage
         * @classdesc Represents a LeaveNotification.
         * @implements ILeaveNotification
         * @constructor
         * @param {NetworkMessage.ILeaveNotification=} [properties] Properties to set
         */
        function LeaveNotification(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LeaveNotification memberId.
         * @member {string} memberId
         * @memberof NetworkMessage.LeaveNotification
         * @instance
         */
        LeaveNotification.prototype.memberId = "";

        /**
         * LeaveNotification connectionLost.
         * @member {boolean} connectionLost
         * @memberof NetworkMessage.LeaveNotification
         * @instance
         */
        LeaveNotification.prototype.connectionLost = false;

        /**
         * Creates a new LeaveNotification instance using the specified properties.
         * @function create
         * @memberof NetworkMessage.LeaveNotification
         * @static
         * @param {NetworkMessage.ILeaveNotification=} [properties] Properties to set
         * @returns {NetworkMessage.LeaveNotification} LeaveNotification instance
         */
        LeaveNotification.create = function create(properties) {
            return new LeaveNotification(properties);
        };

        /**
         * Encodes the specified LeaveNotification message. Does not implicitly {@link NetworkMessage.LeaveNotification.verify|verify} messages.
         * @function encode
         * @memberof NetworkMessage.LeaveNotification
         * @static
         * @param {NetworkMessage.ILeaveNotification} message LeaveNotification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveNotification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.memberId != null && message.hasOwnProperty("memberId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.memberId);
            if (message.connectionLost != null && message.hasOwnProperty("connectionLost"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.connectionLost);
            return writer;
        };

        /**
         * Encodes the specified LeaveNotification message, length delimited. Does not implicitly {@link NetworkMessage.LeaveNotification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NetworkMessage.LeaveNotification
         * @static
         * @param {NetworkMessage.ILeaveNotification} message LeaveNotification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LeaveNotification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LeaveNotification message from the specified reader or buffer.
         * @function decode
         * @memberof NetworkMessage.LeaveNotification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NetworkMessage.LeaveNotification} LeaveNotification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveNotification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NetworkMessage.LeaveNotification();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.memberId = reader.string();
                    break;
                case 2:
                    message.connectionLost = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LeaveNotification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NetworkMessage.LeaveNotification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NetworkMessage.LeaveNotification} LeaveNotification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LeaveNotification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LeaveNotification message.
         * @function verify
         * @memberof NetworkMessage.LeaveNotification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LeaveNotification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.memberId != null && message.hasOwnProperty("memberId"))
                if (!$util.isString(message.memberId))
                    return "memberId: string expected";
            if (message.connectionLost != null && message.hasOwnProperty("connectionLost"))
                if (typeof message.connectionLost !== "boolean")
                    return "connectionLost: boolean expected";
            return null;
        };

        /**
         * Creates a LeaveNotification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NetworkMessage.LeaveNotification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NetworkMessage.LeaveNotification} LeaveNotification
         */
        LeaveNotification.fromObject = function fromObject(object) {
            if (object instanceof $root.NetworkMessage.LeaveNotification)
                return object;
            let message = new $root.NetworkMessage.LeaveNotification();
            if (object.memberId != null)
                message.memberId = String(object.memberId);
            if (object.connectionLost != null)
                message.connectionLost = Boolean(object.connectionLost);
            return message;
        };

        /**
         * Creates a plain object from a LeaveNotification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NetworkMessage.LeaveNotification
         * @static
         * @param {NetworkMessage.LeaveNotification} message LeaveNotification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LeaveNotification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.memberId = "";
                object.connectionLost = false;
            }
            if (message.memberId != null && message.hasOwnProperty("memberId"))
                object.memberId = message.memberId;
            if (message.connectionLost != null && message.hasOwnProperty("connectionLost"))
                object.connectionLost = message.connectionLost;
            return object;
        };

        /**
         * Converts this LeaveNotification to JSON.
         * @function toJSON
         * @memberof NetworkMessage.LeaveNotification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LeaveNotification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LeaveNotification;
    })();

    NetworkMessage.Unicast = (function() {

        /**
         * Properties of an Unicast.
         * @memberof NetworkMessage
         * @interface IUnicast
         * @property {string|null} [senderId] Unicast senderId
         * @property {string|null} [recipientId] Unicast recipientId
         * @property {Uint8Array|null} [body] Unicast body
         */

        /**
         * Constructs a new Unicast.
         * @memberof NetworkMessage
         * @classdesc Represents an Unicast.
         * @implements IUnicast
         * @constructor
         * @param {NetworkMessage.IUnicast=} [properties] Properties to set
         */
        function Unicast(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Unicast senderId.
         * @member {string} senderId
         * @memberof NetworkMessage.Unicast
         * @instance
         */
        Unicast.prototype.senderId = "";

        /**
         * Unicast recipientId.
         * @member {string} recipientId
         * @memberof NetworkMessage.Unicast
         * @instance
         */
        Unicast.prototype.recipientId = "";

        /**
         * Unicast body.
         * @member {Uint8Array} body
         * @memberof NetworkMessage.Unicast
         * @instance
         */
        Unicast.prototype.body = $util.newBuffer([]);

        /**
         * Creates a new Unicast instance using the specified properties.
         * @function create
         * @memberof NetworkMessage.Unicast
         * @static
         * @param {NetworkMessage.IUnicast=} [properties] Properties to set
         * @returns {NetworkMessage.Unicast} Unicast instance
         */
        Unicast.create = function create(properties) {
            return new Unicast(properties);
        };

        /**
         * Encodes the specified Unicast message. Does not implicitly {@link NetworkMessage.Unicast.verify|verify} messages.
         * @function encode
         * @memberof NetworkMessage.Unicast
         * @static
         * @param {NetworkMessage.IUnicast} message Unicast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Unicast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.senderId != null && message.hasOwnProperty("senderId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.senderId);
            if (message.recipientId != null && message.hasOwnProperty("recipientId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.recipientId);
            if (message.body != null && message.hasOwnProperty("body"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.body);
            return writer;
        };

        /**
         * Encodes the specified Unicast message, length delimited. Does not implicitly {@link NetworkMessage.Unicast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NetworkMessage.Unicast
         * @static
         * @param {NetworkMessage.IUnicast} message Unicast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Unicast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Unicast message from the specified reader or buffer.
         * @function decode
         * @memberof NetworkMessage.Unicast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NetworkMessage.Unicast} Unicast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Unicast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NetworkMessage.Unicast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.senderId = reader.string();
                    break;
                case 2:
                    message.recipientId = reader.string();
                    break;
                case 3:
                    message.body = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Unicast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NetworkMessage.Unicast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NetworkMessage.Unicast} Unicast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Unicast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Unicast message.
         * @function verify
         * @memberof NetworkMessage.Unicast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Unicast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.senderId != null && message.hasOwnProperty("senderId"))
                if (!$util.isString(message.senderId))
                    return "senderId: string expected";
            if (message.recipientId != null && message.hasOwnProperty("recipientId"))
                if (!$util.isString(message.recipientId))
                    return "recipientId: string expected";
            if (message.body != null && message.hasOwnProperty("body"))
                if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                    return "body: buffer expected";
            return null;
        };

        /**
         * Creates an Unicast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NetworkMessage.Unicast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NetworkMessage.Unicast} Unicast
         */
        Unicast.fromObject = function fromObject(object) {
            if (object instanceof $root.NetworkMessage.Unicast)
                return object;
            let message = new $root.NetworkMessage.Unicast();
            if (object.senderId != null)
                message.senderId = String(object.senderId);
            if (object.recipientId != null)
                message.recipientId = String(object.recipientId);
            if (object.body != null)
                if (typeof object.body === "string")
                    $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
                else if (object.body.length)
                    message.body = object.body;
            return message;
        };

        /**
         * Creates a plain object from an Unicast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NetworkMessage.Unicast
         * @static
         * @param {NetworkMessage.Unicast} message Unicast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Unicast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.senderId = "";
                object.recipientId = "";
                object.body = options.bytes === String ? "" : [];
            }
            if (message.senderId != null && message.hasOwnProperty("senderId"))
                object.senderId = message.senderId;
            if (message.recipientId != null && message.hasOwnProperty("recipientId"))
                object.recipientId = message.recipientId;
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = options.bytes === String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === Array ? Array.prototype.slice.call(message.body) : message.body;
            return object;
        };

        /**
         * Converts this Unicast to JSON.
         * @function toJSON
         * @memberof NetworkMessage.Unicast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Unicast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Unicast;
    })();

    NetworkMessage.Broadcast = (function() {

        /**
         * Properties of a Broadcast.
         * @memberof NetworkMessage
         * @interface IBroadcast
         * @property {string|null} [senderId] Broadcast senderId
         * @property {Uint8Array|null} [body] Broadcast body
         */

        /**
         * Constructs a new Broadcast.
         * @memberof NetworkMessage
         * @classdesc Represents a Broadcast.
         * @implements IBroadcast
         * @constructor
         * @param {NetworkMessage.IBroadcast=} [properties] Properties to set
         */
        function Broadcast(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Broadcast senderId.
         * @member {string} senderId
         * @memberof NetworkMessage.Broadcast
         * @instance
         */
        Broadcast.prototype.senderId = "";

        /**
         * Broadcast body.
         * @member {Uint8Array} body
         * @memberof NetworkMessage.Broadcast
         * @instance
         */
        Broadcast.prototype.body = $util.newBuffer([]);

        /**
         * Creates a new Broadcast instance using the specified properties.
         * @function create
         * @memberof NetworkMessage.Broadcast
         * @static
         * @param {NetworkMessage.IBroadcast=} [properties] Properties to set
         * @returns {NetworkMessage.Broadcast} Broadcast instance
         */
        Broadcast.create = function create(properties) {
            return new Broadcast(properties);
        };

        /**
         * Encodes the specified Broadcast message. Does not implicitly {@link NetworkMessage.Broadcast.verify|verify} messages.
         * @function encode
         * @memberof NetworkMessage.Broadcast
         * @static
         * @param {NetworkMessage.IBroadcast} message Broadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Broadcast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.senderId != null && message.hasOwnProperty("senderId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.senderId);
            if (message.body != null && message.hasOwnProperty("body"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.body);
            return writer;
        };

        /**
         * Encodes the specified Broadcast message, length delimited. Does not implicitly {@link NetworkMessage.Broadcast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NetworkMessage.Broadcast
         * @static
         * @param {NetworkMessage.IBroadcast} message Broadcast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Broadcast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Broadcast message from the specified reader or buffer.
         * @function decode
         * @memberof NetworkMessage.Broadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NetworkMessage.Broadcast} Broadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Broadcast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NetworkMessage.Broadcast();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.senderId = reader.string();
                    break;
                case 2:
                    message.body = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Broadcast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NetworkMessage.Broadcast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NetworkMessage.Broadcast} Broadcast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Broadcast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Broadcast message.
         * @function verify
         * @memberof NetworkMessage.Broadcast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Broadcast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.senderId != null && message.hasOwnProperty("senderId"))
                if (!$util.isString(message.senderId))
                    return "senderId: string expected";
            if (message.body != null && message.hasOwnProperty("body"))
                if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                    return "body: buffer expected";
            return null;
        };

        /**
         * Creates a Broadcast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NetworkMessage.Broadcast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NetworkMessage.Broadcast} Broadcast
         */
        Broadcast.fromObject = function fromObject(object) {
            if (object instanceof $root.NetworkMessage.Broadcast)
                return object;
            let message = new $root.NetworkMessage.Broadcast();
            if (object.senderId != null)
                message.senderId = String(object.senderId);
            if (object.body != null)
                if (typeof object.body === "string")
                    $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
                else if (object.body.length)
                    message.body = object.body;
            return message;
        };

        /**
         * Creates a plain object from a Broadcast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NetworkMessage.Broadcast
         * @static
         * @param {NetworkMessage.Broadcast} message Broadcast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Broadcast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.senderId = "";
                object.body = options.bytes === String ? "" : [];
            }
            if (message.senderId != null && message.hasOwnProperty("senderId"))
                object.senderId = message.senderId;
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = options.bytes === String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === Array ? Array.prototype.slice.call(message.body) : message.body;
            return object;
        };

        /**
         * Converts this Broadcast to JSON.
         * @function toJSON
         * @memberof NetworkMessage.Broadcast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Broadcast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Broadcast;
    })();

    return NetworkMessage;
})();

export const Operation = $root.Operation = (() => {

    /**
     * Properties of an Operation.
     * @exports IOperation
     * @interface IOperation
     * @property {Operation.ISplice|null} [splice] Operation splice
     * @property {Operation.IUndo|null} [undo] Operation undo
     * @property {Operation.IMarkersUpdate|null} [markersUpdate] Operation markersUpdate
     */

    /**
     * Constructs a new Operation.
     * @exports Operation
     * @classdesc Represents an Operation.
     * @implements IOperation
     * @constructor
     * @param {IOperation=} [properties] Properties to set
     */
    function Operation(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Operation splice.
     * @member {Operation.ISplice|null|undefined} splice
     * @memberof Operation
     * @instance
     */
    Operation.prototype.splice = null;

    /**
     * Operation undo.
     * @member {Operation.IUndo|null|undefined} undo
     * @memberof Operation
     * @instance
     */
    Operation.prototype.undo = null;

    /**
     * Operation markersUpdate.
     * @member {Operation.IMarkersUpdate|null|undefined} markersUpdate
     * @memberof Operation
     * @instance
     */
    Operation.prototype.markersUpdate = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * Operation variant.
     * @member {"splice"|"undo"|"markersUpdate"|undefined} variant
     * @memberof Operation
     * @instance
     */
    Object.defineProperty(Operation.prototype, "variant", {
        get: $util.oneOfGetter($oneOfFields = ["splice", "undo", "markersUpdate"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Operation instance using the specified properties.
     * @function create
     * @memberof Operation
     * @static
     * @param {IOperation=} [properties] Properties to set
     * @returns {Operation} Operation instance
     */
    Operation.create = function create(properties) {
        return new Operation(properties);
    };

    /**
     * Encodes the specified Operation message. Does not implicitly {@link Operation.verify|verify} messages.
     * @function encode
     * @memberof Operation
     * @static
     * @param {IOperation} message Operation message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Operation.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.splice != null && message.hasOwnProperty("splice"))
            $root.Operation.Splice.encode(message.splice, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.undo != null && message.hasOwnProperty("undo"))
            $root.Operation.Undo.encode(message.undo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.markersUpdate != null && message.hasOwnProperty("markersUpdate"))
            $root.Operation.MarkersUpdate.encode(message.markersUpdate, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Operation message, length delimited. Does not implicitly {@link Operation.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Operation
     * @static
     * @param {IOperation} message Operation message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Operation.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Operation message from the specified reader or buffer.
     * @function decode
     * @memberof Operation
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Operation} Operation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Operation.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Operation();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.splice = $root.Operation.Splice.decode(reader, reader.uint32());
                break;
            case 2:
                message.undo = $root.Operation.Undo.decode(reader, reader.uint32());
                break;
            case 3:
                message.markersUpdate = $root.Operation.MarkersUpdate.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Operation message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Operation
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Operation} Operation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Operation.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Operation message.
     * @function verify
     * @memberof Operation
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Operation.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.splice != null && message.hasOwnProperty("splice")) {
            properties.variant = 1;
            {
                let error = $root.Operation.Splice.verify(message.splice);
                if (error)
                    return "splice." + error;
            }
        }
        if (message.undo != null && message.hasOwnProperty("undo")) {
            if (properties.variant === 1)
                return "variant: multiple values";
            properties.variant = 1;
            {
                let error = $root.Operation.Undo.verify(message.undo);
                if (error)
                    return "undo." + error;
            }
        }
        if (message.markersUpdate != null && message.hasOwnProperty("markersUpdate")) {
            if (properties.variant === 1)
                return "variant: multiple values";
            properties.variant = 1;
            {
                let error = $root.Operation.MarkersUpdate.verify(message.markersUpdate);
                if (error)
                    return "markersUpdate." + error;
            }
        }
        return null;
    };

    /**
     * Creates an Operation message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Operation
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Operation} Operation
     */
    Operation.fromObject = function fromObject(object) {
        if (object instanceof $root.Operation)
            return object;
        let message = new $root.Operation();
        if (object.splice != null) {
            if (typeof object.splice !== "object")
                throw TypeError(".Operation.splice: object expected");
            message.splice = $root.Operation.Splice.fromObject(object.splice);
        }
        if (object.undo != null) {
            if (typeof object.undo !== "object")
                throw TypeError(".Operation.undo: object expected");
            message.undo = $root.Operation.Undo.fromObject(object.undo);
        }
        if (object.markersUpdate != null) {
            if (typeof object.markersUpdate !== "object")
                throw TypeError(".Operation.markersUpdate: object expected");
            message.markersUpdate = $root.Operation.MarkersUpdate.fromObject(object.markersUpdate);
        }
        return message;
    };

    /**
     * Creates a plain object from an Operation message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Operation
     * @static
     * @param {Operation} message Operation
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Operation.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (message.splice != null && message.hasOwnProperty("splice")) {
            object.splice = $root.Operation.Splice.toObject(message.splice, options);
            if (options.oneofs)
                object.variant = "splice";
        }
        if (message.undo != null && message.hasOwnProperty("undo")) {
            object.undo = $root.Operation.Undo.toObject(message.undo, options);
            if (options.oneofs)
                object.variant = "undo";
        }
        if (message.markersUpdate != null && message.hasOwnProperty("markersUpdate")) {
            object.markersUpdate = $root.Operation.MarkersUpdate.toObject(message.markersUpdate, options);
            if (options.oneofs)
                object.variant = "markersUpdate";
        }
        return object;
    };

    /**
     * Converts this Operation to JSON.
     * @function toJSON
     * @memberof Operation
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Operation.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    Operation.Splice = (function() {

        /**
         * Properties of a Splice.
         * @memberof Operation
         * @interface ISplice
         * @property {Operation.ISpliceId|null} [spliceId] Splice spliceId
         * @property {Operation.Splice.IInsertion|null} [insertion] Splice insertion
         * @property {Operation.Splice.IDeletion|null} [deletion] Splice deletion
         */

        /**
         * Constructs a new Splice.
         * @memberof Operation
         * @classdesc Represents a Splice.
         * @implements ISplice
         * @constructor
         * @param {Operation.ISplice=} [properties] Properties to set
         */
        function Splice(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Splice spliceId.
         * @member {Operation.ISpliceId|null|undefined} spliceId
         * @memberof Operation.Splice
         * @instance
         */
        Splice.prototype.spliceId = null;

        /**
         * Splice insertion.
         * @member {Operation.Splice.IInsertion|null|undefined} insertion
         * @memberof Operation.Splice
         * @instance
         */
        Splice.prototype.insertion = null;

        /**
         * Splice deletion.
         * @member {Operation.Splice.IDeletion|null|undefined} deletion
         * @memberof Operation.Splice
         * @instance
         */
        Splice.prototype.deletion = null;

        /**
         * Creates a new Splice instance using the specified properties.
         * @function create
         * @memberof Operation.Splice
         * @static
         * @param {Operation.ISplice=} [properties] Properties to set
         * @returns {Operation.Splice} Splice instance
         */
        Splice.create = function create(properties) {
            return new Splice(properties);
        };

        /**
         * Encodes the specified Splice message. Does not implicitly {@link Operation.Splice.verify|verify} messages.
         * @function encode
         * @memberof Operation.Splice
         * @static
         * @param {Operation.ISplice} message Splice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Splice.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.spliceId != null && message.hasOwnProperty("spliceId"))
                $root.Operation.SpliceId.encode(message.spliceId, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.insertion != null && message.hasOwnProperty("insertion"))
                $root.Operation.Splice.Insertion.encode(message.insertion, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.deletion != null && message.hasOwnProperty("deletion"))
                $root.Operation.Splice.Deletion.encode(message.deletion, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Splice message, length delimited. Does not implicitly {@link Operation.Splice.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Operation.Splice
         * @static
         * @param {Operation.ISplice} message Splice message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Splice.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Splice message from the specified reader or buffer.
         * @function decode
         * @memberof Operation.Splice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Operation.Splice} Splice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Splice.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Operation.Splice();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.spliceId = $root.Operation.SpliceId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.insertion = $root.Operation.Splice.Insertion.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.deletion = $root.Operation.Splice.Deletion.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Splice message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Operation.Splice
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Operation.Splice} Splice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Splice.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Splice message.
         * @function verify
         * @memberof Operation.Splice
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Splice.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.spliceId != null && message.hasOwnProperty("spliceId")) {
                let error = $root.Operation.SpliceId.verify(message.spliceId);
                if (error)
                    return "spliceId." + error;
            }
            if (message.insertion != null && message.hasOwnProperty("insertion")) {
                let error = $root.Operation.Splice.Insertion.verify(message.insertion);
                if (error)
                    return "insertion." + error;
            }
            if (message.deletion != null && message.hasOwnProperty("deletion")) {
                let error = $root.Operation.Splice.Deletion.verify(message.deletion);
                if (error)
                    return "deletion." + error;
            }
            return null;
        };

        /**
         * Creates a Splice message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Operation.Splice
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Operation.Splice} Splice
         */
        Splice.fromObject = function fromObject(object) {
            if (object instanceof $root.Operation.Splice)
                return object;
            let message = new $root.Operation.Splice();
            if (object.spliceId != null) {
                if (typeof object.spliceId !== "object")
                    throw TypeError(".Operation.Splice.spliceId: object expected");
                message.spliceId = $root.Operation.SpliceId.fromObject(object.spliceId);
            }
            if (object.insertion != null) {
                if (typeof object.insertion !== "object")
                    throw TypeError(".Operation.Splice.insertion: object expected");
                message.insertion = $root.Operation.Splice.Insertion.fromObject(object.insertion);
            }
            if (object.deletion != null) {
                if (typeof object.deletion !== "object")
                    throw TypeError(".Operation.Splice.deletion: object expected");
                message.deletion = $root.Operation.Splice.Deletion.fromObject(object.deletion);
            }
            return message;
        };

        /**
         * Creates a plain object from a Splice message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Operation.Splice
         * @static
         * @param {Operation.Splice} message Splice
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Splice.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.spliceId = null;
                object.insertion = null;
                object.deletion = null;
            }
            if (message.spliceId != null && message.hasOwnProperty("spliceId"))
                object.spliceId = $root.Operation.SpliceId.toObject(message.spliceId, options);
            if (message.insertion != null && message.hasOwnProperty("insertion"))
                object.insertion = $root.Operation.Splice.Insertion.toObject(message.insertion, options);
            if (message.deletion != null && message.hasOwnProperty("deletion"))
                object.deletion = $root.Operation.Splice.Deletion.toObject(message.deletion, options);
            return object;
        };

        /**
         * Converts this Splice to JSON.
         * @function toJSON
         * @memberof Operation.Splice
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Splice.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        Splice.Insertion = (function() {

            /**
             * Properties of an Insertion.
             * @memberof Operation.Splice
             * @interface IInsertion
             * @property {string|null} [text] Insertion text
             * @property {Operation.ISpliceId|null} [leftDependencyId] Insertion leftDependencyId
             * @property {Operation.IPoint|null} [offsetInLeftDependency] Insertion offsetInLeftDependency
             * @property {Operation.ISpliceId|null} [rightDependencyId] Insertion rightDependencyId
             * @property {Operation.IPoint|null} [offsetInRightDependency] Insertion offsetInRightDependency
             */

            /**
             * Constructs a new Insertion.
             * @memberof Operation.Splice
             * @classdesc Represents an Insertion.
             * @implements IInsertion
             * @constructor
             * @param {Operation.Splice.IInsertion=} [properties] Properties to set
             */
            function Insertion(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Insertion text.
             * @member {string} text
             * @memberof Operation.Splice.Insertion
             * @instance
             */
            Insertion.prototype.text = "";

            /**
             * Insertion leftDependencyId.
             * @member {Operation.ISpliceId|null|undefined} leftDependencyId
             * @memberof Operation.Splice.Insertion
             * @instance
             */
            Insertion.prototype.leftDependencyId = null;

            /**
             * Insertion offsetInLeftDependency.
             * @member {Operation.IPoint|null|undefined} offsetInLeftDependency
             * @memberof Operation.Splice.Insertion
             * @instance
             */
            Insertion.prototype.offsetInLeftDependency = null;

            /**
             * Insertion rightDependencyId.
             * @member {Operation.ISpliceId|null|undefined} rightDependencyId
             * @memberof Operation.Splice.Insertion
             * @instance
             */
            Insertion.prototype.rightDependencyId = null;

            /**
             * Insertion offsetInRightDependency.
             * @member {Operation.IPoint|null|undefined} offsetInRightDependency
             * @memberof Operation.Splice.Insertion
             * @instance
             */
            Insertion.prototype.offsetInRightDependency = null;

            /**
             * Creates a new Insertion instance using the specified properties.
             * @function create
             * @memberof Operation.Splice.Insertion
             * @static
             * @param {Operation.Splice.IInsertion=} [properties] Properties to set
             * @returns {Operation.Splice.Insertion} Insertion instance
             */
            Insertion.create = function create(properties) {
                return new Insertion(properties);
            };

            /**
             * Encodes the specified Insertion message. Does not implicitly {@link Operation.Splice.Insertion.verify|verify} messages.
             * @function encode
             * @memberof Operation.Splice.Insertion
             * @static
             * @param {Operation.Splice.IInsertion} message Insertion message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Insertion.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.text != null && message.hasOwnProperty("text"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
                if (message.leftDependencyId != null && message.hasOwnProperty("leftDependencyId"))
                    $root.Operation.SpliceId.encode(message.leftDependencyId, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.offsetInLeftDependency != null && message.hasOwnProperty("offsetInLeftDependency"))
                    $root.Operation.Point.encode(message.offsetInLeftDependency, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.rightDependencyId != null && message.hasOwnProperty("rightDependencyId"))
                    $root.Operation.SpliceId.encode(message.rightDependencyId, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.offsetInRightDependency != null && message.hasOwnProperty("offsetInRightDependency"))
                    $root.Operation.Point.encode(message.offsetInRightDependency, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Insertion message, length delimited. Does not implicitly {@link Operation.Splice.Insertion.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Operation.Splice.Insertion
             * @static
             * @param {Operation.Splice.IInsertion} message Insertion message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Insertion.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Insertion message from the specified reader or buffer.
             * @function decode
             * @memberof Operation.Splice.Insertion
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Operation.Splice.Insertion} Insertion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Insertion.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Operation.Splice.Insertion();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        message.text = reader.string();
                        break;
                    case 3:
                        message.leftDependencyId = $root.Operation.SpliceId.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.offsetInLeftDependency = $root.Operation.Point.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.rightDependencyId = $root.Operation.SpliceId.decode(reader, reader.uint32());
                        break;
                    case 6:
                        message.offsetInRightDependency = $root.Operation.Point.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Insertion message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Operation.Splice.Insertion
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Operation.Splice.Insertion} Insertion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Insertion.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Insertion message.
             * @function verify
             * @memberof Operation.Splice.Insertion
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Insertion.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.text != null && message.hasOwnProperty("text"))
                    if (!$util.isString(message.text))
                        return "text: string expected";
                if (message.leftDependencyId != null && message.hasOwnProperty("leftDependencyId")) {
                    let error = $root.Operation.SpliceId.verify(message.leftDependencyId);
                    if (error)
                        return "leftDependencyId." + error;
                }
                if (message.offsetInLeftDependency != null && message.hasOwnProperty("offsetInLeftDependency")) {
                    let error = $root.Operation.Point.verify(message.offsetInLeftDependency);
                    if (error)
                        return "offsetInLeftDependency." + error;
                }
                if (message.rightDependencyId != null && message.hasOwnProperty("rightDependencyId")) {
                    let error = $root.Operation.SpliceId.verify(message.rightDependencyId);
                    if (error)
                        return "rightDependencyId." + error;
                }
                if (message.offsetInRightDependency != null && message.hasOwnProperty("offsetInRightDependency")) {
                    let error = $root.Operation.Point.verify(message.offsetInRightDependency);
                    if (error)
                        return "offsetInRightDependency." + error;
                }
                return null;
            };

            /**
             * Creates an Insertion message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Operation.Splice.Insertion
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Operation.Splice.Insertion} Insertion
             */
            Insertion.fromObject = function fromObject(object) {
                if (object instanceof $root.Operation.Splice.Insertion)
                    return object;
                let message = new $root.Operation.Splice.Insertion();
                if (object.text != null)
                    message.text = String(object.text);
                if (object.leftDependencyId != null) {
                    if (typeof object.leftDependencyId !== "object")
                        throw TypeError(".Operation.Splice.Insertion.leftDependencyId: object expected");
                    message.leftDependencyId = $root.Operation.SpliceId.fromObject(object.leftDependencyId);
                }
                if (object.offsetInLeftDependency != null) {
                    if (typeof object.offsetInLeftDependency !== "object")
                        throw TypeError(".Operation.Splice.Insertion.offsetInLeftDependency: object expected");
                    message.offsetInLeftDependency = $root.Operation.Point.fromObject(object.offsetInLeftDependency);
                }
                if (object.rightDependencyId != null) {
                    if (typeof object.rightDependencyId !== "object")
                        throw TypeError(".Operation.Splice.Insertion.rightDependencyId: object expected");
                    message.rightDependencyId = $root.Operation.SpliceId.fromObject(object.rightDependencyId);
                }
                if (object.offsetInRightDependency != null) {
                    if (typeof object.offsetInRightDependency !== "object")
                        throw TypeError(".Operation.Splice.Insertion.offsetInRightDependency: object expected");
                    message.offsetInRightDependency = $root.Operation.Point.fromObject(object.offsetInRightDependency);
                }
                return message;
            };

            /**
             * Creates a plain object from an Insertion message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Operation.Splice.Insertion
             * @static
             * @param {Operation.Splice.Insertion} message Insertion
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Insertion.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.text = "";
                    object.leftDependencyId = null;
                    object.offsetInLeftDependency = null;
                    object.rightDependencyId = null;
                    object.offsetInRightDependency = null;
                }
                if (message.text != null && message.hasOwnProperty("text"))
                    object.text = message.text;
                if (message.leftDependencyId != null && message.hasOwnProperty("leftDependencyId"))
                    object.leftDependencyId = $root.Operation.SpliceId.toObject(message.leftDependencyId, options);
                if (message.offsetInLeftDependency != null && message.hasOwnProperty("offsetInLeftDependency"))
                    object.offsetInLeftDependency = $root.Operation.Point.toObject(message.offsetInLeftDependency, options);
                if (message.rightDependencyId != null && message.hasOwnProperty("rightDependencyId"))
                    object.rightDependencyId = $root.Operation.SpliceId.toObject(message.rightDependencyId, options);
                if (message.offsetInRightDependency != null && message.hasOwnProperty("offsetInRightDependency"))
                    object.offsetInRightDependency = $root.Operation.Point.toObject(message.offsetInRightDependency, options);
                return object;
            };

            /**
             * Converts this Insertion to JSON.
             * @function toJSON
             * @memberof Operation.Splice.Insertion
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Insertion.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Insertion;
        })();

        Splice.Deletion = (function() {

            /**
             * Properties of a Deletion.
             * @memberof Operation.Splice
             * @interface IDeletion
             * @property {Operation.ISpliceId|null} [leftDependencyId] Deletion leftDependencyId
             * @property {Operation.IPoint|null} [offsetInLeftDependency] Deletion offsetInLeftDependency
             * @property {Operation.ISpliceId|null} [rightDependencyId] Deletion rightDependencyId
             * @property {Operation.IPoint|null} [offsetInRightDependency] Deletion offsetInRightDependency
             * @property {Object.<string,number>|null} [maxSeqsBySite] Deletion maxSeqsBySite
             */

            /**
             * Constructs a new Deletion.
             * @memberof Operation.Splice
             * @classdesc Represents a Deletion.
             * @implements IDeletion
             * @constructor
             * @param {Operation.Splice.IDeletion=} [properties] Properties to set
             */
            function Deletion(properties) {
                this.maxSeqsBySite = {};
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Deletion leftDependencyId.
             * @member {Operation.ISpliceId|null|undefined} leftDependencyId
             * @memberof Operation.Splice.Deletion
             * @instance
             */
            Deletion.prototype.leftDependencyId = null;

            /**
             * Deletion offsetInLeftDependency.
             * @member {Operation.IPoint|null|undefined} offsetInLeftDependency
             * @memberof Operation.Splice.Deletion
             * @instance
             */
            Deletion.prototype.offsetInLeftDependency = null;

            /**
             * Deletion rightDependencyId.
             * @member {Operation.ISpliceId|null|undefined} rightDependencyId
             * @memberof Operation.Splice.Deletion
             * @instance
             */
            Deletion.prototype.rightDependencyId = null;

            /**
             * Deletion offsetInRightDependency.
             * @member {Operation.IPoint|null|undefined} offsetInRightDependency
             * @memberof Operation.Splice.Deletion
             * @instance
             */
            Deletion.prototype.offsetInRightDependency = null;

            /**
             * Deletion maxSeqsBySite.
             * @member {Object.<string,number>} maxSeqsBySite
             * @memberof Operation.Splice.Deletion
             * @instance
             */
            Deletion.prototype.maxSeqsBySite = $util.emptyObject;

            /**
             * Creates a new Deletion instance using the specified properties.
             * @function create
             * @memberof Operation.Splice.Deletion
             * @static
             * @param {Operation.Splice.IDeletion=} [properties] Properties to set
             * @returns {Operation.Splice.Deletion} Deletion instance
             */
            Deletion.create = function create(properties) {
                return new Deletion(properties);
            };

            /**
             * Encodes the specified Deletion message. Does not implicitly {@link Operation.Splice.Deletion.verify|verify} messages.
             * @function encode
             * @memberof Operation.Splice.Deletion
             * @static
             * @param {Operation.Splice.IDeletion} message Deletion message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Deletion.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.leftDependencyId != null && message.hasOwnProperty("leftDependencyId"))
                    $root.Operation.SpliceId.encode(message.leftDependencyId, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.offsetInLeftDependency != null && message.hasOwnProperty("offsetInLeftDependency"))
                    $root.Operation.Point.encode(message.offsetInLeftDependency, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.rightDependencyId != null && message.hasOwnProperty("rightDependencyId"))
                    $root.Operation.SpliceId.encode(message.rightDependencyId, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.offsetInRightDependency != null && message.hasOwnProperty("offsetInRightDependency"))
                    $root.Operation.Point.encode(message.offsetInRightDependency, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.maxSeqsBySite != null && message.hasOwnProperty("maxSeqsBySite"))
                    for (let keys = Object.keys(message.maxSeqsBySite), i = 0; i < keys.length; ++i)
                        writer.uint32(/* id 6, wireType 2 =*/50).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint32(message.maxSeqsBySite[keys[i]]).ldelim();
                return writer;
            };

            /**
             * Encodes the specified Deletion message, length delimited. Does not implicitly {@link Operation.Splice.Deletion.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Operation.Splice.Deletion
             * @static
             * @param {Operation.Splice.IDeletion} message Deletion message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Deletion.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Deletion message from the specified reader or buffer.
             * @function decode
             * @memberof Operation.Splice.Deletion
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Operation.Splice.Deletion} Deletion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Deletion.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Operation.Splice.Deletion(), key;
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 2:
                        message.leftDependencyId = $root.Operation.SpliceId.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.offsetInLeftDependency = $root.Operation.Point.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.rightDependencyId = $root.Operation.SpliceId.decode(reader, reader.uint32());
                        break;
                    case 5:
                        message.offsetInRightDependency = $root.Operation.Point.decode(reader, reader.uint32());
                        break;
                    case 6:
                        reader.skip().pos++;
                        if (message.maxSeqsBySite === $util.emptyObject)
                            message.maxSeqsBySite = {};
                        key = reader.uint32();
                        reader.pos++;
                        message.maxSeqsBySite[key] = reader.uint32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Deletion message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Operation.Splice.Deletion
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Operation.Splice.Deletion} Deletion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Deletion.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Deletion message.
             * @function verify
             * @memberof Operation.Splice.Deletion
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Deletion.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.leftDependencyId != null && message.hasOwnProperty("leftDependencyId")) {
                    let error = $root.Operation.SpliceId.verify(message.leftDependencyId);
                    if (error)
                        return "leftDependencyId." + error;
                }
                if (message.offsetInLeftDependency != null && message.hasOwnProperty("offsetInLeftDependency")) {
                    let error = $root.Operation.Point.verify(message.offsetInLeftDependency);
                    if (error)
                        return "offsetInLeftDependency." + error;
                }
                if (message.rightDependencyId != null && message.hasOwnProperty("rightDependencyId")) {
                    let error = $root.Operation.SpliceId.verify(message.rightDependencyId);
                    if (error)
                        return "rightDependencyId." + error;
                }
                if (message.offsetInRightDependency != null && message.hasOwnProperty("offsetInRightDependency")) {
                    let error = $root.Operation.Point.verify(message.offsetInRightDependency);
                    if (error)
                        return "offsetInRightDependency." + error;
                }
                if (message.maxSeqsBySite != null && message.hasOwnProperty("maxSeqsBySite")) {
                    if (!$util.isObject(message.maxSeqsBySite))
                        return "maxSeqsBySite: object expected";
                    let key = Object.keys(message.maxSeqsBySite);
                    for (let i = 0; i < key.length; ++i) {
                        if (!$util.key32Re.test(key[i]))
                            return "maxSeqsBySite: integer key{k:uint32} expected";
                        if (!$util.isInteger(message.maxSeqsBySite[key[i]]))
                            return "maxSeqsBySite: integer{k:uint32} expected";
                    }
                }
                return null;
            };

            /**
             * Creates a Deletion message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Operation.Splice.Deletion
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Operation.Splice.Deletion} Deletion
             */
            Deletion.fromObject = function fromObject(object) {
                if (object instanceof $root.Operation.Splice.Deletion)
                    return object;
                let message = new $root.Operation.Splice.Deletion();
                if (object.leftDependencyId != null) {
                    if (typeof object.leftDependencyId !== "object")
                        throw TypeError(".Operation.Splice.Deletion.leftDependencyId: object expected");
                    message.leftDependencyId = $root.Operation.SpliceId.fromObject(object.leftDependencyId);
                }
                if (object.offsetInLeftDependency != null) {
                    if (typeof object.offsetInLeftDependency !== "object")
                        throw TypeError(".Operation.Splice.Deletion.offsetInLeftDependency: object expected");
                    message.offsetInLeftDependency = $root.Operation.Point.fromObject(object.offsetInLeftDependency);
                }
                if (object.rightDependencyId != null) {
                    if (typeof object.rightDependencyId !== "object")
                        throw TypeError(".Operation.Splice.Deletion.rightDependencyId: object expected");
                    message.rightDependencyId = $root.Operation.SpliceId.fromObject(object.rightDependencyId);
                }
                if (object.offsetInRightDependency != null) {
                    if (typeof object.offsetInRightDependency !== "object")
                        throw TypeError(".Operation.Splice.Deletion.offsetInRightDependency: object expected");
                    message.offsetInRightDependency = $root.Operation.Point.fromObject(object.offsetInRightDependency);
                }
                if (object.maxSeqsBySite) {
                    if (typeof object.maxSeqsBySite !== "object")
                        throw TypeError(".Operation.Splice.Deletion.maxSeqsBySite: object expected");
                    message.maxSeqsBySite = {};
                    for (let keys = Object.keys(object.maxSeqsBySite), i = 0; i < keys.length; ++i)
                        message.maxSeqsBySite[keys[i]] = object.maxSeqsBySite[keys[i]] >>> 0;
                }
                return message;
            };

            /**
             * Creates a plain object from a Deletion message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Operation.Splice.Deletion
             * @static
             * @param {Operation.Splice.Deletion} message Deletion
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Deletion.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.objects || options.defaults)
                    object.maxSeqsBySite = {};
                if (options.defaults) {
                    object.leftDependencyId = null;
                    object.offsetInLeftDependency = null;
                    object.rightDependencyId = null;
                    object.offsetInRightDependency = null;
                }
                if (message.leftDependencyId != null && message.hasOwnProperty("leftDependencyId"))
                    object.leftDependencyId = $root.Operation.SpliceId.toObject(message.leftDependencyId, options);
                if (message.offsetInLeftDependency != null && message.hasOwnProperty("offsetInLeftDependency"))
                    object.offsetInLeftDependency = $root.Operation.Point.toObject(message.offsetInLeftDependency, options);
                if (message.rightDependencyId != null && message.hasOwnProperty("rightDependencyId"))
                    object.rightDependencyId = $root.Operation.SpliceId.toObject(message.rightDependencyId, options);
                if (message.offsetInRightDependency != null && message.hasOwnProperty("offsetInRightDependency"))
                    object.offsetInRightDependency = $root.Operation.Point.toObject(message.offsetInRightDependency, options);
                let keys2;
                if (message.maxSeqsBySite && (keys2 = Object.keys(message.maxSeqsBySite)).length) {
                    object.maxSeqsBySite = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.maxSeqsBySite[keys2[j]] = message.maxSeqsBySite[keys2[j]];
                }
                return object;
            };

            /**
             * Converts this Deletion to JSON.
             * @function toJSON
             * @memberof Operation.Splice.Deletion
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Deletion.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Deletion;
        })();

        return Splice;
    })();

    Operation.Undo = (function() {

        /**
         * Properties of an Undo.
         * @memberof Operation
         * @interface IUndo
         * @property {Operation.ISpliceId|null} [spliceId] Undo spliceId
         * @property {number|null} [undoCount] Undo undoCount
         */

        /**
         * Constructs a new Undo.
         * @memberof Operation
         * @classdesc Represents an Undo.
         * @implements IUndo
         * @constructor
         * @param {Operation.IUndo=} [properties] Properties to set
         */
        function Undo(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Undo spliceId.
         * @member {Operation.ISpliceId|null|undefined} spliceId
         * @memberof Operation.Undo
         * @instance
         */
        Undo.prototype.spliceId = null;

        /**
         * Undo undoCount.
         * @member {number} undoCount
         * @memberof Operation.Undo
         * @instance
         */
        Undo.prototype.undoCount = 0;

        /**
         * Creates a new Undo instance using the specified properties.
         * @function create
         * @memberof Operation.Undo
         * @static
         * @param {Operation.IUndo=} [properties] Properties to set
         * @returns {Operation.Undo} Undo instance
         */
        Undo.create = function create(properties) {
            return new Undo(properties);
        };

        /**
         * Encodes the specified Undo message. Does not implicitly {@link Operation.Undo.verify|verify} messages.
         * @function encode
         * @memberof Operation.Undo
         * @static
         * @param {Operation.IUndo} message Undo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Undo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.spliceId != null && message.hasOwnProperty("spliceId"))
                $root.Operation.SpliceId.encode(message.spliceId, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.undoCount != null && message.hasOwnProperty("undoCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.undoCount);
            return writer;
        };

        /**
         * Encodes the specified Undo message, length delimited. Does not implicitly {@link Operation.Undo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Operation.Undo
         * @static
         * @param {Operation.IUndo} message Undo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Undo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Undo message from the specified reader or buffer.
         * @function decode
         * @memberof Operation.Undo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Operation.Undo} Undo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Undo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Operation.Undo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.spliceId = $root.Operation.SpliceId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.undoCount = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Undo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Operation.Undo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Operation.Undo} Undo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Undo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Undo message.
         * @function verify
         * @memberof Operation.Undo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Undo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.spliceId != null && message.hasOwnProperty("spliceId")) {
                let error = $root.Operation.SpliceId.verify(message.spliceId);
                if (error)
                    return "spliceId." + error;
            }
            if (message.undoCount != null && message.hasOwnProperty("undoCount"))
                if (!$util.isInteger(message.undoCount))
                    return "undoCount: integer expected";
            return null;
        };

        /**
         * Creates an Undo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Operation.Undo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Operation.Undo} Undo
         */
        Undo.fromObject = function fromObject(object) {
            if (object instanceof $root.Operation.Undo)
                return object;
            let message = new $root.Operation.Undo();
            if (object.spliceId != null) {
                if (typeof object.spliceId !== "object")
                    throw TypeError(".Operation.Undo.spliceId: object expected");
                message.spliceId = $root.Operation.SpliceId.fromObject(object.spliceId);
            }
            if (object.undoCount != null)
                message.undoCount = object.undoCount >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an Undo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Operation.Undo
         * @static
         * @param {Operation.Undo} message Undo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Undo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.spliceId = null;
                object.undoCount = 0;
            }
            if (message.spliceId != null && message.hasOwnProperty("spliceId"))
                object.spliceId = $root.Operation.SpliceId.toObject(message.spliceId, options);
            if (message.undoCount != null && message.hasOwnProperty("undoCount"))
                object.undoCount = message.undoCount;
            return object;
        };

        /**
         * Converts this Undo to JSON.
         * @function toJSON
         * @memberof Operation.Undo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Undo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Undo;
    })();

    Operation.MarkersUpdate = (function() {

        /**
         * Properties of a MarkersUpdate.
         * @memberof Operation
         * @interface IMarkersUpdate
         * @property {number|null} [siteId] MarkersUpdate siteId
         * @property {Object.<string,Operation.MarkersUpdate.ILayerOperation>|null} [layerOperations] MarkersUpdate layerOperations
         */

        /**
         * Constructs a new MarkersUpdate.
         * @memberof Operation
         * @classdesc Represents a MarkersUpdate.
         * @implements IMarkersUpdate
         * @constructor
         * @param {Operation.IMarkersUpdate=} [properties] Properties to set
         */
        function MarkersUpdate(properties) {
            this.layerOperations = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MarkersUpdate siteId.
         * @member {number} siteId
         * @memberof Operation.MarkersUpdate
         * @instance
         */
        MarkersUpdate.prototype.siteId = 0;

        /**
         * MarkersUpdate layerOperations.
         * @member {Object.<string,Operation.MarkersUpdate.ILayerOperation>} layerOperations
         * @memberof Operation.MarkersUpdate
         * @instance
         */
        MarkersUpdate.prototype.layerOperations = $util.emptyObject;

        /**
         * Creates a new MarkersUpdate instance using the specified properties.
         * @function create
         * @memberof Operation.MarkersUpdate
         * @static
         * @param {Operation.IMarkersUpdate=} [properties] Properties to set
         * @returns {Operation.MarkersUpdate} MarkersUpdate instance
         */
        MarkersUpdate.create = function create(properties) {
            return new MarkersUpdate(properties);
        };

        /**
         * Encodes the specified MarkersUpdate message. Does not implicitly {@link Operation.MarkersUpdate.verify|verify} messages.
         * @function encode
         * @memberof Operation.MarkersUpdate
         * @static
         * @param {Operation.IMarkersUpdate} message MarkersUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MarkersUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.siteId != null && message.hasOwnProperty("siteId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.siteId);
            if (message.layerOperations != null && message.hasOwnProperty("layerOperations"))
                for (let keys = Object.keys(message.layerOperations), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                    $root.Operation.MarkersUpdate.LayerOperation.encode(message.layerOperations[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified MarkersUpdate message, length delimited. Does not implicitly {@link Operation.MarkersUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Operation.MarkersUpdate
         * @static
         * @param {Operation.IMarkersUpdate} message MarkersUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MarkersUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MarkersUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof Operation.MarkersUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Operation.MarkersUpdate} MarkersUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MarkersUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Operation.MarkersUpdate(), key;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.siteId = reader.uint32();
                    break;
                case 2:
                    reader.skip().pos++;
                    if (message.layerOperations === $util.emptyObject)
                        message.layerOperations = {};
                    key = reader.uint32();
                    reader.pos++;
                    message.layerOperations[key] = $root.Operation.MarkersUpdate.LayerOperation.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MarkersUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Operation.MarkersUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Operation.MarkersUpdate} MarkersUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MarkersUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MarkersUpdate message.
         * @function verify
         * @memberof Operation.MarkersUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MarkersUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.siteId != null && message.hasOwnProperty("siteId"))
                if (!$util.isInteger(message.siteId))
                    return "siteId: integer expected";
            if (message.layerOperations != null && message.hasOwnProperty("layerOperations")) {
                if (!$util.isObject(message.layerOperations))
                    return "layerOperations: object expected";
                let key = Object.keys(message.layerOperations);
                for (let i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "layerOperations: integer key{k:uint32} expected";
                    {
                        let error = $root.Operation.MarkersUpdate.LayerOperation.verify(message.layerOperations[key[i]]);
                        if (error)
                            return "layerOperations." + error;
                    }
                }
            }
            return null;
        };

        /**
         * Creates a MarkersUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Operation.MarkersUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Operation.MarkersUpdate} MarkersUpdate
         */
        MarkersUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.Operation.MarkersUpdate)
                return object;
            let message = new $root.Operation.MarkersUpdate();
            if (object.siteId != null)
                message.siteId = object.siteId >>> 0;
            if (object.layerOperations) {
                if (typeof object.layerOperations !== "object")
                    throw TypeError(".Operation.MarkersUpdate.layerOperations: object expected");
                message.layerOperations = {};
                for (let keys = Object.keys(object.layerOperations), i = 0; i < keys.length; ++i) {
                    if (typeof object.layerOperations[keys[i]] !== "object")
                        throw TypeError(".Operation.MarkersUpdate.layerOperations: object expected");
                    message.layerOperations[keys[i]] = $root.Operation.MarkersUpdate.LayerOperation.fromObject(object.layerOperations[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MarkersUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Operation.MarkersUpdate
         * @static
         * @param {Operation.MarkersUpdate} message MarkersUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MarkersUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.layerOperations = {};
            if (options.defaults)
                object.siteId = 0;
            if (message.siteId != null && message.hasOwnProperty("siteId"))
                object.siteId = message.siteId;
            let keys2;
            if (message.layerOperations && (keys2 = Object.keys(message.layerOperations)).length) {
                object.layerOperations = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.layerOperations[keys2[j]] = $root.Operation.MarkersUpdate.LayerOperation.toObject(message.layerOperations[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this MarkersUpdate to JSON.
         * @function toJSON
         * @memberof Operation.MarkersUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MarkersUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        MarkersUpdate.LayerOperation = (function() {

            /**
             * Properties of a LayerOperation.
             * @memberof Operation.MarkersUpdate
             * @interface ILayerOperation
             * @property {boolean|null} [isDeletion] LayerOperation isDeletion
             * @property {Object.<string,Operation.MarkersUpdate.IMarkerOperation>|null} [markerOperations] LayerOperation markerOperations
             */

            /**
             * Constructs a new LayerOperation.
             * @memberof Operation.MarkersUpdate
             * @classdesc Represents a LayerOperation.
             * @implements ILayerOperation
             * @constructor
             * @param {Operation.MarkersUpdate.ILayerOperation=} [properties] Properties to set
             */
            function LayerOperation(properties) {
                this.markerOperations = {};
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LayerOperation isDeletion.
             * @member {boolean} isDeletion
             * @memberof Operation.MarkersUpdate.LayerOperation
             * @instance
             */
            LayerOperation.prototype.isDeletion = false;

            /**
             * LayerOperation markerOperations.
             * @member {Object.<string,Operation.MarkersUpdate.IMarkerOperation>} markerOperations
             * @memberof Operation.MarkersUpdate.LayerOperation
             * @instance
             */
            LayerOperation.prototype.markerOperations = $util.emptyObject;

            /**
             * Creates a new LayerOperation instance using the specified properties.
             * @function create
             * @memberof Operation.MarkersUpdate.LayerOperation
             * @static
             * @param {Operation.MarkersUpdate.ILayerOperation=} [properties] Properties to set
             * @returns {Operation.MarkersUpdate.LayerOperation} LayerOperation instance
             */
            LayerOperation.create = function create(properties) {
                return new LayerOperation(properties);
            };

            /**
             * Encodes the specified LayerOperation message. Does not implicitly {@link Operation.MarkersUpdate.LayerOperation.verify|verify} messages.
             * @function encode
             * @memberof Operation.MarkersUpdate.LayerOperation
             * @static
             * @param {Operation.MarkersUpdate.ILayerOperation} message LayerOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LayerOperation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.isDeletion != null && message.hasOwnProperty("isDeletion"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isDeletion);
                if (message.markerOperations != null && message.hasOwnProperty("markerOperations"))
                    for (let keys = Object.keys(message.markerOperations), i = 0; i < keys.length; ++i) {
                        writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                        $root.Operation.MarkersUpdate.MarkerOperation.encode(message.markerOperations[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                    }
                return writer;
            };

            /**
             * Encodes the specified LayerOperation message, length delimited. Does not implicitly {@link Operation.MarkersUpdate.LayerOperation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Operation.MarkersUpdate.LayerOperation
             * @static
             * @param {Operation.MarkersUpdate.ILayerOperation} message LayerOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LayerOperation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LayerOperation message from the specified reader or buffer.
             * @function decode
             * @memberof Operation.MarkersUpdate.LayerOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Operation.MarkersUpdate.LayerOperation} LayerOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LayerOperation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Operation.MarkersUpdate.LayerOperation(), key;
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.isDeletion = reader.bool();
                        break;
                    case 2:
                        reader.skip().pos++;
                        if (message.markerOperations === $util.emptyObject)
                            message.markerOperations = {};
                        key = reader.uint32();
                        reader.pos++;
                        message.markerOperations[key] = $root.Operation.MarkersUpdate.MarkerOperation.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LayerOperation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Operation.MarkersUpdate.LayerOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Operation.MarkersUpdate.LayerOperation} LayerOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LayerOperation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LayerOperation message.
             * @function verify
             * @memberof Operation.MarkersUpdate.LayerOperation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LayerOperation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.isDeletion != null && message.hasOwnProperty("isDeletion"))
                    if (typeof message.isDeletion !== "boolean")
                        return "isDeletion: boolean expected";
                if (message.markerOperations != null && message.hasOwnProperty("markerOperations")) {
                    if (!$util.isObject(message.markerOperations))
                        return "markerOperations: object expected";
                    let key = Object.keys(message.markerOperations);
                    for (let i = 0; i < key.length; ++i) {
                        if (!$util.key32Re.test(key[i]))
                            return "markerOperations: integer key{k:uint32} expected";
                        {
                            let error = $root.Operation.MarkersUpdate.MarkerOperation.verify(message.markerOperations[key[i]]);
                            if (error)
                                return "markerOperations." + error;
                        }
                    }
                }
                return null;
            };

            /**
             * Creates a LayerOperation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Operation.MarkersUpdate.LayerOperation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Operation.MarkersUpdate.LayerOperation} LayerOperation
             */
            LayerOperation.fromObject = function fromObject(object) {
                if (object instanceof $root.Operation.MarkersUpdate.LayerOperation)
                    return object;
                let message = new $root.Operation.MarkersUpdate.LayerOperation();
                if (object.isDeletion != null)
                    message.isDeletion = Boolean(object.isDeletion);
                if (object.markerOperations) {
                    if (typeof object.markerOperations !== "object")
                        throw TypeError(".Operation.MarkersUpdate.LayerOperation.markerOperations: object expected");
                    message.markerOperations = {};
                    for (let keys = Object.keys(object.markerOperations), i = 0; i < keys.length; ++i) {
                        if (typeof object.markerOperations[keys[i]] !== "object")
                            throw TypeError(".Operation.MarkersUpdate.LayerOperation.markerOperations: object expected");
                        message.markerOperations[keys[i]] = $root.Operation.MarkersUpdate.MarkerOperation.fromObject(object.markerOperations[keys[i]]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a LayerOperation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Operation.MarkersUpdate.LayerOperation
             * @static
             * @param {Operation.MarkersUpdate.LayerOperation} message LayerOperation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LayerOperation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.objects || options.defaults)
                    object.markerOperations = {};
                if (options.defaults)
                    object.isDeletion = false;
                if (message.isDeletion != null && message.hasOwnProperty("isDeletion"))
                    object.isDeletion = message.isDeletion;
                let keys2;
                if (message.markerOperations && (keys2 = Object.keys(message.markerOperations)).length) {
                    object.markerOperations = {};
                    for (let j = 0; j < keys2.length; ++j)
                        object.markerOperations[keys2[j]] = $root.Operation.MarkersUpdate.MarkerOperation.toObject(message.markerOperations[keys2[j]], options);
                }
                return object;
            };

            /**
             * Converts this LayerOperation to JSON.
             * @function toJSON
             * @memberof Operation.MarkersUpdate.LayerOperation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LayerOperation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return LayerOperation;
        })();

        MarkersUpdate.MarkerOperation = (function() {

            /**
             * Properties of a MarkerOperation.
             * @memberof Operation.MarkersUpdate
             * @interface IMarkerOperation
             * @property {boolean|null} [isDeletion] MarkerOperation isDeletion
             * @property {Operation.MarkersUpdate.IMarkerUpdate|null} [markerUpdate] MarkerOperation markerUpdate
             */

            /**
             * Constructs a new MarkerOperation.
             * @memberof Operation.MarkersUpdate
             * @classdesc Represents a MarkerOperation.
             * @implements IMarkerOperation
             * @constructor
             * @param {Operation.MarkersUpdate.IMarkerOperation=} [properties] Properties to set
             */
            function MarkerOperation(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MarkerOperation isDeletion.
             * @member {boolean} isDeletion
             * @memberof Operation.MarkersUpdate.MarkerOperation
             * @instance
             */
            MarkerOperation.prototype.isDeletion = false;

            /**
             * MarkerOperation markerUpdate.
             * @member {Operation.MarkersUpdate.IMarkerUpdate|null|undefined} markerUpdate
             * @memberof Operation.MarkersUpdate.MarkerOperation
             * @instance
             */
            MarkerOperation.prototype.markerUpdate = null;

            /**
             * Creates a new MarkerOperation instance using the specified properties.
             * @function create
             * @memberof Operation.MarkersUpdate.MarkerOperation
             * @static
             * @param {Operation.MarkersUpdate.IMarkerOperation=} [properties] Properties to set
             * @returns {Operation.MarkersUpdate.MarkerOperation} MarkerOperation instance
             */
            MarkerOperation.create = function create(properties) {
                return new MarkerOperation(properties);
            };

            /**
             * Encodes the specified MarkerOperation message. Does not implicitly {@link Operation.MarkersUpdate.MarkerOperation.verify|verify} messages.
             * @function encode
             * @memberof Operation.MarkersUpdate.MarkerOperation
             * @static
             * @param {Operation.MarkersUpdate.IMarkerOperation} message MarkerOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MarkerOperation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.isDeletion != null && message.hasOwnProperty("isDeletion"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isDeletion);
                if (message.markerUpdate != null && message.hasOwnProperty("markerUpdate"))
                    $root.Operation.MarkersUpdate.MarkerUpdate.encode(message.markerUpdate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified MarkerOperation message, length delimited. Does not implicitly {@link Operation.MarkersUpdate.MarkerOperation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Operation.MarkersUpdate.MarkerOperation
             * @static
             * @param {Operation.MarkersUpdate.IMarkerOperation} message MarkerOperation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MarkerOperation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MarkerOperation message from the specified reader or buffer.
             * @function decode
             * @memberof Operation.MarkersUpdate.MarkerOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Operation.MarkersUpdate.MarkerOperation} MarkerOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MarkerOperation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Operation.MarkersUpdate.MarkerOperation();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.isDeletion = reader.bool();
                        break;
                    case 2:
                        message.markerUpdate = $root.Operation.MarkersUpdate.MarkerUpdate.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MarkerOperation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Operation.MarkersUpdate.MarkerOperation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Operation.MarkersUpdate.MarkerOperation} MarkerOperation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MarkerOperation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MarkerOperation message.
             * @function verify
             * @memberof Operation.MarkersUpdate.MarkerOperation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MarkerOperation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.isDeletion != null && message.hasOwnProperty("isDeletion"))
                    if (typeof message.isDeletion !== "boolean")
                        return "isDeletion: boolean expected";
                if (message.markerUpdate != null && message.hasOwnProperty("markerUpdate")) {
                    let error = $root.Operation.MarkersUpdate.MarkerUpdate.verify(message.markerUpdate);
                    if (error)
                        return "markerUpdate." + error;
                }
                return null;
            };

            /**
             * Creates a MarkerOperation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Operation.MarkersUpdate.MarkerOperation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Operation.MarkersUpdate.MarkerOperation} MarkerOperation
             */
            MarkerOperation.fromObject = function fromObject(object) {
                if (object instanceof $root.Operation.MarkersUpdate.MarkerOperation)
                    return object;
                let message = new $root.Operation.MarkersUpdate.MarkerOperation();
                if (object.isDeletion != null)
                    message.isDeletion = Boolean(object.isDeletion);
                if (object.markerUpdate != null) {
                    if (typeof object.markerUpdate !== "object")
                        throw TypeError(".Operation.MarkersUpdate.MarkerOperation.markerUpdate: object expected");
                    message.markerUpdate = $root.Operation.MarkersUpdate.MarkerUpdate.fromObject(object.markerUpdate);
                }
                return message;
            };

            /**
             * Creates a plain object from a MarkerOperation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Operation.MarkersUpdate.MarkerOperation
             * @static
             * @param {Operation.MarkersUpdate.MarkerOperation} message MarkerOperation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MarkerOperation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.isDeletion = false;
                    object.markerUpdate = null;
                }
                if (message.isDeletion != null && message.hasOwnProperty("isDeletion"))
                    object.isDeletion = message.isDeletion;
                if (message.markerUpdate != null && message.hasOwnProperty("markerUpdate"))
                    object.markerUpdate = $root.Operation.MarkersUpdate.MarkerUpdate.toObject(message.markerUpdate, options);
                return object;
            };

            /**
             * Converts this MarkerOperation to JSON.
             * @function toJSON
             * @memberof Operation.MarkersUpdate.MarkerOperation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MarkerOperation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MarkerOperation;
        })();

        MarkersUpdate.MarkerUpdate = (function() {

            /**
             * Properties of a MarkerUpdate.
             * @memberof Operation.MarkersUpdate
             * @interface IMarkerUpdate
             * @property {Operation.MarkersUpdate.ILogicalRange|null} [range] MarkerUpdate range
             * @property {boolean|null} [exclusive] MarkerUpdate exclusive
             * @property {boolean|null} [reversed] MarkerUpdate reversed
             * @property {boolean|null} [tailed] MarkerUpdate tailed
             */

            /**
             * Constructs a new MarkerUpdate.
             * @memberof Operation.MarkersUpdate
             * @classdesc Represents a MarkerUpdate.
             * @implements IMarkerUpdate
             * @constructor
             * @param {Operation.MarkersUpdate.IMarkerUpdate=} [properties] Properties to set
             */
            function MarkerUpdate(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MarkerUpdate range.
             * @member {Operation.MarkersUpdate.ILogicalRange|null|undefined} range
             * @memberof Operation.MarkersUpdate.MarkerUpdate
             * @instance
             */
            MarkerUpdate.prototype.range = null;

            /**
             * MarkerUpdate exclusive.
             * @member {boolean} exclusive
             * @memberof Operation.MarkersUpdate.MarkerUpdate
             * @instance
             */
            MarkerUpdate.prototype.exclusive = false;

            /**
             * MarkerUpdate reversed.
             * @member {boolean} reversed
             * @memberof Operation.MarkersUpdate.MarkerUpdate
             * @instance
             */
            MarkerUpdate.prototype.reversed = false;

            /**
             * MarkerUpdate tailed.
             * @member {boolean} tailed
             * @memberof Operation.MarkersUpdate.MarkerUpdate
             * @instance
             */
            MarkerUpdate.prototype.tailed = false;

            /**
             * Creates a new MarkerUpdate instance using the specified properties.
             * @function create
             * @memberof Operation.MarkersUpdate.MarkerUpdate
             * @static
             * @param {Operation.MarkersUpdate.IMarkerUpdate=} [properties] Properties to set
             * @returns {Operation.MarkersUpdate.MarkerUpdate} MarkerUpdate instance
             */
            MarkerUpdate.create = function create(properties) {
                return new MarkerUpdate(properties);
            };

            /**
             * Encodes the specified MarkerUpdate message. Does not implicitly {@link Operation.MarkersUpdate.MarkerUpdate.verify|verify} messages.
             * @function encode
             * @memberof Operation.MarkersUpdate.MarkerUpdate
             * @static
             * @param {Operation.MarkersUpdate.IMarkerUpdate} message MarkerUpdate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MarkerUpdate.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.range != null && message.hasOwnProperty("range"))
                    $root.Operation.MarkersUpdate.LogicalRange.encode(message.range, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.exclusive != null && message.hasOwnProperty("exclusive"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.exclusive);
                if (message.reversed != null && message.hasOwnProperty("reversed"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.reversed);
                if (message.tailed != null && message.hasOwnProperty("tailed"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.tailed);
                return writer;
            };

            /**
             * Encodes the specified MarkerUpdate message, length delimited. Does not implicitly {@link Operation.MarkersUpdate.MarkerUpdate.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Operation.MarkersUpdate.MarkerUpdate
             * @static
             * @param {Operation.MarkersUpdate.IMarkerUpdate} message MarkerUpdate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MarkerUpdate.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MarkerUpdate message from the specified reader or buffer.
             * @function decode
             * @memberof Operation.MarkersUpdate.MarkerUpdate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Operation.MarkersUpdate.MarkerUpdate} MarkerUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MarkerUpdate.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Operation.MarkersUpdate.MarkerUpdate();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.range = $root.Operation.MarkersUpdate.LogicalRange.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.exclusive = reader.bool();
                        break;
                    case 3:
                        message.reversed = reader.bool();
                        break;
                    case 4:
                        message.tailed = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MarkerUpdate message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Operation.MarkersUpdate.MarkerUpdate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Operation.MarkersUpdate.MarkerUpdate} MarkerUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MarkerUpdate.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MarkerUpdate message.
             * @function verify
             * @memberof Operation.MarkersUpdate.MarkerUpdate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MarkerUpdate.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.range != null && message.hasOwnProperty("range")) {
                    let error = $root.Operation.MarkersUpdate.LogicalRange.verify(message.range);
                    if (error)
                        return "range." + error;
                }
                if (message.exclusive != null && message.hasOwnProperty("exclusive"))
                    if (typeof message.exclusive !== "boolean")
                        return "exclusive: boolean expected";
                if (message.reversed != null && message.hasOwnProperty("reversed"))
                    if (typeof message.reversed !== "boolean")
                        return "reversed: boolean expected";
                if (message.tailed != null && message.hasOwnProperty("tailed"))
                    if (typeof message.tailed !== "boolean")
                        return "tailed: boolean expected";
                return null;
            };

            /**
             * Creates a MarkerUpdate message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Operation.MarkersUpdate.MarkerUpdate
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Operation.MarkersUpdate.MarkerUpdate} MarkerUpdate
             */
            MarkerUpdate.fromObject = function fromObject(object) {
                if (object instanceof $root.Operation.MarkersUpdate.MarkerUpdate)
                    return object;
                let message = new $root.Operation.MarkersUpdate.MarkerUpdate();
                if (object.range != null) {
                    if (typeof object.range !== "object")
                        throw TypeError(".Operation.MarkersUpdate.MarkerUpdate.range: object expected");
                    message.range = $root.Operation.MarkersUpdate.LogicalRange.fromObject(object.range);
                }
                if (object.exclusive != null)
                    message.exclusive = Boolean(object.exclusive);
                if (object.reversed != null)
                    message.reversed = Boolean(object.reversed);
                if (object.tailed != null)
                    message.tailed = Boolean(object.tailed);
                return message;
            };

            /**
             * Creates a plain object from a MarkerUpdate message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Operation.MarkersUpdate.MarkerUpdate
             * @static
             * @param {Operation.MarkersUpdate.MarkerUpdate} message MarkerUpdate
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MarkerUpdate.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.range = null;
                    object.exclusive = false;
                    object.reversed = false;
                    object.tailed = false;
                }
                if (message.range != null && message.hasOwnProperty("range"))
                    object.range = $root.Operation.MarkersUpdate.LogicalRange.toObject(message.range, options);
                if (message.exclusive != null && message.hasOwnProperty("exclusive"))
                    object.exclusive = message.exclusive;
                if (message.reversed != null && message.hasOwnProperty("reversed"))
                    object.reversed = message.reversed;
                if (message.tailed != null && message.hasOwnProperty("tailed"))
                    object.tailed = message.tailed;
                return object;
            };

            /**
             * Converts this MarkerUpdate to JSON.
             * @function toJSON
             * @memberof Operation.MarkersUpdate.MarkerUpdate
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MarkerUpdate.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MarkerUpdate;
        })();

        MarkersUpdate.LogicalRange = (function() {

            /**
             * Properties of a LogicalRange.
             * @memberof Operation.MarkersUpdate
             * @interface ILogicalRange
             * @property {Operation.ISpliceId|null} [startDependencyId] LogicalRange startDependencyId
             * @property {Operation.IPoint|null} [offsetInStartDependency] LogicalRange offsetInStartDependency
             * @property {Operation.ISpliceId|null} [endDependencyId] LogicalRange endDependencyId
             * @property {Operation.IPoint|null} [offsetInEndDependency] LogicalRange offsetInEndDependency
             */

            /**
             * Constructs a new LogicalRange.
             * @memberof Operation.MarkersUpdate
             * @classdesc Represents a LogicalRange.
             * @implements ILogicalRange
             * @constructor
             * @param {Operation.MarkersUpdate.ILogicalRange=} [properties] Properties to set
             */
            function LogicalRange(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LogicalRange startDependencyId.
             * @member {Operation.ISpliceId|null|undefined} startDependencyId
             * @memberof Operation.MarkersUpdate.LogicalRange
             * @instance
             */
            LogicalRange.prototype.startDependencyId = null;

            /**
             * LogicalRange offsetInStartDependency.
             * @member {Operation.IPoint|null|undefined} offsetInStartDependency
             * @memberof Operation.MarkersUpdate.LogicalRange
             * @instance
             */
            LogicalRange.prototype.offsetInStartDependency = null;

            /**
             * LogicalRange endDependencyId.
             * @member {Operation.ISpliceId|null|undefined} endDependencyId
             * @memberof Operation.MarkersUpdate.LogicalRange
             * @instance
             */
            LogicalRange.prototype.endDependencyId = null;

            /**
             * LogicalRange offsetInEndDependency.
             * @member {Operation.IPoint|null|undefined} offsetInEndDependency
             * @memberof Operation.MarkersUpdate.LogicalRange
             * @instance
             */
            LogicalRange.prototype.offsetInEndDependency = null;

            /**
             * Creates a new LogicalRange instance using the specified properties.
             * @function create
             * @memberof Operation.MarkersUpdate.LogicalRange
             * @static
             * @param {Operation.MarkersUpdate.ILogicalRange=} [properties] Properties to set
             * @returns {Operation.MarkersUpdate.LogicalRange} LogicalRange instance
             */
            LogicalRange.create = function create(properties) {
                return new LogicalRange(properties);
            };

            /**
             * Encodes the specified LogicalRange message. Does not implicitly {@link Operation.MarkersUpdate.LogicalRange.verify|verify} messages.
             * @function encode
             * @memberof Operation.MarkersUpdate.LogicalRange
             * @static
             * @param {Operation.MarkersUpdate.ILogicalRange} message LogicalRange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LogicalRange.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.startDependencyId != null && message.hasOwnProperty("startDependencyId"))
                    $root.Operation.SpliceId.encode(message.startDependencyId, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.offsetInStartDependency != null && message.hasOwnProperty("offsetInStartDependency"))
                    $root.Operation.Point.encode(message.offsetInStartDependency, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.endDependencyId != null && message.hasOwnProperty("endDependencyId"))
                    $root.Operation.SpliceId.encode(message.endDependencyId, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.offsetInEndDependency != null && message.hasOwnProperty("offsetInEndDependency"))
                    $root.Operation.Point.encode(message.offsetInEndDependency, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified LogicalRange message, length delimited. Does not implicitly {@link Operation.MarkersUpdate.LogicalRange.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Operation.MarkersUpdate.LogicalRange
             * @static
             * @param {Operation.MarkersUpdate.ILogicalRange} message LogicalRange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LogicalRange.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LogicalRange message from the specified reader or buffer.
             * @function decode
             * @memberof Operation.MarkersUpdate.LogicalRange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Operation.MarkersUpdate.LogicalRange} LogicalRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LogicalRange.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Operation.MarkersUpdate.LogicalRange();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.startDependencyId = $root.Operation.SpliceId.decode(reader, reader.uint32());
                        break;
                    case 2:
                        message.offsetInStartDependency = $root.Operation.Point.decode(reader, reader.uint32());
                        break;
                    case 3:
                        message.endDependencyId = $root.Operation.SpliceId.decode(reader, reader.uint32());
                        break;
                    case 4:
                        message.offsetInEndDependency = $root.Operation.Point.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LogicalRange message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Operation.MarkersUpdate.LogicalRange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Operation.MarkersUpdate.LogicalRange} LogicalRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LogicalRange.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LogicalRange message.
             * @function verify
             * @memberof Operation.MarkersUpdate.LogicalRange
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LogicalRange.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.startDependencyId != null && message.hasOwnProperty("startDependencyId")) {
                    let error = $root.Operation.SpliceId.verify(message.startDependencyId);
                    if (error)
                        return "startDependencyId." + error;
                }
                if (message.offsetInStartDependency != null && message.hasOwnProperty("offsetInStartDependency")) {
                    let error = $root.Operation.Point.verify(message.offsetInStartDependency);
                    if (error)
                        return "offsetInStartDependency." + error;
                }
                if (message.endDependencyId != null && message.hasOwnProperty("endDependencyId")) {
                    let error = $root.Operation.SpliceId.verify(message.endDependencyId);
                    if (error)
                        return "endDependencyId." + error;
                }
                if (message.offsetInEndDependency != null && message.hasOwnProperty("offsetInEndDependency")) {
                    let error = $root.Operation.Point.verify(message.offsetInEndDependency);
                    if (error)
                        return "offsetInEndDependency." + error;
                }
                return null;
            };

            /**
             * Creates a LogicalRange message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Operation.MarkersUpdate.LogicalRange
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Operation.MarkersUpdate.LogicalRange} LogicalRange
             */
            LogicalRange.fromObject = function fromObject(object) {
                if (object instanceof $root.Operation.MarkersUpdate.LogicalRange)
                    return object;
                let message = new $root.Operation.MarkersUpdate.LogicalRange();
                if (object.startDependencyId != null) {
                    if (typeof object.startDependencyId !== "object")
                        throw TypeError(".Operation.MarkersUpdate.LogicalRange.startDependencyId: object expected");
                    message.startDependencyId = $root.Operation.SpliceId.fromObject(object.startDependencyId);
                }
                if (object.offsetInStartDependency != null) {
                    if (typeof object.offsetInStartDependency !== "object")
                        throw TypeError(".Operation.MarkersUpdate.LogicalRange.offsetInStartDependency: object expected");
                    message.offsetInStartDependency = $root.Operation.Point.fromObject(object.offsetInStartDependency);
                }
                if (object.endDependencyId != null) {
                    if (typeof object.endDependencyId !== "object")
                        throw TypeError(".Operation.MarkersUpdate.LogicalRange.endDependencyId: object expected");
                    message.endDependencyId = $root.Operation.SpliceId.fromObject(object.endDependencyId);
                }
                if (object.offsetInEndDependency != null) {
                    if (typeof object.offsetInEndDependency !== "object")
                        throw TypeError(".Operation.MarkersUpdate.LogicalRange.offsetInEndDependency: object expected");
                    message.offsetInEndDependency = $root.Operation.Point.fromObject(object.offsetInEndDependency);
                }
                return message;
            };

            /**
             * Creates a plain object from a LogicalRange message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Operation.MarkersUpdate.LogicalRange
             * @static
             * @param {Operation.MarkersUpdate.LogicalRange} message LogicalRange
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LogicalRange.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.startDependencyId = null;
                    object.offsetInStartDependency = null;
                    object.endDependencyId = null;
                    object.offsetInEndDependency = null;
                }
                if (message.startDependencyId != null && message.hasOwnProperty("startDependencyId"))
                    object.startDependencyId = $root.Operation.SpliceId.toObject(message.startDependencyId, options);
                if (message.offsetInStartDependency != null && message.hasOwnProperty("offsetInStartDependency"))
                    object.offsetInStartDependency = $root.Operation.Point.toObject(message.offsetInStartDependency, options);
                if (message.endDependencyId != null && message.hasOwnProperty("endDependencyId"))
                    object.endDependencyId = $root.Operation.SpliceId.toObject(message.endDependencyId, options);
                if (message.offsetInEndDependency != null && message.hasOwnProperty("offsetInEndDependency"))
                    object.offsetInEndDependency = $root.Operation.Point.toObject(message.offsetInEndDependency, options);
                return object;
            };

            /**
             * Converts this LogicalRange to JSON.
             * @function toJSON
             * @memberof Operation.MarkersUpdate.LogicalRange
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LogicalRange.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return LogicalRange;
        })();

        return MarkersUpdate;
    })();

    Operation.SpliceId = (function() {

        /**
         * Properties of a SpliceId.
         * @memberof Operation
         * @interface ISpliceId
         * @property {number|null} [site] SpliceId site
         * @property {number|null} [seq] SpliceId seq
         */

        /**
         * Constructs a new SpliceId.
         * @memberof Operation
         * @classdesc Represents a SpliceId.
         * @implements ISpliceId
         * @constructor
         * @param {Operation.ISpliceId=} [properties] Properties to set
         */
        function SpliceId(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SpliceId site.
         * @member {number} site
         * @memberof Operation.SpliceId
         * @instance
         */
        SpliceId.prototype.site = 0;

        /**
         * SpliceId seq.
         * @member {number} seq
         * @memberof Operation.SpliceId
         * @instance
         */
        SpliceId.prototype.seq = 0;

        /**
         * Creates a new SpliceId instance using the specified properties.
         * @function create
         * @memberof Operation.SpliceId
         * @static
         * @param {Operation.ISpliceId=} [properties] Properties to set
         * @returns {Operation.SpliceId} SpliceId instance
         */
        SpliceId.create = function create(properties) {
            return new SpliceId(properties);
        };

        /**
         * Encodes the specified SpliceId message. Does not implicitly {@link Operation.SpliceId.verify|verify} messages.
         * @function encode
         * @memberof Operation.SpliceId
         * @static
         * @param {Operation.ISpliceId} message SpliceId message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpliceId.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.site != null && message.hasOwnProperty("site"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.site);
            if (message.seq != null && message.hasOwnProperty("seq"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.seq);
            return writer;
        };

        /**
         * Encodes the specified SpliceId message, length delimited. Does not implicitly {@link Operation.SpliceId.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Operation.SpliceId
         * @static
         * @param {Operation.ISpliceId} message SpliceId message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SpliceId.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SpliceId message from the specified reader or buffer.
         * @function decode
         * @memberof Operation.SpliceId
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Operation.SpliceId} SpliceId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpliceId.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Operation.SpliceId();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.site = reader.uint32();
                    break;
                case 2:
                    message.seq = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SpliceId message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Operation.SpliceId
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Operation.SpliceId} SpliceId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SpliceId.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SpliceId message.
         * @function verify
         * @memberof Operation.SpliceId
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SpliceId.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.site != null && message.hasOwnProperty("site"))
                if (!$util.isInteger(message.site))
                    return "site: integer expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq))
                    return "seq: integer expected";
            return null;
        };

        /**
         * Creates a SpliceId message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Operation.SpliceId
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Operation.SpliceId} SpliceId
         */
        SpliceId.fromObject = function fromObject(object) {
            if (object instanceof $root.Operation.SpliceId)
                return object;
            let message = new $root.Operation.SpliceId();
            if (object.site != null)
                message.site = object.site >>> 0;
            if (object.seq != null)
                message.seq = object.seq >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a SpliceId message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Operation.SpliceId
         * @static
         * @param {Operation.SpliceId} message SpliceId
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SpliceId.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.site = 0;
                object.seq = 0;
            }
            if (message.site != null && message.hasOwnProperty("site"))
                object.site = message.site;
            if (message.seq != null && message.hasOwnProperty("seq"))
                object.seq = message.seq;
            return object;
        };

        /**
         * Converts this SpliceId to JSON.
         * @function toJSON
         * @memberof Operation.SpliceId
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SpliceId.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SpliceId;
    })();

    Operation.Point = (function() {

        /**
         * Properties of a Point.
         * @memberof Operation
         * @interface IPoint
         * @property {number|null} [row] Point row
         * @property {number|null} [column] Point column
         */

        /**
         * Constructs a new Point.
         * @memberof Operation
         * @classdesc Represents a Point.
         * @implements IPoint
         * @constructor
         * @param {Operation.IPoint=} [properties] Properties to set
         */
        function Point(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Point row.
         * @member {number} row
         * @memberof Operation.Point
         * @instance
         */
        Point.prototype.row = 0;

        /**
         * Point column.
         * @member {number} column
         * @memberof Operation.Point
         * @instance
         */
        Point.prototype.column = 0;

        /**
         * Creates a new Point instance using the specified properties.
         * @function create
         * @memberof Operation.Point
         * @static
         * @param {Operation.IPoint=} [properties] Properties to set
         * @returns {Operation.Point} Point instance
         */
        Point.create = function create(properties) {
            return new Point(properties);
        };

        /**
         * Encodes the specified Point message. Does not implicitly {@link Operation.Point.verify|verify} messages.
         * @function encode
         * @memberof Operation.Point
         * @static
         * @param {Operation.IPoint} message Point message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Point.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.row != null && message.hasOwnProperty("row"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.row);
            if (message.column != null && message.hasOwnProperty("column"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.column);
            return writer;
        };

        /**
         * Encodes the specified Point message, length delimited. Does not implicitly {@link Operation.Point.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Operation.Point
         * @static
         * @param {Operation.IPoint} message Point message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Point.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Point message from the specified reader or buffer.
         * @function decode
         * @memberof Operation.Point
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Operation.Point} Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Point.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Operation.Point();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.row = reader.uint32();
                    break;
                case 2:
                    message.column = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Point message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Operation.Point
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Operation.Point} Point
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Point.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Point message.
         * @function verify
         * @memberof Operation.Point
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Point.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.row != null && message.hasOwnProperty("row"))
                if (!$util.isInteger(message.row))
                    return "row: integer expected";
            if (message.column != null && message.hasOwnProperty("column"))
                if (!$util.isInteger(message.column))
                    return "column: integer expected";
            return null;
        };

        /**
         * Creates a Point message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Operation.Point
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Operation.Point} Point
         */
        Point.fromObject = function fromObject(object) {
            if (object instanceof $root.Operation.Point)
                return object;
            let message = new $root.Operation.Point();
            if (object.row != null)
                message.row = object.row >>> 0;
            if (object.column != null)
                message.column = object.column >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Point message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Operation.Point
         * @static
         * @param {Operation.Point} message Point
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Point.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.row = 0;
                object.column = 0;
            }
            if (message.row != null && message.hasOwnProperty("row"))
                object.row = message.row;
            if (message.column != null && message.hasOwnProperty("column"))
                object.column = message.column;
            return object;
        };

        /**
         * Converts this Point to JSON.
         * @function toJSON
         * @memberof Operation.Point
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Point.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Point;
    })();

    return Operation;
})();