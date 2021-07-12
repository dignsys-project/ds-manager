using System;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Google.Protobuf;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
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
    [Route("member/{memberId}/permission")]
    public class MemberPermissionController : AbstractBaseController
    {
        private readonly ILogger m_Logger = null;
        private readonly IMemberService m_Members = null;
        public MemberPermissionController(ILogger<MemberPermissionController> logger, IMemberService members)
        {
            m_Logger = logger;
            m_Members = members;
        }

        [HttpPut]
        public async Task<IActionResult> MemberPermissionChange([FromRoute] long memberId, [FromBody] byte[] decoded)
        {
            if (!ModelState.IsValid || memberId <= 0)
            {
                return BadRequest();
            }

            Saturn.Backends.Protocols.Prometheus.PutMemberPermissionRequest request = null;

            var response = new Saturn.Backends.Protocols.Prometheus.PutMemberPermissionResponse();
            try
            {
                request = Saturn.Backends.Protocols.Prometheus.PutMemberPermissionRequest.Parser.ParseFrom(decoded);
            }
            catch (System.Exception e)
            {
                m_Logger.LogCritical($"Protobuf, Message : Saturn.Backends.Protocols.Prometheus.PutMemberPermissionRequest, Exception : {e}");

                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedProtobuf);
                return OkWithMessage(response);
            }

            if (0 >= request.Permissions.Count)
            {
                return BadRequest();
            }

            // get member id
            var owerMemberId = User.MemberId();
            if (0 >= owerMemberId)
            {
                return BadRequest();
            }

            // get member
            var ownerMember = await m_Members.GetMemberById(owerMemberId);
            if (ownerMember == null)
            {
                return BadRequest();
            }

            // TODO : check member permission
            if (!ownerMember.IsAdministrator() && !ownerMember.HavePermission(MEMBER_PERMISSION_KIND.MemberUpdate))
            {
                response.Common = MakeCommon(COMMON_STATUS_KIND.FailedPermission);
                return OkWithMessage(response);
            }

            // get dest member id 
            var member = await m_Members.GetMemberById(memberId);
            if (null == member)
            {
                response.Common = MakeCommon(COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            bool bSuccess = await m_Members.UpdateMemberPermissions(ownerMember, member, request.Permissions.ToList());
            if (!bSuccess)
            {
                response.Common = MakeCommon(COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.Member = member.ToMessage();
            response.Common = MakeCommon(COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [HttpDelete]
        public async Task<IActionResult> RemovePermissionFromMember([FromRoute] long memberId)
        {
            var requestMemberId = User.MemberId();
            if (0 >= requestMemberId)
            {
                return BadRequest();
            }

            var requestMember = await m_Members.GetMemberById(requestMemberId);
            if (null == requestMember)
            {
                m_Logger.LogError($"Member Not Found, MemberId : {requestMemberId}");

                return BadRequest();
            }

            var response = new Saturn.Backends.Protocols.Prometheus.DeleteMemberPermissionResponse();

            // check member base permission
            if (!requestMember.IsAdministrator() && !requestMember.HavePermission(Saturn.Backends.Protocols.Common.MEMBER_PERMISSION_KIND.MemberUpdate))
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedPermission);
                return OkWithMessage(response);
            }

            var member = await m_Members.GetMemberById(memberId);
            if (null == member)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            if (member.IsAdministrator())
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedPermission);
                return OkWithMessage(response);
            }

            bool bSuccess = await m_Members.DeletePermission(member);
            if (!bSuccess)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            response.Member = member.ToMessage();
            return OkWithMessage(response);
        }
    }
}
