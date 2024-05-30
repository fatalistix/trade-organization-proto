import * as jspb from 'google-protobuf'

import * as product_product_pb from '../product/product_pb'; // proto import: "product/product.proto"
import * as tradingpoint_tradingpoint_pb from '../tradingpoint/tradingpoint_pb'; // proto import: "tradingpoint/tradingpoint.proto"


export class Transfer extends jspb.Message {
  getId(): number;
  setId(value: number): Transfer;

  getFromTradingPointId(): number;
  setFromTradingPointId(value: number): Transfer;

  getFromTradingPointType(): tradingpoint_tradingpoint_pb.TradingPointType;
  setFromTradingPointType(value: tradingpoint_tradingpoint_pb.TradingPointType): Transfer;

  getToTradingPointId(): number;
  setToTradingPointId(value: number): Transfer;

  getToTradingPointType(): tradingpoint_tradingpoint_pb.TradingPointType;
  setToTradingPointType(value: tradingpoint_tradingpoint_pb.TradingPointType): Transfer;

  getProductsList(): Array<ProductTransfer>;
  setProductsList(value: Array<ProductTransfer>): Transfer;
  clearProductsList(): Transfer;
  addProducts(value?: ProductTransfer, index?: number): ProductTransfer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transfer.AsObject;
  static toObject(includeInstance: boolean, msg: Transfer): Transfer.AsObject;
  static serializeBinaryToWriter(message: Transfer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transfer;
  static deserializeBinaryFromReader(message: Transfer, reader: jspb.BinaryReader): Transfer;
}

export namespace Transfer {
  export type AsObject = {
    id: number,
    fromTradingPointId: number,
    fromTradingPointType: tradingpoint_tradingpoint_pb.TradingPointType,
    toTradingPointId: number,
    toTradingPointType: tradingpoint_tradingpoint_pb.TradingPointType,
    productsList: Array<ProductTransfer.AsObject>,
  }
}

export class ProductTransfer extends jspb.Message {
  getId(): number;
  setId(value: number): ProductTransfer;

  getQuantity(): number;
  setQuantity(value: number): ProductTransfer;

  getProduct(): product_product_pb.Product | undefined;
  setProduct(value?: product_product_pb.Product): ProductTransfer;
  hasProduct(): boolean;
  clearProduct(): ProductTransfer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductTransfer.AsObject;
  static toObject(includeInstance: boolean, msg: ProductTransfer): ProductTransfer.AsObject;
  static serializeBinaryToWriter(message: ProductTransfer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductTransfer;
  static deserializeBinaryFromReader(message: ProductTransfer, reader: jspb.BinaryReader): ProductTransfer;
}

export namespace ProductTransfer {
  export type AsObject = {
    id: number,
    quantity: number,
    product?: product_product_pb.Product.AsObject,
  }
}

export class CreateRequest extends jspb.Message {
  getFromTradingPointId(): number;
  setFromTradingPointId(value: number): CreateRequest;

  getFromTradingPointType(): tradingpoint_tradingpoint_pb.TradingPointType;
  setFromTradingPointType(value: tradingpoint_tradingpoint_pb.TradingPointType): CreateRequest;

  getToTradingPointId(): number;
  setToTradingPointId(value: number): CreateRequest;

  getToTradingPointType(): tradingpoint_tradingpoint_pb.TradingPointType;
  setToTradingPointType(value: tradingpoint_tradingpoint_pb.TradingPointType): CreateRequest;

  getProductsList(): Array<ProductTransfer>;
  setProductsList(value: Array<ProductTransfer>): CreateRequest;
  clearProductsList(): CreateRequest;
  addProducts(value?: ProductTransfer, index?: number): ProductTransfer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequest;
  static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
  export type AsObject = {
    fromTradingPointId: number,
    fromTradingPointType: tradingpoint_tradingpoint_pb.TradingPointType,
    toTradingPointId: number,
    toTradingPointType: tradingpoint_tradingpoint_pb.TradingPointType,
    productsList: Array<ProductTransfer.AsObject>,
  }
}

export class CreateResponse extends jspb.Message {
  getId(): number;
  setId(value: number): CreateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResponse): CreateResponse.AsObject;
  static serializeBinaryToWriter(message: CreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResponse;
  static deserializeBinaryFromReader(message: CreateResponse, reader: jspb.BinaryReader): CreateResponse;
}

export namespace CreateResponse {
  export type AsObject = {
    id: number,
  }
}

