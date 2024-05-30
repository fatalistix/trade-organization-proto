// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        v4.25.3
// source: receipt/receipt.proto

package receipt

import (
	core "github.com/fatalistix/trade-organization-proto/gen/go/core"
	product "github.com/fatalistix/trade-organization-proto/gen/go/product"
	tradingpoint "github.com/fatalistix/trade-organization-proto/gen/go/tradingpoint"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type ReceiptType int32

const (
	ReceiptType_RECEIPT_TYPE_RECEIPT_WITH_ACCOUNTING    ReceiptType = 0
	ReceiptType_RECEIPT_TYPE_RECEIPT_WITHOUT_ACCOUNTING ReceiptType = 1
)

// Enum value maps for ReceiptType.
var (
	ReceiptType_name = map[int32]string{
		0: "RECEIPT_TYPE_RECEIPT_WITH_ACCOUNTING",
		1: "RECEIPT_TYPE_RECEIPT_WITHOUT_ACCOUNTING",
	}
	ReceiptType_value = map[string]int32{
		"RECEIPT_TYPE_RECEIPT_WITH_ACCOUNTING":    0,
		"RECEIPT_TYPE_RECEIPT_WITHOUT_ACCOUNTING": 1,
	}
)

func (x ReceiptType) Enum() *ReceiptType {
	p := new(ReceiptType)
	*p = x
	return p
}

func (x ReceiptType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (ReceiptType) Descriptor() protoreflect.EnumDescriptor {
	return file_receipt_receipt_proto_enumTypes[0].Descriptor()
}

func (ReceiptType) Type() protoreflect.EnumType {
	return &file_receipt_receipt_proto_enumTypes[0]
}

func (x ReceiptType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use ReceiptType.Descriptor instead.
func (ReceiptType) EnumDescriptor() ([]byte, []int) {
	return file_receipt_receipt_proto_rawDescGZIP(), []int{0}
}

type Receipt struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id        int32                  `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Type      ReceiptType            `protobuf:"varint,2,opt,name=type,proto3,enum=receipt.ReceiptType" json:"type,omitempty"`
	CreatedAt *timestamppb.Timestamp `protobuf:"bytes,3,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"`
	SellerId  int32                  `protobuf:"varint,4,opt,name=seller_id,json=sellerId,proto3" json:"seller_id,omitempty"`
	Products  []*ReceiptProduct      `protobuf:"bytes,5,rep,name=products,proto3" json:"products,omitempty"`
}

func (x *Receipt) Reset() {
	*x = Receipt{}
	if protoimpl.UnsafeEnabled {
		mi := &file_receipt_receipt_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Receipt) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Receipt) ProtoMessage() {}

func (x *Receipt) ProtoReflect() protoreflect.Message {
	mi := &file_receipt_receipt_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Receipt.ProtoReflect.Descriptor instead.
func (*Receipt) Descriptor() ([]byte, []int) {
	return file_receipt_receipt_proto_rawDescGZIP(), []int{0}
}

func (x *Receipt) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Receipt) GetType() ReceiptType {
	if x != nil {
		return x.Type
	}
	return ReceiptType_RECEIPT_TYPE_RECEIPT_WITH_ACCOUNTING
}

func (x *Receipt) GetCreatedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.CreatedAt
	}
	return nil
}

func (x *Receipt) GetSellerId() int32 {
	if x != nil {
		return x.SellerId
	}
	return 0
}

func (x *Receipt) GetProducts() []*ReceiptProduct {
	if x != nil {
		return x.Products
	}
	return nil
}

type ReceiptProduct struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Quantity int32            `protobuf:"varint,2,opt,name=quantity,proto3" json:"quantity,omitempty"`
	Price    *core.Money      `protobuf:"bytes,3,opt,name=price,proto3" json:"price,omitempty"`
	Product  *product.Product `protobuf:"bytes,4,opt,name=product,proto3" json:"product,omitempty"`
}

func (x *ReceiptProduct) Reset() {
	*x = ReceiptProduct{}
	if protoimpl.UnsafeEnabled {
		mi := &file_receipt_receipt_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ReceiptProduct) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ReceiptProduct) ProtoMessage() {}

func (x *ReceiptProduct) ProtoReflect() protoreflect.Message {
	mi := &file_receipt_receipt_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ReceiptProduct.ProtoReflect.Descriptor instead.
func (*ReceiptProduct) Descriptor() ([]byte, []int) {
	return file_receipt_receipt_proto_rawDescGZIP(), []int{1}
}

func (x *ReceiptProduct) GetQuantity() int32 {
	if x != nil {
		return x.Quantity
	}
	return 0
}

func (x *ReceiptProduct) GetPrice() *core.Money {
	if x != nil {
		return x.Price
	}
	return nil
}

func (x *ReceiptProduct) GetProduct() *product.Product {
	if x != nil {
		return x.Product
	}
	return nil
}

type ReceiptWithAccounting struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id                                int32                                          `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	CustomerId                        int32                                          `protobuf:"varint,2,opt,name=customer_id,json=customerId,proto3" json:"customer_id,omitempty"`
	ReceiptingPointWithAccountingId   int32                                          `protobuf:"varint,3,opt,name=receipting_point_with_accounting_id,json=receiptingPointWithAccountingId,proto3" json:"receipting_point_with_accounting_id,omitempty"`
	ReceiptingPointWithAccountingType tradingpoint.ReceiptingPointWithAccountingType `protobuf:"varint,4,opt,name=receipting_point_with_accounting_type,json=receiptingPointWithAccountingType,proto3,enum=tradingpoint.ReceiptingPointWithAccountingType" json:"receipting_point_with_accounting_type,omitempty"`
}

func (x *ReceiptWithAccounting) Reset() {
	*x = ReceiptWithAccounting{}
	if protoimpl.UnsafeEnabled {
		mi := &file_receipt_receipt_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ReceiptWithAccounting) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ReceiptWithAccounting) ProtoMessage() {}

func (x *ReceiptWithAccounting) ProtoReflect() protoreflect.Message {
	mi := &file_receipt_receipt_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ReceiptWithAccounting.ProtoReflect.Descriptor instead.
func (*ReceiptWithAccounting) Descriptor() ([]byte, []int) {
	return file_receipt_receipt_proto_rawDescGZIP(), []int{2}
}

func (x *ReceiptWithAccounting) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *ReceiptWithAccounting) GetCustomerId() int32 {
	if x != nil {
		return x.CustomerId
	}
	return 0
}

func (x *ReceiptWithAccounting) GetReceiptingPointWithAccountingId() int32 {
	if x != nil {
		return x.ReceiptingPointWithAccountingId
	}
	return 0
}

func (x *ReceiptWithAccounting) GetReceiptingPointWithAccountingType() tradingpoint.ReceiptingPointWithAccountingType {
	if x != nil {
		return x.ReceiptingPointWithAccountingType
	}
	return tradingpoint.ReceiptingPointWithAccountingType(0)
}

type ReceiptWithoutAccounting struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id                                   int32                                             `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	ReceiptingPointWithoutAccountingId   int32                                             `protobuf:"varint,2,opt,name=receipting_point_without_accounting_id,json=receiptingPointWithoutAccountingId,proto3" json:"receipting_point_without_accounting_id,omitempty"`
	ReceiptingPointWithoutAccountingType tradingpoint.ReceiptingPointWithoutAccountingType `protobuf:"varint,3,opt,name=receipting_point_without_accounting_type,json=receiptingPointWithoutAccountingType,proto3,enum=tradingpoint.ReceiptingPointWithoutAccountingType" json:"receipting_point_without_accounting_type,omitempty"`
}

func (x *ReceiptWithoutAccounting) Reset() {
	*x = ReceiptWithoutAccounting{}
	if protoimpl.UnsafeEnabled {
		mi := &file_receipt_receipt_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ReceiptWithoutAccounting) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ReceiptWithoutAccounting) ProtoMessage() {}

func (x *ReceiptWithoutAccounting) ProtoReflect() protoreflect.Message {
	mi := &file_receipt_receipt_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ReceiptWithoutAccounting.ProtoReflect.Descriptor instead.
func (*ReceiptWithoutAccounting) Descriptor() ([]byte, []int) {
	return file_receipt_receipt_proto_rawDescGZIP(), []int{3}
}

func (x *ReceiptWithoutAccounting) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *ReceiptWithoutAccounting) GetReceiptingPointWithoutAccountingId() int32 {
	if x != nil {
		return x.ReceiptingPointWithoutAccountingId
	}
	return 0
}

func (x *ReceiptWithoutAccounting) GetReceiptingPointWithoutAccountingType() tradingpoint.ReceiptingPointWithoutAccountingType {
	if x != nil {
		return x.ReceiptingPointWithoutAccountingType
	}
	return tradingpoint.ReceiptingPointWithoutAccountingType(0)
}

type CreateWithAccountingRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	SellerId                          int32                                          `protobuf:"varint,1,opt,name=seller_id,json=sellerId,proto3" json:"seller_id,omitempty"`
	Products                          []*ReceiptProduct                              `protobuf:"bytes,2,rep,name=products,proto3" json:"products,omitempty"`
	CustomerId                        int32                                          `protobuf:"varint,3,opt,name=customer_id,json=customerId,proto3" json:"customer_id,omitempty"`
	ReceiptingPointWithAccountingId   int32                                          `protobuf:"varint,4,opt,name=receipting_point_with_accounting_id,json=receiptingPointWithAccountingId,proto3" json:"receipting_point_with_accounting_id,omitempty"`
	ReceiptingPointWithAccountingType tradingpoint.ReceiptingPointWithAccountingType `protobuf:"varint,5,opt,name=receipting_point_with_accounting_type,json=receiptingPointWithAccountingType,proto3,enum=tradingpoint.ReceiptingPointWithAccountingType" json:"receipting_point_with_accounting_type,omitempty"`
}

func (x *CreateWithAccountingRequest) Reset() {
	*x = CreateWithAccountingRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_receipt_receipt_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateWithAccountingRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateWithAccountingRequest) ProtoMessage() {}

func (x *CreateWithAccountingRequest) ProtoReflect() protoreflect.Message {
	mi := &file_receipt_receipt_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateWithAccountingRequest.ProtoReflect.Descriptor instead.
func (*CreateWithAccountingRequest) Descriptor() ([]byte, []int) {
	return file_receipt_receipt_proto_rawDescGZIP(), []int{4}
}

func (x *CreateWithAccountingRequest) GetSellerId() int32 {
	if x != nil {
		return x.SellerId
	}
	return 0
}

func (x *CreateWithAccountingRequest) GetProducts() []*ReceiptProduct {
	if x != nil {
		return x.Products
	}
	return nil
}

func (x *CreateWithAccountingRequest) GetCustomerId() int32 {
	if x != nil {
		return x.CustomerId
	}
	return 0
}

func (x *CreateWithAccountingRequest) GetReceiptingPointWithAccountingId() int32 {
	if x != nil {
		return x.ReceiptingPointWithAccountingId
	}
	return 0
}

func (x *CreateWithAccountingRequest) GetReceiptingPointWithAccountingType() tradingpoint.ReceiptingPointWithAccountingType {
	if x != nil {
		return x.ReceiptingPointWithAccountingType
	}
	return tradingpoint.ReceiptingPointWithAccountingType(0)
}

type CreateWithAccountingResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id int32 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *CreateWithAccountingResponse) Reset() {
	*x = CreateWithAccountingResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_receipt_receipt_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateWithAccountingResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateWithAccountingResponse) ProtoMessage() {}

func (x *CreateWithAccountingResponse) ProtoReflect() protoreflect.Message {
	mi := &file_receipt_receipt_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateWithAccountingResponse.ProtoReflect.Descriptor instead.
func (*CreateWithAccountingResponse) Descriptor() ([]byte, []int) {
	return file_receipt_receipt_proto_rawDescGZIP(), []int{5}
}

func (x *CreateWithAccountingResponse) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

type CreateWithoutAccountingRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	SellerId                             int32                                             `protobuf:"varint,1,opt,name=seller_id,json=sellerId,proto3" json:"seller_id,omitempty"`
	Products                             []*ReceiptProduct                                 `protobuf:"bytes,2,rep,name=products,proto3" json:"products,omitempty"`
	ReceiptingPointWithoutAccountingId   int32                                             `protobuf:"varint,3,opt,name=receipting_point_without_accounting_id,json=receiptingPointWithoutAccountingId,proto3" json:"receipting_point_without_accounting_id,omitempty"`
	ReceiptingPointWithoutAccountingType tradingpoint.ReceiptingPointWithoutAccountingType `protobuf:"varint,4,opt,name=receipting_point_without_accounting_type,json=receiptingPointWithoutAccountingType,proto3,enum=tradingpoint.ReceiptingPointWithoutAccountingType" json:"receipting_point_without_accounting_type,omitempty"`
}

func (x *CreateWithoutAccountingRequest) Reset() {
	*x = CreateWithoutAccountingRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_receipt_receipt_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateWithoutAccountingRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateWithoutAccountingRequest) ProtoMessage() {}

func (x *CreateWithoutAccountingRequest) ProtoReflect() protoreflect.Message {
	mi := &file_receipt_receipt_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateWithoutAccountingRequest.ProtoReflect.Descriptor instead.
func (*CreateWithoutAccountingRequest) Descriptor() ([]byte, []int) {
	return file_receipt_receipt_proto_rawDescGZIP(), []int{6}
}

func (x *CreateWithoutAccountingRequest) GetSellerId() int32 {
	if x != nil {
		return x.SellerId
	}
	return 0
}

func (x *CreateWithoutAccountingRequest) GetProducts() []*ReceiptProduct {
	if x != nil {
		return x.Products
	}
	return nil
}

func (x *CreateWithoutAccountingRequest) GetReceiptingPointWithoutAccountingId() int32 {
	if x != nil {
		return x.ReceiptingPointWithoutAccountingId
	}
	return 0
}

func (x *CreateWithoutAccountingRequest) GetReceiptingPointWithoutAccountingType() tradingpoint.ReceiptingPointWithoutAccountingType {
	if x != nil {
		return x.ReceiptingPointWithoutAccountingType
	}
	return tradingpoint.ReceiptingPointWithoutAccountingType(0)
}

type CreateWithoutAccountingResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id int32 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *CreateWithoutAccountingResponse) Reset() {
	*x = CreateWithoutAccountingResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_receipt_receipt_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateWithoutAccountingResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateWithoutAccountingResponse) ProtoMessage() {}

func (x *CreateWithoutAccountingResponse) ProtoReflect() protoreflect.Message {
	mi := &file_receipt_receipt_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateWithoutAccountingResponse.ProtoReflect.Descriptor instead.
func (*CreateWithoutAccountingResponse) Descriptor() ([]byte, []int) {
	return file_receipt_receipt_proto_rawDescGZIP(), []int{7}
}

func (x *CreateWithoutAccountingResponse) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

var File_receipt_receipt_proto protoreflect.FileDescriptor

var file_receipt_receipt_proto_rawDesc = []byte{
	0x0a, 0x15, 0x72, 0x65, 0x63, 0x65, 0x69, 0x70, 0x74, 0x2f, 0x72, 0x65, 0x63, 0x65, 0x69, 0x70,
	0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x07, 0x72, 0x65, 0x63, 0x65, 0x69, 0x70, 0x74,
	0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x1a, 0x10, 0x63, 0x6f, 0x72, 0x65, 0x2f, 0x6d, 0x6f, 0x6e, 0x65, 0x79, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x15, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x2f, 0x70, 0x72, 0x6f,
	0x64, 0x75, 0x63, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x74, 0x72, 0x61, 0x64,
	0x69, 0x6e, 0x67, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x2f, 0x74, 0x72, 0x61, 0x64, 0x69, 0x6e, 0x67,
	0x70, 0x6f, 0x69, 0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xd0, 0x01, 0x0a, 0x07,
	0x52, 0x65, 0x63, 0x65, 0x69, 0x70, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x05, 0x52, 0x02, 0x69, 0x64, 0x12, 0x28, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x14, 0x2e, 0x72, 0x65, 0x63, 0x65, 0x69, 0x70, 0x74, 0x2e,
	0x52, 0x65, 0x63, 0x65, 0x69, 0x70, 0x74, 0x54, 0x79, 0x70, 0x65, 0x52, 0x04, 0x74, 0x79, 0x70,
	0x65, 0x12, 0x39, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d,
	0x70, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x1b, 0x0a, 0x09,
	0x73, 0x65, 0x6c, 0x6c, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x05, 0x52,
	0x08, 0x73, 0x65, 0x6c, 0x6c, 0x65, 0x72, 0x49, 0x64, 0x12, 0x33, 0x0a, 0x08, 0x70, 0x72, 0x6f,
	0x64, 0x75, 0x63, 0x74, 0x73, 0x18, 0x05, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x72, 0x65,
	0x63, 0x65, 0x69, 0x70, 0x74, 0x2e, 0x52, 0x65, 0x63, 0x65, 0x69, 0x70, 0x74, 0x50, 0x72, 0x6f,
	0x64, 0x75, 0x63, 0x74, 0x52, 0x08, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x73, 0x22, 0x7b,
	0x0a, 0x0e, 0x52, 0x65, 0x63, 0x65, 0x69, 0x70, 0x74, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74,
	0x12, 0x1a, 0x0a, 0x08, 0x71, 0x75, 0x61, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x05, 0x52, 0x08, 0x71, 0x75, 0x61, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x21, 0x0a, 0x05,
	0x70, 0x72, 0x69, 0x63, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0b, 0x2e, 0x63, 0x6f,
	0x72, 0x65, 0x2e, 0x4d, 0x6f, 0x6e, 0x65, 0x79, 0x52, 0x05, 0x70, 0x72, 0x69, 0x63, 0x65, 0x12,
	0x2a, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x10, 0x2e, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x2e, 0x50, 0x72, 0x6f, 0x64, 0x75,
	0x63, 0x74, 0x52, 0x07, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x22, 0x9a, 0x02, 0x0a, 0x15,
	0x52, 0x65, 0x63, 0x65, 0x69, 0x70, 0x74, 0x57, 0x69, 0x74, 0x68, 0x41, 0x63, 0x63, 0x6f, 0x75,
	0x6e, 0x74, 0x69, 0x6e, 0x67, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x05, 0x52, 0x02, 0x69, 0x64, 0x12, 0x1f, 0x0a, 0x0b, 0x63, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65,
	0x72, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0a, 0x63, 0x75, 0x73, 0x74,
	0x6f, 0x6d, 0x65, 0x72, 0x49, 0x64, 0x12, 0x4c, 0x0a, 0x23, 0x72, 0x65, 0x63, 0x65, 0x69, 0x70,
	0x74, 0x69, 0x6e, 0x67, 0x5f, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x5f, 0x77, 0x69, 0x74, 0x68, 0x5f,
	0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x05, 0x52, 0x1f, 0x72, 0x65, 0x63, 0x65, 0x69, 0x70, 0x74, 0x69, 0x6e, 0x67, 0x50,
	0x6f, 0x69, 0x6e, 0x74, 0x57, 0x69, 0x74, 0x68, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69,
	0x6e, 0x67, 0x49, 0x64, 0x12, 0x81, 0x01, 0x0a, 0x25, 0x72, 0x65, 0x63, 0x65, 0x69, 0x70, 0x74,
	0x69, 0x6e, 0x67, 0x5f, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x5f, 0x77, 0x69, 0x74, 0x68, 0x5f, 0x61,
	0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x0e, 0x32, 0x2f, 0x2e, 0x74, 0x72, 0x61, 0x64, 0x69, 0x6e, 0x67, 0x70, 0x6f,
	0x69, 0x6e, 0x74, 0x2e, 0x52, 0x65, 0x63, 0x65, 0x69, 0x70, 0x74, 0x69, 0x6e, 0x67, 0x50, 0x6f,
	0x69, 0x6e, 0x74, 0x57, 0x69, 0x74, 0x68, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e,
	0x67, 0x54, 0x79, 0x70, 0x65, 0x52, 0x21, 0x72, 0x65, 0x63, 0x65, 0x69, 0x70, 0x74, 0x69, 0x6e,
	0x67, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x57, 0x69, 0x74, 0x68, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e,
	0x74, 0x69, 0x6e, 0x67, 0x54, 0x79, 0x70, 0x65, 0x22, 0x8b, 0x02, 0x0a, 0x18, 0x52, 0x65, 0x63,
	0x65, 0x69, 0x70, 0x74, 0x57, 0x69, 0x74, 0x68, 0x6f, 0x75, 0x74, 0x41, 0x63, 0x63, 0x6f, 0x75,
	0x6e, 0x74, 0x69, 0x6e, 0x67, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x05, 0x52, 0x02, 0x69, 0x64, 0x12, 0x52, 0x0a, 0x26, 0x72, 0x65, 0x63, 0x65, 0x69, 0x70, 0x74,
	0x69, 0x6e, 0x67, 0x5f, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x5f, 0x77, 0x69, 0x74, 0x68, 0x6f, 0x75,
	0x74, 0x5f, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x69, 0x64, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x22, 0x72, 0x65, 0x63, 0x65, 0x69, 0x70, 0x74, 0x69, 0x6e,
	0x67, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x57, 0x69, 0x74, 0x68, 0x6f, 0x75, 0x74, 0x41, 0x63, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x49, 0x64, 0x12, 0x8a, 0x01, 0x0a, 0x28, 0x72, 0x65,
	0x63, 0x65, 0x69, 0x70, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x5f, 0x77,
	0x69, 0x74, 0x68, 0x6f, 0x75, 0x74, 0x5f, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e,
	0x67, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x32, 0x2e, 0x74,
	0x72, 0x61, 0x64, 0x69, 0x6e, 0x67, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x2e, 0x52, 0x65, 0x63, 0x65,
	0x69, 0x70, 0x74, 0x69, 0x6e, 0x67, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x57, 0x69, 0x74, 0x68, 0x6f,
	0x75, 0x74, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x54, 0x79, 0x70, 0x65,
	0x52, 0x24, 0x72, 0x65, 0x63, 0x65, 0x69, 0x70, 0x74, 0x69, 0x6e, 0x67, 0x50, 0x6f, 0x69, 0x6e,
	0x74, 0x57, 0x69, 0x74, 0x68, 0x6f, 0x75, 0x74, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69,
	0x6e, 0x67, 0x54, 0x79, 0x70, 0x65, 0x22, 0xe2, 0x02, 0x0a, 0x1b, 0x43, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x57, 0x69, 0x74, 0x68, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1b, 0x0a, 0x09, 0x73, 0x65, 0x6c, 0x6c, 0x65, 0x72,
	0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x08, 0x73, 0x65, 0x6c, 0x6c, 0x65,
	0x72, 0x49, 0x64, 0x12, 0x33, 0x0a, 0x08, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x73, 0x18,
	0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x72, 0x65, 0x63, 0x65, 0x69, 0x70, 0x74, 0x2e,
	0x52, 0x65, 0x63, 0x65, 0x69, 0x70, 0x74, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x52, 0x08,
	0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x73, 0x12, 0x1f, 0x0a, 0x0b, 0x63, 0x75, 0x73, 0x74,
	0x6f, 0x6d, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0a, 0x63,
	0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x49, 0x64, 0x12, 0x4c, 0x0a, 0x23, 0x72, 0x65, 0x63,
	0x65, 0x69, 0x70, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x5f, 0x77, 0x69,
	0x74, 0x68, 0x5f, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x69, 0x64,
	0x18, 0x04, 0x20, 0x01, 0x28, 0x05, 0x52, 0x1f, 0x72, 0x65, 0x63, 0x65, 0x69, 0x70, 0x74, 0x69,
	0x6e, 0x67, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x57, 0x69, 0x74, 0x68, 0x41, 0x63, 0x63, 0x6f, 0x75,
	0x6e, 0x74, 0x69, 0x6e, 0x67, 0x49, 0x64, 0x12, 0x81, 0x01, 0x0a, 0x25, 0x72, 0x65, 0x63, 0x65,
	0x69, 0x70, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x5f, 0x77, 0x69, 0x74,
	0x68, 0x5f, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x74, 0x79, 0x70,
	0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x2f, 0x2e, 0x74, 0x72, 0x61, 0x64, 0x69, 0x6e,
	0x67, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x2e, 0x52, 0x65, 0x63, 0x65, 0x69, 0x70, 0x74, 0x69, 0x6e,
	0x67, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x57, 0x69, 0x74, 0x68, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e,
	0x74, 0x69, 0x6e, 0x67, 0x54, 0x79, 0x70, 0x65, 0x52, 0x21, 0x72, 0x65, 0x63, 0x65, 0x69, 0x70,
	0x74, 0x69, 0x6e, 0x67, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x57, 0x69, 0x74, 0x68, 0x41, 0x63, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x54, 0x79, 0x70, 0x65, 0x22, 0x2e, 0x0a, 0x1c, 0x43,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x57, 0x69, 0x74, 0x68, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74,
	0x69, 0x6e, 0x67, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x02, 0x69, 0x64, 0x22, 0xd3, 0x02, 0x0a, 0x1e,
	0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x57, 0x69, 0x74, 0x68, 0x6f, 0x75, 0x74, 0x41, 0x63, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1b,
	0x0a, 0x09, 0x73, 0x65, 0x6c, 0x6c, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x05, 0x52, 0x08, 0x73, 0x65, 0x6c, 0x6c, 0x65, 0x72, 0x49, 0x64, 0x12, 0x33, 0x0a, 0x08, 0x70,
	0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x73, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x17, 0x2e,
	0x72, 0x65, 0x63, 0x65, 0x69, 0x70, 0x74, 0x2e, 0x52, 0x65, 0x63, 0x65, 0x69, 0x70, 0x74, 0x50,
	0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x52, 0x08, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x73,
	0x12, 0x52, 0x0a, 0x26, 0x72, 0x65, 0x63, 0x65, 0x69, 0x70, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x70,
	0x6f, 0x69, 0x6e, 0x74, 0x5f, 0x77, 0x69, 0x74, 0x68, 0x6f, 0x75, 0x74, 0x5f, 0x61, 0x63, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x05,
	0x52, 0x22, 0x72, 0x65, 0x63, 0x65, 0x69, 0x70, 0x74, 0x69, 0x6e, 0x67, 0x50, 0x6f, 0x69, 0x6e,
	0x74, 0x57, 0x69, 0x74, 0x68, 0x6f, 0x75, 0x74, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69,
	0x6e, 0x67, 0x49, 0x64, 0x12, 0x8a, 0x01, 0x0a, 0x28, 0x72, 0x65, 0x63, 0x65, 0x69, 0x70, 0x74,
	0x69, 0x6e, 0x67, 0x5f, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x5f, 0x77, 0x69, 0x74, 0x68, 0x6f, 0x75,
	0x74, 0x5f, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x5f, 0x74, 0x79, 0x70,
	0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x32, 0x2e, 0x74, 0x72, 0x61, 0x64, 0x69, 0x6e,
	0x67, 0x70, 0x6f, 0x69, 0x6e, 0x74, 0x2e, 0x52, 0x65, 0x63, 0x65, 0x69, 0x70, 0x74, 0x69, 0x6e,
	0x67, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x57, 0x69, 0x74, 0x68, 0x6f, 0x75, 0x74, 0x41, 0x63, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x54, 0x79, 0x70, 0x65, 0x52, 0x24, 0x72, 0x65, 0x63,
	0x65, 0x69, 0x70, 0x74, 0x69, 0x6e, 0x67, 0x50, 0x6f, 0x69, 0x6e, 0x74, 0x57, 0x69, 0x74, 0x68,
	0x6f, 0x75, 0x74, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x54, 0x79, 0x70,
	0x65, 0x22, 0x31, 0x0a, 0x1f, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x57, 0x69, 0x74, 0x68, 0x6f,
	0x75, 0x74, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05,
	0x52, 0x02, 0x69, 0x64, 0x2a, 0x64, 0x0a, 0x0b, 0x52, 0x65, 0x63, 0x65, 0x69, 0x70, 0x74, 0x54,
	0x79, 0x70, 0x65, 0x12, 0x28, 0x0a, 0x24, 0x52, 0x45, 0x43, 0x45, 0x49, 0x50, 0x54, 0x5f, 0x54,
	0x59, 0x50, 0x45, 0x5f, 0x52, 0x45, 0x43, 0x45, 0x49, 0x50, 0x54, 0x5f, 0x57, 0x49, 0x54, 0x48,
	0x5f, 0x41, 0x43, 0x43, 0x4f, 0x55, 0x4e, 0x54, 0x49, 0x4e, 0x47, 0x10, 0x00, 0x12, 0x2b, 0x0a,
	0x27, 0x52, 0x45, 0x43, 0x45, 0x49, 0x50, 0x54, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x52, 0x45,
	0x43, 0x45, 0x49, 0x50, 0x54, 0x5f, 0x57, 0x49, 0x54, 0x48, 0x4f, 0x55, 0x54, 0x5f, 0x41, 0x43,
	0x43, 0x4f, 0x55, 0x4e, 0x54, 0x49, 0x4e, 0x47, 0x10, 0x01, 0x32, 0xe3, 0x01, 0x0a, 0x0e, 0x52,
	0x65, 0x63, 0x65, 0x69, 0x70, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x63, 0x0a,
	0x14, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x57, 0x69, 0x74, 0x68, 0x41, 0x63, 0x63, 0x6f, 0x75,
	0x6e, 0x74, 0x69, 0x6e, 0x67, 0x12, 0x24, 0x2e, 0x72, 0x65, 0x63, 0x65, 0x69, 0x70, 0x74, 0x2e,
	0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x57, 0x69, 0x74, 0x68, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e,
	0x74, 0x69, 0x6e, 0x67, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x25, 0x2e, 0x72, 0x65,
	0x63, 0x65, 0x69, 0x70, 0x74, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x57, 0x69, 0x74, 0x68,
	0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x6c, 0x0a, 0x17, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x57, 0x69, 0x74, 0x68,
	0x6f, 0x75, 0x74, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x12, 0x27, 0x2e,
	0x72, 0x65, 0x63, 0x65, 0x69, 0x70, 0x74, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x57, 0x69,
	0x74, 0x68, 0x6f, 0x75, 0x74, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x28, 0x2e, 0x72, 0x65, 0x63, 0x65, 0x69, 0x70, 0x74,
	0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x57, 0x69, 0x74, 0x68, 0x6f, 0x75, 0x74, 0x41, 0x63,
	0x63, 0x6f, 0x75, 0x6e, 0x74, 0x69, 0x6e, 0x67, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x42, 0x47, 0x5a, 0x45, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x66,
	0x61, 0x74, 0x61, 0x6c, 0x69, 0x73, 0x74, 0x69, 0x78, 0x2f, 0x74, 0x72, 0x61, 0x64, 0x65, 0x2d,
	0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2d, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x72, 0x65, 0x63, 0x65, 0x69, 0x70,
	0x74, 0x3b, 0x72, 0x65, 0x63, 0x65, 0x69, 0x70, 0x74, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_receipt_receipt_proto_rawDescOnce sync.Once
	file_receipt_receipt_proto_rawDescData = file_receipt_receipt_proto_rawDesc
)

func file_receipt_receipt_proto_rawDescGZIP() []byte {
	file_receipt_receipt_proto_rawDescOnce.Do(func() {
		file_receipt_receipt_proto_rawDescData = protoimpl.X.CompressGZIP(file_receipt_receipt_proto_rawDescData)
	})
	return file_receipt_receipt_proto_rawDescData
}

var file_receipt_receipt_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_receipt_receipt_proto_msgTypes = make([]protoimpl.MessageInfo, 8)
var file_receipt_receipt_proto_goTypes = []interface{}{
	(ReceiptType)(0),                                       // 0: receipt.ReceiptType
	(*Receipt)(nil),                                        // 1: receipt.Receipt
	(*ReceiptProduct)(nil),                                 // 2: receipt.ReceiptProduct
	(*ReceiptWithAccounting)(nil),                          // 3: receipt.ReceiptWithAccounting
	(*ReceiptWithoutAccounting)(nil),                       // 4: receipt.ReceiptWithoutAccounting
	(*CreateWithAccountingRequest)(nil),                    // 5: receipt.CreateWithAccountingRequest
	(*CreateWithAccountingResponse)(nil),                   // 6: receipt.CreateWithAccountingResponse
	(*CreateWithoutAccountingRequest)(nil),                 // 7: receipt.CreateWithoutAccountingRequest
	(*CreateWithoutAccountingResponse)(nil),                // 8: receipt.CreateWithoutAccountingResponse
	(*timestamppb.Timestamp)(nil),                          // 9: google.protobuf.Timestamp
	(*core.Money)(nil),                                     // 10: core.Money
	(*product.Product)(nil),                                // 11: product.Product
	(tradingpoint.ReceiptingPointWithAccountingType)(0),    // 12: tradingpoint.ReceiptingPointWithAccountingType
	(tradingpoint.ReceiptingPointWithoutAccountingType)(0), // 13: tradingpoint.ReceiptingPointWithoutAccountingType
}
var file_receipt_receipt_proto_depIdxs = []int32{
	0,  // 0: receipt.Receipt.type:type_name -> receipt.ReceiptType
	9,  // 1: receipt.Receipt.created_at:type_name -> google.protobuf.Timestamp
	2,  // 2: receipt.Receipt.products:type_name -> receipt.ReceiptProduct
	10, // 3: receipt.ReceiptProduct.price:type_name -> core.Money
	11, // 4: receipt.ReceiptProduct.product:type_name -> product.Product
	12, // 5: receipt.ReceiptWithAccounting.receipting_point_with_accounting_type:type_name -> tradingpoint.ReceiptingPointWithAccountingType
	13, // 6: receipt.ReceiptWithoutAccounting.receipting_point_without_accounting_type:type_name -> tradingpoint.ReceiptingPointWithoutAccountingType
	2,  // 7: receipt.CreateWithAccountingRequest.products:type_name -> receipt.ReceiptProduct
	12, // 8: receipt.CreateWithAccountingRequest.receipting_point_with_accounting_type:type_name -> tradingpoint.ReceiptingPointWithAccountingType
	2,  // 9: receipt.CreateWithoutAccountingRequest.products:type_name -> receipt.ReceiptProduct
	13, // 10: receipt.CreateWithoutAccountingRequest.receipting_point_without_accounting_type:type_name -> tradingpoint.ReceiptingPointWithoutAccountingType
	5,  // 11: receipt.ReceiptService.CreateWithAccounting:input_type -> receipt.CreateWithAccountingRequest
	7,  // 12: receipt.ReceiptService.CreateWithoutAccounting:input_type -> receipt.CreateWithoutAccountingRequest
	6,  // 13: receipt.ReceiptService.CreateWithAccounting:output_type -> receipt.CreateWithAccountingResponse
	8,  // 14: receipt.ReceiptService.CreateWithoutAccounting:output_type -> receipt.CreateWithoutAccountingResponse
	13, // [13:15] is the sub-list for method output_type
	11, // [11:13] is the sub-list for method input_type
	11, // [11:11] is the sub-list for extension type_name
	11, // [11:11] is the sub-list for extension extendee
	0,  // [0:11] is the sub-list for field type_name
}

func init() { file_receipt_receipt_proto_init() }
func file_receipt_receipt_proto_init() {
	if File_receipt_receipt_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_receipt_receipt_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Receipt); i {
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
		file_receipt_receipt_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ReceiptProduct); i {
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
		file_receipt_receipt_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ReceiptWithAccounting); i {
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
		file_receipt_receipt_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ReceiptWithoutAccounting); i {
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
		file_receipt_receipt_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateWithAccountingRequest); i {
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
		file_receipt_receipt_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateWithAccountingResponse); i {
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
		file_receipt_receipt_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateWithoutAccountingRequest); i {
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
		file_receipt_receipt_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateWithoutAccountingResponse); i {
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
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_receipt_receipt_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   8,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_receipt_receipt_proto_goTypes,
		DependencyIndexes: file_receipt_receipt_proto_depIdxs,
		EnumInfos:         file_receipt_receipt_proto_enumTypes,
		MessageInfos:      file_receipt_receipt_proto_msgTypes,
	}.Build()
	File_receipt_receipt_proto = out.File
	file_receipt_receipt_proto_rawDesc = nil
	file_receipt_receipt_proto_goTypes = nil
	file_receipt_receipt_proto_depIdxs = nil
}
