using System;
using System.Threading.Tasks;
using Google.Protobuf;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Saturn.Backends.Commons.Extensions;

namespace Saturn.Backends.Commons
{
    public abstract class AbstractBaseController : ControllerBase
    {
        protected OkObjectResult OkWithMessage(IMessage message) => Ok(message.ToNetwork());

        protected OkObjectResult OkWithMessageToSaturn(IMessage message) => Ok(JsonConvert.SerializeObject(message.ToNetwork()));

        protected Saturn.Backends.Protocols.Common.CommonStatus MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND status) => new Saturn.Backends.Protocols.Common.CommonStatus { Status = status };

    }
}
