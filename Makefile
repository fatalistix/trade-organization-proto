# project setup
GO_GEN_PATH=gen/go
TS_GEN_PATH=gen/ts
PROTO_PATH=proto

# ==================================================================================== #
# HELPERS
# ==================================================================================== #

## help: print this help message
.PHONY: help
help:
	@echo 'Usage:'
	@sed -n 's/^##//p' ${MAKEFILE_LIST} | column -t -s ':' | sed -e 's/^/  /'

# ==================================================================================== #
# CLEAN
# ==================================================================================== #

## clean: remove all generated files
.PHONY: clean
clean:
	@rm -rf ${GO_GEN_PATH} ${TS_GEN_PATH}

# ==================================================================================== #
# GENERATE
# ==================================================================================== #

## generate: generate all proto files
.PHONY: generate
generate:
	@mkdir -p ${GO_GEN_PATH} ${TS_GEN_PATH}
	@protoc -I ${PROTO_PATH} ${PROTO_PATH}/**/*.proto --go_out=${GO_GEN_PATH} --go_opt=paths=source_relative --go-grpc_out=${GO_GEN_PATH} --go-grpc_opt=paths=source_relative
	@protoc -I ${PROTO_PATH} ${PROTO_PATH}/**/*.proto --js_out=import_style=commonjs,binary:${TS_GEN_PATH} --grpc-web_out=import_style=typescript,mode=grpcweb:${TS_GEN_PATH}