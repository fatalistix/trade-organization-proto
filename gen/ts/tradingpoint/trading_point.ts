/* eslint-disable */
import {
  type CallOptions,
  ChannelCredentials,
  Client,
  type ClientOptions,
  type ClientUnaryCall,
  type handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  type ServiceError,
  type UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Money } from "../core/money";

export const protobufPackage = "tradingpoint";

export enum TradingPointType {
  STORE = 0,
  DEPARTMENT_STORE = 1,
  KIOSK = 2,
  TRAY = 3,
  UNRECOGNIZED = -1,
}

export function tradingPointTypeFromJSON(object: any): TradingPointType {
  switch (object) {
    case 0:
    case "STORE":
      return TradingPointType.STORE;
    case 1:
    case "DEPARTMENT_STORE":
      return TradingPointType.DEPARTMENT_STORE;
    case 2:
    case "KIOSK":
      return TradingPointType.KIOSK;
    case 3:
    case "TRAY":
      return TradingPointType.TRAY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TradingPointType.UNRECOGNIZED;
  }
}

export function tradingPointTypeToJSON(object: TradingPointType): string {
  switch (object) {
    case TradingPointType.STORE:
      return "STORE";
    case TradingPointType.DEPARTMENT_STORE:
      return "DEPARTMENT_STORE";
    case TradingPointType.KIOSK:
      return "KIOSK";
    case TradingPointType.TRAY:
      return "TRAY";
    case TradingPointType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface RegisterRequest {
  type: TradingPointType;
  areaPlot: number;
  rentalCharge: Money | undefined;
  counterCount: number;
  address: string;
}

export interface RegisterResponse {
  id: number;
  type: TradingPointType;
}

function createBaseRegisterRequest(): RegisterRequest {
  return { type: 0, areaPlot: 0, rentalCharge: undefined, counterCount: 0, address: "" };
}

export const RegisterRequest = {
  encode(message: RegisterRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.areaPlot !== 0) {
      writer.uint32(17).double(message.areaPlot);
    }
    if (message.rentalCharge !== undefined) {
      Money.encode(message.rentalCharge, writer.uint32(26).fork()).ldelim();
    }
    if (message.counterCount !== 0) {
      writer.uint32(32).int32(message.counterCount);
    }
    if (message.address !== "") {
      writer.uint32(42).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.areaPlot = reader.double();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rentalCharge = Money.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.counterCount = reader.int32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.address = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegisterRequest {
    return {
      type: isSet(object.type) ? tradingPointTypeFromJSON(object.type) : 0,
      areaPlot: isSet(object.areaPlot) ? globalThis.Number(object.areaPlot) : 0,
      rentalCharge: isSet(object.rentalCharge) ? Money.fromJSON(object.rentalCharge) : undefined,
      counterCount: isSet(object.counterCount) ? globalThis.Number(object.counterCount) : 0,
      address: isSet(object.address) ? globalThis.String(object.address) : "",
    };
  },

  toJSON(message: RegisterRequest): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = tradingPointTypeToJSON(message.type);
    }
    if (message.areaPlot !== 0) {
      obj.areaPlot = message.areaPlot;
    }
    if (message.rentalCharge !== undefined) {
      obj.rentalCharge = Money.toJSON(message.rentalCharge);
    }
    if (message.counterCount !== 0) {
      obj.counterCount = Math.round(message.counterCount);
    }
    if (message.address !== "") {
      obj.address = message.address;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RegisterRequest>, I>>(base?: I): RegisterRequest {
    return RegisterRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RegisterRequest>, I>>(object: I): RegisterRequest {
    const message = createBaseRegisterRequest();
    message.type = object.type ?? 0;
    message.areaPlot = object.areaPlot ?? 0;
    message.rentalCharge = (object.rentalCharge !== undefined && object.rentalCharge !== null)
      ? Money.fromPartial(object.rentalCharge)
      : undefined;
    message.counterCount = object.counterCount ?? 0;
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseRegisterResponse(): RegisterResponse {
  return { id: 0, type: 0 };
}

export const RegisterResponse = {
  encode(message: RegisterResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegisterResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RegisterResponse {
    return {
      id: isSet(object.id) ? globalThis.Number(object.id) : 0,
      type: isSet(object.type) ? tradingPointTypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: RegisterResponse): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.type !== 0) {
      obj.type = tradingPointTypeToJSON(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RegisterResponse>, I>>(base?: I): RegisterResponse {
    return RegisterResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RegisterResponse>, I>>(object: I): RegisterResponse {
    const message = createBaseRegisterResponse();
    message.id = object.id ?? 0;
    message.type = object.type ?? 0;
    return message;
  },
};

export type TradingPointService = typeof TradingPointService;
export const TradingPointService = {
  register: {
    path: "/tradingpoint.TradingPoint/Register",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: RegisterRequest) => Buffer.from(RegisterRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => RegisterRequest.decode(value),
    responseSerialize: (value: RegisterResponse) => Buffer.from(RegisterResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => RegisterResponse.decode(value),
  },
} as const;

export interface TradingPointServer extends UntypedServiceImplementation {
  register: handleUnaryCall<RegisterRequest, RegisterResponse>;
}

export interface TradingPointClient extends Client {
  register(
    request: RegisterRequest,
    callback: (error: ServiceError | null, response: RegisterResponse) => void,
  ): ClientUnaryCall;
  register(
    request: RegisterRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: RegisterResponse) => void,
  ): ClientUnaryCall;
  register(
    request: RegisterRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: RegisterResponse) => void,
  ): ClientUnaryCall;
}

export const TradingPointClient = makeGenericClientConstructor(
  TradingPointService,
  "tradingpoint.TradingPoint",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): TradingPointClient;
  service: typeof TradingPointService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
