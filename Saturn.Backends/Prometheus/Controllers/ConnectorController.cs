using System;
using System.Linq;
using System.Threading.Tasks;
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
    public class ConnectorController : AbstractBaseController
    {
        private readonly ILogger m_Logger = null;
        private readonly IConnectorService m_ConnectorService = null;

        private readonly IMemberService m_Members = null;
        private readonly IMemberRecordService m_MemberRecordService = null;

        private readonly IResourceService m_Resources = null;

        private readonly ISceneService m_SceneService = null;

        public ConnectorController(ILogger<ConnectorController> logger, IConnectorService connectorService, IMemberRecordService memberRecordService, IMemberService memberService, IResourceService resources, ISceneService sceneService)
        {
            m_Logger = logger;
            m_ConnectorService = connectorService;
            m_MemberRecordService = memberRecordService;
            m_Members = memberService;
            m_SceneService = sceneService;

            m_Resources = resources;
        }

        [HttpGet]
        public async Task<IActionResult> GetConnectors()
        {
            var response = new Saturn.Backends.Protocols.Prometheus.GetConnectorsResponse();
            var connectors = await m_ConnectorService.GetConnectors();
            if (null == connectors)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            if (connectors.Count <= 0)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }
            response.ConnectorBases.AddRange(connectors.Select(x => x.ToMessageBase()));
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [HttpPut("{connectorId}/name")]
        public async Task<IActionResult> PutConnectorName([FromRoute] long connectorId, [FromBody] byte[] decoded)
        {
            if (!ModelState.IsValid || connectorId <= 0)
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

            Saturn.Backends.Protocols.Prometheus.PutConnectorNameRequest request = null;

            var response = new Saturn.Backends.Protocols.Prometheus.PutConnectorNameResponse();
            try
            {
                request = Saturn.Backends.Protocols.Prometheus.PutConnectorNameRequest.Parser.ParseFrom(decoded);
            }
            catch (System.Exception e)
            {
                m_Logger.LogCritical($"Protobuf, Message : Saturn.Backends.Protocols.Prometheus.PutConnectorNameRequest, Exception : {e}");

                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedProtobuf);
                return OkWithMessage(response);
            }

            // Get connector from database
            var connector = await m_ConnectorService.GetConnectorByName(request.Name);
            if (null != connector)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDuplicated);
                return OkWithMessage(response);
            }

            connector = await m_ConnectorService.GetConnectorById(connectorId);
            if (null == connector)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            // change name 
            connector.Name = request.Name;

            // request connector update to database
            bool bUpdated = await m_ConnectorService.UpdateConnector(member, connector);
            if (!bUpdated)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.Connector = connector.ToMessage();
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [HttpPut("{connectorId}")]
        public async Task<IActionResult> PutConnector([FromRoute] long connectorId, [FromBody] byte[] decoded)
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

            Saturn.Backends.Protocols.Prometheus.PutConnectorRequest request = null;

            var response = new Saturn.Backends.Protocols.Prometheus.PutConnectorResponse();
            try
            {
                request = Saturn.Backends.Protocols.Prometheus.PutConnectorRequest.Parser.ParseFrom(decoded);
            }
            catch (System.Exception e)
            {
                m_Logger.LogCritical($"Protobuf, Message : Saturn.Backends.Protocols.Prometheus.PutConnectorRequest, Exception : {e}");

                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedProtobuf);
                return OkWithMessage(response);
            }


            switch (request.Kind)
            {
                case Saturn.Backends.Protocols.Common.CONNECTOR_REGISTER_KIND.Comfirm:
                case Saturn.Backends.Protocols.Common.CONNECTOR_REGISTER_KIND.Deny:
                    break;
                default:
                    return BadRequest();
            }

            // Get connector from database
            var connector = await m_ConnectorService.GetConnectorById(connectorId);
            if (null == connector)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            // Compare connector kind to request kind
            if (connector.Kind == request.Kind)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedRefresh);
                return OkWithMessage(response);
            }

            // change kind 
            connector.Kind = request.Kind;

            // connector update
            bool bUpdated = await m_ConnectorService.UpdateConnector(member, connector);
            if (!bUpdated)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.Connector = connector.ToMessage();
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteConnector([FromQuery] long id)
        {
            var connectorId = id;
            if (0 >= connectorId)
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

            var response = new Saturn.Backends.Protocols.Prometheus.DeleteConnectorResponse();

            // Get connector from database
            var connector = await m_ConnectorService.GetConnectorById(connectorId);
            if (null == connector)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            // Delete connector from database
            var bDeleted = await m_ConnectorService.RemoveConnector(member, connector);
            if (!bDeleted)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }


        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetConnector([FromRoute] long id, [FromQuery] string device)
        {
            var response = new Saturn.Backends.Protocols.Prometheus.GetConnectorResponse();
            Models.Databases.Connector connector = null;
            if (device?.Length > 0)
            {
                connector = await m_ConnectorService.GetConnectorByDeviceId(device);
            }
            else
            {
                connector = await m_ConnectorService.GetConnectorById(id);
            }

            if (connector == null)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            response.Connector = connector.ToMessage();
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [AllowAnonymous]
        [HttpPost("{connectorId}"), DisableRequestSizeLimit]
        public async Task<IActionResult> UploadCapture([FromRoute] long connectorId, [FromQuery] string deviceId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            // 승인 안된 디바이스 접속 시 어떻게 할지..
            var response = new Saturn.Backends.Protocols.Prometheus.PostConnectorByIdResponse();
            var file = Request.Form?.Files.FirstOrDefault();
            if (null == file)
            {
                return BadRequest();
            }

            var connector = await m_ConnectorService.GetConnectorById(connectorId);
            if (null == connector)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            deviceId = connector.DeviceId;

            var resource = await m_Resources.MakeConnectorCaptureByFormFile(file, deviceId);
            if (null == resource)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            connector.LastUpdatedSeconds = DateTimeOffset.Now.ToUnixTimeSeconds();
            connector.ResourceId = resource.Id;

            bool bSuccess = await m_ConnectorService.UpdateConnectorByConnector(connector);
            if (!bSuccess)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.Connector = connector.ToMessage();
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> CreateConnector([FromBody] byte[] decoded)
        {
            var response = new Saturn.Backends.Protocols.Prometheus.PostConnectorResponse();

            Saturn.Backends.Protocols.Prometheus.PostConnectorRequest request = null;
            try
            {
                request = Saturn.Backends.Protocols.Prometheus.PostConnectorRequest.Parser.ParseFrom(decoded);
            }
            catch (System.Exception e)
            {
                m_Logger.LogCritical($"Protobuf, Message : Saturn.Backends.Protocols.Prometheus.PostConnectorRequest, Exception : {e}");

                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedProtobuf);
                return OkWithMessage(response);
            }

            // check name
            var connector = await m_ConnectorService.GetConnectorByName(request.Name);
            if (null != connector)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
                response.Kind = Saturn.Backends.Protocols.Prometheus.PostConnectorResponse.Types.POST_KIND.DuplicatedName;
                return OkWithMessage(response);
            }

            // check device
            connector = await m_ConnectorService.GetConnectorByDeviceId(request.DeviceId);
            if (null != connector)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
                response.Kind = Saturn.Backends.Protocols.Prometheus.PostConnectorResponse.Types.POST_KIND.DuplicatedDevice;
                return OkWithMessage(response);
            }

            connector = await m_ConnectorService.CreateConnector(request.Name, request.DeviceId);
            if (null == connector)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.Kind = Saturn.Backends.Protocols.Prometheus.PostConnectorResponse.Types.POST_KIND.Created;
            response.Connector = connector.ToMessage();
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }


    }
}
