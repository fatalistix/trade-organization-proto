import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as product_product_pb from '../product/product_pb'; // proto import: "product/product.proto"
import * as tradingpoint_tradingpoint_pb from '../tradingpoint/tradingpoint_pb'; // proto import: "tradingpoint/tradingpoint.proto"


export class Application extends jspb.Message {
  getId(): number;
  setId(value: number): Application;

  getTradingPointId(): number;
  setTradingPointId(value: number): Application;

  getTradingPointType(): tradingpoint_tradingpoint_pb.TradingPointType;
  setTradingPointType(value: tradingpoint_tradingpoint_pb.TradingPointType): Application;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Application;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Application;

  getProductsList(): Array<ProductApplication>;
  setProductsList(value: Array<ProductApplication>): Application;
  clearProductsList(): Application;
  addProducts(value?: ProductApplication, index?: number): ProductApplication;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Application.AsObject;
  static toObject(includeInstance: boolean, msg: Application): Application.AsObject;
  static serializeBinaryToWriter(message: Application, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Application;
  static deserializeBinaryFromReader(message: Application, reader: jspb.BinaryReader): Application;
}

export namespace Application {
  export type AsObject = {
    id: number,
    tradingPointId: number,
    tradingPointType: tradingpoint_tradingpoint_pb.TradingPointType,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    productsList: Array<ProductApplication.AsObject>,
  }
}

export class ProductApplication extends jspb.Message {
  getQuantity(): number;
  setQuantity(value: number): ProductApplication;

  getProduct(): product_product_pb.Product | undefined;
  setProduct(value?: product_product_pb.Product): ProductApplication;
  hasProduct(): boolean;
  clearProduct(): ProductApplication;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductApplication.AsObject;
  static toObject(includeInstance: boolean, msg: ProductApplication): ProductApplication.AsObject;
  static serializeBinaryToWriter(message: ProductApplication, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductApplication;
  static deserializeBinaryFromReader(message: ProductApplication, reader: jspb.BinaryReader): ProductApplication;
}

export namespace ProductApplication {
  export type AsObject = {
    quantity: number,
    product?: product_product_pb.Product.AsObject,
  }
}

export class CreateRequest extends jspb.Message {
  getTradingPointId(): number;
  setTradingPointId(value: number): CreateRequest;

  getTradingPointType(): tradingpoint_tradingpoint_pb.TradingPointType;
  setTradingPointType(value: tradingpoint_tradingpoint_pb.TradingPointType): CreateRequest;

  getProductsList(): Array<ProductApplication>;
  setProductsList(value: Array<ProductApplication>): CreateRequest;
  clearProductsList(): CreateRequest;
  addProducts(value?: ProductApplication, index?: number): ProductApplication;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequest;
  static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
  export type AsObject = {
    tradingPointId: number,
    tradingPointType: tradingpoint_tradingpoint_pb.TradingPointType,
    productsList: Array<ProductApplication.AsObject>,
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

