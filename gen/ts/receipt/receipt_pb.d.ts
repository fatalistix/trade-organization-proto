import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as core_money_pb from '../core/money_pb'; // proto import: "core/money.proto"
import * as tradingpoint_tradingpoint_pb from '../tradingpoint/tradingpoint_pb'; // proto import: "tradingpoint/tradingpoint.proto"


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

  getProductsList(): Array<ProductReceipt>;
  setProductsList(value: Array<ProductReceipt>): Receipt;
  clearProductsList(): Receipt;
  addProducts(value?: ProductReceipt, index?: number): ProductReceipt;

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
    productsList: Array<ProductReceipt.AsObject>,
  }
}

export class ProductReceipt extends jspb.Message {
  getQuantity(): number;
  setQuantity(value: number): ProductReceipt;

  getPrice(): core_money_pb.Money | undefined;
  setPrice(value?: core_money_pb.Money): ProductReceipt;
  hasPrice(): boolean;
  clearPrice(): ProductReceipt;

  getProductId(): number;
  setProductId(value: number): ProductReceipt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductReceipt.AsObject;
  static toObject(includeInstance: boolean, msg: ProductReceipt): ProductReceipt.AsObject;
  static serializeBinaryToWriter(message: ProductReceipt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductReceipt;
  static deserializeBinaryFromReader(message: ProductReceipt, reader: jspb.BinaryReader): ProductReceipt;
}

export namespace ProductReceipt {
  export type AsObject = {
    quantity: number,
    price?: core_money_pb.Money.AsObject,
    productId: number,
  }
}

export class ReceiptWithAccounting extends jspb.Message {
  getId(): number;
  setId(value: number): ReceiptWithAccounting;

  getCustomerId(): number;
  setCustomerId(value: number): ReceiptWithAccounting;

  getReceiptingPointWithAccountingId(): number;
  setReceiptingPointWithAccountingId(value: number): ReceiptWithAccounting;

  getReceiptingPointWithAccountingType(): tradingpoint_tradingpoint_pb.ReceiptingPointWithAccountingType;
  setReceiptingPointWithAccountingType(value: tradingpoint_tradingpoint_pb.ReceiptingPointWithAccountingType): ReceiptWithAccounting;

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
    receiptingPointWithAccountingType: tradingpoint_tradingpoint_pb.ReceiptingPointWithAccountingType,
  }
}

export class ReceiptWithoutAccounting extends jspb.Message {
  getId(): number;
  setId(value: number): ReceiptWithoutAccounting;

  getReceiptingPointWithoutAccountingId(): number;
  setReceiptingPointWithoutAccountingId(value: number): ReceiptWithoutAccounting;

  getReceiptingPointWithoutAccountingType(): tradingpoint_tradingpoint_pb.ReceiptingPointWithoutAccountingType;
  setReceiptingPointWithoutAccountingType(value: tradingpoint_tradingpoint_pb.ReceiptingPointWithoutAccountingType): ReceiptWithoutAccounting;

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
    receiptingPointWithoutAccountingType: tradingpoint_tradingpoint_pb.ReceiptingPointWithoutAccountingType,
  }
}

export class CreateWithAccountingRequest extends jspb.Message {
  getSellerId(): number;
  setSellerId(value: number): CreateWithAccountingRequest;

  getProductsList(): Array<ProductReceipt>;
  setProductsList(value: Array<ProductReceipt>): CreateWithAccountingRequest;
  clearProductsList(): CreateWithAccountingRequest;
  addProducts(value?: ProductReceipt, index?: number): ProductReceipt;

  getCustomerId(): number;
  setCustomerId(value: number): CreateWithAccountingRequest;

  getReceiptingPointWithAccountingId(): number;
  setReceiptingPointWithAccountingId(value: number): CreateWithAccountingRequest;

  getReceiptingPointWithAccountingType(): tradingpoint_tradingpoint_pb.ReceiptingPointWithAccountingType;
  setReceiptingPointWithAccountingType(value: tradingpoint_tradingpoint_pb.ReceiptingPointWithAccountingType): CreateWithAccountingRequest;

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
    productsList: Array<ProductReceipt.AsObject>,
    customerId: number,
    receiptingPointWithAccountingId: number,
    receiptingPointWithAccountingType: tradingpoint_tradingpoint_pb.ReceiptingPointWithAccountingType,
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

  getProductsList(): Array<ProductReceipt>;
  setProductsList(value: Array<ProductReceipt>): CreateWithoutAccountingRequest;
  clearProductsList(): CreateWithoutAccountingRequest;
  addProducts(value?: ProductReceipt, index?: number): ProductReceipt;

  getReceiptingPointWithoutAccountingId(): number;
  setReceiptingPointWithoutAccountingId(value: number): CreateWithoutAccountingRequest;

  getReceiptingPointWithoutAccountingType(): tradingpoint_tradingpoint_pb.ReceiptingPointWithoutAccountingType;
  setReceiptingPointWithoutAccountingType(value: tradingpoint_tradingpoint_pb.ReceiptingPointWithoutAccountingType): CreateWithoutAccountingRequest;

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
    productsList: Array<ProductReceipt.AsObject>,
    receiptingPointWithoutAccountingId: number,
    receiptingPointWithoutAccountingType: tradingpoint_tradingpoint_pb.ReceiptingPointWithoutAccountingType,
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

export class ListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
  static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequest;
  static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
  export type AsObject = {
  }
}

export class ListResponse extends jspb.Message {
  getReceiptsList(): Array<Receipt>;
  setReceiptsList(value: Array<Receipt>): ListResponse;
  clearReceiptsList(): ListResponse;
  addReceipts(value?: Receipt, index?: number): Receipt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
  static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponse;
  static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
  export type AsObject = {
    receiptsList: Array<Receipt.AsObject>,
  }
}

export class ReceiptWithAccountingRequest extends jspb.Message {
  getId(): number;
  setId(value: number): ReceiptWithAccountingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiptWithAccountingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiptWithAccountingRequest): ReceiptWithAccountingRequest.AsObject;
  static serializeBinaryToWriter(message: ReceiptWithAccountingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiptWithAccountingRequest;
  static deserializeBinaryFromReader(message: ReceiptWithAccountingRequest, reader: jspb.BinaryReader): ReceiptWithAccountingRequest;
}

export namespace ReceiptWithAccountingRequest {
  export type AsObject = {
    id: number,
  }
}

export class ReceiptWithAccountingResponse extends jspb.Message {
  getReceipt(): ReceiptWithAccounting | undefined;
  setReceipt(value?: ReceiptWithAccounting): ReceiptWithAccountingResponse;
  hasReceipt(): boolean;
  clearReceipt(): ReceiptWithAccountingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiptWithAccountingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiptWithAccountingResponse): ReceiptWithAccountingResponse.AsObject;
  static serializeBinaryToWriter(message: ReceiptWithAccountingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiptWithAccountingResponse;
  static deserializeBinaryFromReader(message: ReceiptWithAccountingResponse, reader: jspb.BinaryReader): ReceiptWithAccountingResponse;
}

export namespace ReceiptWithAccountingResponse {
  export type AsObject = {
    receipt?: ReceiptWithAccounting.AsObject,
  }
}

export class ReceiptWithoutAccountingRequest extends jspb.Message {
  getId(): number;
  setId(value: number): ReceiptWithoutAccountingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiptWithoutAccountingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiptWithoutAccountingRequest): ReceiptWithoutAccountingRequest.AsObject;
  static serializeBinaryToWriter(message: ReceiptWithoutAccountingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiptWithoutAccountingRequest;
  static deserializeBinaryFromReader(message: ReceiptWithoutAccountingRequest, reader: jspb.BinaryReader): ReceiptWithoutAccountingRequest;
}

export namespace ReceiptWithoutAccountingRequest {
  export type AsObject = {
    id: number,
  }
}

export class ReceiptWithoutAccountingResponse extends jspb.Message {
  getReceipt(): ReceiptWithoutAccounting | undefined;
  setReceipt(value?: ReceiptWithoutAccounting): ReceiptWithoutAccountingResponse;
  hasReceipt(): boolean;
  clearReceipt(): ReceiptWithoutAccountingResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiptWithoutAccountingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiptWithoutAccountingResponse): ReceiptWithoutAccountingResponse.AsObject;
  static serializeBinaryToWriter(message: ReceiptWithoutAccountingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiptWithoutAccountingResponse;
  static deserializeBinaryFromReader(message: ReceiptWithoutAccountingResponse, reader: jspb.BinaryReader): ReceiptWithoutAccountingResponse;
}

export namespace ReceiptWithoutAccountingResponse {
  export type AsObject = {
    receipt?: ReceiptWithoutAccounting.AsObject,
  }
}

export enum ReceiptType { 
  RECEIPT_TYPE_RECEIPT_WITH_ACCOUNTING = 0,
  RECEIPT_TYPE_RECEIPT_WITHOUT_ACCOUNTING = 1,
}
