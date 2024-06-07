import * as jspb from 'google-protobuf'

import * as core_money_pb from '../core/money_pb'; // proto import: "core/money.proto"


export class Supplier extends jspb.Message {
  getId(): number;
  setId(value: number): Supplier;

  getName(): string;
  setName(value: string): Supplier;

  getType(): SupplierType;
  setType(value: SupplierType): Supplier;

  getProductsList(): Array<ProductSupplier>;
  setProductsList(value: Array<ProductSupplier>): Supplier;
  clearProductsList(): Supplier;
  addProducts(value?: ProductSupplier, index?: number): ProductSupplier;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Supplier.AsObject;
  static toObject(includeInstance: boolean, msg: Supplier): Supplier.AsObject;
  static serializeBinaryToWriter(message: Supplier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Supplier;
  static deserializeBinaryFromReader(message: Supplier, reader: jspb.BinaryReader): Supplier;
}

export namespace Supplier {
  export type AsObject = {
    id: number,
    name: string,
    type: SupplierType,
    productsList: Array<ProductSupplier.AsObject>,
  }
}

export class ProductSupplier extends jspb.Message {
  getPrice(): core_money_pb.Money | undefined;
  setPrice(value?: core_money_pb.Money): ProductSupplier;
  hasPrice(): boolean;
  clearPrice(): ProductSupplier;

  getProductId(): number;
  setProductId(value: number): ProductSupplier;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProductSupplier.AsObject;
  static toObject(includeInstance: boolean, msg: ProductSupplier): ProductSupplier.AsObject;
  static serializeBinaryToWriter(message: ProductSupplier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProductSupplier;
  static deserializeBinaryFromReader(message: ProductSupplier, reader: jspb.BinaryReader): ProductSupplier;
}

export namespace ProductSupplier {
  export type AsObject = {
    price?: core_money_pb.Money.AsObject,
    productId: number,
  }
}

export class CreateRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequest;
  static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
  export type AsObject = {
    name: string,
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
  getSuppliersList(): Array<Supplier>;
  setSuppliersList(value: Array<Supplier>): ListResponse;
  clearSuppliersList(): ListResponse;
  addSuppliers(value?: Supplier, index?: number): Supplier;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
  static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponse;
  static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
  export type AsObject = {
    suppliersList: Array<Supplier.AsObject>,
  }
}

export class SupplierRequest extends jspb.Message {
  getId(): number;
  setId(value: number): SupplierRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SupplierRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SupplierRequest): SupplierRequest.AsObject;
  static serializeBinaryToWriter(message: SupplierRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SupplierRequest;
  static deserializeBinaryFromReader(message: SupplierRequest, reader: jspb.BinaryReader): SupplierRequest;
}

export namespace SupplierRequest {
  export type AsObject = {
    id: number,
  }
}

export class SupplierResponse extends jspb.Message {
  getSupplier(): Supplier | undefined;
  setSupplier(value?: Supplier): SupplierResponse;
  hasSupplier(): boolean;
  clearSupplier(): SupplierResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SupplierResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SupplierResponse): SupplierResponse.AsObject;
  static serializeBinaryToWriter(message: SupplierResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SupplierResponse;
  static deserializeBinaryFromReader(message: SupplierResponse, reader: jspb.BinaryReader): SupplierResponse;
}

export namespace SupplierResponse {
  export type AsObject = {
    supplier?: Supplier.AsObject,
  }
}

export class UpdateRequest extends jspb.Message {
  getSupplier(): Supplier | undefined;
  setSupplier(value?: Supplier): UpdateRequest;
  hasSupplier(): boolean;
  clearSupplier(): UpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRequest): UpdateRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRequest;
  static deserializeBinaryFromReader(message: UpdateRequest, reader: jspb.BinaryReader): UpdateRequest;
}

export namespace UpdateRequest {
  export type AsObject = {
    supplier?: Supplier.AsObject,
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

export enum SupplierType { 
  SUPPLIER_TYPE_AVAILABLE = 0,
  SUPPLIER_TYPE_NOT_AVAILABLE = 1,
}
