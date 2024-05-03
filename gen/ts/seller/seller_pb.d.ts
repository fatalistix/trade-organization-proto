import * as jspb from 'google-protobuf'

import * as core_money_pb from '../core/money_pb'; // proto import: "core/money.proto"
import * as core_date_pb from '../core/date_pb'; // proto import: "core/date.proto"
import * as tradingpoint_trading_point_pb from '../tradingpoint/trading_point_pb'; // proto import: "tradingpoint/trading_point.proto"


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

  getPlaceOfWorkId(): number;
  setPlaceOfWorkId(value: number): Seller;

  getPlaceOfWorkType(): tradingpoint_trading_point_pb.PlaceOfWorkType;
  setPlaceOfWorkType(value: tradingpoint_trading_point_pb.PlaceOfWorkType): Seller;

  getTradingPointId(): number;
  setTradingPointId(value: number): Seller;

  getTradingPointType(): tradingpoint_trading_point_pb.TradingPointType;
  setTradingPointType(value: tradingpoint_trading_point_pb.TradingPointType): Seller;

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
    placeOfWorkId: number,
    placeOfWorkType: tradingpoint_trading_point_pb.PlaceOfWorkType,
    tradingPointId: number,
    tradingPointType: tradingpoint_trading_point_pb.TradingPointType,
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

  getPlaceOfWorkId(): number;
  setPlaceOfWorkId(value: number): RegisterRequest;

  getPlaceOfWorkType(): tradingpoint_trading_point_pb.PlaceOfWorkType;
  setPlaceOfWorkType(value: tradingpoint_trading_point_pb.PlaceOfWorkType): RegisterRequest;

  getTradingPointId(): number;
  setTradingPointId(value: number): RegisterRequest;

  getTradingPointType(): tradingpoint_trading_point_pb.TradingPointType;
  setTradingPointType(value: tradingpoint_trading_point_pb.TradingPointType): RegisterRequest;

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
    placeOfWorkId: number,
    placeOfWorkType: tradingpoint_trading_point_pb.PlaceOfWorkType,
    tradingPointId: number,
    tradingPointType: tradingpoint_trading_point_pb.TradingPointType,
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

export class ListByTradingPointRequest extends jspb.Message {
  getTradingPointId(): number;
  setTradingPointId(value: number): ListByTradingPointRequest;

  getTradingPointType(): tradingpoint_trading_point_pb.TradingPointType;
  setTradingPointType(value: tradingpoint_trading_point_pb.TradingPointType): ListByTradingPointRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListByTradingPointRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListByTradingPointRequest): ListByTradingPointRequest.AsObject;
  static serializeBinaryToWriter(message: ListByTradingPointRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListByTradingPointRequest;
  static deserializeBinaryFromReader(message: ListByTradingPointRequest, reader: jspb.BinaryReader): ListByTradingPointRequest;
}

export namespace ListByTradingPointRequest {
  export type AsObject = {
    tradingPointId: number,
    tradingPointType: tradingpoint_trading_point_pb.TradingPointType,
  }
}

export class ListByTradingPointResponse extends jspb.Message {
  getSellersList(): Array<Seller>;
  setSellersList(value: Array<Seller>): ListByTradingPointResponse;
  clearSellersList(): ListByTradingPointResponse;
  addSellers(value?: Seller, index?: number): Seller;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListByTradingPointResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListByTradingPointResponse): ListByTradingPointResponse.AsObject;
  static serializeBinaryToWriter(message: ListByTradingPointResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListByTradingPointResponse;
  static deserializeBinaryFromReader(message: ListByTradingPointResponse, reader: jspb.BinaryReader): ListByTradingPointResponse;
}

export namespace ListByTradingPointResponse {
  export type AsObject = {
    sellersList: Array<Seller.AsObject>,
  }
}

