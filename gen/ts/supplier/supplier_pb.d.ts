import * as jspb from 'google-protobuf'

import * as core_money_pb from '../core/money_pb'; // proto import: "core/money.proto"
import * as product_product_pb from '../product/product_pb'; // proto import: "product/product.proto"


export class Supplier extends jspb.Message {
  getId(): number;
  setId(value: number): Supplier;

  getName(): string;
  setName(value: string): Supplier;

  getType(): SupplierType;
  setType(value: SupplierType): Supplier;

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
  }
}

export class ProductSupplier extends jspb.Message {
  getPrice(): core_money_pb.Money | undefined;
  setPrice(value?: core_money_pb.Money): ProductSupplier;
  hasPrice(): boolean;
  clearPrice(): ProductSupplier;

  getProduct(): product_product_pb.Product | undefined;
  setProduct(value?: product_product_pb.Product): ProductSupplier;
  hasProduct(): boolean;
  clearProduct(): ProductSupplier;

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
    product?: product_product_pb.Product.AsObject,
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

export enum SupplierType { 
  SUPPLIER_TYPE_AVAILABLE = 0,
  SUPPLIER_TYPE_NOT_AVAILABLE = 1,
}
