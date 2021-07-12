using System;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Google.Protobuf;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Saturn.Backends.Commons;
using Saturn.Backends.Commons.Extensions;

namespace Prometheus.Controllers
{
    public class TimeElement
    {
        public DateTime Current { get; set; }
        public int Hour { get; set; }
        public DateTime UTC { get; set; }


        public int UTCHour { get; set; }
    }

    [Authorize]
    [ApiController]
    [Route("")]
    public class VersionController : AbstractBaseController
    {
        private readonly ILogger m_Logger = null;
        private readonly Services.IMemberService m_MemberService = null;
        private readonly Saturn.Backends.Services.IVersionService m_VersionService = null;

        public VersionController(ILogger<VersionController> logger, Services.IMemberService memberService, Saturn.Backends.Services.IVersionService versionService)
        {
            m_Logger = logger;

            m_MemberService = memberService;
            m_VersionService = versionService;
        }

        [AllowAnonymous]
        [HttpGet("anonymous")]
        public IActionResult GetVersionForAnoymous([FromQuery] bool pretty = true)
        {
            var response = new Saturn.Backends.Protocols.Common.GetVersionResponse();

            response.Versions.Add(m_VersionService.GetMoonVersion());
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);

            if (pretty)
            {
                return Ok(response);
            }

            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [AllowAnonymous]
        [HttpGet("anonymous/time")]
        public IActionResult GetSystemTime([FromQuery] bool pretty = true)
        {
            return Ok(new TimeElement { Current = DateTime.Now, Hour = DateTime.Now.Hour, UTC = DateTime.UtcNow, UTCHour = DateTime.UtcNow.Hour });
        }


        [HttpGet]
        public IActionResult Get([FromQuery] bool pretty = true)
        {
            var response = new Saturn.Backends.Protocols.Common.GetVersionResponse();
            response.Versions.Add(m_VersionService.GetMoonVersion());
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            if (pretty)
            {
                return Ok(response);
            }

            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);

            // var stopWatch = System.Diagnostics.Stopwatch.StartNew();

            // var responseContent = await m_EnceladusService.GetVersion();
            // if (null == responseContent)
            // {
            //     var enceladusService = m_VersionService.GetMoonVersion();
            //     enceladusService.ServiceName = "Enceladus";
            //     enceladusService.RuntimeVersion = "Not Connected";
            //     enceladusService.OsVersion = "Not Connected";
            //     response.Versions.Add(enceladusService);
            // }
            // else
            // {
            //     try
            //     {
            //         var enceladusResponse = Saturn.Backends.Protocols.Common.GetVersionResponse.Parser.ParseFrom(responseContent);
            //         if (enceladusResponse.Common.IsSuccess())
            //         {
            //             var version = enceladusResponse.Versions.FirstOrDefault();
            //             if (null != version)
            //             {
            //                 version.ElapsedMilliSeconds = stopWatch.ElapsedMilliseconds;
            //                 response.Versions.Add(enceladusResponse.Versions);
            //             }
            //         }
            //     }
            //     catch (System.Exception e)
            //     {
            //         m_Logger.LogCritical($"Protobuf, Message : Saturn.Backends.Protocols.Common.GetVersionResponse, Exception : {e}");

            //         response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedEnceladus);
            //         return OkWithMessage(response);
            //     }
            // }

            // response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            // return OkWithMessage(response);
        }
    }
}
