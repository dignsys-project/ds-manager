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
using Saturn.Backends.Commons.Extensions;

namespace Prometheus.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class DepartmentController : AbstractBaseController
    {
        private readonly ILogger m_Logger = null;
        private readonly IDepartmentService m_DepartmentService = null;

        private readonly IMemberService m_Members = null;

        public DepartmentController(ILogger<DepartmentController> logger, IDepartmentService departmentService, IMemberService members)
        {
            m_Logger = logger;
            m_DepartmentService = departmentService;
            m_Members = members;
        }


        [HttpGet("{departmentId}")]
        public async Task<IActionResult> GetDepartmentByDepartmentId([FromRoute] long departmentId)
        {
            if (!ModelState.IsValid || 0 >= departmentId)
            {
                return BadRequest();
            }

            var response = new Saturn.Backends.Protocols.Prometheus.GetDepartmentByIdResponse();

            var department = await m_DepartmentService.GetDepartmentByDepartmentId(departmentId);
            if (null == department)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }
            response.Department = department.ToMessage();
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }


        [HttpPut]
        public async Task<IActionResult> UpdateDepartmentName([FromBody] byte[] decoded)
        {
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

            // TODO : check member permission

            Saturn.Backends.Protocols.Prometheus.PutDepartmentRequest request = null;

            var response = new Saturn.Backends.Protocols.Prometheus.PutDepartmentResponse();
            try
            {
                request = Saturn.Backends.Protocols.Prometheus.PutDepartmentRequest.Parser.ParseFrom(decoded);
            }
            catch (System.Exception e)
            {
                m_Logger.LogCritical($"Protobuf, Message : Saturn.Backends.Protocols.Prometheus.PutDepartmentRequest, Exception : {e}");

                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedProtobuf);
                return OkWithMessage(response);
            }

            if (null == request.Department)
            {
                return BadRequest();
            }

            var departmentId = request.Department.Base.Id;
            if (0 >= departmentId)
            {
                return BadRequest();
            }

            var department = await m_DepartmentService.GetDepartmentByDepartmentId(departmentId);
            if (null == department)
            {
                return BadRequest();
            }

            var name = department.Name;
            var sameDepartment = await m_DepartmentService.SelectDepartmentByName(name);
            if (null != sameDepartment)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDuplicated);
                return OkWithMessage(response);
            }

            bool bSuccess = await m_DepartmentService.UpdateDepartmentName(member, department, name);
            if (!bSuccess)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            m_Logger.LogInformation($"Department Update, Id : {department.Id}, Name : {name}, Name : {department.Name}");

            response.Department = department.ToMessage();
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);

            return OkWithMessage(response);
        }


    }
}
