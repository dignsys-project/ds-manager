using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Prometheus.Models.Databases.Extensions;
using Prometheus.Services;
using Saturn.Backends.Commons;
using Saturn.Backends.Commons.Extensions;
using Saturn.Backends.Services.Extensions;

namespace Prometheus.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class SubtitleController : AbstractBaseController
    {
        private readonly ILogger m_Logger = null;
        private readonly IMemberService m_Members = null;

        private readonly Saturn.Backends.Services.IRssService m_Service = null;

        public SubtitleController(ILogger<SubtitleController> logger, IMemberService members, Saturn.Backends.Services.IRssService service)
        {
            m_Logger = logger;
            m_Members = members;
            m_Service = service;
        }

        [HttpGet("rss")]
        public async Task<IActionResult> GetRss([FromQuery] string address)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            if (!Uri.IsWellFormedUriString(address, UriKind.RelativeOrAbsolute))
            {
                return BadRequest();
            }


            var response = new Saturn.Backends.Protocols.Prometheus.GetSubtitleRssResponse();

            var feed = await m_Service.GetRssFeedAsync(address);
            if (null == feed)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedEnceladus);
                return OkWithMessage(response);
            }

            response.Feed = feed.ToMessage();
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);

            return OkWithMessage(response);
        }
    }
}
