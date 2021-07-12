using System;
using System.Configuration;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Google.Protobuf;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Prometheus.Models.Databases.Extensions;
using Prometheus.Services;
using Saturn.Backends.Commons;
using Saturn.Backends.Commons.Extensions;
using Saturn.Backends.Protocols.Common;

namespace Prometheus.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class MemberController : AbstractBaseController
    {
        private readonly ILogger m_Logger = null;
        private readonly IMemberService m_MemberService = null;
        public MemberController(ILogger<MemberController> logger, IMemberService memberService, IConfiguration configuration)
        {
            m_Logger = logger;
            m_MemberService = memberService;
        }

        [HttpGet]
        public async Task<IActionResult> GetItems()
        {
            var response = new Saturn.Backends.Protocols.Prometheus.GetMemberResponse();

            var members = await m_MemberService.GetMembers();
            if (null == members)
            {
                response.Common = MakeCommon(COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            if (members?.Count <= 0)
            {
                response.Common = MakeCommon(COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            response.Common = MakeCommon(COMMON_STATUS_KIND.Success);
            response.MemberBases.AddRange(members.Select(x => x.ToMessageBase()));
            return OkWithMessage(response);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetMemberById([FromRoute] long id)
        {
            var memberId = User.MemberId();

            if (0 >= id)
            {
                id = memberId;
            }

            var response = new Saturn.Backends.Protocols.Prometheus.GetMemberByIdResponse();

            var member = await m_MemberService.GetMemberById(id);
            if (null == member)
            {
                response.Common = MakeCommon(COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            response.Member = member.ToMessage();
            response.Common = MakeCommon(COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateMember()
        {
            var response = new Saturn.Backends.Protocols.Prometheus.PutMemberResponse();

            var memberId = User.MemberId();

            var member = await m_MemberService.GetMemberById(memberId);
            if (null == member)
            {
                return BadRequest();
            }

            member.LastConnectedSeconds = DateTimeOffset.Now.ToUnixTimeSeconds();
            bool bUpdated = await m_MemberService.Update(member);
            if (!bUpdated)
            {
                response.Common = MakeCommon(COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }
            // response.EnceladusAddress = Configuration()
            response.Common = MakeCommon(COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);

        }


        [HttpDelete]
        public async Task<IActionResult> DeleteMember([FromQuery] Guid id)
        {
            if (Guid.Empty == id)
            {
                return BadRequest();
            }

            var response = new Saturn.Backends.Protocols.Prometheus.DeleteMemberResponse();
            var member = await m_MemberService.GetMemberByGuid(id);
            if (null == member)
            {
                response.Common = MakeCommon(COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            if (member.IsAdministrator())
            {
                response.Common = MakeCommon(COMMON_STATUS_KIND.Unauthorized);
                return OkWithMessage(response);
            }

            var bSuccess = await m_MemberService.Delete(member);
            if (!bSuccess)
            {
                response.Common = MakeCommon(COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.Common = MakeCommon(COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }
    }
}
