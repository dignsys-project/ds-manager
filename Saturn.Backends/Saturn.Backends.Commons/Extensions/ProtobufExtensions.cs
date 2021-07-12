
using System;
using Google.Protobuf;
using Newtonsoft.Json;

namespace Saturn.Backends.Commons.Extensions
{
    public static class ProtobufExtensions
    {
        public static string ToNetwork(this IMessage message) => JsonConvert.SerializeObject(Convert.ToBase64String(message.ToByteArray()));

        public static byte[] ToNetworkByteArray(this IMessage message) => message.ToByteArray();
        public static bool IsSuccess(this Saturn.Backends.Protocols.Common.CommonStatus common) => common.Status == Protocols.Common.COMMON_STATUS_KIND.Success;
    }
}