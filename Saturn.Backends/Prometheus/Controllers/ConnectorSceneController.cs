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
    [Route("connector/{connectorId}/scene")]
    public class ConnectorSceneController : AbstractBaseController
    {
        private readonly ILogger m_Logger = null;
        private readonly IConnectorService m_ConnectorService = null;

        private readonly IMemberService m_MemberService = null;
        private readonly IMemberRecordService m_MemberRecordService = null;

        private readonly ISceneService m_SceneService = null;

        public ConnectorSceneController(ILogger<ConnectorSceneController> logger, IConnectorService connectorService, IMemberRecordService memberRecordService, IMemberService memberService, ISceneService sceneService)
        {
            m_Logger = logger;
            m_ConnectorService = connectorService;
            m_MemberRecordService = memberRecordService;
            m_MemberService = memberService;
            m_SceneService = sceneService;
        }

        [HttpPut("{sceneId}")]
        public async Task<IActionResult> PutConnectorScene([FromRoute] long connectorId, [FromRoute] long sceneId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var memberId = User.MemberId();
            var member = await m_MemberService.GetMemberById(memberId);
            if (null == member)
            {
                return BadRequest();
            }

            var response = new Saturn.Backends.Protocols.Prometheus.PutConnectorSceneResponse();

            // Get connector from database
            var connector = await m_ConnectorService.GetConnectorById(connectorId);
            if (null == connector)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedRefresh);
                return OkWithMessage(response);
            }

            var scene = await m_SceneService.GetSceneBySceneId(sceneId);
            if (null == scene)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedRefresh);
                return OkWithMessage(response);
            }

            bool bUpdated = await m_ConnectorService.AddConnectorScene(member, connector, scene);
            if (!bUpdated)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            // insert member record
            response.Scene = scene.ToMessage();
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteConnectorScene([FromRoute] long connectorId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var memberId = User.MemberId();
            var member = await m_MemberService.GetMemberById(memberId);
            if (null == member)
            {
                return BadRequest();
            }


            var response = new Saturn.Backends.Protocols.Prometheus.DeleteConnectorSceneResponse();

            // Get connector from database
            var connector = await m_ConnectorService.GetConnectorById(connectorId);
            if (null == connector)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedRefresh);
                return OkWithMessage(response);
            }

            bool bUpdated = await m_ConnectorService.RemoveConnectorScene(member, connector);
            if (!bUpdated)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            // insert member record
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [HttpPut("{sceneId}/emergency")]
        public async Task<IActionResult> PutConnectorEmergency([FromRoute] long connectorId, [FromRoute] long sceneId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var memberId = User.MemberId();
            var member = await m_MemberService.GetMemberById(memberId);
            if (null == member)
            {
                return BadRequest();
            }

            var response = new Saturn.Backends.Protocols.Prometheus.PutConnectorSceneEmergencyResponse();

            // Get connector from database
            var connector = await m_ConnectorService.GetConnectorById(connectorId);
            if (null == connector)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedRefresh);
                return OkWithMessage(response);
            }

            var scene = await m_SceneService.GetSceneBySceneId(sceneId);
            if (null == scene)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedRefresh);
                return OkWithMessage(response);
            }

            bool bUpdated = await m_ConnectorService.AddConnectorEmergencyScene(member, connector, scene);
            if (!bUpdated)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            // insert member record
            response.Scene = scene.ToMessage();
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [HttpDelete("emergency")]
        public async Task<IActionResult> DeleteConnectorEmergencyScene([FromRoute] long connectorId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var memberId = User.MemberId();
            var member = await m_MemberService.GetMemberById(memberId);
            if (null == member)
            {
                return BadRequest();
            }


            var response = new Saturn.Backends.Protocols.Prometheus.DeleteConnectorSceneResponse();

            // Get connector from database
            var connector = await m_ConnectorService.GetConnectorById(connectorId);
            if (null == connector)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedRefresh);
                return OkWithMessage(response);
            }

            bool bUpdated = await m_ConnectorService.RemoveConnectorEmergencyScene(member, connector);
            if (!bUpdated)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            // insert member record
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

    }
}
