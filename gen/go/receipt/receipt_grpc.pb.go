// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v4.25.3
// source: receipt/receipt.proto

package receipt

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// ReceiptServiceClient is the client API for ReceiptService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ReceiptServiceClient interface {
	CreateWithAccounting(ctx context.Context, in *CreateWithAccountingRequest, opts ...grpc.CallOption) (*CreateWithAccountingResponse, error)
	CreateWithoutAccounting(ctx context.Context, in *CreateWithoutAccountingRequest, opts ...grpc.CallOption) (*CreateWithoutAccountingResponse, error)
	List(ctx context.Context, in *ListRequest, opts ...grpc.CallOption) (*ListResponse, error)
	ReceiptWithAccounting(ctx context.Context, in *ReceiptWithAccountingRequest, opts ...grpc.CallOption) (*ReceiptWithAccountingResponse, error)
	ReceiptWithoutAccounting(ctx context.Context, in *ReceiptWithoutAccountingRequest, opts ...grpc.CallOption) (*ReceiptWithoutAccountingResponse, error)
}

type receiptServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewReceiptServiceClient(cc grpc.ClientConnInterface) ReceiptServiceClient {
	return &receiptServiceClient{cc}
}

func (c *receiptServiceClient) CreateWithAccounting(ctx context.Context, in *CreateWithAccountingRequest, opts ...grpc.CallOption) (*CreateWithAccountingResponse, error) {
	out := new(CreateWithAccountingResponse)
	err := c.cc.Invoke(ctx, "/receipt.ReceiptService/CreateWithAccounting", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *receiptServiceClient) CreateWithoutAccounting(ctx context.Context, in *CreateWithoutAccountingRequest, opts ...grpc.CallOption) (*CreateWithoutAccountingResponse, error) {
	out := new(CreateWithoutAccountingResponse)
	err := c.cc.Invoke(ctx, "/receipt.ReceiptService/CreateWithoutAccounting", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *receiptServiceClient) List(ctx context.Context, in *ListRequest, opts ...grpc.CallOption) (*ListResponse, error) {
	out := new(ListResponse)
	err := c.cc.Invoke(ctx, "/receipt.ReceiptService/List", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *receiptServiceClient) ReceiptWithAccounting(ctx context.Context, in *ReceiptWithAccountingRequest, opts ...grpc.CallOption) (*ReceiptWithAccountingResponse, error) {
	out := new(ReceiptWithAccountingResponse)
	err := c.cc.Invoke(ctx, "/receipt.ReceiptService/ReceiptWithAccounting", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *receiptServiceClient) ReceiptWithoutAccounting(ctx context.Context, in *ReceiptWithoutAccountingRequest, opts ...grpc.CallOption) (*ReceiptWithoutAccountingResponse, error) {
	out := new(ReceiptWithoutAccountingResponse)
	err := c.cc.Invoke(ctx, "/receipt.ReceiptService/ReceiptWithoutAccounting", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ReceiptServiceServer is the server API for ReceiptService service.
// All implementations must embed UnimplementedReceiptServiceServer
// for forward compatibility
type ReceiptServiceServer interface {
	CreateWithAccounting(context.Context, *CreateWithAccountingRequest) (*CreateWithAccountingResponse, error)
	CreateWithoutAccounting(context.Context, *CreateWithoutAccountingRequest) (*CreateWithoutAccountingResponse, error)
	List(context.Context, *ListRequest) (*ListResponse, error)
	ReceiptWithAccounting(context.Context, *ReceiptWithAccountingRequest) (*ReceiptWithAccountingResponse, error)
	ReceiptWithoutAccounting(context.Context, *ReceiptWithoutAccountingRequest) (*ReceiptWithoutAccountingResponse, error)
	mustEmbedUnimplementedReceiptServiceServer()
}

// UnimplementedReceiptServiceServer must be embedded to have forward compatible implementations.
type UnimplementedReceiptServiceServer struct {
}

func (UnimplementedReceiptServiceServer) CreateWithAccounting(context.Context, *CreateWithAccountingRequest) (*CreateWithAccountingResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateWithAccounting not implemented")
}
func (UnimplementedReceiptServiceServer) CreateWithoutAccounting(context.Context, *CreateWithoutAccountingRequest) (*CreateWithoutAccountingResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateWithoutAccounting not implemented")
}
func (UnimplementedReceiptServiceServer) List(context.Context, *ListRequest) (*ListResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method List not implemented")
}
func (UnimplementedReceiptServiceServer) ReceiptWithAccounting(context.Context, *ReceiptWithAccountingRequest) (*ReceiptWithAccountingResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ReceiptWithAccounting not implemented")
}
func (UnimplementedReceiptServiceServer) ReceiptWithoutAccounting(context.Context, *ReceiptWithoutAccountingRequest) (*ReceiptWithoutAccountingResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ReceiptWithoutAccounting not implemented")
}
func (UnimplementedReceiptServiceServer) mustEmbedUnimplementedReceiptServiceServer() {}

// UnsafeReceiptServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ReceiptServiceServer will
// result in compilation errors.
type UnsafeReceiptServiceServer interface {
	mustEmbedUnimplementedReceiptServiceServer()
}

func RegisterReceiptServiceServer(s grpc.ServiceRegistrar, srv ReceiptServiceServer) {
	s.RegisterService(&ReceiptService_ServiceDesc, srv)
}

func _ReceiptService_CreateWithAccounting_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateWithAccountingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ReceiptServiceServer).CreateWithAccounting(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/receipt.ReceiptService/CreateWithAccounting",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ReceiptServiceServer).CreateWithAccounting(ctx, req.(*CreateWithAccountingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ReceiptService_CreateWithoutAccounting_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateWithoutAccountingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ReceiptServiceServer).CreateWithoutAccounting(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/receipt.ReceiptService/CreateWithoutAccounting",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ReceiptServiceServer).CreateWithoutAccounting(ctx, req.(*CreateWithoutAccountingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ReceiptService_List_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ReceiptServiceServer).List(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/receipt.ReceiptService/List",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ReceiptServiceServer).List(ctx, req.(*ListRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ReceiptService_ReceiptWithAccounting_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReceiptWithAccountingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ReceiptServiceServer).ReceiptWithAccounting(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/receipt.ReceiptService/ReceiptWithAccounting",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ReceiptServiceServer).ReceiptWithAccounting(ctx, req.(*ReceiptWithAccountingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ReceiptService_ReceiptWithoutAccounting_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReceiptWithoutAccountingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ReceiptServiceServer).ReceiptWithoutAccounting(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/receipt.ReceiptService/ReceiptWithoutAccounting",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ReceiptServiceServer).ReceiptWithoutAccounting(ctx, req.(*ReceiptWithoutAccountingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// ReceiptService_ServiceDesc is the grpc.ServiceDesc for ReceiptService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ReceiptService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "receipt.ReceiptService",
	HandlerType: (*ReceiptServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "CreateWithAccounting",
			Handler:    _ReceiptService_CreateWithAccounting_Handler,
		},
		{
			MethodName: "CreateWithoutAccounting",
			Handler:    _ReceiptService_CreateWithoutAccounting_Handler,
		},
		{
			MethodName: "List",
			Handler:    _ReceiptService_List_Handler,
		},
		{
			MethodName: "ReceiptWithAccounting",
			Handler:    _ReceiptService_ReceiptWithAccounting_Handler,
		},
		{
			MethodName: "ReceiptWithoutAccounting",
			Handler:    _ReceiptService_ReceiptWithoutAccounting_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "receipt/receipt.proto",
}
