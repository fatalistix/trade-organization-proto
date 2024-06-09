import * as jspb from 'google-protobuf'

import * as core_date_pb from '../core/date_pb'; // proto import: "core/date.proto"


export class Customer extends jspb.Message {
  getId(): number;
  setId(value: number): Customer;

  getFirstName(): string;
  setFirstName(value: string): Customer;

  getLastName(): string;
  setLastName(value: string): Customer;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): Customer;

  getBirthDate(): core_date_pb.Date | undefined;
  setBirthDate(value?: core_date_pb.Date): Customer;
  hasBirthDate(): boolean;
  clearBirthDate(): Customer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Customer.AsObject;
  static toObject(includeInstance: boolean, msg: Customer): Customer.AsObject;
  static serializeBinaryToWriter(message: Customer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Customer;
  static deserializeBinaryFromReader(message: Customer, reader: jspb.BinaryReader): Customer;
}

export namespace Customer {
  export type AsObject = {
    id: number,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    birthDate?: core_date_pb.Date.AsObject,
  }
}

export class CreateRequest extends jspb.Message {
  getFirstName(): string;
  setFirstName(value: string): CreateRequest;

  getLastName(): string;
  setLastName(value: string): CreateRequest;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): CreateRequest;

  getBirthDate(): core_date_pb.Date | undefined;
  setBirthDate(value?: core_date_pb.Date): CreateRequest;
  hasBirthDate(): boolean;
  clearBirthDate(): CreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequest;
  static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
  export type AsObject = {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    birthDate?: core_date_pb.Date.AsObject,
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
  getCustomersList(): Array<Customer>;
  setCustomersList(value: Array<Customer>): ListResponse;
  clearCustomersList(): ListResponse;
  addCustomers(value?: Customer, index?: number): Customer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
  static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponse;
  static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
  export type AsObject = {
    customersList: Array<Customer.AsObject>,
  }
}

export class CustomerRequest extends jspb.Message {
  getId(): number;
  setId(value: number): CustomerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerRequest): CustomerRequest.AsObject;
  static serializeBinaryToWriter(message: CustomerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerRequest;
  static deserializeBinaryFromReader(message: CustomerRequest, reader: jspb.BinaryReader): CustomerRequest;
}

export namespace CustomerRequest {
  export type AsObject = {
    id: number,
  }
}

export class CustomerResponse extends jspb.Message {
  getCustomer(): Customer | undefined;
  setCustomer(value?: Customer): CustomerResponse;
  hasCustomer(): boolean;
  clearCustomer(): CustomerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerResponse): CustomerResponse.AsObject;
  static serializeBinaryToWriter(message: CustomerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerResponse;
  static deserializeBinaryFromReader(message: CustomerResponse, reader: jspb.BinaryReader): CustomerResponse;
}

export namespace CustomerResponse {
  export type AsObject = {
    customer?: Customer.AsObject,
  }
}

export class UpdateRequest extends jspb.Message {
  getCustomer(): Customer | undefined;
  setCustomer(value?: Customer): UpdateRequest;
  hasCustomer(): boolean;
  clearCustomer(): UpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRequest): UpdateRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRequest;
  static deserializeBinaryFromReader(message: UpdateRequest, reader: jspb.BinaryReader): UpdateRequest;
}

export namespace UpdateRequest {
  export type AsObject = {
    customer?: Customer.AsObject,
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

export class DeleteRequest extends jspb.Message {
  getId(): number;
  setId(value: number): DeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRequest;
  static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
  export type AsObject = {
    id: number,
  }
}

export class DeleteResponse extends jspb.Message {
  getId(): number;
  setId(value: number): DeleteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResponse): DeleteResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResponse;
  static deserializeBinaryFromReader(message: DeleteResponse, reader: jspb.BinaryReader): DeleteResponse;
}

export namespace DeleteResponse {
  export type AsObject = {
    id: number,
  }
}

