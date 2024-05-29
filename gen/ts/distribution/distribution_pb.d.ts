import * as jspb from 'google-protobuf'

import * as core_money_pb from '../core/money_pb'; // proto import: "core/money.proto"
import * as product_product_pb from '../product/product_pb'; // proto import: "product/product.proto"
import * as tradingpoint_trading_point_pb from '../tradingpoint/trading_point_pb'; // proto import: "tradingpoint/trading_point.proto"


export class Distribution extends jspb.Message {
  getId(): number;
  setId(value: number): Distribution;

  getTradingPointId(): number;
  setTradingPointId(value: number): Distribution;

  getTradingPointType(): tradingpoint_trading_point_pb.TradingPointType;
  setTradingPointType(value: tradingpoint_trading_point_pb.TradingPointType): Distribution;

  getProductsList(): Array<ProductDistribution>;
  setProductsList(value: Array<ProductDistribution>): Distribution;
  clearProductsList(): Distribution;
  addProducts(value?: ProductDistribution, index?: number): ProductDistribution;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Distribution.AsObject;
  static toObject(includeInstance: boolean, msg: Distribution): Distribution.AsObject;
  static serializeBinaryToWriter(message: Distribution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Distribution;
  static deserializeBinaryFromReader(message: Distribution, reader: jspb.BinaryReader): Distribution;
}

export namespace Distribution {
  export type AsObject = {
    id: number,
    tradingPointId: number,
    tradingPointType: tradingpoint_trading_point_pb.TradingPointType,
    productsList: Array<ProductDistribution.AsObject>,
  }
}

export class ProductDistribution extends jspb.Message {
  getQuantity(): number;
  setQuantity(value: number): ProductDistribution;

  getPrice(): core_money_pb.Money | undefined;
  setPrice(value?: core_money_pb.Money): ProductDistribution;
  hasPrice(): boolean;
  clearPrice(): ProductDistribution;

  getProduct(): product_product_pb.Product | undefined;
  setProduct(value?: product_product_pb.Product): ProductDistribution;
  hasProduct(): boolean;
  clearProduct(): ProductDistribution;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductDistribution.AsObject;
  static toObject(includeInstance: boolean, msg: ProductDistribution): ProductDistribution.AsObject;
  static serializeBinaryToWriter(message: ProductDistribution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductDistribution;
  static deserializeBinaryFromReader(message: ProductDistribution, reader: jspb.BinaryReader): ProductDistribution;
}

export namespace ProductDistribution {
  export type AsObject = {
    quantity: number,
    price?: core_money_pb.Money.AsObject,
    product?: product_product_pb.Product.AsObject,
  }
}

export class CreateRequest extends jspb.Message {
  getTradingPointId(): number;
  setTradingPointId(value: number): CreateRequest;

  getTradingPointType(): tradingpoint_trading_point_pb.TradingPointType;
  setTradingPointType(value: tradingpoint_trading_point_pb.TradingPointType): CreateRequest;

  getProductsList(): Array<ProductDistribution>;
  setProductsList(value: Array<ProductDistribution>): CreateRequest;
  clearProductsList(): CreateRequest;
  addProducts(value?: ProductDistribution, index?: number): ProductDistribution;

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
    tradingPointType: tradingpoint_trading_point_pb.TradingPointType,
    productsList: Array<ProductDistribution.AsObject>,
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

