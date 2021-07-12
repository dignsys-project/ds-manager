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
    [Route("member/{otherMemberId}/kind")]
    public class MemberKindController : AbstractBaseController
    {
        private readonly ILogger m_Logger = null;
        private readonly IMemberService m_Members = null;
        public MemberKindController(ILogger<MemberKindController> logger, IMemberService members)
        {
            m_Logger = logger;
            m_Members = members;
        }

        [HttpPut("{kind}")]
        public async Task<IActionResult> UpdateMemberKind([FromRoute] long otherMemberId, [FromRoute] Saturn.Backends.Protocols.Common.MEMBER_KIND kind)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            if (kind == MEMBER_KIND.Default)
            {
                return BadRequest();
            }

            // get member id
            var memberId = User.MemberId();
            if (0 >= memberId)
            {
                return BadRequest();
            }

            // get member
            var member = await m_Members.GetMemberById(memberId);
            if (member == null)
            {
                return BadRequest();
            }

            var response = new Saturn.Backends.Protocols.Prometheus.PutMemberKindResponse();

            // TODO : check member permission
            if (!member.HavePermission(MEMBER_PERMISSION_KIND.MemberUpdate))
            {
                response.Common = MakeCommon(COMMON_STATUS_KIND.FailedPermission);
                return OkWithMessage(response);
            }

            // find other member
            var otherMember = await m_Members.GetMemberById(otherMemberId);
            if (null == member)
            {
                response.Common = MakeCommon(COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            // check same kind
            if (otherMember.MemberKind == kind)
            {
                return BadRequest();
            }

            bool bSuccess = await m_Members.UpdateMemberKind(member, otherMember, kind);
            if (!bSuccess)
            {
                response.Common = MakeCommon(COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.MemberBase = otherMember.ToMessageBase();
            response.Common = MakeCommon(COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);

        }

    }
}
