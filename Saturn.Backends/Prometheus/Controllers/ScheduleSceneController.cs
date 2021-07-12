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
    [Route("schedule/scene")]
    public class ScheduleSceneController : AbstractBaseController
    {
        private readonly ILogger m_Logger = null;
        private readonly IMemberService m_Members = null;
        private readonly IScheduleService m_Schedules = null;
        private readonly ISceneService m_Scenes = null;

        private readonly IConnectorService m_Connectors = null;

        public ScheduleSceneController(ILogger<ScheduleSceneController> logger, IMemberService members, IScheduleService schedules, ISceneService scenes, IConnectorService connectors)
        {
            m_Logger = logger;
            m_Members = members;
            m_Schedules = schedules;
            m_Scenes = scenes;
            m_Connectors = connectors;
        }

        // POST는 schedule에 종속되어 있기 때문에 schedule/{scheduleId}/scene에서 적용한다.

        [HttpGet("{scheduleSceneId}")]
        public async Task<IActionResult> GetScheduleScenes([FromRoute] long scheduleSceneId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var response = new Saturn.Backends.Protocols.Prometheus.GetScheduleSceneByIdResponse();

            var scheduleScene = await m_Schedules.GetScheduleSceneById(scheduleSceneId);
            if (null == scheduleScene)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            response.ScheduleScene = scheduleScene.ToMessage();
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [HttpGet]
        public async Task<IActionResult> GetScheduleScenes([FromQuery] int from = 0, [FromQuery] int size = 0)
        {
            var response = new Saturn.Backends.Protocols.Prometheus.GetScheduleSceneResponse();

            var items = await m_Schedules.GetScheduleScenes(from, size);
            if (null == items)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            if (0 >= items.Count)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            response.Paginator = items.ToMessage();
            response.ScheduleScenes.AddRange(items.Select(x => x.ToMessage()));
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }


        [HttpPut("{scheduleSceneId}")]
        public async Task<IActionResult> UpdateScheduleScene([FromRoute] long scheduleSceneId, [FromBody] byte[] decoded)
        {
            if (0 >= scheduleSceneId)
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


            // get request schedule scene by Id
            var scheduleScene = await m_Schedules.GetScheduleSceneById(scheduleSceneId);
            if (null == scheduleScene)
            {
                return BadRequest();
            }

            Saturn.Backends.Protocols.Prometheus.PutScheduleSceneRequest request = null;

            var response = new Saturn.Backends.Protocols.Prometheus.PutScheduleSceneResponse();
            try
            {
                request = Saturn.Backends.Protocols.Prometheus.PutScheduleSceneRequest.Parser.ParseFrom(decoded);
            }
            catch (System.Exception e)
            {
                m_Logger.LogCritical($"Protobuf, Message : Saturn.Backends.Protocols.Prometheus.PutScheduleSceneRequest, Exception : {e}");

                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedProtobuf);
                return OkWithMessage(response);
            }

            // get scheduleScene exists name
            var existsScheduleScene = await m_Schedules.GetScheduleSceneByName(request.Name);
            if (null != existsScheduleScene)
            {
                if (existsScheduleScene.Id != scheduleSceneId)
                {
                    response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDuplicated);
                    return OkWithMessage(response);
                }
            }

            // get schedule
            var schedule = await m_Schedules.GetScheduleById(request.ScheduleId);
            if (null == schedule)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            // get scene
            var scene = await m_Scenes.GetSceneBySceneId(request.SceneId);
            if (null == schedule)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            // update schedule scene
            var current = DateTimeOffset.Now.ToUnixTimeSeconds();
            scheduleScene.Name = request.Name;
            scheduleScene.Schedule = schedule;
            scheduleScene.Scene = scene;

            var bSuccess = await m_Schedules.UpdateScheduleScene(member, scheduleScene);
            if (!bSuccess)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.ScheduleScene = scheduleScene.ToMessage();
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [HttpDelete("{scheduleSceneId}")]
        public async Task<IActionResult> RemoveScheduleScene([FromRoute] long scheduleSceneId)
        {
            if (0 >= scheduleSceneId)
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

            var response = new Saturn.Backends.Protocols.Prometheus.DeleteScheduleResponse();

            // TODO : check member permission
            if (!member.HavePermission(Saturn.Backends.Protocols.Common.MEMBER_PERMISSION_KIND.SceneDelete))
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedPermission);

                return OkWithMessage(response);
            }

            // get schedule scene
            var scheduleScene = await m_Schedules.GetScheduleSceneById(scheduleSceneId);
            if (null == scheduleScene)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            // 이미 연결이 되어 있는지 확인한다.
            bool bConnected = await m_Connectors.HasConnectorScheduleScenesByScheduleSceneId(scheduleScene.Id);
            if (bConnected)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.DbRestrict);
                return OkWithMessage(response);
            }

            // delete schedule scene
            var bSuccess = await m_Schedules.DeleteScheduleScene(member, scheduleScene);
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
