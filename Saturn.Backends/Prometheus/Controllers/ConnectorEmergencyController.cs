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
    [Route("connector/{connectorId}/emergency")]
    public class ConnectorEmergencyController : AbstractBaseController
    {
        private readonly ILogger m_Logger = null;
        private readonly IConnectorService m_ConnectorService = null;

        private readonly IMemberService m_Members = null;
        private readonly IMemberRecordService m_MemberRecordService = null;

        private readonly ISceneService m_Scenes = null;

        public ConnectorEmergencyController(ILogger<ConnectorSceneController> logger, IConnectorService connectorService, IMemberRecordService memberRecordService, IMemberService memberService, ISceneService sceneService)
        {
            m_Logger = logger;
            m_ConnectorService = connectorService;
            m_MemberRecordService = memberRecordService;
            m_Members = memberService;
            m_Scenes = sceneService;
        }

        [HttpPut("{sceneId}")]
        public async Task<IActionResult> UpdateEmergencyScene([FromRoute] long connectorId, [FromRoute] long sceneId, [FromBody] byte[] decoded)
        {
            if (!ModelState.IsValid || 0 >= connectorId)
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

            var response = new Saturn.Backends.Protocols.Prometheus.PutConnectorEmergencySceneResponse();
            Saturn.Backends.Protocols.Prometheus.PutConnectorEmergencySceneRequest request = null;
            try
            {
                request = Saturn.Backends.Protocols.Prometheus.PutConnectorEmergencySceneRequest.Parser.ParseFrom(decoded);
            }
            catch (System.Exception e)
            {
                m_Logger.LogCritical($"Protobuf, Message : Saturn.Backends.Protocols.Prometheus.PutConnectorEmergencySceneRequest, Exception : {e}");

                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedProtobuf);
                return OkWithMessage(response);
            }

            // check member base permission
            if (!member.IsAdministrator() && !member.HavePermission(Saturn.Backends.Protocols.Common.MEMBER_PERMISSION_KIND.ConnectUpdate))
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedPermission);
                return OkWithMessage(response);
            }

            // find connector 
            var connector = await m_ConnectorService.GetConnectorBaseById(connectorId);
            if (null == connector)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            // find scene 
            var scene = await m_Scenes.GetSceneBySceneId(request.SceneId);
            if (null == scene)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            if (connector.Kind != Saturn.Backends.Protocols.Common.CONNECTOR_REGISTER_KIND.Comfirm)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            if (request.IsEmergency != connector.IsEmergency)
            {
                var bSuccess = await m_ConnectorService.UpdateConnectorEmergencyScene(member, connector, scene, request.IsEmergency);
                if (!bSuccess)
                {
                    response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                    return OkWithMessage(response);
                }
            }
            else
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDuplicated);
                return OkWithMessage(response);
            }

            response.ConnectorBase = connector.ToMessageBase();
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateEmergency([FromRoute] long connectorId, [FromBody] byte[] decoded)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var memberId = User.MemberId();
            var member = await m_Members.GetMemberById(memberId);
            if (null == member)
            {
                return BadRequest();
            }

            var response = new Saturn.Backends.Protocols.Prometheus.PutConnectorEmergencyResponse();

            Saturn.Backends.Protocols.Prometheus.PutConnectorEmergencyRequest request = null;
            try
            {
                request = Saturn.Backends.Protocols.Prometheus.PutConnectorEmergencyRequest.Parser.ParseFrom(decoded);
            }
            catch (System.Exception e)
            {
                m_Logger.LogCritical($"Protobuf, Message : Saturn.Backends.Protocols.Prometheus.PutConnectorEmergencyRequest, Exception : {e}");

                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedProtobuf);
                return OkWithMessage(response);
            }

            // Get connector from database
            var connector = await m_ConnectorService.GetConnectorById(connectorId);
            if (null == connector)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedRefresh);
                return OkWithMessage(response);
            }

            if (connector.Kind != Saturn.Backends.Protocols.Common.CONNECTOR_REGISTER_KIND.Comfirm)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            if (connector.IsEmergency != request.IsEmergency)
            {
                bool bUpdated = await m_ConnectorService.UpdateConnectorEmergency(member, connector, request.IsEmergency);
                if (!bUpdated)
                {
                    response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                    return OkWithMessage(response);
                }
            }

            // insert member record
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }
    }
}
