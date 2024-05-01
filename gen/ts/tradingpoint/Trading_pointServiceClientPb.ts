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


export class TradingPointClient {
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
    '/tradingpoint.TradingPoint/Register',
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
          '/tradingpoint.TradingPoint/Register',
        request,
        metadata || {},
        this.methodDescriptorRegister,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tradingpoint.TradingPoint/Register',
    request,
    metadata || {},
    this.methodDescriptorRegister);
  }

}
