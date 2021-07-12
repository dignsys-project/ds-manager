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
    [ApiController]
    [Route("")]
    public class RequiredController : AbstractBaseController
    {
        private readonly ILogger m_Logger = null;
        private readonly Services.IMemberService m_MemberService = null;
        private readonly Saturn.Backends.Services.IVersionService m_VersionService = null;

        public RequiredController(ILogger<RequiredController> logger, Services.IMemberService memberService, Saturn.Backends.Services.IVersionService versionService)
        {
            m_Logger = logger;

            m_MemberService = memberService;
            m_VersionService = versionService;
        }

        [HttpGet("required")]
        public async Task<IActionResult> GetRequired()
        {
            var response = new Saturn.Backends.Protocols.Prometheus.GetVersionRequiredResponse();
            response.HaveAdmin = await m_MemberService.HaveAdmin();
            response.Version = m_VersionService.GetMoonVersion();
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }
    }
}
