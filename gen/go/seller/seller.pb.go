// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        v4.25.3
// source: seller/seller.proto

package seller

import (
	core "github.com/fatalistix/trade-organization-proto/gen/go/core"
	tradingpoint "github.com/fatalistix/trade-organization-proto/gen/go/tradingpoint"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type SellerStatus int32

const (
	SellerStatus_SELLER_STATUS_WORKING     SellerStatus = 0
	SellerStatus_SELLER_STATUS_NOT_WORKING SellerStatus = 1
)

// Enum value maps for SellerStatus.
var (
	SellerStatus_name = map[int32]string{
		0: "SELLER_STATUS_WORKING",
		1: "SELLER_STATUS_NOT_WORKING",
	}
	SellerStatus_value = map[string]int32{
		"SELLER_STATUS_WORKING":     0,
		"SELLER_STATUS_NOT_WORKING": 1,
	}
)

func (x SellerStatus) Enum() *SellerStatus {
	p := new(SellerStatus)
	*p = x
	return p
}

func (x SellerStatus) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (SellerStatus) Descriptor() protoreflect.EnumDescriptor {
	return file_seller_seller_proto_enumTypes[0].Descriptor()
}

func (SellerStatus) Type() protoreflect.EnumType {
	return &file_seller_seller_proto_enumTypes[0]
}

func (x SellerStatus) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use SellerStatus.Descriptor instead.
func (SellerStatus) EnumDescriptor() ([]byte, []int) {
	return file_seller_seller_proto_rawDescGZIP(), []int{0}
}

type Seller struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id          int32        `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Status      SellerStatus `protobuf:"varint,2,opt,name=status,proto3,enum=seller.SellerStatus" json:"status,omitempty"`
	FirstName   string       `protobuf:"bytes,3,opt,name=first_name,json=firstName,proto3" json:"first_name,omitempty"`
	LastName    string       `protobuf:"bytes,4,opt,name=last_name,json=lastName,proto3" json:"last_name,omitempty"`
	MiddleName  string       `protobuf:"bytes,5,opt,name=middle_name,json=middleName,proto3" json:"middle_name,omitempty"`
	BirthDate   *core.Date   `protobuf:"bytes,6,opt,name=birth_date,json=birthDate,proto3" json:"birth_date,omitempty"`
	Salary      *core.Money  `protobuf:"bytes,7,opt,name=salary,proto3" json:"salary,omitempty"`
	PhoneNumber string       `protobuf:"bytes,8,opt,name=phone_number,json=phoneNumber,proto3" json:"phone_number,omitempty"`
	PlaceOfWork *PlaceOfWork `protobuf:"bytes,9,opt,name=place_of_work,json=placeOfWork,proto3,oneof" json:"place_of_work,omitempty"`
}

func (x *Seller) Reset() {
	*x = Seller{}
	if protoimpl.UnsafeEnabled {
		mi := &file_seller_seller_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Seller) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Seller) ProtoMessage() {}

func (x *Seller) ProtoReflect() protoreflect.Message {
	mi := &file_seller_seller_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Seller.ProtoReflect.Descriptor instead.
func (*Seller) Descriptor() ([]byte, []int) {
	return file_seller_seller_proto_rawDescGZIP(), []int{0}
}

func (x *Seller) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Seller) GetStatus() SellerStatus {
	if x != nil {
		return x.Status
	}
	return SellerStatus_SELLER_STATUS_WORKING
}

func (x *Seller) GetFirstName() string {
	if x != nil {
		return x.FirstName
	}
	return ""
}

func (x *Seller) GetLastName() string {
	if x != nil {
		return x.LastName
	}
	return ""
}

func (x *Seller) GetMiddleName() string {
	if x != nil {
		return x.MiddleName
	}
	return ""
}

func (x *Seller) GetBirthDate() *core.Date {
	if x != nil {
		return x.BirthDate
	}
	return nil
}

func (x *Seller) GetSalary() *core.Money {
	if x != nil {
		return x.Salary
	}
	return nil
}

func (x *Seller) GetPhoneNumber() string {
	if x != nil {
		return x.PhoneNumber
	}
	return ""
}

func (x *Seller) GetPlaceOfWork() *PlaceOfWork {
	if x != nil {
		return x.PlaceOfWork
	}
	return nil
}

type PlaceOfWork struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PlaceOfWorkId    int32                         `protobuf:"varint,1,opt,name=place_of_work_id,json=placeOfWorkId,proto3" json:"place_of_work_id,omitempty"`
	PlaceOfWorkType  tradingpoint.PlaceOfWorkType  `protobuf:"varint,2,opt,name=place_of_work_type,json=placeOfWorkType,proto3,enum=tradingpoint.PlaceOfWorkType" json:"place_of_work_type,omitempty"`
	TradingPointId   int32                         `protobuf:"varint,3,opt,name=trading_point_id,json=tradingPointId,proto3" json:"trading_point_id,omitempty"`
	TradingPointType tradingpoint.TradingPointType `protobuf:"varint,4,opt,name=trading_point_type,json=tradingPointType,proto3,enum=tradingpoint.TradingPointType" json:"trading_point_type,omitempty"`
}

func (x *PlaceOfWork) Reset() {
	*x = PlaceOfWork{}
	if protoimpl.UnsafeEnabled {
		mi := &file_seller_seller_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *PlaceOfWork) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*PlaceOfWork) ProtoMessage() {}

func (x *PlaceOfWork) ProtoReflect() protoreflect.Message {
	mi := &file_seller_seller_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use PlaceOfWork.ProtoReflect.Descriptor instead.
func (*PlaceOfWork) Descriptor() ([]byte, []int) {
	return file_seller_seller_proto_rawDescGZIP(), []int{1}
}

func (x *PlaceOfWork) GetPlaceOfWorkId() int32 {
	if x != nil {
		return x.PlaceOfWorkId
	}
	return 0
}

func (x *PlaceOfWork) GetPlaceOfWorkType() tradingpoint.PlaceOfWorkType {
	if x != nil {
		return x.PlaceOfWorkType
	}
	return tradingpoint.PlaceOfWorkType(0)
}

func (x *PlaceOfWork) GetTradingPointId() int32 {
	if x != nil {
		return x.TradingPointId
	}
	return 0
}

func (x *PlaceOfWork) GetTradingPointType() tradingpoint.TradingPointType {
	if x != nil {
		return x.TradingPointType
	}
	return tradingpoint.TradingPointType(0)
}

type RegisterRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	FirstName   string      `protobuf:"bytes,1,opt,name=first_name,json=firstName,proto3" json:"first_name,omitempty"`
	LastName    string      `protobuf:"bytes,2,opt,name=last_name,json=lastName,proto3" json:"last_name,omitempty"`
	MiddleName  string      `protobuf:"bytes,3,opt,name=middle_name,json=middleName,proto3" json:"middle_name,omitempty"`
	BirthDate   *core.Date  `protobuf:"bytes,4,opt,name=birth_date,json=birthDate,proto3" json:"birth_date,omitempty"`
	Salary      *core.Money `protobuf:"bytes,5,opt,name=salary,proto3" json:"salary,omitempty"`
	PhoneNumber string      `protobuf:"bytes,6,opt,name=phone_number,json=phoneNumber,proto3" json:"phone_number,omitempty"`
}

func (x *RegisterRequest) Reset() {
	*x = RegisterRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_seller_seller_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RegisterRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RegisterRequest) ProtoMessage() {}

func (x *RegisterRequest) ProtoReflect() protoreflect.Message {
	mi := &file_seller_seller_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RegisterRequest.ProtoReflect.Descriptor instead.
func (*RegisterRequest) Descriptor() ([]byte, []int) {
	return file_seller_seller_proto_rawDescGZIP(), []int{2}
}

func (x *RegisterRequest) GetFirstName() string {
	if x != nil {
		return x.FirstName
	}
	return ""
}

func (x *RegisterRequest) GetLastName() string {
	if x != nil {
		return x.LastName
	}
	return ""
}

func (x *RegisterRequest) GetMiddleName() string {
	if x != nil {
		return x.MiddleName
	}
	return ""
}

func (x *RegisterRequest) GetBirthDate() *core.Date {
	if x != nil {
		return x.BirthDate
	}
	return nil
}

func (x *RegisterRequest) GetSalary() *core.Money {
	if x != nil {
		return x.Salary
	}
	return nil
}

func (x *RegisterRequest) GetPhoneNumber() string {
	if x != nil {
		return x.PhoneNumber
	}
	return ""
}

type RegisterResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id int32 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *RegisterResponse) Reset() {
	*x = RegisterResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_seller_seller_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *RegisterResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RegisterResponse) ProtoMessage() {}

func (x *RegisterResponse) ProtoReflect() protoreflect.Message {
	mi := &file_seller_seller_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RegisterResponse.ProtoReflect.Descriptor instead.
func (*RegisterResponse) Descriptor() ([]byte, []int) {
	return file_seller_seller_proto_rawDescGZIP(), []int{3}
}

func (x *RegisterResponse) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

type ListByTradingPointRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TradingPointId   int32                         `protobuf:"varint,1,opt,name=trading_point_id,json=tradingPointId,proto3" json:"trading_point_id,omitempty"`
	TradingPointType tradingpoint.TradingPointType `protobuf:"varint,2,opt,name=trading_point_type,json=tradingPointType,proto3,enum=tradingpoint.TradingPointType" json:"trading_point_type,omitempty"`
}

func (x *ListByTradingPointRequest) Reset() {
	*x = ListByTradingPointRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_seller_seller_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListByTradingPointRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListByTradingPointRequest) ProtoMessage() {}

func (x *ListByTradingPointRequest) ProtoReflect() protoreflect.Message {
	mi := &file_seller_seller_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListByTradingPointRequest.ProtoReflect.Descriptor instead.
func (*ListByTradingPointRequest) Descriptor() ([]byte, []int) {
	return file_seller_seller_proto_rawDescGZIP(), []int{4}
}

func (x *ListByTradingPointRequest) GetTradingPointId() int32 {
	if x != nil {
		return x.TradingPointId
	}
	return 0
}

func (x *ListByTradingPointRequest) GetTradingPointType() tradingpoint.TradingPointType {
	if x != nil {
		return x.TradingPointType
	}
	return tradingpoint.TradingPointType(0)
}

type ListByTradingPointResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Sellers []*Seller `protobuf:"bytes,1,rep,name=sellers,proto3" json:"sellers,omitempty"`
}

func (x *ListByTradingPointResponse) Reset() {
	*x = ListByTradingPointResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_seller_seller_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListByTradingPointResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListByTradingPointResponse) ProtoMessage() {}

func (x *ListByTradingPointResponse) ProtoReflect() protoreflect.Message {
	mi := &file_seller_seller_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListByTradingPointResponse.ProtoReflect.Descriptor instead.
func (*ListByTradingPointResponse) Descriptor() ([]byte, []int) {
	return file_seller_seller_proto_rawDescGZIP(), []int{5}
}

func (x *ListByTradingPointResponse) GetSellers() []*Seller {
	if x != nil {
		return x.Sellers
	}
	return nil
}

var File_seller_seller_proto protoreflect.FileDescriptor

var file_seller_seller_proto_rawDesc = []byte{
	0x0a, 0x13, 0x73, 0x65, 0x6c, 0x6c, 0x65, 0x72, 0x2f, 0x73, 0x65, 0x6c, 0x6c, 0x65, 0x72, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x06, 0x73, 0x65, 0x6c, 0x6c, 0x65, 0x72, 0x1a, 0x10, 0x63,
	0x6f, 0x72, 0x65, 0x2f, 0x6d, 0x6f, 0x6e, 0x65, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a,
	0x0f, 0x63, 0x6f, 0x72, 0x65, 0x2f, 0x64, 0x61, 0x74, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x1a, 0x20, 0x74, 0x72, 0x61, 0x64, 0x69, 0x6e, 0x67, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x2f, 0x74,
	0x72, 0x61, 0x64, 0x69, 0x6e, 0x67, 0x5f, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x22, 0xe6, 0x02, 0x0a, 0x06, 0x53, 0x65, 0x6c, 0x6c, 0x65, 0x72, 0x12, 0x0e, 0x0a,
	0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x02, 0x69, 0x64, 0x12, 0x2c, 0x0a,
	0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x14, 0x2e,
	0x73, 0x65, 0x6c, 0x6c, 0x65, 0x72, 0x2e, 0x53, 0x65, 0x6c, 0x6c, 0x65, 0x72, 0x53, 0x74, 0x61,
	0x74, 0x75, 0x73, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x1d, 0x0a, 0x0a, 0x66,
	0x69, 0x72, 0x73, 0x74, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x09, 0x66, 0x69, 0x72, 0x73, 0x74, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1b, 0x0a, 0x09, 0x6c, 0x61,
	0x73, 0x74, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x6c,
	0x61, 0x73, 0x74, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1f, 0x0a, 0x0b, 0x6d, 0x69, 0x64, 0x64, 0x6c,
	0x65, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x6d, 0x69,
	0x64, 0x64, 0x6c, 0x65, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x29, 0x0a, 0x0a, 0x62, 0x69, 0x72, 0x74,
	0x68, 0x5f, 0x64, 0x61, 0x74, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0a, 0x2e, 0x63,
	0x6f, 0x72, 0x65, 0x2e, 0x44, 0x61, 0x74, 0x65, 0x52, 0x09, 0x62, 0x69, 0x72, 0x74, 0x68, 0x44,
	0x61, 0x74, 0x65, 0x12, 0x23, 0x0a, 0x06, 0x73, 0x61, 0x6c, 0x61, 0x72, 0x79, 0x18, 0x07, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x0b, 0x2e, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x4d, 0x6f, 0x6e, 0x65, 0x79,
	0x52, 0x06, 0x73, 0x61, 0x6c, 0x61, 0x72, 0x79, 0x12, 0x21, 0x0a, 0x0c, 0x70, 0x68, 0x6f, 0x6e,
	0x65, 0x5f, 0x6e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b,
	0x70, 0x68, 0x6f, 0x6e, 0x65, 0x4e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x12, 0x3c, 0x0a, 0x0d, 0x70,
	0x6c, 0x61, 0x63, 0x65, 0x5f, 0x6f, 0x66, 0x5f, 0x77, 0x6f, 0x72, 0x6b, 0x18, 0x09, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x13, 0x2e, 0x73, 0x65, 0x6c, 0x6c, 0x65, 0x72, 0x2e, 0x50, 0x6c, 0x61, 0x63,
	0x65, 0x4f, 0x66, 0x57, 0x6f, 0x72, 0x6b, 0x48, 0x00, 0x52, 0x0b, 0x70, 0x6c, 0x61, 0x63, 0x65,
	0x4f, 0x66, 0x57, 0x6f, 0x72, 0x6b, 0x88, 0x01, 0x01, 0x42, 0x10, 0x0a, 0x0e, 0x5f, 0x70, 0x6c,
	0x61, 0x63, 0x65, 0x5f, 0x6f, 0x66, 0x5f, 0x77, 0x6f, 0x72, 0x6b, 0x22, 0xfa, 0x01, 0x0a, 0x0b,
	0x50, 0x6c, 0x61, 0x63, 0x65, 0x4f, 0x66, 0x57, 0x6f, 0x72, 0x6b, 0x12, 0x27, 0x0a, 0x10, 0x70,
	0x6c, 0x61, 0x63, 0x65, 0x5f, 0x6f, 0x66, 0x5f, 0x77, 0x6f, 0x72, 0x6b, 0x5f, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0d, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x4f, 0x66, 0x57, 0x6f,
	0x72, 0x6b, 0x49, 0x64, 0x12, 0x4a, 0x0a, 0x12, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x5f, 0x6f, 0x66,
	0x5f, 0x77, 0x6f, 0x72, 0x6b, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0e,
	0x32, 0x1d, 0x2e, 0x74, 0x72, 0x61, 0x64, 0x69, 0x6e, 0x67, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x2e,
	0x50, 0x6c, 0x61, 0x63, 0x65, 0x4f, 0x66, 0x57, 0x6f, 0x72, 0x6b, 0x54, 0x79, 0x70, 0x65, 0x52,
	0x0f, 0x70, 0x6c, 0x61, 0x63, 0x65, 0x4f, 0x66, 0x57, 0x6f, 0x72, 0x6b, 0x54, 0x79, 0x70, 0x65,
	0x12, 0x28, 0x0a, 0x10, 0x74, 0x72, 0x61, 0x64, 0x69, 0x6e, 0x67, 0x5f, 0x70, 0x6f, 0x69, 0x6e,
	0x74, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0e, 0x74, 0x72, 0x61, 0x64,
	0x69, 0x6e, 0x67, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x49, 0x64, 0x12, 0x4c, 0x0a, 0x12, 0x74, 0x72,
	0x61, 0x64, 0x69, 0x6e, 0x67, 0x5f, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x5f, 0x74, 0x79, 0x70, 0x65,
	0x18, 0x04, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x1e, 0x2e, 0x74, 0x72, 0x61, 0x64, 0x69, 0x6e, 0x67,
	0x70, 0x6f, 0x69, 0x6e, 0x74, 0x2e, 0x54, 0x72, 0x61, 0x64, 0x69, 0x6e, 0x67, 0x50, 0x6f, 0x69,
	0x6e, 0x74, 0x54, 0x79, 0x70, 0x65, 0x52, 0x10, 0x74, 0x72, 0x61, 0x64, 0x69, 0x6e, 0x67, 0x50,
	0x6f, 0x69, 0x6e, 0x74, 0x54, 0x79, 0x70, 0x65, 0x22, 0xe1, 0x01, 0x0a, 0x0f, 0x52, 0x65, 0x67,
	0x69, 0x73, 0x74, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1d, 0x0a, 0x0a,
	0x66, 0x69, 0x72, 0x73, 0x74, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x09, 0x66, 0x69, 0x72, 0x73, 0x74, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1b, 0x0a, 0x09, 0x6c,
	0x61, 0x73, 0x74, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08,
	0x6c, 0x61, 0x73, 0x74, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1f, 0x0a, 0x0b, 0x6d, 0x69, 0x64, 0x64,
	0x6c, 0x65, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x6d,
	0x69, 0x64, 0x64, 0x6c, 0x65, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x29, 0x0a, 0x0a, 0x62, 0x69, 0x72,
	0x74, 0x68, 0x5f, 0x64, 0x61, 0x74, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0a, 0x2e,
	0x63, 0x6f, 0x72, 0x65, 0x2e, 0x44, 0x61, 0x74, 0x65, 0x52, 0x09, 0x62, 0x69, 0x72, 0x74, 0x68,
	0x44, 0x61, 0x74, 0x65, 0x12, 0x23, 0x0a, 0x06, 0x73, 0x61, 0x6c, 0x61, 0x72, 0x79, 0x18, 0x05,
	0x20, 0x01, 0x28, 0x0b, 0x32, 0x0b, 0x2e, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x4d, 0x6f, 0x6e, 0x65,
	0x79, 0x52, 0x06, 0x73, 0x61, 0x6c, 0x61, 0x72, 0x79, 0x12, 0x21, 0x0a, 0x0c, 0x70, 0x68, 0x6f,
	0x6e, 0x65, 0x5f, 0x6e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0b, 0x70, 0x68, 0x6f, 0x6e, 0x65, 0x4e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x22, 0x22, 0x0a, 0x10,
	0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x02, 0x69, 0x64,
	0x22, 0x93, 0x01, 0x0a, 0x19, 0x4c, 0x69, 0x73, 0x74, 0x42, 0x79, 0x54, 0x72, 0x61, 0x64, 0x69,
	0x6e, 0x67, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x28,
	0x0a, 0x10, 0x74, 0x72, 0x61, 0x64, 0x69, 0x6e, 0x67, 0x5f, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x5f,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0e, 0x74, 0x72, 0x61, 0x64, 0x69, 0x6e,
	0x67, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x49, 0x64, 0x12, 0x4c, 0x0a, 0x12, 0x74, 0x72, 0x61, 0x64,
	0x69, 0x6e, 0x67, 0x5f, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x0e, 0x32, 0x1e, 0x2e, 0x74, 0x72, 0x61, 0x64, 0x69, 0x6e, 0x67, 0x70, 0x6f,
	0x69, 0x6e, 0x74, 0x2e, 0x54, 0x72, 0x61, 0x64, 0x69, 0x6e, 0x67, 0x50, 0x6f, 0x69, 0x6e, 0x74,
	0x54, 0x79, 0x70, 0x65, 0x52, 0x10, 0x74, 0x72, 0x61, 0x64, 0x69, 0x6e, 0x67, 0x50, 0x6f, 0x69,
	0x6e, 0x74, 0x54, 0x79, 0x70, 0x65, 0x22, 0x46, 0x0a, 0x1a, 0x4c, 0x69, 0x73, 0x74, 0x42, 0x79,
	0x54, 0x72, 0x61, 0x64, 0x69, 0x6e, 0x67, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x28, 0x0a, 0x07, 0x73, 0x65, 0x6c, 0x6c, 0x65, 0x72, 0x73, 0x18,
	0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0e, 0x2e, 0x73, 0x65, 0x6c, 0x6c, 0x65, 0x72, 0x2e, 0x53,
	0x65, 0x6c, 0x6c, 0x65, 0x72, 0x52, 0x07, 0x73, 0x65, 0x6c, 0x6c, 0x65, 0x72, 0x73, 0x2a, 0x48,
	0x0a, 0x0c, 0x53, 0x65, 0x6c, 0x6c, 0x65, 0x72, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x19,
	0x0a, 0x15, 0x53, 0x45, 0x4c, 0x4c, 0x45, 0x52, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f,
	0x57, 0x4f, 0x52, 0x4b, 0x49, 0x4e, 0x47, 0x10, 0x00, 0x12, 0x1d, 0x0a, 0x19, 0x53, 0x45, 0x4c,
	0x4c, 0x45, 0x52, 0x5f, 0x53, 0x54, 0x41, 0x54, 0x55, 0x53, 0x5f, 0x4e, 0x4f, 0x54, 0x5f, 0x57,
	0x4f, 0x52, 0x4b, 0x49, 0x4e, 0x47, 0x10, 0x01, 0x32, 0xab, 0x01, 0x0a, 0x0d, 0x53, 0x65, 0x6c,
	0x6c, 0x65, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x3d, 0x0a, 0x08, 0x52, 0x65,
	0x67, 0x69, 0x73, 0x74, 0x65, 0x72, 0x12, 0x17, 0x2e, 0x73, 0x65, 0x6c, 0x6c, 0x65, 0x72, 0x2e,
	0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x18, 0x2e, 0x73, 0x65, 0x6c, 0x6c, 0x65, 0x72, 0x2e, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x65,
	0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x5b, 0x0a, 0x12, 0x4c, 0x69, 0x73,
	0x74, 0x42, 0x79, 0x54, 0x72, 0x61, 0x64, 0x69, 0x6e, 0x67, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x12,
	0x21, 0x2e, 0x73, 0x65, 0x6c, 0x6c, 0x65, 0x72, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x42, 0x79, 0x54,
	0x72, 0x61, 0x64, 0x69, 0x6e, 0x67, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x22, 0x2e, 0x73, 0x65, 0x6c, 0x6c, 0x65, 0x72, 0x2e, 0x4c, 0x69, 0x73, 0x74,
	0x42, 0x79, 0x54, 0x72, 0x61, 0x64, 0x69, 0x6e, 0x67, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x42, 0x45, 0x5a, 0x43, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62,
	0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x66, 0x61, 0x74, 0x61, 0x6c, 0x69, 0x73, 0x74, 0x69, 0x78, 0x2f,
	0x74, 0x72, 0x61, 0x64, 0x65, 0x2d, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f,
	0x73, 0x65, 0x6c, 0x6c, 0x65, 0x72, 0x3b, 0x73, 0x65, 0x6c, 0x6c, 0x65, 0x72, 0x62, 0x06, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_seller_seller_proto_rawDescOnce sync.Once
	file_seller_seller_proto_rawDescData = file_seller_seller_proto_rawDesc
)

func file_seller_seller_proto_rawDescGZIP() []byte {
	file_seller_seller_proto_rawDescOnce.Do(func() {
		file_seller_seller_proto_rawDescData = protoimpl.X.CompressGZIP(file_seller_seller_proto_rawDescData)
	})
	return file_seller_seller_proto_rawDescData
}

var file_seller_seller_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_seller_seller_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_seller_seller_proto_goTypes = []interface{}{
	(SellerStatus)(0),                  // 0: seller.SellerStatus
	(*Seller)(nil),                     // 1: seller.Seller
	(*PlaceOfWork)(nil),                // 2: seller.PlaceOfWork
	(*RegisterRequest)(nil),            // 3: seller.RegisterRequest
	(*RegisterResponse)(nil),           // 4: seller.RegisterResponse
	(*ListByTradingPointRequest)(nil),  // 5: seller.ListByTradingPointRequest
	(*ListByTradingPointResponse)(nil), // 6: seller.ListByTradingPointResponse
	(*core.Date)(nil),                  // 7: core.Date
	(*core.Money)(nil),                 // 8: core.Money
	(tradingpoint.PlaceOfWorkType)(0),  // 9: tradingpoint.PlaceOfWorkType
	(tradingpoint.TradingPointType)(0), // 10: tradingpoint.TradingPointType
}
var file_seller_seller_proto_depIdxs = []int32{
	0,  // 0: seller.Seller.status:type_name -> seller.SellerStatus
	7,  // 1: seller.Seller.birth_date:type_name -> core.Date
	8,  // 2: seller.Seller.salary:type_name -> core.Money
	2,  // 3: seller.Seller.place_of_work:type_name -> seller.PlaceOfWork
	9,  // 4: seller.PlaceOfWork.place_of_work_type:type_name -> tradingpoint.PlaceOfWorkType
	10, // 5: seller.PlaceOfWork.trading_point_type:type_name -> tradingpoint.TradingPointType
	7,  // 6: seller.RegisterRequest.birth_date:type_name -> core.Date
	8,  // 7: seller.RegisterRequest.salary:type_name -> core.Money
	10, // 8: seller.ListByTradingPointRequest.trading_point_type:type_name -> tradingpoint.TradingPointType
	1,  // 9: seller.ListByTradingPointResponse.sellers:type_name -> seller.Seller
	3,  // 10: seller.SellerService.Register:input_type -> seller.RegisterRequest
	5,  // 11: seller.SellerService.ListByTradingPoint:input_type -> seller.ListByTradingPointRequest
	4,  // 12: seller.SellerService.Register:output_type -> seller.RegisterResponse
	6,  // 13: seller.SellerService.ListByTradingPoint:output_type -> seller.ListByTradingPointResponse
	12, // [12:14] is the sub-list for method output_type
	10, // [10:12] is the sub-list for method input_type
	10, // [10:10] is the sub-list for extension type_name
	10, // [10:10] is the sub-list for extension extendee
	0,  // [0:10] is the sub-list for field type_name
}

func init() { file_seller_seller_proto_init() }
func file_seller_seller_proto_init() {
	if File_seller_seller_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_seller_seller_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Seller); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_seller_seller_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*PlaceOfWork); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_seller_seller_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RegisterRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_seller_seller_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*RegisterResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_seller_seller_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListByTradingPointRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_seller_seller_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListByTradingPointResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	file_seller_seller_proto_msgTypes[0].OneofWrappers = []interface{}{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_seller_seller_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_seller_seller_proto_goTypes,
		DependencyIndexes: file_seller_seller_proto_depIdxs,
		EnumInfos:         file_seller_seller_proto_enumTypes,
		MessageInfos:      file_seller_seller_proto_msgTypes,
	}.Build()
	File_seller_seller_proto = out.File
	file_seller_seller_proto_rawDesc = nil
	file_seller_seller_proto_goTypes = nil
	file_seller_seller_proto_depIdxs = nil
}
