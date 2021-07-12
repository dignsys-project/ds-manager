using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Saturn.Backends.Commons;

namespace Prometheus.Services
{
    public interface IConnectorService
    {
        // 조직에 소속되어 있지 않은 디바이스들
        Task<List<Models.Databases.Connector>> GetDeadbeatConnectors();

        // 모든 디바이스들
        Task<List<Models.Databases.Connector>> GetConnectors();
        // Task<PaginatedList<Models.Databases.Connector>> GetConnectorV2(int from, int size);
        Task<List<Models.Databases.Connector>> GetConnectorsComfirmed();
        Task<Models.Databases.Connector> GetConnectorById(long connectorId);
        Task<Models.Databases.Connector> GetConnectorBaseById(long connectorId);

        Task<long> GetConnectorsCountByScene(Models.Databases.Scene scene);

        Task<Models.Databases.Connector> GetConnectorByDeviceId(string deviceId);
        Task<Models.Databases.Connector> GetConnectorByName(string name);

        Task<Models.Databases.Connector> CreateConnector(string name, string deviceId);

        Task<bool> UpdateConnectorByConnector(Models.Databases.Connector connector);
        Task<bool> UpdateConnector(Models.Databases.Member member, Models.Databases.Connector connector);
        Task<bool> UpdateConnectorEmergencyScene(Models.Databases.Member member, Models.Databases.Connector connector, Models.Databases.Scene scene, bool isEmergency);
        Task<bool> UpdateConnectorEmergency(Models.Databases.Member member, Models.Databases.Connector connector, bool isEmergency);
        Task<bool> RemoveConnector(Models.Databases.Member member, Models.Databases.Connector connector);

        Task<bool> AddConnectorDepartment(Models.Databases.Member member, Models.Databases.Connector connector, Models.Databases.Department department);
        Task<bool> RemoveConnectorDepartment(Models.Databases.Member member, Models.Databases.Connector connector);

        Task<bool> AddConnectorScene(Models.Databases.Member member, Models.Databases.Connector connector, Models.Databases.Scene scene);
        Task<bool> AddConnectorEmergencyScene(Models.Databases.Member member, Models.Databases.Connector connector, Models.Databases.Scene scene);
        Task<bool> RemoveConnectorScene(Models.Databases.Member member, Models.Databases.Connector connector);
        Task<bool> RemoveConnectorEmergencyScene(Models.Databases.Member member, Models.Databases.Connector connector);

        Task<bool> HasConnectorScheduleScenesByScheduleSceneId(long scheduleSceneId);

        Task<Models.Databases.ConnectorScheduleScene> CreateConnectorSchedule(Models.Databases.Member member, Models.Databases.Connector connector, Models.Databases.ScheduleScene scheduleScene);
        Task<bool> DeleteConnectorSchedule(Models.Databases.Member member, Models.Databases.Connector connector, Models.Databases.ConnectorScheduleScene connectorScheduleScene);
    }

    public class ConnectorService : IConnectorService
    {
        private readonly ILogger m_Logger = null;
        private readonly Prometheus.Databases.Repositories.IConnectorRepository m_Connectors = null;
        private readonly Prometheus.Databases.Repositories.IConnectorScheduleSceneRepository m_ConnectorScheduleScenes = null;
        private readonly IMemberRecordService m_MemberRecords = null;
        public ConnectorService(ILogger<ConnectorService> logger, IMemberRecordService memberRecordService, Prometheus.Databases.Repositories.IConnectorRepository connectors, Prometheus.Databases.Repositories.IConnectorScheduleSceneRepository connectorScheduleScenes)
        {
            m_Logger = logger;
            m_Connectors = connectors;
            m_ConnectorScheduleScenes = connectorScheduleScenes;
            m_MemberRecords = memberRecordService;
        }

        public async Task<long> GetConnectorsCountByScene(Models.Databases.Scene scene)
        {
            return await m_Connectors.Table.Where(x => x.SceneId == scene.Id).CountAsync();
        }

        public async Task<bool> HasConnectorScheduleScenesByScheduleSceneId(long scheduleSceneId)
        {
            var count = await m_ConnectorScheduleScenes.Table.Where(x => x.ScheduleSceneId == scheduleSceneId).CountAsync();

            return count > 0;
        }

        public async Task<bool> DeleteConnectorSchedule(Models.Databases.Member member, Models.Databases.Connector connector, Models.Databases.ConnectorScheduleScene connectorScheduleScene)
        {
            var execution = m_Connectors.GetExecution();
            bool bSuccess = await execution.ExecuteAsync(async () =>
            {
                using (var tran = await m_Connectors.BeginTransaction())
                {
                    try
                    {
                        // connector.Schedules.Remove()
                        if (!connector.Schedules.Remove(connectorScheduleScene))
                        {
                            await tran.RollbackAsync();

                            return false;
                        }

                        bool bDeleted = await m_ConnectorScheduleScenes.Delete(connectorScheduleScene);
                        if (!bDeleted)
                        {
                            await tran.RollbackAsync();

                            return false;
                        }

                        // insert member record 
                        var blueprintRecord = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint.Types.MemberConnectorScheduleRecord();
                        blueprintRecord.ConnectorId = connector.Id;
                        blueprintRecord.ConnectorName = connector.Name;
                        blueprintRecord.ConnectorScheduleSceneId = connectorScheduleScene.Id;
                        blueprintRecord.SceneScheduleName = connectorScheduleScene.ScheduleScene.Name;

                        var blueprint = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint();
                        blueprint.Kind = Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.ConnectorScheduleDeleted;
                        blueprint.ConnectorScheduleRecord = blueprintRecord;

                        if (null == await m_MemberRecords.Insert(member, blueprint))
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

            return bSuccess;
        }

        public async Task<Models.Databases.ConnectorScheduleScene> CreateConnectorSchedule(Models.Databases.Member member, Models.Databases.Connector connector, Models.Databases.ScheduleScene scheduleScene)
        {
            var execution = m_Connectors.GetExecution();
            return await execution.ExecuteAsync(async () =>
            {
                Models.Databases.ConnectorScheduleScene connectorScheduleScene = null;

                using (var tran = await m_Connectors.BeginTransaction())
                {
                    try
                    {
                        if (connector.Schedules == null)
                        {
                            connector.Schedules = new List<Models.Databases.ConnectorScheduleScene>();
                        }

                        var current = DateTimeOffset.Now.ToUnixTimeSeconds();

                        connectorScheduleScene = new Models.Databases.ConnectorScheduleScene
                        {
                            Connector = connector,
                            ScheduleScene = scheduleScene,
                            CreatedSeconds = current,
                            UpdatedSceonds = current
                        };


                        connectorScheduleScene = await m_ConnectorScheduleScenes.Insert(connectorScheduleScene);
                        if (null == connectorScheduleScene)
                        {
                            await tran.RollbackAsync();

                            return null;
                        }

                        // insert member record 
                        var blueprintRecord = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint.Types.MemberConnectorScheduleRecord();
                        blueprintRecord.ConnectorId = connector.Id;
                        blueprintRecord.ConnectorName = connector.Name;
                        blueprintRecord.ConnectorScheduleSceneId = connectorScheduleScene.Id;
                        blueprintRecord.SceneScheduleName = connectorScheduleScene.ScheduleScene.Name;

                        var blueprint = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint();
                        blueprint.Kind = Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.ConnectorScheduleCreated;
                        blueprint.ConnectorScheduleRecord = blueprintRecord;

                        if (null == await m_MemberRecords.Insert(member, blueprint))
                        {
                            await tran.RollbackAsync();
                            return null;
                        }

                        await tran.CommitAsync();
                    }
                    catch (System.Exception)
                    {
                        await tran.RollbackAsync();
                        return null;
                    }
                }

                return connectorScheduleScene;
            });
        }


        public async Task<List<Models.Databases.Connector>> GetDeadbeatConnectors()
        {
            return await m_Connectors.Table.Where(x => x.DepartmentId == null && x.Kind == Saturn.Backends.Protocols.Common.CONNECTOR_REGISTER_KIND.Comfirm).ToListAsync();
        }

        public async Task<Models.Databases.Connector> CreateConnector(string name, string deviceId)
        {
            var connector = new Models.Databases.Connector();
            connector.Name = name;
            connector.DeviceId = deviceId;
            connector.CreatedSeconds = DateTimeOffset.Now.ToUnixTimeSeconds();
            connector.Kind = Saturn.Backends.Protocols.Common.CONNECTOR_REGISTER_KIND.Registered;
            return await m_Connectors.Insert(connector);
        }

        public async Task<List<Models.Databases.Connector>> GetConnectorsComfirmed()
        {
            return await m_Connectors.GetConnectorsByKind(Saturn.Backends.Protocols.Common.CONNECTOR_REGISTER_KIND.Comfirm);
        }

        public async Task<List<Models.Databases.Connector>> GetConnectors()
        {
            return await m_Connectors.GetConnectors();
        }

        public async Task<PaginatedList<Models.Databases.Connector>> GetConnectorV2(int from, int size)
        {
            return await PaginatedList<Prometheus.Models.Databases.Connector>.CreateAsync(m_Connectors.Table.Include(x => x.Resource).Include(x => x.Department).OrderByDescending(x => x.CreatedSeconds), from, size);
        }

        public async Task<Models.Databases.Connector> GetConnectorById(long connectorId)
        {
            return await m_Connectors.GetConnectorById(connectorId);
        }

        public async Task<Models.Databases.Connector> GetConnectorBaseById(long connectorId)
        {
            return await m_Connectors.Table.Where(x => x.Id == connectorId).FirstOrDefaultAsync();
        }

        public async Task<Models.Databases.Connector> GetConnectorByDeviceId(string deviceId)
        {
            return await m_Connectors.GetConnectorByDeviceId(deviceId);
        }

        public async Task<Models.Databases.Connector> GetConnectorByName(string name)
        {
            return await m_Connectors.GetConnectorByName(name);
        }

        public async Task<bool> RemoveConnector(Models.Databases.Member member, Models.Databases.Connector connector)
        {
            var execution = m_Connectors.GetExecution();
            return await execution.ExecuteAsync(async () =>
            {
                using (var tran = await m_Connectors.BeginTransaction())
                {
                    try
                    {
                        // insert schedule table
                        bool bSuccess = await m_Connectors.Delete(connector);
                        if (null == connector)
                        {
                            m_Logger.LogCritical($"Connector Delete Failed., ConnectorId: {connector.Id}");

                            await tran.RollbackAsync();

                            return false;
                        }

                        // insert member record
                        var memberRecordBlueprint = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint();

                        var memberConnectorRecord = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint.Types.MemberConnectorRecord();
                        memberConnectorRecord.ConnectorId = connector.Id;
                        memberConnectorRecord.ConnectorName = connector.Name;

                        memberRecordBlueprint.ConnectorRecord = memberConnectorRecord;
                        memberRecordBlueprint.Kind = Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.ConnectorDeleted;

                        await m_MemberRecords.Insert(member, memberRecordBlueprint);
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

        public async Task<bool> RemoveConnectorDepartment(Models.Databases.Member member, Models.Databases.Connector connector)
        {
            var execution = m_Connectors.GetExecution();
            return await execution.ExecuteAsync(async () =>
            {
                using (var tran = await m_Connectors.BeginTransaction())
                {
                    try
                    {
                        long departmentId = 0;
                        var departmentName = string.Empty;

                        if (null != connector.Department)
                        {
                            departmentId = connector.Department.Id;
                            departmentName = connector.Department.Name;
                        }

                        // remove department from connector
                        connector.Department = null;

                        // update connector 
                        bool bSuccess = await m_Connectors.Update(connector);
                        if (null == connector)
                        {
                            m_Logger.LogCritical($"Connector Update Failed., ConnectorId: {connector.Id}");

                            await tran.RollbackAsync();

                            return false;
                        }

                        // insert member record
                        var connectorDepartmentRecord = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint.Types.MemberConnectorDepartmentRecord();
                        connectorDepartmentRecord.ConnectorId = connector.Id;
                        connectorDepartmentRecord.ConnectorName = connector.Name;
                        connectorDepartmentRecord.DepartmentId = departmentId;
                        connectorDepartmentRecord.DepartmentName = departmentName;

                        var memberRecordBlueprint = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint();
                        memberRecordBlueprint.ConnectorDepartmentRecord = connectorDepartmentRecord;
                        memberRecordBlueprint.Kind = Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.ConnectorDepartmentDeleted;

                        await m_MemberRecords.Insert(member, memberRecordBlueprint);
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

        public async Task<bool> AddConnectorDepartment(Models.Databases.Member member, Models.Databases.Connector connector, Models.Databases.Department department)
        {
            var execution = m_Connectors.GetExecution();
            return await execution.ExecuteAsync(async () =>
            {
                using (var tran = await m_Connectors.BeginTransaction())
                {
                    try
                    {
                        // add department into connector
                        connector.Department = department;

                        // update connectors table 
                        bool bSuccess = await m_Connectors.Update(connector);
                        if (null == connector)
                        {
                            m_Logger.LogCritical($"Connector Update Failed., ConnectorId: {connector.Id}");

                            await tran.RollbackAsync();

                            return false;
                        }

                        // insert member record
                        var connectorDepartmentRecord = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint.Types.MemberConnectorDepartmentRecord();
                        connectorDepartmentRecord.ConnectorId = connector.Id;
                        connectorDepartmentRecord.ConnectorName = connector.Name;
                        connectorDepartmentRecord.DepartmentId = department.Id;
                        connectorDepartmentRecord.DepartmentName = department.Name;

                        var memberRecordBlueprint = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint();
                        memberRecordBlueprint.ConnectorDepartmentRecord = connectorDepartmentRecord;
                        memberRecordBlueprint.Kind = Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.ConnectorDepartmentAdded;

                        await m_MemberRecords.Insert(member, memberRecordBlueprint);
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

        public async Task<bool> AddConnectorEmergencyScene(Models.Databases.Member member, Models.Databases.Connector connector, Models.Databases.Scene scene)
        {
            var execution = m_Connectors.GetExecution();
            return await execution.ExecuteAsync(async () =>
            {
                using (var tran = await m_Connectors.BeginTransaction())
                {
                    try
                    {
                        // add scene into connector
                        connector.EmergencyScene = scene;

                        // update connectors table
                        bool bSuccess = await m_Connectors.Update(connector);
                        if (null == connector)
                        {
                            m_Logger.LogCritical($"ConnectorService, AddConnectorEmergencyScene, Connectors Updated Failed, ConnectorId: {connector.Id}");

                            await tran.RollbackAsync();

                            return false;
                        }

                        // insert member record
                        var memberRecordBlueprint = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint();

                        var connectorSceneRecord = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint.Types.MemberConnectorEmergencySceneRecord();
                        connectorSceneRecord.ConnectorId = connector.Id;
                        connectorSceneRecord.ConnectorName = connector.Name;
                        connectorSceneRecord.SceneId = scene.Id;
                        connectorSceneRecord.SceneName = scene.Name;
                        memberRecordBlueprint.ConnectorEmergencySceneRecord = connectorSceneRecord;
                        memberRecordBlueprint.Kind = Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.ConnectorEmergencySceneCreated;

                        await m_MemberRecords.Insert(member, memberRecordBlueprint);
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

        public async Task<bool> AddConnectorScene(Models.Databases.Member member, Models.Databases.Connector connector, Models.Databases.Scene scene)
        {
            var execution = m_Connectors.GetExecution();
            return await execution.ExecuteAsync(async () =>
            {
                using (var tran = await m_Connectors.BeginTransaction())
                {
                    try
                    {
                        // add scene into connector
                        connector.Scene = scene;

                        // update connectors table
                        bool bSuccess = await m_Connectors.Update(connector);
                        if (null == connector)
                        {
                            m_Logger.LogCritical($"ConnectorService, AddConnectorScene, Connector Add Scene Failed., ConnectorId: {connector.Id}");

                            await tran.RollbackAsync();

                            return false;
                        }

                        // insert member record
                        var memberRecordBlueprint = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint();

                        var connectorSceneRecord = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint.Types.MemberConnectorSceneRecord();
                        connectorSceneRecord.ConnectorId = connector.Id;
                        connectorSceneRecord.ConnectorName = connector.Name;
                        connectorSceneRecord.SceneId = scene.Id;
                        connectorSceneRecord.SceneName = scene.Name;
                        memberRecordBlueprint.ConnectorSceneRecord = connectorSceneRecord;
                        memberRecordBlueprint.Kind = Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.ConnectorSceneAdded;

                        await m_MemberRecords.Insert(member, memberRecordBlueprint);
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

        public async Task<bool> RemoveConnectorEmergencyScene(Models.Databases.Member member, Models.Databases.Connector connector)
        {
            var execution = m_Connectors.GetExecution();
            return await execution.ExecuteAsync(async () =>
            {
                using (var tran = await m_Connectors.BeginTransaction())
                {
                    try
                    {
                        long sceneId = 0;
                        var sceneName = string.Empty;
                        if (null != connector.EmergencyScene)
                        {
                            sceneId = connector.EmergencyScene.Id;
                            sceneName = connector.EmergencyScene.Name;
                        }

                        // remove emergency scene from connector
                        connector.EmergencyScene = null;

                        // update connectors table
                        bool bSuccess = await m_Connectors.Update(connector);
                        if (null == connector)
                        {
                            m_Logger.LogCritical($"ConnectorService, RemoveConnectorEmergencyScene, Connector Remove Emergency Scene Failed., ConnectorId: {connector.Id}");

                            await tran.RollbackAsync();

                            return false;
                        }

                        // insert member record
                        var memberRecordBlueprint = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint();

                        var connectorSceneRecord = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint.Types.MemberConnectorEmergencySceneRecord();
                        connectorSceneRecord.ConnectorId = connector.Id;
                        connectorSceneRecord.ConnectorName = connector.Name;
                        connectorSceneRecord.SceneId = sceneId;
                        connectorSceneRecord.SceneName = sceneName;
                        memberRecordBlueprint.ConnectorEmergencySceneRecord = connectorSceneRecord;
                        memberRecordBlueprint.Kind = Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.ConnectorEmergencySceneDeleted;

                        await m_MemberRecords.Insert(member, memberRecordBlueprint);
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
        public async Task<bool> RemoveConnectorScene(Models.Databases.Member member, Models.Databases.Connector connector)
        {
            var execution = m_Connectors.GetExecution();
            return await execution.ExecuteAsync(async () =>
            {
                using (var tran = await m_Connectors.BeginTransaction())
                {
                    try
                    {
                        long sceneId = 0;
                        var sceneName = string.Empty;
                        if (null != connector.Scene)
                        {
                            sceneId = connector.Scene.Id;
                            sceneName = connector.Scene.Name;
                        }
                        // remove scene from connector
                        connector.Scene = null;

                        // update connectors table
                        bool bSuccess = await m_Connectors.Update(connector);
                        if (null == connector)
                        {
                            m_Logger.LogCritical($"Connector Remove Scene Failed., ConnectorId: {connector.Id}");

                            await tran.RollbackAsync();

                            return false;
                        }

                        // insert member record
                        var memberRecordBlueprint = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint();

                        var connectorSceneRecord = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint.Types.MemberConnectorSceneRecord();
                        connectorSceneRecord.ConnectorId = connector.Id;
                        connectorSceneRecord.ConnectorName = connector.Name;
                        connectorSceneRecord.SceneId = sceneId;
                        connectorSceneRecord.SceneName = sceneName;
                        memberRecordBlueprint.ConnectorSceneRecord = connectorSceneRecord;
                        memberRecordBlueprint.Kind = Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.ConnectorSceneDeleted;

                        await m_MemberRecords.Insert(member, memberRecordBlueprint);
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

        public async Task<bool> UpdateConnectorByConnector(Models.Databases.Connector connector)
        {
            bool bSuccess = await m_Connectors.Update(connector);
            if (!bSuccess)
            {
                m_Logger.LogCritical($"ConnectorService, UpdateConnector, Connector Update Failed., ConnectorId: {connector.Id}");
            }

            return bSuccess;
        }

        public async Task<bool> UpdateConnectorEmergencyScene(Models.Databases.Member member, Models.Databases.Connector connector, Models.Databases.Scene scene, bool isEmergency)
        {
            var execution = m_Connectors.GetExecution();
            return await execution.ExecuteAsync(async () =>
            {
                using (var tran = await m_Connectors.BeginTransaction())
                {
                    try
                    {
                        var previousEmergency = connector.IsEmergency;
                        var sceneId = connector.EmergencySceneId;

                        connector.IsEmergency = isEmergency;
                        connector.EmergencySceneId = scene.Id;

                        // updated schedule table
                        bool bSuccess = await m_Connectors.Update(connector);
                        if (null == connector)
                        {
                            m_Logger.LogCritical($"UpdateConnector, Connector Update Failed., ConnectorId: {connector.Id}");

                            await tran.RollbackAsync();

                            return false;
                        }

                        // insert member record
                        var memberConnectorEmergencyRecord = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint.Types.MemberConnectorEmergencyRecord();
                        memberConnectorEmergencyRecord.ConnectorId = connector.Id;
                        memberConnectorEmergencyRecord.ConnectorName = connector.Name;
                        memberConnectorEmergencyRecord.OldEmergency = previousEmergency;
                        memberConnectorEmergencyRecord.NewEmergency = isEmergency;

                        var memberRecordBlueprint = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint();
                        memberRecordBlueprint.ConnectorEmergencyRecord = memberConnectorEmergencyRecord;
                        memberRecordBlueprint.Kind = Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.ConnectorEmergencyStart;

                        await m_MemberRecords.Insert(member, memberRecordBlueprint);
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

        public async Task<bool> UpdateConnectorEmergency(Models.Databases.Member member, Models.Databases.Connector connector, bool isEmergency)
        {
            var execution = m_Connectors.GetExecution();
            return await execution.ExecuteAsync(async () =>
            {
                using (var tran = await m_Connectors.BeginTransaction())
                {
                    try
                    {
                        var previousEmergency = connector.IsEmergency;
                        connector.IsEmergency = isEmergency;

                        // updated schedule table
                        bool bSuccess = await m_Connectors.Update(connector);
                        if (null == connector)
                        {
                            m_Logger.LogCritical($"ConnectorService, UpdateConnectorEmergency, Connector Update Failed., ConnectorId: {connector.Id}");

                            await tran.RollbackAsync();

                            return false;
                        }

                        // insert member record
                        var memberConnectorEmergencyRecord = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint.Types.MemberConnectorEmergencyRecord();
                        memberConnectorEmergencyRecord.ConnectorId = connector.Id;
                        memberConnectorEmergencyRecord.ConnectorName = connector.Name;
                        memberConnectorEmergencyRecord.OldEmergency = previousEmergency;
                        memberConnectorEmergencyRecord.NewEmergency = isEmergency;

                        var memberRecordBlueprint = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint();
                        memberRecordBlueprint.ConnectorEmergencyRecord = memberConnectorEmergencyRecord;
                        memberRecordBlueprint.Kind = isEmergency ? Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.ConnectorEmergencyStart : Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.ConnectorEmergencyEnd;

                        await m_MemberRecords.Insert(member, memberRecordBlueprint);
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

        public async Task<bool> UpdateConnector(Models.Databases.Member member, Models.Databases.Connector connector)
        {
            var execution = m_Connectors.GetExecution();
            return await execution.ExecuteAsync(async () =>
            {
                using (var tran = await m_Connectors.BeginTransaction())
                {
                    try
                    {
                        // insert schedule table
                        bool bSuccess = await m_Connectors.Update(connector);
                        if (null == connector)
                        {
                            m_Logger.LogCritical($"UpdateConnector, Connector Update Failed., ConnectorId: {connector.Id}");

                            await tran.RollbackAsync();

                            return false;
                        }

                        // insert member record
                        var memberConnectorRecord = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint.Types.MemberConnectorRecord();
                        memberConnectorRecord.ConnectorId = connector.Id;
                        memberConnectorRecord.ConnectorName = connector.Name;

                        var memberRecordBlueprint = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint();
                        memberRecordBlueprint.ConnectorRecord = memberConnectorRecord;

                        // set member record kind
                        switch (connector.Kind)
                        {
                            case Saturn.Backends.Protocols.Common.CONNECTOR_REGISTER_KIND.Comfirm:
                                memberRecordBlueprint.Kind = Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.ConnectorConfirm;
                                break;
                            case Saturn.Backends.Protocols.Common.CONNECTOR_REGISTER_KIND.Deny:
                                memberRecordBlueprint.Kind = Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.ConnectorDeny;
                                break;
                        }

                        await m_MemberRecords.Insert(member, memberRecordBlueprint);
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
    }
}