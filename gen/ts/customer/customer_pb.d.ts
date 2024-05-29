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

