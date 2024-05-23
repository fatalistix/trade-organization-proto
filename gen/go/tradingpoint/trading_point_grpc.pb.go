// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v4.25.3
// source: tradingpoint/trading_point.proto

package tradingpoint

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

// TradingPointServiceClient is the client API for TradingPointService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type TradingPointServiceClient interface {
	Register(ctx context.Context, in *RegisterRequest, opts ...grpc.CallOption) (*RegisterResponse, error)
	List(ctx context.Context, in *ListRequest, opts ...grpc.CallOption) (*ListResponse, error)
	AddSection(ctx context.Context, in *AddSectionRequest, opts ...grpc.CallOption) (*AddSectionResponse, error)
	AddHall(ctx context.Context, in *AddHallRequest, opts ...grpc.CallOption) (*AddHallResponse, error)
	DepartmentStore(ctx context.Context, in *DepartmentStoreRequest, opts ...grpc.CallOption) (*DepartmentStoreResponse, error)
	Store(ctx context.Context, in *StoreRequest, opts ...grpc.CallOption) (*StoreResponse, error)
	Kiosk(ctx context.Context, in *KioskRequest, opts ...grpc.CallOption) (*KioskResponse, error)
	Tray(ctx context.Context, in *TrayRequest, opts ...grpc.CallOption) (*TrayResponse, error)
}

type tradingPointServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewTradingPointServiceClient(cc grpc.ClientConnInterface) TradingPointServiceClient {
	return &tradingPointServiceClient{cc}
}

func (c *tradingPointServiceClient) Register(ctx context.Context, in *RegisterRequest, opts ...grpc.CallOption) (*RegisterResponse, error) {
	out := new(RegisterResponse)
	err := c.cc.Invoke(ctx, "/tradingpoint.TradingPointService/Register", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *tradingPointServiceClient) List(ctx context.Context, in *ListRequest, opts ...grpc.CallOption) (*ListResponse, error) {
	out := new(ListResponse)
	err := c.cc.Invoke(ctx, "/tradingpoint.TradingPointService/List", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *tradingPointServiceClient) AddSection(ctx context.Context, in *AddSectionRequest, opts ...grpc.CallOption) (*AddSectionResponse, error) {
	out := new(AddSectionResponse)
	err := c.cc.Invoke(ctx, "/tradingpoint.TradingPointService/AddSection", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *tradingPointServiceClient) AddHall(ctx context.Context, in *AddHallRequest, opts ...grpc.CallOption) (*AddHallResponse, error) {
	out := new(AddHallResponse)
	err := c.cc.Invoke(ctx, "/tradingpoint.TradingPointService/AddHall", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *tradingPointServiceClient) DepartmentStore(ctx context.Context, in *DepartmentStoreRequest, opts ...grpc.CallOption) (*DepartmentStoreResponse, error) {
	out := new(DepartmentStoreResponse)
	err := c.cc.Invoke(ctx, "/tradingpoint.TradingPointService/DepartmentStore", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *tradingPointServiceClient) Store(ctx context.Context, in *StoreRequest, opts ...grpc.CallOption) (*StoreResponse, error) {
	out := new(StoreResponse)
	err := c.cc.Invoke(ctx, "/tradingpoint.TradingPointService/Store", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *tradingPointServiceClient) Kiosk(ctx context.Context, in *KioskRequest, opts ...grpc.CallOption) (*KioskResponse, error) {
	out := new(KioskResponse)
	err := c.cc.Invoke(ctx, "/tradingpoint.TradingPointService/Kiosk", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *tradingPointServiceClient) Tray(ctx context.Context, in *TrayRequest, opts ...grpc.CallOption) (*TrayResponse, error) {
	out := new(TrayResponse)
	err := c.cc.Invoke(ctx, "/tradingpoint.TradingPointService/Tray", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// TradingPointServiceServer is the server API for TradingPointService service.
// All implementations must embed UnimplementedTradingPointServiceServer
// for forward compatibility
type TradingPointServiceServer interface {
	Register(context.Context, *RegisterRequest) (*RegisterResponse, error)
	List(context.Context, *ListRequest) (*ListResponse, error)
	AddSection(context.Context, *AddSectionRequest) (*AddSectionResponse, error)
	AddHall(context.Context, *AddHallRequest) (*AddHallResponse, error)
	DepartmentStore(context.Context, *DepartmentStoreRequest) (*DepartmentStoreResponse, error)
	Store(context.Context, *StoreRequest) (*StoreResponse, error)
	Kiosk(context.Context, *KioskRequest) (*KioskResponse, error)
	Tray(context.Context, *TrayRequest) (*TrayResponse, error)
	mustEmbedUnimplementedTradingPointServiceServer()
}

// UnimplementedTradingPointServiceServer must be embedded to have forward compatible implementations.
type UnimplementedTradingPointServiceServer struct {
}

func (UnimplementedTradingPointServiceServer) Register(context.Context, *RegisterRequest) (*RegisterResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Register not implemented")
}
func (UnimplementedTradingPointServiceServer) List(context.Context, *ListRequest) (*ListResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method List not implemented")
}
func (UnimplementedTradingPointServiceServer) AddSection(context.Context, *AddSectionRequest) (*AddSectionResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddSection not implemented")
}
func (UnimplementedTradingPointServiceServer) AddHall(context.Context, *AddHallRequest) (*AddHallResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddHall not implemented")
}
func (UnimplementedTradingPointServiceServer) DepartmentStore(context.Context, *DepartmentStoreRequest) (*DepartmentStoreResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DepartmentStore not implemented")
}
func (UnimplementedTradingPointServiceServer) Store(context.Context, *StoreRequest) (*StoreResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Store not implemented")
}
func (UnimplementedTradingPointServiceServer) Kiosk(context.Context, *KioskRequest) (*KioskResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Kiosk not implemented")
}
func (UnimplementedTradingPointServiceServer) Tray(context.Context, *TrayRequest) (*TrayResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Tray not implemented")
}
func (UnimplementedTradingPointServiceServer) mustEmbedUnimplementedTradingPointServiceServer() {}

// UnsafeTradingPointServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to TradingPointServiceServer will
// result in compilation errors.
type UnsafeTradingPointServiceServer interface {
	mustEmbedUnimplementedTradingPointServiceServer()
}

func RegisterTradingPointServiceServer(s grpc.ServiceRegistrar, srv TradingPointServiceServer) {
	s.RegisterService(&TradingPointService_ServiceDesc, srv)
}

func _TradingPointService_Register_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RegisterRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TradingPointServiceServer).Register(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/tradingpoint.TradingPointService/Register",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TradingPointServiceServer).Register(ctx, req.(*RegisterRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TradingPointService_List_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TradingPointServiceServer).List(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/tradingpoint.TradingPointService/List",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TradingPointServiceServer).List(ctx, req.(*ListRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TradingPointService_AddSection_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddSectionRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TradingPointServiceServer).AddSection(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/tradingpoint.TradingPointService/AddSection",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TradingPointServiceServer).AddSection(ctx, req.(*AddSectionRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TradingPointService_AddHall_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddHallRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TradingPointServiceServer).AddHall(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/tradingpoint.TradingPointService/AddHall",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TradingPointServiceServer).AddHall(ctx, req.(*AddHallRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TradingPointService_DepartmentStore_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DepartmentStoreRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TradingPointServiceServer).DepartmentStore(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/tradingpoint.TradingPointService/DepartmentStore",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TradingPointServiceServer).DepartmentStore(ctx, req.(*DepartmentStoreRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TradingPointService_Store_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(StoreRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TradingPointServiceServer).Store(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/tradingpoint.TradingPointService/Store",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TradingPointServiceServer).Store(ctx, req.(*StoreRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TradingPointService_Kiosk_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(KioskRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TradingPointServiceServer).Kiosk(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/tradingpoint.TradingPointService/Kiosk",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TradingPointServiceServer).Kiosk(ctx, req.(*KioskRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TradingPointService_Tray_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TrayRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TradingPointServiceServer).Tray(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/tradingpoint.TradingPointService/Tray",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TradingPointServiceServer).Tray(ctx, req.(*TrayRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// TradingPointService_ServiceDesc is the grpc.ServiceDesc for TradingPointService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var TradingPointService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "tradingpoint.TradingPointService",
	HandlerType: (*TradingPointServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Register",
			Handler:    _TradingPointService_Register_Handler,
		},
		{
			MethodName: "List",
			Handler:    _TradingPointService_List_Handler,
		},
		{
			MethodName: "AddSection",
			Handler:    _TradingPointService_AddSection_Handler,
		},
		{
			MethodName: "AddHall",
			Handler:    _TradingPointService_AddHall_Handler,
		},
		{
			MethodName: "DepartmentStore",
			Handler:    _TradingPointService_DepartmentStore_Handler,
		},
		{
			MethodName: "Store",
			Handler:    _TradingPointService_Store_Handler,
		},
		{
			MethodName: "Kiosk",
			Handler:    _TradingPointService_Kiosk_Handler,
		},
		{
			MethodName: "Tray",
			Handler:    _TradingPointService_Tray_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "tradingpoint/trading_point.proto",
}
