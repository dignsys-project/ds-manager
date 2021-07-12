// package: protocols.prometheus
// file: prometheus.proto

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class GetVersionRequiredResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): common_pb.MoonVersion | undefined;
  setVersion(value?: common_pb.MoonVersion): void;

  getHaveadmin(): boolean;
  setHaveadmin(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVersionRequiredResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVersionRequiredResponse): GetVersionRequiredResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVersionRequiredResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVersionRequiredResponse;
  static deserializeBinaryFromReader(message: GetVersionRequiredResponse, reader: jspb.BinaryReader): GetVersionRequiredResponse;
}

export namespace GetVersionRequiredResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    version?: common_pb.MoonVersion.AsObject,
    haveadmin: boolean,
  }
}

export class GetMemberResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  clearMemberbasesList(): void;
  getMemberbasesList(): Array<common_pb.MemberBase>;
  setMemberbasesList(value: Array<common_pb.MemberBase>): void;
  addMemberbases(value?: common_pb.MemberBase, index?: number): common_pb.MemberBase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMemberResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMemberResponse): GetMemberResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMemberResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMemberResponse;
  static deserializeBinaryFromReader(message: GetMemberResponse, reader: jspb.BinaryReader): GetMemberResponse;
}

export namespace GetMemberResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    memberbasesList: Array<common_pb.MemberBase.AsObject>,
  }
}

export class GetMemberByIdResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasMember(): boolean;
  clearMember(): void;
  getMember(): common_pb.Member | undefined;
  setMember(value?: common_pb.Member): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMemberByIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMemberByIdResponse): GetMemberByIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMemberByIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMemberByIdResponse;
  static deserializeBinaryFromReader(message: GetMemberByIdResponse, reader: jspb.BinaryReader): GetMemberByIdResponse;
}

export namespace GetMemberByIdResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    member?: common_pb.Member.AsObject,
  }
}

export class PutMemberResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasMember(): boolean;
  clearMember(): void;
  getMember(): common_pb.Member | undefined;
  setMember(value?: common_pb.Member): void;

  getEnceladusaddress(): string;
  setEnceladusaddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutMemberResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PutMemberResponse): PutMemberResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutMemberResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutMemberResponse;
  static deserializeBinaryFromReader(message: PutMemberResponse, reader: jspb.BinaryReader): PutMemberResponse;
}

export namespace PutMemberResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    member?: common_pb.Member.AsObject,
    enceladusaddress: string,
  }
}

export class DeleteMemberResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMemberResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMemberResponse): DeleteMemberResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteMemberResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMemberResponse;
  static deserializeBinaryFromReader(message: DeleteMemberResponse, reader: jspb.BinaryReader): DeleteMemberResponse;
}

export namespace DeleteMemberResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
  }
}

export class PutMemberKindResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasMemberbase(): boolean;
  clearMemberbase(): void;
  getMemberbase(): common_pb.MemberBase | undefined;
  setMemberbase(value?: common_pb.MemberBase): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutMemberKindResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PutMemberKindResponse): PutMemberKindResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutMemberKindResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutMemberKindResponse;
  static deserializeBinaryFromReader(message: PutMemberKindResponse, reader: jspb.BinaryReader): PutMemberKindResponse;
}

export namespace PutMemberKindResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    memberbase?: common_pb.MemberBase.AsObject,
  }
}

export class PostMemberPermissionRequest extends jspb.Message {
  getPermission(): common_pb.MEMBER_PERMISSION_KINDMap[keyof common_pb.MEMBER_PERMISSION_KINDMap];
  setPermission(value: common_pb.MEMBER_PERMISSION_KINDMap[keyof common_pb.MEMBER_PERMISSION_KINDMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostMemberPermissionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostMemberPermissionRequest): PostMemberPermissionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostMemberPermissionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostMemberPermissionRequest;
  static deserializeBinaryFromReader(message: PostMemberPermissionRequest, reader: jspb.BinaryReader): PostMemberPermissionRequest;
}

export namespace PostMemberPermissionRequest {
  export type AsObject = {
    permission: common_pb.MEMBER_PERMISSION_KINDMap[keyof common_pb.MEMBER_PERMISSION_KINDMap],
  }
}

export class PostMemberPermissionResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasMember(): boolean;
  clearMember(): void;
  getMember(): common_pb.Member | undefined;
  setMember(value?: common_pb.Member): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostMemberPermissionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostMemberPermissionResponse): PostMemberPermissionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostMemberPermissionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostMemberPermissionResponse;
  static deserializeBinaryFromReader(message: PostMemberPermissionResponse, reader: jspb.BinaryReader): PostMemberPermissionResponse;
}

export namespace PostMemberPermissionResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    member?: common_pb.Member.AsObject,
  }
}

export class PutMemberPermissionRequest extends jspb.Message {
  clearPermissionsList(): void;
  getPermissionsList(): Array<common_pb.MEMBER_PERMISSION_KINDMap[keyof common_pb.MEMBER_PERMISSION_KINDMap]>;
  setPermissionsList(value: Array<common_pb.MEMBER_PERMISSION_KINDMap[keyof common_pb.MEMBER_PERMISSION_KINDMap]>): void;
  addPermissions(value: common_pb.MEMBER_PERMISSION_KINDMap[keyof common_pb.MEMBER_PERMISSION_KINDMap], index?: number): common_pb.MEMBER_PERMISSION_KINDMap[keyof common_pb.MEMBER_PERMISSION_KINDMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutMemberPermissionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutMemberPermissionRequest): PutMemberPermissionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutMemberPermissionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutMemberPermissionRequest;
  static deserializeBinaryFromReader(message: PutMemberPermissionRequest, reader: jspb.BinaryReader): PutMemberPermissionRequest;
}

export namespace PutMemberPermissionRequest {
  export type AsObject = {
    permissionsList: Array<common_pb.MEMBER_PERMISSION_KINDMap[keyof common_pb.MEMBER_PERMISSION_KINDMap]>,
  }
}

export class PutMemberPermissionResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasMember(): boolean;
  clearMember(): void;
  getMember(): common_pb.Member | undefined;
  setMember(value?: common_pb.Member): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutMemberPermissionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PutMemberPermissionResponse): PutMemberPermissionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutMemberPermissionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutMemberPermissionResponse;
  static deserializeBinaryFromReader(message: PutMemberPermissionResponse, reader: jspb.BinaryReader): PutMemberPermissionResponse;
}

export namespace PutMemberPermissionResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    member?: common_pb.Member.AsObject,
  }
}

export class DeleteMemberPermissionRequest extends jspb.Message {
  getMemberid(): number;
  setMemberid(value: number): void;

  getMemberpermissionid(): number;
  setMemberpermissionid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMemberPermissionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMemberPermissionRequest): DeleteMemberPermissionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteMemberPermissionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMemberPermissionRequest;
  static deserializeBinaryFromReader(message: DeleteMemberPermissionRequest, reader: jspb.BinaryReader): DeleteMemberPermissionRequest;
}

export namespace DeleteMemberPermissionRequest {
  export type AsObject = {
    memberid: number,
    memberpermissionid: number,
  }
}

export class DeleteMemberPermissionResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasMember(): boolean;
  clearMember(): void;
  getMember(): common_pb.Member | undefined;
  setMember(value?: common_pb.Member): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMemberPermissionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMemberPermissionResponse): DeleteMemberPermissionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteMemberPermissionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMemberPermissionResponse;
  static deserializeBinaryFromReader(message: DeleteMemberPermissionResponse, reader: jspb.BinaryReader): DeleteMemberPermissionResponse;
}

export namespace DeleteMemberPermissionResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    member?: common_pb.Member.AsObject,
  }
}

export class GetAccountResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  getKind(): common_pb.MEMBER_KINDMap[keyof common_pb.MEMBER_KINDMap];
  setKind(value: common_pb.MEMBER_KINDMap[keyof common_pb.MEMBER_KINDMap]): void;

  clearPermissionsList(): void;
  getPermissionsList(): Array<common_pb.MEMBER_PERMISSION_KINDMap[keyof common_pb.MEMBER_PERMISSION_KINDMap]>;
  setPermissionsList(value: Array<common_pb.MEMBER_PERMISSION_KINDMap[keyof common_pb.MEMBER_PERMISSION_KINDMap]>): void;
  addPermissions(value: common_pb.MEMBER_PERMISSION_KINDMap[keyof common_pb.MEMBER_PERMISSION_KINDMap], index?: number): common_pb.MEMBER_PERMISSION_KINDMap[keyof common_pb.MEMBER_PERMISSION_KINDMap];

  clearDepartmentidsList(): void;
  getDepartmentidsList(): Array<number>;
  setDepartmentidsList(value: Array<number>): void;
  addDepartmentids(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountResponse): GetAccountResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountResponse;
  static deserializeBinaryFromReader(message: GetAccountResponse, reader: jspb.BinaryReader): GetAccountResponse;
}

export namespace GetAccountResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    kind: common_pb.MEMBER_KINDMap[keyof common_pb.MEMBER_KINDMap],
    permissionsList: Array<common_pb.MEMBER_PERMISSION_KINDMap[keyof common_pb.MEMBER_PERMISSION_KINDMap]>,
    departmentidsList: Array<number>,
  }
}

export class PostAccountRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getMemberkind(): common_pb.MEMBER_KINDMap[keyof common_pb.MEMBER_KINDMap];
  setMemberkind(value: common_pb.MEMBER_KINDMap[keyof common_pb.MEMBER_KINDMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostAccountRequest): PostAccountRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostAccountRequest;
  static deserializeBinaryFromReader(message: PostAccountRequest, reader: jspb.BinaryReader): PostAccountRequest;
}

export namespace PostAccountRequest {
  export type AsObject = {
    email: string,
    password: string,
    memberkind: common_pb.MEMBER_KINDMap[keyof common_pb.MEMBER_KINDMap],
  }
}

export class PostAccountResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostAccountResponse): PostAccountResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostAccountResponse;
  static deserializeBinaryFromReader(message: PostAccountResponse, reader: jspb.BinaryReader): PostAccountResponse;
}

export namespace PostAccountResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
  }
}

export class PutAccountRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutAccountRequest): PutAccountRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutAccountRequest;
  static deserializeBinaryFromReader(message: PutAccountRequest, reader: jspb.BinaryReader): PutAccountRequest;
}

export namespace PutAccountRequest {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class PutAccountResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  getToken(): string;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PutAccountResponse): PutAccountResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutAccountResponse;
  static deserializeBinaryFromReader(message: PutAccountResponse, reader: jspb.BinaryReader): PutAccountResponse;
}

export namespace PutAccountResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    token: string,
  }
}

export class GetDepartmentByIdResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasDepartment(): boolean;
  clearDepartment(): void;
  getDepartment(): common_pb.Department | undefined;
  setDepartment(value?: common_pb.Department): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDepartmentByIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDepartmentByIdResponse): GetDepartmentByIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDepartmentByIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDepartmentByIdResponse;
  static deserializeBinaryFromReader(message: GetDepartmentByIdResponse, reader: jspb.BinaryReader): GetDepartmentByIdResponse;
}

export namespace GetDepartmentByIdResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    department?: common_pb.Department.AsObject,
  }
}

export class PutDepartmentRequest extends jspb.Message {
  hasDepartment(): boolean;
  clearDepartment(): void;
  getDepartment(): common_pb.Department | undefined;
  setDepartment(value?: common_pb.Department): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutDepartmentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutDepartmentRequest): PutDepartmentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutDepartmentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutDepartmentRequest;
  static deserializeBinaryFromReader(message: PutDepartmentRequest, reader: jspb.BinaryReader): PutDepartmentRequest;
}

export namespace PutDepartmentRequest {
  export type AsObject = {
    department?: common_pb.Department.AsObject,
  }
}

export class PutDepartmentResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasDepartment(): boolean;
  clearDepartment(): void;
  getDepartment(): common_pb.Department | undefined;
  setDepartment(value?: common_pb.Department): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutDepartmentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PutDepartmentResponse): PutDepartmentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutDepartmentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutDepartmentResponse;
  static deserializeBinaryFromReader(message: PutDepartmentResponse, reader: jspb.BinaryReader): PutDepartmentResponse;
}

export namespace PutDepartmentResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    department?: common_pb.Department.AsObject,
  }
}

export class GetDepartmentNodeResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  clearNodesList(): void;
  getNodesList(): Array<common_pb.DepartmentNode>;
  setNodesList(value: Array<common_pb.DepartmentNode>): void;
  addNodes(value?: common_pb.DepartmentNode, index?: number): common_pb.DepartmentNode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDepartmentNodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDepartmentNodeResponse): GetDepartmentNodeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDepartmentNodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDepartmentNodeResponse;
  static deserializeBinaryFromReader(message: GetDepartmentNodeResponse, reader: jspb.BinaryReader): GetDepartmentNodeResponse;
}

export namespace GetDepartmentNodeResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    nodesList: Array<common_pb.DepartmentNode.AsObject>,
  }
}

export class PostDepartmentNodeRequest extends jspb.Message {
  getParentdepartmentnodeid(): number;
  setParentdepartmentnodeid(value: number): void;

  getOrder(): number;
  setOrder(value: number): void;

  getDepartmentname(): string;
  setDepartmentname(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostDepartmentNodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostDepartmentNodeRequest): PostDepartmentNodeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostDepartmentNodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostDepartmentNodeRequest;
  static deserializeBinaryFromReader(message: PostDepartmentNodeRequest, reader: jspb.BinaryReader): PostDepartmentNodeRequest;
}

export namespace PostDepartmentNodeRequest {
  export type AsObject = {
    parentdepartmentnodeid: number,
    order: number,
    departmentname: string,
  }
}

export class PostDepartmentNodeResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasNode(): boolean;
  clearNode(): void;
  getNode(): common_pb.DepartmentNode | undefined;
  setNode(value?: common_pb.DepartmentNode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostDepartmentNodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostDepartmentNodeResponse): PostDepartmentNodeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostDepartmentNodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostDepartmentNodeResponse;
  static deserializeBinaryFromReader(message: PostDepartmentNodeResponse, reader: jspb.BinaryReader): PostDepartmentNodeResponse;
}

export namespace PostDepartmentNodeResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    node?: common_pb.DepartmentNode.AsObject,
  }
}

export class PutDepartmentNodeRequest extends jspb.Message {
  getParentdepartmentnodeid(): number;
  setParentdepartmentnodeid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutDepartmentNodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutDepartmentNodeRequest): PutDepartmentNodeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutDepartmentNodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutDepartmentNodeRequest;
  static deserializeBinaryFromReader(message: PutDepartmentNodeRequest, reader: jspb.BinaryReader): PutDepartmentNodeRequest;
}

export namespace PutDepartmentNodeRequest {
  export type AsObject = {
    parentdepartmentnodeid: number,
  }
}

export class PutDepartmentNodeResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasNode(): boolean;
  clearNode(): void;
  getNode(): common_pb.DepartmentNode | undefined;
  setNode(value?: common_pb.DepartmentNode): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutDepartmentNodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PutDepartmentNodeResponse): PutDepartmentNodeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutDepartmentNodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutDepartmentNodeResponse;
  static deserializeBinaryFromReader(message: PutDepartmentNodeResponse, reader: jspb.BinaryReader): PutDepartmentNodeResponse;
}

export namespace PutDepartmentNodeResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    node?: common_pb.DepartmentNode.AsObject,
  }
}

export class DeleteDepartmentNodeResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDepartmentNodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDepartmentNodeResponse): DeleteDepartmentNodeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDepartmentNodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDepartmentNodeResponse;
  static deserializeBinaryFromReader(message: DeleteDepartmentNodeResponse, reader: jspb.BinaryReader): DeleteDepartmentNodeResponse;
}

export namespace DeleteDepartmentNodeResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
  }
}

export class GetMemberRecordResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  clearMemberrecordsList(): void;
  getMemberrecordsList(): Array<common_pb.MemberRecord>;
  setMemberrecordsList(value: Array<common_pb.MemberRecord>): void;
  addMemberrecords(value?: common_pb.MemberRecord, index?: number): common_pb.MemberRecord;

  getItemscount(): number;
  setItemscount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMemberRecordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMemberRecordResponse): GetMemberRecordResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMemberRecordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMemberRecordResponse;
  static deserializeBinaryFromReader(message: GetMemberRecordResponse, reader: jspb.BinaryReader): GetMemberRecordResponse;
}

export namespace GetMemberRecordResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    memberrecordsList: Array<common_pb.MemberRecord.AsObject>,
    itemscount: number,
  }
}

export class GetMemberRecordByMemberIdResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  clearMemberrecordsList(): void;
  getMemberrecordsList(): Array<common_pb.MemberRecord>;
  setMemberrecordsList(value: Array<common_pb.MemberRecord>): void;
  addMemberrecords(value?: common_pb.MemberRecord, index?: number): common_pb.MemberRecord;

  getItemscount(): number;
  setItemscount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMemberRecordByMemberIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMemberRecordByMemberIdResponse): GetMemberRecordByMemberIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMemberRecordByMemberIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMemberRecordByMemberIdResponse;
  static deserializeBinaryFromReader(message: GetMemberRecordByMemberIdResponse, reader: jspb.BinaryReader): GetMemberRecordByMemberIdResponse;
}

export namespace GetMemberRecordByMemberIdResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    memberrecordsList: Array<common_pb.MemberRecord.AsObject>,
    itemscount: number,
  }
}

export class GetSceneResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  clearScenebasesList(): void;
  getScenebasesList(): Array<common_pb.SceneBase>;
  setScenebasesList(value: Array<common_pb.SceneBase>): void;
  addScenebases(value?: common_pb.SceneBase, index?: number): common_pb.SceneBase;

  getItemscount(): number;
  setItemscount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSceneResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSceneResponse): GetSceneResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSceneResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSceneResponse;
  static deserializeBinaryFromReader(message: GetSceneResponse, reader: jspb.BinaryReader): GetSceneResponse;
}

export namespace GetSceneResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    scenebasesList: Array<common_pb.SceneBase.AsObject>,
    itemscount: number,
  }
}

export class GetSceneByIdResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasScene(): boolean;
  clearScene(): void;
  getScene(): common_pb.Scene | undefined;
  setScene(value?: common_pb.Scene): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSceneByIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSceneByIdResponse): GetSceneByIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSceneByIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSceneByIdResponse;
  static deserializeBinaryFromReader(message: GetSceneByIdResponse, reader: jspb.BinaryReader): GetSceneByIdResponse;
}

export namespace GetSceneByIdResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    scene?: common_pb.Scene.AsObject,
  }
}

export class GetSceneByIdBlueprintResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasScene(): boolean;
  clearScene(): void;
  getScene(): common_pb.Scene | undefined;
  setScene(value?: common_pb.Scene): void;

  hasBlueprint(): boolean;
  clearBlueprint(): void;
  getBlueprint(): common_pb.SceneBlueprint | undefined;
  setBlueprint(value?: common_pb.SceneBlueprint): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSceneByIdBlueprintResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSceneByIdBlueprintResponse): GetSceneByIdBlueprintResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSceneByIdBlueprintResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSceneByIdBlueprintResponse;
  static deserializeBinaryFromReader(message: GetSceneByIdBlueprintResponse, reader: jspb.BinaryReader): GetSceneByIdBlueprintResponse;
}

export namespace GetSceneByIdBlueprintResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    scene?: common_pb.Scene.AsObject,
    blueprint?: common_pb.SceneBlueprint.AsObject,
  }
}

export class PostSceneRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasSceneblueprint(): boolean;
  clearSceneblueprint(): void;
  getSceneblueprint(): common_pb.SceneBlueprint | undefined;
  setSceneblueprint(value?: common_pb.SceneBlueprint): void;

  hasPreviewresource(): boolean;
  clearPreviewresource(): void;
  getPreviewresource(): common_pb.PreviewResource | undefined;
  setPreviewresource(value?: common_pb.PreviewResource): void;

  getIstemporary(): boolean;
  setIstemporary(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostSceneRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostSceneRequest): PostSceneRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostSceneRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostSceneRequest;
  static deserializeBinaryFromReader(message: PostSceneRequest, reader: jspb.BinaryReader): PostSceneRequest;
}

export namespace PostSceneRequest {
  export type AsObject = {
    name: string,
    sceneblueprint?: common_pb.SceneBlueprint.AsObject,
    previewresource?: common_pb.PreviewResource.AsObject,
    istemporary: boolean,
  }
}

export class PostSceneResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasScene(): boolean;
  clearScene(): void;
  getScene(): common_pb.Scene | undefined;
  setScene(value?: common_pb.Scene): void;

  hasOverwritescene(): boolean;
  clearOverwritescene(): void;
  getOverwritescene(): common_pb.SceneBase | undefined;
  setOverwritescene(value?: common_pb.SceneBase): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostSceneResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostSceneResponse): PostSceneResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostSceneResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostSceneResponse;
  static deserializeBinaryFromReader(message: PostSceneResponse, reader: jspb.BinaryReader): PostSceneResponse;
}

export namespace PostSceneResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    scene?: common_pb.Scene.AsObject,
    overwritescene?: common_pb.SceneBase.AsObject,
  }
}

export class PutSceneRequest extends jspb.Message {
  getSceneid(): number;
  setSceneid(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasSceneblueprint(): boolean;
  clearSceneblueprint(): void;
  getSceneblueprint(): common_pb.SceneBlueprint | undefined;
  setSceneblueprint(value?: common_pb.SceneBlueprint): void;

  hasPreviewresource(): boolean;
  clearPreviewresource(): void;
  getPreviewresource(): common_pb.PreviewResource | undefined;
  setPreviewresource(value?: common_pb.PreviewResource): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutSceneRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutSceneRequest): PutSceneRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutSceneRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutSceneRequest;
  static deserializeBinaryFromReader(message: PutSceneRequest, reader: jspb.BinaryReader): PutSceneRequest;
}

export namespace PutSceneRequest {
  export type AsObject = {
    sceneid: number,
    name: string,
    sceneblueprint?: common_pb.SceneBlueprint.AsObject,
    previewresource?: common_pb.PreviewResource.AsObject,
  }
}

export class PutSceneResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasScene(): boolean;
  clearScene(): void;
  getScene(): common_pb.Scene | undefined;
  setScene(value?: common_pb.Scene): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutSceneResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PutSceneResponse): PutSceneResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutSceneResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutSceneResponse;
  static deserializeBinaryFromReader(message: PutSceneResponse, reader: jspb.BinaryReader): PutSceneResponse;
}

export namespace PutSceneResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    scene?: common_pb.Scene.AsObject,
  }
}

export class DeleteSceneResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSceneResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSceneResponse): DeleteSceneResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteSceneResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSceneResponse;
  static deserializeBinaryFromReader(message: DeleteSceneResponse, reader: jspb.BinaryReader): DeleteSceneResponse;
}

export namespace DeleteSceneResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
  }
}

export class GetDepartmentMemberResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasDepartment(): boolean;
  clearDepartment(): void;
  getDepartment(): common_pb.Department | undefined;
  setDepartment(value?: common_pb.Department): void;

  clearMemberbasesList(): void;
  getMemberbasesList(): Array<common_pb.MemberBase>;
  setMemberbasesList(value: Array<common_pb.MemberBase>): void;
  addMemberbases(value?: common_pb.MemberBase, index?: number): common_pb.MemberBase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDepartmentMemberResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDepartmentMemberResponse): GetDepartmentMemberResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDepartmentMemberResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDepartmentMemberResponse;
  static deserializeBinaryFromReader(message: GetDepartmentMemberResponse, reader: jspb.BinaryReader): GetDepartmentMemberResponse;
}

export namespace GetDepartmentMemberResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    department?: common_pb.Department.AsObject,
    memberbasesList: Array<common_pb.MemberBase.AsObject>,
  }
}

export class GetDepartmentConnectorLowersResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  clearConnectordepartmentbasesList(): void;
  getConnectordepartmentbasesList(): Array<common_pb.ConnectorDepartmentBase>;
  setConnectordepartmentbasesList(value: Array<common_pb.ConnectorDepartmentBase>): void;
  addConnectordepartmentbases(value?: common_pb.ConnectorDepartmentBase, index?: number): common_pb.ConnectorDepartmentBase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDepartmentConnectorLowersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDepartmentConnectorLowersResponse): GetDepartmentConnectorLowersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDepartmentConnectorLowersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDepartmentConnectorLowersResponse;
  static deserializeBinaryFromReader(message: GetDepartmentConnectorLowersResponse, reader: jspb.BinaryReader): GetDepartmentConnectorLowersResponse;
}

export namespace GetDepartmentConnectorLowersResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    connectordepartmentbasesList: Array<common_pb.ConnectorDepartmentBase.AsObject>,
  }
}

export class PostDepartmentMemberRequest extends jspb.Message {
  getDepartmentid(): number;
  setDepartmentid(value: number): void;

  getMemberid(): number;
  setMemberid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostDepartmentMemberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostDepartmentMemberRequest): PostDepartmentMemberRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostDepartmentMemberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostDepartmentMemberRequest;
  static deserializeBinaryFromReader(message: PostDepartmentMemberRequest, reader: jspb.BinaryReader): PostDepartmentMemberRequest;
}

export namespace PostDepartmentMemberRequest {
  export type AsObject = {
    departmentid: number,
    memberid: number,
  }
}

export class PostDepartmentMemberResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasDepartment(): boolean;
  clearDepartment(): void;
  getDepartment(): common_pb.Department | undefined;
  setDepartment(value?: common_pb.Department): void;

  clearMemberbasesList(): void;
  getMemberbasesList(): Array<common_pb.MemberBase>;
  setMemberbasesList(value: Array<common_pb.MemberBase>): void;
  addMemberbases(value?: common_pb.MemberBase, index?: number): common_pb.MemberBase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostDepartmentMemberResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostDepartmentMemberResponse): PostDepartmentMemberResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostDepartmentMemberResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostDepartmentMemberResponse;
  static deserializeBinaryFromReader(message: PostDepartmentMemberResponse, reader: jspb.BinaryReader): PostDepartmentMemberResponse;
}

export namespace PostDepartmentMemberResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    department?: common_pb.Department.AsObject,
    memberbasesList: Array<common_pb.MemberBase.AsObject>,
  }
}

export class DeleteDepartmentMemberRequest extends jspb.Message {
  getDeparmentid(): number;
  setDeparmentid(value: number): void;

  getMemberid(): number;
  setMemberid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDepartmentMemberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDepartmentMemberRequest): DeleteDepartmentMemberRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDepartmentMemberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDepartmentMemberRequest;
  static deserializeBinaryFromReader(message: DeleteDepartmentMemberRequest, reader: jspb.BinaryReader): DeleteDepartmentMemberRequest;
}

export namespace DeleteDepartmentMemberRequest {
  export type AsObject = {
    deparmentid: number,
    memberid: number,
  }
}

export class DeleteDepartmentMemberResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasDepartment(): boolean;
  clearDepartment(): void;
  getDepartment(): common_pb.Department | undefined;
  setDepartment(value?: common_pb.Department): void;

  clearMemberbasesList(): void;
  getMemberbasesList(): Array<common_pb.MemberBase>;
  setMemberbasesList(value: Array<common_pb.MemberBase>): void;
  addMemberbases(value?: common_pb.MemberBase, index?: number): common_pb.MemberBase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDepartmentMemberResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDepartmentMemberResponse): DeleteDepartmentMemberResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDepartmentMemberResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDepartmentMemberResponse;
  static deserializeBinaryFromReader(message: DeleteDepartmentMemberResponse, reader: jspb.BinaryReader): DeleteDepartmentMemberResponse;
}

export namespace DeleteDepartmentMemberResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    department?: common_pb.Department.AsObject,
    memberbasesList: Array<common_pb.MemberBase.AsObject>,
  }
}

export class GetDepartmentConnectorsResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasDepartment(): boolean;
  clearDepartment(): void;
  getDepartment(): common_pb.Department | undefined;
  setDepartment(value?: common_pb.Department): void;

  clearConnectorbasesList(): void;
  getConnectorbasesList(): Array<common_pb.ConnectorBase>;
  setConnectorbasesList(value: Array<common_pb.ConnectorBase>): void;
  addConnectorbases(value?: common_pb.ConnectorBase, index?: number): common_pb.ConnectorBase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDepartmentConnectorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDepartmentConnectorsResponse): GetDepartmentConnectorsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDepartmentConnectorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDepartmentConnectorsResponse;
  static deserializeBinaryFromReader(message: GetDepartmentConnectorsResponse, reader: jspb.BinaryReader): GetDepartmentConnectorsResponse;
}

export namespace GetDepartmentConnectorsResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    department?: common_pb.Department.AsObject,
    connectorbasesList: Array<common_pb.ConnectorBase.AsObject>,
  }
}

export class PostDepartmentConnectorRequest extends jspb.Message {
  getDepartmentid(): number;
  setDepartmentid(value: number): void;

  getConnectorid(): number;
  setConnectorid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostDepartmentConnectorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostDepartmentConnectorRequest): PostDepartmentConnectorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostDepartmentConnectorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostDepartmentConnectorRequest;
  static deserializeBinaryFromReader(message: PostDepartmentConnectorRequest, reader: jspb.BinaryReader): PostDepartmentConnectorRequest;
}

export namespace PostDepartmentConnectorRequest {
  export type AsObject = {
    departmentid: number,
    connectorid: number,
  }
}

export class PostDepartmentConnectorResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasDepartment(): boolean;
  clearDepartment(): void;
  getDepartment(): common_pb.Department | undefined;
  setDepartment(value?: common_pb.Department): void;

  clearConnectorbasesList(): void;
  getConnectorbasesList(): Array<common_pb.ConnectorBase>;
  setConnectorbasesList(value: Array<common_pb.ConnectorBase>): void;
  addConnectorbases(value?: common_pb.ConnectorBase, index?: number): common_pb.ConnectorBase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostDepartmentConnectorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostDepartmentConnectorResponse): PostDepartmentConnectorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostDepartmentConnectorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostDepartmentConnectorResponse;
  static deserializeBinaryFromReader(message: PostDepartmentConnectorResponse, reader: jspb.BinaryReader): PostDepartmentConnectorResponse;
}

export namespace PostDepartmentConnectorResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    department?: common_pb.Department.AsObject,
    connectorbasesList: Array<common_pb.ConnectorBase.AsObject>,
  }
}

export class DeleteDepartmentConnectorResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasDepartment(): boolean;
  clearDepartment(): void;
  getDepartment(): common_pb.Department | undefined;
  setDepartment(value?: common_pb.Department): void;

  clearConnectorbasesList(): void;
  getConnectorbasesList(): Array<common_pb.ConnectorBase>;
  setConnectorbasesList(value: Array<common_pb.ConnectorBase>): void;
  addConnectorbases(value?: common_pb.ConnectorBase, index?: number): common_pb.ConnectorBase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDepartmentConnectorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDepartmentConnectorResponse): DeleteDepartmentConnectorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDepartmentConnectorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDepartmentConnectorResponse;
  static deserializeBinaryFromReader(message: DeleteDepartmentConnectorResponse, reader: jspb.BinaryReader): DeleteDepartmentConnectorResponse;
}

export namespace DeleteDepartmentConnectorResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    department?: common_pb.Department.AsObject,
    connectorbasesList: Array<common_pb.ConnectorBase.AsObject>,
  }
}

export class GetConnectorResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasConnector(): boolean;
  clearConnector(): void;
  getConnector(): common_pb.Connector | undefined;
  setConnector(value?: common_pb.Connector): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConnectorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetConnectorResponse): GetConnectorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConnectorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConnectorResponse;
  static deserializeBinaryFromReader(message: GetConnectorResponse, reader: jspb.BinaryReader): GetConnectorResponse;
}

export namespace GetConnectorResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    connector?: common_pb.Connector.AsObject,
  }
}

export class GetConnectorsResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  clearConnectorbasesList(): void;
  getConnectorbasesList(): Array<common_pb.ConnectorBase>;
  setConnectorbasesList(value: Array<common_pb.ConnectorBase>): void;
  addConnectorbases(value?: common_pb.ConnectorBase, index?: number): common_pb.ConnectorBase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConnectorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetConnectorsResponse): GetConnectorsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetConnectorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConnectorsResponse;
  static deserializeBinaryFromReader(message: GetConnectorsResponse, reader: jspb.BinaryReader): GetConnectorsResponse;
}

export namespace GetConnectorsResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    connectorbasesList: Array<common_pb.ConnectorBase.AsObject>,
  }
}

export class PostConnectorByIdResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasConnector(): boolean;
  clearConnector(): void;
  getConnector(): common_pb.Connector | undefined;
  setConnector(value?: common_pb.Connector): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostConnectorByIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostConnectorByIdResponse): PostConnectorByIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostConnectorByIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostConnectorByIdResponse;
  static deserializeBinaryFromReader(message: PostConnectorByIdResponse, reader: jspb.BinaryReader): PostConnectorByIdResponse;
}

export namespace PostConnectorByIdResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    connector?: common_pb.Connector.AsObject,
  }
}

export class PostConnectorRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getDeviceid(): string;
  setDeviceid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostConnectorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostConnectorRequest): PostConnectorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostConnectorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostConnectorRequest;
  static deserializeBinaryFromReader(message: PostConnectorRequest, reader: jspb.BinaryReader): PostConnectorRequest;
}

export namespace PostConnectorRequest {
  export type AsObject = {
    name: string,
    deviceid: string,
  }
}

export class PostConnectorResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  getKind(): PostConnectorResponse.POST_KINDMap[keyof PostConnectorResponse.POST_KINDMap];
  setKind(value: PostConnectorResponse.POST_KINDMap[keyof PostConnectorResponse.POST_KINDMap]): void;

  hasConnector(): boolean;
  clearConnector(): void;
  getConnector(): common_pb.Connector | undefined;
  setConnector(value?: common_pb.Connector): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostConnectorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostConnectorResponse): PostConnectorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostConnectorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostConnectorResponse;
  static deserializeBinaryFromReader(message: PostConnectorResponse, reader: jspb.BinaryReader): PostConnectorResponse;
}

export namespace PostConnectorResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    kind: PostConnectorResponse.POST_KINDMap[keyof PostConnectorResponse.POST_KINDMap],
    connector?: common_pb.Connector.AsObject,
  }

  export interface POST_KINDMap {
    POST_KIND_DEFAULT: 0;
    POST_KIND_CREATED: 1;
    POST_KIND_DUPLICATED_NAME: 2;
    POST_KIND_DUPLICATED_DEVICE: 3;
  }

  export const POST_KIND: POST_KINDMap;
}

export class PutConnectorNameRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutConnectorNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutConnectorNameRequest): PutConnectorNameRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutConnectorNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutConnectorNameRequest;
  static deserializeBinaryFromReader(message: PutConnectorNameRequest, reader: jspb.BinaryReader): PutConnectorNameRequest;
}

export namespace PutConnectorNameRequest {
  export type AsObject = {
    name: string,
  }
}

export class PutConnectorNameResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasConnector(): boolean;
  clearConnector(): void;
  getConnector(): common_pb.Connector | undefined;
  setConnector(value?: common_pb.Connector): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutConnectorNameResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PutConnectorNameResponse): PutConnectorNameResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutConnectorNameResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutConnectorNameResponse;
  static deserializeBinaryFromReader(message: PutConnectorNameResponse, reader: jspb.BinaryReader): PutConnectorNameResponse;
}

export namespace PutConnectorNameResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    connector?: common_pb.Connector.AsObject,
  }
}

export class PutConnectorRequest extends jspb.Message {
  getKind(): common_pb.CONNECTOR_REGISTER_KINDMap[keyof common_pb.CONNECTOR_REGISTER_KINDMap];
  setKind(value: common_pb.CONNECTOR_REGISTER_KINDMap[keyof common_pb.CONNECTOR_REGISTER_KINDMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutConnectorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutConnectorRequest): PutConnectorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutConnectorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutConnectorRequest;
  static deserializeBinaryFromReader(message: PutConnectorRequest, reader: jspb.BinaryReader): PutConnectorRequest;
}

export namespace PutConnectorRequest {
  export type AsObject = {
    kind: common_pb.CONNECTOR_REGISTER_KINDMap[keyof common_pb.CONNECTOR_REGISTER_KINDMap],
  }
}

export class PutConnectorResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasConnector(): boolean;
  clearConnector(): void;
  getConnector(): common_pb.Connector | undefined;
  setConnector(value?: common_pb.Connector): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutConnectorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PutConnectorResponse): PutConnectorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutConnectorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutConnectorResponse;
  static deserializeBinaryFromReader(message: PutConnectorResponse, reader: jspb.BinaryReader): PutConnectorResponse;
}

export namespace PutConnectorResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    connector?: common_pb.Connector.AsObject,
  }
}

export class DeleteConnectorResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteConnectorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteConnectorResponse): DeleteConnectorResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteConnectorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteConnectorResponse;
  static deserializeBinaryFromReader(message: DeleteConnectorResponse, reader: jspb.BinaryReader): DeleteConnectorResponse;
}

export namespace DeleteConnectorResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
  }
}

export class PutConnectorSceneResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasScene(): boolean;
  clearScene(): void;
  getScene(): common_pb.Scene | undefined;
  setScene(value?: common_pb.Scene): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutConnectorSceneResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PutConnectorSceneResponse): PutConnectorSceneResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutConnectorSceneResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutConnectorSceneResponse;
  static deserializeBinaryFromReader(message: PutConnectorSceneResponse, reader: jspb.BinaryReader): PutConnectorSceneResponse;
}

export namespace PutConnectorSceneResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    scene?: common_pb.Scene.AsObject,
  }
}

export class DeleteConnectorSceneResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteConnectorSceneResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteConnectorSceneResponse): DeleteConnectorSceneResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteConnectorSceneResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteConnectorSceneResponse;
  static deserializeBinaryFromReader(message: DeleteConnectorSceneResponse, reader: jspb.BinaryReader): DeleteConnectorSceneResponse;
}

export namespace DeleteConnectorSceneResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
  }
}

export class PutConnectorSceneEmergencyResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasScene(): boolean;
  clearScene(): void;
  getScene(): common_pb.Scene | undefined;
  setScene(value?: common_pb.Scene): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutConnectorSceneEmergencyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PutConnectorSceneEmergencyResponse): PutConnectorSceneEmergencyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutConnectorSceneEmergencyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutConnectorSceneEmergencyResponse;
  static deserializeBinaryFromReader(message: PutConnectorSceneEmergencyResponse, reader: jspb.BinaryReader): PutConnectorSceneEmergencyResponse;
}

export namespace PutConnectorSceneEmergencyResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    scene?: common_pb.Scene.AsObject,
  }
}

export class DeleteConnectorSceneEmergencyResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteConnectorSceneEmergencyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteConnectorSceneEmergencyResponse): DeleteConnectorSceneEmergencyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteConnectorSceneEmergencyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteConnectorSceneEmergencyResponse;
  static deserializeBinaryFromReader(message: DeleteConnectorSceneEmergencyResponse, reader: jspb.BinaryReader): DeleteConnectorSceneEmergencyResponse;
}

export namespace DeleteConnectorSceneEmergencyResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
  }
}

export class PutConnectorEmergencyRequest extends jspb.Message {
  getConnectorid(): number;
  setConnectorid(value: number): void;

  getIsemergency(): boolean;
  setIsemergency(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutConnectorEmergencyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutConnectorEmergencyRequest): PutConnectorEmergencyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutConnectorEmergencyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutConnectorEmergencyRequest;
  static deserializeBinaryFromReader(message: PutConnectorEmergencyRequest, reader: jspb.BinaryReader): PutConnectorEmergencyRequest;
}

export namespace PutConnectorEmergencyRequest {
  export type AsObject = {
    connectorid: number,
    isemergency: boolean,
  }
}

export class PutConnectorEmergencyResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutConnectorEmergencyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PutConnectorEmergencyResponse): PutConnectorEmergencyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutConnectorEmergencyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutConnectorEmergencyResponse;
  static deserializeBinaryFromReader(message: PutConnectorEmergencyResponse, reader: jspb.BinaryReader): PutConnectorEmergencyResponse;
}

export namespace PutConnectorEmergencyResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
  }
}

export class PutConnectorEmergencySceneRequest extends jspb.Message {
  getSceneid(): number;
  setSceneid(value: number): void;

  getIsemergency(): boolean;
  setIsemergency(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutConnectorEmergencySceneRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutConnectorEmergencySceneRequest): PutConnectorEmergencySceneRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutConnectorEmergencySceneRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutConnectorEmergencySceneRequest;
  static deserializeBinaryFromReader(message: PutConnectorEmergencySceneRequest, reader: jspb.BinaryReader): PutConnectorEmergencySceneRequest;
}

export namespace PutConnectorEmergencySceneRequest {
  export type AsObject = {
    sceneid: number,
    isemergency: boolean,
  }
}

export class PutConnectorEmergencySceneResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasConnectorbase(): boolean;
  clearConnectorbase(): void;
  getConnectorbase(): common_pb.ConnectorBase | undefined;
  setConnectorbase(value?: common_pb.ConnectorBase): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutConnectorEmergencySceneResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PutConnectorEmergencySceneResponse): PutConnectorEmergencySceneResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutConnectorEmergencySceneResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutConnectorEmergencySceneResponse;
  static deserializeBinaryFromReader(message: PutConnectorEmergencySceneResponse, reader: jspb.BinaryReader): PutConnectorEmergencySceneResponse;
}

export namespace PutConnectorEmergencySceneResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    connectorbase?: common_pb.ConnectorBase.AsObject,
  }
}

export class GetScheduleResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  clearSchedulesList(): void;
  getSchedulesList(): Array<common_pb.Schedule>;
  setSchedulesList(value: Array<common_pb.Schedule>): void;
  addSchedules(value?: common_pb.Schedule, index?: number): common_pb.Schedule;

  hasPaginator(): boolean;
  clearPaginator(): void;
  getPaginator(): common_pb.Paginator | undefined;
  setPaginator(value?: common_pb.Paginator): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScheduleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetScheduleResponse): GetScheduleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetScheduleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScheduleResponse;
  static deserializeBinaryFromReader(message: GetScheduleResponse, reader: jspb.BinaryReader): GetScheduleResponse;
}

export namespace GetScheduleResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    schedulesList: Array<common_pb.Schedule.AsObject>,
    paginator?: common_pb.Paginator.AsObject,
  }
}

export class GetScheduleByIdResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasSchedule(): boolean;
  clearSchedule(): void;
  getSchedule(): common_pb.Schedule | undefined;
  setSchedule(value?: common_pb.Schedule): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScheduleByIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetScheduleByIdResponse): GetScheduleByIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetScheduleByIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScheduleByIdResponse;
  static deserializeBinaryFromReader(message: GetScheduleByIdResponse, reader: jspb.BinaryReader): GetScheduleByIdResponse;
}

export namespace GetScheduleByIdResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    schedule?: common_pb.Schedule.AsObject,
  }
}

export class PostScheduleRequest extends jspb.Message {
  hasSchedule(): boolean;
  clearSchedule(): void;
  getSchedule(): common_pb.Schedule | undefined;
  setSchedule(value?: common_pb.Schedule): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostScheduleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostScheduleRequest): PostScheduleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostScheduleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostScheduleRequest;
  static deserializeBinaryFromReader(message: PostScheduleRequest, reader: jspb.BinaryReader): PostScheduleRequest;
}

export namespace PostScheduleRequest {
  export type AsObject = {
    schedule?: common_pb.Schedule.AsObject,
  }
}

export class PostScheduleResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasSchedule(): boolean;
  clearSchedule(): void;
  getSchedule(): common_pb.Schedule | undefined;
  setSchedule(value?: common_pb.Schedule): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostScheduleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostScheduleResponse): PostScheduleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostScheduleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostScheduleResponse;
  static deserializeBinaryFromReader(message: PostScheduleResponse, reader: jspb.BinaryReader): PostScheduleResponse;
}

export namespace PostScheduleResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    schedule?: common_pb.Schedule.AsObject,
  }
}

export class PostScheduleSceneRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSceneid(): number;
  setSceneid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostScheduleSceneRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostScheduleSceneRequest): PostScheduleSceneRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostScheduleSceneRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostScheduleSceneRequest;
  static deserializeBinaryFromReader(message: PostScheduleSceneRequest, reader: jspb.BinaryReader): PostScheduleSceneRequest;
}

export namespace PostScheduleSceneRequest {
  export type AsObject = {
    name: string,
    sceneid: number,
  }
}

export class PostScheduleSceneResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasSchedulescene(): boolean;
  clearSchedulescene(): void;
  getSchedulescene(): common_pb.ScheduleScene | undefined;
  setSchedulescene(value?: common_pb.ScheduleScene): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostScheduleSceneResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostScheduleSceneResponse): PostScheduleSceneResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostScheduleSceneResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostScheduleSceneResponse;
  static deserializeBinaryFromReader(message: PostScheduleSceneResponse, reader: jspb.BinaryReader): PostScheduleSceneResponse;
}

export namespace PostScheduleSceneResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    schedulescene?: common_pb.ScheduleScene.AsObject,
  }
}

export class PutScheduleRequest extends jspb.Message {
  hasSchedule(): boolean;
  clearSchedule(): void;
  getSchedule(): common_pb.Schedule | undefined;
  setSchedule(value?: common_pb.Schedule): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutScheduleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutScheduleRequest): PutScheduleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutScheduleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutScheduleRequest;
  static deserializeBinaryFromReader(message: PutScheduleRequest, reader: jspb.BinaryReader): PutScheduleRequest;
}

export namespace PutScheduleRequest {
  export type AsObject = {
    schedule?: common_pb.Schedule.AsObject,
  }
}

export class PutScheduleResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasSchedule(): boolean;
  clearSchedule(): void;
  getSchedule(): common_pb.Schedule | undefined;
  setSchedule(value?: common_pb.Schedule): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutScheduleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PutScheduleResponse): PutScheduleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutScheduleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutScheduleResponse;
  static deserializeBinaryFromReader(message: PutScheduleResponse, reader: jspb.BinaryReader): PutScheduleResponse;
}

export namespace PutScheduleResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    schedule?: common_pb.Schedule.AsObject,
  }
}

export class DeleteScheduleResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteScheduleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteScheduleResponse): DeleteScheduleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteScheduleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteScheduleResponse;
  static deserializeBinaryFromReader(message: DeleteScheduleResponse, reader: jspb.BinaryReader): DeleteScheduleResponse;
}

export namespace DeleteScheduleResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
  }
}

export class GetScheduleSceneResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  clearSchedulescenesList(): void;
  getSchedulescenesList(): Array<common_pb.ScheduleScene>;
  setSchedulescenesList(value: Array<common_pb.ScheduleScene>): void;
  addSchedulescenes(value?: common_pb.ScheduleScene, index?: number): common_pb.ScheduleScene;

  hasPaginator(): boolean;
  clearPaginator(): void;
  getPaginator(): common_pb.Paginator | undefined;
  setPaginator(value?: common_pb.Paginator): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScheduleSceneResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetScheduleSceneResponse): GetScheduleSceneResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetScheduleSceneResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScheduleSceneResponse;
  static deserializeBinaryFromReader(message: GetScheduleSceneResponse, reader: jspb.BinaryReader): GetScheduleSceneResponse;
}

export namespace GetScheduleSceneResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    schedulescenesList: Array<common_pb.ScheduleScene.AsObject>,
    paginator?: common_pb.Paginator.AsObject,
  }
}

export class GetScheduleSceneByIdResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasSchedulescene(): boolean;
  clearSchedulescene(): void;
  getSchedulescene(): common_pb.ScheduleScene | undefined;
  setSchedulescene(value?: common_pb.ScheduleScene): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetScheduleSceneByIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetScheduleSceneByIdResponse): GetScheduleSceneByIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetScheduleSceneByIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetScheduleSceneByIdResponse;
  static deserializeBinaryFromReader(message: GetScheduleSceneByIdResponse, reader: jspb.BinaryReader): GetScheduleSceneByIdResponse;
}

export namespace GetScheduleSceneByIdResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    schedulescene?: common_pb.ScheduleScene.AsObject,
  }
}

export class PutScheduleSceneRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getScheduleid(): number;
  setScheduleid(value: number): void;

  getSceneid(): number;
  setSceneid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutScheduleSceneRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutScheduleSceneRequest): PutScheduleSceneRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutScheduleSceneRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutScheduleSceneRequest;
  static deserializeBinaryFromReader(message: PutScheduleSceneRequest, reader: jspb.BinaryReader): PutScheduleSceneRequest;
}

export namespace PutScheduleSceneRequest {
  export type AsObject = {
    name: string,
    scheduleid: number,
    sceneid: number,
  }
}

export class PutScheduleSceneResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasSchedulescene(): boolean;
  clearSchedulescene(): void;
  getSchedulescene(): common_pb.ScheduleScene | undefined;
  setSchedulescene(value?: common_pb.ScheduleScene): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutScheduleSceneResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PutScheduleSceneResponse): PutScheduleSceneResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutScheduleSceneResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutScheduleSceneResponse;
  static deserializeBinaryFromReader(message: PutScheduleSceneResponse, reader: jspb.BinaryReader): PutScheduleSceneResponse;
}

export namespace PutScheduleSceneResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    schedulescene?: common_pb.ScheduleScene.AsObject,
  }
}

export class DeleteScheduleSceneResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteScheduleSceneResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteScheduleSceneResponse): DeleteScheduleSceneResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteScheduleSceneResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteScheduleSceneResponse;
  static deserializeBinaryFromReader(message: DeleteScheduleSceneResponse, reader: jspb.BinaryReader): DeleteScheduleSceneResponse;
}

export namespace DeleteScheduleSceneResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
  }
}

export class PostConnectorScheduleRequest extends jspb.Message {
  getSchedulesceneid(): number;
  setSchedulesceneid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostConnectorScheduleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostConnectorScheduleRequest): PostConnectorScheduleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostConnectorScheduleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostConnectorScheduleRequest;
  static deserializeBinaryFromReader(message: PostConnectorScheduleRequest, reader: jspb.BinaryReader): PostConnectorScheduleRequest;
}

export namespace PostConnectorScheduleRequest {
  export type AsObject = {
    schedulesceneid: number,
  }
}

export class PostConnectorScheduleResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasConnectorschedulescene(): boolean;
  clearConnectorschedulescene(): void;
  getConnectorschedulescene(): common_pb.ConnectorScheduleScene | undefined;
  setConnectorschedulescene(value?: common_pb.ConnectorScheduleScene): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostConnectorScheduleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostConnectorScheduleResponse): PostConnectorScheduleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostConnectorScheduleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostConnectorScheduleResponse;
  static deserializeBinaryFromReader(message: PostConnectorScheduleResponse, reader: jspb.BinaryReader): PostConnectorScheduleResponse;
}

export namespace PostConnectorScheduleResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    connectorschedulescene?: common_pb.ConnectorScheduleScene.AsObject,
  }
}

export class PutConnectorScheduleRequest extends jspb.Message {
  hasScenebase(): boolean;
  clearScenebase(): void;
  getScenebase(): common_pb.SceneBase | undefined;
  setScenebase(value?: common_pb.SceneBase): void;

  hasSchedule(): boolean;
  clearSchedule(): void;
  getSchedule(): common_pb.Schedule | undefined;
  setSchedule(value?: common_pb.Schedule): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutConnectorScheduleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutConnectorScheduleRequest): PutConnectorScheduleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutConnectorScheduleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutConnectorScheduleRequest;
  static deserializeBinaryFromReader(message: PutConnectorScheduleRequest, reader: jspb.BinaryReader): PutConnectorScheduleRequest;
}

export namespace PutConnectorScheduleRequest {
  export type AsObject = {
    scenebase?: common_pb.SceneBase.AsObject,
    schedule?: common_pb.Schedule.AsObject,
  }
}

export class PutConnectorScheduleResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasConnectorschedulescene(): boolean;
  clearConnectorschedulescene(): void;
  getConnectorschedulescene(): common_pb.ConnectorScheduleScene | undefined;
  setConnectorschedulescene(value?: common_pb.ConnectorScheduleScene): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutConnectorScheduleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PutConnectorScheduleResponse): PutConnectorScheduleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutConnectorScheduleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutConnectorScheduleResponse;
  static deserializeBinaryFromReader(message: PutConnectorScheduleResponse, reader: jspb.BinaryReader): PutConnectorScheduleResponse;
}

export namespace PutConnectorScheduleResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    connectorschedulescene?: common_pb.ConnectorScheduleScene.AsObject,
  }
}

export class DeleteConnectorScheduleResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteConnectorScheduleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteConnectorScheduleResponse): DeleteConnectorScheduleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteConnectorScheduleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteConnectorScheduleResponse;
  static deserializeBinaryFromReader(message: DeleteConnectorScheduleResponse, reader: jspb.BinaryReader): DeleteConnectorScheduleResponse;
}

export namespace DeleteConnectorScheduleResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
  }
}

export class GetWeatherResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasWeather(): boolean;
  clearWeather(): void;
  getWeather(): common_pb.Weather | undefined;
  setWeather(value?: common_pb.Weather): void;

  getDatetimeseconds(): number;
  setDatetimeseconds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWeatherResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWeatherResponse): GetWeatherResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWeatherResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWeatherResponse;
  static deserializeBinaryFromReader(message: GetWeatherResponse, reader: jspb.BinaryReader): GetWeatherResponse;
}

export namespace GetWeatherResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    weather?: common_pb.Weather.AsObject,
    datetimeseconds: number,
  }
}

export class GetDepartmentResourceFolderResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  clearItemsList(): void;
  getItemsList(): Array<GetDepartmentResourceFolderResponse.Item>;
  setItemsList(value: Array<GetDepartmentResourceFolderResponse.Item>): void;
  addItems(value?: GetDepartmentResourceFolderResponse.Item, index?: number): GetDepartmentResourceFolderResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDepartmentResourceFolderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDepartmentResourceFolderResponse): GetDepartmentResourceFolderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDepartmentResourceFolderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDepartmentResourceFolderResponse;
  static deserializeBinaryFromReader(message: GetDepartmentResourceFolderResponse, reader: jspb.BinaryReader): GetDepartmentResourceFolderResponse;
}

export namespace GetDepartmentResourceFolderResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    itemsList: Array<GetDepartmentResourceFolderResponse.Item.AsObject>,
  }

  export class Item extends jspb.Message {
    hasDepartmentnodebase(): boolean;
    clearDepartmentnodebase(): void;
    getDepartmentnodebase(): common_pb.DepartmentNodeBase | undefined;
    setDepartmentnodebase(value?: common_pb.DepartmentNodeBase): void;

    hasDepartmentbase(): boolean;
    clearDepartmentbase(): void;
    getDepartmentbase(): common_pb.DepartmentBase | undefined;
    setDepartmentbase(value?: common_pb.DepartmentBase): void;

    clearResourcefoldersList(): void;
    getResourcefoldersList(): Array<common_pb.DepartmentResourceFolder>;
    setResourcefoldersList(value: Array<common_pb.DepartmentResourceFolder>): void;
    addResourcefolders(value?: common_pb.DepartmentResourceFolder, index?: number): common_pb.DepartmentResourceFolder;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Item.AsObject;
    static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Item;
    static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
  }

  export namespace Item {
    export type AsObject = {
      departmentnodebase?: common_pb.DepartmentNodeBase.AsObject,
      departmentbase?: common_pb.DepartmentBase.AsObject,
      resourcefoldersList: Array<common_pb.DepartmentResourceFolder.AsObject>,
    }
  }
}

export class PostDepartmentResourceFolderRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getParentdepartmentresourcefolderid(): number;
  setParentdepartmentresourcefolderid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostDepartmentResourceFolderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostDepartmentResourceFolderRequest): PostDepartmentResourceFolderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostDepartmentResourceFolderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostDepartmentResourceFolderRequest;
  static deserializeBinaryFromReader(message: PostDepartmentResourceFolderRequest, reader: jspb.BinaryReader): PostDepartmentResourceFolderRequest;
}

export namespace PostDepartmentResourceFolderRequest {
  export type AsObject = {
    name: string,
    parentdepartmentresourcefolderid: number,
  }
}

export class PostDepartmentResourceFolderResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasDepartmentresourcefolder(): boolean;
  clearDepartmentresourcefolder(): void;
  getDepartmentresourcefolder(): common_pb.DepartmentResourceFolder | undefined;
  setDepartmentresourcefolder(value?: common_pb.DepartmentResourceFolder): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostDepartmentResourceFolderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostDepartmentResourceFolderResponse): PostDepartmentResourceFolderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostDepartmentResourceFolderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostDepartmentResourceFolderResponse;
  static deserializeBinaryFromReader(message: PostDepartmentResourceFolderResponse, reader: jspb.BinaryReader): PostDepartmentResourceFolderResponse;
}

export namespace PostDepartmentResourceFolderResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    departmentresourcefolder?: common_pb.DepartmentResourceFolder.AsObject,
  }
}

export class PutDepartmentResourceFolderRequest extends jspb.Message {
  clearResourceidsList(): void;
  getResourceidsList(): Array<number>;
  setResourceidsList(value: Array<number>): void;
  addResourceids(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutDepartmentResourceFolderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutDepartmentResourceFolderRequest): PutDepartmentResourceFolderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutDepartmentResourceFolderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutDepartmentResourceFolderRequest;
  static deserializeBinaryFromReader(message: PutDepartmentResourceFolderRequest, reader: jspb.BinaryReader): PutDepartmentResourceFolderRequest;
}

export namespace PutDepartmentResourceFolderRequest {
  export type AsObject = {
    resourceidsList: Array<number>,
  }
}

export class PutDepartmentResourceFolderResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  clearResourceidsList(): void;
  getResourceidsList(): Array<number>;
  setResourceidsList(value: Array<number>): void;
  addResourceids(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutDepartmentResourceFolderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PutDepartmentResourceFolderResponse): PutDepartmentResourceFolderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutDepartmentResourceFolderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutDepartmentResourceFolderResponse;
  static deserializeBinaryFromReader(message: PutDepartmentResourceFolderResponse, reader: jspb.BinaryReader): PutDepartmentResourceFolderResponse;
}

export namespace PutDepartmentResourceFolderResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    resourceidsList: Array<number>,
  }
}

export class PatchDepartmentResourceFolderRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchDepartmentResourceFolderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchDepartmentResourceFolderRequest): PatchDepartmentResourceFolderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatchDepartmentResourceFolderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchDepartmentResourceFolderRequest;
  static deserializeBinaryFromReader(message: PatchDepartmentResourceFolderRequest, reader: jspb.BinaryReader): PatchDepartmentResourceFolderRequest;
}

export namespace PatchDepartmentResourceFolderRequest {
  export type AsObject = {
    name: string,
  }
}

export class PatchDepartmentResourceFolderResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasDepartmentresourcefolder(): boolean;
  clearDepartmentresourcefolder(): void;
  getDepartmentresourcefolder(): common_pb.DepartmentResourceFolder | undefined;
  setDepartmentresourcefolder(value?: common_pb.DepartmentResourceFolder): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchDepartmentResourceFolderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PatchDepartmentResourceFolderResponse): PatchDepartmentResourceFolderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatchDepartmentResourceFolderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchDepartmentResourceFolderResponse;
  static deserializeBinaryFromReader(message: PatchDepartmentResourceFolderResponse, reader: jspb.BinaryReader): PatchDepartmentResourceFolderResponse;
}

export namespace PatchDepartmentResourceFolderResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    departmentresourcefolder?: common_pb.DepartmentResourceFolder.AsObject,
  }
}

export class DeleteDepartmentResourceFolderResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDepartmentResourceFolderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDepartmentResourceFolderResponse): DeleteDepartmentResourceFolderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDepartmentResourceFolderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDepartmentResourceFolderResponse;
  static deserializeBinaryFromReader(message: DeleteDepartmentResourceFolderResponse, reader: jspb.BinaryReader): DeleteDepartmentResourceFolderResponse;
}

export namespace DeleteDepartmentResourceFolderResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
  }
}

export class DeleteDepartmentResourceFolderResourceResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDepartmentResourceFolderResourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDepartmentResourceFolderResourceResponse): DeleteDepartmentResourceFolderResourceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDepartmentResourceFolderResourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDepartmentResourceFolderResourceResponse;
  static deserializeBinaryFromReader(message: DeleteDepartmentResourceFolderResourceResponse, reader: jspb.BinaryReader): DeleteDepartmentResourceFolderResourceResponse;
}

export namespace DeleteDepartmentResourceFolderResourceResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
  }
}

export class GetDepartmentSceneFolderResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  clearItemsList(): void;
  getItemsList(): Array<GetDepartmentSceneFolderResponse.Item>;
  setItemsList(value: Array<GetDepartmentSceneFolderResponse.Item>): void;
  addItems(value?: GetDepartmentSceneFolderResponse.Item, index?: number): GetDepartmentSceneFolderResponse.Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDepartmentSceneFolderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDepartmentSceneFolderResponse): GetDepartmentSceneFolderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDepartmentSceneFolderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDepartmentSceneFolderResponse;
  static deserializeBinaryFromReader(message: GetDepartmentSceneFolderResponse, reader: jspb.BinaryReader): GetDepartmentSceneFolderResponse;
}

export namespace GetDepartmentSceneFolderResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    itemsList: Array<GetDepartmentSceneFolderResponse.Item.AsObject>,
  }

  export class Item extends jspb.Message {
    hasDepartmentnodebase(): boolean;
    clearDepartmentnodebase(): void;
    getDepartmentnodebase(): common_pb.DepartmentNodeBase | undefined;
    setDepartmentnodebase(value?: common_pb.DepartmentNodeBase): void;

    hasDepartmentbase(): boolean;
    clearDepartmentbase(): void;
    getDepartmentbase(): common_pb.DepartmentBase | undefined;
    setDepartmentbase(value?: common_pb.DepartmentBase): void;

    clearScenefoldersList(): void;
    getScenefoldersList(): Array<common_pb.DepartmentSceneFolder>;
    setScenefoldersList(value: Array<common_pb.DepartmentSceneFolder>): void;
    addScenefolders(value?: common_pb.DepartmentSceneFolder, index?: number): common_pb.DepartmentSceneFolder;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Item.AsObject;
    static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Item;
    static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
  }

  export namespace Item {
    export type AsObject = {
      departmentnodebase?: common_pb.DepartmentNodeBase.AsObject,
      departmentbase?: common_pb.DepartmentBase.AsObject,
      scenefoldersList: Array<common_pb.DepartmentSceneFolder.AsObject>,
    }
  }
}

export class PostDepartmentSceneFolderRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getParentdepartmentscenefolderid(): number;
  setParentdepartmentscenefolderid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostDepartmentSceneFolderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostDepartmentSceneFolderRequest): PostDepartmentSceneFolderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostDepartmentSceneFolderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostDepartmentSceneFolderRequest;
  static deserializeBinaryFromReader(message: PostDepartmentSceneFolderRequest, reader: jspb.BinaryReader): PostDepartmentSceneFolderRequest;
}

export namespace PostDepartmentSceneFolderRequest {
  export type AsObject = {
    name: string,
    parentdepartmentscenefolderid: number,
  }
}

export class PostDepartmentSceneFolderResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasDepartmentscenefolder(): boolean;
  clearDepartmentscenefolder(): void;
  getDepartmentscenefolder(): common_pb.DepartmentSceneFolder | undefined;
  setDepartmentscenefolder(value?: common_pb.DepartmentSceneFolder): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostDepartmentSceneFolderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostDepartmentSceneFolderResponse): PostDepartmentSceneFolderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PostDepartmentSceneFolderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostDepartmentSceneFolderResponse;
  static deserializeBinaryFromReader(message: PostDepartmentSceneFolderResponse, reader: jspb.BinaryReader): PostDepartmentSceneFolderResponse;
}

export namespace PostDepartmentSceneFolderResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    departmentscenefolder?: common_pb.DepartmentSceneFolder.AsObject,
  }
}

export class PutDepartmentSceneFolderRequest extends jspb.Message {
  clearSceneidsList(): void;
  getSceneidsList(): Array<number>;
  setSceneidsList(value: Array<number>): void;
  addSceneids(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutDepartmentSceneFolderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PutDepartmentSceneFolderRequest): PutDepartmentSceneFolderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutDepartmentSceneFolderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutDepartmentSceneFolderRequest;
  static deserializeBinaryFromReader(message: PutDepartmentSceneFolderRequest, reader: jspb.BinaryReader): PutDepartmentSceneFolderRequest;
}

export namespace PutDepartmentSceneFolderRequest {
  export type AsObject = {
    sceneidsList: Array<number>,
  }
}

export class PutDepartmentSceneFolderResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  clearSceneidsList(): void;
  getSceneidsList(): Array<number>;
  setSceneidsList(value: Array<number>): void;
  addSceneids(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutDepartmentSceneFolderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PutDepartmentSceneFolderResponse): PutDepartmentSceneFolderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutDepartmentSceneFolderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutDepartmentSceneFolderResponse;
  static deserializeBinaryFromReader(message: PutDepartmentSceneFolderResponse, reader: jspb.BinaryReader): PutDepartmentSceneFolderResponse;
}

export namespace PutDepartmentSceneFolderResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    sceneidsList: Array<number>,
  }
}

export class PatchDepartmentSceneFolderRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchDepartmentSceneFolderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchDepartmentSceneFolderRequest): PatchDepartmentSceneFolderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatchDepartmentSceneFolderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchDepartmentSceneFolderRequest;
  static deserializeBinaryFromReader(message: PatchDepartmentSceneFolderRequest, reader: jspb.BinaryReader): PatchDepartmentSceneFolderRequest;
}

export namespace PatchDepartmentSceneFolderRequest {
  export type AsObject = {
    name: string,
  }
}

export class PatchDepartmentSceneFolderResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasDepartmentscenefolder(): boolean;
  clearDepartmentscenefolder(): void;
  getDepartmentscenefolder(): common_pb.DepartmentSceneFolder | undefined;
  setDepartmentscenefolder(value?: common_pb.DepartmentSceneFolder): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchDepartmentSceneFolderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PatchDepartmentSceneFolderResponse): PatchDepartmentSceneFolderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatchDepartmentSceneFolderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchDepartmentSceneFolderResponse;
  static deserializeBinaryFromReader(message: PatchDepartmentSceneFolderResponse, reader: jspb.BinaryReader): PatchDepartmentSceneFolderResponse;
}

export namespace PatchDepartmentSceneFolderResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    departmentscenefolder?: common_pb.DepartmentSceneFolder.AsObject,
  }
}

export class DeleteDepartmentSceneFolderResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDepartmentSceneFolderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDepartmentSceneFolderResponse): DeleteDepartmentSceneFolderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDepartmentSceneFolderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDepartmentSceneFolderResponse;
  static deserializeBinaryFromReader(message: DeleteDepartmentSceneFolderResponse, reader: jspb.BinaryReader): DeleteDepartmentSceneFolderResponse;
}

export namespace DeleteDepartmentSceneFolderResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
  }
}

export class GetSceneFolderScenesResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  clearScenebasesList(): void;
  getScenebasesList(): Array<common_pb.SceneBase>;
  setScenebasesList(value: Array<common_pb.SceneBase>): void;
  addScenebases(value?: common_pb.SceneBase, index?: number): common_pb.SceneBase;

  getItemscount(): number;
  setItemscount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSceneFolderScenesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSceneFolderScenesResponse): GetSceneFolderScenesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSceneFolderScenesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSceneFolderScenesResponse;
  static deserializeBinaryFromReader(message: GetSceneFolderScenesResponse, reader: jspb.BinaryReader): GetSceneFolderScenesResponse;
}

export namespace GetSceneFolderScenesResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    scenebasesList: Array<common_pb.SceneBase.AsObject>,
    itemscount: number,
  }
}

export class GetResourceFolderResourcesResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  clearResourcesList(): void;
  getResourcesList(): Array<common_pb.Resource>;
  setResourcesList(value: Array<common_pb.Resource>): void;
  addResources(value?: common_pb.Resource, index?: number): common_pb.Resource;

  getItemcount(): number;
  setItemcount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResourceFolderResourcesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResourceFolderResourcesResponse): GetResourceFolderResourcesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetResourceFolderResourcesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResourceFolderResourcesResponse;
  static deserializeBinaryFromReader(message: GetResourceFolderResourcesResponse, reader: jspb.BinaryReader): GetResourceFolderResourcesResponse;
}

export namespace GetResourceFolderResourcesResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    resourcesList: Array<common_pb.Resource.AsObject>,
    itemcount: number,
  }
}

export class GetSubtitleRssResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasFeed(): boolean;
  clearFeed(): void;
  getFeed(): common_pb.Feed | undefined;
  setFeed(value?: common_pb.Feed): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSubtitleRssResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSubtitleRssResponse): GetSubtitleRssResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSubtitleRssResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSubtitleRssResponse;
  static deserializeBinaryFromReader(message: GetSubtitleRssResponse, reader: jspb.BinaryReader): GetSubtitleRssResponse;
}

export namespace GetSubtitleRssResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    feed?: common_pb.Feed.AsObject,
  }
}

export class GetSceneNavigationResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasScene(): boolean;
  clearScene(): void;
  getScene(): common_pb.Scene | undefined;
  setScene(value?: common_pb.Scene): void;

  clearSourcescenebasesList(): void;
  getSourcescenebasesList(): Array<common_pb.SceneBase>;
  setSourcescenebasesList(value: Array<common_pb.SceneBase>): void;
  addSourcescenebases(value?: common_pb.SceneBase, index?: number): common_pb.SceneBase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSceneNavigationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSceneNavigationResponse): GetSceneNavigationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSceneNavigationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSceneNavigationResponse;
  static deserializeBinaryFromReader(message: GetSceneNavigationResponse, reader: jspb.BinaryReader): GetSceneNavigationResponse;
}

export namespace GetSceneNavigationResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    scene?: common_pb.Scene.AsObject,
    sourcescenebasesList: Array<common_pb.SceneBase.AsObject>,
  }
}

export class GetValidateSceneResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  clearScenebasesList(): void;
  getScenebasesList(): Array<common_pb.SceneBase>;
  setScenebasesList(value: Array<common_pb.SceneBase>): void;
  addScenebases(value?: common_pb.SceneBase, index?: number): common_pb.SceneBase;

  getItemscount(): number;
  setItemscount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetValidateSceneResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetValidateSceneResponse): GetValidateSceneResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetValidateSceneResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetValidateSceneResponse;
  static deserializeBinaryFromReader(message: GetValidateSceneResponse, reader: jspb.BinaryReader): GetValidateSceneResponse;
}

export namespace GetValidateSceneResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    scenebasesList: Array<common_pb.SceneBase.AsObject>,
    itemscount: number,
  }
}

export class GetValidateResourceResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  clearResourcesList(): void;
  getResourcesList(): Array<common_pb.Resource>;
  setResourcesList(value: Array<common_pb.Resource>): void;
  addResources(value?: common_pb.Resource, index?: number): common_pb.Resource;

  getItemscount(): number;
  setItemscount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetValidateResourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetValidateResourceResponse): GetValidateResourceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetValidateResourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetValidateResourceResponse;
  static deserializeBinaryFromReader(message: GetValidateResourceResponse, reader: jspb.BinaryReader): GetValidateResourceResponse;
}

export namespace GetValidateResourceResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    resourcesList: Array<common_pb.Resource.AsObject>,
    itemscount: number,
  }
}

export class GetValidateResourceByResourceIdResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasResource(): boolean;
  clearResource(): void;
  getResource(): common_pb.Resource | undefined;
  setResource(value?: common_pb.Resource): void;

  clearScenebasesList(): void;
  getScenebasesList(): Array<common_pb.SceneBase>;
  setScenebasesList(value: Array<common_pb.SceneBase>): void;
  addScenebases(value?: common_pb.SceneBase, index?: number): common_pb.SceneBase;

  getItemcount(): number;
  setItemcount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetValidateResourceByResourceIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetValidateResourceByResourceIdResponse): GetValidateResourceByResourceIdResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetValidateResourceByResourceIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetValidateResourceByResourceIdResponse;
  static deserializeBinaryFromReader(message: GetValidateResourceByResourceIdResponse, reader: jspb.BinaryReader): GetValidateResourceByResourceIdResponse;
}

export namespace GetValidateResourceByResourceIdResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    resource?: common_pb.Resource.AsObject,
    scenebasesList: Array<common_pb.SceneBase.AsObject>,
    itemcount: number,
  }
}

export class PutResourceResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasResource(): boolean;
  clearResource(): void;
  getResource(): common_pb.Resource | undefined;
  setResource(value?: common_pb.Resource): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PutResourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PutResourceResponse): PutResourceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PutResourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PutResourceResponse;
  static deserializeBinaryFromReader(message: PutResourceResponse, reader: jspb.BinaryReader): PutResourceResponse;
}

export namespace PutResourceResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    resource?: common_pb.Resource.AsObject,
  }
}

export class GetResourceResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasResource(): boolean;
  clearResource(): void;
  getResource(): common_pb.Resource | undefined;
  setResource(value?: common_pb.Resource): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResourceResponse): GetResourceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetResourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResourceResponse;
  static deserializeBinaryFromReader(message: GetResourceResponse, reader: jspb.BinaryReader): GetResourceResponse;
}

export namespace GetResourceResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    resource?: common_pb.Resource.AsObject,
  }
}

export class GetResourcesResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  clearResourcesList(): void;
  getResourcesList(): Array<common_pb.Resource>;
  setResourcesList(value: Array<common_pb.Resource>): void;
  addResources(value?: common_pb.Resource, index?: number): common_pb.Resource;

  getPagescount(): number;
  setPagescount(value: number): void;

  getItemscount(): number;
  setItemscount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResourcesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResourcesResponse): GetResourcesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetResourcesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResourcesResponse;
  static deserializeBinaryFromReader(message: GetResourcesResponse, reader: jspb.BinaryReader): GetResourcesResponse;
}

export namespace GetResourcesResponse {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    resourcesList: Array<common_pb.Resource.AsObject>,
    pagescount: number,
    itemscount: number,
  }
}

export class GetSceneByIdBlueprintV2Response extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): common_pb.CommonStatus | undefined;
  setCommon(value?: common_pb.CommonStatus): void;

  hasBlueprint(): boolean;
  clearBlueprint(): void;
  getBlueprint(): common_pb.SceneBlueprint | undefined;
  setBlueprint(value?: common_pb.SceneBlueprint): void;

  hasScenebase(): boolean;
  clearScenebase(): void;
  getScenebase(): common_pb.SceneBase | undefined;
  setScenebase(value?: common_pb.SceneBase): void;

  clearScenebasesList(): void;
  getScenebasesList(): Array<common_pb.SceneBase>;
  setScenebasesList(value: Array<common_pb.SceneBase>): void;
  addScenebases(value?: common_pb.SceneBase, index?: number): common_pb.SceneBase;

  clearResourcesList(): void;
  getResourcesList(): Array<common_pb.Resource>;
  setResourcesList(value: Array<common_pb.Resource>): void;
  addResources(value?: common_pb.Resource, index?: number): common_pb.Resource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSceneByIdBlueprintV2Response.AsObject;
  static toObject(includeInstance: boolean, msg: GetSceneByIdBlueprintV2Response): GetSceneByIdBlueprintV2Response.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSceneByIdBlueprintV2Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSceneByIdBlueprintV2Response;
  static deserializeBinaryFromReader(message: GetSceneByIdBlueprintV2Response, reader: jspb.BinaryReader): GetSceneByIdBlueprintV2Response;
}

export namespace GetSceneByIdBlueprintV2Response {
  export type AsObject = {
    common?: common_pb.CommonStatus.AsObject,
    blueprint?: common_pb.SceneBlueprint.AsObject,
    scenebase?: common_pb.SceneBase.AsObject,
    scenebasesList: Array<common_pb.SceneBase.AsObject>,
    resourcesList: Array<common_pb.Resource.AsObject>,
  }
}

