import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as core_money_pb from '../core/money_pb'; // proto import: "core/money.proto"
import * as product_product_pb from '../product/product_pb'; // proto import: "product/product.proto"
import * as tradingpoint_trading_point_pb from '../tradingpoint/trading_point_pb'; // proto import: "tradingpoint/trading_point.proto"


export class Receipt extends jspb.Message {
  getId(): number;
  setId(value: number): Receipt;

  getType(): ReceiptType;
  setType(value: ReceiptType): Receipt;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Receipt;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Receipt;

  getSellerId(): number;
  setSellerId(value: number): Receipt;

  getProductsList(): Array<ReceiptProduct>;
  setProductsList(value: Array<ReceiptProduct>): Receipt;
  clearProductsList(): Receipt;
  addProducts(value?: ReceiptProduct, index?: number): ReceiptProduct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Receipt.AsObject;
  static toObject(includeInstance: boolean, msg: Receipt): Receipt.AsObject;
  static serializeBinaryToWriter(message: Receipt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Receipt;
  static deserializeBinaryFromReader(message: Receipt, reader: jspb.BinaryReader): Receipt;
}

export namespace Receipt {
  export type AsObject = {
    id: number,
    type: ReceiptType,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    sellerId: number,
    productsList: Array<ReceiptProduct.AsObject>,
  }
}

export class ReceiptProduct extends jspb.Message {
  getQuantity(): number;
  setQuantity(value: number): ReceiptProduct;

  getPrice(): core_money_pb.Money | undefined;
  setPrice(value?: core_money_pb.Money): ReceiptProduct;
  hasPrice(): boolean;
  clearPrice(): ReceiptProduct;

  getProduct(): product_product_pb.Product | undefined;
  setProduct(value?: product_product_pb.Product): ReceiptProduct;
  hasProduct(): boolean;
  clearProduct(): ReceiptProduct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiptProduct.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiptProduct): ReceiptProduct.AsObject;
  static serializeBinaryToWriter(message: ReceiptProduct, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiptProduct;
  static deserializeBinaryFromReader(message: ReceiptProduct, reader: jspb.BinaryReader): ReceiptProduct;
}

export namespace ReceiptProduct {
  export type AsObject = {
    quantity: number,
    price?: core_money_pb.Money.AsObject,
    product?: product_product_pb.Product.AsObject,
  }
}

export class ReceiptWithAccounting extends jspb.Message {
  getId(): number;
  setId(value: number): ReceiptWithAccounting;

  getCustomerId(): number;
  setCustomerId(value: number): ReceiptWithAccounting;

  getReceiptingPointWithAccountingId(): number;
  setReceiptingPointWithAccountingId(value: number): ReceiptWithAccounting;

  getReceiptingPointWithAccountingType(): tradingpoint_trading_point_pb.ReceiptingPointWithAccountingType;
  setReceiptingPointWithAccountingType(value: tradingpoint_trading_point_pb.ReceiptingPointWithAccountingType): ReceiptWithAccounting;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiptWithAccounting.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiptWithAccounting): ReceiptWithAccounting.AsObject;
  static serializeBinaryToWriter(message: ReceiptWithAccounting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiptWithAccounting;
  static deserializeBinaryFromReader(message: ReceiptWithAccounting, reader: jspb.BinaryReader): ReceiptWithAccounting;
}

export namespace ReceiptWithAccounting {
  export type AsObject = {
    id: number,
    customerId: number,
    receiptingPointWithAccountingId: number,
    receiptingPointWithAccountingType: tradingpoint_trading_point_pb.ReceiptingPointWithAccountingType,
  }
}

export class ReceiptWithoutAccounting extends jspb.Message {
  getId(): number;
  setId(value: number): ReceiptWithoutAccounting;

  getReceiptingPointWithoutAccountingId(): number;
  setReceiptingPointWithoutAccountingId(value: number): ReceiptWithoutAccounting;

  getReceiptingPointWithoutAccountingType(): tradingpoint_trading_point_pb.ReceiptingPointWithoutAccountingType;
  setReceiptingPointWithoutAccountingType(value: tradingpoint_trading_point_pb.ReceiptingPointWithoutAccountingType): ReceiptWithoutAccounting;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiptWithoutAccounting.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiptWithoutAccounting): ReceiptWithoutAccounting.AsObject;
  static serializeBinaryToWriter(message: ReceiptWithoutAccounting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiptWithoutAccounting;
  static deserializeBinaryFromReader(message: ReceiptWithoutAccounting, reader: jspb.BinaryReader): ReceiptWithoutAccounting;
}

export namespace ReceiptWithoutAccounting {
  export type AsObject = {
    id: number,
    receiptingPointWithoutAccountingId: number,
    receiptingPointWithoutAccountingType: tradingpoint_trading_point_pb.ReceiptingPointWithoutAccountingType,
  }
}

export class CreateWithAccountingRequest extends jspb.Message {
  getSellerId(): number;
  setSellerId(value: number): CreateWithAccountingRequest;

  getProductsList(): Array<ReceiptProduct>;
  setProductsList(value: Array<ReceiptProduct>): CreateWithAccountingRequest;
  clearProductsList(): CreateWithAccountingRequest;
  addProducts(value?: ReceiptProduct, index?: number): ReceiptProduct;

  getCustomerId(): number;
  setCustomerId(value: number): CreateWithAccountingRequest;

  getReceiptingPointWithAccountingId(): number;
  setReceiptingPointWithAccountingId(value: number): CreateWithAccountingRequest;

  getReceiptingPointWithAccountingType(): tradingpoint_trading_point_pb.ReceiptingPointWithAccountingType;
  setReceiptingPointWithAccountingType(value: tradingpoint_trading_point_pb.ReceiptingPointWithAccountingType): CreateWithAccountingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWithAccountingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWithAccountingRequest): CreateWithAccountingRequest.AsObject;
  static serializeBinaryToWriter(message: CreateWithAccountingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWithAccountingRequest;
  static deserializeBinaryFromReader(message: CreateWithAccountingRequest, reader: jspb.BinaryReader): CreateWithAccountingRequest;
}

export namespace CreateWithAccountingRequest {
  export type AsObject = {
    sellerId: number,
    productsList: Array<ReceiptProduct.AsObject>,
    customerId: number,
    receiptingPointWithAccountingId: number,
    receiptingPointWithAccountingType: tradingpoint_trading_point_pb.ReceiptingPointWithAccountingType,
  }
}

export class CreateWithAccountingResponse extends jspb.Message {
  getId(): number;
  setId(value: number): CreateWithAccountingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWithAccountingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWithAccountingResponse): CreateWithAccountingResponse.AsObject;
  static serializeBinaryToWriter(message: CreateWithAccountingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWithAccountingResponse;
  static deserializeBinaryFromReader(message: CreateWithAccountingResponse, reader: jspb.BinaryReader): CreateWithAccountingResponse;
}

export namespace CreateWithAccountingResponse {
  export type AsObject = {
    id: number,
  }
}

export class CreateWithoutAccountingRequest extends jspb.Message {
  getSellerId(): number;
  setSellerId(value: number): CreateWithoutAccountingRequest;

  getProductsList(): Array<ReceiptProduct>;
  setProductsList(value: Array<ReceiptProduct>): CreateWithoutAccountingRequest;
  clearProductsList(): CreateWithoutAccountingRequest;
  addProducts(value?: ReceiptProduct, index?: number): ReceiptProduct;

  getReceiptingPointWithoutAccountingId(): number;
  setReceiptingPointWithoutAccountingId(value: number): CreateWithoutAccountingRequest;

  getReceiptingPointWithoutAccountingType(): tradingpoint_trading_point_pb.ReceiptingPointWithoutAccountingType;
  setReceiptingPointWithoutAccountingType(value: tradingpoint_trading_point_pb.ReceiptingPointWithoutAccountingType): CreateWithoutAccountingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWithoutAccountingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWithoutAccountingRequest): CreateWithoutAccountingRequest.AsObject;
  static serializeBinaryToWriter(message: CreateWithoutAccountingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWithoutAccountingRequest;
  static deserializeBinaryFromReader(message: CreateWithoutAccountingRequest, reader: jspb.BinaryReader): CreateWithoutAccountingRequest;
}

export namespace CreateWithoutAccountingRequest {
  export type AsObject = {
    sellerId: number,
    productsList: Array<ReceiptProduct.AsObject>,
    receiptingPointWithoutAccountingId: number,
    receiptingPointWithoutAccountingType: tradingpoint_trading_point_pb.ReceiptingPointWithoutAccountingType,
  }
}

export class CreateWithoutAccountingResponse extends jspb.Message {
  getId(): number;
  setId(value: number): CreateWithoutAccountingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWithoutAccountingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWithoutAccountingResponse): CreateWithoutAccountingResponse.AsObject;
  static serializeBinaryToWriter(message: CreateWithoutAccountingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWithoutAccountingResponse;
  static deserializeBinaryFromReader(message: CreateWithoutAccountingResponse, reader: jspb.BinaryReader): CreateWithoutAccountingResponse;
}

export namespace CreateWithoutAccountingResponse {
  export type AsObject = {
    id: number,
  }
}

export enum ReceiptType { 
  RECEIPT_TYPE_RECEIPT_WITH_ACCOUNTING = 0,
  RECEIPT_TYPE_RECEIPT_WITHOUT_ACCOUNTING = 1,
}
