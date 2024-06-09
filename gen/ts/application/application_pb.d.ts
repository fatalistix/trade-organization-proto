import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
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

  getProductId(): number;
  setProductId(value: number): ProductApplication;

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
    productId: number,
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
  getApplicationsList(): Array<Application>;
  setApplicationsList(value: Array<Application>): ListResponse;
  clearApplicationsList(): ListResponse;
  addApplications(value?: Application, index?: number): Application;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
  static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponse;
  static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
  export type AsObject = {
    applicationsList: Array<Application.AsObject>,
  }
}

export class ApplicationRequest extends jspb.Message {
  getId(): number;
  setId(value: number): ApplicationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationRequest): ApplicationRequest.AsObject;
  static serializeBinaryToWriter(message: ApplicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationRequest;
  static deserializeBinaryFromReader(message: ApplicationRequest, reader: jspb.BinaryReader): ApplicationRequest;
}

export namespace ApplicationRequest {
  export type AsObject = {
    id: number,
  }
}

export class ApplicationResponse extends jspb.Message {
  getApplication(): Application | undefined;
  setApplication(value?: Application): ApplicationResponse;
  hasApplication(): boolean;
  clearApplication(): ApplicationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationResponse): ApplicationResponse.AsObject;
  static serializeBinaryToWriter(message: ApplicationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationResponse;
  static deserializeBinaryFromReader(message: ApplicationResponse, reader: jspb.BinaryReader): ApplicationResponse;
}

export namespace ApplicationResponse {
  export type AsObject = {
    application?: Application.AsObject,
  }
}

export class UpdateRequest extends jspb.Message {
  getApplication(): Application | undefined;
  setApplication(value?: Application): UpdateRequest;
  hasApplication(): boolean;
  clearApplication(): UpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRequest): UpdateRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRequest;
  static deserializeBinaryFromReader(message: UpdateRequest, reader: jspb.BinaryReader): UpdateRequest;
}

export namespace UpdateRequest {
  export type AsObject = {
    application?: Application.AsObject,
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

