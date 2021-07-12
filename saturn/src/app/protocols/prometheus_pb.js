// source: prometheus.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var common_pb = require('./common_pb.js');
goog.object.extend(proto, common_pb);
goog.exportSymbol('proto.protocols.prometheus.DeleteConnectorResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.DeleteConnectorSceneEmergencyResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.DeleteConnectorSceneResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.DeleteConnectorScheduleResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.DeleteDepartmentConnectorResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.DeleteDepartmentMemberRequest', null, global);
goog.exportSymbol('proto.protocols.prometheus.DeleteDepartmentMemberResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.DeleteDepartmentNodeResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.DeleteDepartmentResourceFolderResourceResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.DeleteDepartmentResourceFolderResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.DeleteDepartmentSceneFolderResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.DeleteMemberPermissionRequest', null, global);
goog.exportSymbol('proto.protocols.prometheus.DeleteMemberPermissionResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.DeleteMemberResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.DeleteSceneResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.DeleteScheduleResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.DeleteScheduleSceneResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetAccountResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetConnectorResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetConnectorsResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetDepartmentByIdResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetDepartmentConnectorLowersResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetDepartmentConnectorsResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetDepartmentMemberResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetDepartmentNodeResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetDepartmentResourceFolderResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetDepartmentSceneFolderResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetMemberByIdResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetMemberRecordByMemberIdResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetMemberRecordResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetMemberResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetResourceFolderResourcesResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetResourceResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetResourcesResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetSceneByIdBlueprintResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetSceneByIdBlueprintV2Response', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetSceneByIdResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetSceneFolderScenesResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetSceneNavigationResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetSceneResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetScheduleByIdResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetScheduleResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetScheduleSceneByIdResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetScheduleSceneResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetSubtitleRssResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetValidateResourceByResourceIdResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetValidateResourceResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetValidateSceneResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetVersionRequiredResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.GetWeatherResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PatchDepartmentResourceFolderRequest', null, global);
goog.exportSymbol('proto.protocols.prometheus.PatchDepartmentResourceFolderResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PatchDepartmentSceneFolderRequest', null, global);
goog.exportSymbol('proto.protocols.prometheus.PatchDepartmentSceneFolderResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PostAccountRequest', null, global);
goog.exportSymbol('proto.protocols.prometheus.PostAccountResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PostConnectorByIdResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PostConnectorRequest', null, global);
goog.exportSymbol('proto.protocols.prometheus.PostConnectorResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PostConnectorResponse.POST_KIND', null, global);
goog.exportSymbol('proto.protocols.prometheus.PostConnectorScheduleRequest', null, global);
goog.exportSymbol('proto.protocols.prometheus.PostConnectorScheduleResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PostDepartmentConnectorRequest', null, global);
goog.exportSymbol('proto.protocols.prometheus.PostDepartmentConnectorResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PostDepartmentMemberRequest', null, global);
goog.exportSymbol('proto.protocols.prometheus.PostDepartmentMemberResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PostDepartmentNodeRequest', null, global);
goog.exportSymbol('proto.protocols.prometheus.PostDepartmentNodeResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PostDepartmentResourceFolderRequest', null, global);
goog.exportSymbol('proto.protocols.prometheus.PostDepartmentResourceFolderResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PostDepartmentSceneFolderRequest', null, global);
goog.exportSymbol('proto.protocols.prometheus.PostDepartmentSceneFolderResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PostMemberPermissionRequest', null, global);
goog.exportSymbol('proto.protocols.prometheus.PostMemberPermissionResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PostSceneRequest', null, global);
goog.exportSymbol('proto.protocols.prometheus.PostSceneResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PostScheduleRequest', null, global);
goog.exportSymbol('proto.protocols.prometheus.PostScheduleResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PostScheduleSceneRequest', null, global);
goog.exportSymbol('proto.protocols.prometheus.PostScheduleSceneResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutAccountRequest', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutAccountResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutConnectorEmergencyRequest', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutConnectorEmergencyResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutConnectorEmergencySceneRequest', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutConnectorEmergencySceneResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutConnectorNameRequest', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutConnectorNameResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutConnectorRequest', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutConnectorResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutConnectorSceneEmergencyResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutConnectorSceneResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutConnectorScheduleRequest', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutConnectorScheduleResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutDepartmentNodeRequest', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutDepartmentNodeResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutDepartmentRequest', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutDepartmentResourceFolderRequest', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutDepartmentResourceFolderResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutDepartmentResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutDepartmentSceneFolderRequest', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutDepartmentSceneFolderResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutMemberKindResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutMemberPermissionRequest', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutMemberPermissionResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutMemberResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutResourceResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutSceneRequest', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutSceneResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutScheduleRequest', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutScheduleResponse', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutScheduleSceneRequest', null, global);
goog.exportSymbol('proto.protocols.prometheus.PutScheduleSceneResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetVersionRequiredResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.GetVersionRequiredResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetVersionRequiredResponse.displayName = 'proto.protocols.prometheus.GetVersionRequiredResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetMemberResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.GetMemberResponse.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.GetMemberResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetMemberResponse.displayName = 'proto.protocols.prometheus.GetMemberResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetMemberByIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.GetMemberByIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetMemberByIdResponse.displayName = 'proto.protocols.prometheus.GetMemberByIdResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutMemberResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PutMemberResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutMemberResponse.displayName = 'proto.protocols.prometheus.PutMemberResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.DeleteMemberResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.DeleteMemberResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.DeleteMemberResponse.displayName = 'proto.protocols.prometheus.DeleteMemberResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutMemberKindResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PutMemberKindResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutMemberKindResponse.displayName = 'proto.protocols.prometheus.PutMemberKindResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PostMemberPermissionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PostMemberPermissionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PostMemberPermissionRequest.displayName = 'proto.protocols.prometheus.PostMemberPermissionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PostMemberPermissionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PostMemberPermissionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PostMemberPermissionResponse.displayName = 'proto.protocols.prometheus.PostMemberPermissionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutMemberPermissionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.PutMemberPermissionRequest.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.PutMemberPermissionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutMemberPermissionRequest.displayName = 'proto.protocols.prometheus.PutMemberPermissionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutMemberPermissionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PutMemberPermissionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutMemberPermissionResponse.displayName = 'proto.protocols.prometheus.PutMemberPermissionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.DeleteMemberPermissionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.DeleteMemberPermissionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.DeleteMemberPermissionRequest.displayName = 'proto.protocols.prometheus.DeleteMemberPermissionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.DeleteMemberPermissionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.DeleteMemberPermissionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.DeleteMemberPermissionResponse.displayName = 'proto.protocols.prometheus.DeleteMemberPermissionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetAccountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.GetAccountResponse.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.GetAccountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetAccountResponse.displayName = 'proto.protocols.prometheus.GetAccountResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PostAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PostAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PostAccountRequest.displayName = 'proto.protocols.prometheus.PostAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PostAccountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PostAccountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PostAccountResponse.displayName = 'proto.protocols.prometheus.PostAccountResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PutAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutAccountRequest.displayName = 'proto.protocols.prometheus.PutAccountRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutAccountResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PutAccountResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutAccountResponse.displayName = 'proto.protocols.prometheus.PutAccountResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetDepartmentByIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.GetDepartmentByIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetDepartmentByIdResponse.displayName = 'proto.protocols.prometheus.GetDepartmentByIdResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutDepartmentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PutDepartmentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutDepartmentRequest.displayName = 'proto.protocols.prometheus.PutDepartmentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutDepartmentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PutDepartmentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutDepartmentResponse.displayName = 'proto.protocols.prometheus.PutDepartmentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetDepartmentNodeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.GetDepartmentNodeResponse.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.GetDepartmentNodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetDepartmentNodeResponse.displayName = 'proto.protocols.prometheus.GetDepartmentNodeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PostDepartmentNodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PostDepartmentNodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PostDepartmentNodeRequest.displayName = 'proto.protocols.prometheus.PostDepartmentNodeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PostDepartmentNodeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PostDepartmentNodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PostDepartmentNodeResponse.displayName = 'proto.protocols.prometheus.PostDepartmentNodeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutDepartmentNodeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PutDepartmentNodeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutDepartmentNodeRequest.displayName = 'proto.protocols.prometheus.PutDepartmentNodeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutDepartmentNodeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PutDepartmentNodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutDepartmentNodeResponse.displayName = 'proto.protocols.prometheus.PutDepartmentNodeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.DeleteDepartmentNodeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.DeleteDepartmentNodeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.DeleteDepartmentNodeResponse.displayName = 'proto.protocols.prometheus.DeleteDepartmentNodeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetMemberRecordResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.GetMemberRecordResponse.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.GetMemberRecordResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetMemberRecordResponse.displayName = 'proto.protocols.prometheus.GetMemberRecordResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetMemberRecordByMemberIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.GetMemberRecordByMemberIdResponse.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.GetMemberRecordByMemberIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetMemberRecordByMemberIdResponse.displayName = 'proto.protocols.prometheus.GetMemberRecordByMemberIdResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetSceneResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.GetSceneResponse.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.GetSceneResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetSceneResponse.displayName = 'proto.protocols.prometheus.GetSceneResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetSceneByIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.GetSceneByIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetSceneByIdResponse.displayName = 'proto.protocols.prometheus.GetSceneByIdResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetSceneByIdBlueprintResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.GetSceneByIdBlueprintResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetSceneByIdBlueprintResponse.displayName = 'proto.protocols.prometheus.GetSceneByIdBlueprintResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PostSceneRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PostSceneRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PostSceneRequest.displayName = 'proto.protocols.prometheus.PostSceneRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PostSceneResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PostSceneResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PostSceneResponse.displayName = 'proto.protocols.prometheus.PostSceneResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutSceneRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PutSceneRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutSceneRequest.displayName = 'proto.protocols.prometheus.PutSceneRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutSceneResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PutSceneResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutSceneResponse.displayName = 'proto.protocols.prometheus.PutSceneResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.DeleteSceneResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.DeleteSceneResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.DeleteSceneResponse.displayName = 'proto.protocols.prometheus.DeleteSceneResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetDepartmentMemberResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.GetDepartmentMemberResponse.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.GetDepartmentMemberResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetDepartmentMemberResponse.displayName = 'proto.protocols.prometheus.GetDepartmentMemberResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetDepartmentConnectorLowersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.GetDepartmentConnectorLowersResponse.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.GetDepartmentConnectorLowersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetDepartmentConnectorLowersResponse.displayName = 'proto.protocols.prometheus.GetDepartmentConnectorLowersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PostDepartmentMemberRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PostDepartmentMemberRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PostDepartmentMemberRequest.displayName = 'proto.protocols.prometheus.PostDepartmentMemberRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PostDepartmentMemberResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.PostDepartmentMemberResponse.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.PostDepartmentMemberResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PostDepartmentMemberResponse.displayName = 'proto.protocols.prometheus.PostDepartmentMemberResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.DeleteDepartmentMemberRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.DeleteDepartmentMemberRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.DeleteDepartmentMemberRequest.displayName = 'proto.protocols.prometheus.DeleteDepartmentMemberRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.DeleteDepartmentMemberResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.DeleteDepartmentMemberResponse.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.DeleteDepartmentMemberResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.DeleteDepartmentMemberResponse.displayName = 'proto.protocols.prometheus.DeleteDepartmentMemberResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetDepartmentConnectorsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.GetDepartmentConnectorsResponse.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.GetDepartmentConnectorsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetDepartmentConnectorsResponse.displayName = 'proto.protocols.prometheus.GetDepartmentConnectorsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PostDepartmentConnectorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PostDepartmentConnectorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PostDepartmentConnectorRequest.displayName = 'proto.protocols.prometheus.PostDepartmentConnectorRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PostDepartmentConnectorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.PostDepartmentConnectorResponse.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.PostDepartmentConnectorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PostDepartmentConnectorResponse.displayName = 'proto.protocols.prometheus.PostDepartmentConnectorResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.DeleteDepartmentConnectorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.DeleteDepartmentConnectorResponse.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.DeleteDepartmentConnectorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.DeleteDepartmentConnectorResponse.displayName = 'proto.protocols.prometheus.DeleteDepartmentConnectorResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetConnectorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.GetConnectorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetConnectorResponse.displayName = 'proto.protocols.prometheus.GetConnectorResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetConnectorsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.GetConnectorsResponse.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.GetConnectorsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetConnectorsResponse.displayName = 'proto.protocols.prometheus.GetConnectorsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PostConnectorByIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PostConnectorByIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PostConnectorByIdResponse.displayName = 'proto.protocols.prometheus.PostConnectorByIdResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PostConnectorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PostConnectorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PostConnectorRequest.displayName = 'proto.protocols.prometheus.PostConnectorRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PostConnectorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PostConnectorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PostConnectorResponse.displayName = 'proto.protocols.prometheus.PostConnectorResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutConnectorNameRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PutConnectorNameRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutConnectorNameRequest.displayName = 'proto.protocols.prometheus.PutConnectorNameRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutConnectorNameResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PutConnectorNameResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutConnectorNameResponse.displayName = 'proto.protocols.prometheus.PutConnectorNameResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutConnectorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PutConnectorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutConnectorRequest.displayName = 'proto.protocols.prometheus.PutConnectorRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutConnectorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PutConnectorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutConnectorResponse.displayName = 'proto.protocols.prometheus.PutConnectorResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.DeleteConnectorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.DeleteConnectorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.DeleteConnectorResponse.displayName = 'proto.protocols.prometheus.DeleteConnectorResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutConnectorSceneResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PutConnectorSceneResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutConnectorSceneResponse.displayName = 'proto.protocols.prometheus.PutConnectorSceneResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.DeleteConnectorSceneResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.DeleteConnectorSceneResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.DeleteConnectorSceneResponse.displayName = 'proto.protocols.prometheus.DeleteConnectorSceneResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutConnectorSceneEmergencyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PutConnectorSceneEmergencyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutConnectorSceneEmergencyResponse.displayName = 'proto.protocols.prometheus.PutConnectorSceneEmergencyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.DeleteConnectorSceneEmergencyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.DeleteConnectorSceneEmergencyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.DeleteConnectorSceneEmergencyResponse.displayName = 'proto.protocols.prometheus.DeleteConnectorSceneEmergencyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutConnectorEmergencyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PutConnectorEmergencyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutConnectorEmergencyRequest.displayName = 'proto.protocols.prometheus.PutConnectorEmergencyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutConnectorEmergencyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PutConnectorEmergencyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutConnectorEmergencyResponse.displayName = 'proto.protocols.prometheus.PutConnectorEmergencyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutConnectorEmergencySceneRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PutConnectorEmergencySceneRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutConnectorEmergencySceneRequest.displayName = 'proto.protocols.prometheus.PutConnectorEmergencySceneRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutConnectorEmergencySceneResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PutConnectorEmergencySceneResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutConnectorEmergencySceneResponse.displayName = 'proto.protocols.prometheus.PutConnectorEmergencySceneResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetScheduleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.GetScheduleResponse.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.GetScheduleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetScheduleResponse.displayName = 'proto.protocols.prometheus.GetScheduleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetScheduleByIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.GetScheduleByIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetScheduleByIdResponse.displayName = 'proto.protocols.prometheus.GetScheduleByIdResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PostScheduleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PostScheduleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PostScheduleRequest.displayName = 'proto.protocols.prometheus.PostScheduleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PostScheduleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PostScheduleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PostScheduleResponse.displayName = 'proto.protocols.prometheus.PostScheduleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PostScheduleSceneRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PostScheduleSceneRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PostScheduleSceneRequest.displayName = 'proto.protocols.prometheus.PostScheduleSceneRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PostScheduleSceneResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PostScheduleSceneResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PostScheduleSceneResponse.displayName = 'proto.protocols.prometheus.PostScheduleSceneResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutScheduleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PutScheduleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutScheduleRequest.displayName = 'proto.protocols.prometheus.PutScheduleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutScheduleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PutScheduleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutScheduleResponse.displayName = 'proto.protocols.prometheus.PutScheduleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.DeleteScheduleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.DeleteScheduleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.DeleteScheduleResponse.displayName = 'proto.protocols.prometheus.DeleteScheduleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetScheduleSceneResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.GetScheduleSceneResponse.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.GetScheduleSceneResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetScheduleSceneResponse.displayName = 'proto.protocols.prometheus.GetScheduleSceneResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetScheduleSceneByIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.GetScheduleSceneByIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetScheduleSceneByIdResponse.displayName = 'proto.protocols.prometheus.GetScheduleSceneByIdResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutScheduleSceneRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PutScheduleSceneRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutScheduleSceneRequest.displayName = 'proto.protocols.prometheus.PutScheduleSceneRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutScheduleSceneResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PutScheduleSceneResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutScheduleSceneResponse.displayName = 'proto.protocols.prometheus.PutScheduleSceneResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.DeleteScheduleSceneResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.DeleteScheduleSceneResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.DeleteScheduleSceneResponse.displayName = 'proto.protocols.prometheus.DeleteScheduleSceneResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PostConnectorScheduleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PostConnectorScheduleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PostConnectorScheduleRequest.displayName = 'proto.protocols.prometheus.PostConnectorScheduleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PostConnectorScheduleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PostConnectorScheduleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PostConnectorScheduleResponse.displayName = 'proto.protocols.prometheus.PostConnectorScheduleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutConnectorScheduleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PutConnectorScheduleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutConnectorScheduleRequest.displayName = 'proto.protocols.prometheus.PutConnectorScheduleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutConnectorScheduleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PutConnectorScheduleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutConnectorScheduleResponse.displayName = 'proto.protocols.prometheus.PutConnectorScheduleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.DeleteConnectorScheduleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.DeleteConnectorScheduleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.DeleteConnectorScheduleResponse.displayName = 'proto.protocols.prometheus.DeleteConnectorScheduleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetWeatherResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.GetWeatherResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetWeatherResponse.displayName = 'proto.protocols.prometheus.GetWeatherResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetDepartmentResourceFolderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.GetDepartmentResourceFolderResponse.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.GetDepartmentResourceFolderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetDepartmentResourceFolderResponse.displayName = 'proto.protocols.prometheus.GetDepartmentResourceFolderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item.displayName = 'proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PostDepartmentResourceFolderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PostDepartmentResourceFolderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PostDepartmentResourceFolderRequest.displayName = 'proto.protocols.prometheus.PostDepartmentResourceFolderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PostDepartmentResourceFolderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PostDepartmentResourceFolderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PostDepartmentResourceFolderResponse.displayName = 'proto.protocols.prometheus.PostDepartmentResourceFolderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutDepartmentResourceFolderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.PutDepartmentResourceFolderRequest.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.PutDepartmentResourceFolderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutDepartmentResourceFolderRequest.displayName = 'proto.protocols.prometheus.PutDepartmentResourceFolderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutDepartmentResourceFolderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.PutDepartmentResourceFolderResponse.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.PutDepartmentResourceFolderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutDepartmentResourceFolderResponse.displayName = 'proto.protocols.prometheus.PutDepartmentResourceFolderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PatchDepartmentResourceFolderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PatchDepartmentResourceFolderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PatchDepartmentResourceFolderRequest.displayName = 'proto.protocols.prometheus.PatchDepartmentResourceFolderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PatchDepartmentResourceFolderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PatchDepartmentResourceFolderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PatchDepartmentResourceFolderResponse.displayName = 'proto.protocols.prometheus.PatchDepartmentResourceFolderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.DeleteDepartmentResourceFolderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.DeleteDepartmentResourceFolderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.DeleteDepartmentResourceFolderResponse.displayName = 'proto.protocols.prometheus.DeleteDepartmentResourceFolderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.DeleteDepartmentResourceFolderResourceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.DeleteDepartmentResourceFolderResourceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.DeleteDepartmentResourceFolderResourceResponse.displayName = 'proto.protocols.prometheus.DeleteDepartmentResourceFolderResourceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetDepartmentSceneFolderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.GetDepartmentSceneFolderResponse.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.GetDepartmentSceneFolderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetDepartmentSceneFolderResponse.displayName = 'proto.protocols.prometheus.GetDepartmentSceneFolderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item.displayName = 'proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PostDepartmentSceneFolderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PostDepartmentSceneFolderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PostDepartmentSceneFolderRequest.displayName = 'proto.protocols.prometheus.PostDepartmentSceneFolderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PostDepartmentSceneFolderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PostDepartmentSceneFolderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PostDepartmentSceneFolderResponse.displayName = 'proto.protocols.prometheus.PostDepartmentSceneFolderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutDepartmentSceneFolderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.PutDepartmentSceneFolderRequest.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.PutDepartmentSceneFolderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutDepartmentSceneFolderRequest.displayName = 'proto.protocols.prometheus.PutDepartmentSceneFolderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutDepartmentSceneFolderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.PutDepartmentSceneFolderResponse.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.PutDepartmentSceneFolderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutDepartmentSceneFolderResponse.displayName = 'proto.protocols.prometheus.PutDepartmentSceneFolderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PatchDepartmentSceneFolderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PatchDepartmentSceneFolderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PatchDepartmentSceneFolderRequest.displayName = 'proto.protocols.prometheus.PatchDepartmentSceneFolderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PatchDepartmentSceneFolderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PatchDepartmentSceneFolderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PatchDepartmentSceneFolderResponse.displayName = 'proto.protocols.prometheus.PatchDepartmentSceneFolderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.DeleteDepartmentSceneFolderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.DeleteDepartmentSceneFolderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.DeleteDepartmentSceneFolderResponse.displayName = 'proto.protocols.prometheus.DeleteDepartmentSceneFolderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetSceneFolderScenesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.GetSceneFolderScenesResponse.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.GetSceneFolderScenesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetSceneFolderScenesResponse.displayName = 'proto.protocols.prometheus.GetSceneFolderScenesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetResourceFolderResourcesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.GetResourceFolderResourcesResponse.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.GetResourceFolderResourcesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetResourceFolderResourcesResponse.displayName = 'proto.protocols.prometheus.GetResourceFolderResourcesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetSubtitleRssResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.GetSubtitleRssResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetSubtitleRssResponse.displayName = 'proto.protocols.prometheus.GetSubtitleRssResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetSceneNavigationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.GetSceneNavigationResponse.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.GetSceneNavigationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetSceneNavigationResponse.displayName = 'proto.protocols.prometheus.GetSceneNavigationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetValidateSceneResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.GetValidateSceneResponse.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.GetValidateSceneResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetValidateSceneResponse.displayName = 'proto.protocols.prometheus.GetValidateSceneResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetValidateResourceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.GetValidateResourceResponse.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.GetValidateResourceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetValidateResourceResponse.displayName = 'proto.protocols.prometheus.GetValidateResourceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetValidateResourceByResourceIdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.GetValidateResourceByResourceIdResponse.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.GetValidateResourceByResourceIdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetValidateResourceByResourceIdResponse.displayName = 'proto.protocols.prometheus.GetValidateResourceByResourceIdResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.PutResourceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.PutResourceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.PutResourceResponse.displayName = 'proto.protocols.prometheus.PutResourceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetResourceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocols.prometheus.GetResourceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetResourceResponse.displayName = 'proto.protocols.prometheus.GetResourceResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetResourcesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.GetResourcesResponse.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.GetResourcesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetResourcesResponse.displayName = 'proto.protocols.prometheus.GetResourcesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocols.prometheus.GetSceneByIdBlueprintV2Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.protocols.prometheus.GetSceneByIdBlueprintV2Response.repeatedFields_, null);
};
goog.inherits(proto.protocols.prometheus.GetSceneByIdBlueprintV2Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocols.prometheus.GetSceneByIdBlueprintV2Response.displayName = 'proto.protocols.prometheus.GetSceneByIdBlueprintV2Response';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetVersionRequiredResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetVersionRequiredResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetVersionRequiredResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetVersionRequiredResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && common_pb.MoonVersion.toObject(includeInstance, f),
    haveadmin: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetVersionRequiredResponse}
 */
proto.protocols.prometheus.GetVersionRequiredResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetVersionRequiredResponse;
  return proto.protocols.prometheus.GetVersionRequiredResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetVersionRequiredResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetVersionRequiredResponse}
 */
proto.protocols.prometheus.GetVersionRequiredResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.MoonVersion;
      reader.readMessage(value,common_pb.MoonVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHaveadmin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetVersionRequiredResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetVersionRequiredResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetVersionRequiredResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetVersionRequiredResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.MoonVersion.serializeBinaryToWriter
    );
  }
  f = message.getHaveadmin();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetVersionRequiredResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetVersionRequiredResponse} returns this
*/
proto.protocols.prometheus.GetVersionRequiredResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetVersionRequiredResponse} returns this
 */
proto.protocols.prometheus.GetVersionRequiredResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetVersionRequiredResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.MoonVersion version = 2;
 * @return {?proto.protocols.common.MoonVersion}
 */
proto.protocols.prometheus.GetVersionRequiredResponse.prototype.getVersion = function() {
  return /** @type{?proto.protocols.common.MoonVersion} */ (
    jspb.Message.getWrapperField(this, common_pb.MoonVersion, 2));
};


/**
 * @param {?proto.protocols.common.MoonVersion|undefined} value
 * @return {!proto.protocols.prometheus.GetVersionRequiredResponse} returns this
*/
proto.protocols.prometheus.GetVersionRequiredResponse.prototype.setVersion = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetVersionRequiredResponse} returns this
 */
proto.protocols.prometheus.GetVersionRequiredResponse.prototype.clearVersion = function() {
  return this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetVersionRequiredResponse.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool haveAdmin = 3;
 * @return {boolean}
 */
proto.protocols.prometheus.GetVersionRequiredResponse.prototype.getHaveadmin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocols.prometheus.GetVersionRequiredResponse} returns this
 */
proto.protocols.prometheus.GetVersionRequiredResponse.prototype.setHaveadmin = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.GetMemberResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetMemberResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetMemberResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetMemberResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetMemberResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    memberbasesList: jspb.Message.toObjectList(msg.getMemberbasesList(),
    common_pb.MemberBase.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetMemberResponse}
 */
proto.protocols.prometheus.GetMemberResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetMemberResponse;
  return proto.protocols.prometheus.GetMemberResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetMemberResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetMemberResponse}
 */
proto.protocols.prometheus.GetMemberResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.MemberBase;
      reader.readMessage(value,common_pb.MemberBase.deserializeBinaryFromReader);
      msg.addMemberbases(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetMemberResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetMemberResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetMemberResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetMemberResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getMemberbasesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_pb.MemberBase.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetMemberResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetMemberResponse} returns this
*/
proto.protocols.prometheus.GetMemberResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetMemberResponse} returns this
 */
proto.protocols.prometheus.GetMemberResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetMemberResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated protocols.common.MemberBase memberBases = 2;
 * @return {!Array<!proto.protocols.common.MemberBase>}
 */
proto.protocols.prometheus.GetMemberResponse.prototype.getMemberbasesList = function() {
  return /** @type{!Array<!proto.protocols.common.MemberBase>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.MemberBase, 2));
};


/**
 * @param {!Array<!proto.protocols.common.MemberBase>} value
 * @return {!proto.protocols.prometheus.GetMemberResponse} returns this
*/
proto.protocols.prometheus.GetMemberResponse.prototype.setMemberbasesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protocols.common.MemberBase=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocols.common.MemberBase}
 */
proto.protocols.prometheus.GetMemberResponse.prototype.addMemberbases = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protocols.common.MemberBase, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.GetMemberResponse} returns this
 */
proto.protocols.prometheus.GetMemberResponse.prototype.clearMemberbasesList = function() {
  return this.setMemberbasesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetMemberByIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetMemberByIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetMemberByIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetMemberByIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    member: (f = msg.getMember()) && common_pb.Member.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetMemberByIdResponse}
 */
proto.protocols.prometheus.GetMemberByIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetMemberByIdResponse;
  return proto.protocols.prometheus.GetMemberByIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetMemberByIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetMemberByIdResponse}
 */
proto.protocols.prometheus.GetMemberByIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Member;
      reader.readMessage(value,common_pb.Member.deserializeBinaryFromReader);
      msg.setMember(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetMemberByIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetMemberByIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetMemberByIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetMemberByIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getMember();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Member.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetMemberByIdResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetMemberByIdResponse} returns this
*/
proto.protocols.prometheus.GetMemberByIdResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetMemberByIdResponse} returns this
 */
proto.protocols.prometheus.GetMemberByIdResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetMemberByIdResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Member member = 2;
 * @return {?proto.protocols.common.Member}
 */
proto.protocols.prometheus.GetMemberByIdResponse.prototype.getMember = function() {
  return /** @type{?proto.protocols.common.Member} */ (
    jspb.Message.getWrapperField(this, common_pb.Member, 2));
};


/**
 * @param {?proto.protocols.common.Member|undefined} value
 * @return {!proto.protocols.prometheus.GetMemberByIdResponse} returns this
*/
proto.protocols.prometheus.GetMemberByIdResponse.prototype.setMember = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetMemberByIdResponse} returns this
 */
proto.protocols.prometheus.GetMemberByIdResponse.prototype.clearMember = function() {
  return this.setMember(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetMemberByIdResponse.prototype.hasMember = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutMemberResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutMemberResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutMemberResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutMemberResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    member: (f = msg.getMember()) && common_pb.Member.toObject(includeInstance, f),
    enceladusaddress: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutMemberResponse}
 */
proto.protocols.prometheus.PutMemberResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutMemberResponse;
  return proto.protocols.prometheus.PutMemberResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutMemberResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutMemberResponse}
 */
proto.protocols.prometheus.PutMemberResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Member;
      reader.readMessage(value,common_pb.Member.deserializeBinaryFromReader);
      msg.setMember(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnceladusaddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutMemberResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutMemberResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutMemberResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutMemberResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getMember();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Member.serializeBinaryToWriter
    );
  }
  f = message.getEnceladusaddress();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PutMemberResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PutMemberResponse} returns this
*/
proto.protocols.prometheus.PutMemberResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutMemberResponse} returns this
 */
proto.protocols.prometheus.PutMemberResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutMemberResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Member member = 2;
 * @return {?proto.protocols.common.Member}
 */
proto.protocols.prometheus.PutMemberResponse.prototype.getMember = function() {
  return /** @type{?proto.protocols.common.Member} */ (
    jspb.Message.getWrapperField(this, common_pb.Member, 2));
};


/**
 * @param {?proto.protocols.common.Member|undefined} value
 * @return {!proto.protocols.prometheus.PutMemberResponse} returns this
*/
proto.protocols.prometheus.PutMemberResponse.prototype.setMember = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutMemberResponse} returns this
 */
proto.protocols.prometheus.PutMemberResponse.prototype.clearMember = function() {
  return this.setMember(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutMemberResponse.prototype.hasMember = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string EnceladusAddress = 3;
 * @return {string}
 */
proto.protocols.prometheus.PutMemberResponse.prototype.getEnceladusaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocols.prometheus.PutMemberResponse} returns this
 */
proto.protocols.prometheus.PutMemberResponse.prototype.setEnceladusaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.DeleteMemberResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.DeleteMemberResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.DeleteMemberResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteMemberResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.DeleteMemberResponse}
 */
proto.protocols.prometheus.DeleteMemberResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.DeleteMemberResponse;
  return proto.protocols.prometheus.DeleteMemberResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.DeleteMemberResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.DeleteMemberResponse}
 */
proto.protocols.prometheus.DeleteMemberResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.DeleteMemberResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.DeleteMemberResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.DeleteMemberResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteMemberResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.DeleteMemberResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.DeleteMemberResponse} returns this
*/
proto.protocols.prometheus.DeleteMemberResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.DeleteMemberResponse} returns this
 */
proto.protocols.prometheus.DeleteMemberResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.DeleteMemberResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutMemberKindResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutMemberKindResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutMemberKindResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutMemberKindResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    memberbase: (f = msg.getMemberbase()) && common_pb.MemberBase.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutMemberKindResponse}
 */
proto.protocols.prometheus.PutMemberKindResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutMemberKindResponse;
  return proto.protocols.prometheus.PutMemberKindResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutMemberKindResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutMemberKindResponse}
 */
proto.protocols.prometheus.PutMemberKindResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.MemberBase;
      reader.readMessage(value,common_pb.MemberBase.deserializeBinaryFromReader);
      msg.setMemberbase(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutMemberKindResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutMemberKindResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutMemberKindResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutMemberKindResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getMemberbase();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.MemberBase.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PutMemberKindResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PutMemberKindResponse} returns this
*/
proto.protocols.prometheus.PutMemberKindResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutMemberKindResponse} returns this
 */
proto.protocols.prometheus.PutMemberKindResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutMemberKindResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.MemberBase memberBase = 2;
 * @return {?proto.protocols.common.MemberBase}
 */
proto.protocols.prometheus.PutMemberKindResponse.prototype.getMemberbase = function() {
  return /** @type{?proto.protocols.common.MemberBase} */ (
    jspb.Message.getWrapperField(this, common_pb.MemberBase, 2));
};


/**
 * @param {?proto.protocols.common.MemberBase|undefined} value
 * @return {!proto.protocols.prometheus.PutMemberKindResponse} returns this
*/
proto.protocols.prometheus.PutMemberKindResponse.prototype.setMemberbase = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutMemberKindResponse} returns this
 */
proto.protocols.prometheus.PutMemberKindResponse.prototype.clearMemberbase = function() {
  return this.setMemberbase(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutMemberKindResponse.prototype.hasMemberbase = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PostMemberPermissionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PostMemberPermissionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PostMemberPermissionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostMemberPermissionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    permission: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PostMemberPermissionRequest}
 */
proto.protocols.prometheus.PostMemberPermissionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PostMemberPermissionRequest;
  return proto.protocols.prometheus.PostMemberPermissionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PostMemberPermissionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PostMemberPermissionRequest}
 */
proto.protocols.prometheus.PostMemberPermissionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.protocols.common.MEMBER_PERMISSION_KIND} */ (reader.readEnum());
      msg.setPermission(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PostMemberPermissionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PostMemberPermissionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PostMemberPermissionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostMemberPermissionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPermission();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional protocols.common.MEMBER_PERMISSION_KIND permission = 1;
 * @return {!proto.protocols.common.MEMBER_PERMISSION_KIND}
 */
proto.protocols.prometheus.PostMemberPermissionRequest.prototype.getPermission = function() {
  return /** @type {!proto.protocols.common.MEMBER_PERMISSION_KIND} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.protocols.common.MEMBER_PERMISSION_KIND} value
 * @return {!proto.protocols.prometheus.PostMemberPermissionRequest} returns this
 */
proto.protocols.prometheus.PostMemberPermissionRequest.prototype.setPermission = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PostMemberPermissionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PostMemberPermissionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PostMemberPermissionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostMemberPermissionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    member: (f = msg.getMember()) && common_pb.Member.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PostMemberPermissionResponse}
 */
proto.protocols.prometheus.PostMemberPermissionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PostMemberPermissionResponse;
  return proto.protocols.prometheus.PostMemberPermissionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PostMemberPermissionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PostMemberPermissionResponse}
 */
proto.protocols.prometheus.PostMemberPermissionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Member;
      reader.readMessage(value,common_pb.Member.deserializeBinaryFromReader);
      msg.setMember(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PostMemberPermissionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PostMemberPermissionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PostMemberPermissionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostMemberPermissionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getMember();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Member.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PostMemberPermissionResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PostMemberPermissionResponse} returns this
*/
proto.protocols.prometheus.PostMemberPermissionResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PostMemberPermissionResponse} returns this
 */
proto.protocols.prometheus.PostMemberPermissionResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PostMemberPermissionResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Member member = 2;
 * @return {?proto.protocols.common.Member}
 */
proto.protocols.prometheus.PostMemberPermissionResponse.prototype.getMember = function() {
  return /** @type{?proto.protocols.common.Member} */ (
    jspb.Message.getWrapperField(this, common_pb.Member, 2));
};


/**
 * @param {?proto.protocols.common.Member|undefined} value
 * @return {!proto.protocols.prometheus.PostMemberPermissionResponse} returns this
*/
proto.protocols.prometheus.PostMemberPermissionResponse.prototype.setMember = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PostMemberPermissionResponse} returns this
 */
proto.protocols.prometheus.PostMemberPermissionResponse.prototype.clearMember = function() {
  return this.setMember(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PostMemberPermissionResponse.prototype.hasMember = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.PutMemberPermissionRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutMemberPermissionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutMemberPermissionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutMemberPermissionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutMemberPermissionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    permissionsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutMemberPermissionRequest}
 */
proto.protocols.prometheus.PutMemberPermissionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutMemberPermissionRequest;
  return proto.protocols.prometheus.PutMemberPermissionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutMemberPermissionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutMemberPermissionRequest}
 */
proto.protocols.prometheus.PutMemberPermissionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<!proto.protocols.common.MEMBER_PERMISSION_KIND>} */ (reader.readPackedEnum());
      msg.setPermissionsList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutMemberPermissionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutMemberPermissionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutMemberPermissionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutMemberPermissionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPermissionsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      1,
      f
    );
  }
};


/**
 * repeated protocols.common.MEMBER_PERMISSION_KIND permissions = 1;
 * @return {!Array<!proto.protocols.common.MEMBER_PERMISSION_KIND>}
 */
proto.protocols.prometheus.PutMemberPermissionRequest.prototype.getPermissionsList = function() {
  return /** @type {!Array<!proto.protocols.common.MEMBER_PERMISSION_KIND>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.protocols.common.MEMBER_PERMISSION_KIND>} value
 * @return {!proto.protocols.prometheus.PutMemberPermissionRequest} returns this
 */
proto.protocols.prometheus.PutMemberPermissionRequest.prototype.setPermissionsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.protocols.common.MEMBER_PERMISSION_KIND} value
 * @param {number=} opt_index
 * @return {!proto.protocols.prometheus.PutMemberPermissionRequest} returns this
 */
proto.protocols.prometheus.PutMemberPermissionRequest.prototype.addPermissions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.PutMemberPermissionRequest} returns this
 */
proto.protocols.prometheus.PutMemberPermissionRequest.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutMemberPermissionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutMemberPermissionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutMemberPermissionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutMemberPermissionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    member: (f = msg.getMember()) && common_pb.Member.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutMemberPermissionResponse}
 */
proto.protocols.prometheus.PutMemberPermissionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutMemberPermissionResponse;
  return proto.protocols.prometheus.PutMemberPermissionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutMemberPermissionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutMemberPermissionResponse}
 */
proto.protocols.prometheus.PutMemberPermissionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Member;
      reader.readMessage(value,common_pb.Member.deserializeBinaryFromReader);
      msg.setMember(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutMemberPermissionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutMemberPermissionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutMemberPermissionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutMemberPermissionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getMember();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Member.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PutMemberPermissionResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PutMemberPermissionResponse} returns this
*/
proto.protocols.prometheus.PutMemberPermissionResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutMemberPermissionResponse} returns this
 */
proto.protocols.prometheus.PutMemberPermissionResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutMemberPermissionResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Member member = 2;
 * @return {?proto.protocols.common.Member}
 */
proto.protocols.prometheus.PutMemberPermissionResponse.prototype.getMember = function() {
  return /** @type{?proto.protocols.common.Member} */ (
    jspb.Message.getWrapperField(this, common_pb.Member, 2));
};


/**
 * @param {?proto.protocols.common.Member|undefined} value
 * @return {!proto.protocols.prometheus.PutMemberPermissionResponse} returns this
*/
proto.protocols.prometheus.PutMemberPermissionResponse.prototype.setMember = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutMemberPermissionResponse} returns this
 */
proto.protocols.prometheus.PutMemberPermissionResponse.prototype.clearMember = function() {
  return this.setMember(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutMemberPermissionResponse.prototype.hasMember = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.DeleteMemberPermissionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.DeleteMemberPermissionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.DeleteMemberPermissionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteMemberPermissionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    memberid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    memberpermissionid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.DeleteMemberPermissionRequest}
 */
proto.protocols.prometheus.DeleteMemberPermissionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.DeleteMemberPermissionRequest;
  return proto.protocols.prometheus.DeleteMemberPermissionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.DeleteMemberPermissionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.DeleteMemberPermissionRequest}
 */
proto.protocols.prometheus.DeleteMemberPermissionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMemberid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMemberpermissionid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.DeleteMemberPermissionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.DeleteMemberPermissionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.DeleteMemberPermissionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteMemberPermissionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMemberid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getMemberpermissionid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 memberId = 1;
 * @return {number}
 */
proto.protocols.prometheus.DeleteMemberPermissionRequest.prototype.getMemberid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocols.prometheus.DeleteMemberPermissionRequest} returns this
 */
proto.protocols.prometheus.DeleteMemberPermissionRequest.prototype.setMemberid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 memberPermissionId = 2;
 * @return {number}
 */
proto.protocols.prometheus.DeleteMemberPermissionRequest.prototype.getMemberpermissionid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocols.prometheus.DeleteMemberPermissionRequest} returns this
 */
proto.protocols.prometheus.DeleteMemberPermissionRequest.prototype.setMemberpermissionid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.DeleteMemberPermissionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.DeleteMemberPermissionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.DeleteMemberPermissionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteMemberPermissionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    member: (f = msg.getMember()) && common_pb.Member.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.DeleteMemberPermissionResponse}
 */
proto.protocols.prometheus.DeleteMemberPermissionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.DeleteMemberPermissionResponse;
  return proto.protocols.prometheus.DeleteMemberPermissionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.DeleteMemberPermissionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.DeleteMemberPermissionResponse}
 */
proto.protocols.prometheus.DeleteMemberPermissionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Member;
      reader.readMessage(value,common_pb.Member.deserializeBinaryFromReader);
      msg.setMember(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.DeleteMemberPermissionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.DeleteMemberPermissionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.DeleteMemberPermissionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteMemberPermissionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getMember();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Member.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.DeleteMemberPermissionResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.DeleteMemberPermissionResponse} returns this
*/
proto.protocols.prometheus.DeleteMemberPermissionResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.DeleteMemberPermissionResponse} returns this
 */
proto.protocols.prometheus.DeleteMemberPermissionResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.DeleteMemberPermissionResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Member member = 2;
 * @return {?proto.protocols.common.Member}
 */
proto.protocols.prometheus.DeleteMemberPermissionResponse.prototype.getMember = function() {
  return /** @type{?proto.protocols.common.Member} */ (
    jspb.Message.getWrapperField(this, common_pb.Member, 2));
};


/**
 * @param {?proto.protocols.common.Member|undefined} value
 * @return {!proto.protocols.prometheus.DeleteMemberPermissionResponse} returns this
*/
proto.protocols.prometheus.DeleteMemberPermissionResponse.prototype.setMember = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.DeleteMemberPermissionResponse} returns this
 */
proto.protocols.prometheus.DeleteMemberPermissionResponse.prototype.clearMember = function() {
  return this.setMember(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.DeleteMemberPermissionResponse.prototype.hasMember = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.GetAccountResponse.repeatedFields_ = [3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetAccountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetAccountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetAccountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetAccountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    kind: jspb.Message.getFieldWithDefault(msg, 2, 0),
    permissionsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    departmentidsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetAccountResponse}
 */
proto.protocols.prometheus.GetAccountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetAccountResponse;
  return proto.protocols.prometheus.GetAccountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetAccountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetAccountResponse}
 */
proto.protocols.prometheus.GetAccountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = /** @type {!proto.protocols.common.MEMBER_KIND} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 3:
      var value = /** @type {!Array<!proto.protocols.common.MEMBER_PERMISSION_KIND>} */ (reader.readPackedEnum());
      msg.setPermissionsList(value);
      break;
    case 4:
      var value = /** @type {!Array<number>} */ (reader.readPackedInt64());
      msg.setDepartmentidsList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetAccountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetAccountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetAccountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetAccountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getPermissionsList();
  if (f.length > 0) {
    writer.writePackedEnum(
      3,
      f
    );
  }
  f = message.getDepartmentidsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      4,
      f
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetAccountResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetAccountResponse} returns this
*/
proto.protocols.prometheus.GetAccountResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetAccountResponse} returns this
 */
proto.protocols.prometheus.GetAccountResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetAccountResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.MEMBER_KIND kind = 2;
 * @return {!proto.protocols.common.MEMBER_KIND}
 */
proto.protocols.prometheus.GetAccountResponse.prototype.getKind = function() {
  return /** @type {!proto.protocols.common.MEMBER_KIND} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.protocols.common.MEMBER_KIND} value
 * @return {!proto.protocols.prometheus.GetAccountResponse} returns this
 */
proto.protocols.prometheus.GetAccountResponse.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * repeated protocols.common.MEMBER_PERMISSION_KIND permissions = 3;
 * @return {!Array<!proto.protocols.common.MEMBER_PERMISSION_KIND>}
 */
proto.protocols.prometheus.GetAccountResponse.prototype.getPermissionsList = function() {
  return /** @type {!Array<!proto.protocols.common.MEMBER_PERMISSION_KIND>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<!proto.protocols.common.MEMBER_PERMISSION_KIND>} value
 * @return {!proto.protocols.prometheus.GetAccountResponse} returns this
 */
proto.protocols.prometheus.GetAccountResponse.prototype.setPermissionsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!proto.protocols.common.MEMBER_PERMISSION_KIND} value
 * @param {number=} opt_index
 * @return {!proto.protocols.prometheus.GetAccountResponse} returns this
 */
proto.protocols.prometheus.GetAccountResponse.prototype.addPermissions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.GetAccountResponse} returns this
 */
proto.protocols.prometheus.GetAccountResponse.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
};


/**
 * repeated int64 departmentIds = 4;
 * @return {!Array<number>}
 */
proto.protocols.prometheus.GetAccountResponse.prototype.getDepartmentidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protocols.prometheus.GetAccountResponse} returns this
 */
proto.protocols.prometheus.GetAccountResponse.prototype.setDepartmentidsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protocols.prometheus.GetAccountResponse} returns this
 */
proto.protocols.prometheus.GetAccountResponse.prototype.addDepartmentids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.GetAccountResponse} returns this
 */
proto.protocols.prometheus.GetAccountResponse.prototype.clearDepartmentidsList = function() {
  return this.setDepartmentidsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PostAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PostAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PostAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    email: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, ""),
    memberkind: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PostAccountRequest}
 */
proto.protocols.prometheus.PostAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PostAccountRequest;
  return proto.protocols.prometheus.PostAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PostAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PostAccountRequest}
 */
proto.protocols.prometheus.PostAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 3:
      var value = /** @type {!proto.protocols.common.MEMBER_KIND} */ (reader.readEnum());
      msg.setMemberkind(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PostAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PostAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PostAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMemberkind();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string email = 1;
 * @return {string}
 */
proto.protocols.prometheus.PostAccountRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocols.prometheus.PostAccountRequest} returns this
 */
proto.protocols.prometheus.PostAccountRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.protocols.prometheus.PostAccountRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocols.prometheus.PostAccountRequest} returns this
 */
proto.protocols.prometheus.PostAccountRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional protocols.common.MEMBER_KIND memberKind = 3;
 * @return {!proto.protocols.common.MEMBER_KIND}
 */
proto.protocols.prometheus.PostAccountRequest.prototype.getMemberkind = function() {
  return /** @type {!proto.protocols.common.MEMBER_KIND} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.protocols.common.MEMBER_KIND} value
 * @return {!proto.protocols.prometheus.PostAccountRequest} returns this
 */
proto.protocols.prometheus.PostAccountRequest.prototype.setMemberkind = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PostAccountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PostAccountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PostAccountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostAccountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PostAccountResponse}
 */
proto.protocols.prometheus.PostAccountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PostAccountResponse;
  return proto.protocols.prometheus.PostAccountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PostAccountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PostAccountResponse}
 */
proto.protocols.prometheus.PostAccountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PostAccountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PostAccountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PostAccountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostAccountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PostAccountResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PostAccountResponse} returns this
*/
proto.protocols.prometheus.PostAccountResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PostAccountResponse} returns this
 */
proto.protocols.prometheus.PostAccountResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PostAccountResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    email: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutAccountRequest}
 */
proto.protocols.prometheus.PutAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutAccountRequest;
  return proto.protocols.prometheus.PutAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutAccountRequest}
 */
proto.protocols.prometheus.PutAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string email = 1;
 * @return {string}
 */
proto.protocols.prometheus.PutAccountRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocols.prometheus.PutAccountRequest} returns this
 */
proto.protocols.prometheus.PutAccountRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.protocols.prometheus.PutAccountRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocols.prometheus.PutAccountRequest} returns this
 */
proto.protocols.prometheus.PutAccountRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutAccountResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutAccountResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutAccountResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutAccountResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    token: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutAccountResponse}
 */
proto.protocols.prometheus.PutAccountResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutAccountResponse;
  return proto.protocols.prometheus.PutAccountResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutAccountResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutAccountResponse}
 */
proto.protocols.prometheus.PutAccountResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutAccountResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutAccountResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutAccountResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutAccountResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PutAccountResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PutAccountResponse} returns this
*/
proto.protocols.prometheus.PutAccountResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutAccountResponse} returns this
 */
proto.protocols.prometheus.PutAccountResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutAccountResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string token = 2;
 * @return {string}
 */
proto.protocols.prometheus.PutAccountResponse.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocols.prometheus.PutAccountResponse} returns this
 */
proto.protocols.prometheus.PutAccountResponse.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetDepartmentByIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetDepartmentByIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetDepartmentByIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetDepartmentByIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    department: (f = msg.getDepartment()) && common_pb.Department.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetDepartmentByIdResponse}
 */
proto.protocols.prometheus.GetDepartmentByIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetDepartmentByIdResponse;
  return proto.protocols.prometheus.GetDepartmentByIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetDepartmentByIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetDepartmentByIdResponse}
 */
proto.protocols.prometheus.GetDepartmentByIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Department;
      reader.readMessage(value,common_pb.Department.deserializeBinaryFromReader);
      msg.setDepartment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetDepartmentByIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetDepartmentByIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetDepartmentByIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetDepartmentByIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getDepartment();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Department.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetDepartmentByIdResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetDepartmentByIdResponse} returns this
*/
proto.protocols.prometheus.GetDepartmentByIdResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetDepartmentByIdResponse} returns this
 */
proto.protocols.prometheus.GetDepartmentByIdResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetDepartmentByIdResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Department department = 2;
 * @return {?proto.protocols.common.Department}
 */
proto.protocols.prometheus.GetDepartmentByIdResponse.prototype.getDepartment = function() {
  return /** @type{?proto.protocols.common.Department} */ (
    jspb.Message.getWrapperField(this, common_pb.Department, 2));
};


/**
 * @param {?proto.protocols.common.Department|undefined} value
 * @return {!proto.protocols.prometheus.GetDepartmentByIdResponse} returns this
*/
proto.protocols.prometheus.GetDepartmentByIdResponse.prototype.setDepartment = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetDepartmentByIdResponse} returns this
 */
proto.protocols.prometheus.GetDepartmentByIdResponse.prototype.clearDepartment = function() {
  return this.setDepartment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetDepartmentByIdResponse.prototype.hasDepartment = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutDepartmentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutDepartmentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutDepartmentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutDepartmentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    department: (f = msg.getDepartment()) && common_pb.Department.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutDepartmentRequest}
 */
proto.protocols.prometheus.PutDepartmentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutDepartmentRequest;
  return proto.protocols.prometheus.PutDepartmentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutDepartmentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutDepartmentRequest}
 */
proto.protocols.prometheus.PutDepartmentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.Department;
      reader.readMessage(value,common_pb.Department.deserializeBinaryFromReader);
      msg.setDepartment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutDepartmentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutDepartmentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutDepartmentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutDepartmentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDepartment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.Department.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.Department department = 1;
 * @return {?proto.protocols.common.Department}
 */
proto.protocols.prometheus.PutDepartmentRequest.prototype.getDepartment = function() {
  return /** @type{?proto.protocols.common.Department} */ (
    jspb.Message.getWrapperField(this, common_pb.Department, 1));
};


/**
 * @param {?proto.protocols.common.Department|undefined} value
 * @return {!proto.protocols.prometheus.PutDepartmentRequest} returns this
*/
proto.protocols.prometheus.PutDepartmentRequest.prototype.setDepartment = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutDepartmentRequest} returns this
 */
proto.protocols.prometheus.PutDepartmentRequest.prototype.clearDepartment = function() {
  return this.setDepartment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutDepartmentRequest.prototype.hasDepartment = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutDepartmentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutDepartmentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutDepartmentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutDepartmentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    department: (f = msg.getDepartment()) && common_pb.Department.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutDepartmentResponse}
 */
proto.protocols.prometheus.PutDepartmentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutDepartmentResponse;
  return proto.protocols.prometheus.PutDepartmentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutDepartmentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutDepartmentResponse}
 */
proto.protocols.prometheus.PutDepartmentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Department;
      reader.readMessage(value,common_pb.Department.deserializeBinaryFromReader);
      msg.setDepartment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutDepartmentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutDepartmentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutDepartmentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutDepartmentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getDepartment();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Department.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PutDepartmentResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PutDepartmentResponse} returns this
*/
proto.protocols.prometheus.PutDepartmentResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutDepartmentResponse} returns this
 */
proto.protocols.prometheus.PutDepartmentResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutDepartmentResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Department department = 2;
 * @return {?proto.protocols.common.Department}
 */
proto.protocols.prometheus.PutDepartmentResponse.prototype.getDepartment = function() {
  return /** @type{?proto.protocols.common.Department} */ (
    jspb.Message.getWrapperField(this, common_pb.Department, 2));
};


/**
 * @param {?proto.protocols.common.Department|undefined} value
 * @return {!proto.protocols.prometheus.PutDepartmentResponse} returns this
*/
proto.protocols.prometheus.PutDepartmentResponse.prototype.setDepartment = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutDepartmentResponse} returns this
 */
proto.protocols.prometheus.PutDepartmentResponse.prototype.clearDepartment = function() {
  return this.setDepartment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutDepartmentResponse.prototype.hasDepartment = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.GetDepartmentNodeResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetDepartmentNodeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetDepartmentNodeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetDepartmentNodeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetDepartmentNodeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    nodesList: jspb.Message.toObjectList(msg.getNodesList(),
    common_pb.DepartmentNode.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetDepartmentNodeResponse}
 */
proto.protocols.prometheus.GetDepartmentNodeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetDepartmentNodeResponse;
  return proto.protocols.prometheus.GetDepartmentNodeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetDepartmentNodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetDepartmentNodeResponse}
 */
proto.protocols.prometheus.GetDepartmentNodeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.DepartmentNode;
      reader.readMessage(value,common_pb.DepartmentNode.deserializeBinaryFromReader);
      msg.addNodes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetDepartmentNodeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetDepartmentNodeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetDepartmentNodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetDepartmentNodeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getNodesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_pb.DepartmentNode.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetDepartmentNodeResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetDepartmentNodeResponse} returns this
*/
proto.protocols.prometheus.GetDepartmentNodeResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetDepartmentNodeResponse} returns this
 */
proto.protocols.prometheus.GetDepartmentNodeResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetDepartmentNodeResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated protocols.common.DepartmentNode nodes = 2;
 * @return {!Array<!proto.protocols.common.DepartmentNode>}
 */
proto.protocols.prometheus.GetDepartmentNodeResponse.prototype.getNodesList = function() {
  return /** @type{!Array<!proto.protocols.common.DepartmentNode>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.DepartmentNode, 2));
};


/**
 * @param {!Array<!proto.protocols.common.DepartmentNode>} value
 * @return {!proto.protocols.prometheus.GetDepartmentNodeResponse} returns this
*/
proto.protocols.prometheus.GetDepartmentNodeResponse.prototype.setNodesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protocols.common.DepartmentNode=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocols.common.DepartmentNode}
 */
proto.protocols.prometheus.GetDepartmentNodeResponse.prototype.addNodes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protocols.common.DepartmentNode, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.GetDepartmentNodeResponse} returns this
 */
proto.protocols.prometheus.GetDepartmentNodeResponse.prototype.clearNodesList = function() {
  return this.setNodesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PostDepartmentNodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PostDepartmentNodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PostDepartmentNodeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostDepartmentNodeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parentdepartmentnodeid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    order: jspb.Message.getFieldWithDefault(msg, 2, 0),
    departmentname: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PostDepartmentNodeRequest}
 */
proto.protocols.prometheus.PostDepartmentNodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PostDepartmentNodeRequest;
  return proto.protocols.prometheus.PostDepartmentNodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PostDepartmentNodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PostDepartmentNodeRequest}
 */
proto.protocols.prometheus.PostDepartmentNodeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setParentdepartmentnodeid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOrder(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDepartmentname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PostDepartmentNodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PostDepartmentNodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PostDepartmentNodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostDepartmentNodeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParentdepartmentnodeid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getOrder();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getDepartmentname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 parentDepartmentNodeId = 1;
 * @return {number}
 */
proto.protocols.prometheus.PostDepartmentNodeRequest.prototype.getParentdepartmentnodeid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocols.prometheus.PostDepartmentNodeRequest} returns this
 */
proto.protocols.prometheus.PostDepartmentNodeRequest.prototype.setParentdepartmentnodeid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 order = 2;
 * @return {number}
 */
proto.protocols.prometheus.PostDepartmentNodeRequest.prototype.getOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocols.prometheus.PostDepartmentNodeRequest} returns this
 */
proto.protocols.prometheus.PostDepartmentNodeRequest.prototype.setOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string departmentName = 3;
 * @return {string}
 */
proto.protocols.prometheus.PostDepartmentNodeRequest.prototype.getDepartmentname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocols.prometheus.PostDepartmentNodeRequest} returns this
 */
proto.protocols.prometheus.PostDepartmentNodeRequest.prototype.setDepartmentname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PostDepartmentNodeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PostDepartmentNodeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PostDepartmentNodeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostDepartmentNodeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    node: (f = msg.getNode()) && common_pb.DepartmentNode.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PostDepartmentNodeResponse}
 */
proto.protocols.prometheus.PostDepartmentNodeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PostDepartmentNodeResponse;
  return proto.protocols.prometheus.PostDepartmentNodeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PostDepartmentNodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PostDepartmentNodeResponse}
 */
proto.protocols.prometheus.PostDepartmentNodeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.DepartmentNode;
      reader.readMessage(value,common_pb.DepartmentNode.deserializeBinaryFromReader);
      msg.setNode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PostDepartmentNodeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PostDepartmentNodeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PostDepartmentNodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostDepartmentNodeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getNode();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.DepartmentNode.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PostDepartmentNodeResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PostDepartmentNodeResponse} returns this
*/
proto.protocols.prometheus.PostDepartmentNodeResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PostDepartmentNodeResponse} returns this
 */
proto.protocols.prometheus.PostDepartmentNodeResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PostDepartmentNodeResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.DepartmentNode node = 2;
 * @return {?proto.protocols.common.DepartmentNode}
 */
proto.protocols.prometheus.PostDepartmentNodeResponse.prototype.getNode = function() {
  return /** @type{?proto.protocols.common.DepartmentNode} */ (
    jspb.Message.getWrapperField(this, common_pb.DepartmentNode, 2));
};


/**
 * @param {?proto.protocols.common.DepartmentNode|undefined} value
 * @return {!proto.protocols.prometheus.PostDepartmentNodeResponse} returns this
*/
proto.protocols.prometheus.PostDepartmentNodeResponse.prototype.setNode = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PostDepartmentNodeResponse} returns this
 */
proto.protocols.prometheus.PostDepartmentNodeResponse.prototype.clearNode = function() {
  return this.setNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PostDepartmentNodeResponse.prototype.hasNode = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutDepartmentNodeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutDepartmentNodeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutDepartmentNodeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutDepartmentNodeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    parentdepartmentnodeid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutDepartmentNodeRequest}
 */
proto.protocols.prometheus.PutDepartmentNodeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutDepartmentNodeRequest;
  return proto.protocols.prometheus.PutDepartmentNodeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutDepartmentNodeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutDepartmentNodeRequest}
 */
proto.protocols.prometheus.PutDepartmentNodeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setParentdepartmentnodeid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutDepartmentNodeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutDepartmentNodeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutDepartmentNodeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutDepartmentNodeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParentdepartmentnodeid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 parentDepartmentNodeId = 1;
 * @return {number}
 */
proto.protocols.prometheus.PutDepartmentNodeRequest.prototype.getParentdepartmentnodeid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocols.prometheus.PutDepartmentNodeRequest} returns this
 */
proto.protocols.prometheus.PutDepartmentNodeRequest.prototype.setParentdepartmentnodeid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutDepartmentNodeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutDepartmentNodeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutDepartmentNodeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutDepartmentNodeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    node: (f = msg.getNode()) && common_pb.DepartmentNode.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutDepartmentNodeResponse}
 */
proto.protocols.prometheus.PutDepartmentNodeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutDepartmentNodeResponse;
  return proto.protocols.prometheus.PutDepartmentNodeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutDepartmentNodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutDepartmentNodeResponse}
 */
proto.protocols.prometheus.PutDepartmentNodeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.DepartmentNode;
      reader.readMessage(value,common_pb.DepartmentNode.deserializeBinaryFromReader);
      msg.setNode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutDepartmentNodeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutDepartmentNodeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutDepartmentNodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutDepartmentNodeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getNode();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.DepartmentNode.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PutDepartmentNodeResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PutDepartmentNodeResponse} returns this
*/
proto.protocols.prometheus.PutDepartmentNodeResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutDepartmentNodeResponse} returns this
 */
proto.protocols.prometheus.PutDepartmentNodeResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutDepartmentNodeResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.DepartmentNode node = 2;
 * @return {?proto.protocols.common.DepartmentNode}
 */
proto.protocols.prometheus.PutDepartmentNodeResponse.prototype.getNode = function() {
  return /** @type{?proto.protocols.common.DepartmentNode} */ (
    jspb.Message.getWrapperField(this, common_pb.DepartmentNode, 2));
};


/**
 * @param {?proto.protocols.common.DepartmentNode|undefined} value
 * @return {!proto.protocols.prometheus.PutDepartmentNodeResponse} returns this
*/
proto.protocols.prometheus.PutDepartmentNodeResponse.prototype.setNode = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutDepartmentNodeResponse} returns this
 */
proto.protocols.prometheus.PutDepartmentNodeResponse.prototype.clearNode = function() {
  return this.setNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutDepartmentNodeResponse.prototype.hasNode = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.DeleteDepartmentNodeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.DeleteDepartmentNodeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.DeleteDepartmentNodeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteDepartmentNodeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.DeleteDepartmentNodeResponse}
 */
proto.protocols.prometheus.DeleteDepartmentNodeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.DeleteDepartmentNodeResponse;
  return proto.protocols.prometheus.DeleteDepartmentNodeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.DeleteDepartmentNodeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.DeleteDepartmentNodeResponse}
 */
proto.protocols.prometheus.DeleteDepartmentNodeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.DeleteDepartmentNodeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.DeleteDepartmentNodeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.DeleteDepartmentNodeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteDepartmentNodeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.DeleteDepartmentNodeResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.DeleteDepartmentNodeResponse} returns this
*/
proto.protocols.prometheus.DeleteDepartmentNodeResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.DeleteDepartmentNodeResponse} returns this
 */
proto.protocols.prometheus.DeleteDepartmentNodeResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.DeleteDepartmentNodeResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.GetMemberRecordResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetMemberRecordResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetMemberRecordResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetMemberRecordResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetMemberRecordResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    memberrecordsList: jspb.Message.toObjectList(msg.getMemberrecordsList(),
    common_pb.MemberRecord.toObject, includeInstance),
    itemscount: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetMemberRecordResponse}
 */
proto.protocols.prometheus.GetMemberRecordResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetMemberRecordResponse;
  return proto.protocols.prometheus.GetMemberRecordResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetMemberRecordResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetMemberRecordResponse}
 */
proto.protocols.prometheus.GetMemberRecordResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.MemberRecord;
      reader.readMessage(value,common_pb.MemberRecord.deserializeBinaryFromReader);
      msg.addMemberrecords(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setItemscount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetMemberRecordResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetMemberRecordResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetMemberRecordResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetMemberRecordResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getMemberrecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_pb.MemberRecord.serializeBinaryToWriter
    );
  }
  f = message.getItemscount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetMemberRecordResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetMemberRecordResponse} returns this
*/
proto.protocols.prometheus.GetMemberRecordResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetMemberRecordResponse} returns this
 */
proto.protocols.prometheus.GetMemberRecordResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetMemberRecordResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated protocols.common.MemberRecord memberRecords = 2;
 * @return {!Array<!proto.protocols.common.MemberRecord>}
 */
proto.protocols.prometheus.GetMemberRecordResponse.prototype.getMemberrecordsList = function() {
  return /** @type{!Array<!proto.protocols.common.MemberRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.MemberRecord, 2));
};


/**
 * @param {!Array<!proto.protocols.common.MemberRecord>} value
 * @return {!proto.protocols.prometheus.GetMemberRecordResponse} returns this
*/
proto.protocols.prometheus.GetMemberRecordResponse.prototype.setMemberrecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protocols.common.MemberRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocols.common.MemberRecord}
 */
proto.protocols.prometheus.GetMemberRecordResponse.prototype.addMemberrecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protocols.common.MemberRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.GetMemberRecordResponse} returns this
 */
proto.protocols.prometheus.GetMemberRecordResponse.prototype.clearMemberrecordsList = function() {
  return this.setMemberrecordsList([]);
};


/**
 * optional int32 itemsCount = 3;
 * @return {number}
 */
proto.protocols.prometheus.GetMemberRecordResponse.prototype.getItemscount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocols.prometheus.GetMemberRecordResponse} returns this
 */
proto.protocols.prometheus.GetMemberRecordResponse.prototype.setItemscount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.GetMemberRecordByMemberIdResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetMemberRecordByMemberIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetMemberRecordByMemberIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetMemberRecordByMemberIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetMemberRecordByMemberIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    memberrecordsList: jspb.Message.toObjectList(msg.getMemberrecordsList(),
    common_pb.MemberRecord.toObject, includeInstance),
    itemscount: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetMemberRecordByMemberIdResponse}
 */
proto.protocols.prometheus.GetMemberRecordByMemberIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetMemberRecordByMemberIdResponse;
  return proto.protocols.prometheus.GetMemberRecordByMemberIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetMemberRecordByMemberIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetMemberRecordByMemberIdResponse}
 */
proto.protocols.prometheus.GetMemberRecordByMemberIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.MemberRecord;
      reader.readMessage(value,common_pb.MemberRecord.deserializeBinaryFromReader);
      msg.addMemberrecords(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setItemscount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetMemberRecordByMemberIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetMemberRecordByMemberIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetMemberRecordByMemberIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetMemberRecordByMemberIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getMemberrecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_pb.MemberRecord.serializeBinaryToWriter
    );
  }
  f = message.getItemscount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetMemberRecordByMemberIdResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetMemberRecordByMemberIdResponse} returns this
*/
proto.protocols.prometheus.GetMemberRecordByMemberIdResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetMemberRecordByMemberIdResponse} returns this
 */
proto.protocols.prometheus.GetMemberRecordByMemberIdResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetMemberRecordByMemberIdResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated protocols.common.MemberRecord memberRecords = 2;
 * @return {!Array<!proto.protocols.common.MemberRecord>}
 */
proto.protocols.prometheus.GetMemberRecordByMemberIdResponse.prototype.getMemberrecordsList = function() {
  return /** @type{!Array<!proto.protocols.common.MemberRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.MemberRecord, 2));
};


/**
 * @param {!Array<!proto.protocols.common.MemberRecord>} value
 * @return {!proto.protocols.prometheus.GetMemberRecordByMemberIdResponse} returns this
*/
proto.protocols.prometheus.GetMemberRecordByMemberIdResponse.prototype.setMemberrecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protocols.common.MemberRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocols.common.MemberRecord}
 */
proto.protocols.prometheus.GetMemberRecordByMemberIdResponse.prototype.addMemberrecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protocols.common.MemberRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.GetMemberRecordByMemberIdResponse} returns this
 */
proto.protocols.prometheus.GetMemberRecordByMemberIdResponse.prototype.clearMemberrecordsList = function() {
  return this.setMemberrecordsList([]);
};


/**
 * optional int32 itemsCount = 3;
 * @return {number}
 */
proto.protocols.prometheus.GetMemberRecordByMemberIdResponse.prototype.getItemscount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocols.prometheus.GetMemberRecordByMemberIdResponse} returns this
 */
proto.protocols.prometheus.GetMemberRecordByMemberIdResponse.prototype.setItemscount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.GetSceneResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetSceneResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetSceneResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetSceneResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetSceneResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    scenebasesList: jspb.Message.toObjectList(msg.getScenebasesList(),
    common_pb.SceneBase.toObject, includeInstance),
    itemscount: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetSceneResponse}
 */
proto.protocols.prometheus.GetSceneResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetSceneResponse;
  return proto.protocols.prometheus.GetSceneResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetSceneResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetSceneResponse}
 */
proto.protocols.prometheus.GetSceneResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.SceneBase;
      reader.readMessage(value,common_pb.SceneBase.deserializeBinaryFromReader);
      msg.addScenebases(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setItemscount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetSceneResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetSceneResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetSceneResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetSceneResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getScenebasesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_pb.SceneBase.serializeBinaryToWriter
    );
  }
  f = message.getItemscount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetSceneResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetSceneResponse} returns this
*/
proto.protocols.prometheus.GetSceneResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetSceneResponse} returns this
 */
proto.protocols.prometheus.GetSceneResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetSceneResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated protocols.common.SceneBase sceneBases = 2;
 * @return {!Array<!proto.protocols.common.SceneBase>}
 */
proto.protocols.prometheus.GetSceneResponse.prototype.getScenebasesList = function() {
  return /** @type{!Array<!proto.protocols.common.SceneBase>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.SceneBase, 2));
};


/**
 * @param {!Array<!proto.protocols.common.SceneBase>} value
 * @return {!proto.protocols.prometheus.GetSceneResponse} returns this
*/
proto.protocols.prometheus.GetSceneResponse.prototype.setScenebasesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protocols.common.SceneBase=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocols.common.SceneBase}
 */
proto.protocols.prometheus.GetSceneResponse.prototype.addScenebases = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protocols.common.SceneBase, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.GetSceneResponse} returns this
 */
proto.protocols.prometheus.GetSceneResponse.prototype.clearScenebasesList = function() {
  return this.setScenebasesList([]);
};


/**
 * optional int32 itemsCount = 3;
 * @return {number}
 */
proto.protocols.prometheus.GetSceneResponse.prototype.getItemscount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocols.prometheus.GetSceneResponse} returns this
 */
proto.protocols.prometheus.GetSceneResponse.prototype.setItemscount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetSceneByIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetSceneByIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetSceneByIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetSceneByIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    scene: (f = msg.getScene()) && common_pb.Scene.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetSceneByIdResponse}
 */
proto.protocols.prometheus.GetSceneByIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetSceneByIdResponse;
  return proto.protocols.prometheus.GetSceneByIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetSceneByIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetSceneByIdResponse}
 */
proto.protocols.prometheus.GetSceneByIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Scene;
      reader.readMessage(value,common_pb.Scene.deserializeBinaryFromReader);
      msg.setScene(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetSceneByIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetSceneByIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetSceneByIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetSceneByIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getScene();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Scene.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetSceneByIdResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetSceneByIdResponse} returns this
*/
proto.protocols.prometheus.GetSceneByIdResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetSceneByIdResponse} returns this
 */
proto.protocols.prometheus.GetSceneByIdResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetSceneByIdResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Scene scene = 2;
 * @return {?proto.protocols.common.Scene}
 */
proto.protocols.prometheus.GetSceneByIdResponse.prototype.getScene = function() {
  return /** @type{?proto.protocols.common.Scene} */ (
    jspb.Message.getWrapperField(this, common_pb.Scene, 2));
};


/**
 * @param {?proto.protocols.common.Scene|undefined} value
 * @return {!proto.protocols.prometheus.GetSceneByIdResponse} returns this
*/
proto.protocols.prometheus.GetSceneByIdResponse.prototype.setScene = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetSceneByIdResponse} returns this
 */
proto.protocols.prometheus.GetSceneByIdResponse.prototype.clearScene = function() {
  return this.setScene(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetSceneByIdResponse.prototype.hasScene = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetSceneByIdBlueprintResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetSceneByIdBlueprintResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetSceneByIdBlueprintResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetSceneByIdBlueprintResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    scene: (f = msg.getScene()) && common_pb.Scene.toObject(includeInstance, f),
    blueprint: (f = msg.getBlueprint()) && common_pb.SceneBlueprint.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetSceneByIdBlueprintResponse}
 */
proto.protocols.prometheus.GetSceneByIdBlueprintResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetSceneByIdBlueprintResponse;
  return proto.protocols.prometheus.GetSceneByIdBlueprintResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetSceneByIdBlueprintResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetSceneByIdBlueprintResponse}
 */
proto.protocols.prometheus.GetSceneByIdBlueprintResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Scene;
      reader.readMessage(value,common_pb.Scene.deserializeBinaryFromReader);
      msg.setScene(value);
      break;
    case 3:
      var value = new common_pb.SceneBlueprint;
      reader.readMessage(value,common_pb.SceneBlueprint.deserializeBinaryFromReader);
      msg.setBlueprint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetSceneByIdBlueprintResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetSceneByIdBlueprintResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetSceneByIdBlueprintResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetSceneByIdBlueprintResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getScene();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Scene.serializeBinaryToWriter
    );
  }
  f = message.getBlueprint();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_pb.SceneBlueprint.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetSceneByIdBlueprintResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetSceneByIdBlueprintResponse} returns this
*/
proto.protocols.prometheus.GetSceneByIdBlueprintResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetSceneByIdBlueprintResponse} returns this
 */
proto.protocols.prometheus.GetSceneByIdBlueprintResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetSceneByIdBlueprintResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Scene scene = 2;
 * @return {?proto.protocols.common.Scene}
 */
proto.protocols.prometheus.GetSceneByIdBlueprintResponse.prototype.getScene = function() {
  return /** @type{?proto.protocols.common.Scene} */ (
    jspb.Message.getWrapperField(this, common_pb.Scene, 2));
};


/**
 * @param {?proto.protocols.common.Scene|undefined} value
 * @return {!proto.protocols.prometheus.GetSceneByIdBlueprintResponse} returns this
*/
proto.protocols.prometheus.GetSceneByIdBlueprintResponse.prototype.setScene = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetSceneByIdBlueprintResponse} returns this
 */
proto.protocols.prometheus.GetSceneByIdBlueprintResponse.prototype.clearScene = function() {
  return this.setScene(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetSceneByIdBlueprintResponse.prototype.hasScene = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional protocols.common.SceneBlueprint blueprint = 3;
 * @return {?proto.protocols.common.SceneBlueprint}
 */
proto.protocols.prometheus.GetSceneByIdBlueprintResponse.prototype.getBlueprint = function() {
  return /** @type{?proto.protocols.common.SceneBlueprint} */ (
    jspb.Message.getWrapperField(this, common_pb.SceneBlueprint, 3));
};


/**
 * @param {?proto.protocols.common.SceneBlueprint|undefined} value
 * @return {!proto.protocols.prometheus.GetSceneByIdBlueprintResponse} returns this
*/
proto.protocols.prometheus.GetSceneByIdBlueprintResponse.prototype.setBlueprint = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetSceneByIdBlueprintResponse} returns this
 */
proto.protocols.prometheus.GetSceneByIdBlueprintResponse.prototype.clearBlueprint = function() {
  return this.setBlueprint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetSceneByIdBlueprintResponse.prototype.hasBlueprint = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PostSceneRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PostSceneRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PostSceneRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostSceneRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sceneblueprint: (f = msg.getSceneblueprint()) && common_pb.SceneBlueprint.toObject(includeInstance, f),
    previewresource: (f = msg.getPreviewresource()) && common_pb.PreviewResource.toObject(includeInstance, f),
    istemporary: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PostSceneRequest}
 */
proto.protocols.prometheus.PostSceneRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PostSceneRequest;
  return proto.protocols.prometheus.PostSceneRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PostSceneRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PostSceneRequest}
 */
proto.protocols.prometheus.PostSceneRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new common_pb.SceneBlueprint;
      reader.readMessage(value,common_pb.SceneBlueprint.deserializeBinaryFromReader);
      msg.setSceneblueprint(value);
      break;
    case 3:
      var value = new common_pb.PreviewResource;
      reader.readMessage(value,common_pb.PreviewResource.deserializeBinaryFromReader);
      msg.setPreviewresource(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIstemporary(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PostSceneRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PostSceneRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PostSceneRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostSceneRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSceneblueprint();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.SceneBlueprint.serializeBinaryToWriter
    );
  }
  f = message.getPreviewresource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_pb.PreviewResource.serializeBinaryToWriter
    );
  }
  f = message.getIstemporary();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.protocols.prometheus.PostSceneRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocols.prometheus.PostSceneRequest} returns this
 */
proto.protocols.prometheus.PostSceneRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional protocols.common.SceneBlueprint sceneBlueprint = 2;
 * @return {?proto.protocols.common.SceneBlueprint}
 */
proto.protocols.prometheus.PostSceneRequest.prototype.getSceneblueprint = function() {
  return /** @type{?proto.protocols.common.SceneBlueprint} */ (
    jspb.Message.getWrapperField(this, common_pb.SceneBlueprint, 2));
};


/**
 * @param {?proto.protocols.common.SceneBlueprint|undefined} value
 * @return {!proto.protocols.prometheus.PostSceneRequest} returns this
*/
proto.protocols.prometheus.PostSceneRequest.prototype.setSceneblueprint = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PostSceneRequest} returns this
 */
proto.protocols.prometheus.PostSceneRequest.prototype.clearSceneblueprint = function() {
  return this.setSceneblueprint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PostSceneRequest.prototype.hasSceneblueprint = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional protocols.common.PreviewResource previewResource = 3;
 * @return {?proto.protocols.common.PreviewResource}
 */
proto.protocols.prometheus.PostSceneRequest.prototype.getPreviewresource = function() {
  return /** @type{?proto.protocols.common.PreviewResource} */ (
    jspb.Message.getWrapperField(this, common_pb.PreviewResource, 3));
};


/**
 * @param {?proto.protocols.common.PreviewResource|undefined} value
 * @return {!proto.protocols.prometheus.PostSceneRequest} returns this
*/
proto.protocols.prometheus.PostSceneRequest.prototype.setPreviewresource = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PostSceneRequest} returns this
 */
proto.protocols.prometheus.PostSceneRequest.prototype.clearPreviewresource = function() {
  return this.setPreviewresource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PostSceneRequest.prototype.hasPreviewresource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool isTemporary = 4;
 * @return {boolean}
 */
proto.protocols.prometheus.PostSceneRequest.prototype.getIstemporary = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocols.prometheus.PostSceneRequest} returns this
 */
proto.protocols.prometheus.PostSceneRequest.prototype.setIstemporary = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PostSceneResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PostSceneResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PostSceneResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostSceneResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    scene: (f = msg.getScene()) && common_pb.Scene.toObject(includeInstance, f),
    overwritescene: (f = msg.getOverwritescene()) && common_pb.SceneBase.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PostSceneResponse}
 */
proto.protocols.prometheus.PostSceneResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PostSceneResponse;
  return proto.protocols.prometheus.PostSceneResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PostSceneResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PostSceneResponse}
 */
proto.protocols.prometheus.PostSceneResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Scene;
      reader.readMessage(value,common_pb.Scene.deserializeBinaryFromReader);
      msg.setScene(value);
      break;
    case 3:
      var value = new common_pb.SceneBase;
      reader.readMessage(value,common_pb.SceneBase.deserializeBinaryFromReader);
      msg.setOverwritescene(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PostSceneResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PostSceneResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PostSceneResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostSceneResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getScene();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Scene.serializeBinaryToWriter
    );
  }
  f = message.getOverwritescene();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_pb.SceneBase.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PostSceneResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PostSceneResponse} returns this
*/
proto.protocols.prometheus.PostSceneResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PostSceneResponse} returns this
 */
proto.protocols.prometheus.PostSceneResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PostSceneResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Scene scene = 2;
 * @return {?proto.protocols.common.Scene}
 */
proto.protocols.prometheus.PostSceneResponse.prototype.getScene = function() {
  return /** @type{?proto.protocols.common.Scene} */ (
    jspb.Message.getWrapperField(this, common_pb.Scene, 2));
};


/**
 * @param {?proto.protocols.common.Scene|undefined} value
 * @return {!proto.protocols.prometheus.PostSceneResponse} returns this
*/
proto.protocols.prometheus.PostSceneResponse.prototype.setScene = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PostSceneResponse} returns this
 */
proto.protocols.prometheus.PostSceneResponse.prototype.clearScene = function() {
  return this.setScene(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PostSceneResponse.prototype.hasScene = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional protocols.common.SceneBase overwriteScene = 3;
 * @return {?proto.protocols.common.SceneBase}
 */
proto.protocols.prometheus.PostSceneResponse.prototype.getOverwritescene = function() {
  return /** @type{?proto.protocols.common.SceneBase} */ (
    jspb.Message.getWrapperField(this, common_pb.SceneBase, 3));
};


/**
 * @param {?proto.protocols.common.SceneBase|undefined} value
 * @return {!proto.protocols.prometheus.PostSceneResponse} returns this
*/
proto.protocols.prometheus.PostSceneResponse.prototype.setOverwritescene = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PostSceneResponse} returns this
 */
proto.protocols.prometheus.PostSceneResponse.prototype.clearOverwritescene = function() {
  return this.setOverwritescene(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PostSceneResponse.prototype.hasOverwritescene = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutSceneRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutSceneRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutSceneRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutSceneRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sceneid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sceneblueprint: (f = msg.getSceneblueprint()) && common_pb.SceneBlueprint.toObject(includeInstance, f),
    previewresource: (f = msg.getPreviewresource()) && common_pb.PreviewResource.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutSceneRequest}
 */
proto.protocols.prometheus.PutSceneRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutSceneRequest;
  return proto.protocols.prometheus.PutSceneRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutSceneRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutSceneRequest}
 */
proto.protocols.prometheus.PutSceneRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSceneid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new common_pb.SceneBlueprint;
      reader.readMessage(value,common_pb.SceneBlueprint.deserializeBinaryFromReader);
      msg.setSceneblueprint(value);
      break;
    case 4:
      var value = new common_pb.PreviewResource;
      reader.readMessage(value,common_pb.PreviewResource.deserializeBinaryFromReader);
      msg.setPreviewresource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutSceneRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutSceneRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutSceneRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutSceneRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSceneid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSceneblueprint();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_pb.SceneBlueprint.serializeBinaryToWriter
    );
  }
  f = message.getPreviewresource();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      common_pb.PreviewResource.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 sceneId = 1;
 * @return {number}
 */
proto.protocols.prometheus.PutSceneRequest.prototype.getSceneid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocols.prometheus.PutSceneRequest} returns this
 */
proto.protocols.prometheus.PutSceneRequest.prototype.setSceneid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.protocols.prometheus.PutSceneRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocols.prometheus.PutSceneRequest} returns this
 */
proto.protocols.prometheus.PutSceneRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional protocols.common.SceneBlueprint sceneBlueprint = 3;
 * @return {?proto.protocols.common.SceneBlueprint}
 */
proto.protocols.prometheus.PutSceneRequest.prototype.getSceneblueprint = function() {
  return /** @type{?proto.protocols.common.SceneBlueprint} */ (
    jspb.Message.getWrapperField(this, common_pb.SceneBlueprint, 3));
};


/**
 * @param {?proto.protocols.common.SceneBlueprint|undefined} value
 * @return {!proto.protocols.prometheus.PutSceneRequest} returns this
*/
proto.protocols.prometheus.PutSceneRequest.prototype.setSceneblueprint = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutSceneRequest} returns this
 */
proto.protocols.prometheus.PutSceneRequest.prototype.clearSceneblueprint = function() {
  return this.setSceneblueprint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutSceneRequest.prototype.hasSceneblueprint = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional protocols.common.PreviewResource previewResource = 4;
 * @return {?proto.protocols.common.PreviewResource}
 */
proto.protocols.prometheus.PutSceneRequest.prototype.getPreviewresource = function() {
  return /** @type{?proto.protocols.common.PreviewResource} */ (
    jspb.Message.getWrapperField(this, common_pb.PreviewResource, 4));
};


/**
 * @param {?proto.protocols.common.PreviewResource|undefined} value
 * @return {!proto.protocols.prometheus.PutSceneRequest} returns this
*/
proto.protocols.prometheus.PutSceneRequest.prototype.setPreviewresource = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutSceneRequest} returns this
 */
proto.protocols.prometheus.PutSceneRequest.prototype.clearPreviewresource = function() {
  return this.setPreviewresource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutSceneRequest.prototype.hasPreviewresource = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutSceneResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutSceneResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutSceneResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutSceneResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    scene: (f = msg.getScene()) && common_pb.Scene.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutSceneResponse}
 */
proto.protocols.prometheus.PutSceneResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutSceneResponse;
  return proto.protocols.prometheus.PutSceneResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutSceneResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutSceneResponse}
 */
proto.protocols.prometheus.PutSceneResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Scene;
      reader.readMessage(value,common_pb.Scene.deserializeBinaryFromReader);
      msg.setScene(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutSceneResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutSceneResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutSceneResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutSceneResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getScene();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Scene.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PutSceneResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PutSceneResponse} returns this
*/
proto.protocols.prometheus.PutSceneResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutSceneResponse} returns this
 */
proto.protocols.prometheus.PutSceneResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutSceneResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Scene scene = 2;
 * @return {?proto.protocols.common.Scene}
 */
proto.protocols.prometheus.PutSceneResponse.prototype.getScene = function() {
  return /** @type{?proto.protocols.common.Scene} */ (
    jspb.Message.getWrapperField(this, common_pb.Scene, 2));
};


/**
 * @param {?proto.protocols.common.Scene|undefined} value
 * @return {!proto.protocols.prometheus.PutSceneResponse} returns this
*/
proto.protocols.prometheus.PutSceneResponse.prototype.setScene = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutSceneResponse} returns this
 */
proto.protocols.prometheus.PutSceneResponse.prototype.clearScene = function() {
  return this.setScene(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutSceneResponse.prototype.hasScene = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.DeleteSceneResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.DeleteSceneResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.DeleteSceneResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteSceneResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.DeleteSceneResponse}
 */
proto.protocols.prometheus.DeleteSceneResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.DeleteSceneResponse;
  return proto.protocols.prometheus.DeleteSceneResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.DeleteSceneResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.DeleteSceneResponse}
 */
proto.protocols.prometheus.DeleteSceneResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.DeleteSceneResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.DeleteSceneResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.DeleteSceneResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteSceneResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.DeleteSceneResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.DeleteSceneResponse} returns this
*/
proto.protocols.prometheus.DeleteSceneResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.DeleteSceneResponse} returns this
 */
proto.protocols.prometheus.DeleteSceneResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.DeleteSceneResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.GetDepartmentMemberResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetDepartmentMemberResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetDepartmentMemberResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetDepartmentMemberResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetDepartmentMemberResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    department: (f = msg.getDepartment()) && common_pb.Department.toObject(includeInstance, f),
    memberbasesList: jspb.Message.toObjectList(msg.getMemberbasesList(),
    common_pb.MemberBase.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetDepartmentMemberResponse}
 */
proto.protocols.prometheus.GetDepartmentMemberResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetDepartmentMemberResponse;
  return proto.protocols.prometheus.GetDepartmentMemberResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetDepartmentMemberResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetDepartmentMemberResponse}
 */
proto.protocols.prometheus.GetDepartmentMemberResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Department;
      reader.readMessage(value,common_pb.Department.deserializeBinaryFromReader);
      msg.setDepartment(value);
      break;
    case 3:
      var value = new common_pb.MemberBase;
      reader.readMessage(value,common_pb.MemberBase.deserializeBinaryFromReader);
      msg.addMemberbases(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetDepartmentMemberResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetDepartmentMemberResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetDepartmentMemberResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetDepartmentMemberResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getDepartment();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Department.serializeBinaryToWriter
    );
  }
  f = message.getMemberbasesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      common_pb.MemberBase.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetDepartmentMemberResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetDepartmentMemberResponse} returns this
*/
proto.protocols.prometheus.GetDepartmentMemberResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetDepartmentMemberResponse} returns this
 */
proto.protocols.prometheus.GetDepartmentMemberResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetDepartmentMemberResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Department department = 2;
 * @return {?proto.protocols.common.Department}
 */
proto.protocols.prometheus.GetDepartmentMemberResponse.prototype.getDepartment = function() {
  return /** @type{?proto.protocols.common.Department} */ (
    jspb.Message.getWrapperField(this, common_pb.Department, 2));
};


/**
 * @param {?proto.protocols.common.Department|undefined} value
 * @return {!proto.protocols.prometheus.GetDepartmentMemberResponse} returns this
*/
proto.protocols.prometheus.GetDepartmentMemberResponse.prototype.setDepartment = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetDepartmentMemberResponse} returns this
 */
proto.protocols.prometheus.GetDepartmentMemberResponse.prototype.clearDepartment = function() {
  return this.setDepartment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetDepartmentMemberResponse.prototype.hasDepartment = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated protocols.common.MemberBase memberBases = 3;
 * @return {!Array<!proto.protocols.common.MemberBase>}
 */
proto.protocols.prometheus.GetDepartmentMemberResponse.prototype.getMemberbasesList = function() {
  return /** @type{!Array<!proto.protocols.common.MemberBase>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.MemberBase, 3));
};


/**
 * @param {!Array<!proto.protocols.common.MemberBase>} value
 * @return {!proto.protocols.prometheus.GetDepartmentMemberResponse} returns this
*/
proto.protocols.prometheus.GetDepartmentMemberResponse.prototype.setMemberbasesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.protocols.common.MemberBase=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocols.common.MemberBase}
 */
proto.protocols.prometheus.GetDepartmentMemberResponse.prototype.addMemberbases = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.protocols.common.MemberBase, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.GetDepartmentMemberResponse} returns this
 */
proto.protocols.prometheus.GetDepartmentMemberResponse.prototype.clearMemberbasesList = function() {
  return this.setMemberbasesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.GetDepartmentConnectorLowersResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetDepartmentConnectorLowersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetDepartmentConnectorLowersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetDepartmentConnectorLowersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetDepartmentConnectorLowersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    connectordepartmentbasesList: jspb.Message.toObjectList(msg.getConnectordepartmentbasesList(),
    common_pb.ConnectorDepartmentBase.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetDepartmentConnectorLowersResponse}
 */
proto.protocols.prometheus.GetDepartmentConnectorLowersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetDepartmentConnectorLowersResponse;
  return proto.protocols.prometheus.GetDepartmentConnectorLowersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetDepartmentConnectorLowersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetDepartmentConnectorLowersResponse}
 */
proto.protocols.prometheus.GetDepartmentConnectorLowersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.ConnectorDepartmentBase;
      reader.readMessage(value,common_pb.ConnectorDepartmentBase.deserializeBinaryFromReader);
      msg.addConnectordepartmentbases(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetDepartmentConnectorLowersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetDepartmentConnectorLowersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetDepartmentConnectorLowersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetDepartmentConnectorLowersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getConnectordepartmentbasesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_pb.ConnectorDepartmentBase.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetDepartmentConnectorLowersResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetDepartmentConnectorLowersResponse} returns this
*/
proto.protocols.prometheus.GetDepartmentConnectorLowersResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetDepartmentConnectorLowersResponse} returns this
 */
proto.protocols.prometheus.GetDepartmentConnectorLowersResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetDepartmentConnectorLowersResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated protocols.common.ConnectorDepartmentBase connectorDepartmentBases = 2;
 * @return {!Array<!proto.protocols.common.ConnectorDepartmentBase>}
 */
proto.protocols.prometheus.GetDepartmentConnectorLowersResponse.prototype.getConnectordepartmentbasesList = function() {
  return /** @type{!Array<!proto.protocols.common.ConnectorDepartmentBase>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.ConnectorDepartmentBase, 2));
};


/**
 * @param {!Array<!proto.protocols.common.ConnectorDepartmentBase>} value
 * @return {!proto.protocols.prometheus.GetDepartmentConnectorLowersResponse} returns this
*/
proto.protocols.prometheus.GetDepartmentConnectorLowersResponse.prototype.setConnectordepartmentbasesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protocols.common.ConnectorDepartmentBase=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocols.common.ConnectorDepartmentBase}
 */
proto.protocols.prometheus.GetDepartmentConnectorLowersResponse.prototype.addConnectordepartmentbases = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protocols.common.ConnectorDepartmentBase, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.GetDepartmentConnectorLowersResponse} returns this
 */
proto.protocols.prometheus.GetDepartmentConnectorLowersResponse.prototype.clearConnectordepartmentbasesList = function() {
  return this.setConnectordepartmentbasesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PostDepartmentMemberRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PostDepartmentMemberRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PostDepartmentMemberRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostDepartmentMemberRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    departmentid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    memberid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PostDepartmentMemberRequest}
 */
proto.protocols.prometheus.PostDepartmentMemberRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PostDepartmentMemberRequest;
  return proto.protocols.prometheus.PostDepartmentMemberRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PostDepartmentMemberRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PostDepartmentMemberRequest}
 */
proto.protocols.prometheus.PostDepartmentMemberRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDepartmentid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMemberid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PostDepartmentMemberRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PostDepartmentMemberRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PostDepartmentMemberRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostDepartmentMemberRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDepartmentid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getMemberid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 departmentId = 1;
 * @return {number}
 */
proto.protocols.prometheus.PostDepartmentMemberRequest.prototype.getDepartmentid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocols.prometheus.PostDepartmentMemberRequest} returns this
 */
proto.protocols.prometheus.PostDepartmentMemberRequest.prototype.setDepartmentid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 memberId = 2;
 * @return {number}
 */
proto.protocols.prometheus.PostDepartmentMemberRequest.prototype.getMemberid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocols.prometheus.PostDepartmentMemberRequest} returns this
 */
proto.protocols.prometheus.PostDepartmentMemberRequest.prototype.setMemberid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.PostDepartmentMemberResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PostDepartmentMemberResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PostDepartmentMemberResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PostDepartmentMemberResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostDepartmentMemberResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    department: (f = msg.getDepartment()) && common_pb.Department.toObject(includeInstance, f),
    memberbasesList: jspb.Message.toObjectList(msg.getMemberbasesList(),
    common_pb.MemberBase.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PostDepartmentMemberResponse}
 */
proto.protocols.prometheus.PostDepartmentMemberResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PostDepartmentMemberResponse;
  return proto.protocols.prometheus.PostDepartmentMemberResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PostDepartmentMemberResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PostDepartmentMemberResponse}
 */
proto.protocols.prometheus.PostDepartmentMemberResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Department;
      reader.readMessage(value,common_pb.Department.deserializeBinaryFromReader);
      msg.setDepartment(value);
      break;
    case 3:
      var value = new common_pb.MemberBase;
      reader.readMessage(value,common_pb.MemberBase.deserializeBinaryFromReader);
      msg.addMemberbases(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PostDepartmentMemberResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PostDepartmentMemberResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PostDepartmentMemberResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostDepartmentMemberResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getDepartment();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Department.serializeBinaryToWriter
    );
  }
  f = message.getMemberbasesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      common_pb.MemberBase.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PostDepartmentMemberResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PostDepartmentMemberResponse} returns this
*/
proto.protocols.prometheus.PostDepartmentMemberResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PostDepartmentMemberResponse} returns this
 */
proto.protocols.prometheus.PostDepartmentMemberResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PostDepartmentMemberResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Department department = 2;
 * @return {?proto.protocols.common.Department}
 */
proto.protocols.prometheus.PostDepartmentMemberResponse.prototype.getDepartment = function() {
  return /** @type{?proto.protocols.common.Department} */ (
    jspb.Message.getWrapperField(this, common_pb.Department, 2));
};


/**
 * @param {?proto.protocols.common.Department|undefined} value
 * @return {!proto.protocols.prometheus.PostDepartmentMemberResponse} returns this
*/
proto.protocols.prometheus.PostDepartmentMemberResponse.prototype.setDepartment = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PostDepartmentMemberResponse} returns this
 */
proto.protocols.prometheus.PostDepartmentMemberResponse.prototype.clearDepartment = function() {
  return this.setDepartment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PostDepartmentMemberResponse.prototype.hasDepartment = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated protocols.common.MemberBase memberBases = 3;
 * @return {!Array<!proto.protocols.common.MemberBase>}
 */
proto.protocols.prometheus.PostDepartmentMemberResponse.prototype.getMemberbasesList = function() {
  return /** @type{!Array<!proto.protocols.common.MemberBase>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.MemberBase, 3));
};


/**
 * @param {!Array<!proto.protocols.common.MemberBase>} value
 * @return {!proto.protocols.prometheus.PostDepartmentMemberResponse} returns this
*/
proto.protocols.prometheus.PostDepartmentMemberResponse.prototype.setMemberbasesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.protocols.common.MemberBase=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocols.common.MemberBase}
 */
proto.protocols.prometheus.PostDepartmentMemberResponse.prototype.addMemberbases = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.protocols.common.MemberBase, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.PostDepartmentMemberResponse} returns this
 */
proto.protocols.prometheus.PostDepartmentMemberResponse.prototype.clearMemberbasesList = function() {
  return this.setMemberbasesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.DeleteDepartmentMemberRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.DeleteDepartmentMemberRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.DeleteDepartmentMemberRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteDepartmentMemberRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    deparmentid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    memberid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.DeleteDepartmentMemberRequest}
 */
proto.protocols.prometheus.DeleteDepartmentMemberRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.DeleteDepartmentMemberRequest;
  return proto.protocols.prometheus.DeleteDepartmentMemberRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.DeleteDepartmentMemberRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.DeleteDepartmentMemberRequest}
 */
proto.protocols.prometheus.DeleteDepartmentMemberRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDeparmentid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMemberid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.DeleteDepartmentMemberRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.DeleteDepartmentMemberRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.DeleteDepartmentMemberRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteDepartmentMemberRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeparmentid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getMemberid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 deparmentId = 1;
 * @return {number}
 */
proto.protocols.prometheus.DeleteDepartmentMemberRequest.prototype.getDeparmentid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocols.prometheus.DeleteDepartmentMemberRequest} returns this
 */
proto.protocols.prometheus.DeleteDepartmentMemberRequest.prototype.setDeparmentid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 memberId = 2;
 * @return {number}
 */
proto.protocols.prometheus.DeleteDepartmentMemberRequest.prototype.getMemberid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocols.prometheus.DeleteDepartmentMemberRequest} returns this
 */
proto.protocols.prometheus.DeleteDepartmentMemberRequest.prototype.setMemberid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.DeleteDepartmentMemberResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.DeleteDepartmentMemberResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.DeleteDepartmentMemberResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.DeleteDepartmentMemberResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteDepartmentMemberResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    department: (f = msg.getDepartment()) && common_pb.Department.toObject(includeInstance, f),
    memberbasesList: jspb.Message.toObjectList(msg.getMemberbasesList(),
    common_pb.MemberBase.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.DeleteDepartmentMemberResponse}
 */
proto.protocols.prometheus.DeleteDepartmentMemberResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.DeleteDepartmentMemberResponse;
  return proto.protocols.prometheus.DeleteDepartmentMemberResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.DeleteDepartmentMemberResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.DeleteDepartmentMemberResponse}
 */
proto.protocols.prometheus.DeleteDepartmentMemberResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Department;
      reader.readMessage(value,common_pb.Department.deserializeBinaryFromReader);
      msg.setDepartment(value);
      break;
    case 3:
      var value = new common_pb.MemberBase;
      reader.readMessage(value,common_pb.MemberBase.deserializeBinaryFromReader);
      msg.addMemberbases(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.DeleteDepartmentMemberResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.DeleteDepartmentMemberResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.DeleteDepartmentMemberResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteDepartmentMemberResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getDepartment();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Department.serializeBinaryToWriter
    );
  }
  f = message.getMemberbasesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      common_pb.MemberBase.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.DeleteDepartmentMemberResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.DeleteDepartmentMemberResponse} returns this
*/
proto.protocols.prometheus.DeleteDepartmentMemberResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.DeleteDepartmentMemberResponse} returns this
 */
proto.protocols.prometheus.DeleteDepartmentMemberResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.DeleteDepartmentMemberResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Department department = 2;
 * @return {?proto.protocols.common.Department}
 */
proto.protocols.prometheus.DeleteDepartmentMemberResponse.prototype.getDepartment = function() {
  return /** @type{?proto.protocols.common.Department} */ (
    jspb.Message.getWrapperField(this, common_pb.Department, 2));
};


/**
 * @param {?proto.protocols.common.Department|undefined} value
 * @return {!proto.protocols.prometheus.DeleteDepartmentMemberResponse} returns this
*/
proto.protocols.prometheus.DeleteDepartmentMemberResponse.prototype.setDepartment = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.DeleteDepartmentMemberResponse} returns this
 */
proto.protocols.prometheus.DeleteDepartmentMemberResponse.prototype.clearDepartment = function() {
  return this.setDepartment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.DeleteDepartmentMemberResponse.prototype.hasDepartment = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated protocols.common.MemberBase memberBases = 3;
 * @return {!Array<!proto.protocols.common.MemberBase>}
 */
proto.protocols.prometheus.DeleteDepartmentMemberResponse.prototype.getMemberbasesList = function() {
  return /** @type{!Array<!proto.protocols.common.MemberBase>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.MemberBase, 3));
};


/**
 * @param {!Array<!proto.protocols.common.MemberBase>} value
 * @return {!proto.protocols.prometheus.DeleteDepartmentMemberResponse} returns this
*/
proto.protocols.prometheus.DeleteDepartmentMemberResponse.prototype.setMemberbasesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.protocols.common.MemberBase=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocols.common.MemberBase}
 */
proto.protocols.prometheus.DeleteDepartmentMemberResponse.prototype.addMemberbases = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.protocols.common.MemberBase, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.DeleteDepartmentMemberResponse} returns this
 */
proto.protocols.prometheus.DeleteDepartmentMemberResponse.prototype.clearMemberbasesList = function() {
  return this.setMemberbasesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.GetDepartmentConnectorsResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetDepartmentConnectorsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetDepartmentConnectorsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetDepartmentConnectorsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetDepartmentConnectorsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    department: (f = msg.getDepartment()) && common_pb.Department.toObject(includeInstance, f),
    connectorbasesList: jspb.Message.toObjectList(msg.getConnectorbasesList(),
    common_pb.ConnectorBase.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetDepartmentConnectorsResponse}
 */
proto.protocols.prometheus.GetDepartmentConnectorsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetDepartmentConnectorsResponse;
  return proto.protocols.prometheus.GetDepartmentConnectorsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetDepartmentConnectorsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetDepartmentConnectorsResponse}
 */
proto.protocols.prometheus.GetDepartmentConnectorsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Department;
      reader.readMessage(value,common_pb.Department.deserializeBinaryFromReader);
      msg.setDepartment(value);
      break;
    case 3:
      var value = new common_pb.ConnectorBase;
      reader.readMessage(value,common_pb.ConnectorBase.deserializeBinaryFromReader);
      msg.addConnectorbases(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetDepartmentConnectorsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetDepartmentConnectorsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetDepartmentConnectorsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetDepartmentConnectorsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getDepartment();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Department.serializeBinaryToWriter
    );
  }
  f = message.getConnectorbasesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      common_pb.ConnectorBase.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetDepartmentConnectorsResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetDepartmentConnectorsResponse} returns this
*/
proto.protocols.prometheus.GetDepartmentConnectorsResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetDepartmentConnectorsResponse} returns this
 */
proto.protocols.prometheus.GetDepartmentConnectorsResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetDepartmentConnectorsResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Department department = 2;
 * @return {?proto.protocols.common.Department}
 */
proto.protocols.prometheus.GetDepartmentConnectorsResponse.prototype.getDepartment = function() {
  return /** @type{?proto.protocols.common.Department} */ (
    jspb.Message.getWrapperField(this, common_pb.Department, 2));
};


/**
 * @param {?proto.protocols.common.Department|undefined} value
 * @return {!proto.protocols.prometheus.GetDepartmentConnectorsResponse} returns this
*/
proto.protocols.prometheus.GetDepartmentConnectorsResponse.prototype.setDepartment = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetDepartmentConnectorsResponse} returns this
 */
proto.protocols.prometheus.GetDepartmentConnectorsResponse.prototype.clearDepartment = function() {
  return this.setDepartment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetDepartmentConnectorsResponse.prototype.hasDepartment = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated protocols.common.ConnectorBase connectorBases = 3;
 * @return {!Array<!proto.protocols.common.ConnectorBase>}
 */
proto.protocols.prometheus.GetDepartmentConnectorsResponse.prototype.getConnectorbasesList = function() {
  return /** @type{!Array<!proto.protocols.common.ConnectorBase>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.ConnectorBase, 3));
};


/**
 * @param {!Array<!proto.protocols.common.ConnectorBase>} value
 * @return {!proto.protocols.prometheus.GetDepartmentConnectorsResponse} returns this
*/
proto.protocols.prometheus.GetDepartmentConnectorsResponse.prototype.setConnectorbasesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.protocols.common.ConnectorBase=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocols.common.ConnectorBase}
 */
proto.protocols.prometheus.GetDepartmentConnectorsResponse.prototype.addConnectorbases = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.protocols.common.ConnectorBase, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.GetDepartmentConnectorsResponse} returns this
 */
proto.protocols.prometheus.GetDepartmentConnectorsResponse.prototype.clearConnectorbasesList = function() {
  return this.setConnectorbasesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PostDepartmentConnectorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PostDepartmentConnectorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PostDepartmentConnectorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostDepartmentConnectorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    departmentid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    connectorid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PostDepartmentConnectorRequest}
 */
proto.protocols.prometheus.PostDepartmentConnectorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PostDepartmentConnectorRequest;
  return proto.protocols.prometheus.PostDepartmentConnectorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PostDepartmentConnectorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PostDepartmentConnectorRequest}
 */
proto.protocols.prometheus.PostDepartmentConnectorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDepartmentid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setConnectorid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PostDepartmentConnectorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PostDepartmentConnectorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PostDepartmentConnectorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostDepartmentConnectorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDepartmentid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getConnectorid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 departmentId = 1;
 * @return {number}
 */
proto.protocols.prometheus.PostDepartmentConnectorRequest.prototype.getDepartmentid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocols.prometheus.PostDepartmentConnectorRequest} returns this
 */
proto.protocols.prometheus.PostDepartmentConnectorRequest.prototype.setDepartmentid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 connectorId = 2;
 * @return {number}
 */
proto.protocols.prometheus.PostDepartmentConnectorRequest.prototype.getConnectorid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocols.prometheus.PostDepartmentConnectorRequest} returns this
 */
proto.protocols.prometheus.PostDepartmentConnectorRequest.prototype.setConnectorid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.PostDepartmentConnectorResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PostDepartmentConnectorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PostDepartmentConnectorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PostDepartmentConnectorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostDepartmentConnectorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    department: (f = msg.getDepartment()) && common_pb.Department.toObject(includeInstance, f),
    connectorbasesList: jspb.Message.toObjectList(msg.getConnectorbasesList(),
    common_pb.ConnectorBase.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PostDepartmentConnectorResponse}
 */
proto.protocols.prometheus.PostDepartmentConnectorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PostDepartmentConnectorResponse;
  return proto.protocols.prometheus.PostDepartmentConnectorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PostDepartmentConnectorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PostDepartmentConnectorResponse}
 */
proto.protocols.prometheus.PostDepartmentConnectorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Department;
      reader.readMessage(value,common_pb.Department.deserializeBinaryFromReader);
      msg.setDepartment(value);
      break;
    case 3:
      var value = new common_pb.ConnectorBase;
      reader.readMessage(value,common_pb.ConnectorBase.deserializeBinaryFromReader);
      msg.addConnectorbases(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PostDepartmentConnectorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PostDepartmentConnectorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PostDepartmentConnectorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostDepartmentConnectorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getDepartment();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Department.serializeBinaryToWriter
    );
  }
  f = message.getConnectorbasesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      common_pb.ConnectorBase.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PostDepartmentConnectorResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PostDepartmentConnectorResponse} returns this
*/
proto.protocols.prometheus.PostDepartmentConnectorResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PostDepartmentConnectorResponse} returns this
 */
proto.protocols.prometheus.PostDepartmentConnectorResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PostDepartmentConnectorResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Department department = 2;
 * @return {?proto.protocols.common.Department}
 */
proto.protocols.prometheus.PostDepartmentConnectorResponse.prototype.getDepartment = function() {
  return /** @type{?proto.protocols.common.Department} */ (
    jspb.Message.getWrapperField(this, common_pb.Department, 2));
};


/**
 * @param {?proto.protocols.common.Department|undefined} value
 * @return {!proto.protocols.prometheus.PostDepartmentConnectorResponse} returns this
*/
proto.protocols.prometheus.PostDepartmentConnectorResponse.prototype.setDepartment = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PostDepartmentConnectorResponse} returns this
 */
proto.protocols.prometheus.PostDepartmentConnectorResponse.prototype.clearDepartment = function() {
  return this.setDepartment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PostDepartmentConnectorResponse.prototype.hasDepartment = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated protocols.common.ConnectorBase connectorBases = 3;
 * @return {!Array<!proto.protocols.common.ConnectorBase>}
 */
proto.protocols.prometheus.PostDepartmentConnectorResponse.prototype.getConnectorbasesList = function() {
  return /** @type{!Array<!proto.protocols.common.ConnectorBase>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.ConnectorBase, 3));
};


/**
 * @param {!Array<!proto.protocols.common.ConnectorBase>} value
 * @return {!proto.protocols.prometheus.PostDepartmentConnectorResponse} returns this
*/
proto.protocols.prometheus.PostDepartmentConnectorResponse.prototype.setConnectorbasesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.protocols.common.ConnectorBase=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocols.common.ConnectorBase}
 */
proto.protocols.prometheus.PostDepartmentConnectorResponse.prototype.addConnectorbases = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.protocols.common.ConnectorBase, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.PostDepartmentConnectorResponse} returns this
 */
proto.protocols.prometheus.PostDepartmentConnectorResponse.prototype.clearConnectorbasesList = function() {
  return this.setConnectorbasesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.DeleteDepartmentConnectorResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.DeleteDepartmentConnectorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.DeleteDepartmentConnectorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.DeleteDepartmentConnectorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteDepartmentConnectorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    department: (f = msg.getDepartment()) && common_pb.Department.toObject(includeInstance, f),
    connectorbasesList: jspb.Message.toObjectList(msg.getConnectorbasesList(),
    common_pb.ConnectorBase.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.DeleteDepartmentConnectorResponse}
 */
proto.protocols.prometheus.DeleteDepartmentConnectorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.DeleteDepartmentConnectorResponse;
  return proto.protocols.prometheus.DeleteDepartmentConnectorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.DeleteDepartmentConnectorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.DeleteDepartmentConnectorResponse}
 */
proto.protocols.prometheus.DeleteDepartmentConnectorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Department;
      reader.readMessage(value,common_pb.Department.deserializeBinaryFromReader);
      msg.setDepartment(value);
      break;
    case 3:
      var value = new common_pb.ConnectorBase;
      reader.readMessage(value,common_pb.ConnectorBase.deserializeBinaryFromReader);
      msg.addConnectorbases(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.DeleteDepartmentConnectorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.DeleteDepartmentConnectorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.DeleteDepartmentConnectorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteDepartmentConnectorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getDepartment();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Department.serializeBinaryToWriter
    );
  }
  f = message.getConnectorbasesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      common_pb.ConnectorBase.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.DeleteDepartmentConnectorResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.DeleteDepartmentConnectorResponse} returns this
*/
proto.protocols.prometheus.DeleteDepartmentConnectorResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.DeleteDepartmentConnectorResponse} returns this
 */
proto.protocols.prometheus.DeleteDepartmentConnectorResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.DeleteDepartmentConnectorResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Department department = 2;
 * @return {?proto.protocols.common.Department}
 */
proto.protocols.prometheus.DeleteDepartmentConnectorResponse.prototype.getDepartment = function() {
  return /** @type{?proto.protocols.common.Department} */ (
    jspb.Message.getWrapperField(this, common_pb.Department, 2));
};


/**
 * @param {?proto.protocols.common.Department|undefined} value
 * @return {!proto.protocols.prometheus.DeleteDepartmentConnectorResponse} returns this
*/
proto.protocols.prometheus.DeleteDepartmentConnectorResponse.prototype.setDepartment = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.DeleteDepartmentConnectorResponse} returns this
 */
proto.protocols.prometheus.DeleteDepartmentConnectorResponse.prototype.clearDepartment = function() {
  return this.setDepartment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.DeleteDepartmentConnectorResponse.prototype.hasDepartment = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated protocols.common.ConnectorBase connectorBases = 3;
 * @return {!Array<!proto.protocols.common.ConnectorBase>}
 */
proto.protocols.prometheus.DeleteDepartmentConnectorResponse.prototype.getConnectorbasesList = function() {
  return /** @type{!Array<!proto.protocols.common.ConnectorBase>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.ConnectorBase, 3));
};


/**
 * @param {!Array<!proto.protocols.common.ConnectorBase>} value
 * @return {!proto.protocols.prometheus.DeleteDepartmentConnectorResponse} returns this
*/
proto.protocols.prometheus.DeleteDepartmentConnectorResponse.prototype.setConnectorbasesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.protocols.common.ConnectorBase=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocols.common.ConnectorBase}
 */
proto.protocols.prometheus.DeleteDepartmentConnectorResponse.prototype.addConnectorbases = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.protocols.common.ConnectorBase, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.DeleteDepartmentConnectorResponse} returns this
 */
proto.protocols.prometheus.DeleteDepartmentConnectorResponse.prototype.clearConnectorbasesList = function() {
  return this.setConnectorbasesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetConnectorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetConnectorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetConnectorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetConnectorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    connector: (f = msg.getConnector()) && common_pb.Connector.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetConnectorResponse}
 */
proto.protocols.prometheus.GetConnectorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetConnectorResponse;
  return proto.protocols.prometheus.GetConnectorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetConnectorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetConnectorResponse}
 */
proto.protocols.prometheus.GetConnectorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Connector;
      reader.readMessage(value,common_pb.Connector.deserializeBinaryFromReader);
      msg.setConnector(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetConnectorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetConnectorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetConnectorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetConnectorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getConnector();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Connector.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetConnectorResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetConnectorResponse} returns this
*/
proto.protocols.prometheus.GetConnectorResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetConnectorResponse} returns this
 */
proto.protocols.prometheus.GetConnectorResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetConnectorResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Connector connector = 2;
 * @return {?proto.protocols.common.Connector}
 */
proto.protocols.prometheus.GetConnectorResponse.prototype.getConnector = function() {
  return /** @type{?proto.protocols.common.Connector} */ (
    jspb.Message.getWrapperField(this, common_pb.Connector, 2));
};


/**
 * @param {?proto.protocols.common.Connector|undefined} value
 * @return {!proto.protocols.prometheus.GetConnectorResponse} returns this
*/
proto.protocols.prometheus.GetConnectorResponse.prototype.setConnector = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetConnectorResponse} returns this
 */
proto.protocols.prometheus.GetConnectorResponse.prototype.clearConnector = function() {
  return this.setConnector(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetConnectorResponse.prototype.hasConnector = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.GetConnectorsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetConnectorsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetConnectorsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetConnectorsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetConnectorsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    connectorbasesList: jspb.Message.toObjectList(msg.getConnectorbasesList(),
    common_pb.ConnectorBase.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetConnectorsResponse}
 */
proto.protocols.prometheus.GetConnectorsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetConnectorsResponse;
  return proto.protocols.prometheus.GetConnectorsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetConnectorsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetConnectorsResponse}
 */
proto.protocols.prometheus.GetConnectorsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.ConnectorBase;
      reader.readMessage(value,common_pb.ConnectorBase.deserializeBinaryFromReader);
      msg.addConnectorbases(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetConnectorsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetConnectorsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetConnectorsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetConnectorsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getConnectorbasesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_pb.ConnectorBase.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetConnectorsResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetConnectorsResponse} returns this
*/
proto.protocols.prometheus.GetConnectorsResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetConnectorsResponse} returns this
 */
proto.protocols.prometheus.GetConnectorsResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetConnectorsResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated protocols.common.ConnectorBase connectorBases = 2;
 * @return {!Array<!proto.protocols.common.ConnectorBase>}
 */
proto.protocols.prometheus.GetConnectorsResponse.prototype.getConnectorbasesList = function() {
  return /** @type{!Array<!proto.protocols.common.ConnectorBase>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.ConnectorBase, 2));
};


/**
 * @param {!Array<!proto.protocols.common.ConnectorBase>} value
 * @return {!proto.protocols.prometheus.GetConnectorsResponse} returns this
*/
proto.protocols.prometheus.GetConnectorsResponse.prototype.setConnectorbasesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protocols.common.ConnectorBase=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocols.common.ConnectorBase}
 */
proto.protocols.prometheus.GetConnectorsResponse.prototype.addConnectorbases = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protocols.common.ConnectorBase, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.GetConnectorsResponse} returns this
 */
proto.protocols.prometheus.GetConnectorsResponse.prototype.clearConnectorbasesList = function() {
  return this.setConnectorbasesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PostConnectorByIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PostConnectorByIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PostConnectorByIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostConnectorByIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    connector: (f = msg.getConnector()) && common_pb.Connector.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PostConnectorByIdResponse}
 */
proto.protocols.prometheus.PostConnectorByIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PostConnectorByIdResponse;
  return proto.protocols.prometheus.PostConnectorByIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PostConnectorByIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PostConnectorByIdResponse}
 */
proto.protocols.prometheus.PostConnectorByIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Connector;
      reader.readMessage(value,common_pb.Connector.deserializeBinaryFromReader);
      msg.setConnector(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PostConnectorByIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PostConnectorByIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PostConnectorByIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostConnectorByIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getConnector();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Connector.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PostConnectorByIdResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PostConnectorByIdResponse} returns this
*/
proto.protocols.prometheus.PostConnectorByIdResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PostConnectorByIdResponse} returns this
 */
proto.protocols.prometheus.PostConnectorByIdResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PostConnectorByIdResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Connector connector = 2;
 * @return {?proto.protocols.common.Connector}
 */
proto.protocols.prometheus.PostConnectorByIdResponse.prototype.getConnector = function() {
  return /** @type{?proto.protocols.common.Connector} */ (
    jspb.Message.getWrapperField(this, common_pb.Connector, 2));
};


/**
 * @param {?proto.protocols.common.Connector|undefined} value
 * @return {!proto.protocols.prometheus.PostConnectorByIdResponse} returns this
*/
proto.protocols.prometheus.PostConnectorByIdResponse.prototype.setConnector = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PostConnectorByIdResponse} returns this
 */
proto.protocols.prometheus.PostConnectorByIdResponse.prototype.clearConnector = function() {
  return this.setConnector(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PostConnectorByIdResponse.prototype.hasConnector = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PostConnectorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PostConnectorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PostConnectorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostConnectorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    deviceid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PostConnectorRequest}
 */
proto.protocols.prometheus.PostConnectorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PostConnectorRequest;
  return proto.protocols.prometheus.PostConnectorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PostConnectorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PostConnectorRequest}
 */
proto.protocols.prometheus.PostConnectorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PostConnectorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PostConnectorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PostConnectorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostConnectorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDeviceid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.protocols.prometheus.PostConnectorRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocols.prometheus.PostConnectorRequest} returns this
 */
proto.protocols.prometheus.PostConnectorRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string deviceId = 2;
 * @return {string}
 */
proto.protocols.prometheus.PostConnectorRequest.prototype.getDeviceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocols.prometheus.PostConnectorRequest} returns this
 */
proto.protocols.prometheus.PostConnectorRequest.prototype.setDeviceid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PostConnectorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PostConnectorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PostConnectorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostConnectorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    kind: jspb.Message.getFieldWithDefault(msg, 2, 0),
    connector: (f = msg.getConnector()) && common_pb.Connector.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PostConnectorResponse}
 */
proto.protocols.prometheus.PostConnectorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PostConnectorResponse;
  return proto.protocols.prometheus.PostConnectorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PostConnectorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PostConnectorResponse}
 */
proto.protocols.prometheus.PostConnectorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = /** @type {!proto.protocols.prometheus.PostConnectorResponse.POST_KIND} */ (reader.readEnum());
      msg.setKind(value);
      break;
    case 3:
      var value = new common_pb.Connector;
      reader.readMessage(value,common_pb.Connector.deserializeBinaryFromReader);
      msg.setConnector(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PostConnectorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PostConnectorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PostConnectorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostConnectorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getConnector();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_pb.Connector.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.protocols.prometheus.PostConnectorResponse.POST_KIND = {
  POST_KIND_DEFAULT: 0,
  POST_KIND_CREATED: 1,
  POST_KIND_DUPLICATED_NAME: 2,
  POST_KIND_DUPLICATED_DEVICE: 3
};

/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PostConnectorResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PostConnectorResponse} returns this
*/
proto.protocols.prometheus.PostConnectorResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PostConnectorResponse} returns this
 */
proto.protocols.prometheus.PostConnectorResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PostConnectorResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional POST_KIND kind = 2;
 * @return {!proto.protocols.prometheus.PostConnectorResponse.POST_KIND}
 */
proto.protocols.prometheus.PostConnectorResponse.prototype.getKind = function() {
  return /** @type {!proto.protocols.prometheus.PostConnectorResponse.POST_KIND} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.protocols.prometheus.PostConnectorResponse.POST_KIND} value
 * @return {!proto.protocols.prometheus.PostConnectorResponse} returns this
 */
proto.protocols.prometheus.PostConnectorResponse.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional protocols.common.Connector connector = 3;
 * @return {?proto.protocols.common.Connector}
 */
proto.protocols.prometheus.PostConnectorResponse.prototype.getConnector = function() {
  return /** @type{?proto.protocols.common.Connector} */ (
    jspb.Message.getWrapperField(this, common_pb.Connector, 3));
};


/**
 * @param {?proto.protocols.common.Connector|undefined} value
 * @return {!proto.protocols.prometheus.PostConnectorResponse} returns this
*/
proto.protocols.prometheus.PostConnectorResponse.prototype.setConnector = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PostConnectorResponse} returns this
 */
proto.protocols.prometheus.PostConnectorResponse.prototype.clearConnector = function() {
  return this.setConnector(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PostConnectorResponse.prototype.hasConnector = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutConnectorNameRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutConnectorNameRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutConnectorNameRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutConnectorNameRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutConnectorNameRequest}
 */
proto.protocols.prometheus.PutConnectorNameRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutConnectorNameRequest;
  return proto.protocols.prometheus.PutConnectorNameRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutConnectorNameRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutConnectorNameRequest}
 */
proto.protocols.prometheus.PutConnectorNameRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutConnectorNameRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutConnectorNameRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutConnectorNameRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutConnectorNameRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.protocols.prometheus.PutConnectorNameRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocols.prometheus.PutConnectorNameRequest} returns this
 */
proto.protocols.prometheus.PutConnectorNameRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutConnectorNameResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutConnectorNameResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutConnectorNameResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutConnectorNameResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    connector: (f = msg.getConnector()) && common_pb.Connector.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutConnectorNameResponse}
 */
proto.protocols.prometheus.PutConnectorNameResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutConnectorNameResponse;
  return proto.protocols.prometheus.PutConnectorNameResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutConnectorNameResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutConnectorNameResponse}
 */
proto.protocols.prometheus.PutConnectorNameResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Connector;
      reader.readMessage(value,common_pb.Connector.deserializeBinaryFromReader);
      msg.setConnector(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutConnectorNameResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutConnectorNameResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutConnectorNameResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutConnectorNameResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getConnector();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Connector.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PutConnectorNameResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PutConnectorNameResponse} returns this
*/
proto.protocols.prometheus.PutConnectorNameResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutConnectorNameResponse} returns this
 */
proto.protocols.prometheus.PutConnectorNameResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutConnectorNameResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Connector connector = 2;
 * @return {?proto.protocols.common.Connector}
 */
proto.protocols.prometheus.PutConnectorNameResponse.prototype.getConnector = function() {
  return /** @type{?proto.protocols.common.Connector} */ (
    jspb.Message.getWrapperField(this, common_pb.Connector, 2));
};


/**
 * @param {?proto.protocols.common.Connector|undefined} value
 * @return {!proto.protocols.prometheus.PutConnectorNameResponse} returns this
*/
proto.protocols.prometheus.PutConnectorNameResponse.prototype.setConnector = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutConnectorNameResponse} returns this
 */
proto.protocols.prometheus.PutConnectorNameResponse.prototype.clearConnector = function() {
  return this.setConnector(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutConnectorNameResponse.prototype.hasConnector = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutConnectorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutConnectorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutConnectorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutConnectorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutConnectorRequest}
 */
proto.protocols.prometheus.PutConnectorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutConnectorRequest;
  return proto.protocols.prometheus.PutConnectorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutConnectorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutConnectorRequest}
 */
proto.protocols.prometheus.PutConnectorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.protocols.common.CONNECTOR_REGISTER_KIND} */ (reader.readEnum());
      msg.setKind(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutConnectorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutConnectorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutConnectorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutConnectorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * optional protocols.common.CONNECTOR_REGISTER_KIND kind = 1;
 * @return {!proto.protocols.common.CONNECTOR_REGISTER_KIND}
 */
proto.protocols.prometheus.PutConnectorRequest.prototype.getKind = function() {
  return /** @type {!proto.protocols.common.CONNECTOR_REGISTER_KIND} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.protocols.common.CONNECTOR_REGISTER_KIND} value
 * @return {!proto.protocols.prometheus.PutConnectorRequest} returns this
 */
proto.protocols.prometheus.PutConnectorRequest.prototype.setKind = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutConnectorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutConnectorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutConnectorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutConnectorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    connector: (f = msg.getConnector()) && common_pb.Connector.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutConnectorResponse}
 */
proto.protocols.prometheus.PutConnectorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutConnectorResponse;
  return proto.protocols.prometheus.PutConnectorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutConnectorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutConnectorResponse}
 */
proto.protocols.prometheus.PutConnectorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Connector;
      reader.readMessage(value,common_pb.Connector.deserializeBinaryFromReader);
      msg.setConnector(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutConnectorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutConnectorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutConnectorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutConnectorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getConnector();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Connector.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PutConnectorResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PutConnectorResponse} returns this
*/
proto.protocols.prometheus.PutConnectorResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutConnectorResponse} returns this
 */
proto.protocols.prometheus.PutConnectorResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutConnectorResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Connector connector = 2;
 * @return {?proto.protocols.common.Connector}
 */
proto.protocols.prometheus.PutConnectorResponse.prototype.getConnector = function() {
  return /** @type{?proto.protocols.common.Connector} */ (
    jspb.Message.getWrapperField(this, common_pb.Connector, 2));
};


/**
 * @param {?proto.protocols.common.Connector|undefined} value
 * @return {!proto.protocols.prometheus.PutConnectorResponse} returns this
*/
proto.protocols.prometheus.PutConnectorResponse.prototype.setConnector = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutConnectorResponse} returns this
 */
proto.protocols.prometheus.PutConnectorResponse.prototype.clearConnector = function() {
  return this.setConnector(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutConnectorResponse.prototype.hasConnector = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.DeleteConnectorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.DeleteConnectorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.DeleteConnectorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteConnectorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.DeleteConnectorResponse}
 */
proto.protocols.prometheus.DeleteConnectorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.DeleteConnectorResponse;
  return proto.protocols.prometheus.DeleteConnectorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.DeleteConnectorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.DeleteConnectorResponse}
 */
proto.protocols.prometheus.DeleteConnectorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.DeleteConnectorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.DeleteConnectorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.DeleteConnectorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteConnectorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.DeleteConnectorResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.DeleteConnectorResponse} returns this
*/
proto.protocols.prometheus.DeleteConnectorResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.DeleteConnectorResponse} returns this
 */
proto.protocols.prometheus.DeleteConnectorResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.DeleteConnectorResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutConnectorSceneResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutConnectorSceneResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutConnectorSceneResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutConnectorSceneResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    scene: (f = msg.getScene()) && common_pb.Scene.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutConnectorSceneResponse}
 */
proto.protocols.prometheus.PutConnectorSceneResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutConnectorSceneResponse;
  return proto.protocols.prometheus.PutConnectorSceneResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutConnectorSceneResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutConnectorSceneResponse}
 */
proto.protocols.prometheus.PutConnectorSceneResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Scene;
      reader.readMessage(value,common_pb.Scene.deserializeBinaryFromReader);
      msg.setScene(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutConnectorSceneResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutConnectorSceneResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutConnectorSceneResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutConnectorSceneResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getScene();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Scene.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PutConnectorSceneResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PutConnectorSceneResponse} returns this
*/
proto.protocols.prometheus.PutConnectorSceneResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutConnectorSceneResponse} returns this
 */
proto.protocols.prometheus.PutConnectorSceneResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutConnectorSceneResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Scene scene = 2;
 * @return {?proto.protocols.common.Scene}
 */
proto.protocols.prometheus.PutConnectorSceneResponse.prototype.getScene = function() {
  return /** @type{?proto.protocols.common.Scene} */ (
    jspb.Message.getWrapperField(this, common_pb.Scene, 2));
};


/**
 * @param {?proto.protocols.common.Scene|undefined} value
 * @return {!proto.protocols.prometheus.PutConnectorSceneResponse} returns this
*/
proto.protocols.prometheus.PutConnectorSceneResponse.prototype.setScene = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutConnectorSceneResponse} returns this
 */
proto.protocols.prometheus.PutConnectorSceneResponse.prototype.clearScene = function() {
  return this.setScene(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutConnectorSceneResponse.prototype.hasScene = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.DeleteConnectorSceneResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.DeleteConnectorSceneResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.DeleteConnectorSceneResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteConnectorSceneResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.DeleteConnectorSceneResponse}
 */
proto.protocols.prometheus.DeleteConnectorSceneResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.DeleteConnectorSceneResponse;
  return proto.protocols.prometheus.DeleteConnectorSceneResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.DeleteConnectorSceneResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.DeleteConnectorSceneResponse}
 */
proto.protocols.prometheus.DeleteConnectorSceneResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.DeleteConnectorSceneResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.DeleteConnectorSceneResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.DeleteConnectorSceneResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteConnectorSceneResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.DeleteConnectorSceneResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.DeleteConnectorSceneResponse} returns this
*/
proto.protocols.prometheus.DeleteConnectorSceneResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.DeleteConnectorSceneResponse} returns this
 */
proto.protocols.prometheus.DeleteConnectorSceneResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.DeleteConnectorSceneResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutConnectorSceneEmergencyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutConnectorSceneEmergencyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutConnectorSceneEmergencyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutConnectorSceneEmergencyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    scene: (f = msg.getScene()) && common_pb.Scene.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutConnectorSceneEmergencyResponse}
 */
proto.protocols.prometheus.PutConnectorSceneEmergencyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutConnectorSceneEmergencyResponse;
  return proto.protocols.prometheus.PutConnectorSceneEmergencyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutConnectorSceneEmergencyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutConnectorSceneEmergencyResponse}
 */
proto.protocols.prometheus.PutConnectorSceneEmergencyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Scene;
      reader.readMessage(value,common_pb.Scene.deserializeBinaryFromReader);
      msg.setScene(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutConnectorSceneEmergencyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutConnectorSceneEmergencyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutConnectorSceneEmergencyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutConnectorSceneEmergencyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getScene();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Scene.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PutConnectorSceneEmergencyResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PutConnectorSceneEmergencyResponse} returns this
*/
proto.protocols.prometheus.PutConnectorSceneEmergencyResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutConnectorSceneEmergencyResponse} returns this
 */
proto.protocols.prometheus.PutConnectorSceneEmergencyResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutConnectorSceneEmergencyResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Scene scene = 2;
 * @return {?proto.protocols.common.Scene}
 */
proto.protocols.prometheus.PutConnectorSceneEmergencyResponse.prototype.getScene = function() {
  return /** @type{?proto.protocols.common.Scene} */ (
    jspb.Message.getWrapperField(this, common_pb.Scene, 2));
};


/**
 * @param {?proto.protocols.common.Scene|undefined} value
 * @return {!proto.protocols.prometheus.PutConnectorSceneEmergencyResponse} returns this
*/
proto.protocols.prometheus.PutConnectorSceneEmergencyResponse.prototype.setScene = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutConnectorSceneEmergencyResponse} returns this
 */
proto.protocols.prometheus.PutConnectorSceneEmergencyResponse.prototype.clearScene = function() {
  return this.setScene(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutConnectorSceneEmergencyResponse.prototype.hasScene = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.DeleteConnectorSceneEmergencyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.DeleteConnectorSceneEmergencyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.DeleteConnectorSceneEmergencyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteConnectorSceneEmergencyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.DeleteConnectorSceneEmergencyResponse}
 */
proto.protocols.prometheus.DeleteConnectorSceneEmergencyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.DeleteConnectorSceneEmergencyResponse;
  return proto.protocols.prometheus.DeleteConnectorSceneEmergencyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.DeleteConnectorSceneEmergencyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.DeleteConnectorSceneEmergencyResponse}
 */
proto.protocols.prometheus.DeleteConnectorSceneEmergencyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.DeleteConnectorSceneEmergencyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.DeleteConnectorSceneEmergencyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.DeleteConnectorSceneEmergencyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteConnectorSceneEmergencyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.DeleteConnectorSceneEmergencyResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.DeleteConnectorSceneEmergencyResponse} returns this
*/
proto.protocols.prometheus.DeleteConnectorSceneEmergencyResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.DeleteConnectorSceneEmergencyResponse} returns this
 */
proto.protocols.prometheus.DeleteConnectorSceneEmergencyResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.DeleteConnectorSceneEmergencyResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutConnectorEmergencyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutConnectorEmergencyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutConnectorEmergencyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutConnectorEmergencyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    connectorid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    isemergency: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutConnectorEmergencyRequest}
 */
proto.protocols.prometheus.PutConnectorEmergencyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutConnectorEmergencyRequest;
  return proto.protocols.prometheus.PutConnectorEmergencyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutConnectorEmergencyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutConnectorEmergencyRequest}
 */
proto.protocols.prometheus.PutConnectorEmergencyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setConnectorid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsemergency(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutConnectorEmergencyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutConnectorEmergencyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutConnectorEmergencyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutConnectorEmergencyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConnectorid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getIsemergency();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional int64 connectorId = 1;
 * @return {number}
 */
proto.protocols.prometheus.PutConnectorEmergencyRequest.prototype.getConnectorid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocols.prometheus.PutConnectorEmergencyRequest} returns this
 */
proto.protocols.prometheus.PutConnectorEmergencyRequest.prototype.setConnectorid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool isEmergency = 2;
 * @return {boolean}
 */
proto.protocols.prometheus.PutConnectorEmergencyRequest.prototype.getIsemergency = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocols.prometheus.PutConnectorEmergencyRequest} returns this
 */
proto.protocols.prometheus.PutConnectorEmergencyRequest.prototype.setIsemergency = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutConnectorEmergencyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutConnectorEmergencyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutConnectorEmergencyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutConnectorEmergencyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutConnectorEmergencyResponse}
 */
proto.protocols.prometheus.PutConnectorEmergencyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutConnectorEmergencyResponse;
  return proto.protocols.prometheus.PutConnectorEmergencyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutConnectorEmergencyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutConnectorEmergencyResponse}
 */
proto.protocols.prometheus.PutConnectorEmergencyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutConnectorEmergencyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutConnectorEmergencyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutConnectorEmergencyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutConnectorEmergencyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PutConnectorEmergencyResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PutConnectorEmergencyResponse} returns this
*/
proto.protocols.prometheus.PutConnectorEmergencyResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutConnectorEmergencyResponse} returns this
 */
proto.protocols.prometheus.PutConnectorEmergencyResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutConnectorEmergencyResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutConnectorEmergencySceneRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutConnectorEmergencySceneRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutConnectorEmergencySceneRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutConnectorEmergencySceneRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sceneid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    isemergency: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutConnectorEmergencySceneRequest}
 */
proto.protocols.prometheus.PutConnectorEmergencySceneRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutConnectorEmergencySceneRequest;
  return proto.protocols.prometheus.PutConnectorEmergencySceneRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutConnectorEmergencySceneRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutConnectorEmergencySceneRequest}
 */
proto.protocols.prometheus.PutConnectorEmergencySceneRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSceneid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsemergency(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutConnectorEmergencySceneRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutConnectorEmergencySceneRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutConnectorEmergencySceneRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutConnectorEmergencySceneRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSceneid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getIsemergency();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional int64 sceneId = 1;
 * @return {number}
 */
proto.protocols.prometheus.PutConnectorEmergencySceneRequest.prototype.getSceneid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocols.prometheus.PutConnectorEmergencySceneRequest} returns this
 */
proto.protocols.prometheus.PutConnectorEmergencySceneRequest.prototype.setSceneid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool isEmergency = 2;
 * @return {boolean}
 */
proto.protocols.prometheus.PutConnectorEmergencySceneRequest.prototype.getIsemergency = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.protocols.prometheus.PutConnectorEmergencySceneRequest} returns this
 */
proto.protocols.prometheus.PutConnectorEmergencySceneRequest.prototype.setIsemergency = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutConnectorEmergencySceneResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutConnectorEmergencySceneResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutConnectorEmergencySceneResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutConnectorEmergencySceneResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    connectorbase: (f = msg.getConnectorbase()) && common_pb.ConnectorBase.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutConnectorEmergencySceneResponse}
 */
proto.protocols.prometheus.PutConnectorEmergencySceneResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutConnectorEmergencySceneResponse;
  return proto.protocols.prometheus.PutConnectorEmergencySceneResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutConnectorEmergencySceneResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutConnectorEmergencySceneResponse}
 */
proto.protocols.prometheus.PutConnectorEmergencySceneResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.ConnectorBase;
      reader.readMessage(value,common_pb.ConnectorBase.deserializeBinaryFromReader);
      msg.setConnectorbase(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutConnectorEmergencySceneResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutConnectorEmergencySceneResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutConnectorEmergencySceneResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutConnectorEmergencySceneResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getConnectorbase();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.ConnectorBase.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PutConnectorEmergencySceneResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PutConnectorEmergencySceneResponse} returns this
*/
proto.protocols.prometheus.PutConnectorEmergencySceneResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutConnectorEmergencySceneResponse} returns this
 */
proto.protocols.prometheus.PutConnectorEmergencySceneResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutConnectorEmergencySceneResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.ConnectorBase connectorBase = 2;
 * @return {?proto.protocols.common.ConnectorBase}
 */
proto.protocols.prometheus.PutConnectorEmergencySceneResponse.prototype.getConnectorbase = function() {
  return /** @type{?proto.protocols.common.ConnectorBase} */ (
    jspb.Message.getWrapperField(this, common_pb.ConnectorBase, 2));
};


/**
 * @param {?proto.protocols.common.ConnectorBase|undefined} value
 * @return {!proto.protocols.prometheus.PutConnectorEmergencySceneResponse} returns this
*/
proto.protocols.prometheus.PutConnectorEmergencySceneResponse.prototype.setConnectorbase = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutConnectorEmergencySceneResponse} returns this
 */
proto.protocols.prometheus.PutConnectorEmergencySceneResponse.prototype.clearConnectorbase = function() {
  return this.setConnectorbase(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutConnectorEmergencySceneResponse.prototype.hasConnectorbase = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.GetScheduleResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetScheduleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetScheduleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetScheduleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetScheduleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    schedulesList: jspb.Message.toObjectList(msg.getSchedulesList(),
    common_pb.Schedule.toObject, includeInstance),
    paginator: (f = msg.getPaginator()) && common_pb.Paginator.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetScheduleResponse}
 */
proto.protocols.prometheus.GetScheduleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetScheduleResponse;
  return proto.protocols.prometheus.GetScheduleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetScheduleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetScheduleResponse}
 */
proto.protocols.prometheus.GetScheduleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Schedule;
      reader.readMessage(value,common_pb.Schedule.deserializeBinaryFromReader);
      msg.addSchedules(value);
      break;
    case 3:
      var value = new common_pb.Paginator;
      reader.readMessage(value,common_pb.Paginator.deserializeBinaryFromReader);
      msg.setPaginator(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetScheduleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetScheduleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetScheduleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetScheduleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getSchedulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_pb.Schedule.serializeBinaryToWriter
    );
  }
  f = message.getPaginator();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_pb.Paginator.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetScheduleResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetScheduleResponse} returns this
*/
proto.protocols.prometheus.GetScheduleResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetScheduleResponse} returns this
 */
proto.protocols.prometheus.GetScheduleResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetScheduleResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated protocols.common.Schedule schedules = 2;
 * @return {!Array<!proto.protocols.common.Schedule>}
 */
proto.protocols.prometheus.GetScheduleResponse.prototype.getSchedulesList = function() {
  return /** @type{!Array<!proto.protocols.common.Schedule>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.Schedule, 2));
};


/**
 * @param {!Array<!proto.protocols.common.Schedule>} value
 * @return {!proto.protocols.prometheus.GetScheduleResponse} returns this
*/
proto.protocols.prometheus.GetScheduleResponse.prototype.setSchedulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protocols.common.Schedule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocols.common.Schedule}
 */
proto.protocols.prometheus.GetScheduleResponse.prototype.addSchedules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protocols.common.Schedule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.GetScheduleResponse} returns this
 */
proto.protocols.prometheus.GetScheduleResponse.prototype.clearSchedulesList = function() {
  return this.setSchedulesList([]);
};


/**
 * optional protocols.common.Paginator paginator = 3;
 * @return {?proto.protocols.common.Paginator}
 */
proto.protocols.prometheus.GetScheduleResponse.prototype.getPaginator = function() {
  return /** @type{?proto.protocols.common.Paginator} */ (
    jspb.Message.getWrapperField(this, common_pb.Paginator, 3));
};


/**
 * @param {?proto.protocols.common.Paginator|undefined} value
 * @return {!proto.protocols.prometheus.GetScheduleResponse} returns this
*/
proto.protocols.prometheus.GetScheduleResponse.prototype.setPaginator = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetScheduleResponse} returns this
 */
proto.protocols.prometheus.GetScheduleResponse.prototype.clearPaginator = function() {
  return this.setPaginator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetScheduleResponse.prototype.hasPaginator = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetScheduleByIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetScheduleByIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetScheduleByIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetScheduleByIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    schedule: (f = msg.getSchedule()) && common_pb.Schedule.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetScheduleByIdResponse}
 */
proto.protocols.prometheus.GetScheduleByIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetScheduleByIdResponse;
  return proto.protocols.prometheus.GetScheduleByIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetScheduleByIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetScheduleByIdResponse}
 */
proto.protocols.prometheus.GetScheduleByIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Schedule;
      reader.readMessage(value,common_pb.Schedule.deserializeBinaryFromReader);
      msg.setSchedule(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetScheduleByIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetScheduleByIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetScheduleByIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetScheduleByIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getSchedule();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Schedule.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetScheduleByIdResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetScheduleByIdResponse} returns this
*/
proto.protocols.prometheus.GetScheduleByIdResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetScheduleByIdResponse} returns this
 */
proto.protocols.prometheus.GetScheduleByIdResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetScheduleByIdResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Schedule schedule = 2;
 * @return {?proto.protocols.common.Schedule}
 */
proto.protocols.prometheus.GetScheduleByIdResponse.prototype.getSchedule = function() {
  return /** @type{?proto.protocols.common.Schedule} */ (
    jspb.Message.getWrapperField(this, common_pb.Schedule, 2));
};


/**
 * @param {?proto.protocols.common.Schedule|undefined} value
 * @return {!proto.protocols.prometheus.GetScheduleByIdResponse} returns this
*/
proto.protocols.prometheus.GetScheduleByIdResponse.prototype.setSchedule = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetScheduleByIdResponse} returns this
 */
proto.protocols.prometheus.GetScheduleByIdResponse.prototype.clearSchedule = function() {
  return this.setSchedule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetScheduleByIdResponse.prototype.hasSchedule = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PostScheduleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PostScheduleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PostScheduleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostScheduleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    schedule: (f = msg.getSchedule()) && common_pb.Schedule.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PostScheduleRequest}
 */
proto.protocols.prometheus.PostScheduleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PostScheduleRequest;
  return proto.protocols.prometheus.PostScheduleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PostScheduleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PostScheduleRequest}
 */
proto.protocols.prometheus.PostScheduleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.Schedule;
      reader.readMessage(value,common_pb.Schedule.deserializeBinaryFromReader);
      msg.setSchedule(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PostScheduleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PostScheduleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PostScheduleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostScheduleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchedule();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.Schedule.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.Schedule schedule = 1;
 * @return {?proto.protocols.common.Schedule}
 */
proto.protocols.prometheus.PostScheduleRequest.prototype.getSchedule = function() {
  return /** @type{?proto.protocols.common.Schedule} */ (
    jspb.Message.getWrapperField(this, common_pb.Schedule, 1));
};


/**
 * @param {?proto.protocols.common.Schedule|undefined} value
 * @return {!proto.protocols.prometheus.PostScheduleRequest} returns this
*/
proto.protocols.prometheus.PostScheduleRequest.prototype.setSchedule = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PostScheduleRequest} returns this
 */
proto.protocols.prometheus.PostScheduleRequest.prototype.clearSchedule = function() {
  return this.setSchedule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PostScheduleRequest.prototype.hasSchedule = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PostScheduleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PostScheduleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PostScheduleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostScheduleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    schedule: (f = msg.getSchedule()) && common_pb.Schedule.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PostScheduleResponse}
 */
proto.protocols.prometheus.PostScheduleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PostScheduleResponse;
  return proto.protocols.prometheus.PostScheduleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PostScheduleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PostScheduleResponse}
 */
proto.protocols.prometheus.PostScheduleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Schedule;
      reader.readMessage(value,common_pb.Schedule.deserializeBinaryFromReader);
      msg.setSchedule(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PostScheduleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PostScheduleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PostScheduleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostScheduleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getSchedule();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Schedule.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PostScheduleResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PostScheduleResponse} returns this
*/
proto.protocols.prometheus.PostScheduleResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PostScheduleResponse} returns this
 */
proto.protocols.prometheus.PostScheduleResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PostScheduleResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Schedule schedule = 2;
 * @return {?proto.protocols.common.Schedule}
 */
proto.protocols.prometheus.PostScheduleResponse.prototype.getSchedule = function() {
  return /** @type{?proto.protocols.common.Schedule} */ (
    jspb.Message.getWrapperField(this, common_pb.Schedule, 2));
};


/**
 * @param {?proto.protocols.common.Schedule|undefined} value
 * @return {!proto.protocols.prometheus.PostScheduleResponse} returns this
*/
proto.protocols.prometheus.PostScheduleResponse.prototype.setSchedule = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PostScheduleResponse} returns this
 */
proto.protocols.prometheus.PostScheduleResponse.prototype.clearSchedule = function() {
  return this.setSchedule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PostScheduleResponse.prototype.hasSchedule = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PostScheduleSceneRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PostScheduleSceneRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PostScheduleSceneRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostScheduleSceneRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sceneid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PostScheduleSceneRequest}
 */
proto.protocols.prometheus.PostScheduleSceneRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PostScheduleSceneRequest;
  return proto.protocols.prometheus.PostScheduleSceneRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PostScheduleSceneRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PostScheduleSceneRequest}
 */
proto.protocols.prometheus.PostScheduleSceneRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSceneid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PostScheduleSceneRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PostScheduleSceneRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PostScheduleSceneRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostScheduleSceneRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSceneid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.protocols.prometheus.PostScheduleSceneRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocols.prometheus.PostScheduleSceneRequest} returns this
 */
proto.protocols.prometheus.PostScheduleSceneRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 sceneId = 2;
 * @return {number}
 */
proto.protocols.prometheus.PostScheduleSceneRequest.prototype.getSceneid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocols.prometheus.PostScheduleSceneRequest} returns this
 */
proto.protocols.prometheus.PostScheduleSceneRequest.prototype.setSceneid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PostScheduleSceneResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PostScheduleSceneResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PostScheduleSceneResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostScheduleSceneResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    schedulescene: (f = msg.getSchedulescene()) && common_pb.ScheduleScene.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PostScheduleSceneResponse}
 */
proto.protocols.prometheus.PostScheduleSceneResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PostScheduleSceneResponse;
  return proto.protocols.prometheus.PostScheduleSceneResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PostScheduleSceneResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PostScheduleSceneResponse}
 */
proto.protocols.prometheus.PostScheduleSceneResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.ScheduleScene;
      reader.readMessage(value,common_pb.ScheduleScene.deserializeBinaryFromReader);
      msg.setSchedulescene(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PostScheduleSceneResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PostScheduleSceneResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PostScheduleSceneResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostScheduleSceneResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getSchedulescene();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.ScheduleScene.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PostScheduleSceneResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PostScheduleSceneResponse} returns this
*/
proto.protocols.prometheus.PostScheduleSceneResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PostScheduleSceneResponse} returns this
 */
proto.protocols.prometheus.PostScheduleSceneResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PostScheduleSceneResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.ScheduleScene scheduleScene = 2;
 * @return {?proto.protocols.common.ScheduleScene}
 */
proto.protocols.prometheus.PostScheduleSceneResponse.prototype.getSchedulescene = function() {
  return /** @type{?proto.protocols.common.ScheduleScene} */ (
    jspb.Message.getWrapperField(this, common_pb.ScheduleScene, 2));
};


/**
 * @param {?proto.protocols.common.ScheduleScene|undefined} value
 * @return {!proto.protocols.prometheus.PostScheduleSceneResponse} returns this
*/
proto.protocols.prometheus.PostScheduleSceneResponse.prototype.setSchedulescene = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PostScheduleSceneResponse} returns this
 */
proto.protocols.prometheus.PostScheduleSceneResponse.prototype.clearSchedulescene = function() {
  return this.setSchedulescene(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PostScheduleSceneResponse.prototype.hasSchedulescene = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutScheduleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutScheduleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutScheduleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutScheduleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    schedule: (f = msg.getSchedule()) && common_pb.Schedule.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutScheduleRequest}
 */
proto.protocols.prometheus.PutScheduleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutScheduleRequest;
  return proto.protocols.prometheus.PutScheduleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutScheduleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutScheduleRequest}
 */
proto.protocols.prometheus.PutScheduleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.Schedule;
      reader.readMessage(value,common_pb.Schedule.deserializeBinaryFromReader);
      msg.setSchedule(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutScheduleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutScheduleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutScheduleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutScheduleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchedule();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.Schedule.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.Schedule schedule = 1;
 * @return {?proto.protocols.common.Schedule}
 */
proto.protocols.prometheus.PutScheduleRequest.prototype.getSchedule = function() {
  return /** @type{?proto.protocols.common.Schedule} */ (
    jspb.Message.getWrapperField(this, common_pb.Schedule, 1));
};


/**
 * @param {?proto.protocols.common.Schedule|undefined} value
 * @return {!proto.protocols.prometheus.PutScheduleRequest} returns this
*/
proto.protocols.prometheus.PutScheduleRequest.prototype.setSchedule = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutScheduleRequest} returns this
 */
proto.protocols.prometheus.PutScheduleRequest.prototype.clearSchedule = function() {
  return this.setSchedule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutScheduleRequest.prototype.hasSchedule = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutScheduleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutScheduleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutScheduleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutScheduleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    schedule: (f = msg.getSchedule()) && common_pb.Schedule.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutScheduleResponse}
 */
proto.protocols.prometheus.PutScheduleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutScheduleResponse;
  return proto.protocols.prometheus.PutScheduleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutScheduleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutScheduleResponse}
 */
proto.protocols.prometheus.PutScheduleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Schedule;
      reader.readMessage(value,common_pb.Schedule.deserializeBinaryFromReader);
      msg.setSchedule(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutScheduleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutScheduleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutScheduleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutScheduleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getSchedule();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Schedule.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PutScheduleResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PutScheduleResponse} returns this
*/
proto.protocols.prometheus.PutScheduleResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutScheduleResponse} returns this
 */
proto.protocols.prometheus.PutScheduleResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutScheduleResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Schedule schedule = 2;
 * @return {?proto.protocols.common.Schedule}
 */
proto.protocols.prometheus.PutScheduleResponse.prototype.getSchedule = function() {
  return /** @type{?proto.protocols.common.Schedule} */ (
    jspb.Message.getWrapperField(this, common_pb.Schedule, 2));
};


/**
 * @param {?proto.protocols.common.Schedule|undefined} value
 * @return {!proto.protocols.prometheus.PutScheduleResponse} returns this
*/
proto.protocols.prometheus.PutScheduleResponse.prototype.setSchedule = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutScheduleResponse} returns this
 */
proto.protocols.prometheus.PutScheduleResponse.prototype.clearSchedule = function() {
  return this.setSchedule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutScheduleResponse.prototype.hasSchedule = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.DeleteScheduleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.DeleteScheduleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.DeleteScheduleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteScheduleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.DeleteScheduleResponse}
 */
proto.protocols.prometheus.DeleteScheduleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.DeleteScheduleResponse;
  return proto.protocols.prometheus.DeleteScheduleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.DeleteScheduleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.DeleteScheduleResponse}
 */
proto.protocols.prometheus.DeleteScheduleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.DeleteScheduleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.DeleteScheduleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.DeleteScheduleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteScheduleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.DeleteScheduleResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.DeleteScheduleResponse} returns this
*/
proto.protocols.prometheus.DeleteScheduleResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.DeleteScheduleResponse} returns this
 */
proto.protocols.prometheus.DeleteScheduleResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.DeleteScheduleResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.GetScheduleSceneResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetScheduleSceneResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetScheduleSceneResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetScheduleSceneResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetScheduleSceneResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    schedulescenesList: jspb.Message.toObjectList(msg.getSchedulescenesList(),
    common_pb.ScheduleScene.toObject, includeInstance),
    paginator: (f = msg.getPaginator()) && common_pb.Paginator.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetScheduleSceneResponse}
 */
proto.protocols.prometheus.GetScheduleSceneResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetScheduleSceneResponse;
  return proto.protocols.prometheus.GetScheduleSceneResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetScheduleSceneResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetScheduleSceneResponse}
 */
proto.protocols.prometheus.GetScheduleSceneResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.ScheduleScene;
      reader.readMessage(value,common_pb.ScheduleScene.deserializeBinaryFromReader);
      msg.addSchedulescenes(value);
      break;
    case 3:
      var value = new common_pb.Paginator;
      reader.readMessage(value,common_pb.Paginator.deserializeBinaryFromReader);
      msg.setPaginator(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetScheduleSceneResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetScheduleSceneResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetScheduleSceneResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetScheduleSceneResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getSchedulescenesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_pb.ScheduleScene.serializeBinaryToWriter
    );
  }
  f = message.getPaginator();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_pb.Paginator.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetScheduleSceneResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetScheduleSceneResponse} returns this
*/
proto.protocols.prometheus.GetScheduleSceneResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetScheduleSceneResponse} returns this
 */
proto.protocols.prometheus.GetScheduleSceneResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetScheduleSceneResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated protocols.common.ScheduleScene scheduleScenes = 2;
 * @return {!Array<!proto.protocols.common.ScheduleScene>}
 */
proto.protocols.prometheus.GetScheduleSceneResponse.prototype.getSchedulescenesList = function() {
  return /** @type{!Array<!proto.protocols.common.ScheduleScene>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.ScheduleScene, 2));
};


/**
 * @param {!Array<!proto.protocols.common.ScheduleScene>} value
 * @return {!proto.protocols.prometheus.GetScheduleSceneResponse} returns this
*/
proto.protocols.prometheus.GetScheduleSceneResponse.prototype.setSchedulescenesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protocols.common.ScheduleScene=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocols.common.ScheduleScene}
 */
proto.protocols.prometheus.GetScheduleSceneResponse.prototype.addSchedulescenes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protocols.common.ScheduleScene, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.GetScheduleSceneResponse} returns this
 */
proto.protocols.prometheus.GetScheduleSceneResponse.prototype.clearSchedulescenesList = function() {
  return this.setSchedulescenesList([]);
};


/**
 * optional protocols.common.Paginator paginator = 3;
 * @return {?proto.protocols.common.Paginator}
 */
proto.protocols.prometheus.GetScheduleSceneResponse.prototype.getPaginator = function() {
  return /** @type{?proto.protocols.common.Paginator} */ (
    jspb.Message.getWrapperField(this, common_pb.Paginator, 3));
};


/**
 * @param {?proto.protocols.common.Paginator|undefined} value
 * @return {!proto.protocols.prometheus.GetScheduleSceneResponse} returns this
*/
proto.protocols.prometheus.GetScheduleSceneResponse.prototype.setPaginator = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetScheduleSceneResponse} returns this
 */
proto.protocols.prometheus.GetScheduleSceneResponse.prototype.clearPaginator = function() {
  return this.setPaginator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetScheduleSceneResponse.prototype.hasPaginator = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetScheduleSceneByIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetScheduleSceneByIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetScheduleSceneByIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetScheduleSceneByIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    schedulescene: (f = msg.getSchedulescene()) && common_pb.ScheduleScene.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetScheduleSceneByIdResponse}
 */
proto.protocols.prometheus.GetScheduleSceneByIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetScheduleSceneByIdResponse;
  return proto.protocols.prometheus.GetScheduleSceneByIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetScheduleSceneByIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetScheduleSceneByIdResponse}
 */
proto.protocols.prometheus.GetScheduleSceneByIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.ScheduleScene;
      reader.readMessage(value,common_pb.ScheduleScene.deserializeBinaryFromReader);
      msg.setSchedulescene(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetScheduleSceneByIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetScheduleSceneByIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetScheduleSceneByIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetScheduleSceneByIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getSchedulescene();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.ScheduleScene.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetScheduleSceneByIdResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetScheduleSceneByIdResponse} returns this
*/
proto.protocols.prometheus.GetScheduleSceneByIdResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetScheduleSceneByIdResponse} returns this
 */
proto.protocols.prometheus.GetScheduleSceneByIdResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetScheduleSceneByIdResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.ScheduleScene scheduleScene = 2;
 * @return {?proto.protocols.common.ScheduleScene}
 */
proto.protocols.prometheus.GetScheduleSceneByIdResponse.prototype.getSchedulescene = function() {
  return /** @type{?proto.protocols.common.ScheduleScene} */ (
    jspb.Message.getWrapperField(this, common_pb.ScheduleScene, 2));
};


/**
 * @param {?proto.protocols.common.ScheduleScene|undefined} value
 * @return {!proto.protocols.prometheus.GetScheduleSceneByIdResponse} returns this
*/
proto.protocols.prometheus.GetScheduleSceneByIdResponse.prototype.setSchedulescene = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetScheduleSceneByIdResponse} returns this
 */
proto.protocols.prometheus.GetScheduleSceneByIdResponse.prototype.clearSchedulescene = function() {
  return this.setSchedulescene(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetScheduleSceneByIdResponse.prototype.hasSchedulescene = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutScheduleSceneRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutScheduleSceneRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutScheduleSceneRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutScheduleSceneRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    scheduleid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sceneid: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutScheduleSceneRequest}
 */
proto.protocols.prometheus.PutScheduleSceneRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutScheduleSceneRequest;
  return proto.protocols.prometheus.PutScheduleSceneRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutScheduleSceneRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutScheduleSceneRequest}
 */
proto.protocols.prometheus.PutScheduleSceneRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setScheduleid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSceneid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutScheduleSceneRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutScheduleSceneRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutScheduleSceneRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutScheduleSceneRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getScheduleid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getSceneid();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.protocols.prometheus.PutScheduleSceneRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocols.prometheus.PutScheduleSceneRequest} returns this
 */
proto.protocols.prometheus.PutScheduleSceneRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 scheduleId = 2;
 * @return {number}
 */
proto.protocols.prometheus.PutScheduleSceneRequest.prototype.getScheduleid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocols.prometheus.PutScheduleSceneRequest} returns this
 */
proto.protocols.prometheus.PutScheduleSceneRequest.prototype.setScheduleid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 sceneId = 3;
 * @return {number}
 */
proto.protocols.prometheus.PutScheduleSceneRequest.prototype.getSceneid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocols.prometheus.PutScheduleSceneRequest} returns this
 */
proto.protocols.prometheus.PutScheduleSceneRequest.prototype.setSceneid = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutScheduleSceneResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutScheduleSceneResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutScheduleSceneResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutScheduleSceneResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    schedulescene: (f = msg.getSchedulescene()) && common_pb.ScheduleScene.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutScheduleSceneResponse}
 */
proto.protocols.prometheus.PutScheduleSceneResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutScheduleSceneResponse;
  return proto.protocols.prometheus.PutScheduleSceneResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutScheduleSceneResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutScheduleSceneResponse}
 */
proto.protocols.prometheus.PutScheduleSceneResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.ScheduleScene;
      reader.readMessage(value,common_pb.ScheduleScene.deserializeBinaryFromReader);
      msg.setSchedulescene(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutScheduleSceneResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutScheduleSceneResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutScheduleSceneResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutScheduleSceneResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getSchedulescene();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.ScheduleScene.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PutScheduleSceneResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PutScheduleSceneResponse} returns this
*/
proto.protocols.prometheus.PutScheduleSceneResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutScheduleSceneResponse} returns this
 */
proto.protocols.prometheus.PutScheduleSceneResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutScheduleSceneResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.ScheduleScene scheduleScene = 2;
 * @return {?proto.protocols.common.ScheduleScene}
 */
proto.protocols.prometheus.PutScheduleSceneResponse.prototype.getSchedulescene = function() {
  return /** @type{?proto.protocols.common.ScheduleScene} */ (
    jspb.Message.getWrapperField(this, common_pb.ScheduleScene, 2));
};


/**
 * @param {?proto.protocols.common.ScheduleScene|undefined} value
 * @return {!proto.protocols.prometheus.PutScheduleSceneResponse} returns this
*/
proto.protocols.prometheus.PutScheduleSceneResponse.prototype.setSchedulescene = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutScheduleSceneResponse} returns this
 */
proto.protocols.prometheus.PutScheduleSceneResponse.prototype.clearSchedulescene = function() {
  return this.setSchedulescene(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutScheduleSceneResponse.prototype.hasSchedulescene = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.DeleteScheduleSceneResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.DeleteScheduleSceneResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.DeleteScheduleSceneResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteScheduleSceneResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.DeleteScheduleSceneResponse}
 */
proto.protocols.prometheus.DeleteScheduleSceneResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.DeleteScheduleSceneResponse;
  return proto.protocols.prometheus.DeleteScheduleSceneResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.DeleteScheduleSceneResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.DeleteScheduleSceneResponse}
 */
proto.protocols.prometheus.DeleteScheduleSceneResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.DeleteScheduleSceneResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.DeleteScheduleSceneResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.DeleteScheduleSceneResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteScheduleSceneResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.DeleteScheduleSceneResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.DeleteScheduleSceneResponse} returns this
*/
proto.protocols.prometheus.DeleteScheduleSceneResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.DeleteScheduleSceneResponse} returns this
 */
proto.protocols.prometheus.DeleteScheduleSceneResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.DeleteScheduleSceneResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PostConnectorScheduleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PostConnectorScheduleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PostConnectorScheduleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostConnectorScheduleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    schedulesceneid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PostConnectorScheduleRequest}
 */
proto.protocols.prometheus.PostConnectorScheduleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PostConnectorScheduleRequest;
  return proto.protocols.prometheus.PostConnectorScheduleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PostConnectorScheduleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PostConnectorScheduleRequest}
 */
proto.protocols.prometheus.PostConnectorScheduleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSchedulesceneid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PostConnectorScheduleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PostConnectorScheduleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PostConnectorScheduleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostConnectorScheduleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSchedulesceneid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 scheduleSceneId = 1;
 * @return {number}
 */
proto.protocols.prometheus.PostConnectorScheduleRequest.prototype.getSchedulesceneid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocols.prometheus.PostConnectorScheduleRequest} returns this
 */
proto.protocols.prometheus.PostConnectorScheduleRequest.prototype.setSchedulesceneid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PostConnectorScheduleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PostConnectorScheduleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PostConnectorScheduleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostConnectorScheduleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    connectorschedulescene: (f = msg.getConnectorschedulescene()) && common_pb.ConnectorScheduleScene.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PostConnectorScheduleResponse}
 */
proto.protocols.prometheus.PostConnectorScheduleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PostConnectorScheduleResponse;
  return proto.protocols.prometheus.PostConnectorScheduleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PostConnectorScheduleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PostConnectorScheduleResponse}
 */
proto.protocols.prometheus.PostConnectorScheduleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.ConnectorScheduleScene;
      reader.readMessage(value,common_pb.ConnectorScheduleScene.deserializeBinaryFromReader);
      msg.setConnectorschedulescene(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PostConnectorScheduleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PostConnectorScheduleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PostConnectorScheduleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostConnectorScheduleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getConnectorschedulescene();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.ConnectorScheduleScene.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PostConnectorScheduleResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PostConnectorScheduleResponse} returns this
*/
proto.protocols.prometheus.PostConnectorScheduleResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PostConnectorScheduleResponse} returns this
 */
proto.protocols.prometheus.PostConnectorScheduleResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PostConnectorScheduleResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.ConnectorScheduleScene connectorScheduleScene = 2;
 * @return {?proto.protocols.common.ConnectorScheduleScene}
 */
proto.protocols.prometheus.PostConnectorScheduleResponse.prototype.getConnectorschedulescene = function() {
  return /** @type{?proto.protocols.common.ConnectorScheduleScene} */ (
    jspb.Message.getWrapperField(this, common_pb.ConnectorScheduleScene, 2));
};


/**
 * @param {?proto.protocols.common.ConnectorScheduleScene|undefined} value
 * @return {!proto.protocols.prometheus.PostConnectorScheduleResponse} returns this
*/
proto.protocols.prometheus.PostConnectorScheduleResponse.prototype.setConnectorschedulescene = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PostConnectorScheduleResponse} returns this
 */
proto.protocols.prometheus.PostConnectorScheduleResponse.prototype.clearConnectorschedulescene = function() {
  return this.setConnectorschedulescene(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PostConnectorScheduleResponse.prototype.hasConnectorschedulescene = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutConnectorScheduleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutConnectorScheduleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutConnectorScheduleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutConnectorScheduleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    scenebase: (f = msg.getScenebase()) && common_pb.SceneBase.toObject(includeInstance, f),
    schedule: (f = msg.getSchedule()) && common_pb.Schedule.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutConnectorScheduleRequest}
 */
proto.protocols.prometheus.PutConnectorScheduleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutConnectorScheduleRequest;
  return proto.protocols.prometheus.PutConnectorScheduleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutConnectorScheduleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutConnectorScheduleRequest}
 */
proto.protocols.prometheus.PutConnectorScheduleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.SceneBase;
      reader.readMessage(value,common_pb.SceneBase.deserializeBinaryFromReader);
      msg.setScenebase(value);
      break;
    case 2:
      var value = new common_pb.Schedule;
      reader.readMessage(value,common_pb.Schedule.deserializeBinaryFromReader);
      msg.setSchedule(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutConnectorScheduleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutConnectorScheduleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutConnectorScheduleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutConnectorScheduleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScenebase();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.SceneBase.serializeBinaryToWriter
    );
  }
  f = message.getSchedule();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Schedule.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.SceneBase sceneBase = 1;
 * @return {?proto.protocols.common.SceneBase}
 */
proto.protocols.prometheus.PutConnectorScheduleRequest.prototype.getScenebase = function() {
  return /** @type{?proto.protocols.common.SceneBase} */ (
    jspb.Message.getWrapperField(this, common_pb.SceneBase, 1));
};


/**
 * @param {?proto.protocols.common.SceneBase|undefined} value
 * @return {!proto.protocols.prometheus.PutConnectorScheduleRequest} returns this
*/
proto.protocols.prometheus.PutConnectorScheduleRequest.prototype.setScenebase = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutConnectorScheduleRequest} returns this
 */
proto.protocols.prometheus.PutConnectorScheduleRequest.prototype.clearScenebase = function() {
  return this.setScenebase(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutConnectorScheduleRequest.prototype.hasScenebase = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Schedule schedule = 2;
 * @return {?proto.protocols.common.Schedule}
 */
proto.protocols.prometheus.PutConnectorScheduleRequest.prototype.getSchedule = function() {
  return /** @type{?proto.protocols.common.Schedule} */ (
    jspb.Message.getWrapperField(this, common_pb.Schedule, 2));
};


/**
 * @param {?proto.protocols.common.Schedule|undefined} value
 * @return {!proto.protocols.prometheus.PutConnectorScheduleRequest} returns this
*/
proto.protocols.prometheus.PutConnectorScheduleRequest.prototype.setSchedule = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutConnectorScheduleRequest} returns this
 */
proto.protocols.prometheus.PutConnectorScheduleRequest.prototype.clearSchedule = function() {
  return this.setSchedule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutConnectorScheduleRequest.prototype.hasSchedule = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutConnectorScheduleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutConnectorScheduleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutConnectorScheduleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutConnectorScheduleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    connectorschedulescene: (f = msg.getConnectorschedulescene()) && common_pb.ConnectorScheduleScene.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutConnectorScheduleResponse}
 */
proto.protocols.prometheus.PutConnectorScheduleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutConnectorScheduleResponse;
  return proto.protocols.prometheus.PutConnectorScheduleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutConnectorScheduleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutConnectorScheduleResponse}
 */
proto.protocols.prometheus.PutConnectorScheduleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.ConnectorScheduleScene;
      reader.readMessage(value,common_pb.ConnectorScheduleScene.deserializeBinaryFromReader);
      msg.setConnectorschedulescene(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutConnectorScheduleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutConnectorScheduleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutConnectorScheduleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutConnectorScheduleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getConnectorschedulescene();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.ConnectorScheduleScene.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PutConnectorScheduleResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PutConnectorScheduleResponse} returns this
*/
proto.protocols.prometheus.PutConnectorScheduleResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutConnectorScheduleResponse} returns this
 */
proto.protocols.prometheus.PutConnectorScheduleResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutConnectorScheduleResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.ConnectorScheduleScene connectorScheduleScene = 2;
 * @return {?proto.protocols.common.ConnectorScheduleScene}
 */
proto.protocols.prometheus.PutConnectorScheduleResponse.prototype.getConnectorschedulescene = function() {
  return /** @type{?proto.protocols.common.ConnectorScheduleScene} */ (
    jspb.Message.getWrapperField(this, common_pb.ConnectorScheduleScene, 2));
};


/**
 * @param {?proto.protocols.common.ConnectorScheduleScene|undefined} value
 * @return {!proto.protocols.prometheus.PutConnectorScheduleResponse} returns this
*/
proto.protocols.prometheus.PutConnectorScheduleResponse.prototype.setConnectorschedulescene = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutConnectorScheduleResponse} returns this
 */
proto.protocols.prometheus.PutConnectorScheduleResponse.prototype.clearConnectorschedulescene = function() {
  return this.setConnectorschedulescene(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutConnectorScheduleResponse.prototype.hasConnectorschedulescene = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.DeleteConnectorScheduleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.DeleteConnectorScheduleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.DeleteConnectorScheduleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteConnectorScheduleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.DeleteConnectorScheduleResponse}
 */
proto.protocols.prometheus.DeleteConnectorScheduleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.DeleteConnectorScheduleResponse;
  return proto.protocols.prometheus.DeleteConnectorScheduleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.DeleteConnectorScheduleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.DeleteConnectorScheduleResponse}
 */
proto.protocols.prometheus.DeleteConnectorScheduleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.DeleteConnectorScheduleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.DeleteConnectorScheduleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.DeleteConnectorScheduleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteConnectorScheduleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.DeleteConnectorScheduleResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.DeleteConnectorScheduleResponse} returns this
*/
proto.protocols.prometheus.DeleteConnectorScheduleResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.DeleteConnectorScheduleResponse} returns this
 */
proto.protocols.prometheus.DeleteConnectorScheduleResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.DeleteConnectorScheduleResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetWeatherResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetWeatherResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetWeatherResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetWeatherResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    weather: (f = msg.getWeather()) && common_pb.Weather.toObject(includeInstance, f),
    datetimeseconds: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetWeatherResponse}
 */
proto.protocols.prometheus.GetWeatherResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetWeatherResponse;
  return proto.protocols.prometheus.GetWeatherResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetWeatherResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetWeatherResponse}
 */
proto.protocols.prometheus.GetWeatherResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Weather;
      reader.readMessage(value,common_pb.Weather.deserializeBinaryFromReader);
      msg.setWeather(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDatetimeseconds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetWeatherResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetWeatherResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetWeatherResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetWeatherResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getWeather();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Weather.serializeBinaryToWriter
    );
  }
  f = message.getDatetimeseconds();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetWeatherResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetWeatherResponse} returns this
*/
proto.protocols.prometheus.GetWeatherResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetWeatherResponse} returns this
 */
proto.protocols.prometheus.GetWeatherResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetWeatherResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Weather weather = 2;
 * @return {?proto.protocols.common.Weather}
 */
proto.protocols.prometheus.GetWeatherResponse.prototype.getWeather = function() {
  return /** @type{?proto.protocols.common.Weather} */ (
    jspb.Message.getWrapperField(this, common_pb.Weather, 2));
};


/**
 * @param {?proto.protocols.common.Weather|undefined} value
 * @return {!proto.protocols.prometheus.GetWeatherResponse} returns this
*/
proto.protocols.prometheus.GetWeatherResponse.prototype.setWeather = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetWeatherResponse} returns this
 */
proto.protocols.prometheus.GetWeatherResponse.prototype.clearWeather = function() {
  return this.setWeather(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetWeatherResponse.prototype.hasWeather = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 dateTimeSeconds = 3;
 * @return {number}
 */
proto.protocols.prometheus.GetWeatherResponse.prototype.getDatetimeseconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocols.prometheus.GetWeatherResponse} returns this
 */
proto.protocols.prometheus.GetWeatherResponse.prototype.setDatetimeseconds = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetDepartmentResourceFolderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetDepartmentResourceFolderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetDepartmentResourceFolderResponse}
 */
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetDepartmentResourceFolderResponse;
  return proto.protocols.prometheus.GetDepartmentResourceFolderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetDepartmentResourceFolderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetDepartmentResourceFolderResponse}
 */
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item;
      reader.readMessage(value,proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetDepartmentResourceFolderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetDepartmentResourceFolderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    departmentnodebase: (f = msg.getDepartmentnodebase()) && common_pb.DepartmentNodeBase.toObject(includeInstance, f),
    departmentbase: (f = msg.getDepartmentbase()) && common_pb.DepartmentBase.toObject(includeInstance, f),
    resourcefoldersList: jspb.Message.toObjectList(msg.getResourcefoldersList(),
    common_pb.DepartmentResourceFolder.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item}
 */
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item;
  return proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item}
 */
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.DepartmentNodeBase;
      reader.readMessage(value,common_pb.DepartmentNodeBase.deserializeBinaryFromReader);
      msg.setDepartmentnodebase(value);
      break;
    case 2:
      var value = new common_pb.DepartmentBase;
      reader.readMessage(value,common_pb.DepartmentBase.deserializeBinaryFromReader);
      msg.setDepartmentbase(value);
      break;
    case 3:
      var value = new common_pb.DepartmentResourceFolder;
      reader.readMessage(value,common_pb.DepartmentResourceFolder.deserializeBinaryFromReader);
      msg.addResourcefolders(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDepartmentnodebase();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.DepartmentNodeBase.serializeBinaryToWriter
    );
  }
  f = message.getDepartmentbase();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.DepartmentBase.serializeBinaryToWriter
    );
  }
  f = message.getResourcefoldersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      common_pb.DepartmentResourceFolder.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.DepartmentNodeBase departmentNodeBase = 1;
 * @return {?proto.protocols.common.DepartmentNodeBase}
 */
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item.prototype.getDepartmentnodebase = function() {
  return /** @type{?proto.protocols.common.DepartmentNodeBase} */ (
    jspb.Message.getWrapperField(this, common_pb.DepartmentNodeBase, 1));
};


/**
 * @param {?proto.protocols.common.DepartmentNodeBase|undefined} value
 * @return {!proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item} returns this
*/
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item.prototype.setDepartmentnodebase = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item} returns this
 */
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item.prototype.clearDepartmentnodebase = function() {
  return this.setDepartmentnodebase(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item.prototype.hasDepartmentnodebase = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.DepartmentBase departmentBase = 2;
 * @return {?proto.protocols.common.DepartmentBase}
 */
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item.prototype.getDepartmentbase = function() {
  return /** @type{?proto.protocols.common.DepartmentBase} */ (
    jspb.Message.getWrapperField(this, common_pb.DepartmentBase, 2));
};


/**
 * @param {?proto.protocols.common.DepartmentBase|undefined} value
 * @return {!proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item} returns this
*/
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item.prototype.setDepartmentbase = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item} returns this
 */
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item.prototype.clearDepartmentbase = function() {
  return this.setDepartmentbase(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item.prototype.hasDepartmentbase = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated protocols.common.DepartmentResourceFolder resourceFolders = 3;
 * @return {!Array<!proto.protocols.common.DepartmentResourceFolder>}
 */
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item.prototype.getResourcefoldersList = function() {
  return /** @type{!Array<!proto.protocols.common.DepartmentResourceFolder>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.DepartmentResourceFolder, 3));
};


/**
 * @param {!Array<!proto.protocols.common.DepartmentResourceFolder>} value
 * @return {!proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item} returns this
*/
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item.prototype.setResourcefoldersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.protocols.common.DepartmentResourceFolder=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocols.common.DepartmentResourceFolder}
 */
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item.prototype.addResourcefolders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.protocols.common.DepartmentResourceFolder, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item} returns this
 */
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item.prototype.clearResourcefoldersList = function() {
  return this.setResourcefoldersList([]);
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetDepartmentResourceFolderResponse} returns this
*/
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetDepartmentResourceFolderResponse} returns this
 */
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Item items = 2;
 * @return {!Array<!proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item>}
 */
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item, 2));
};


/**
 * @param {!Array<!proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item>} value
 * @return {!proto.protocols.prometheus.GetDepartmentResourceFolderResponse} returns this
*/
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item}
 */
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protocols.prometheus.GetDepartmentResourceFolderResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.GetDepartmentResourceFolderResponse} returns this
 */
proto.protocols.prometheus.GetDepartmentResourceFolderResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PostDepartmentResourceFolderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PostDepartmentResourceFolderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PostDepartmentResourceFolderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostDepartmentResourceFolderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parentdepartmentresourcefolderid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PostDepartmentResourceFolderRequest}
 */
proto.protocols.prometheus.PostDepartmentResourceFolderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PostDepartmentResourceFolderRequest;
  return proto.protocols.prometheus.PostDepartmentResourceFolderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PostDepartmentResourceFolderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PostDepartmentResourceFolderRequest}
 */
proto.protocols.prometheus.PostDepartmentResourceFolderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setParentdepartmentresourcefolderid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PostDepartmentResourceFolderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PostDepartmentResourceFolderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PostDepartmentResourceFolderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostDepartmentResourceFolderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParentdepartmentresourcefolderid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.protocols.prometheus.PostDepartmentResourceFolderRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocols.prometheus.PostDepartmentResourceFolderRequest} returns this
 */
proto.protocols.prometheus.PostDepartmentResourceFolderRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 parentDepartmentResourceFolderId = 2;
 * @return {number}
 */
proto.protocols.prometheus.PostDepartmentResourceFolderRequest.prototype.getParentdepartmentresourcefolderid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocols.prometheus.PostDepartmentResourceFolderRequest} returns this
 */
proto.protocols.prometheus.PostDepartmentResourceFolderRequest.prototype.setParentdepartmentresourcefolderid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PostDepartmentResourceFolderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PostDepartmentResourceFolderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PostDepartmentResourceFolderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostDepartmentResourceFolderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    departmentresourcefolder: (f = msg.getDepartmentresourcefolder()) && common_pb.DepartmentResourceFolder.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PostDepartmentResourceFolderResponse}
 */
proto.protocols.prometheus.PostDepartmentResourceFolderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PostDepartmentResourceFolderResponse;
  return proto.protocols.prometheus.PostDepartmentResourceFolderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PostDepartmentResourceFolderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PostDepartmentResourceFolderResponse}
 */
proto.protocols.prometheus.PostDepartmentResourceFolderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.DepartmentResourceFolder;
      reader.readMessage(value,common_pb.DepartmentResourceFolder.deserializeBinaryFromReader);
      msg.setDepartmentresourcefolder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PostDepartmentResourceFolderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PostDepartmentResourceFolderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PostDepartmentResourceFolderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostDepartmentResourceFolderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getDepartmentresourcefolder();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.DepartmentResourceFolder.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PostDepartmentResourceFolderResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PostDepartmentResourceFolderResponse} returns this
*/
proto.protocols.prometheus.PostDepartmentResourceFolderResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PostDepartmentResourceFolderResponse} returns this
 */
proto.protocols.prometheus.PostDepartmentResourceFolderResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PostDepartmentResourceFolderResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.DepartmentResourceFolder departmentResourceFolder = 2;
 * @return {?proto.protocols.common.DepartmentResourceFolder}
 */
proto.protocols.prometheus.PostDepartmentResourceFolderResponse.prototype.getDepartmentresourcefolder = function() {
  return /** @type{?proto.protocols.common.DepartmentResourceFolder} */ (
    jspb.Message.getWrapperField(this, common_pb.DepartmentResourceFolder, 2));
};


/**
 * @param {?proto.protocols.common.DepartmentResourceFolder|undefined} value
 * @return {!proto.protocols.prometheus.PostDepartmentResourceFolderResponse} returns this
*/
proto.protocols.prometheus.PostDepartmentResourceFolderResponse.prototype.setDepartmentresourcefolder = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PostDepartmentResourceFolderResponse} returns this
 */
proto.protocols.prometheus.PostDepartmentResourceFolderResponse.prototype.clearDepartmentresourcefolder = function() {
  return this.setDepartmentresourcefolder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PostDepartmentResourceFolderResponse.prototype.hasDepartmentresourcefolder = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.PutDepartmentResourceFolderRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutDepartmentResourceFolderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutDepartmentResourceFolderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutDepartmentResourceFolderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutDepartmentResourceFolderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceidsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutDepartmentResourceFolderRequest}
 */
proto.protocols.prometheus.PutDepartmentResourceFolderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutDepartmentResourceFolderRequest;
  return proto.protocols.prometheus.PutDepartmentResourceFolderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutDepartmentResourceFolderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutDepartmentResourceFolderRequest}
 */
proto.protocols.prometheus.PutDepartmentResourceFolderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedInt64());
      msg.setResourceidsList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutDepartmentResourceFolderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutDepartmentResourceFolderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutDepartmentResourceFolderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutDepartmentResourceFolderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceidsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      1,
      f
    );
  }
};


/**
 * repeated int64 resourceIds = 1;
 * @return {!Array<number>}
 */
proto.protocols.prometheus.PutDepartmentResourceFolderRequest.prototype.getResourceidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protocols.prometheus.PutDepartmentResourceFolderRequest} returns this
 */
proto.protocols.prometheus.PutDepartmentResourceFolderRequest.prototype.setResourceidsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protocols.prometheus.PutDepartmentResourceFolderRequest} returns this
 */
proto.protocols.prometheus.PutDepartmentResourceFolderRequest.prototype.addResourceids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.PutDepartmentResourceFolderRequest} returns this
 */
proto.protocols.prometheus.PutDepartmentResourceFolderRequest.prototype.clearResourceidsList = function() {
  return this.setResourceidsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.PutDepartmentResourceFolderResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutDepartmentResourceFolderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutDepartmentResourceFolderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutDepartmentResourceFolderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutDepartmentResourceFolderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    resourceidsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutDepartmentResourceFolderResponse}
 */
proto.protocols.prometheus.PutDepartmentResourceFolderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutDepartmentResourceFolderResponse;
  return proto.protocols.prometheus.PutDepartmentResourceFolderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutDepartmentResourceFolderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutDepartmentResourceFolderResponse}
 */
proto.protocols.prometheus.PutDepartmentResourceFolderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = /** @type {!Array<number>} */ (reader.readPackedInt64());
      msg.setResourceidsList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutDepartmentResourceFolderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutDepartmentResourceFolderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutDepartmentResourceFolderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutDepartmentResourceFolderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getResourceidsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      2,
      f
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PutDepartmentResourceFolderResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PutDepartmentResourceFolderResponse} returns this
*/
proto.protocols.prometheus.PutDepartmentResourceFolderResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutDepartmentResourceFolderResponse} returns this
 */
proto.protocols.prometheus.PutDepartmentResourceFolderResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutDepartmentResourceFolderResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated int64 resourceIds = 2;
 * @return {!Array<number>}
 */
proto.protocols.prometheus.PutDepartmentResourceFolderResponse.prototype.getResourceidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protocols.prometheus.PutDepartmentResourceFolderResponse} returns this
 */
proto.protocols.prometheus.PutDepartmentResourceFolderResponse.prototype.setResourceidsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protocols.prometheus.PutDepartmentResourceFolderResponse} returns this
 */
proto.protocols.prometheus.PutDepartmentResourceFolderResponse.prototype.addResourceids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.PutDepartmentResourceFolderResponse} returns this
 */
proto.protocols.prometheus.PutDepartmentResourceFolderResponse.prototype.clearResourceidsList = function() {
  return this.setResourceidsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PatchDepartmentResourceFolderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PatchDepartmentResourceFolderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PatchDepartmentResourceFolderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PatchDepartmentResourceFolderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PatchDepartmentResourceFolderRequest}
 */
proto.protocols.prometheus.PatchDepartmentResourceFolderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PatchDepartmentResourceFolderRequest;
  return proto.protocols.prometheus.PatchDepartmentResourceFolderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PatchDepartmentResourceFolderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PatchDepartmentResourceFolderRequest}
 */
proto.protocols.prometheus.PatchDepartmentResourceFolderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PatchDepartmentResourceFolderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PatchDepartmentResourceFolderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PatchDepartmentResourceFolderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PatchDepartmentResourceFolderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.protocols.prometheus.PatchDepartmentResourceFolderRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocols.prometheus.PatchDepartmentResourceFolderRequest} returns this
 */
proto.protocols.prometheus.PatchDepartmentResourceFolderRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PatchDepartmentResourceFolderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PatchDepartmentResourceFolderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PatchDepartmentResourceFolderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PatchDepartmentResourceFolderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    departmentresourcefolder: (f = msg.getDepartmentresourcefolder()) && common_pb.DepartmentResourceFolder.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PatchDepartmentResourceFolderResponse}
 */
proto.protocols.prometheus.PatchDepartmentResourceFolderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PatchDepartmentResourceFolderResponse;
  return proto.protocols.prometheus.PatchDepartmentResourceFolderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PatchDepartmentResourceFolderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PatchDepartmentResourceFolderResponse}
 */
proto.protocols.prometheus.PatchDepartmentResourceFolderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.DepartmentResourceFolder;
      reader.readMessage(value,common_pb.DepartmentResourceFolder.deserializeBinaryFromReader);
      msg.setDepartmentresourcefolder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PatchDepartmentResourceFolderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PatchDepartmentResourceFolderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PatchDepartmentResourceFolderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PatchDepartmentResourceFolderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getDepartmentresourcefolder();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.DepartmentResourceFolder.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PatchDepartmentResourceFolderResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PatchDepartmentResourceFolderResponse} returns this
*/
proto.protocols.prometheus.PatchDepartmentResourceFolderResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PatchDepartmentResourceFolderResponse} returns this
 */
proto.protocols.prometheus.PatchDepartmentResourceFolderResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PatchDepartmentResourceFolderResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.DepartmentResourceFolder departmentResourceFolder = 2;
 * @return {?proto.protocols.common.DepartmentResourceFolder}
 */
proto.protocols.prometheus.PatchDepartmentResourceFolderResponse.prototype.getDepartmentresourcefolder = function() {
  return /** @type{?proto.protocols.common.DepartmentResourceFolder} */ (
    jspb.Message.getWrapperField(this, common_pb.DepartmentResourceFolder, 2));
};


/**
 * @param {?proto.protocols.common.DepartmentResourceFolder|undefined} value
 * @return {!proto.protocols.prometheus.PatchDepartmentResourceFolderResponse} returns this
*/
proto.protocols.prometheus.PatchDepartmentResourceFolderResponse.prototype.setDepartmentresourcefolder = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PatchDepartmentResourceFolderResponse} returns this
 */
proto.protocols.prometheus.PatchDepartmentResourceFolderResponse.prototype.clearDepartmentresourcefolder = function() {
  return this.setDepartmentresourcefolder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PatchDepartmentResourceFolderResponse.prototype.hasDepartmentresourcefolder = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.DeleteDepartmentResourceFolderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.DeleteDepartmentResourceFolderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.DeleteDepartmentResourceFolderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteDepartmentResourceFolderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.DeleteDepartmentResourceFolderResponse}
 */
proto.protocols.prometheus.DeleteDepartmentResourceFolderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.DeleteDepartmentResourceFolderResponse;
  return proto.protocols.prometheus.DeleteDepartmentResourceFolderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.DeleteDepartmentResourceFolderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.DeleteDepartmentResourceFolderResponse}
 */
proto.protocols.prometheus.DeleteDepartmentResourceFolderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.DeleteDepartmentResourceFolderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.DeleteDepartmentResourceFolderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.DeleteDepartmentResourceFolderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteDepartmentResourceFolderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.DeleteDepartmentResourceFolderResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.DeleteDepartmentResourceFolderResponse} returns this
*/
proto.protocols.prometheus.DeleteDepartmentResourceFolderResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.DeleteDepartmentResourceFolderResponse} returns this
 */
proto.protocols.prometheus.DeleteDepartmentResourceFolderResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.DeleteDepartmentResourceFolderResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.DeleteDepartmentResourceFolderResourceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.DeleteDepartmentResourceFolderResourceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.DeleteDepartmentResourceFolderResourceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteDepartmentResourceFolderResourceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.DeleteDepartmentResourceFolderResourceResponse}
 */
proto.protocols.prometheus.DeleteDepartmentResourceFolderResourceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.DeleteDepartmentResourceFolderResourceResponse;
  return proto.protocols.prometheus.DeleteDepartmentResourceFolderResourceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.DeleteDepartmentResourceFolderResourceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.DeleteDepartmentResourceFolderResourceResponse}
 */
proto.protocols.prometheus.DeleteDepartmentResourceFolderResourceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.DeleteDepartmentResourceFolderResourceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.DeleteDepartmentResourceFolderResourceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.DeleteDepartmentResourceFolderResourceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteDepartmentResourceFolderResourceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.DeleteDepartmentResourceFolderResourceResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.DeleteDepartmentResourceFolderResourceResponse} returns this
*/
proto.protocols.prometheus.DeleteDepartmentResourceFolderResourceResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.DeleteDepartmentResourceFolderResourceResponse} returns this
 */
proto.protocols.prometheus.DeleteDepartmentResourceFolderResourceResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.DeleteDepartmentResourceFolderResourceResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetDepartmentSceneFolderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetDepartmentSceneFolderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetDepartmentSceneFolderResponse}
 */
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetDepartmentSceneFolderResponse;
  return proto.protocols.prometheus.GetDepartmentSceneFolderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetDepartmentSceneFolderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetDepartmentSceneFolderResponse}
 */
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item;
      reader.readMessage(value,proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetDepartmentSceneFolderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetDepartmentSceneFolderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item.serializeBinaryToWriter
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item.toObject = function(includeInstance, msg) {
  var f, obj = {
    departmentnodebase: (f = msg.getDepartmentnodebase()) && common_pb.DepartmentNodeBase.toObject(includeInstance, f),
    departmentbase: (f = msg.getDepartmentbase()) && common_pb.DepartmentBase.toObject(includeInstance, f),
    scenefoldersList: jspb.Message.toObjectList(msg.getScenefoldersList(),
    common_pb.DepartmentSceneFolder.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item}
 */
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item;
  return proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item}
 */
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.DepartmentNodeBase;
      reader.readMessage(value,common_pb.DepartmentNodeBase.deserializeBinaryFromReader);
      msg.setDepartmentnodebase(value);
      break;
    case 2:
      var value = new common_pb.DepartmentBase;
      reader.readMessage(value,common_pb.DepartmentBase.deserializeBinaryFromReader);
      msg.setDepartmentbase(value);
      break;
    case 3:
      var value = new common_pb.DepartmentSceneFolder;
      reader.readMessage(value,common_pb.DepartmentSceneFolder.deserializeBinaryFromReader);
      msg.addScenefolders(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDepartmentnodebase();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.DepartmentNodeBase.serializeBinaryToWriter
    );
  }
  f = message.getDepartmentbase();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.DepartmentBase.serializeBinaryToWriter
    );
  }
  f = message.getScenefoldersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      common_pb.DepartmentSceneFolder.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.DepartmentNodeBase departmentNodeBase = 1;
 * @return {?proto.protocols.common.DepartmentNodeBase}
 */
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item.prototype.getDepartmentnodebase = function() {
  return /** @type{?proto.protocols.common.DepartmentNodeBase} */ (
    jspb.Message.getWrapperField(this, common_pb.DepartmentNodeBase, 1));
};


/**
 * @param {?proto.protocols.common.DepartmentNodeBase|undefined} value
 * @return {!proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item} returns this
*/
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item.prototype.setDepartmentnodebase = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item} returns this
 */
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item.prototype.clearDepartmentnodebase = function() {
  return this.setDepartmentnodebase(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item.prototype.hasDepartmentnodebase = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.DepartmentBase departmentBase = 2;
 * @return {?proto.protocols.common.DepartmentBase}
 */
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item.prototype.getDepartmentbase = function() {
  return /** @type{?proto.protocols.common.DepartmentBase} */ (
    jspb.Message.getWrapperField(this, common_pb.DepartmentBase, 2));
};


/**
 * @param {?proto.protocols.common.DepartmentBase|undefined} value
 * @return {!proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item} returns this
*/
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item.prototype.setDepartmentbase = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item} returns this
 */
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item.prototype.clearDepartmentbase = function() {
  return this.setDepartmentbase(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item.prototype.hasDepartmentbase = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated protocols.common.DepartmentSceneFolder sceneFolders = 3;
 * @return {!Array<!proto.protocols.common.DepartmentSceneFolder>}
 */
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item.prototype.getScenefoldersList = function() {
  return /** @type{!Array<!proto.protocols.common.DepartmentSceneFolder>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.DepartmentSceneFolder, 3));
};


/**
 * @param {!Array<!proto.protocols.common.DepartmentSceneFolder>} value
 * @return {!proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item} returns this
*/
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item.prototype.setScenefoldersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.protocols.common.DepartmentSceneFolder=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocols.common.DepartmentSceneFolder}
 */
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item.prototype.addScenefolders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.protocols.common.DepartmentSceneFolder, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item} returns this
 */
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item.prototype.clearScenefoldersList = function() {
  return this.setScenefoldersList([]);
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetDepartmentSceneFolderResponse} returns this
*/
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetDepartmentSceneFolderResponse} returns this
 */
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Item items = 2;
 * @return {!Array<!proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item>}
 */
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item, 2));
};


/**
 * @param {!Array<!proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item>} value
 * @return {!proto.protocols.prometheus.GetDepartmentSceneFolderResponse} returns this
*/
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item}
 */
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protocols.prometheus.GetDepartmentSceneFolderResponse.Item, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.GetDepartmentSceneFolderResponse} returns this
 */
proto.protocols.prometheus.GetDepartmentSceneFolderResponse.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PostDepartmentSceneFolderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PostDepartmentSceneFolderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PostDepartmentSceneFolderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostDepartmentSceneFolderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    parentdepartmentscenefolderid: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PostDepartmentSceneFolderRequest}
 */
proto.protocols.prometheus.PostDepartmentSceneFolderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PostDepartmentSceneFolderRequest;
  return proto.protocols.prometheus.PostDepartmentSceneFolderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PostDepartmentSceneFolderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PostDepartmentSceneFolderRequest}
 */
proto.protocols.prometheus.PostDepartmentSceneFolderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setParentdepartmentscenefolderid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PostDepartmentSceneFolderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PostDepartmentSceneFolderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PostDepartmentSceneFolderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostDepartmentSceneFolderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParentdepartmentscenefolderid();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.protocols.prometheus.PostDepartmentSceneFolderRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocols.prometheus.PostDepartmentSceneFolderRequest} returns this
 */
proto.protocols.prometheus.PostDepartmentSceneFolderRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 parentDepartmentSceneFolderId = 2;
 * @return {number}
 */
proto.protocols.prometheus.PostDepartmentSceneFolderRequest.prototype.getParentdepartmentscenefolderid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocols.prometheus.PostDepartmentSceneFolderRequest} returns this
 */
proto.protocols.prometheus.PostDepartmentSceneFolderRequest.prototype.setParentdepartmentscenefolderid = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PostDepartmentSceneFolderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PostDepartmentSceneFolderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PostDepartmentSceneFolderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostDepartmentSceneFolderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    departmentscenefolder: (f = msg.getDepartmentscenefolder()) && common_pb.DepartmentSceneFolder.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PostDepartmentSceneFolderResponse}
 */
proto.protocols.prometheus.PostDepartmentSceneFolderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PostDepartmentSceneFolderResponse;
  return proto.protocols.prometheus.PostDepartmentSceneFolderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PostDepartmentSceneFolderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PostDepartmentSceneFolderResponse}
 */
proto.protocols.prometheus.PostDepartmentSceneFolderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.DepartmentSceneFolder;
      reader.readMessage(value,common_pb.DepartmentSceneFolder.deserializeBinaryFromReader);
      msg.setDepartmentscenefolder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PostDepartmentSceneFolderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PostDepartmentSceneFolderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PostDepartmentSceneFolderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PostDepartmentSceneFolderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getDepartmentscenefolder();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.DepartmentSceneFolder.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PostDepartmentSceneFolderResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PostDepartmentSceneFolderResponse} returns this
*/
proto.protocols.prometheus.PostDepartmentSceneFolderResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PostDepartmentSceneFolderResponse} returns this
 */
proto.protocols.prometheus.PostDepartmentSceneFolderResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PostDepartmentSceneFolderResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.DepartmentSceneFolder departmentSceneFolder = 2;
 * @return {?proto.protocols.common.DepartmentSceneFolder}
 */
proto.protocols.prometheus.PostDepartmentSceneFolderResponse.prototype.getDepartmentscenefolder = function() {
  return /** @type{?proto.protocols.common.DepartmentSceneFolder} */ (
    jspb.Message.getWrapperField(this, common_pb.DepartmentSceneFolder, 2));
};


/**
 * @param {?proto.protocols.common.DepartmentSceneFolder|undefined} value
 * @return {!proto.protocols.prometheus.PostDepartmentSceneFolderResponse} returns this
*/
proto.protocols.prometheus.PostDepartmentSceneFolderResponse.prototype.setDepartmentscenefolder = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PostDepartmentSceneFolderResponse} returns this
 */
proto.protocols.prometheus.PostDepartmentSceneFolderResponse.prototype.clearDepartmentscenefolder = function() {
  return this.setDepartmentscenefolder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PostDepartmentSceneFolderResponse.prototype.hasDepartmentscenefolder = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.PutDepartmentSceneFolderRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutDepartmentSceneFolderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutDepartmentSceneFolderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutDepartmentSceneFolderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutDepartmentSceneFolderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sceneidsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutDepartmentSceneFolderRequest}
 */
proto.protocols.prometheus.PutDepartmentSceneFolderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutDepartmentSceneFolderRequest;
  return proto.protocols.prometheus.PutDepartmentSceneFolderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutDepartmentSceneFolderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutDepartmentSceneFolderRequest}
 */
proto.protocols.prometheus.PutDepartmentSceneFolderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array<number>} */ (reader.readPackedInt64());
      msg.setSceneidsList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutDepartmentSceneFolderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutDepartmentSceneFolderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutDepartmentSceneFolderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutDepartmentSceneFolderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSceneidsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      1,
      f
    );
  }
};


/**
 * repeated int64 sceneIds = 1;
 * @return {!Array<number>}
 */
proto.protocols.prometheus.PutDepartmentSceneFolderRequest.prototype.getSceneidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protocols.prometheus.PutDepartmentSceneFolderRequest} returns this
 */
proto.protocols.prometheus.PutDepartmentSceneFolderRequest.prototype.setSceneidsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protocols.prometheus.PutDepartmentSceneFolderRequest} returns this
 */
proto.protocols.prometheus.PutDepartmentSceneFolderRequest.prototype.addSceneids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.PutDepartmentSceneFolderRequest} returns this
 */
proto.protocols.prometheus.PutDepartmentSceneFolderRequest.prototype.clearSceneidsList = function() {
  return this.setSceneidsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.PutDepartmentSceneFolderResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutDepartmentSceneFolderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutDepartmentSceneFolderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutDepartmentSceneFolderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutDepartmentSceneFolderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    sceneidsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutDepartmentSceneFolderResponse}
 */
proto.protocols.prometheus.PutDepartmentSceneFolderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutDepartmentSceneFolderResponse;
  return proto.protocols.prometheus.PutDepartmentSceneFolderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutDepartmentSceneFolderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutDepartmentSceneFolderResponse}
 */
proto.protocols.prometheus.PutDepartmentSceneFolderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = /** @type {!Array<number>} */ (reader.readPackedInt64());
      msg.setSceneidsList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutDepartmentSceneFolderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutDepartmentSceneFolderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutDepartmentSceneFolderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutDepartmentSceneFolderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getSceneidsList();
  if (f.length > 0) {
    writer.writePackedInt64(
      2,
      f
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PutDepartmentSceneFolderResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PutDepartmentSceneFolderResponse} returns this
*/
proto.protocols.prometheus.PutDepartmentSceneFolderResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutDepartmentSceneFolderResponse} returns this
 */
proto.protocols.prometheus.PutDepartmentSceneFolderResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutDepartmentSceneFolderResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated int64 sceneIds = 2;
 * @return {!Array<number>}
 */
proto.protocols.prometheus.PutDepartmentSceneFolderResponse.prototype.getSceneidsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.protocols.prometheus.PutDepartmentSceneFolderResponse} returns this
 */
proto.protocols.prometheus.PutDepartmentSceneFolderResponse.prototype.setSceneidsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.protocols.prometheus.PutDepartmentSceneFolderResponse} returns this
 */
proto.protocols.prometheus.PutDepartmentSceneFolderResponse.prototype.addSceneids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.PutDepartmentSceneFolderResponse} returns this
 */
proto.protocols.prometheus.PutDepartmentSceneFolderResponse.prototype.clearSceneidsList = function() {
  return this.setSceneidsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PatchDepartmentSceneFolderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PatchDepartmentSceneFolderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PatchDepartmentSceneFolderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PatchDepartmentSceneFolderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PatchDepartmentSceneFolderRequest}
 */
proto.protocols.prometheus.PatchDepartmentSceneFolderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PatchDepartmentSceneFolderRequest;
  return proto.protocols.prometheus.PatchDepartmentSceneFolderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PatchDepartmentSceneFolderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PatchDepartmentSceneFolderRequest}
 */
proto.protocols.prometheus.PatchDepartmentSceneFolderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PatchDepartmentSceneFolderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PatchDepartmentSceneFolderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PatchDepartmentSceneFolderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PatchDepartmentSceneFolderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.protocols.prometheus.PatchDepartmentSceneFolderRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocols.prometheus.PatchDepartmentSceneFolderRequest} returns this
 */
proto.protocols.prometheus.PatchDepartmentSceneFolderRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PatchDepartmentSceneFolderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PatchDepartmentSceneFolderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PatchDepartmentSceneFolderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PatchDepartmentSceneFolderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    departmentscenefolder: (f = msg.getDepartmentscenefolder()) && common_pb.DepartmentSceneFolder.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PatchDepartmentSceneFolderResponse}
 */
proto.protocols.prometheus.PatchDepartmentSceneFolderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PatchDepartmentSceneFolderResponse;
  return proto.protocols.prometheus.PatchDepartmentSceneFolderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PatchDepartmentSceneFolderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PatchDepartmentSceneFolderResponse}
 */
proto.protocols.prometheus.PatchDepartmentSceneFolderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.DepartmentSceneFolder;
      reader.readMessage(value,common_pb.DepartmentSceneFolder.deserializeBinaryFromReader);
      msg.setDepartmentscenefolder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PatchDepartmentSceneFolderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PatchDepartmentSceneFolderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PatchDepartmentSceneFolderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PatchDepartmentSceneFolderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getDepartmentscenefolder();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.DepartmentSceneFolder.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PatchDepartmentSceneFolderResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PatchDepartmentSceneFolderResponse} returns this
*/
proto.protocols.prometheus.PatchDepartmentSceneFolderResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PatchDepartmentSceneFolderResponse} returns this
 */
proto.protocols.prometheus.PatchDepartmentSceneFolderResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PatchDepartmentSceneFolderResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.DepartmentSceneFolder departmentSceneFolder = 2;
 * @return {?proto.protocols.common.DepartmentSceneFolder}
 */
proto.protocols.prometheus.PatchDepartmentSceneFolderResponse.prototype.getDepartmentscenefolder = function() {
  return /** @type{?proto.protocols.common.DepartmentSceneFolder} */ (
    jspb.Message.getWrapperField(this, common_pb.DepartmentSceneFolder, 2));
};


/**
 * @param {?proto.protocols.common.DepartmentSceneFolder|undefined} value
 * @return {!proto.protocols.prometheus.PatchDepartmentSceneFolderResponse} returns this
*/
proto.protocols.prometheus.PatchDepartmentSceneFolderResponse.prototype.setDepartmentscenefolder = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PatchDepartmentSceneFolderResponse} returns this
 */
proto.protocols.prometheus.PatchDepartmentSceneFolderResponse.prototype.clearDepartmentscenefolder = function() {
  return this.setDepartmentscenefolder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PatchDepartmentSceneFolderResponse.prototype.hasDepartmentscenefolder = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.DeleteDepartmentSceneFolderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.DeleteDepartmentSceneFolderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.DeleteDepartmentSceneFolderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteDepartmentSceneFolderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.DeleteDepartmentSceneFolderResponse}
 */
proto.protocols.prometheus.DeleteDepartmentSceneFolderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.DeleteDepartmentSceneFolderResponse;
  return proto.protocols.prometheus.DeleteDepartmentSceneFolderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.DeleteDepartmentSceneFolderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.DeleteDepartmentSceneFolderResponse}
 */
proto.protocols.prometheus.DeleteDepartmentSceneFolderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.DeleteDepartmentSceneFolderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.DeleteDepartmentSceneFolderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.DeleteDepartmentSceneFolderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.DeleteDepartmentSceneFolderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.DeleteDepartmentSceneFolderResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.DeleteDepartmentSceneFolderResponse} returns this
*/
proto.protocols.prometheus.DeleteDepartmentSceneFolderResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.DeleteDepartmentSceneFolderResponse} returns this
 */
proto.protocols.prometheus.DeleteDepartmentSceneFolderResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.DeleteDepartmentSceneFolderResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.GetSceneFolderScenesResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetSceneFolderScenesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetSceneFolderScenesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetSceneFolderScenesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetSceneFolderScenesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    scenebasesList: jspb.Message.toObjectList(msg.getScenebasesList(),
    common_pb.SceneBase.toObject, includeInstance),
    itemscount: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetSceneFolderScenesResponse}
 */
proto.protocols.prometheus.GetSceneFolderScenesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetSceneFolderScenesResponse;
  return proto.protocols.prometheus.GetSceneFolderScenesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetSceneFolderScenesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetSceneFolderScenesResponse}
 */
proto.protocols.prometheus.GetSceneFolderScenesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.SceneBase;
      reader.readMessage(value,common_pb.SceneBase.deserializeBinaryFromReader);
      msg.addScenebases(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setItemscount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetSceneFolderScenesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetSceneFolderScenesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetSceneFolderScenesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetSceneFolderScenesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getScenebasesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_pb.SceneBase.serializeBinaryToWriter
    );
  }
  f = message.getItemscount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetSceneFolderScenesResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetSceneFolderScenesResponse} returns this
*/
proto.protocols.prometheus.GetSceneFolderScenesResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetSceneFolderScenesResponse} returns this
 */
proto.protocols.prometheus.GetSceneFolderScenesResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetSceneFolderScenesResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated protocols.common.SceneBase sceneBases = 2;
 * @return {!Array<!proto.protocols.common.SceneBase>}
 */
proto.protocols.prometheus.GetSceneFolderScenesResponse.prototype.getScenebasesList = function() {
  return /** @type{!Array<!proto.protocols.common.SceneBase>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.SceneBase, 2));
};


/**
 * @param {!Array<!proto.protocols.common.SceneBase>} value
 * @return {!proto.protocols.prometheus.GetSceneFolderScenesResponse} returns this
*/
proto.protocols.prometheus.GetSceneFolderScenesResponse.prototype.setScenebasesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protocols.common.SceneBase=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocols.common.SceneBase}
 */
proto.protocols.prometheus.GetSceneFolderScenesResponse.prototype.addScenebases = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protocols.common.SceneBase, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.GetSceneFolderScenesResponse} returns this
 */
proto.protocols.prometheus.GetSceneFolderScenesResponse.prototype.clearScenebasesList = function() {
  return this.setScenebasesList([]);
};


/**
 * optional int32 itemsCount = 3;
 * @return {number}
 */
proto.protocols.prometheus.GetSceneFolderScenesResponse.prototype.getItemscount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocols.prometheus.GetSceneFolderScenesResponse} returns this
 */
proto.protocols.prometheus.GetSceneFolderScenesResponse.prototype.setItemscount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.GetResourceFolderResourcesResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetResourceFolderResourcesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetResourceFolderResourcesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetResourceFolderResourcesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetResourceFolderResourcesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    resourcesList: jspb.Message.toObjectList(msg.getResourcesList(),
    common_pb.Resource.toObject, includeInstance),
    itemcount: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetResourceFolderResourcesResponse}
 */
proto.protocols.prometheus.GetResourceFolderResourcesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetResourceFolderResourcesResponse;
  return proto.protocols.prometheus.GetResourceFolderResourcesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetResourceFolderResourcesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetResourceFolderResourcesResponse}
 */
proto.protocols.prometheus.GetResourceFolderResourcesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Resource;
      reader.readMessage(value,common_pb.Resource.deserializeBinaryFromReader);
      msg.addResources(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setItemcount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetResourceFolderResourcesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetResourceFolderResourcesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetResourceFolderResourcesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetResourceFolderResourcesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getResourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_pb.Resource.serializeBinaryToWriter
    );
  }
  f = message.getItemcount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetResourceFolderResourcesResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetResourceFolderResourcesResponse} returns this
*/
proto.protocols.prometheus.GetResourceFolderResourcesResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetResourceFolderResourcesResponse} returns this
 */
proto.protocols.prometheus.GetResourceFolderResourcesResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetResourceFolderResourcesResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated protocols.common.Resource resources = 2;
 * @return {!Array<!proto.protocols.common.Resource>}
 */
proto.protocols.prometheus.GetResourceFolderResourcesResponse.prototype.getResourcesList = function() {
  return /** @type{!Array<!proto.protocols.common.Resource>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.Resource, 2));
};


/**
 * @param {!Array<!proto.protocols.common.Resource>} value
 * @return {!proto.protocols.prometheus.GetResourceFolderResourcesResponse} returns this
*/
proto.protocols.prometheus.GetResourceFolderResourcesResponse.prototype.setResourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protocols.common.Resource=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocols.common.Resource}
 */
proto.protocols.prometheus.GetResourceFolderResourcesResponse.prototype.addResources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protocols.common.Resource, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.GetResourceFolderResourcesResponse} returns this
 */
proto.protocols.prometheus.GetResourceFolderResourcesResponse.prototype.clearResourcesList = function() {
  return this.setResourcesList([]);
};


/**
 * optional int32 itemCount = 3;
 * @return {number}
 */
proto.protocols.prometheus.GetResourceFolderResourcesResponse.prototype.getItemcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocols.prometheus.GetResourceFolderResourcesResponse} returns this
 */
proto.protocols.prometheus.GetResourceFolderResourcesResponse.prototype.setItemcount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetSubtitleRssResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetSubtitleRssResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetSubtitleRssResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetSubtitleRssResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    feed: (f = msg.getFeed()) && common_pb.Feed.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetSubtitleRssResponse}
 */
proto.protocols.prometheus.GetSubtitleRssResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetSubtitleRssResponse;
  return proto.protocols.prometheus.GetSubtitleRssResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetSubtitleRssResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetSubtitleRssResponse}
 */
proto.protocols.prometheus.GetSubtitleRssResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Feed;
      reader.readMessage(value,common_pb.Feed.deserializeBinaryFromReader);
      msg.setFeed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetSubtitleRssResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetSubtitleRssResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetSubtitleRssResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetSubtitleRssResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getFeed();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Feed.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetSubtitleRssResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetSubtitleRssResponse} returns this
*/
proto.protocols.prometheus.GetSubtitleRssResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetSubtitleRssResponse} returns this
 */
proto.protocols.prometheus.GetSubtitleRssResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetSubtitleRssResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Feed feed = 2;
 * @return {?proto.protocols.common.Feed}
 */
proto.protocols.prometheus.GetSubtitleRssResponse.prototype.getFeed = function() {
  return /** @type{?proto.protocols.common.Feed} */ (
    jspb.Message.getWrapperField(this, common_pb.Feed, 2));
};


/**
 * @param {?proto.protocols.common.Feed|undefined} value
 * @return {!proto.protocols.prometheus.GetSubtitleRssResponse} returns this
*/
proto.protocols.prometheus.GetSubtitleRssResponse.prototype.setFeed = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetSubtitleRssResponse} returns this
 */
proto.protocols.prometheus.GetSubtitleRssResponse.prototype.clearFeed = function() {
  return this.setFeed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetSubtitleRssResponse.prototype.hasFeed = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.GetSceneNavigationResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetSceneNavigationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetSceneNavigationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetSceneNavigationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetSceneNavigationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    scene: (f = msg.getScene()) && common_pb.Scene.toObject(includeInstance, f),
    sourcescenebasesList: jspb.Message.toObjectList(msg.getSourcescenebasesList(),
    common_pb.SceneBase.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetSceneNavigationResponse}
 */
proto.protocols.prometheus.GetSceneNavigationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetSceneNavigationResponse;
  return proto.protocols.prometheus.GetSceneNavigationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetSceneNavigationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetSceneNavigationResponse}
 */
proto.protocols.prometheus.GetSceneNavigationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Scene;
      reader.readMessage(value,common_pb.Scene.deserializeBinaryFromReader);
      msg.setScene(value);
      break;
    case 3:
      var value = new common_pb.SceneBase;
      reader.readMessage(value,common_pb.SceneBase.deserializeBinaryFromReader);
      msg.addSourcescenebases(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetSceneNavigationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetSceneNavigationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetSceneNavigationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetSceneNavigationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getScene();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Scene.serializeBinaryToWriter
    );
  }
  f = message.getSourcescenebasesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      common_pb.SceneBase.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetSceneNavigationResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetSceneNavigationResponse} returns this
*/
proto.protocols.prometheus.GetSceneNavigationResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetSceneNavigationResponse} returns this
 */
proto.protocols.prometheus.GetSceneNavigationResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetSceneNavigationResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Scene scene = 2;
 * @return {?proto.protocols.common.Scene}
 */
proto.protocols.prometheus.GetSceneNavigationResponse.prototype.getScene = function() {
  return /** @type{?proto.protocols.common.Scene} */ (
    jspb.Message.getWrapperField(this, common_pb.Scene, 2));
};


/**
 * @param {?proto.protocols.common.Scene|undefined} value
 * @return {!proto.protocols.prometheus.GetSceneNavigationResponse} returns this
*/
proto.protocols.prometheus.GetSceneNavigationResponse.prototype.setScene = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetSceneNavigationResponse} returns this
 */
proto.protocols.prometheus.GetSceneNavigationResponse.prototype.clearScene = function() {
  return this.setScene(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetSceneNavigationResponse.prototype.hasScene = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated protocols.common.SceneBase sourceSceneBases = 3;
 * @return {!Array<!proto.protocols.common.SceneBase>}
 */
proto.protocols.prometheus.GetSceneNavigationResponse.prototype.getSourcescenebasesList = function() {
  return /** @type{!Array<!proto.protocols.common.SceneBase>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.SceneBase, 3));
};


/**
 * @param {!Array<!proto.protocols.common.SceneBase>} value
 * @return {!proto.protocols.prometheus.GetSceneNavigationResponse} returns this
*/
proto.protocols.prometheus.GetSceneNavigationResponse.prototype.setSourcescenebasesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.protocols.common.SceneBase=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocols.common.SceneBase}
 */
proto.protocols.prometheus.GetSceneNavigationResponse.prototype.addSourcescenebases = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.protocols.common.SceneBase, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.GetSceneNavigationResponse} returns this
 */
proto.protocols.prometheus.GetSceneNavigationResponse.prototype.clearSourcescenebasesList = function() {
  return this.setSourcescenebasesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.GetValidateSceneResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetValidateSceneResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetValidateSceneResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetValidateSceneResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetValidateSceneResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    scenebasesList: jspb.Message.toObjectList(msg.getScenebasesList(),
    common_pb.SceneBase.toObject, includeInstance),
    itemscount: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetValidateSceneResponse}
 */
proto.protocols.prometheus.GetValidateSceneResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetValidateSceneResponse;
  return proto.protocols.prometheus.GetValidateSceneResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetValidateSceneResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetValidateSceneResponse}
 */
proto.protocols.prometheus.GetValidateSceneResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.SceneBase;
      reader.readMessage(value,common_pb.SceneBase.deserializeBinaryFromReader);
      msg.addScenebases(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setItemscount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetValidateSceneResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetValidateSceneResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetValidateSceneResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetValidateSceneResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getScenebasesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_pb.SceneBase.serializeBinaryToWriter
    );
  }
  f = message.getItemscount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetValidateSceneResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetValidateSceneResponse} returns this
*/
proto.protocols.prometheus.GetValidateSceneResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetValidateSceneResponse} returns this
 */
proto.protocols.prometheus.GetValidateSceneResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetValidateSceneResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated protocols.common.SceneBase sceneBases = 2;
 * @return {!Array<!proto.protocols.common.SceneBase>}
 */
proto.protocols.prometheus.GetValidateSceneResponse.prototype.getScenebasesList = function() {
  return /** @type{!Array<!proto.protocols.common.SceneBase>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.SceneBase, 2));
};


/**
 * @param {!Array<!proto.protocols.common.SceneBase>} value
 * @return {!proto.protocols.prometheus.GetValidateSceneResponse} returns this
*/
proto.protocols.prometheus.GetValidateSceneResponse.prototype.setScenebasesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protocols.common.SceneBase=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocols.common.SceneBase}
 */
proto.protocols.prometheus.GetValidateSceneResponse.prototype.addScenebases = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protocols.common.SceneBase, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.GetValidateSceneResponse} returns this
 */
proto.protocols.prometheus.GetValidateSceneResponse.prototype.clearScenebasesList = function() {
  return this.setScenebasesList([]);
};


/**
 * optional int32 itemsCount = 3;
 * @return {number}
 */
proto.protocols.prometheus.GetValidateSceneResponse.prototype.getItemscount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocols.prometheus.GetValidateSceneResponse} returns this
 */
proto.protocols.prometheus.GetValidateSceneResponse.prototype.setItemscount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.GetValidateResourceResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetValidateResourceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetValidateResourceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetValidateResourceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetValidateResourceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    resourcesList: jspb.Message.toObjectList(msg.getResourcesList(),
    common_pb.Resource.toObject, includeInstance),
    itemscount: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetValidateResourceResponse}
 */
proto.protocols.prometheus.GetValidateResourceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetValidateResourceResponse;
  return proto.protocols.prometheus.GetValidateResourceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetValidateResourceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetValidateResourceResponse}
 */
proto.protocols.prometheus.GetValidateResourceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Resource;
      reader.readMessage(value,common_pb.Resource.deserializeBinaryFromReader);
      msg.addResources(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setItemscount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetValidateResourceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetValidateResourceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetValidateResourceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetValidateResourceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getResourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_pb.Resource.serializeBinaryToWriter
    );
  }
  f = message.getItemscount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetValidateResourceResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetValidateResourceResponse} returns this
*/
proto.protocols.prometheus.GetValidateResourceResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetValidateResourceResponse} returns this
 */
proto.protocols.prometheus.GetValidateResourceResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetValidateResourceResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated protocols.common.Resource resources = 2;
 * @return {!Array<!proto.protocols.common.Resource>}
 */
proto.protocols.prometheus.GetValidateResourceResponse.prototype.getResourcesList = function() {
  return /** @type{!Array<!proto.protocols.common.Resource>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.Resource, 2));
};


/**
 * @param {!Array<!proto.protocols.common.Resource>} value
 * @return {!proto.protocols.prometheus.GetValidateResourceResponse} returns this
*/
proto.protocols.prometheus.GetValidateResourceResponse.prototype.setResourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protocols.common.Resource=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocols.common.Resource}
 */
proto.protocols.prometheus.GetValidateResourceResponse.prototype.addResources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protocols.common.Resource, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.GetValidateResourceResponse} returns this
 */
proto.protocols.prometheus.GetValidateResourceResponse.prototype.clearResourcesList = function() {
  return this.setResourcesList([]);
};


/**
 * optional int32 itemsCount = 3;
 * @return {number}
 */
proto.protocols.prometheus.GetValidateResourceResponse.prototype.getItemscount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocols.prometheus.GetValidateResourceResponse} returns this
 */
proto.protocols.prometheus.GetValidateResourceResponse.prototype.setItemscount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.GetValidateResourceByResourceIdResponse.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetValidateResourceByResourceIdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetValidateResourceByResourceIdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetValidateResourceByResourceIdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetValidateResourceByResourceIdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    resource: (f = msg.getResource()) && common_pb.Resource.toObject(includeInstance, f),
    scenebasesList: jspb.Message.toObjectList(msg.getScenebasesList(),
    common_pb.SceneBase.toObject, includeInstance),
    itemcount: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetValidateResourceByResourceIdResponse}
 */
proto.protocols.prometheus.GetValidateResourceByResourceIdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetValidateResourceByResourceIdResponse;
  return proto.protocols.prometheus.GetValidateResourceByResourceIdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetValidateResourceByResourceIdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetValidateResourceByResourceIdResponse}
 */
proto.protocols.prometheus.GetValidateResourceByResourceIdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Resource;
      reader.readMessage(value,common_pb.Resource.deserializeBinaryFromReader);
      msg.setResource(value);
      break;
    case 3:
      var value = new common_pb.SceneBase;
      reader.readMessage(value,common_pb.SceneBase.deserializeBinaryFromReader);
      msg.addScenebases(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setItemcount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetValidateResourceByResourceIdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetValidateResourceByResourceIdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetValidateResourceByResourceIdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetValidateResourceByResourceIdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getResource();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Resource.serializeBinaryToWriter
    );
  }
  f = message.getScenebasesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      common_pb.SceneBase.serializeBinaryToWriter
    );
  }
  f = message.getItemcount();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetValidateResourceByResourceIdResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetValidateResourceByResourceIdResponse} returns this
*/
proto.protocols.prometheus.GetValidateResourceByResourceIdResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetValidateResourceByResourceIdResponse} returns this
 */
proto.protocols.prometheus.GetValidateResourceByResourceIdResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetValidateResourceByResourceIdResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Resource resource = 2;
 * @return {?proto.protocols.common.Resource}
 */
proto.protocols.prometheus.GetValidateResourceByResourceIdResponse.prototype.getResource = function() {
  return /** @type{?proto.protocols.common.Resource} */ (
    jspb.Message.getWrapperField(this, common_pb.Resource, 2));
};


/**
 * @param {?proto.protocols.common.Resource|undefined} value
 * @return {!proto.protocols.prometheus.GetValidateResourceByResourceIdResponse} returns this
*/
proto.protocols.prometheus.GetValidateResourceByResourceIdResponse.prototype.setResource = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetValidateResourceByResourceIdResponse} returns this
 */
proto.protocols.prometheus.GetValidateResourceByResourceIdResponse.prototype.clearResource = function() {
  return this.setResource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetValidateResourceByResourceIdResponse.prototype.hasResource = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated protocols.common.SceneBase sceneBases = 3;
 * @return {!Array<!proto.protocols.common.SceneBase>}
 */
proto.protocols.prometheus.GetValidateResourceByResourceIdResponse.prototype.getScenebasesList = function() {
  return /** @type{!Array<!proto.protocols.common.SceneBase>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.SceneBase, 3));
};


/**
 * @param {!Array<!proto.protocols.common.SceneBase>} value
 * @return {!proto.protocols.prometheus.GetValidateResourceByResourceIdResponse} returns this
*/
proto.protocols.prometheus.GetValidateResourceByResourceIdResponse.prototype.setScenebasesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.protocols.common.SceneBase=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocols.common.SceneBase}
 */
proto.protocols.prometheus.GetValidateResourceByResourceIdResponse.prototype.addScenebases = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.protocols.common.SceneBase, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.GetValidateResourceByResourceIdResponse} returns this
 */
proto.protocols.prometheus.GetValidateResourceByResourceIdResponse.prototype.clearScenebasesList = function() {
  return this.setScenebasesList([]);
};


/**
 * optional int32 itemCount = 4;
 * @return {number}
 */
proto.protocols.prometheus.GetValidateResourceByResourceIdResponse.prototype.getItemcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocols.prometheus.GetValidateResourceByResourceIdResponse} returns this
 */
proto.protocols.prometheus.GetValidateResourceByResourceIdResponse.prototype.setItemcount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.PutResourceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.PutResourceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.PutResourceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutResourceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    resource: (f = msg.getResource()) && common_pb.Resource.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.PutResourceResponse}
 */
proto.protocols.prometheus.PutResourceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.PutResourceResponse;
  return proto.protocols.prometheus.PutResourceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.PutResourceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.PutResourceResponse}
 */
proto.protocols.prometheus.PutResourceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Resource;
      reader.readMessage(value,common_pb.Resource.deserializeBinaryFromReader);
      msg.setResource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.PutResourceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.PutResourceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.PutResourceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.PutResourceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getResource();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Resource.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.PutResourceResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.PutResourceResponse} returns this
*/
proto.protocols.prometheus.PutResourceResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutResourceResponse} returns this
 */
proto.protocols.prometheus.PutResourceResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutResourceResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Resource resource = 2;
 * @return {?proto.protocols.common.Resource}
 */
proto.protocols.prometheus.PutResourceResponse.prototype.getResource = function() {
  return /** @type{?proto.protocols.common.Resource} */ (
    jspb.Message.getWrapperField(this, common_pb.Resource, 2));
};


/**
 * @param {?proto.protocols.common.Resource|undefined} value
 * @return {!proto.protocols.prometheus.PutResourceResponse} returns this
*/
proto.protocols.prometheus.PutResourceResponse.prototype.setResource = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.PutResourceResponse} returns this
 */
proto.protocols.prometheus.PutResourceResponse.prototype.clearResource = function() {
  return this.setResource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.PutResourceResponse.prototype.hasResource = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetResourceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetResourceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetResourceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetResourceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    resource: (f = msg.getResource()) && common_pb.Resource.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetResourceResponse}
 */
proto.protocols.prometheus.GetResourceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetResourceResponse;
  return proto.protocols.prometheus.GetResourceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetResourceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetResourceResponse}
 */
proto.protocols.prometheus.GetResourceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Resource;
      reader.readMessage(value,common_pb.Resource.deserializeBinaryFromReader);
      msg.setResource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetResourceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetResourceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetResourceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetResourceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getResource();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.Resource.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetResourceResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetResourceResponse} returns this
*/
proto.protocols.prometheus.GetResourceResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetResourceResponse} returns this
 */
proto.protocols.prometheus.GetResourceResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetResourceResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.Resource resource = 2;
 * @return {?proto.protocols.common.Resource}
 */
proto.protocols.prometheus.GetResourceResponse.prototype.getResource = function() {
  return /** @type{?proto.protocols.common.Resource} */ (
    jspb.Message.getWrapperField(this, common_pb.Resource, 2));
};


/**
 * @param {?proto.protocols.common.Resource|undefined} value
 * @return {!proto.protocols.prometheus.GetResourceResponse} returns this
*/
proto.protocols.prometheus.GetResourceResponse.prototype.setResource = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetResourceResponse} returns this
 */
proto.protocols.prometheus.GetResourceResponse.prototype.clearResource = function() {
  return this.setResource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetResourceResponse.prototype.hasResource = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.GetResourcesResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetResourcesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetResourcesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetResourcesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetResourcesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    resourcesList: jspb.Message.toObjectList(msg.getResourcesList(),
    common_pb.Resource.toObject, includeInstance),
    pagescount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    itemscount: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetResourcesResponse}
 */
proto.protocols.prometheus.GetResourcesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetResourcesResponse;
  return proto.protocols.prometheus.GetResourcesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetResourcesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetResourcesResponse}
 */
proto.protocols.prometheus.GetResourcesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.Resource;
      reader.readMessage(value,common_pb.Resource.deserializeBinaryFromReader);
      msg.addResources(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPagescount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setItemscount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetResourcesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetResourcesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetResourcesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetResourcesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getResourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_pb.Resource.serializeBinaryToWriter
    );
  }
  f = message.getPagescount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getItemscount();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetResourcesResponse.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetResourcesResponse} returns this
*/
proto.protocols.prometheus.GetResourcesResponse.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetResourcesResponse} returns this
 */
proto.protocols.prometheus.GetResourcesResponse.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetResourcesResponse.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated protocols.common.Resource resources = 2;
 * @return {!Array<!proto.protocols.common.Resource>}
 */
proto.protocols.prometheus.GetResourcesResponse.prototype.getResourcesList = function() {
  return /** @type{!Array<!proto.protocols.common.Resource>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.Resource, 2));
};


/**
 * @param {!Array<!proto.protocols.common.Resource>} value
 * @return {!proto.protocols.prometheus.GetResourcesResponse} returns this
*/
proto.protocols.prometheus.GetResourcesResponse.prototype.setResourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.protocols.common.Resource=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocols.common.Resource}
 */
proto.protocols.prometheus.GetResourcesResponse.prototype.addResources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.protocols.common.Resource, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.GetResourcesResponse} returns this
 */
proto.protocols.prometheus.GetResourcesResponse.prototype.clearResourcesList = function() {
  return this.setResourcesList([]);
};


/**
 * optional int32 pagesCount = 3;
 * @return {number}
 */
proto.protocols.prometheus.GetResourcesResponse.prototype.getPagescount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocols.prometheus.GetResourcesResponse} returns this
 */
proto.protocols.prometheus.GetResourcesResponse.prototype.setPagescount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 itemsCount = 4;
 * @return {number}
 */
proto.protocols.prometheus.GetResourcesResponse.prototype.getItemscount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocols.prometheus.GetResourcesResponse} returns this
 */
proto.protocols.prometheus.GetResourcesResponse.prototype.setItemscount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.protocols.prometheus.GetSceneByIdBlueprintV2Response.repeatedFields_ = [4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocols.prometheus.GetSceneByIdBlueprintV2Response.prototype.toObject = function(opt_includeInstance) {
  return proto.protocols.prometheus.GetSceneByIdBlueprintV2Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocols.prometheus.GetSceneByIdBlueprintV2Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetSceneByIdBlueprintV2Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    common: (f = msg.getCommon()) && common_pb.CommonStatus.toObject(includeInstance, f),
    blueprint: (f = msg.getBlueprint()) && common_pb.SceneBlueprint.toObject(includeInstance, f),
    scenebase: (f = msg.getScenebase()) && common_pb.SceneBase.toObject(includeInstance, f),
    scenebasesList: jspb.Message.toObjectList(msg.getScenebasesList(),
    common_pb.SceneBase.toObject, includeInstance),
    resourcesList: jspb.Message.toObjectList(msg.getResourcesList(),
    common_pb.Resource.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocols.prometheus.GetSceneByIdBlueprintV2Response}
 */
proto.protocols.prometheus.GetSceneByIdBlueprintV2Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocols.prometheus.GetSceneByIdBlueprintV2Response;
  return proto.protocols.prometheus.GetSceneByIdBlueprintV2Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocols.prometheus.GetSceneByIdBlueprintV2Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocols.prometheus.GetSceneByIdBlueprintV2Response}
 */
proto.protocols.prometheus.GetSceneByIdBlueprintV2Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.CommonStatus;
      reader.readMessage(value,common_pb.CommonStatus.deserializeBinaryFromReader);
      msg.setCommon(value);
      break;
    case 2:
      var value = new common_pb.SceneBlueprint;
      reader.readMessage(value,common_pb.SceneBlueprint.deserializeBinaryFromReader);
      msg.setBlueprint(value);
      break;
    case 3:
      var value = new common_pb.SceneBase;
      reader.readMessage(value,common_pb.SceneBase.deserializeBinaryFromReader);
      msg.setScenebase(value);
      break;
    case 4:
      var value = new common_pb.SceneBase;
      reader.readMessage(value,common_pb.SceneBase.deserializeBinaryFromReader);
      msg.addScenebases(value);
      break;
    case 5:
      var value = new common_pb.Resource;
      reader.readMessage(value,common_pb.Resource.deserializeBinaryFromReader);
      msg.addResources(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocols.prometheus.GetSceneByIdBlueprintV2Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocols.prometheus.GetSceneByIdBlueprintV2Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocols.prometheus.GetSceneByIdBlueprintV2Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocols.prometheus.GetSceneByIdBlueprintV2Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommon();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.CommonStatus.serializeBinaryToWriter
    );
  }
  f = message.getBlueprint();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_pb.SceneBlueprint.serializeBinaryToWriter
    );
  }
  f = message.getScenebase();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      common_pb.SceneBase.serializeBinaryToWriter
    );
  }
  f = message.getScenebasesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      common_pb.SceneBase.serializeBinaryToWriter
    );
  }
  f = message.getResourcesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      common_pb.Resource.serializeBinaryToWriter
    );
  }
};


/**
 * optional protocols.common.CommonStatus common = 1;
 * @return {?proto.protocols.common.CommonStatus}
 */
proto.protocols.prometheus.GetSceneByIdBlueprintV2Response.prototype.getCommon = function() {
  return /** @type{?proto.protocols.common.CommonStatus} */ (
    jspb.Message.getWrapperField(this, common_pb.CommonStatus, 1));
};


/**
 * @param {?proto.protocols.common.CommonStatus|undefined} value
 * @return {!proto.protocols.prometheus.GetSceneByIdBlueprintV2Response} returns this
*/
proto.protocols.prometheus.GetSceneByIdBlueprintV2Response.prototype.setCommon = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetSceneByIdBlueprintV2Response} returns this
 */
proto.protocols.prometheus.GetSceneByIdBlueprintV2Response.prototype.clearCommon = function() {
  return this.setCommon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetSceneByIdBlueprintV2Response.prototype.hasCommon = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional protocols.common.SceneBlueprint blueprint = 2;
 * @return {?proto.protocols.common.SceneBlueprint}
 */
proto.protocols.prometheus.GetSceneByIdBlueprintV2Response.prototype.getBlueprint = function() {
  return /** @type{?proto.protocols.common.SceneBlueprint} */ (
    jspb.Message.getWrapperField(this, common_pb.SceneBlueprint, 2));
};


/**
 * @param {?proto.protocols.common.SceneBlueprint|undefined} value
 * @return {!proto.protocols.prometheus.GetSceneByIdBlueprintV2Response} returns this
*/
proto.protocols.prometheus.GetSceneByIdBlueprintV2Response.prototype.setBlueprint = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetSceneByIdBlueprintV2Response} returns this
 */
proto.protocols.prometheus.GetSceneByIdBlueprintV2Response.prototype.clearBlueprint = function() {
  return this.setBlueprint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetSceneByIdBlueprintV2Response.prototype.hasBlueprint = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional protocols.common.SceneBase sceneBase = 3;
 * @return {?proto.protocols.common.SceneBase}
 */
proto.protocols.prometheus.GetSceneByIdBlueprintV2Response.prototype.getScenebase = function() {
  return /** @type{?proto.protocols.common.SceneBase} */ (
    jspb.Message.getWrapperField(this, common_pb.SceneBase, 3));
};


/**
 * @param {?proto.protocols.common.SceneBase|undefined} value
 * @return {!proto.protocols.prometheus.GetSceneByIdBlueprintV2Response} returns this
*/
proto.protocols.prometheus.GetSceneByIdBlueprintV2Response.prototype.setScenebase = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.protocols.prometheus.GetSceneByIdBlueprintV2Response} returns this
 */
proto.protocols.prometheus.GetSceneByIdBlueprintV2Response.prototype.clearScenebase = function() {
  return this.setScenebase(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocols.prometheus.GetSceneByIdBlueprintV2Response.prototype.hasScenebase = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated protocols.common.SceneBase sceneBases = 4;
 * @return {!Array<!proto.protocols.common.SceneBase>}
 */
proto.protocols.prometheus.GetSceneByIdBlueprintV2Response.prototype.getScenebasesList = function() {
  return /** @type{!Array<!proto.protocols.common.SceneBase>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.SceneBase, 4));
};


/**
 * @param {!Array<!proto.protocols.common.SceneBase>} value
 * @return {!proto.protocols.prometheus.GetSceneByIdBlueprintV2Response} returns this
*/
proto.protocols.prometheus.GetSceneByIdBlueprintV2Response.prototype.setScenebasesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.protocols.common.SceneBase=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocols.common.SceneBase}
 */
proto.protocols.prometheus.GetSceneByIdBlueprintV2Response.prototype.addScenebases = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.protocols.common.SceneBase, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.GetSceneByIdBlueprintV2Response} returns this
 */
proto.protocols.prometheus.GetSceneByIdBlueprintV2Response.prototype.clearScenebasesList = function() {
  return this.setScenebasesList([]);
};


/**
 * repeated protocols.common.Resource resources = 5;
 * @return {!Array<!proto.protocols.common.Resource>}
 */
proto.protocols.prometheus.GetSceneByIdBlueprintV2Response.prototype.getResourcesList = function() {
  return /** @type{!Array<!proto.protocols.common.Resource>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.Resource, 5));
};


/**
 * @param {!Array<!proto.protocols.common.Resource>} value
 * @return {!proto.protocols.prometheus.GetSceneByIdBlueprintV2Response} returns this
*/
proto.protocols.prometheus.GetSceneByIdBlueprintV2Response.prototype.setResourcesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.protocols.common.Resource=} opt_value
 * @param {number=} opt_index
 * @return {!proto.protocols.common.Resource}
 */
proto.protocols.prometheus.GetSceneByIdBlueprintV2Response.prototype.addResources = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.protocols.common.Resource, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.protocols.prometheus.GetSceneByIdBlueprintV2Response} returns this
 */
proto.protocols.prometheus.GetSceneByIdBlueprintV2Response.prototype.clearResourcesList = function() {
  return this.setResourcesList([]);
};


goog.object.extend(exports, proto.protocols.prometheus);
