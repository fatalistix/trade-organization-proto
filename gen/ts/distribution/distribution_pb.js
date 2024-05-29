// source: distribution/distribution.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var core_money_pb = require('../core/money_pb.js');
goog.object.extend(proto, core_money_pb);
var product_product_pb = require('../product/product_pb.js');
goog.object.extend(proto, product_product_pb);
var tradingpoint_trading_point_pb = require('../tradingpoint/trading_point_pb.js');
goog.object.extend(proto, tradingpoint_trading_point_pb);
goog.exportSymbol('proto.customer.CreateRequest', null, global);
goog.exportSymbol('proto.customer.CreateResponse', null, global);
goog.exportSymbol('proto.customer.Distribution', null, global);
goog.exportSymbol('proto.customer.ProductDistribution', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.customer.Distribution = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.customer.Distribution.repeatedFields_, null);
};
goog.inherits(proto.customer.Distribution, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.customer.Distribution.displayName = 'proto.customer.Distribution';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.customer.ProductDistribution = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.customer.ProductDistribution, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.customer.ProductDistribution.displayName = 'proto.customer.ProductDistribution';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.customer.CreateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.customer.CreateRequest.repeatedFields_, null);
};
goog.inherits(proto.customer.CreateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.customer.CreateRequest.displayName = 'proto.customer.CreateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.customer.CreateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.customer.CreateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.customer.CreateResponse.displayName = 'proto.customer.CreateResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.customer.Distribution.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.customer.Distribution.prototype.toObject = function(opt_includeInstance) {
  return proto.customer.Distribution.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.customer.Distribution} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.customer.Distribution.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    tradingPointId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    tradingPointType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    productsList: jspb.Message.toObjectList(msg.getProductsList(),
    proto.customer.ProductDistribution.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.customer.Distribution}
 */
proto.customer.Distribution.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.customer.Distribution;
  return proto.customer.Distribution.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.customer.Distribution} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.customer.Distribution}
 */
proto.customer.Distribution.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTradingPointId(value);
      break;
    case 3:
      var value = /** @type {!proto.tradingpoint.TradingPointType} */ (reader.readEnum());
      msg.setTradingPointType(value);
      break;
    case 4:
      var value = new proto.customer.ProductDistribution;
      reader.readMessage(value,proto.customer.ProductDistribution.deserializeBinaryFromReader);
      msg.addProducts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.customer.Distribution.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.customer.Distribution.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.customer.Distribution} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.customer.Distribution.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTradingPointId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getTradingPointType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getProductsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.customer.ProductDistribution.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.customer.Distribution.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.customer.Distribution} returns this
 */
proto.customer.Distribution.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 trading_point_id = 2;
 * @return {number}
 */
proto.customer.Distribution.prototype.getTradingPointId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.customer.Distribution} returns this
 */
proto.customer.Distribution.prototype.setTradingPointId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional tradingpoint.TradingPointType trading_point_type = 3;
 * @return {!proto.tradingpoint.TradingPointType}
 */
proto.customer.Distribution.prototype.getTradingPointType = function() {
  return /** @type {!proto.tradingpoint.TradingPointType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.tradingpoint.TradingPointType} value
 * @return {!proto.customer.Distribution} returns this
 */
proto.customer.Distribution.prototype.setTradingPointType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated ProductDistribution products = 4;
 * @return {!Array<!proto.customer.ProductDistribution>}
 */
proto.customer.Distribution.prototype.getProductsList = function() {
  return /** @type{!Array<!proto.customer.ProductDistribution>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.customer.ProductDistribution, 4));
};


/**
 * @param {!Array<!proto.customer.ProductDistribution>} value
 * @return {!proto.customer.Distribution} returns this
*/
proto.customer.Distribution.prototype.setProductsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.customer.ProductDistribution=} opt_value
 * @param {number=} opt_index
 * @return {!proto.customer.ProductDistribution}
 */
proto.customer.Distribution.prototype.addProducts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.customer.ProductDistribution, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.customer.Distribution} returns this
 */
proto.customer.Distribution.prototype.clearProductsList = function() {
  return this.setProductsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.customer.ProductDistribution.prototype.toObject = function(opt_includeInstance) {
  return proto.customer.ProductDistribution.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.customer.ProductDistribution} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.customer.ProductDistribution.toObject = function(includeInstance, msg) {
  var f, obj = {
    quantity: jspb.Message.getFieldWithDefault(msg, 1, 0),
    price: (f = msg.getPrice()) && core_money_pb.Money.toObject(includeInstance, f),
    product: (f = msg.getProduct()) && product_product_pb.Product.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.customer.ProductDistribution}
 */
proto.customer.ProductDistribution.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.customer.ProductDistribution;
  return proto.customer.ProductDistribution.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.customer.ProductDistribution} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.customer.ProductDistribution}
 */
proto.customer.ProductDistribution.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQuantity(value);
      break;
    case 2:
      var value = new core_money_pb.Money;
      reader.readMessage(value,core_money_pb.Money.deserializeBinaryFromReader);
      msg.setPrice(value);
      break;
    case 3:
      var value = new product_product_pb.Product;
      reader.readMessage(value,product_product_pb.Product.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.customer.ProductDistribution.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.customer.ProductDistribution.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.customer.ProductDistribution} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.customer.ProductDistribution.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuantity();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPrice();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      core_money_pb.Money.serializeBinaryToWriter
    );
  }
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      product_product_pb.Product.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 quantity = 1;
 * @return {number}
 */
proto.customer.ProductDistribution.prototype.getQuantity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.customer.ProductDistribution} returns this
 */
proto.customer.ProductDistribution.prototype.setQuantity = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional core.Money price = 2;
 * @return {?proto.core.Money}
 */
proto.customer.ProductDistribution.prototype.getPrice = function() {
  return /** @type{?proto.core.Money} */ (
    jspb.Message.getWrapperField(this, core_money_pb.Money, 2));
};


/**
 * @param {?proto.core.Money|undefined} value
 * @return {!proto.customer.ProductDistribution} returns this
*/
proto.customer.ProductDistribution.prototype.setPrice = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.customer.ProductDistribution} returns this
 */
proto.customer.ProductDistribution.prototype.clearPrice = function() {
  return this.setPrice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.customer.ProductDistribution.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional product.Product product = 3;
 * @return {?proto.product.Product}
 */
proto.customer.ProductDistribution.prototype.getProduct = function() {
  return /** @type{?proto.product.Product} */ (
    jspb.Message.getWrapperField(this, product_product_pb.Product, 3));
};


/**
 * @param {?proto.product.Product|undefined} value
 * @return {!proto.customer.ProductDistribution} returns this
*/
proto.customer.ProductDistribution.prototype.setProduct = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.customer.ProductDistribution} returns this
 */
proto.customer.ProductDistribution.prototype.clearProduct = function() {
  return this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.customer.ProductDistribution.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.customer.CreateRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.customer.CreateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.customer.CreateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.customer.CreateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.customer.CreateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tradingPointId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    tradingPointType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    productsList: jspb.Message.toObjectList(msg.getProductsList(),
    proto.customer.ProductDistribution.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.customer.CreateRequest}
 */
proto.customer.CreateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.customer.CreateRequest;
  return proto.customer.CreateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.customer.CreateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.customer.CreateRequest}
 */
proto.customer.CreateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTradingPointId(value);
      break;
    case 2:
      var value = /** @type {!proto.tradingpoint.TradingPointType} */ (reader.readEnum());
      msg.setTradingPointType(value);
      break;
    case 3:
      var value = new proto.customer.ProductDistribution;
      reader.readMessage(value,proto.customer.ProductDistribution.deserializeBinaryFromReader);
      msg.addProducts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.customer.CreateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.customer.CreateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.customer.CreateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.customer.CreateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTradingPointId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTradingPointType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getProductsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.customer.ProductDistribution.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 trading_point_id = 1;
 * @return {number}
 */
proto.customer.CreateRequest.prototype.getTradingPointId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.customer.CreateRequest} returns this
 */
proto.customer.CreateRequest.prototype.setTradingPointId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional tradingpoint.TradingPointType trading_point_type = 2;
 * @return {!proto.tradingpoint.TradingPointType}
 */
proto.customer.CreateRequest.prototype.getTradingPointType = function() {
  return /** @type {!proto.tradingpoint.TradingPointType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.tradingpoint.TradingPointType} value
 * @return {!proto.customer.CreateRequest} returns this
 */
proto.customer.CreateRequest.prototype.setTradingPointType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated ProductDistribution products = 3;
 * @return {!Array<!proto.customer.ProductDistribution>}
 */
proto.customer.CreateRequest.prototype.getProductsList = function() {
  return /** @type{!Array<!proto.customer.ProductDistribution>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.customer.ProductDistribution, 3));
};


/**
 * @param {!Array<!proto.customer.ProductDistribution>} value
 * @return {!proto.customer.CreateRequest} returns this
*/
proto.customer.CreateRequest.prototype.setProductsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.customer.ProductDistribution=} opt_value
 * @param {number=} opt_index
 * @return {!proto.customer.ProductDistribution}
 */
proto.customer.CreateRequest.prototype.addProducts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.customer.ProductDistribution, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.customer.CreateRequest} returns this
 */
proto.customer.CreateRequest.prototype.clearProductsList = function() {
  return this.setProductsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.customer.CreateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.customer.CreateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.customer.CreateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.customer.CreateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.customer.CreateResponse}
 */
proto.customer.CreateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.customer.CreateResponse;
  return proto.customer.CreateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.customer.CreateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.customer.CreateResponse}
 */
proto.customer.CreateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.customer.CreateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.customer.CreateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.customer.CreateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.customer.CreateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.customer.CreateResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.customer.CreateResponse} returns this
 */
proto.customer.CreateResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


goog.object.extend(exports, proto.customer);
