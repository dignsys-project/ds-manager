using System;
using System.Collections.Generic;
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
    // 조직의 디바이스 CURD 컨트롤러
    [Authorize]
    [ApiController]
    [Route("Department/Connector")]
    public class DepartmentConnectorController : AbstractBaseController
    {
        // Logger 
        private readonly ILogger m_Logger = null;

        // Department Service
        private readonly IDepartmentService m_DepartmentService = null;

        private readonly IConnectorService m_ConnectorService = null;
        private readonly IMemberRecordService m_MemberRecordService = null;

        private readonly IMemberService m_Members = null;

        public DepartmentConnectorController(ILogger<DepartmentConnectorController> logger, IDepartmentService departmentService, IConnectorService connectorService, IMemberRecordService memberRecordService, IMemberService members)
        {
            m_Logger = logger;
            m_DepartmentService = departmentService;
            m_ConnectorService = connectorService;
            m_MemberRecordService = memberRecordService;
            m_Members = members;
        }

        [HttpGet("{departmentId}")]
        public async Task<IActionResult> GetDepartmentConnectors([FromRoute] long departmentId)
        {
            if (!ModelState.IsValid || 0 >= departmentId)
            {
                return BadRequest();
            }

            var response = new Saturn.Backends.Protocols.Prometheus.GetDepartmentConnectorsResponse();

            var department = await m_DepartmentService.GetDepartmentByDepartmentId(departmentId);
            if (null == department)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            var connectors = await m_ConnectorService.GetDeadbeatConnectors();
            if (connectors == null)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.Department = department.ToMessage();
            response.ConnectorBases.AddRange(connectors.Select(x => x.ToMessageBase()));
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [HttpGet("lowers/{departmentId}")]
        public async Task<IActionResult> GetDepartmentConnectorsLowers([FromRoute] long departmentId)
        {
            if (!ModelState.IsValid || 0 >= departmentId)
            {
                return BadRequest();
            }

            var response = new Saturn.Backends.Protocols.Prometheus.GetDepartmentConnectorLowersResponse();

            var connectors = await m_DepartmentService.GetConnectorsIncludeLowersByDepartmentId(departmentId);
            if (null == connectors)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.ConnectorDepartmentBases.AddRange(connectors.Select(x => x.ToConnectorDepartmentBaseMessage()));
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        // Put
        [HttpPost]
        public async Task<IActionResult> PostConnector([FromBody] byte[] decoded)
        {
            Saturn.Backends.Protocols.Prometheus.PostDepartmentConnectorRequest request = null;

            var response = new Saturn.Backends.Protocols.Prometheus.PostDepartmentConnectorResponse();
            try
            {
                request = Saturn.Backends.Protocols.Prometheus.PostDepartmentConnectorRequest.Parser.ParseFrom(decoded);
            }
            catch (System.Exception e)
            {
                m_Logger.LogCritical($"Protobuf, Message : Saturn.Backends.Protocols.Prometheus.PostDepartmentConnectorRequest, Exception : {e}");

                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedProtobuf);
                return OkWithMessage(response);
            }

            if (0 >= request.DepartmentId)
            {
                return BadRequest();
            }

            if (0 >= request.ConnectorId)
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

            var department = await m_DepartmentService.GetDepartmentByDepartmentId(request.DepartmentId);
            if (null == department)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            var connector = await m_ConnectorService.GetConnectorById(request.ConnectorId);
            if (null == connector)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            if (connector.DepartmentId > 0)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedRefresh);
                return OkWithMessage(response);
            }

            bool bUpdated = await m_ConnectorService.AddConnectorDepartment(member, connector, department);
            if (!bUpdated)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            department = await m_DepartmentService.GetDepartmentByDepartmentId(request.DepartmentId);
            if (null == department)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            var connectors = await m_ConnectorService.GetDeadbeatConnectors();
            if (null == connectors)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.Department = department.ToMessage();
            response.ConnectorBases.AddRange(connectors.Select(x => x.ToMessageBase()));
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        // Delete
        [HttpDelete("{departmentId}")]
        public async Task<IActionResult> DeleteDepartmentConnector([FromRoute] long departmentId, [FromQuery] long id)
        {
            if (departmentId <= 0 || id <= 0)
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

            var connectorId = id;

            var response = new Saturn.Backends.Protocols.Prometheus.DeleteDepartmentConnectorResponse();

            var department = await m_DepartmentService.GetDepartmentByDepartmentId(departmentId);
            if (null == department)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            var connector = await m_ConnectorService.GetConnectorById(connectorId);
            if (null == connector)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            if (connector.DepartmentId != departmentId)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedRefresh);
                return OkWithMessage(response);
            }

            if (connector.DepartmentId != departmentId)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedRefresh);
                return OkWithMessage(response);
            }

            var bSuccess = await m_ConnectorService.RemoveConnectorDepartment(member, connector);
            if (!bSuccess)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }


            department = await m_DepartmentService.GetDepartmentByDepartmentId(departmentId);
            if (null == department)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            var connectors = await m_ConnectorService.GetDeadbeatConnectors();
            if (null == connectors)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.Department = department.ToMessage();
            response.ConnectorBases.AddRange(connectors.Select(x => x.ToMessageBase()));
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }
    }
}
