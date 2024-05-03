import * as jspb from 'google-protobuf'

import * as core_money_pb from '../core/money_pb'; // proto import: "core/money.proto"


export class RegisterRequest extends jspb.Message {
  getType(): TradingPointType;
  setType(value: TradingPointType): RegisterRequest;

  getAreaPlot(): number;
  setAreaPlot(value: number): RegisterRequest;

  getRentalCharge(): core_money_pb.Money | undefined;
  setRentalCharge(value?: core_money_pb.Money): RegisterRequest;
  hasRentalCharge(): boolean;
  clearRentalCharge(): RegisterRequest;

  getCounterCount(): number;
  setCounterCount(value: number): RegisterRequest;

  getAddress(): string;
  setAddress(value: string): RegisterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterRequest;
  static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
  export type AsObject = {
    type: TradingPointType,
    areaPlot: number,
    rentalCharge?: core_money_pb.Money.AsObject,
    counterCount: number,
    address: string,
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

export enum TradingPointType { 
  TRADING_POINT_STORE = 0,
  TRADING_POINT_DEPARTMENT_STORE = 1,
  TRADING_POINT_KIOSK = 2,
  TRADING_POINT_TRAY = 3,
}
export enum PlaceOfWorkType { 
  PLACE_OF_WORK_HALL = 0,
  PLACE_OF_WORK_KIOSK = 1,
  PLACE_OF_WORK_TRAY = 2,
}
