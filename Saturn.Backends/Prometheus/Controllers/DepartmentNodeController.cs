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
    [Route("Department/node")]
    public class DepartmentNodeController : AbstractBaseController
    {
        private readonly ILogger m_Logger = null;
        private readonly IDepartmentService m_DepartmentService = null;

        private readonly IMemberService m_Members = null;

        public DepartmentNodeController(ILogger<DepartmentNodeController> logger, IDepartmentService departmentService, IMemberService members)
        {
            m_Logger = logger;
            m_DepartmentService = departmentService;
            m_Members = members;
        }

        [HttpGet]
        public async Task<IActionResult> GetItems()
        {
            var response = new Saturn.Backends.Protocols.Prometheus.GetDepartmentNodeResponse();

            var departmentNodes = await m_DepartmentService.GetDepartmentNodes();
            if (null == departmentNodes)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.Nodes.AddRange(departmentNodes.Select(x => x.ToMessage()));
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }


        [HttpPost]
        public async Task<IActionResult> CreateDepartment([FromBody] byte[] decoded)
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

            Saturn.Backends.Protocols.Prometheus.PostDepartmentNodeRequest request = null;

            var response = new Saturn.Backends.Protocols.Prometheus.PostDepartmentNodeResponse();
            try
            {
                request = Saturn.Backends.Protocols.Prometheus.PostDepartmentNodeRequest.Parser.ParseFrom(decoded);
            }
            catch (System.Exception e)
            {
                m_Logger.LogCritical($"Protobuf, Message : Saturn.Backends.Protocols.Prometheus.PostDepartmentNodeRequest, Exception : {e}");

                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedProtobuf);
                return OkWithMessage(response);
            }

            // check same department name
            var department = await m_DepartmentService.SelectDepartmentByName(request.DepartmentName);
            if (null != department)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDuplicated);
                return OkWithMessage(request);
            }

            // create department
            var departmentNode = await m_DepartmentService.CreateDepartmentWithNodeId(member, request.DepartmentName, request.ParentDepartmentNodeId);
            if (null == departmentNode)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            m_Logger.LogInformation($"DepartmentNode Created, Id : {departmentNode.Id}, Order : {departmentNode.Order}, Parent Id : {departmentNode.ParentDepartmentNodeId}");

            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            response.Node = departmentNode.ToMessage();
            return OkWithMessage(response);
        }

        [HttpPut("{departmentNodeId}")]
        public async Task<IActionResult> Update([FromRoute] long departmentNodeId, [FromBody] byte[] decoded)
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

            Saturn.Backends.Protocols.Prometheus.PutDepartmentNodeRequest request = null;

            var response = new Saturn.Backends.Protocols.Prometheus.PutDepartmentNodeResponse();
            try
            {
                request = Saturn.Backends.Protocols.Prometheus.PutDepartmentNodeRequest.Parser.ParseFrom(decoded);
            }
            catch (System.Exception e)
            {
                m_Logger.LogCritical($"Protobuf, Message : Saturn.Backends.Protocols.Prometheus.PutDepartmentNodeRequest, Exception : {e}");

                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedProtobuf);
                return OkWithMessage(response);
            }

            if (request.ParentDepartmentNodeId == departmentNodeId)
            {
                return BadRequest();
            }

            var departmentNode = await m_DepartmentService.SelectDepartmentNodesById(departmentNodeId);
            if (null == departmentNode)
            {
                return BadRequest();
            }

            var bSuccess = await m_DepartmentService.UpdateDepartmentNode(member, departmentNode, request.ParentDepartmentNodeId);

            response.Node = departmentNode.ToMessage();
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);

            return OkWithMessage(response);
        }

        [HttpDelete("{departmentNodeId}")]
        public async Task<IActionResult> Delete([FromRoute] long departmentNodeId)
        {
            if (!ModelState.IsValid || departmentNodeId <= 0)
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

            // TODO : check member permission

            // Find departmentNode by departmentNodeId
            var departmentNode = await m_DepartmentService.SelectDepartmentNodesById(departmentNodeId);
            if (null == departmentNode)
            {
                return NoContent();
            }

            var response = new Saturn.Backends.Protocols.Prometheus.DeleteDepartmentNodeResponse();

            // Delete DepartmentNode With Department
            bool bSuccess = await m_DepartmentService.DeleteDepartmentNode(member, departmentNode);
            if (!bSuccess)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);

            return OkWithMessage(response);
        }
    }
}
