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
    [Route("schedule")]
    public class ScheduleController : AbstractBaseController
    {
        private readonly ILogger m_Logger = null;
        private readonly IMemberService m_Members = null;
        private readonly IScheduleService m_Schedules = null;
        private readonly ISceneService m_Scenes = null;

        public ScheduleController(ILogger<ScheduleController> logger, IMemberService members, IScheduleService schedules, ISceneService scenes)
        {
            m_Logger = logger;
            m_Members = members;
            m_Schedules = schedules;
            m_Scenes = scenes;
        }

        [HttpGet("{scheduleId}")]
        public async Task<IActionResult> GetSchedules([FromRoute] long scheduleId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var response = new Saturn.Backends.Protocols.Prometheus.GetScheduleByIdResponse();

            var schedule = await m_Schedules.GetScheduleById(scheduleId);
            if (null == schedule)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            response.Schedule = schedule.ToMessage();
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [HttpGet]
        public async Task<IActionResult> GetSchedules([FromQuery] int from = 0, [FromQuery] int size = 0)
        {
            var response = new Saturn.Backends.Protocols.Prometheus.GetScheduleResponse();

            var items = await m_Schedules.GetSchedules(from, size);
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
            response.Schedules.AddRange(items.Select(x => x.ToMessage()));
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [HttpPost("{scheduleId}/scene")]
        public async Task<IActionResult> CreateScheduleScene([FromRoute] long scheduleId, [FromBody] byte[] decoded)
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


            Saturn.Backends.Protocols.Prometheus.PostScheduleSceneRequest request = null;

            var response = new Saturn.Backends.Protocols.Prometheus.PostScheduleSceneResponse();
            try
            {
                request = Saturn.Backends.Protocols.Prometheus.PostScheduleSceneRequest.Parser.ParseFrom(decoded);
            }
            catch (System.Exception e)
            {
                m_Logger.LogCritical($"Protobuf, Message : Saturn.Backends.Protocols.Prometheus.PostScheduleSceneRequest, Exception : {e}");

                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedProtobuf);
                return OkWithMessage(response);
            }

            // get schedule
            var schedule = await m_Schedules.GetScheduleById(scheduleId);
            if (null == schedule)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            // check same scheduleScene name
            var scheduleScene = await m_Schedules.GetScheduleSceneByName(request.Name);
            if (null != scheduleScene)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDuplicated);
                return OkWithMessage(response);
            }

            // get scene 
            var scene = await m_Scenes.GetSceneBySceneId(request.SceneId);
            if (null == scene)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            // set current time to unixtime seconds 
            var current = DateTimeOffset.Now.ToUnixTimeSeconds();

            scheduleScene = new Models.Databases.ScheduleScene
            {
                Name = request.Name,
                Schedule = schedule,
                Scene = scene,
                CreatedSeconds = current,
                UpdatedSceonds = current
            };

            scheduleScene = await m_Schedules.CreateScheduleScene(member, scheduleScene);

            response.ScheduleScene = scheduleScene.ToMessage();
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [HttpPost]
        public async Task<IActionResult> CreateSchedule([FromBody] byte[] decoded)
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

            Saturn.Backends.Protocols.Prometheus.PostScheduleRequest request = null;

            var response = new Saturn.Backends.Protocols.Prometheus.PostScheduleResponse();
            try
            {
                request = Saturn.Backends.Protocols.Prometheus.PostScheduleRequest.Parser.ParseFrom(decoded);
            }
            catch (System.Exception e)
            {
                m_Logger.LogCritical($"Protobuf, Message : Saturn.Backends.Protocols.Prometheus.PostScheduleRequest, Exception : {e}");

                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedProtobuf);
                return OkWithMessage(response);
            }

            // check same schedule name
            var schedule = await m_Schedules.GetScheduleByName(request.Schedule.Name);
            if (null != schedule)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDuplicated);
                return OkWithMessage(response);
            }

            // generate database model
            schedule = schedule.FromMessage(request.Schedule);

            // create schedule
            schedule = await m_Schedules.CreateSchedule(member, schedule);
            if (null == schedule)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.Schedule = schedule.ToMessage();
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [HttpPut("{scheduleId}")]
        public async Task<IActionResult> UpdateSchedule([FromRoute] long scheduleId, [FromBody] byte[] decoded)
        {
            if (0 >= scheduleId)
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

            Saturn.Backends.Protocols.Prometheus.PutScheduleRequest request = null;

            var response = new Saturn.Backends.Protocols.Prometheus.PutScheduleResponse();
            try
            {
                request = Saturn.Backends.Protocols.Prometheus.PutScheduleRequest.Parser.ParseFrom(decoded);
            }
            catch (System.Exception e)
            {
                m_Logger.LogCritical($"Protobuf, Message : Saturn.Backends.Protocols.Prometheus.PutScheduleResponse, Exception : {e}");

                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedProtobuf);
                return OkWithMessage(response);
            }
            var schedule = await m_Schedules.GetScheduleById(scheduleId);
            if (null == schedule)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            // generate model
            schedule = schedule.FromMessage(request.Schedule);

            // check same schedule name
            var otherSchedule = await m_Schedules.GetScheduleByName(schedule.Name);
            if (null != otherSchedule && schedule.Id != otherSchedule.Id)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDuplicated);
                return OkWithMessage(response);
            }

            // update schedule
            var bSuccess = await m_Schedules.UpdateSchedule(member, schedule);
            if (!bSuccess)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.Schedule = schedule.ToMessage();
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [HttpDelete("{scheduleId}")]
        public async Task<IActionResult> RemoveSchedule([FromRoute] long scheduleId)
        {
            if (0 >= scheduleId)
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

            var schedule = await m_Schedules.GetScheduleById(scheduleId);
            if (null == schedule)
            {
                return BadRequest();
            }

            var response = new Saturn.Backends.Protocols.Prometheus.DeleteScheduleResponse();
            var scheduleScenes = await m_Schedules.GetScheduleScenesByScheduleId(scheduleId);
            if (null == scheduleScenes)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            if (0 < scheduleScenes.Count)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.DbRestrict);
                return OkWithMessage(response);
            }

            // create schedule
            var bSuccess = await m_Schedules.DeleteSchedule(member, schedule);
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
