import * as jspb from 'google-protobuf'



export class Money extends jspb.Message {
  getRubles(): number;
  setRubles(value: number): Money;

  getPennies(): number;
  setPennies(value: number): Money;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Money.AsObject;
  static toObject(includeInstance: boolean, msg: Money): Money.AsObject;
  static serializeBinaryToWriter(message: Money, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Money;
  static deserializeBinaryFromReader(message: Money, reader: jspb.BinaryReader): Money;
}

export namespace Money {
  export type AsObject = {
    rubles: number,
    pennies: number,
  }
}

