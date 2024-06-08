import * as jspb from 'google-protobuf'

import * as core_money_pb from '../core/money_pb'; // proto import: "core/money.proto"
import * as core_date_pb from '../core/date_pb'; // proto import: "core/date.proto"
import * as tradingpoint_tradingpoint_pb from '../tradingpoint/tradingpoint_pb'; // proto import: "tradingpoint/tradingpoint.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class Seller extends jspb.Message {
  getId(): number;
  setId(value: number): Seller;

  getFirstName(): string;
  setFirstName(value: string): Seller;

  getLastName(): string;
  setLastName(value: string): Seller;

  getMiddleName(): string;
  setMiddleName(value: string): Seller;

  getBirthDate(): core_date_pb.Date | undefined;
  setBirthDate(value?: core_date_pb.Date): Seller;
  hasBirthDate(): boolean;
  clearBirthDate(): Seller;

  getSalary(): core_money_pb.Money | undefined;
  setSalary(value?: core_money_pb.Money): Seller;
  hasSalary(): boolean;
  clearSalary(): Seller;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): Seller;

  getWorksAt(): WorksAt | undefined;
  setWorksAt(value?: WorksAt): Seller;
  hasWorksAt(): boolean;
  clearWorksAt(): Seller;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Seller.AsObject;
  static toObject(includeInstance: boolean, msg: Seller): Seller.AsObject;
  static serializeBinaryToWriter(message: Seller, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Seller;
  static deserializeBinaryFromReader(message: Seller, reader: jspb.BinaryReader): Seller;
}

export namespace Seller {
  export type AsObject = {
    id: number,
    firstName: string,
    lastName: string,
    middleName: string,
    birthDate?: core_date_pb.Date.AsObject,
    salary?: core_money_pb.Money.AsObject,
    phoneNumber: string,
    worksAt?: WorksAt.AsObject,
  }

  export enum WorksAtCase { 
    _WORKS_AT_NOT_SET = 0,
    WORKS_AT = 9,
  }
}

export class WorksAt extends jspb.Message {
  getPlaceOfWork(): PlaceOfWork | undefined;
  setPlaceOfWork(value?: PlaceOfWork): WorksAt;
  hasPlaceOfWork(): boolean;
  clearPlaceOfWork(): WorksAt;

  getTradingPoint(): TradingPoint | undefined;
  setTradingPoint(value?: TradingPoint): WorksAt;
  hasTradingPoint(): boolean;
  clearTradingPoint(): WorksAt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorksAt.AsObject;
  static toObject(includeInstance: boolean, msg: WorksAt): WorksAt.AsObject;
  static serializeBinaryToWriter(message: WorksAt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorksAt;
  static deserializeBinaryFromReader(message: WorksAt, reader: jspb.BinaryReader): WorksAt;
}

export namespace WorksAt {
  export type AsObject = {
    placeOfWork?: PlaceOfWork.AsObject,
    tradingPoint?: TradingPoint.AsObject,
  }
}

export class PlaceOfWork extends jspb.Message {
  getId(): number;
  setId(value: number): PlaceOfWork;

  getType(): tradingpoint_tradingpoint_pb.PlaceOfWorkType;
  setType(value: tradingpoint_tradingpoint_pb.PlaceOfWorkType): PlaceOfWork;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlaceOfWork.AsObject;
  static toObject(includeInstance: boolean, msg: PlaceOfWork): PlaceOfWork.AsObject;
  static serializeBinaryToWriter(message: PlaceOfWork, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlaceOfWork;
  static deserializeBinaryFromReader(message: PlaceOfWork, reader: jspb.BinaryReader): PlaceOfWork;
}

export namespace PlaceOfWork {
  export type AsObject = {
    id: number,
    type: tradingpoint_tradingpoint_pb.PlaceOfWorkType,
  }
}

export class TradingPoint extends jspb.Message {
  getId(): number;
  setId(value: number): TradingPoint;

  getType(): tradingpoint_tradingpoint_pb.TradingPointType;
  setType(value: tradingpoint_tradingpoint_pb.TradingPointType): TradingPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradingPoint.AsObject;
  static toObject(includeInstance: boolean, msg: TradingPoint): TradingPoint.AsObject;
  static serializeBinaryToWriter(message: TradingPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradingPoint;
  static deserializeBinaryFromReader(message: TradingPoint, reader: jspb.BinaryReader): TradingPoint;
}

export namespace TradingPoint {
  export type AsObject = {
    id: number,
    type: tradingpoint_tradingpoint_pb.TradingPointType,
  }
}

export class CreateRequest extends jspb.Message {
  getFirstName(): string;
  setFirstName(value: string): CreateRequest;

  getLastName(): string;
  setLastName(value: string): CreateRequest;

  getMiddleName(): string;
  setMiddleName(value: string): CreateRequest;

  getBirthDate(): core_date_pb.Date | undefined;
  setBirthDate(value?: core_date_pb.Date): CreateRequest;
  hasBirthDate(): boolean;
  clearBirthDate(): CreateRequest;

  getSalary(): core_money_pb.Money | undefined;
  setSalary(value?: core_money_pb.Money): CreateRequest;
  hasSalary(): boolean;
  clearSalary(): CreateRequest;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): CreateRequest;

  getWorksAt(): WorksAt | undefined;
  setWorksAt(value?: WorksAt): CreateRequest;
  hasWorksAt(): boolean;
  clearWorksAt(): CreateRequest;

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
    middleName: string,
    birthDate?: core_date_pb.Date.AsObject,
    salary?: core_money_pb.Money.AsObject,
    phoneNumber: string,
    worksAt?: WorksAt.AsObject,
  }

  export enum WorksAtCase { 
    _WORKS_AT_NOT_SET = 0,
    WORKS_AT = 7,
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
  getWorksAtFilter(): WorksAtFilterType;
  setWorksAtFilter(value: WorksAtFilterType): ListRequest;

  getTradingPointId(): number;
  setTradingPointId(value: number): ListRequest;
  hasTradingPointId(): boolean;
  clearTradingPointId(): ListRequest;

  getTradingPointType(): tradingpoint_tradingpoint_pb.TradingPointType;
  setTradingPointType(value: tradingpoint_tradingpoint_pb.TradingPointType): ListRequest;
  hasTradingPointType(): boolean;
  clearTradingPointType(): ListRequest;

  getPlaceOfWorkId(): number;
  setPlaceOfWorkId(value: number): ListRequest;
  hasPlaceOfWorkId(): boolean;
  clearPlaceOfWorkId(): ListRequest;

  getPlaceOfWorkType(): tradingpoint_tradingpoint_pb.PlaceOfWorkType;
  setPlaceOfWorkType(value: tradingpoint_tradingpoint_pb.PlaceOfWorkType): ListRequest;
  hasPlaceOfWorkType(): boolean;
  clearPlaceOfWorkType(): ListRequest;

  getSearch(): string;
  setSearch(value: string): ListRequest;
  hasSearch(): boolean;
  clearSearch(): ListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
  static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequest;
  static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
  export type AsObject = {
    worksAtFilter: WorksAtFilterType,
    tradingPointId?: number,
    tradingPointType?: tradingpoint_tradingpoint_pb.TradingPointType,
    placeOfWorkId?: number,
    placeOfWorkType?: tradingpoint_tradingpoint_pb.PlaceOfWorkType,
    search?: string,
  }

  export enum TradingPointIdCase { 
    _TRADING_POINT_ID_NOT_SET = 0,
    TRADING_POINT_ID = 2,
  }

  export enum TradingPointTypeCase { 
    _TRADING_POINT_TYPE_NOT_SET = 0,
    TRADING_POINT_TYPE = 3,
  }

  export enum PlaceOfWorkIdCase { 
    _PLACE_OF_WORK_ID_NOT_SET = 0,
    PLACE_OF_WORK_ID = 4,
  }

  export enum PlaceOfWorkTypeCase { 
    _PLACE_OF_WORK_TYPE_NOT_SET = 0,
    PLACE_OF_WORK_TYPE = 5,
  }

  export enum SearchCase { 
    _SEARCH_NOT_SET = 0,
    SEARCH = 6,
  }
}

export class ListResponse extends jspb.Message {
  getSellersList(): Array<Seller>;
  setSellersList(value: Array<Seller>): ListResponse;
  clearSellersList(): ListResponse;
  addSellers(value?: Seller, index?: number): Seller;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
  static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponse;
  static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
  export type AsObject = {
    sellersList: Array<Seller.AsObject>,
  }
}

export class SellerRequest extends jspb.Message {
  getId(): number;
  setId(value: number): SellerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SellerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SellerRequest): SellerRequest.AsObject;
  static serializeBinaryToWriter(message: SellerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SellerRequest;
  static deserializeBinaryFromReader(message: SellerRequest, reader: jspb.BinaryReader): SellerRequest;
}

export namespace SellerRequest {
  export type AsObject = {
    id: number,
  }
}

export class SellerResponse extends jspb.Message {
  getSeller(): Seller | undefined;
  setSeller(value?: Seller): SellerResponse;
  hasSeller(): boolean;
  clearSeller(): SellerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SellerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SellerResponse): SellerResponse.AsObject;
  static serializeBinaryToWriter(message: SellerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SellerResponse;
  static deserializeBinaryFromReader(message: SellerResponse, reader: jspb.BinaryReader): SellerResponse;
}

export namespace SellerResponse {
  export type AsObject = {
    seller?: Seller.AsObject,
  }
}

export class NewWorksAt extends jspb.Message {
  getWorksAt(): WorksAt | undefined;
  setWorksAt(value?: WorksAt): NewWorksAt;
  hasWorksAt(): boolean;
  clearWorksAt(): NewWorksAt;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewWorksAt.AsObject;
  static toObject(includeInstance: boolean, msg: NewWorksAt): NewWorksAt.AsObject;
  static serializeBinaryToWriter(message: NewWorksAt, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewWorksAt;
  static deserializeBinaryFromReader(message: NewWorksAt, reader: jspb.BinaryReader): NewWorksAt;
}

export namespace NewWorksAt {
  export type AsObject = {
    worksAt?: WorksAt.AsObject,
  }

  export enum WorksAtCase { 
    _WORKS_AT_NOT_SET = 0,
    WORKS_AT = 1,
  }
}

export class PatchRequest extends jspb.Message {
  getId(): number;
  setId(value: number): PatchRequest;

  getFirstName(): string;
  setFirstName(value: string): PatchRequest;
  hasFirstName(): boolean;
  clearFirstName(): PatchRequest;

  getLastName(): string;
  setLastName(value: string): PatchRequest;
  hasLastName(): boolean;
  clearLastName(): PatchRequest;

  getMiddleName(): string;
  setMiddleName(value: string): PatchRequest;
  hasMiddleName(): boolean;
  clearMiddleName(): PatchRequest;

  getBirthDate(): core_date_pb.Date | undefined;
  setBirthDate(value?: core_date_pb.Date): PatchRequest;
  hasBirthDate(): boolean;
  clearBirthDate(): PatchRequest;

  getSalary(): core_money_pb.Money | undefined;
  setSalary(value?: core_money_pb.Money): PatchRequest;
  hasSalary(): boolean;
  clearSalary(): PatchRequest;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): PatchRequest;
  hasPhoneNumber(): boolean;
  clearPhoneNumber(): PatchRequest;

  getWorksAt(): NewWorksAt | undefined;
  setWorksAt(value?: NewWorksAt): PatchRequest;
  hasWorksAt(): boolean;
  clearWorksAt(): PatchRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchRequest): PatchRequest.AsObject;
  static serializeBinaryToWriter(message: PatchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchRequest;
  static deserializeBinaryFromReader(message: PatchRequest, reader: jspb.BinaryReader): PatchRequest;
}

export namespace PatchRequest {
  export type AsObject = {
    id: number,
    firstName?: string,
    lastName?: string,
    middleName?: string,
    birthDate?: core_date_pb.Date.AsObject,
    salary?: core_money_pb.Money.AsObject,
    phoneNumber?: string,
    worksAt?: NewWorksAt.AsObject,
  }

  export enum FirstNameCase { 
    _FIRST_NAME_NOT_SET = 0,
    FIRST_NAME = 2,
  }

  export enum LastNameCase { 
    _LAST_NAME_NOT_SET = 0,
    LAST_NAME = 3,
  }

  export enum MiddleNameCase { 
    _MIDDLE_NAME_NOT_SET = 0,
    MIDDLE_NAME = 4,
  }

  export enum BirthDateCase { 
    _BIRTH_DATE_NOT_SET = 0,
    BIRTH_DATE = 5,
  }

  export enum SalaryCase { 
    _SALARY_NOT_SET = 0,
    SALARY = 6,
  }

  export enum PhoneNumberCase { 
    _PHONE_NUMBER_NOT_SET = 0,
    PHONE_NUMBER = 7,
  }

  export enum WorksAtCase { 
    _WORKS_AT_NOT_SET = 0,
    WORKS_AT = 8,
  }
}

export class PatchResponse extends jspb.Message {
  getId(): number;
  setId(value: number): PatchResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PatchResponse): PatchResponse.AsObject;
  static serializeBinaryToWriter(message: PatchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchResponse;
  static deserializeBinaryFromReader(message: PatchResponse, reader: jspb.BinaryReader): PatchResponse;
}

export namespace PatchResponse {
  export type AsObject = {
    id: number,
  }
}

export enum WorksAtFilterType { 
  WORKS_AT_FILTER_TYPE_ALL = 0,
  WORKS_AT_FILTER_TYPE_ONLY_NULL = 1,
  WORKS_AT_FILTER_TYPE_ONLY_NOT_NULL = 2,
}
