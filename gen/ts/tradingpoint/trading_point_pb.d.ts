import * as jspb from 'google-protobuf'

import * as core_money_pb from '../core/money_pb'; // proto import: "core/money.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class TradingPoint extends jspb.Message {
  getId(): number;
  setId(value: number): TradingPoint;

  getType(): TradingPointType;
  setType(value: TradingPointType): TradingPoint;

  getAreaPlot(): number;
  setAreaPlot(value: number): TradingPoint;

  getRentalCharge(): core_money_pb.Money | undefined;
  setRentalCharge(value?: core_money_pb.Money): TradingPoint;
  hasRentalCharge(): boolean;
  clearRentalCharge(): TradingPoint;

  getCounterCount(): number;
  setCounterCount(value: number): TradingPoint;

  getAddress(): string;
  setAddress(value: string): TradingPoint;

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
    type: TradingPointType,
    areaPlot: number,
    rentalCharge?: core_money_pb.Money.AsObject,
    counterCount: number,
    address: string,
  }
}

export class PlaceOfWork extends jspb.Message {
  getId(): number;
  setId(value: number): PlaceOfWork;

  getType(): PlaceOfWorkType;
  setType(value: PlaceOfWorkType): PlaceOfWork;

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
    type: PlaceOfWorkType,
  }
}

export class HallContainer extends jspb.Message {
  getId(): number;
  setId(value: number): HallContainer;

  getType(): HallContainerType;
  setType(value: HallContainerType): HallContainer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HallContainer.AsObject;
  static toObject(includeInstance: boolean, msg: HallContainer): HallContainer.AsObject;
  static serializeBinaryToWriter(message: HallContainer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HallContainer;
  static deserializeBinaryFromReader(message: HallContainer, reader: jspb.BinaryReader): HallContainer;
}

export namespace HallContainer {
  export type AsObject = {
    id: number,
    type: HallContainerType,
  }
}

export class ReceiptingPointWithAccounting extends jspb.Message {
  getId(): number;
  setId(value: number): ReceiptingPointWithAccounting;

  getType(): ReceiptingPointWithAccountingType;
  setType(value: ReceiptingPointWithAccountingType): ReceiptingPointWithAccounting;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiptingPointWithAccounting.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiptingPointWithAccounting): ReceiptingPointWithAccounting.AsObject;
  static serializeBinaryToWriter(message: ReceiptingPointWithAccounting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiptingPointWithAccounting;
  static deserializeBinaryFromReader(message: ReceiptingPointWithAccounting, reader: jspb.BinaryReader): ReceiptingPointWithAccounting;
}

export namespace ReceiptingPointWithAccounting {
  export type AsObject = {
    id: number,
    type: ReceiptingPointWithAccountingType,
  }
}

export class ReceiptingPointWithoutAccounting extends jspb.Message {
  getId(): number;
  setId(value: number): ReceiptingPointWithoutAccounting;

  getType(): ReceiptingPointWithoutAccountingType;
  setType(value: ReceiptingPointWithoutAccountingType): ReceiptingPointWithoutAccounting;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReceiptingPointWithoutAccounting.AsObject;
  static toObject(includeInstance: boolean, msg: ReceiptingPointWithoutAccounting): ReceiptingPointWithoutAccounting.AsObject;
  static serializeBinaryToWriter(message: ReceiptingPointWithoutAccounting, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReceiptingPointWithoutAccounting;
  static deserializeBinaryFromReader(message: ReceiptingPointWithoutAccounting, reader: jspb.BinaryReader): ReceiptingPointWithoutAccounting;
}

export namespace ReceiptingPointWithoutAccounting {
  export type AsObject = {
    id: number,
    type: ReceiptingPointWithoutAccountingType,
  }
}

export class Hall extends jspb.Message {
  getId(): number;
  setId(value: number): Hall;

  getHallContainerId(): number;
  setHallContainerId(value: number): Hall;

  getHallContainerType(): HallContainerType;
  setHallContainerType(value: HallContainerType): Hall;

  getTradingPointId(): number;
  setTradingPointId(value: number): Hall;

  getTradingPointType(): TradingPointType;
  setTradingPointType(value: TradingPointType): Hall;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Hall.AsObject;
  static toObject(includeInstance: boolean, msg: Hall): Hall.AsObject;
  static serializeBinaryToWriter(message: Hall, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Hall;
  static deserializeBinaryFromReader(message: Hall, reader: jspb.BinaryReader): Hall;
}

export namespace Hall {
  export type AsObject = {
    id: number,
    hallContainerId: number,
    hallContainerType: HallContainerType,
    tradingPointId: number,
    tradingPointType: TradingPointType,
  }
}

export class Section extends jspb.Message {
  getId(): number;
  setId(value: number): Section;

  getDepartmentStoreId(): number;
  setDepartmentStoreId(value: number): Section;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Section.AsObject;
  static toObject(includeInstance: boolean, msg: Section): Section.AsObject;
  static serializeBinaryToWriter(message: Section, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Section;
  static deserializeBinaryFromReader(message: Section, reader: jspb.BinaryReader): Section;
}

export namespace Section {
  export type AsObject = {
    id: number,
    departmentStoreId: number,
  }
}

export class DepartmentStore extends jspb.Message {
  getId(): number;
  setId(value: number): DepartmentStore;

  getTradingPoint(): TradingPoint | undefined;
  setTradingPoint(value?: TradingPoint): DepartmentStore;
  hasTradingPoint(): boolean;
  clearTradingPoint(): DepartmentStore;

  getReceiptingPointWithAccounting(): ReceiptingPointWithAccounting | undefined;
  setReceiptingPointWithAccounting(value?: ReceiptingPointWithAccounting): DepartmentStore;
  hasReceiptingPointWithAccounting(): boolean;
  clearReceiptingPointWithAccounting(): DepartmentStore;

  getSectionsList(): Array<Section>;
  setSectionsList(value: Array<Section>): DepartmentStore;
  clearSectionsList(): DepartmentStore;
  addSections(value?: Section, index?: number): Section;

  getHallsList(): Array<Hall>;
  setHallsList(value: Array<Hall>): DepartmentStore;
  clearHallsList(): DepartmentStore;
  addHalls(value?: Hall, index?: number): Hall;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepartmentStore.AsObject;
  static toObject(includeInstance: boolean, msg: DepartmentStore): DepartmentStore.AsObject;
  static serializeBinaryToWriter(message: DepartmentStore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepartmentStore;
  static deserializeBinaryFromReader(message: DepartmentStore, reader: jspb.BinaryReader): DepartmentStore;
}

export namespace DepartmentStore {
  export type AsObject = {
    id: number,
    tradingPoint?: TradingPoint.AsObject,
    receiptingPointWithAccounting?: ReceiptingPointWithAccounting.AsObject,
    sectionsList: Array<Section.AsObject>,
    hallsList: Array<Hall.AsObject>,
  }
}

export class Store extends jspb.Message {
  getId(): number;
  setId(value: number): Store;

  getTradingPoint(): TradingPoint | undefined;
  setTradingPoint(value?: TradingPoint): Store;
  hasTradingPoint(): boolean;
  clearTradingPoint(): Store;

  getReceiptingPointWithAccounting(): ReceiptingPointWithAccounting | undefined;
  setReceiptingPointWithAccounting(value?: ReceiptingPointWithAccounting): Store;
  hasReceiptingPointWithAccounting(): boolean;
  clearReceiptingPointWithAccounting(): Store;

  getHallContainer(): HallContainer | undefined;
  setHallContainer(value?: HallContainer): Store;
  hasHallContainer(): boolean;
  clearHallContainer(): Store;

  getHallsList(): Array<Hall>;
  setHallsList(value: Array<Hall>): Store;
  clearHallsList(): Store;
  addHalls(value?: Hall, index?: number): Hall;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Store.AsObject;
  static toObject(includeInstance: boolean, msg: Store): Store.AsObject;
  static serializeBinaryToWriter(message: Store, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Store;
  static deserializeBinaryFromReader(message: Store, reader: jspb.BinaryReader): Store;
}

export namespace Store {
  export type AsObject = {
    id: number,
    tradingPoint?: TradingPoint.AsObject,
    receiptingPointWithAccounting?: ReceiptingPointWithAccounting.AsObject,
    hallContainer?: HallContainer.AsObject,
    hallsList: Array<Hall.AsObject>,
  }
}

export class Kiosk extends jspb.Message {
  getId(): number;
  setId(value: number): Kiosk;

  getTradingPoint(): TradingPoint | undefined;
  setTradingPoint(value?: TradingPoint): Kiosk;
  hasTradingPoint(): boolean;
  clearTradingPoint(): Kiosk;

  getReceiptingPointWithoutAccounting(): ReceiptingPointWithoutAccounting | undefined;
  setReceiptingPointWithoutAccounting(value?: ReceiptingPointWithoutAccounting): Kiosk;
  hasReceiptingPointWithoutAccounting(): boolean;
  clearReceiptingPointWithoutAccounting(): Kiosk;

  getPlaceOfWork(): PlaceOfWork | undefined;
  setPlaceOfWork(value?: PlaceOfWork): Kiosk;
  hasPlaceOfWork(): boolean;
  clearPlaceOfWork(): Kiosk;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Kiosk.AsObject;
  static toObject(includeInstance: boolean, msg: Kiosk): Kiosk.AsObject;
  static serializeBinaryToWriter(message: Kiosk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Kiosk;
  static deserializeBinaryFromReader(message: Kiosk, reader: jspb.BinaryReader): Kiosk;
}

export namespace Kiosk {
  export type AsObject = {
    id: number,
    tradingPoint?: TradingPoint.AsObject,
    receiptingPointWithoutAccounting?: ReceiptingPointWithoutAccounting.AsObject,
    placeOfWork?: PlaceOfWork.AsObject,
  }
}

export class Tray extends jspb.Message {
  getId(): number;
  setId(value: number): Tray;

  getTradingPoint(): TradingPoint | undefined;
  setTradingPoint(value?: TradingPoint): Tray;
  hasTradingPoint(): boolean;
  clearTradingPoint(): Tray;

  getReceiptingPointWithoutAccounting(): ReceiptingPointWithoutAccounting | undefined;
  setReceiptingPointWithoutAccounting(value?: ReceiptingPointWithoutAccounting): Tray;
  hasReceiptingPointWithoutAccounting(): boolean;
  clearReceiptingPointWithoutAccounting(): Tray;

  getPlaceOfWork(): PlaceOfWork | undefined;
  setPlaceOfWork(value?: PlaceOfWork): Tray;
  hasPlaceOfWork(): boolean;
  clearPlaceOfWork(): Tray;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tray.AsObject;
  static toObject(includeInstance: boolean, msg: Tray): Tray.AsObject;
  static serializeBinaryToWriter(message: Tray, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tray;
  static deserializeBinaryFromReader(message: Tray, reader: jspb.BinaryReader): Tray;
}

export namespace Tray {
  export type AsObject = {
    id: number,
    tradingPoint?: TradingPoint.AsObject,
    receiptingPointWithoutAccounting?: ReceiptingPointWithoutAccounting.AsObject,
    placeOfWork?: PlaceOfWork.AsObject,
  }
}

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
  getTradingPointsList(): Array<TradingPoint>;
  setTradingPointsList(value: Array<TradingPoint>): ListResponse;
  clearTradingPointsList(): ListResponse;
  addTradingPoints(value?: TradingPoint, index?: number): TradingPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResponse): ListResponse.AsObject;
  static serializeBinaryToWriter(message: ListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResponse;
  static deserializeBinaryFromReader(message: ListResponse, reader: jspb.BinaryReader): ListResponse;
}

export namespace ListResponse {
  export type AsObject = {
    tradingPointsList: Array<TradingPoint.AsObject>,
  }
}

export class AddSectionRequest extends jspb.Message {
  getDepartmentStoreId(): number;
  setDepartmentStoreId(value: number): AddSectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddSectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddSectionRequest): AddSectionRequest.AsObject;
  static serializeBinaryToWriter(message: AddSectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddSectionRequest;
  static deserializeBinaryFromReader(message: AddSectionRequest, reader: jspb.BinaryReader): AddSectionRequest;
}

export namespace AddSectionRequest {
  export type AsObject = {
    departmentStoreId: number,
  }
}

export class AddSectionResponse extends jspb.Message {
  getId(): number;
  setId(value: number): AddSectionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddSectionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddSectionResponse): AddSectionResponse.AsObject;
  static serializeBinaryToWriter(message: AddSectionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddSectionResponse;
  static deserializeBinaryFromReader(message: AddSectionResponse, reader: jspb.BinaryReader): AddSectionResponse;
}

export namespace AddSectionResponse {
  export type AsObject = {
    id: number,
  }
}

export class AddHallRequest extends jspb.Message {
  getHallContainerId(): number;
  setHallContainerId(value: number): AddHallRequest;

  getHallContainerType(): HallContainerType;
  setHallContainerType(value: HallContainerType): AddHallRequest;

  getTradingPointId(): number;
  setTradingPointId(value: number): AddHallRequest;

  getTradingPointType(): TradingPointType;
  setTradingPointType(value: TradingPointType): AddHallRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddHallRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddHallRequest): AddHallRequest.AsObject;
  static serializeBinaryToWriter(message: AddHallRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddHallRequest;
  static deserializeBinaryFromReader(message: AddHallRequest, reader: jspb.BinaryReader): AddHallRequest;
}

export namespace AddHallRequest {
  export type AsObject = {
    hallContainerId: number,
    hallContainerType: HallContainerType,
    tradingPointId: number,
    tradingPointType: TradingPointType,
  }
}

export class AddHallResponse extends jspb.Message {
  getId(): number;
  setId(value: number): AddHallResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddHallResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddHallResponse): AddHallResponse.AsObject;
  static serializeBinaryToWriter(message: AddHallResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddHallResponse;
  static deserializeBinaryFromReader(message: AddHallResponse, reader: jspb.BinaryReader): AddHallResponse;
}

export namespace AddHallResponse {
  export type AsObject = {
    id: number,
  }
}

export class DepartmentStoreRequest extends jspb.Message {
  getId(): number;
  setId(value: number): DepartmentStoreRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepartmentStoreRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DepartmentStoreRequest): DepartmentStoreRequest.AsObject;
  static serializeBinaryToWriter(message: DepartmentStoreRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepartmentStoreRequest;
  static deserializeBinaryFromReader(message: DepartmentStoreRequest, reader: jspb.BinaryReader): DepartmentStoreRequest;
}

export namespace DepartmentStoreRequest {
  export type AsObject = {
    id: number,
  }
}

export class DepartmentStoreResponse extends jspb.Message {
  getDepartmentStore(): DepartmentStore | undefined;
  setDepartmentStore(value?: DepartmentStore): DepartmentStoreResponse;
  hasDepartmentStore(): boolean;
  clearDepartmentStore(): DepartmentStoreResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepartmentStoreResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DepartmentStoreResponse): DepartmentStoreResponse.AsObject;
  static serializeBinaryToWriter(message: DepartmentStoreResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepartmentStoreResponse;
  static deserializeBinaryFromReader(message: DepartmentStoreResponse, reader: jspb.BinaryReader): DepartmentStoreResponse;
}

export namespace DepartmentStoreResponse {
  export type AsObject = {
    departmentStore?: DepartmentStore.AsObject,
  }
}

export class StoreRequest extends jspb.Message {
  getId(): number;
  setId(value: number): StoreRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoreRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StoreRequest): StoreRequest.AsObject;
  static serializeBinaryToWriter(message: StoreRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoreRequest;
  static deserializeBinaryFromReader(message: StoreRequest, reader: jspb.BinaryReader): StoreRequest;
}

export namespace StoreRequest {
  export type AsObject = {
    id: number,
  }
}

export class StoreResponse extends jspb.Message {
  getStore(): Store | undefined;
  setStore(value?: Store): StoreResponse;
  hasStore(): boolean;
  clearStore(): StoreResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StoreResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StoreResponse): StoreResponse.AsObject;
  static serializeBinaryToWriter(message: StoreResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StoreResponse;
  static deserializeBinaryFromReader(message: StoreResponse, reader: jspb.BinaryReader): StoreResponse;
}

export namespace StoreResponse {
  export type AsObject = {
    store?: Store.AsObject,
  }
}

export class KioskRequest extends jspb.Message {
  getId(): number;
  setId(value: number): KioskRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KioskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: KioskRequest): KioskRequest.AsObject;
  static serializeBinaryToWriter(message: KioskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KioskRequest;
  static deserializeBinaryFromReader(message: KioskRequest, reader: jspb.BinaryReader): KioskRequest;
}

export namespace KioskRequest {
  export type AsObject = {
    id: number,
  }
}

export class KioskResponse extends jspb.Message {
  getKiosk(): Kiosk | undefined;
  setKiosk(value?: Kiosk): KioskResponse;
  hasKiosk(): boolean;
  clearKiosk(): KioskResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KioskResponse.AsObject;
  static toObject(includeInstance: boolean, msg: KioskResponse): KioskResponse.AsObject;
  static serializeBinaryToWriter(message: KioskResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KioskResponse;
  static deserializeBinaryFromReader(message: KioskResponse, reader: jspb.BinaryReader): KioskResponse;
}

export namespace KioskResponse {
  export type AsObject = {
    kiosk?: Kiosk.AsObject,
  }
}

export class TrayRequest extends jspb.Message {
  getId(): number;
  setId(value: number): TrayRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrayRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TrayRequest): TrayRequest.AsObject;
  static serializeBinaryToWriter(message: TrayRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrayRequest;
  static deserializeBinaryFromReader(message: TrayRequest, reader: jspb.BinaryReader): TrayRequest;
}

export namespace TrayRequest {
  export type AsObject = {
    id: number,
  }
}

export class TrayResponse extends jspb.Message {
  getTray(): Tray | undefined;
  setTray(value?: Tray): TrayResponse;
  hasTray(): boolean;
  clearTray(): TrayResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrayResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TrayResponse): TrayResponse.AsObject;
  static serializeBinaryToWriter(message: TrayResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrayResponse;
  static deserializeBinaryFromReader(message: TrayResponse, reader: jspb.BinaryReader): TrayResponse;
}

export namespace TrayResponse {
  export type AsObject = {
    tray?: Tray.AsObject,
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
export enum HallContainerType { 
  HALL_CONTAINER_SECTION = 0,
  HALL_CONTAINER_STORE = 1,
}
export enum ReceiptingPointWithAccountingType { 
  RECEIPTING_POINT_WITH_ACCOUNTING_DEPARTMENT_STORE = 0,
  RECEIPTING_POINT_WITH_ACCOUNTING_STORE = 1,
}
export enum ReceiptingPointWithoutAccountingType { 
  RECEIPTING_POINT_WITHOUT_ACCOUNTING_KIOSK = 0,
  RECEIPTING_POINT_WITHOUT_ACCOUNTING_TRAY = 1,
}
