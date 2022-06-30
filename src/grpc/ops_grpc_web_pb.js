/**
 * @fileoverview gRPC-Web generated client stub for tangelogames.api.ops
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')
const proto = {};
proto.tangelogames = {};
proto.tangelogames.api = {};
proto.tangelogames.api.ops = require('./ops_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.tangelogames.api.ops.OpsClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.tangelogames.api.ops.OpsPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tangelogames.api.ops.ServerInfoRequest,
 *   !proto.tangelogames.api.ops.ServerInfoResponse>}
 */
const methodDescriptor_Ops_ServerInfo = new grpc.web.MethodDescriptor(
  '/tangelogames.api.ops.Ops/ServerInfo',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.tangelogames.api.ops.ServerInfoRequest,
  proto.tangelogames.api.ops.ServerInfoResponse,
  /**
   * @param {!proto.tangelogames.api.ops.ServerInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tangelogames.api.ops.ServerInfoResponse.deserializeBinary
);


/**
 * @param {!proto.tangelogames.api.ops.ServerInfoRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.tangelogames.api.ops.ServerInfoResponse>}
 *     The XHR Node Readable Stream
 */
proto.tangelogames.api.ops.OpsClient.prototype.serverInfo =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/tangelogames.api.ops.Ops/ServerInfo',
      request,
      metadata || {},
      methodDescriptor_Ops_ServerInfo);
};


/**
 * @param {!proto.tangelogames.api.ops.ServerInfoRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.tangelogames.api.ops.ServerInfoResponse>}
 *     The XHR Node Readable Stream
 */
proto.tangelogames.api.ops.OpsPromiseClient.prototype.serverInfo =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/tangelogames.api.ops.Ops/ServerInfo',
      request,
      metadata || {},
      methodDescriptor_Ops_ServerInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tangelogames.api.ops.StatusRequest,
 *   !proto.tangelogames.api.ops.StatusResponse>}
 */
const methodDescriptor_Ops_Status = new grpc.web.MethodDescriptor(
  '/tangelogames.api.ops.Ops/Status',
  grpc.web.MethodType.UNARY,
  proto.tangelogames.api.ops.StatusRequest,
  proto.tangelogames.api.ops.StatusResponse,
  /**
   * @param {!proto.tangelogames.api.ops.StatusRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tangelogames.api.ops.StatusResponse.deserializeBinary
);


/**
 * @param {!proto.tangelogames.api.ops.StatusRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.tangelogames.api.ops.StatusResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tangelogames.api.ops.StatusResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tangelogames.api.ops.OpsClient.prototype.status =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tangelogames.api.ops.Ops/Status',
      request,
      metadata || {},
      methodDescriptor_Ops_Status,
      callback);
};


/**
 * @param {!proto.tangelogames.api.ops.StatusRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tangelogames.api.ops.StatusResponse>}
 *     Promise that resolves to the response
 */
proto.tangelogames.api.ops.OpsPromiseClient.prototype.status =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tangelogames.api.ops.Ops/Status',
      request,
      metadata || {},
      methodDescriptor_Ops_Status);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tangelogames.api.ops.PingRequest,
 *   !proto.tangelogames.api.ops.PingResponse>}
 */
const methodDescriptor_Ops_Ping = new grpc.web.MethodDescriptor(
  '/tangelogames.api.ops.Ops/Ping',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.tangelogames.api.ops.PingRequest,
  proto.tangelogames.api.ops.PingResponse,
  /**
   * @param {!proto.tangelogames.api.ops.PingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tangelogames.api.ops.PingResponse.deserializeBinary
);


/**
 * @param {!proto.tangelogames.api.ops.PingRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.tangelogames.api.ops.PingResponse>}
 *     The XHR Node Readable Stream
 */
proto.tangelogames.api.ops.OpsClient.prototype.ping =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/tangelogames.api.ops.Ops/Ping',
      request,
      metadata || {},
      methodDescriptor_Ops_Ping);
};


/**
 * @param {!proto.tangelogames.api.ops.PingRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.tangelogames.api.ops.PingResponse>}
 *     The XHR Node Readable Stream
 */
proto.tangelogames.api.ops.OpsPromiseClient.prototype.ping =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/tangelogames.api.ops.Ops/Ping',
      request,
      metadata || {},
      methodDescriptor_Ops_Ping);
};


module.exports = proto.tangelogames.api.ops;

