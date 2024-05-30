import * as jspb from 'google-protobuf'

import * as core_money_pb from '../core/money_pb'; // proto import: "core/money.proto"
import * as core_date_pb from '../core/date_pb'; // proto import: "core/date.proto"
import * as tradingpoint_tradingpoint_pb from '../tradingpoint/tradingpoint_pb'; // proto import: "tradingpoint/tradingpoint.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class Seller extends jspb.Message {
  getId(): number;
  setId(value: number): Seller;

  getStatus(): SellerStatus;
  setStatus(value: SellerStatus): Seller;

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
    status: SellerStatus,
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

export class RegisterRequest extends jspb.Message {
  getFirstName(): string;
  setFirstName(value: string): RegisterRequest;

  getLastName(): string;
  setLastName(value: string): RegisterRequest;

  getMiddleName(): string;
  setMiddleName(value: string): RegisterRequest;

  getBirthDate(): core_date_pb.Date | undefined;
  setBirthDate(value?: core_date_pb.Date): RegisterRequest;
  hasBirthDate(): boolean;
  clearBirthDate(): RegisterRequest;

  getSalary(): core_money_pb.Money | undefined;
  setSalary(value?: core_money_pb.Money): RegisterRequest;
  hasSalary(): boolean;
  clearSalary(): RegisterRequest;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): RegisterRequest;

  getWorksAt(): WorksAt | undefined;
  setWorksAt(value?: WorksAt): RegisterRequest;
  hasWorksAt(): boolean;
  clearWorksAt(): RegisterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRequest;
  static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
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

export class RegisterResponse extends jspb.Message {
  getId(): number;
  setId(value: number): RegisterResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterResponse): RegisterResponse.AsObject;
  static serializeBinaryToWriter(message: RegisterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterResponse;
  static deserializeBinaryFromReader(message: RegisterResponse, reader: jspb.BinaryReader): RegisterResponse;
}

export namespace RegisterResponse {
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

export class UpdateRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdateRequest;

  getFirstName(): string;
  setFirstName(value: string): UpdateRequest;
  hasFirstName(): boolean;
  clearFirstName(): UpdateRequest;

  getLastName(): string;
  setLastName(value: string): UpdateRequest;
  hasLastName(): boolean;
  clearLastName(): UpdateRequest;

  getMiddleName(): string;
  setMiddleName(value: string): UpdateRequest;
  hasMiddleName(): boolean;
  clearMiddleName(): UpdateRequest;

  getBirthDate(): core_date_pb.Date | undefined;
  setBirthDate(value?: core_date_pb.Date): UpdateRequest;
  hasBirthDate(): boolean;
  clearBirthDate(): UpdateRequest;

  getSalary(): core_money_pb.Money | undefined;
  setSalary(value?: core_money_pb.Money): UpdateRequest;
  hasSalary(): boolean;
  clearSalary(): UpdateRequest;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): UpdateRequest;
  hasPhoneNumber(): boolean;
  clearPhoneNumber(): UpdateRequest;

  getWorksAt(): NewWorksAt | undefined;
  setWorksAt(value?: NewWorksAt): UpdateRequest;
  hasWorksAt(): boolean;
  clearWorksAt(): UpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRequest): UpdateRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRequest;
  static deserializeBinaryFromReader(message: UpdateRequest, reader: jspb.BinaryReader): UpdateRequest;
}

export namespace UpdateRequest {
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

export enum SellerStatus { 
  SELLER_STATUS_WORKING = 0,
  SELLER_STATUS_NOT_WORKING = 1,
}
export enum WorksAtFilterType { 
  WORKS_AT_FILTER_TYPE_ALL = 0,
  WORKS_AT_FILTER_TYPE_ONLY_NULL = 1,
  WORKS_AT_FILTER_TYPE_ONLY_NOT_NULL = 2,
}
