using System;
using System.Collections.Generic;
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
    [Route("connector/{connectorId}/schedule")]
    public class ConnectorScheduleController : AbstractBaseController
    {
        private readonly ILogger m_Logger = null;
        private readonly IConnectorService m_ConnectorService = null;
        private readonly IMemberService m_Members = null;
        private readonly IMemberRecordService m_MemberRecordService = null;

        private readonly IScheduleService m_ScheduleService = null;
        private readonly ISceneService m_SceneService = null;

        public ConnectorScheduleController(ILogger<ConnectorScheduleController> logger, IConnectorService connectorService, IMemberRecordService memberRecordService, IMemberService memberService, IScheduleService scheduleService, ISceneService sceneService)
        {
            m_Logger = logger;
            m_ConnectorService = connectorService;
            m_MemberRecordService = memberRecordService;
            m_Members = memberService;
            m_ScheduleService = scheduleService;
            m_SceneService = sceneService;
        }

        [HttpDelete("{connectorScheduleId}")]
        public async Task<IActionResult> DeleteConnectorSchedule([FromRoute] long connectorId, [FromRoute] long connectorScheduleId)
        {
            var isValid = ModelState.IsValid;
            if (!isValid)
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

            var response = new Saturn.Backends.Protocols.Prometheus.DeleteConnectorScheduleResponse();

            // check connector
            var connector = await m_ConnectorService.GetConnectorById(connectorId);
            if (null == connector)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            var connectorSchedule = connector.Schedules.FirstOrDefault(x => x.Id == connectorScheduleId);
            if (null == connectorSchedule)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            // insert database 
            bool bDeleted = await m_ConnectorService.DeleteConnectorSchedule(member, connector, connectorSchedule);
            if (!bDeleted)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }


        [HttpPost]
        public async Task<IActionResult> CreateConnectorSchedule([FromRoute] long connectorId, [FromBody] byte[] decoded)
        {
            var isValid = ModelState.IsValid;
            if (!isValid)
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

            var response = new Saturn.Backends.Protocols.Prometheus.PostConnectorScheduleResponse();

            Saturn.Backends.Protocols.Prometheus.PostConnectorScheduleRequest request = null;
            try
            {
                request = Saturn.Backends.Protocols.Prometheus.PostConnectorScheduleRequest.Parser.ParseFrom(decoded);
            }
            catch (System.Exception e)
            {
                m_Logger.LogCritical($"Protobuf, Message : Saturn.Backends.Protocols.Prometheus.PostConnectorScheduleRequest, Exception : {e}");

                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedProtobuf);
                return OkWithMessage(response);
            }

            // check connector 
            var connector = await m_ConnectorService.GetConnectorById(connectorId);
            if (null == connector)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            // check scheduleScene
            var scheduleScene = await m_ScheduleService.GetScheduleSceneById(request.ScheduleSceneId);
            if (null == scheduleScene)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            // 이미 디바이스에 추가가 스케줄이 할당되어있는지 확인한다.
            var connectorScheduleScene = connector.Schedules.FirstOrDefault(x => x.ScheduleSceneId == scheduleScene.Id);
            if (connectorScheduleScene != null)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.DbRestrict);
                return OkWithMessage(response);
            }

            // insert database 
            connectorScheduleScene = await m_ConnectorService.CreateConnectorSchedule(member, connector, scheduleScene);
            if (null == connectorScheduleScene)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.ConnectorScheduleScene = connectorScheduleScene.ToMessage();
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }
    }
}
