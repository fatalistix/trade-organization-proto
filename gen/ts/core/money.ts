/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "core";

export interface Money {
  rubles: number;
  pennies: number;
}

function createBaseMoney(): Money {
  return { rubles: 0, pennies: 0 };
}

export const Money = {
  encode(message: Money, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.rubles !== 0) {
      writer.uint32(8).int64(message.rubles);
    }
    if (message.pennies !== 0) {
      writer.uint32(16).int32(message.pennies);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Money {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMoney();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.rubles = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.pennies = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Money {
    return {
      rubles: isSet(object.rubles) ? globalThis.Number(object.rubles) : 0,
      pennies: isSet(object.pennies) ? globalThis.Number(object.pennies) : 0,
    };
  },

  toJSON(message: Money): unknown {
    const obj: any = {};
    if (message.rubles !== 0) {
      obj.rubles = Math.round(message.rubles);
    }
    if (message.pennies !== 0) {
      obj.pennies = Math.round(message.pennies);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Money>, I>>(base?: I): Money {
    return Money.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Money>, I>>(object: I): Money {
    const message = createBaseMoney();
    message.rubles = object.rubles ?? 0;
    message.pennies = object.pennies ?? 0;
    return message;
  },
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

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
