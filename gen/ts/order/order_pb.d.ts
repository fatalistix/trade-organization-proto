import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as core_money_pb from '../core/money_pb'; // proto import: "core/money.proto"
import * as tradingpoint_tradingpoint_pb from '../tradingpoint/tradingpoint_pb'; // proto import: "tradingpoint/tradingpoint.proto"


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

  getProductsList(): Array<ProductOrder>;
  setProductsList(value: Array<ProductOrder>): Order;
  clearProductsList(): Order;
  addProducts(value?: ProductOrder, index?: number): ProductOrder;

  getDistributionsList(): Array<Distribution>;
  setDistributionsList(value: Array<Distribution>): Order;
  clearDistributionsList(): Order;
  addDistributions(value?: Distribution, index?: number): Distribution;

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
    productsList: Array<ProductOrder.AsObject>,
    distributionsList: Array<Distribution.AsObject>,
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

  getProductId(): number;
  setProductId(value: number): ProductOrder;

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
    productId: number,
  }
}

export class Distribution extends jspb.Message {
  getTradingPointId(): number;
  setTradingPointId(value: number): Distribution;

  getTradingPointType(): tradingpoint_tradingpoint_pb.TradingPointType;
  setTradingPointType(value: tradingpoint_tradingpoint_pb.TradingPointType): Distribution;

  getProductId(): number;
  setProductId(value: number): Distribution;

  getQuantity(): number;
  setQuantity(value: number): Distribution;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Distribution.AsObject;
  static toObject(includeInstance: boolean, msg: Distribution): Distribution.AsObject;
  static serializeBinaryToWriter(message: Distribution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Distribution;
  static deserializeBinaryFromReader(message: Distribution, reader: jspb.BinaryReader): Distribution;
}

export namespace Distribution {
  export type AsObject = {
    tradingPointId: number,
    tradingPointType: tradingpoint_tradingpoint_pb.TradingPointType,
    productId: number,
    quantity: number,
  }
}

export class CreateRequest extends jspb.Message {
  getSupplierId(): number;
  setSupplierId(value: number): CreateRequest;

  getProductsList(): Array<ProductOrder>;
  setProductsList(value: Array<ProductOrder>): CreateRequest;
  clearProductsList(): CreateRequest;
  addProducts(value?: ProductOrder, index?: number): ProductOrder;

  getApplicationIdsList(): Array<number>;
  setApplicationIdsList(value: Array<number>): CreateRequest;
  clearApplicationIdsList(): CreateRequest;
  addApplicationIds(value: number, index?: number): CreateRequest;

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
    applicationIdsList: Array<number>,
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
  getOrdersList(): Array<Order>;
  setOrdersList(value: Array<Order>): ListResponse;
  clearOrdersList(): ListResponse;
  addOrders(value?: Order, index?: number): Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
  static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponse;
  static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
  export type AsObject = {
    ordersList: Array<Order.AsObject>,
  }
}

export class OrderRequest extends jspb.Message {
  getId(): number;
  setId(value: number): OrderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrderRequest): OrderRequest.AsObject;
  static serializeBinaryToWriter(message: OrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderRequest;
  static deserializeBinaryFromReader(message: OrderRequest, reader: jspb.BinaryReader): OrderRequest;
}

export namespace OrderRequest {
  export type AsObject = {
    id: number,
  }
}

export class OrderResponse extends jspb.Message {
  getOrder(): Order | undefined;
  setOrder(value?: Order): OrderResponse;
  hasOrder(): boolean;
  clearOrder(): OrderResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OrderResponse): OrderResponse.AsObject;
  static serializeBinaryToWriter(message: OrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderResponse;
  static deserializeBinaryFromReader(message: OrderResponse, reader: jspb.BinaryReader): OrderResponse;
}

export namespace OrderResponse {
  export type AsObject = {
    order?: Order.AsObject,
  }
}

export class UpdateRequest extends jspb.Message {
  getOrder(): Order | undefined;
  setOrder(value?: Order): UpdateRequest;
  hasOrder(): boolean;
  clearOrder(): UpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRequest): UpdateRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRequest;
  static deserializeBinaryFromReader(message: UpdateRequest, reader: jspb.BinaryReader): UpdateRequest;
}

export namespace UpdateRequest {
  export type AsObject = {
    order?: Order.AsObject,
  }
}

export class UpdateResponse extends jspb.Message {
  getId(): number;
  setId(value: number): UpdateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateResponse): UpdateResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateResponse;
  static deserializeBinaryFromReader(message: UpdateResponse, reader: jspb.BinaryReader): UpdateResponse;
}

export namespace UpdateResponse {
  export type AsObject = {
    id: number,
  }
}

export class CancelRequest extends jspb.Message {
  getId(): number;
  setId(value: number): CancelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelRequest): CancelRequest.AsObject;
  static serializeBinaryToWriter(message: CancelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelRequest;
  static deserializeBinaryFromReader(message: CancelRequest, reader: jspb.BinaryReader): CancelRequest;
}

export namespace CancelRequest {
  export type AsObject = {
    id: number,
  }
}

export class CancelResponse extends jspb.Message {
  getId(): number;
  setId(value: number): CancelResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelResponse): CancelResponse.AsObject;
  static serializeBinaryToWriter(message: CancelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelResponse;
  static deserializeBinaryFromReader(message: CancelResponse, reader: jspb.BinaryReader): CancelResponse;
}

export namespace CancelResponse {
  export type AsObject = {
    id: number,
  }
}

export class CompleteRequest extends jspb.Message {
  getId(): number;
  setId(value: number): CompleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteRequest): CompleteRequest.AsObject;
  static serializeBinaryToWriter(message: CompleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteRequest;
  static deserializeBinaryFromReader(message: CompleteRequest, reader: jspb.BinaryReader): CompleteRequest;
}

export namespace CompleteRequest {
  export type AsObject = {
    id: number,
  }
}

export class CompleteResponse extends jspb.Message {
  getId(): number;
  setId(value: number): CompleteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CompleteResponse): CompleteResponse.AsObject;
  static serializeBinaryToWriter(message: CompleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompleteResponse;
  static deserializeBinaryFromReader(message: CompleteResponse, reader: jspb.BinaryReader): CompleteResponse;
}

export namespace CompleteResponse {
  export type AsObject = {
    id: number,
  }
}

export enum OrderStatus { 
  ORDER_STATUS_COMPLETED = 0,
  ORDER_STATUS_CANCELLED = 1,
  ORDER_STATUS_IN_PROGRESS = 2,
}
