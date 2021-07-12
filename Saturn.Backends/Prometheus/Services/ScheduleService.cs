using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Saturn.Backends.Commons;
using System.Security.Cryptography;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.EntityFrameworkCore;
using Prometheus.Models.Databases;
using System.Linq;

namespace Prometheus.Services
{
    public interface IScheduleService
    {
        // about schedule
        Task<PaginatedList<Models.Databases.Schedule>> GetSchedules(int from, int size);
        Task<Models.Databases.Schedule> GetScheduleById(long scheduleId);
        Task<Models.Databases.Schedule> GetScheduleByName(string name);
        Task<Models.Databases.Schedule> CreateSchedule(Models.Databases.Member member, Models.Databases.Schedule schedule);
        Task<bool> UpdateSchedule(Models.Databases.Member member, Models.Databases.Schedule schedule);
        Task<bool> DeleteSchedule(Models.Databases.Member member, Models.Databases.Schedule schedule);

        Task<List<Models.Databases.ScheduleScene>> GetScheduleScenesByScheduleId(long scheduleId);

        // about scene schedule
        Task<PaginatedList<Models.Databases.ScheduleScene>> GetScheduleScenes(int from, int size);
        Task<Models.Databases.ScheduleScene> GetScheduleSceneById(long ScheduleSceneId);
        Task<Models.Databases.ScheduleScene> GetScheduleSceneByName(string name);
        Task<Models.Databases.ScheduleScene> CreateScheduleScene(Models.Databases.Member member, Models.Databases.ScheduleScene ScheduleScene);
        Task<bool> UpdateScheduleScene(Models.Databases.Member member, Models.Databases.ScheduleScene ScheduleScene);
        Task<bool> DeleteScheduleScene(Models.Databases.Member member, Models.Databases.ScheduleScene ScheduleScene);
    }

    public class ScheduleService : IScheduleService
    {
        private readonly ILogger m_Logger = null;
        private readonly Prometheus.Databases.Repositories.IConnectorRepository m_Connectors = null;
        private readonly Prometheus.Databases.Repositories.IScheduleRepository m_Schedules = null;
        private readonly Prometheus.Databases.Repositories.IScheduleSceneRepository m_ScheduleScenes = null;
        private readonly Prometheus.Databases.Repositories.IConnectorScheduleSceneRepository m_ConnectorScheduleScenes = null;

        private readonly Prometheus.Services.IMemberRecordService m_MemberRecordService = null;
        public ScheduleService(
            ILogger<ScheduleService> logger,
            Prometheus.Databases.Repositories.IConnectorRepository connectors,
            Prometheus.Databases.Repositories.IScheduleRepository schedules,
            Prometheus.Databases.Repositories.IScheduleSceneRepository ScheduleScenes,
            Prometheus.Databases.Repositories.IConnectorScheduleSceneRepository connectorScheduleScenes,
            Prometheus.Services.IMemberRecordService memberRecordService)
        {
            m_Logger = logger;
            m_Connectors = connectors;
            m_Schedules = schedules;
            m_ScheduleScenes = ScheduleScenes;
            m_ConnectorScheduleScenes = connectorScheduleScenes;
            m_MemberRecordService = memberRecordService;
        }

        public async Task<PaginatedList<Models.Databases.Schedule>> GetSchedules(int from, int size)
        {
            return await PaginatedList<Models.Databases.Schedule>.CreateAsync(m_Schedules.Table.OrderByDescending(x => x.UpdateSeconds), from, size);
        }

        public async Task<Models.Databases.Schedule> GetScheduleById(long scheduleId)
        {
            return await m_Schedules.Select(scheduleId);
        }

        public async Task<Models.Databases.Schedule> GetScheduleByName(string name)
        {
            return await m_Schedules.SelectByName(name);
        }

        public async Task<Models.Databases.Schedule> CreateSchedule(Models.Databases.Member member, Models.Databases.Schedule schedule)
        {
            var execution = m_Schedules.GetExecution();
            bool bSuccess = await execution.ExecuteAsync(async () =>
            {
                using (var tran = await m_Schedules.BeginTransaction())
                {
                    try
                    {
                        schedule.CreatedSeconds = schedule.UpdateSeconds = DateTimeOffset.Now.ToUnixTimeSeconds();
                        schedule.UpdateSeconds = schedule.CreatedSeconds;

                        // insert schedule table
                        schedule = await m_Schedules.Insert(schedule);
                        if (null == schedule)
                        {
                            m_Logger.LogCritical("Schedule Insert Failed.");

                            await tran.RollbackAsync();
                            return false;
                        }

                        // insert member record 
                        var memberRecordBlueprint = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint();

                        var scheduleRecord = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint.Types.MemberScheduleRecord();
                        scheduleRecord.ScheduleId = schedule.Id;
                        scheduleRecord.ScheduleName = schedule.Name;
                        memberRecordBlueprint.ScheduleReocrd = scheduleRecord;
                        memberRecordBlueprint.Kind = Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.ScheduleCreated;

                        if (null == await m_MemberRecordService.Insert(member, memberRecordBlueprint))
                        {
                            await tran.RollbackAsync();
                            return false;
                        }

                        await tran.CommitAsync();
                    }
                    catch (System.Exception ex)
                    {

                        m_Logger.LogCritical($"Schedule Insert Failed. Exception : {ex}");

                        await tran.RollbackAsync();

                        return false;
                    }
                }

                return true;
            });

            return bSuccess ? schedule : null;
        }

        public async Task<bool> UpdateSchedule(Models.Databases.Member member, Models.Databases.Schedule schedule)
        {
            var execution = m_Schedules.GetExecution();
            return await execution.ExecuteAsync(async () =>
            {
                using (var tran = await m_Schedules.BeginTransaction())
                {
                    try
                    {
                        schedule.UpdateSeconds = DateTimeOffset.Now.ToUnixTimeSeconds();

                        // insert schedule table
                        bool bSuccess = await m_Schedules.Update(schedule);
                        if (null == schedule)
                        {
                            m_Logger.LogCritical($"Schedule Updated Failed., Schedule Id : {schedule.Id}");

                            await tran.RollbackAsync();

                            return false;
                        }

                        // insert member record 
                        var memberRecordBlueprint = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint();

                        var scheduleRecord = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint.Types.MemberScheduleRecord();
                        scheduleRecord.ScheduleId = schedule.Id;
                        scheduleRecord.ScheduleName = schedule.Name;
                        memberRecordBlueprint.ScheduleReocrd = scheduleRecord;
                        memberRecordBlueprint.Kind = Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.ScheduleUpdated;

                        if (null == await m_MemberRecordService.Insert(member, memberRecordBlueprint))
                        {
                            await tran.RollbackAsync();
                            return false;
                        }

                        await tran.CommitAsync();
                    }
                    catch (System.Exception ex)
                    {

                        m_Logger.LogCritical($"Schedule Update Failed. Exception : {ex}");

                        await tran.RollbackAsync();

                        return false;
                    }
                }

                return true;
            });
        }

        public async Task<bool> DeleteSchedule(Models.Databases.Member member, Models.Databases.Schedule schedule)
        {
            var execution = m_Schedules.GetExecution();
            return await execution.ExecuteAsync(async () =>
            {
                using (var tran = await m_Schedules.BeginTransaction())
                {
                    try
                    {
                        // insert schedule table
                        bool bSuccess = await m_Schedules.Delete(schedule);
                        if (null == schedule)
                        {
                            m_Logger.LogCritical($"Schedule Delete Failed., Schedule Id : {schedule.Id}");

                            await tran.RollbackAsync();

                            return false;
                        }

                        // insert member record 
                        var memberRecordBlueprint = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint();

                        var scheduleRecord = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint.Types.MemberScheduleRecord();
                        scheduleRecord.ScheduleId = schedule.Id;
                        scheduleRecord.ScheduleName = schedule.Name;
                        memberRecordBlueprint.ScheduleReocrd = scheduleRecord;
                        memberRecordBlueprint.Kind = Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.ScheduleUpdated;

                        if (null == await m_MemberRecordService.Insert(member, memberRecordBlueprint))
                        {
                            await tran.RollbackAsync();
                            return false;
                        }

                        await tran.CommitAsync();
                    }
                    catch (System.Exception ex)
                    {

                        m_Logger.LogCritical($"Schedule Delete Failed. Exception : {ex}");

                        await tran.RollbackAsync();

                        return false;
                    }
                }

                return true;
            });
        }

        public async Task<PaginatedList<Models.Databases.ScheduleScene>> GetScheduleScenes(int from, int size)
        {
            return await PaginatedList<Models.Databases.ScheduleScene>.CreateAsync(
                m_ScheduleScenes.Table
                    .Include(x => x.Schedule)
                    .Include(x => x.Scene)
                        .ThenInclude(x => x.Resource)
                        .ThenInclude(x => x.PreviewResource).OrderByDescending(x => x.UpdatedSceonds)
                    , from, size);
        }

        public async Task<Models.Databases.ScheduleScene> GetScheduleSceneById(long ScheduleSceneId)
        {
            return await m_ScheduleScenes.Select(ScheduleSceneId);
        }

        public async Task<ScheduleScene> GetScheduleSceneByName(string name)
        {
            return await m_ScheduleScenes.SelectByName(name);
        }

        public async Task<Models.Databases.ScheduleScene> CreateScheduleScene(Models.Databases.Member member, Models.Databases.ScheduleScene scheduleScene)
        {
            var execution = m_ScheduleScenes.GetExecution();

            bool bSuccess = await execution.ExecuteAsync(async () =>
            {
                using (var tran = await m_ScheduleScenes.BeginTransaction())
                {
                    try
                    {
                        scheduleScene = await m_ScheduleScenes.Insert(scheduleScene);
                        if (null == scheduleScene)
                        {
                            await tran.RollbackAsync();

                            return false;
                        }

                        // insert member record 
                        var memberRecordBlueprint = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint();

                        var scheduleSceneRecord = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint.Types.MemberScheduleSceneRecord();
                        scheduleSceneRecord.ScheduleSceneId = scheduleScene.Id;
                        scheduleSceneRecord.ScheduleSceneName = scheduleScene.Name;
                        memberRecordBlueprint.ScheduleSceneRecord = scheduleSceneRecord;
                        memberRecordBlueprint.Kind = Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.ScheduleSceneCreated;

                        if (null == await m_MemberRecordService.Insert(member, memberRecordBlueprint))
                        {
                            await tran.RollbackAsync();
                            return false;
                        }

                        await tran.CommitAsync();
                    }
                    catch (System.Exception)
                    {
                        await tran.RollbackAsync();

                        return false;
                    }
                }

                return true;
            });

            return bSuccess ? scheduleScene : null;
        }

        public async Task<bool> UpdateScheduleScene(Models.Databases.Member member, ScheduleScene scheduleScene)
        {
            var execution = m_ScheduleScenes.GetExecution();
            return await execution.ExecuteAsync(async () =>
            {
                using (var tran = await m_ScheduleScenes.BeginTransaction())
                {
                    try
                    {
                        // insert schedule table
                        bool bSuccess = await m_ScheduleScenes.Update(scheduleScene);
                        if (!bSuccess)
                        {
                            m_Logger.LogCritical($"ScheduleScene Updated Failed., ScheduleSceneId : {scheduleScene.Id}");

                            await tran.RollbackAsync();

                            return false;
                        }

                        // insert member record 
                        var memberRecordBlueprint = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint();

                        var scheduleSceneRecord = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint.Types.MemberScheduleSceneRecord();
                        scheduleSceneRecord.ScheduleSceneId = scheduleScene.Id;
                        scheduleSceneRecord.ScheduleSceneName = scheduleScene.Name;
                        memberRecordBlueprint.ScheduleSceneRecord = scheduleSceneRecord;
                        memberRecordBlueprint.Kind = Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.ScheduleSceneUpdated;

                        if (null == await m_MemberRecordService.Insert(member, memberRecordBlueprint))
                        {
                            await tran.RollbackAsync();
                            return false;
                        }

                        await tran.CommitAsync();
                    }
                    catch (System.Exception ex)
                    {

                        m_Logger.LogCritical($"Schedule Delete Failed. Exception : {ex}");

                        await tran.RollbackAsync();

                        return false;
                    }
                }

                return true;
            });
        }

        public async Task<bool> DeleteScheduleScene(Models.Databases.Member member, ScheduleScene scheduleScene)
        {
            var execution = m_ScheduleScenes.GetExecution();
            return await execution.ExecuteAsync(async () =>
            {
                using (var tran = await m_ScheduleScenes.BeginTransaction())
                {
                    try
                    {
                        // insert schedule table
                        bool bSuccess = await m_ScheduleScenes.Delete(scheduleScene);
                        if (null == scheduleScene)
                        {
                            m_Logger.LogCritical($"ScheduleScene Delete Failed., ScheduleSceneId : {scheduleScene.Id}");

                            await tran.RollbackAsync();

                            return false;
                        }

                        // insert member record 
                        var memberRecordBlueprint = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint();

                        var scheduleSceneRecord = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint.Types.MemberScheduleSceneRecord();
                        scheduleSceneRecord.ScheduleSceneId = scheduleScene.Id;
                        scheduleSceneRecord.ScheduleSceneName = scheduleScene.Name;
                        memberRecordBlueprint.ScheduleSceneRecord = scheduleSceneRecord;
                        memberRecordBlueprint.Kind = Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.ScheduleSceneUpdated;

                        if (null == await m_MemberRecordService.Insert(member, memberRecordBlueprint))
                        {
                            await tran.RollbackAsync();
                            return false;
                        }

                        await tran.CommitAsync();
                    }
                    catch (System.Exception ex)
                    {

                        m_Logger.LogCritical($"Schedule Delete Failed. Exception : {ex}");

                        await tran.RollbackAsync();

                        return false;
                    }
                }

                return true;
            });
        }

        public async Task<List<ScheduleScene>> GetScheduleScenesByScheduleId(long scheduleId)
        {
            return await m_ScheduleScenes.SelectByScheduleId(scheduleId);
        }
    }
}