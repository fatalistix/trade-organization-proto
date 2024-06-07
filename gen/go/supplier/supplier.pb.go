// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.30.0
// 	protoc        v4.25.3
// source: supplier/supplier.proto

package supplier

import (
	core "github.com/fatalistix/trade-organization-proto/gen/go/core"
	product "github.com/fatalistix/trade-organization-proto/gen/go/product"
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

type SupplierType int32

const (
	SupplierType_SUPPLIER_TYPE_AVAILABLE     SupplierType = 0
	SupplierType_SUPPLIER_TYPE_NOT_AVAILABLE SupplierType = 1
)

// Enum value maps for SupplierType.
var (
	SupplierType_name = map[int32]string{
		0: "SUPPLIER_TYPE_AVAILABLE",
		1: "SUPPLIER_TYPE_NOT_AVAILABLE",
	}
	SupplierType_value = map[string]int32{
		"SUPPLIER_TYPE_AVAILABLE":     0,
		"SUPPLIER_TYPE_NOT_AVAILABLE": 1,
	}
)

func (x SupplierType) Enum() *SupplierType {
	p := new(SupplierType)
	*p = x
	return p
}

func (x SupplierType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (SupplierType) Descriptor() protoreflect.EnumDescriptor {
	return file_supplier_supplier_proto_enumTypes[0].Descriptor()
}

func (SupplierType) Type() protoreflect.EnumType {
	return &file_supplier_supplier_proto_enumTypes[0]
}

func (x SupplierType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use SupplierType.Descriptor instead.
func (SupplierType) EnumDescriptor() ([]byte, []int) {
	return file_supplier_supplier_proto_rawDescGZIP(), []int{0}
}

type Supplier struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id       int32              `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Name     string             `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Type     SupplierType       `protobuf:"varint,3,opt,name=type,proto3,enum=supplier.SupplierType" json:"type,omitempty"`
	Products []*ProductSupplier `protobuf:"bytes,4,rep,name=products,proto3" json:"products,omitempty"`
}

func (x *Supplier) Reset() {
	*x = Supplier{}
	if protoimpl.UnsafeEnabled {
		mi := &file_supplier_supplier_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Supplier) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Supplier) ProtoMessage() {}

func (x *Supplier) ProtoReflect() protoreflect.Message {
	mi := &file_supplier_supplier_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Supplier.ProtoReflect.Descriptor instead.
func (*Supplier) Descriptor() ([]byte, []int) {
	return file_supplier_supplier_proto_rawDescGZIP(), []int{0}
}

func (x *Supplier) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *Supplier) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Supplier) GetType() SupplierType {
	if x != nil {
		return x.Type
	}
	return SupplierType_SUPPLIER_TYPE_AVAILABLE
}

func (x *Supplier) GetProducts() []*ProductSupplier {
	if x != nil {
		return x.Products
	}
	return nil
}

type ProductSupplier struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Price   *core.Money      `protobuf:"bytes,2,opt,name=price,proto3" json:"price,omitempty"`
	Product *product.Product `protobuf:"bytes,3,opt,name=product,proto3" json:"product,omitempty"`
}

func (x *ProductSupplier) Reset() {
	*x = ProductSupplier{}
	if protoimpl.UnsafeEnabled {
		mi := &file_supplier_supplier_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ProductSupplier) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ProductSupplier) ProtoMessage() {}

func (x *ProductSupplier) ProtoReflect() protoreflect.Message {
	mi := &file_supplier_supplier_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ProductSupplier.ProtoReflect.Descriptor instead.
func (*ProductSupplier) Descriptor() ([]byte, []int) {
	return file_supplier_supplier_proto_rawDescGZIP(), []int{1}
}

func (x *ProductSupplier) GetPrice() *core.Money {
	if x != nil {
		return x.Price
	}
	return nil
}

func (x *ProductSupplier) GetProduct() *product.Product {
	if x != nil {
		return x.Product
	}
	return nil
}

type CreateRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *CreateRequest) Reset() {
	*x = CreateRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_supplier_supplier_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateRequest) ProtoMessage() {}

func (x *CreateRequest) ProtoReflect() protoreflect.Message {
	mi := &file_supplier_supplier_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateRequest.ProtoReflect.Descriptor instead.
func (*CreateRequest) Descriptor() ([]byte, []int) {
	return file_supplier_supplier_proto_rawDescGZIP(), []int{2}
}

func (x *CreateRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type CreateResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id int32 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *CreateResponse) Reset() {
	*x = CreateResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_supplier_supplier_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateResponse) ProtoMessage() {}

func (x *CreateResponse) ProtoReflect() protoreflect.Message {
	mi := &file_supplier_supplier_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateResponse.ProtoReflect.Descriptor instead.
func (*CreateResponse) Descriptor() ([]byte, []int) {
	return file_supplier_supplier_proto_rawDescGZIP(), []int{3}
}

func (x *CreateResponse) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

type ListRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *ListRequest) Reset() {
	*x = ListRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_supplier_supplier_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListRequest) ProtoMessage() {}

func (x *ListRequest) ProtoReflect() protoreflect.Message {
	mi := &file_supplier_supplier_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListRequest.ProtoReflect.Descriptor instead.
func (*ListRequest) Descriptor() ([]byte, []int) {
	return file_supplier_supplier_proto_rawDescGZIP(), []int{4}
}

type ListResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Suppliers []*Supplier `protobuf:"bytes,1,rep,name=suppliers,proto3" json:"suppliers,omitempty"`
}

func (x *ListResponse) Reset() {
	*x = ListResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_supplier_supplier_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ListResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListResponse) ProtoMessage() {}

func (x *ListResponse) ProtoReflect() protoreflect.Message {
	mi := &file_supplier_supplier_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListResponse.ProtoReflect.Descriptor instead.
func (*ListResponse) Descriptor() ([]byte, []int) {
	return file_supplier_supplier_proto_rawDescGZIP(), []int{5}
}

func (x *ListResponse) GetSuppliers() []*Supplier {
	if x != nil {
		return x.Suppliers
	}
	return nil
}

type SupplierRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id int32 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *SupplierRequest) Reset() {
	*x = SupplierRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_supplier_supplier_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SupplierRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SupplierRequest) ProtoMessage() {}

func (x *SupplierRequest) ProtoReflect() protoreflect.Message {
	mi := &file_supplier_supplier_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SupplierRequest.ProtoReflect.Descriptor instead.
func (*SupplierRequest) Descriptor() ([]byte, []int) {
	return file_supplier_supplier_proto_rawDescGZIP(), []int{6}
}

func (x *SupplierRequest) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

type SupplierResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Supplier *Supplier `protobuf:"bytes,1,opt,name=supplier,proto3" json:"supplier,omitempty"`
}

func (x *SupplierResponse) Reset() {
	*x = SupplierResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_supplier_supplier_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SupplierResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SupplierResponse) ProtoMessage() {}

func (x *SupplierResponse) ProtoReflect() protoreflect.Message {
	mi := &file_supplier_supplier_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SupplierResponse.ProtoReflect.Descriptor instead.
func (*SupplierResponse) Descriptor() ([]byte, []int) {
	return file_supplier_supplier_proto_rawDescGZIP(), []int{7}
}

func (x *SupplierResponse) GetSupplier() *Supplier {
	if x != nil {
		return x.Supplier
	}
	return nil
}

type UpdateRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id       int32              `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
	Name     string             `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Type     SupplierType       `protobuf:"varint,3,opt,name=type,proto3,enum=supplier.SupplierType" json:"type,omitempty"`
	Products []*ProductSupplier `protobuf:"bytes,4,rep,name=products,proto3" json:"products,omitempty"`
}

func (x *UpdateRequest) Reset() {
	*x = UpdateRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_supplier_supplier_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateRequest) ProtoMessage() {}

func (x *UpdateRequest) ProtoReflect() protoreflect.Message {
	mi := &file_supplier_supplier_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateRequest.ProtoReflect.Descriptor instead.
func (*UpdateRequest) Descriptor() ([]byte, []int) {
	return file_supplier_supplier_proto_rawDescGZIP(), []int{8}
}

func (x *UpdateRequest) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

func (x *UpdateRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *UpdateRequest) GetType() SupplierType {
	if x != nil {
		return x.Type
	}
	return SupplierType_SUPPLIER_TYPE_AVAILABLE
}

func (x *UpdateRequest) GetProducts() []*ProductSupplier {
	if x != nil {
		return x.Products
	}
	return nil
}

type UpdateResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id int32 `protobuf:"varint,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *UpdateResponse) Reset() {
	*x = UpdateResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_supplier_supplier_proto_msgTypes[9]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateResponse) ProtoMessage() {}

func (x *UpdateResponse) ProtoReflect() protoreflect.Message {
	mi := &file_supplier_supplier_proto_msgTypes[9]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateResponse.ProtoReflect.Descriptor instead.
func (*UpdateResponse) Descriptor() ([]byte, []int) {
	return file_supplier_supplier_proto_rawDescGZIP(), []int{9}
}

func (x *UpdateResponse) GetId() int32 {
	if x != nil {
		return x.Id
	}
	return 0
}

var File_supplier_supplier_proto protoreflect.FileDescriptor

var file_supplier_supplier_proto_rawDesc = []byte{
	0x0a, 0x17, 0x73, 0x75, 0x70, 0x70, 0x6c, 0x69, 0x65, 0x72, 0x2f, 0x73, 0x75, 0x70, 0x70, 0x6c,
	0x69, 0x65, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x73, 0x75, 0x70, 0x70, 0x6c,
	0x69, 0x65, 0x72, 0x1a, 0x10, 0x63, 0x6f, 0x72, 0x65, 0x2f, 0x6d, 0x6f, 0x6e, 0x65, 0x79, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x15, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x2f, 0x70,
	0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x91, 0x01, 0x0a,
	0x08, 0x53, 0x75, 0x70, 0x70, 0x6c, 0x69, 0x65, 0x72, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x2a, 0x0a,
	0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x16, 0x2e, 0x73, 0x75,
	0x70, 0x70, 0x6c, 0x69, 0x65, 0x72, 0x2e, 0x53, 0x75, 0x70, 0x70, 0x6c, 0x69, 0x65, 0x72, 0x54,
	0x79, 0x70, 0x65, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x35, 0x0a, 0x08, 0x70, 0x72, 0x6f,
	0x64, 0x75, 0x63, 0x74, 0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x73, 0x75,
	0x70, 0x70, 0x6c, 0x69, 0x65, 0x72, 0x2e, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x53, 0x75,
	0x70, 0x70, 0x6c, 0x69, 0x65, 0x72, 0x52, 0x08, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x73,
	0x22, 0x60, 0x0a, 0x0f, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x53, 0x75, 0x70, 0x70, 0x6c,
	0x69, 0x65, 0x72, 0x12, 0x21, 0x0a, 0x05, 0x70, 0x72, 0x69, 0x63, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x0b, 0x2e, 0x63, 0x6f, 0x72, 0x65, 0x2e, 0x4d, 0x6f, 0x6e, 0x65, 0x79, 0x52,
	0x05, 0x70, 0x72, 0x69, 0x63, 0x65, 0x12, 0x2a, 0x0a, 0x07, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63,
	0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63,
	0x74, 0x2e, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x52, 0x07, 0x70, 0x72, 0x6f, 0x64, 0x75,
	0x63, 0x74, 0x22, 0x23, 0x0a, 0x0d, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x20, 0x0a, 0x0e, 0x43, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x02, 0x69, 0x64, 0x22, 0x0d, 0x0a, 0x0b, 0x4c, 0x69, 0x73,
	0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x22, 0x40, 0x0a, 0x0c, 0x4c, 0x69, 0x73, 0x74,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x30, 0x0a, 0x09, 0x73, 0x75, 0x70, 0x70,
	0x6c, 0x69, 0x65, 0x72, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x73, 0x75,
	0x70, 0x70, 0x6c, 0x69, 0x65, 0x72, 0x2e, 0x53, 0x75, 0x70, 0x70, 0x6c, 0x69, 0x65, 0x72, 0x52,
	0x09, 0x73, 0x75, 0x70, 0x70, 0x6c, 0x69, 0x65, 0x72, 0x73, 0x22, 0x21, 0x0a, 0x0f, 0x53, 0x75,
	0x70, 0x70, 0x6c, 0x69, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a,
	0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x02, 0x69, 0x64, 0x22, 0x42, 0x0a,
	0x10, 0x53, 0x75, 0x70, 0x70, 0x6c, 0x69, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x2e, 0x0a, 0x08, 0x73, 0x75, 0x70, 0x70, 0x6c, 0x69, 0x65, 0x72, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x73, 0x75, 0x70, 0x70, 0x6c, 0x69, 0x65, 0x72, 0x2e, 0x53,
	0x75, 0x70, 0x70, 0x6c, 0x69, 0x65, 0x72, 0x52, 0x08, 0x73, 0x75, 0x70, 0x70, 0x6c, 0x69, 0x65,
	0x72, 0x22, 0x96, 0x01, 0x0a, 0x0d, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52,
	0x02, 0x69, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x2a, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x16, 0x2e, 0x73, 0x75, 0x70, 0x70, 0x6c, 0x69, 0x65, 0x72,
	0x2e, 0x53, 0x75, 0x70, 0x70, 0x6c, 0x69, 0x65, 0x72, 0x54, 0x79, 0x70, 0x65, 0x52, 0x04, 0x74,
	0x79, 0x70, 0x65, 0x12, 0x35, 0x0a, 0x08, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x73, 0x18,
	0x04, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x19, 0x2e, 0x73, 0x75, 0x70, 0x70, 0x6c, 0x69, 0x65, 0x72,
	0x2e, 0x50, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x53, 0x75, 0x70, 0x70, 0x6c, 0x69, 0x65, 0x72,
	0x52, 0x08, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x74, 0x73, 0x22, 0x20, 0x0a, 0x0e, 0x55, 0x70,
	0x64, 0x61, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x0e, 0x0a, 0x02,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x05, 0x52, 0x02, 0x69, 0x64, 0x2a, 0x4c, 0x0a, 0x0c,
	0x53, 0x75, 0x70, 0x70, 0x6c, 0x69, 0x65, 0x72, 0x54, 0x79, 0x70, 0x65, 0x12, 0x1b, 0x0a, 0x17,
	0x53, 0x55, 0x50, 0x50, 0x4c, 0x49, 0x45, 0x52, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x41, 0x56,
	0x41, 0x49, 0x4c, 0x41, 0x42, 0x4c, 0x45, 0x10, 0x00, 0x12, 0x1f, 0x0a, 0x1b, 0x53, 0x55, 0x50,
	0x50, 0x4c, 0x49, 0x45, 0x52, 0x5f, 0x54, 0x59, 0x50, 0x45, 0x5f, 0x4e, 0x4f, 0x54, 0x5f, 0x41,
	0x56, 0x41, 0x49, 0x4c, 0x41, 0x42, 0x4c, 0x45, 0x10, 0x01, 0x32, 0x85, 0x02, 0x0a, 0x0f, 0x53,
	0x75, 0x70, 0x70, 0x6c, 0x69, 0x65, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x3b,
	0x0a, 0x06, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x12, 0x17, 0x2e, 0x73, 0x75, 0x70, 0x70, 0x6c,
	0x69, 0x65, 0x72, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x18, 0x2e, 0x73, 0x75, 0x70, 0x70, 0x6c, 0x69, 0x65, 0x72, 0x2e, 0x43, 0x72, 0x65,
	0x61, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x35, 0x0a, 0x04, 0x4c,
	0x69, 0x73, 0x74, 0x12, 0x15, 0x2e, 0x73, 0x75, 0x70, 0x70, 0x6c, 0x69, 0x65, 0x72, 0x2e, 0x4c,
	0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x16, 0x2e, 0x73, 0x75, 0x70,
	0x70, 0x6c, 0x69, 0x65, 0x72, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x41, 0x0a, 0x08, 0x53, 0x75, 0x70, 0x70, 0x6c, 0x69, 0x65, 0x72, 0x12, 0x19,
	0x2e, 0x73, 0x75, 0x70, 0x70, 0x6c, 0x69, 0x65, 0x72, 0x2e, 0x53, 0x75, 0x70, 0x70, 0x6c, 0x69,
	0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1a, 0x2e, 0x73, 0x75, 0x70, 0x70,
	0x6c, 0x69, 0x65, 0x72, 0x2e, 0x53, 0x75, 0x70, 0x70, 0x6c, 0x69, 0x65, 0x72, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x3b, 0x0a, 0x06, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x12,
	0x17, 0x2e, 0x73, 0x75, 0x70, 0x70, 0x6c, 0x69, 0x65, 0x72, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74,
	0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x18, 0x2e, 0x73, 0x75, 0x70, 0x70, 0x6c,
	0x69, 0x65, 0x72, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x42, 0x49, 0x5a, 0x47, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d,
	0x2f, 0x66, 0x61, 0x74, 0x61, 0x6c, 0x69, 0x73, 0x74, 0x69, 0x78, 0x2f, 0x74, 0x72, 0x61, 0x64,
	0x65, 0x2d, 0x6f, 0x72, 0x67, 0x61, 0x6e, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x2d, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x67, 0x65, 0x6e, 0x2f, 0x67, 0x6f, 0x2f, 0x73, 0x75, 0x70, 0x70,
	0x6c, 0x69, 0x65, 0x72, 0x3b, 0x73, 0x75, 0x70, 0x70, 0x6c, 0x69, 0x65, 0x72, 0x62, 0x06, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_supplier_supplier_proto_rawDescOnce sync.Once
	file_supplier_supplier_proto_rawDescData = file_supplier_supplier_proto_rawDesc
)

func file_supplier_supplier_proto_rawDescGZIP() []byte {
	file_supplier_supplier_proto_rawDescOnce.Do(func() {
		file_supplier_supplier_proto_rawDescData = protoimpl.X.CompressGZIP(file_supplier_supplier_proto_rawDescData)
	})
	return file_supplier_supplier_proto_rawDescData
}

var file_supplier_supplier_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_supplier_supplier_proto_msgTypes = make([]protoimpl.MessageInfo, 10)
var file_supplier_supplier_proto_goTypes = []interface{}{
	(SupplierType)(0),        // 0: supplier.SupplierType
	(*Supplier)(nil),         // 1: supplier.Supplier
	(*ProductSupplier)(nil),  // 2: supplier.ProductSupplier
	(*CreateRequest)(nil),    // 3: supplier.CreateRequest
	(*CreateResponse)(nil),   // 4: supplier.CreateResponse
	(*ListRequest)(nil),      // 5: supplier.ListRequest
	(*ListResponse)(nil),     // 6: supplier.ListResponse
	(*SupplierRequest)(nil),  // 7: supplier.SupplierRequest
	(*SupplierResponse)(nil), // 8: supplier.SupplierResponse
	(*UpdateRequest)(nil),    // 9: supplier.UpdateRequest
	(*UpdateResponse)(nil),   // 10: supplier.UpdateResponse
	(*core.Money)(nil),       // 11: core.Money
	(*product.Product)(nil),  // 12: product.Product
}
var file_supplier_supplier_proto_depIdxs = []int32{
	0,  // 0: supplier.Supplier.type:type_name -> supplier.SupplierType
	2,  // 1: supplier.Supplier.products:type_name -> supplier.ProductSupplier
	11, // 2: supplier.ProductSupplier.price:type_name -> core.Money
	12, // 3: supplier.ProductSupplier.product:type_name -> product.Product
	1,  // 4: supplier.ListResponse.suppliers:type_name -> supplier.Supplier
	1,  // 5: supplier.SupplierResponse.supplier:type_name -> supplier.Supplier
	0,  // 6: supplier.UpdateRequest.type:type_name -> supplier.SupplierType
	2,  // 7: supplier.UpdateRequest.products:type_name -> supplier.ProductSupplier
	3,  // 8: supplier.SupplierService.Create:input_type -> supplier.CreateRequest
	5,  // 9: supplier.SupplierService.List:input_type -> supplier.ListRequest
	7,  // 10: supplier.SupplierService.Supplier:input_type -> supplier.SupplierRequest
	9,  // 11: supplier.SupplierService.Update:input_type -> supplier.UpdateRequest
	4,  // 12: supplier.SupplierService.Create:output_type -> supplier.CreateResponse
	6,  // 13: supplier.SupplierService.List:output_type -> supplier.ListResponse
	8,  // 14: supplier.SupplierService.Supplier:output_type -> supplier.SupplierResponse
	10, // 15: supplier.SupplierService.Update:output_type -> supplier.UpdateResponse
	12, // [12:16] is the sub-list for method output_type
	8,  // [8:12] is the sub-list for method input_type
	8,  // [8:8] is the sub-list for extension type_name
	8,  // [8:8] is the sub-list for extension extendee
	0,  // [0:8] is the sub-list for field type_name
}

func init() { file_supplier_supplier_proto_init() }
func file_supplier_supplier_proto_init() {
	if File_supplier_supplier_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_supplier_supplier_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Supplier); i {
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
		file_supplier_supplier_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ProductSupplier); i {
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
		file_supplier_supplier_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateRequest); i {
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
		file_supplier_supplier_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateResponse); i {
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
		file_supplier_supplier_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListRequest); i {
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
		file_supplier_supplier_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ListResponse); i {
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
		file_supplier_supplier_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SupplierRequest); i {
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
		file_supplier_supplier_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SupplierResponse); i {
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
		file_supplier_supplier_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateRequest); i {
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
		file_supplier_supplier_proto_msgTypes[9].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateResponse); i {
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
			RawDescriptor: file_supplier_supplier_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   10,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_supplier_supplier_proto_goTypes,
		DependencyIndexes: file_supplier_supplier_proto_depIdxs,
		EnumInfos:         file_supplier_supplier_proto_enumTypes,
		MessageInfos:      file_supplier_supplier_proto_msgTypes,
	}.Build()
	File_supplier_supplier_proto = out.File
	file_supplier_supplier_proto_rawDesc = nil
	file_supplier_supplier_proto_goTypes = nil
	file_supplier_supplier_proto_depIdxs = nil
}
