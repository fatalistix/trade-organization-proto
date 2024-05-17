/**
 * @fileoverview gRPC-Web generated client stub for seller
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v4.25.3
// source: seller/seller.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as seller_seller_pb from '../seller/seller_pb'; // proto import: "seller/seller.proto"


export class SellerServiceClient {
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
    '/seller.SellerService/Register',
    grpcWeb.MethodType.UNARY,
    seller_seller_pb.RegisterRequest,
    seller_seller_pb.RegisterResponse,
    (request: seller_seller_pb.RegisterRequest) => {
      return request.serializeBinary();
    },
    seller_seller_pb.RegisterResponse.deserializeBinary
  );

  register(
    request: seller_seller_pb.RegisterRequest,
    metadata?: grpcWeb.Metadata | null): Promise<seller_seller_pb.RegisterResponse>;

  register(
    request: seller_seller_pb.RegisterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: seller_seller_pb.RegisterResponse) => void): grpcWeb.ClientReadableStream<seller_seller_pb.RegisterResponse>;

  register(
    request: seller_seller_pb.RegisterRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: seller_seller_pb.RegisterResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/seller.SellerService/Register',
        request,
        metadata || {},
        this.methodDescriptorRegister,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/seller.SellerService/Register',
    request,
    metadata || {},
    this.methodDescriptorRegister);
  }

  methodDescriptorListByTradingPoint = new grpcWeb.MethodDescriptor(
    '/seller.SellerService/ListByTradingPoint',
    grpcWeb.MethodType.UNARY,
    seller_seller_pb.ListByTradingPointRequest,
    seller_seller_pb.ListByTradingPointResponse,
    (request: seller_seller_pb.ListByTradingPointRequest) => {
      return request.serializeBinary();
    },
    seller_seller_pb.ListByTradingPointResponse.deserializeBinary
  );

  listByTradingPoint(
    request: seller_seller_pb.ListByTradingPointRequest,
    metadata?: grpcWeb.Metadata | null): Promise<seller_seller_pb.ListByTradingPointResponse>;

  listByTradingPoint(
    request: seller_seller_pb.ListByTradingPointRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: seller_seller_pb.ListByTradingPointResponse) => void): grpcWeb.ClientReadableStream<seller_seller_pb.ListByTradingPointResponse>;

  listByTradingPoint(
    request: seller_seller_pb.ListByTradingPointRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: seller_seller_pb.ListByTradingPointResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/seller.SellerService/ListByTradingPoint',
        request,
        metadata || {},
        this.methodDescriptorListByTradingPoint,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/seller.SellerService/ListByTradingPoint',
    request,
    metadata || {},
    this.methodDescriptorListByTradingPoint);
  }

  methodDescriptorList = new grpcWeb.MethodDescriptor(
    '/seller.SellerService/List',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    seller_seller_pb.ListResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    seller_seller_pb.ListResponse.deserializeBinary
  );

  list(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata | null): Promise<seller_seller_pb.ListResponse>;

  list(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: seller_seller_pb.ListResponse) => void): grpcWeb.ClientReadableStream<seller_seller_pb.ListResponse>;

  list(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: seller_seller_pb.ListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/seller.SellerService/List',
        request,
        metadata || {},
        this.methodDescriptorList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/seller.SellerService/List',
    request,
    metadata || {},
    this.methodDescriptorList);
  }

  methodDescriptorSetPlaceOfWork = new grpcWeb.MethodDescriptor(
    '/seller.SellerService/SetPlaceOfWork',
    grpcWeb.MethodType.UNARY,
    seller_seller_pb.SetPlaceOfWorkRequest,
    seller_seller_pb.SetPlaceOfWorkResponse,
    (request: seller_seller_pb.SetPlaceOfWorkRequest) => {
      return request.serializeBinary();
    },
    seller_seller_pb.SetPlaceOfWorkResponse.deserializeBinary
  );

  setPlaceOfWork(
    request: seller_seller_pb.SetPlaceOfWorkRequest,
    metadata?: grpcWeb.Metadata | null): Promise<seller_seller_pb.SetPlaceOfWorkResponse>;

  setPlaceOfWork(
    request: seller_seller_pb.SetPlaceOfWorkRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: seller_seller_pb.SetPlaceOfWorkResponse) => void): grpcWeb.ClientReadableStream<seller_seller_pb.SetPlaceOfWorkResponse>;

  setPlaceOfWork(
    request: seller_seller_pb.SetPlaceOfWorkRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: seller_seller_pb.SetPlaceOfWorkResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/seller.SellerService/SetPlaceOfWork',
        request,
        metadata || {},
        this.methodDescriptorSetPlaceOfWork,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/seller.SellerService/SetPlaceOfWork',
    request,
    metadata || {},
    this.methodDescriptorSetPlaceOfWork);
  }

}

