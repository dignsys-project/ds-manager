// package: protocols.enceladus
// file: enceladus.proto

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class PostResourceResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasResource(): boolean;
  clearResource(): void;
  getResource(): common_pb.Resource | undefined;
  setResource(value?: common_pb.Resource): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostResourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostResourceResponse): PostResourceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostResourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostResourceResponse;
  static deserializeBinaryFromReader(message: PostResourceResponse, reader: jspb.BinaryReader): PostResourceResponse;
}

export namespace PostResourceResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    resource?: common_pb.Resource.AsObject,
  }
}

export class PostPreviewResourceRequest extends jspb.Message {
  getEncodedimage(): string;
  setEncodedimage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostPreviewResourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostPreviewResourceRequest): PostPreviewResourceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostPreviewResourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostPreviewResourceRequest;
  static deserializeBinaryFromReader(message: PostPreviewResourceRequest, reader: jspb.BinaryReader): PostPreviewResourceRequest;
}

export namespace PostPreviewResourceRequest {
  export type AsObject = {
    encodedimage: string,
  }
}

export class PostPreviewResourceResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasPreviewresource(): boolean;
  clearPreviewresource(): void;
  getPreviewresource(): common_pb.PreviewResource | undefined;
  setPreviewresource(value?: common_pb.PreviewResource): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostPreviewResourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostPreviewResourceResponse): PostPreviewResourceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostPreviewResourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostPreviewResourceResponse;
  static deserializeBinaryFromReader(message: PostPreviewResourceResponse, reader: jspb.BinaryReader): PostPreviewResourceResponse;
}

export namespace PostPreviewResourceResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    previewresource?: common_pb.PreviewResource.AsObject,
  }
}

export class PostAdminRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostAdminRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostAdminRequest): PostAdminRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostAdminRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostAdminRequest;
  static deserializeBinaryFromReader(message: PostAdminRequest, reader: jspb.BinaryReader): PostAdminRequest;
}

export namespace PostAdminRequest {
  export type AsObject = {
    id: string,
    password: string,
  }
}

export class PostAdminResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostAdminResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostAdminResponse): PostAdminResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostAdminResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostAdminResponse;
  static deserializeBinaryFromReader(message: PostAdminResponse, reader: jspb.BinaryReader): PostAdminResponse;
}

export namespace PostAdminResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
  }
}

