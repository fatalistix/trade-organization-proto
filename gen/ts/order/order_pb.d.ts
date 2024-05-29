import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as core_money_pb from '../core/money_pb'; // proto import: "core/money.proto"
import * as product_product_pb from '../product/product_pb'; // proto import: "product/product.proto"


export class Order extends jspb.Message {
  getId(): number;
  setId(value: number): Order;

  getSupplierId(): number;
  setSupplierId(value: number): Order;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Order;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Order;

  getStatus(): OrderStatus;
  setStatus(value: OrderStatus): Order;

  getCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): Order;
  hasCompletedAt(): boolean;
  clearCompletedAt(): Order;

  getCanceledAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCanceledAt(value?: google_protobuf_timestamp_pb.Timestamp): Order;
  hasCanceledAt(): boolean;
  clearCanceledAt(): Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Order.AsObject;
  static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
  static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Order;
  static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
  export type AsObject = {
    id: number,
    supplierId: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    status: OrderStatus,
    completedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    canceledAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }

  export enum CompletedAtCase { 
    _COMPLETED_AT_NOT_SET = 0,
    COMPLETED_AT = 5,
  }

  export enum CanceledAtCase { 
    _CANCELED_AT_NOT_SET = 0,
    CANCELED_AT = 6,
  }
}

export class ProductOrder extends jspb.Message {
  getQuantity(): number;
  setQuantity(value: number): ProductOrder;

  getPrice(): core_money_pb.Money | undefined;
  setPrice(value?: core_money_pb.Money): ProductOrder;
  hasPrice(): boolean;
  clearPrice(): ProductOrder;

  getProduct(): product_product_pb.Product | undefined;
  setProduct(value?: product_product_pb.Product): ProductOrder;
  hasProduct(): boolean;
  clearProduct(): ProductOrder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductOrder.AsObject;
  static toObject(includeInstance: boolean, msg: ProductOrder): ProductOrder.AsObject;
  static serializeBinaryToWriter(message: ProductOrder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductOrder;
  static deserializeBinaryFromReader(message: ProductOrder, reader: jspb.BinaryReader): ProductOrder;
}

export namespace ProductOrder {
  export type AsObject = {
    quantity: number,
    price?: core_money_pb.Money.AsObject,
    product?: product_product_pb.Product.AsObject,
  }
}

export class CreateRequest extends jspb.Message {
  getSupplierId(): number;
  setSupplierId(value: number): CreateRequest;

  getProductsList(): Array<ProductOrder>;
  setProductsList(value: Array<ProductOrder>): CreateRequest;
  clearProductsList(): CreateRequest;
  addProducts(value?: ProductOrder, index?: number): ProductOrder;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequest;
  static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
  export type AsObject = {
    supplierId: number,
    productsList: Array<ProductOrder.AsObject>,
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

export enum OrderStatus { 
  ORDER_STATUS_COMPLETED = 0,
  ORDER_STATUS_CANCELLED = 1,
  ORDER_STATUS_IN_PROGRESS = 2,
}
