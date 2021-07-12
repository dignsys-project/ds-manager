using System;
using System.Linq;
using System.Reflection;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Google.Protobuf;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Prometheus.Models.Databases.Extensions;
using Prometheus.Services;
using Saturn.Backends.Commons;

namespace Prometheus.Controllers
{
    [Authorize]
    [ApiController]
    [Route("Department/Member")]
    public class DepartmentMemberController : AbstractBaseController
    {
        private readonly ILogger m_Logger = null;
        private readonly IDepartmentService m_DepartmentService = null;
        private readonly IMemberService m_MemberService = null;
        private readonly IMemberDepartmentService m_MemberDepartmentService = null;

        public DepartmentMemberController(ILogger<DepartmentMemberController> logger, IDepartmentService departmentService, IMemberService memberService, IMemberDepartmentService memberDepartmentService)
        {
            m_Logger = logger;
            m_DepartmentService = departmentService;
            m_MemberService = memberService;
            m_MemberDepartmentService = memberDepartmentService;
        }



        [HttpGet("{departmentId}")]
        public async Task<IActionResult> GetDepartmentMembers([FromRoute] long departmentId)
        {
            if (!ModelState.IsValid || 0 >= departmentId)
            {
                return BadRequest();
            }

            var response = new Saturn.Backends.Protocols.Prometheus.GetDepartmentMemberResponse();

            var department = await m_DepartmentService.GetDepartmentByDepartmentId(departmentId);
            if (null == department)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            var members = await m_MemberService.GetMembersExcludeDepartmentById(departmentId);
            if (members == null)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.Department = department.ToMessage();
            response.MemberBases.AddRange(members.Select(x => x.ToMessageBase()));
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [HttpPost]
        public async Task<IActionResult> DepartmentAddMember([FromBody] byte[] decoded)
        {
            Saturn.Backends.Protocols.Prometheus.PostDepartmentMemberRequest request = null;

            var response = new Saturn.Backends.Protocols.Prometheus.PostDepartmentMemberResponse();
            try
            {
                request = Saturn.Backends.Protocols.Prometheus.PostDepartmentMemberRequest.Parser.ParseFrom(decoded);
            }
            catch (System.Exception e)
            {
                m_Logger.LogCritical($"Protobuf, Message : Saturn.Backends.Protocols.Prometheus.PostDepartmentMemberRequest, Exception : {e}");

                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedProtobuf);
                return OkWithMessage(response);
            }

            var departmentId = request.DepartmentId;
            if (0 >= departmentId)
            {
                return BadRequest();
            }

            var memberId = request.MemberId;
            if (memberId <= 0)
            {
                return BadRequest();
            }

            var department = await m_DepartmentService.GetDepartmentByDepartmentId(departmentId);
            if (null == department)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            var member = await m_MemberService.GetMemberById(memberId);
            if (null == member)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            var index = member.MemberDepartments.FindIndex(x => x.DepartmentId == department.Id);
            if (-1 != index)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedRefresh);
                return OkWithMessage(response);
            }

            var memberDepartment = await m_MemberDepartmentService.Insert(new Models.Databases.MemberDepartment { Member = member, Department = department });
            if (null == memberDepartment)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            m_Logger.LogInformation($"Member Update, Id : {member.Id}, Department Id : {department.Id}, Department Name : { department.Name}");

            department = await m_DepartmentService.GetDepartmentByDepartmentId(departmentId);
            if (null == department)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            var members = await m_MemberService.GetMembersExcludeDepartmentById(departmentId);
            if (members == null)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.Department = department.ToMessage();
            response.MemberBases.AddRange(members.Select(x => x.ToMessageBase()));
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);

            return OkWithMessage(response);
        }


        [HttpDelete("{departmentId}")]
        public async Task<IActionResult> MemberLeave([FromRoute] long departmentId, [FromQuery] long id)
        {
            var leaveMemberId = id;
            if (leaveMemberId <= 0)
            {
                return BadRequest();
            }

            var response = new Saturn.Backends.Protocols.Prometheus.DeleteDepartmentMemberResponse();

            // find leave member id 
            var leaveMember = await m_MemberService.GetMemberById(leaveMemberId);
            if (null == leaveMember)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            // find member department 
            var memberDepartment = leaveMember.MemberDepartments.Find(x => x.DepartmentId == departmentId);
            if (null == memberDepartment)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            bool bDeleted = await m_MemberDepartmentService.Delete(memberDepartment);
            if (!bDeleted)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            m_Logger.LogInformation($"Department Member Delete, Id : {leaveMember.Id}");

            var department = await m_DepartmentService.GetDepartmentByDepartmentId(departmentId);
            if (null == department)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            var members = await m_MemberService.GetMembersExcludeDepartmentById(departmentId);
            if (members == null)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.Department = department.ToMessage();
            response.MemberBases.AddRange(members.Select(x => x.ToMessageBase()));
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);

            return OkWithMessage(response);
        }
    }
}
