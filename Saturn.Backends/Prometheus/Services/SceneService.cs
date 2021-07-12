using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Saturn.Backends.Commons;

namespace Prometheus.Services
{
    public interface ISceneService
    {
        Task<PaginatedList<Models.Databases.Scene>> GetItems(int from, int size);
        Task<PaginatedList<Models.Databases.Scene>> GetScenes(int from, int size);
        Task<PaginatedList<Models.Databases.Scene>> GetScenesByFolderId(long departmentSceneFolderId, int from, int size);
        Task<bool> HasScenesByFolderId(long departmentSceneFolderId);
        Task<List<Models.Databases.Scene>> UpdateScenesToFolder(Models.Databases.Member meber, IEnumerable<long> sceneIds, Models.Databases.DepartmentSceneFolder departmentSceneFolder);
        Task<Models.Databases.Scene> CreateScene(Models.Databases.Member member, Models.Databases.Scene scene);
        Task<Models.Databases.Scene> GetSceneBySceneId(long sceneId);
        Task<Models.Databases.Scene> GetSceneBySceneName(string sceneName);
        Task<bool> UpdateScene(Models.Databases.Member member, Models.Databases.Scene scene);
        Task<bool> DeleteScene(Models.Databases.Member member, Models.Databases.Scene scene);


    }

    public class SceneService : ISceneService
    {
        private readonly ILogger m_Logger = null;
        private readonly Databases.Repositories.ISceneRepository m_Scenes = null;
        private readonly Databases.Repositories.IResourceRepository m_Resources = null;
        private readonly IMemberRecordService m_MemberRecords = null;
        public SceneService(ILogger<SceneService> logger, Databases.Repositories.ISceneRepository scenes, Databases.Repositories.IResourceRepository resources, IMemberRecordService memberRecordService)
        {
            m_Logger = logger;
            m_Scenes = scenes;
            m_Resources = resources;
            m_MemberRecords = memberRecordService;
        }

        public async Task<Models.Databases.Scene> GetSceneBySceneId(long sceneId)
        {
            return await m_Scenes.Select(sceneId);
        }

        public async Task<Models.Databases.Scene> GetSceneBySceneName(string sceneName)
        {
            return await m_Scenes.Table.FirstOrDefaultAsync(x => x.Name.ToLower() == sceneName.ToLower());
        }

        public async Task<PaginatedList<Models.Databases.Scene>> GetItems(int from, int size)
        {
            return await PaginatedList<Prometheus.Models.Databases.Scene>.CreateAsync(m_Scenes.Table.Include(x => x.Resource).ThenInclude(x => x.PreviewResource).OrderByDescending(x => x.UpdatedSeconds), from, size);
        }

        public async Task<PaginatedList<Models.Databases.Scene>> GetScenes(int from, int size)
        {
            return await PaginatedList<Prometheus.Models.Databases.Scene>.CreateAsync(m_Scenes.Table.Include(x => x.Resource).ThenInclude(x => x.PreviewResource).OrderByDescending(x => x.UpdatedSeconds).Where(x => x.DepartmentSceneFolder == null), from, size);
        }

        public async Task<PaginatedList<Models.Databases.Scene>> GetScenesByFolderId(long departmentSceneFolderId, int from, int size)
        {
            return await PaginatedList<Prometheus.Models.Databases.Scene>
                .CreateAsync(
                    m_Scenes.Table.
                        Include(x => x.Resource)
                            .ThenInclude(x => x.PreviewResource)
                        .OrderByDescending(x => x.UpdatedSeconds)
                        .Where(x => x.DepartmentSceneFolderId == departmentSceneFolderId),
                    from,
                    size);
        }

        public async Task<bool> HasScenesByFolderId(long departmentSceneFolderId)
        {
            return 0 < await m_Scenes.Table.Where(x => x.DepartmentSceneFolderId == departmentSceneFolderId).CountAsync();
        }

        public async Task<List<Models.Databases.Scene>> UpdateScenesToFolder(Models.Databases.Member member, IEnumerable<long> sceneIds, Models.Databases.DepartmentSceneFolder departmentSceneFolder)
        {
            var execution = m_Scenes.GetExecution();
            return await execution.ExecuteAsync(async () =>
            {
                var scenes = new List<Models.Databases.Scene>();

                using (var tran = await m_Scenes.BeginTransaction())
                {
                    foreach (var sceneId in sceneIds)
                    {
                        try
                        {
                            var scene = await m_Scenes.SelectRow(sceneId);
                            if (null == scene)
                            {
                                continue;
                            }

                            scene.DepartmentSceneFolder = departmentSceneFolder;

                            if (await m_Scenes.Update(scene))
                            {
                                scenes.Add(scene);
                            }
                        }
                        catch (System.Exception ex)
                        {
                            m_Logger.LogCritical($"SceneService, UpdateScenesToDepartmentFolder, Exception : {ex}");

                            continue;
                        }
                    }

                    await tran.CommitAsync();
                }

                return scenes;
            });
        }

        public async Task<Models.Databases.Scene> CreateScene(Models.Databases.Member member, Models.Databases.Scene scene)
        {
            var execution = m_Scenes.GetExecution();
            bool bSuccess = await execution.ExecuteAsync(async () =>
            {
                using (var tran = await m_Scenes.BeginTransaction())
                {
                    try
                    {
                        // insert scene table
                        scene = await m_Scenes.Insert(scene);
                        if (null == scene)
                        {
                            m_Logger.LogCritical("Scene Insert Failed");
                            await tran.RollbackAsync();
                            return false;
                        }

                        // insert member record 
                        var memberRecordBlueprint = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint();

                        var memberSceneRecord = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint.Types.MemberSceneRecord();
                        memberSceneRecord.SceneId = scene.Id;
                        memberSceneRecord.SceneName = scene.Name;
                        memberRecordBlueprint.SceneRecord = memberSceneRecord;
                        memberRecordBlueprint.Kind = Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.SceneCreated;

                        if (null == await m_MemberRecords.Insert(member, memberRecordBlueprint))
                        {
                            await tran.RollbackAsync();
                            return false;
                        }

                        await tran.CommitAsync();
                    }
                    catch (System.Exception e)
                    {
                        m_Logger.LogCritical($"Create Exception : {e}");
                        return false;
                    }
                }

                return true;
            });

            return bSuccess ? scene : null;
        }



        public async Task<bool> UpdateScene(Models.Databases.Member member, Models.Databases.Scene scene)
        {
            var execution = m_Scenes.GetExecution();
            bool bSuccess = await execution.ExecuteAsync(async () =>
            {
                using (var tran = await m_Scenes.BeginTransaction())
                {
                    try
                    {
                        bool bUpdated = await m_Scenes.Update(scene);
                        if (!bUpdated)
                        {
                            await tran.RollbackAsync();

                            return false;
                        }

                        // insert member record 
                        var memberRecordBlueprint = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint();

                        var memberSceneRecord = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint.Types.MemberSceneRecord();
                        memberSceneRecord.SceneId = scene.Id;
                        memberSceneRecord.SceneName = scene.Name;
                        memberRecordBlueprint.SceneRecord = memberSceneRecord;
                        memberRecordBlueprint.Kind = Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.SceneUpdated;

                        if (null == await m_MemberRecords.Insert(member, memberRecordBlueprint))
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

        public async Task<bool> DeleteScene(Models.Databases.Member member, Models.Databases.Scene scene)
        {
            var execution = m_Scenes.GetExecution();
            bool bSuccess = await execution.ExecuteAsync(async () =>
            {
                using (var tran = await m_Scenes.BeginTransaction())
                {
                    try
                    {
                        // remove scene 
                        bool bDeleted = await m_Scenes.Delete(scene);
                        if (!bDeleted)
                        {
                            await tran.RollbackAsync();

                            return false;
                        }

                        var resource = scene.Resource;
                        if (null != resource)
                        {
                            bDeleted = await m_Resources.Delete(resource);
                            if (!bDeleted)
                            {
                                m_Logger.LogCritical($"SceneService, DeleteScene, Resource remove failed, ResourceId : {scene.ResourceId}");

                                await tran.RollbackAsync();

                                return false;
                            }

                            // remove file
                            var fullPath = System.IO.Path.Combine(Services.ResourceService.ResourceLocation, resource.Location);
                            if (System.IO.File.Exists(fullPath))
                            {
                                System.IO.File.Delete(fullPath);
                            }
                        }
                        else
                        {
                            m_Logger.LogCritical($"SceneService, DeleteScene, Resource is not found, ResourceId : {scene.ResourceId}");
                        }



                        // insert member record 
                        var memberRecordBlueprint = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint();

                        var memberSceneRecord = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint.Types.MemberSceneRecord();
                        memberSceneRecord.SceneId = scene.Id;
                        memberSceneRecord.SceneName = scene.Name;
                        memberRecordBlueprint.SceneRecord = memberSceneRecord;
                        memberRecordBlueprint.Kind = Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.SceneDeleted;

                        if (null == await m_MemberRecords.Insert(member, memberRecordBlueprint))
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
    }
}