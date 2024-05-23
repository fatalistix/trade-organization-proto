/**
 * @fileoverview gRPC-Web generated client stub for tradingpoint
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v4.25.3
// source: tradingpoint/trading_point.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as tradingpoint_trading_point_pb from '../tradingpoint/trading_point_pb'; // proto import: "tradingpoint/trading_point.proto"


export class TradingPointServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorRegister = new grpcWeb.MethodDescriptor(
    '/tradingpoint.TradingPointService/Register',
    grpcWeb.MethodType.UNARY,
    tradingpoint_trading_point_pb.RegisterRequest,
    tradingpoint_trading_point_pb.RegisterResponse,
    (request: tradingpoint_trading_point_pb.RegisterRequest) => {
      return request.serializeBinary();
    },
    tradingpoint_trading_point_pb.RegisterResponse.deserializeBinary
  );

  register(
    request: tradingpoint_trading_point_pb.RegisterRequest,
    metadata?: grpcWeb.Metadata | null): Promise<tradingpoint_trading_point_pb.RegisterResponse>;

  register(
    request: tradingpoint_trading_point_pb.RegisterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tradingpoint_trading_point_pb.RegisterResponse) => void): grpcWeb.ClientReadableStream<tradingpoint_trading_point_pb.RegisterResponse>;

  register(
    request: tradingpoint_trading_point_pb.RegisterRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tradingpoint_trading_point_pb.RegisterResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tradingpoint.TradingPointService/Register',
        request,
        metadata || {},
        this.methodDescriptorRegister,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tradingpoint.TradingPointService/Register',
    request,
    metadata || {},
    this.methodDescriptorRegister);
  }

  methodDescriptorList = new grpcWeb.MethodDescriptor(
    '/tradingpoint.TradingPointService/List',
    grpcWeb.MethodType.UNARY,
    tradingpoint_trading_point_pb.ListRequest,
    tradingpoint_trading_point_pb.ListResponse,
    (request: tradingpoint_trading_point_pb.ListRequest) => {
      return request.serializeBinary();
    },
    tradingpoint_trading_point_pb.ListResponse.deserializeBinary
  );

  list(
    request: tradingpoint_trading_point_pb.ListRequest,
    metadata?: grpcWeb.Metadata | null): Promise<tradingpoint_trading_point_pb.ListResponse>;

  list(
    request: tradingpoint_trading_point_pb.ListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tradingpoint_trading_point_pb.ListResponse) => void): grpcWeb.ClientReadableStream<tradingpoint_trading_point_pb.ListResponse>;

  list(
    request: tradingpoint_trading_point_pb.ListRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tradingpoint_trading_point_pb.ListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tradingpoint.TradingPointService/List',
        request,
        metadata || {},
        this.methodDescriptorList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tradingpoint.TradingPointService/List',
    request,
    metadata || {},
    this.methodDescriptorList);
  }

  methodDescriptorAddSection = new grpcWeb.MethodDescriptor(
    '/tradingpoint.TradingPointService/AddSection',
    grpcWeb.MethodType.UNARY,
    tradingpoint_trading_point_pb.AddSectionRequest,
    tradingpoint_trading_point_pb.AddSectionResponse,
    (request: tradingpoint_trading_point_pb.AddSectionRequest) => {
      return request.serializeBinary();
    },
    tradingpoint_trading_point_pb.AddSectionResponse.deserializeBinary
  );

  addSection(
    request: tradingpoint_trading_point_pb.AddSectionRequest,
    metadata?: grpcWeb.Metadata | null): Promise<tradingpoint_trading_point_pb.AddSectionResponse>;

  addSection(
    request: tradingpoint_trading_point_pb.AddSectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tradingpoint_trading_point_pb.AddSectionResponse) => void): grpcWeb.ClientReadableStream<tradingpoint_trading_point_pb.AddSectionResponse>;

  addSection(
    request: tradingpoint_trading_point_pb.AddSectionRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tradingpoint_trading_point_pb.AddSectionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tradingpoint.TradingPointService/AddSection',
        request,
        metadata || {},
        this.methodDescriptorAddSection,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tradingpoint.TradingPointService/AddSection',
    request,
    metadata || {},
    this.methodDescriptorAddSection);
  }

  methodDescriptorAddHall = new grpcWeb.MethodDescriptor(
    '/tradingpoint.TradingPointService/AddHall',
    grpcWeb.MethodType.UNARY,
    tradingpoint_trading_point_pb.AddHallRequest,
    tradingpoint_trading_point_pb.AddHallResponse,
    (request: tradingpoint_trading_point_pb.AddHallRequest) => {
      return request.serializeBinary();
    },
    tradingpoint_trading_point_pb.AddHallResponse.deserializeBinary
  );

  addHall(
    request: tradingpoint_trading_point_pb.AddHallRequest,
    metadata?: grpcWeb.Metadata | null): Promise<tradingpoint_trading_point_pb.AddHallResponse>;

  addHall(
    request: tradingpoint_trading_point_pb.AddHallRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tradingpoint_trading_point_pb.AddHallResponse) => void): grpcWeb.ClientReadableStream<tradingpoint_trading_point_pb.AddHallResponse>;

  addHall(
    request: tradingpoint_trading_point_pb.AddHallRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tradingpoint_trading_point_pb.AddHallResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tradingpoint.TradingPointService/AddHall',
        request,
        metadata || {},
        this.methodDescriptorAddHall,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tradingpoint.TradingPointService/AddHall',
    request,
    metadata || {},
    this.methodDescriptorAddHall);
  }

  methodDescriptorDepartmentStore = new grpcWeb.MethodDescriptor(
    '/tradingpoint.TradingPointService/DepartmentStore',
    grpcWeb.MethodType.UNARY,
    tradingpoint_trading_point_pb.DepartmentStoreRequest,
    tradingpoint_trading_point_pb.DepartmentStoreResponse,
    (request: tradingpoint_trading_point_pb.DepartmentStoreRequest) => {
      return request.serializeBinary();
    },
    tradingpoint_trading_point_pb.DepartmentStoreResponse.deserializeBinary
  );

  departmentStore(
    request: tradingpoint_trading_point_pb.DepartmentStoreRequest,
    metadata?: grpcWeb.Metadata | null): Promise<tradingpoint_trading_point_pb.DepartmentStoreResponse>;

  departmentStore(
    request: tradingpoint_trading_point_pb.DepartmentStoreRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tradingpoint_trading_point_pb.DepartmentStoreResponse) => void): grpcWeb.ClientReadableStream<tradingpoint_trading_point_pb.DepartmentStoreResponse>;

  departmentStore(
    request: tradingpoint_trading_point_pb.DepartmentStoreRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tradingpoint_trading_point_pb.DepartmentStoreResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tradingpoint.TradingPointService/DepartmentStore',
        request,
        metadata || {},
        this.methodDescriptorDepartmentStore,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tradingpoint.TradingPointService/DepartmentStore',
    request,
    metadata || {},
    this.methodDescriptorDepartmentStore);
  }

  methodDescriptorStore = new grpcWeb.MethodDescriptor(
    '/tradingpoint.TradingPointService/Store',
    grpcWeb.MethodType.UNARY,
    tradingpoint_trading_point_pb.StoreRequest,
    tradingpoint_trading_point_pb.StoreResponse,
    (request: tradingpoint_trading_point_pb.StoreRequest) => {
      return request.serializeBinary();
    },
    tradingpoint_trading_point_pb.StoreResponse.deserializeBinary
  );

  store(
    request: tradingpoint_trading_point_pb.StoreRequest,
    metadata?: grpcWeb.Metadata | null): Promise<tradingpoint_trading_point_pb.StoreResponse>;

  store(
    request: tradingpoint_trading_point_pb.StoreRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tradingpoint_trading_point_pb.StoreResponse) => void): grpcWeb.ClientReadableStream<tradingpoint_trading_point_pb.StoreResponse>;

  store(
    request: tradingpoint_trading_point_pb.StoreRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tradingpoint_trading_point_pb.StoreResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tradingpoint.TradingPointService/Store',
        request,
        metadata || {},
        this.methodDescriptorStore,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tradingpoint.TradingPointService/Store',
    request,
    metadata || {},
    this.methodDescriptorStore);
  }

  methodDescriptorKiosk = new grpcWeb.MethodDescriptor(
    '/tradingpoint.TradingPointService/Kiosk',
    grpcWeb.MethodType.UNARY,
    tradingpoint_trading_point_pb.KioskRequest,
    tradingpoint_trading_point_pb.KioskResponse,
    (request: tradingpoint_trading_point_pb.KioskRequest) => {
      return request.serializeBinary();
    },
    tradingpoint_trading_point_pb.KioskResponse.deserializeBinary
  );

  kiosk(
    request: tradingpoint_trading_point_pb.KioskRequest,
    metadata?: grpcWeb.Metadata | null): Promise<tradingpoint_trading_point_pb.KioskResponse>;

  kiosk(
    request: tradingpoint_trading_point_pb.KioskRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tradingpoint_trading_point_pb.KioskResponse) => void): grpcWeb.ClientReadableStream<tradingpoint_trading_point_pb.KioskResponse>;

  kiosk(
    request: tradingpoint_trading_point_pb.KioskRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tradingpoint_trading_point_pb.KioskResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tradingpoint.TradingPointService/Kiosk',
        request,
        metadata || {},
        this.methodDescriptorKiosk,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tradingpoint.TradingPointService/Kiosk',
    request,
    metadata || {},
    this.methodDescriptorKiosk);
  }

  methodDescriptorTray = new grpcWeb.MethodDescriptor(
    '/tradingpoint.TradingPointService/Tray',
    grpcWeb.MethodType.UNARY,
    tradingpoint_trading_point_pb.TrayRequest,
    tradingpoint_trading_point_pb.TrayResponse,
    (request: tradingpoint_trading_point_pb.TrayRequest) => {
      return request.serializeBinary();
    },
    tradingpoint_trading_point_pb.TrayResponse.deserializeBinary
  );

  tray(
    request: tradingpoint_trading_point_pb.TrayRequest,
    metadata?: grpcWeb.Metadata | null): Promise<tradingpoint_trading_point_pb.TrayResponse>;

  tray(
    request: tradingpoint_trading_point_pb.TrayRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tradingpoint_trading_point_pb.TrayResponse) => void): grpcWeb.ClientReadableStream<tradingpoint_trading_point_pb.TrayResponse>;

  tray(
    request: tradingpoint_trading_point_pb.TrayRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tradingpoint_trading_point_pb.TrayResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tradingpoint.TradingPointService/Tray',
        request,
        metadata || {},
        this.methodDescriptorTray,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tradingpoint.TradingPointService/Tray',
    request,
    metadata || {},
    this.methodDescriptorTray);
  }

}

