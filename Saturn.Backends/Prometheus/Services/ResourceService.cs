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
    public interface IResourceService
    {
        Task<Prometheus.Models.Databases.Resource> MakeResourceByFormFile(Microsoft.AspNetCore.Http.IFormFile formFile, Prometheus.Models.Databases.DepartmentResourceFolder departmentResourceFolder, long? previewResourceId);
        Task<bool> UpdateResourceByFormFile(Models.Databases.Resource resource, Microsoft.AspNetCore.Http.IFormFile formFile, long? previewResourceId);

        Task<Prometheus.Models.Databases.PreviewResource> MakePreviewResourceByFormFile(Microsoft.AspNetCore.Http.IFormFile formFile);
        Task<Prometheus.Models.Databases.Resource> MakeResourceByMessage(Google.Protobuf.IMessage message, Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND kind, long? previewResourceId);
        Task<Prometheus.Models.Databases.Resource> ModifiedResourceByMessage(Prometheus.Models.Databases.Resource resource, Google.Protobuf.IMessage message, Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND kind, long? previewResourceId);
        Task<Saturn.Backends.Protocols.Common.SceneBlueprint> GetBlueprintFromSceneResource(Prometheus.Models.Databases.Resource resource);
        Task<Prometheus.Models.Databases.Resource> MakeConnectorCaptureByFormFile(Microsoft.AspNetCore.Http.IFormFile formFile, string deviceId);

        Task<PaginatedList<Prometheus.Models.Databases.Resource>> GetItems(int from, int size);
        Task<Prometheus.Models.Databases.Resource> GetItemByName(string resourceName);
        Task<PaginatedList<Prometheus.Models.Databases.Resource>> GetPaginatedResourceByKind(int from, int size, Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND? kind);

        Task<Prometheus.Models.Databases.Resource> GetResource(long resourceId);
        Task<List<Prometheus.Models.Databases.SceneResource>> GetSceneResourcesByResourceId(long resourceId);

        // Get Scenes by Resource Id from 'SceneResources'
        Task<PaginatedList<Prometheus.Models.Databases.SceneResource>> GetPaginatedSceneResourceByResourceId(long resourceId, int from, int size);

        Task<Models.Databases.Resource> GetItemById(long id);
        Task<Models.Databases.Resource> InsertResource(Models.Databases.Resource resource);
        Task<bool> UpdateResource(Models.Databases.Resource resource);
        Task<bool> RemoveResource(Models.Databases.Resource resource);

        Task<Prometheus.Models.Databases.PreviewResource> GetPreviewResoure(long previewResourceId);
        Task<Models.Databases.PreviewResource> InsertPreviewResource(Models.Databases.PreviewResource resource);
        Task<bool> DeletePreviewResource(Models.Databases.PreviewResource previewResource);

        // Get Resources by department folder id 
        Task<PaginatedList<Models.Databases.Resource>> GetResourcesByFolderId(long departmentResourceFolderId, int from, int size, Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND? kind);

        // Has Resources by department folder id 
        Task<bool> HasResourcesByFolderId(long departmentResourceFolderId);

        // Update Resources by department folder 
        Task<List<Models.Databases.Resource>> UpdateResourcesToFolder(Models.Databases.Member meber, IEnumerable<long> resourceIds, Models.Databases.DepartmentResourceFolder departmentResourceFolder);
    }

    public class ResourceService : IResourceService
    {
        static public string ResourceLocation { get; set; }
        private readonly ILogger m_Logger = null;
        private readonly Prometheus.Databases.Repositories.IResourceRepository m_Resources = null;
        private readonly Prometheus.Databases.Repositories.IPreviewResourceRepository m_PreviewResources = null;
        private readonly Prometheus.Databases.Repositories.ISceneResourceRepository m_SceneResources = null;

        public ResourceService(ILogger<ResourceService> logger, Prometheus.Databases.Repositories.IResourceRepository resources, Prometheus.Databases.Repositories.IPreviewResourceRepository previewResources, Prometheus.Databases.Repositories.ISceneResourceRepository sceneResources)
        {
            m_Logger = logger;
            m_Resources = resources;
            m_PreviewResources = previewResources;
            m_SceneResources = sceneResources;
        }

        public async Task<List<Prometheus.Models.Databases.SceneResource>> GetSceneResourcesByResourceId(long resourceId)
        {
            return await m_SceneResources.GetSceneResourcesByResourceId(resourceId);
        }

        public async Task<PaginatedList<Prometheus.Models.Databases.SceneResource>> GetPaginatedSceneResourceByResourceId(long resourceId, int from, int size)
        {
            return await PaginatedList<Prometheus.Models.Databases.SceneResource>.CreateAsync(m_SceneResources
                .Table
                    .Include(x => x.Scene)
                        .ThenInclude(x => x.Resource)
                            .ThenInclude(x => x.PreviewResource)
                .Where(x => x.ResourceId == resourceId), from, size);
        }

        public async Task<Prometheus.Models.Databases.PreviewResource> MakePreviewResourceByFormFile(Microsoft.AspNetCore.Http.IFormFile formFile)
        {
            try
            {
                var previewResource = new Prometheus.Models.Databases.PreviewResource();
                var folderName = Path.Combine("Resources", "previews");
                var toLocation = Path.Combine(Services.ResourceService.ResourceLocation, folderName);
                var directoryInform = new System.IO.DirectoryInfo(toLocation);
                if (!directoryInform.Exists)
                {
                    System.IO.Directory.CreateDirectory(toLocation);
                }

                if (formFile.Length <= 0)
                {
                    return null;
                }
                var fileName = $"{DateTimeOffset.Now.ToUnixTimeSeconds()}_{Guid.NewGuid().ToString()}.png";
                var fullPath = Path.Combine(toLocation, fileName);

                previewResource.Location = Path.Combine(folderName, fileName).Replace(@"\", "/");
                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    await formFile.CopyToAsync(stream);
                }

                previewResource = await InsertPreviewResource(previewResource);
                if (null != previewResource)
                {
                    return previewResource;
                }

                try
                {
                    if (System.IO.File.Exists(fullPath))
                    {
                        System.IO.File.Delete(fullPath);
                    }

                }
                catch (System.Exception e)
                {
                    m_Logger.LogCritical($"File Delete Failed, Exception : {e}");
                }

                return null;

            }
            catch (System.Exception e)
            {
                m_Logger.LogCritical($"File Delete Failed, Exception : {e}");
            }

            return null;
        }


        public async Task<bool> UpdateResourceByFormFile(Models.Databases.Resource resource, Microsoft.AspNetCore.Http.IFormFile formFile, long? previewResourceId)
        {
            var execution = m_Resources.GetExecution();
            return await execution.ExecuteAsync(async () =>
            {
                Prometheus.Models.Databases.PreviewResource previewResource = null;
                if (0 < previewResourceId)
                {
                    previewResource = await GetPreviewResoure(previewResourceId.Value);
                    if (null == previewResource)
                    {
                        return false;
                    }
                }

                try
                {
                    var previousPreviewResource = resource.PreviewResource;
                    resource.Name = formFile.Name;
                    resource.ContentType = formFile.ContentType;
                    resource.PreviewResource = previewResource;

                    var resourceKinds = ParseResourceKindFromFile(formFile);
                    var contentFolderName = resourceKinds.folderName;
                    if (string.IsNullOrWhiteSpace(contentFolderName))
                    {
                        return false;
                    }

                    if (resource.Kind != resourceKinds.kind)
                    {
                        return false;
                    }

                    resource.Kind = resourceKinds.kind;

                    var folderName = Path.Combine("Resources", contentFolderName);
                    var toLocation = Path.Combine(Services.ResourceService.ResourceLocation, folderName);
                    var directoryInform = new System.IO.DirectoryInfo(toLocation);
                    if (!directoryInform.Exists)
                    {
                        System.IO.Directory.CreateDirectory(toLocation);
                    }

                    if (formFile.Length <= 0)
                    {
                        return false;
                    }

                    var fileName = $"{DateTimeOffset.Now.ToUnixTimeSeconds()}_{Guid.NewGuid().ToString()}{Path.GetExtension(resource.Name)}";
                    var fullPath = Path.Combine(toLocation, fileName);

                    // set previous resource location 
                    var previousLocation = resource.Location;

                    resource.Location = Path.Combine(folderName, fileName).Replace(@"\", "/");
                    resource.Folder = contentFolderName;

                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        await formFile.CopyToAsync(stream);

                        using (var md5 = MD5.Create())
                        {
                            resource.Hash = md5.ComputeHash(stream);
                        }
                    }

                    var fileInfo = new System.IO.FileInfo(fullPath);
                    if (null != fileInfo)
                    {
                        resource.Size = fileInfo.Length;
                    }

                    resource.UpdateSeconds = DateTimeOffset.Now.ToUnixTimeSeconds();

                    bool bSuccess = await UpdateResource(resource);
                    if (!bSuccess)
                    {
                        try
                        {
                            // 실제 파일 제거
                            if (System.IO.File.Exists(fullPath))
                            {
                                System.IO.File.Delete(fullPath);
                            }

                            // 썸네일 제거
                            if (null != previewResource)
                            {
                                if (!await DeletePreviewResource(previewResource))
                                {
                                    m_Logger.LogCritical($"ResourceService, UpdateResourceByFormFile, PreviewResourceId : ${previewResource.Id}");
                                }
                            }
                        }
                        catch (System.Exception e)
                        {
                            m_Logger.LogCritical($"File Delete Failed, Exception : {e}");
                        }
                    }
                    else
                    {
                        // 기존 실제 파일 제거
                        if (!string.IsNullOrEmpty(previousLocation))
                        {
                            fullPath = Path.Combine(Services.ResourceService.ResourceLocation, previousLocation);
                            if (System.IO.File.Exists(fullPath))
                            {
                                System.IO.File.Delete(fullPath);
                            }
                        }

                        // 기존 썸네일 제거
                        if (null != previousPreviewResource)
                        {
                            if (!await DeletePreviewResource(previousPreviewResource))
                            {
                                m_Logger.LogCritical($"ResourceService, UpdateResourceByFormFile, PreviewResourceId : ${previousPreviewResource.Id}");
                            }
                        }
                    }

                    return true;
                }
                catch (Exception e)
                {
                    m_Logger.LogCritical($"MakeResourceByFormFile, Exception : {e}");
                }

                return false;
            });


        }

        public async Task<Prometheus.Models.Databases.Resource> MakeResourceByFormFile(Microsoft.AspNetCore.Http.IFormFile formFile, Prometheus.Models.Databases.DepartmentResourceFolder departmentResourceFolder, long? previewResourceId)
        {
            Prometheus.Models.Databases.PreviewResource previewResource = null;
            if (0 < previewResourceId)
            {
                previewResource = await GetPreviewResoure(previewResourceId.Value);
                if (null == previewResource)
                {
                    return null;
                }
            }

            try
            {
                var resource = new Prometheus.Models.Databases.Resource();
                resource.Name = formFile.Name;
                resource.ContentType = formFile.ContentType;
                resource.PreviewResource = previewResource;
                resource.DepartmentResourceFolder = departmentResourceFolder;

                var resourceKinds = ParseResourceKindFromFile(formFile);
                var contentFolderName = resourceKinds.folderName;
                if (string.IsNullOrWhiteSpace(contentFolderName))
                {
                    return null;
                }

                resource.Kind = resourceKinds.kind;

                var folderName = Path.Combine("Resources", contentFolderName);
                var toLocation = Path.Combine(Services.ResourceService.ResourceLocation, folderName);
                var directoryInform = new System.IO.DirectoryInfo(toLocation);
                if (!directoryInform.Exists)
                {
                    System.IO.Directory.CreateDirectory(toLocation);
                }

                if (formFile.Length <= 0)
                {
                    return null;
                }

                // var fileName = ContentDispositionHeaderValue.Parse(formFile.ContentDisposition).FileName.Trim('"');
                var fileName = $"{DateTimeOffset.Now.ToUnixTimeSeconds()}_{Guid.NewGuid().ToString()}{Path.GetExtension(resource.Name)}";
                var fullPath = Path.Combine(toLocation, fileName);

                resource.Location = Path.Combine(folderName, fileName).Replace(@"\", "/");
                resource.Folder = contentFolderName;

                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    await formFile.CopyToAsync(stream);

                    using (var md5 = MD5.Create())
                    {
                        resource.Hash = md5.ComputeHash(stream);
                    }
                }

                var fileInfo = new System.IO.FileInfo(fullPath);
                if (null != fileInfo)
                {
                    resource.Size = fileInfo.Length;
                }

                resource.CreatedSeconds = DateTimeOffset.Now.ToUnixTimeSeconds();
                resource.UpdateSeconds = resource.CreatedSeconds;

                resource = await InsertResource(resource);
                if (null == resource)
                {
                    try
                    {
                        if (System.IO.File.Exists(fullPath))
                        {
                            System.IO.File.Delete(fullPath);
                        }

                    }
                    catch (System.Exception e)
                    {
                        m_Logger.LogCritical($"File Delete Failed, Exception : {e}");
                    }
                }

                return resource;
            }
            catch (Exception e)
            {
                m_Logger.LogCritical($"MakeResourceByFormFile, Exception : {e}");
            }
            return null;
        }

        public async Task<Prometheus.Models.Databases.Resource> MakeConnectorCaptureByFormFile(Microsoft.AspNetCore.Http.IFormFile formFile, string deviceId)
        {
            Prometheus.Models.Databases.PreviewResource previewResource = null;
            try
            {
                var resource = await GetItemByName(formFile.Name);
                if (null != resource)
                {
                    resource.UpdateSeconds = resource.CreatedSeconds;
                    resource.Kind = Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND.Screencapture;
                }
                else
                {
                    resource = new Prometheus.Models.Databases.Resource();
                    resource.Name = formFile.Name;
                    resource.ContentType = "image/png";
                    resource.PreviewResource = previewResource;
                    resource.Kind = Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND.Screencapture;
                    resource.CreatedSeconds = DateTimeOffset.Now.ToUnixTimeSeconds();
                }

                var folderName = Path.Combine("Resources", "connectors");
                var toLocation = Path.Combine(Services.ResourceService.ResourceLocation, folderName);
                var directoryInform = new System.IO.DirectoryInfo(toLocation);
                if (!directoryInform.Exists)
                {
                    System.IO.Directory.CreateDirectory(toLocation);
                }

                if (formFile.Length <= 0)
                {
                    return null;
                }


                var fileName = ContentDispositionHeaderValue.Parse(formFile.ContentDisposition).FileName.Trim('"');
                var fullPath = Path.Combine(toLocation, fileName);

                resource.Location = Path.Combine(folderName, fileName).Replace(@"\", "/");
                resource.Folder = "connectors";

                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    await formFile.CopyToAsync(stream);

                    using (var md5 = MD5.Create())
                    {
                        resource.Hash = md5.ComputeHash(stream);
                    }
                }

                var fileInfo = new System.IO.FileInfo(fullPath);
                if (null != fileInfo)
                {
                    resource.Size = fileInfo.Length;
                }

                if (resource.Id > 0)
                {
                    bool bSuccess = await UpdateResource(resource);
                    if (!bSuccess)
                    {
                        m_Logger.LogCritical($"ResourceService, Resource update failed. DeviceId: {deviceId}, ResourceId : {resource.Id}");
                    }
                }
                else
                {
                    resource = await InsertResource(resource);
                    if (null == resource)
                    {
                        try
                        {
                            if (System.IO.File.Exists(fullPath))
                            {
                                System.IO.File.Delete(fullPath);
                            }

                        }
                        catch (System.Exception e)
                        {
                            m_Logger.LogCritical($"File Delete Failed, Exception : {e}");
                        }
                    }
                }

                return resource;
            }
            catch (Exception e)
            {
                m_Logger.LogCritical($"MakeResourceByFormFile, Exception : {e}");
            }

            return null;
        }

        public async Task<Saturn.Backends.Protocols.Common.SceneBlueprint> GetBlueprintFromSceneResource(Prometheus.Models.Databases.Resource resource)
        {
            var fullPath = Path.Combine(Services.ResourceService.ResourceLocation, resource.Location);
            var fileInform = new System.IO.FileInfo(fullPath);
            if (!fileInform.Exists)
            {
                m_Logger.LogCritical($"File is not exists. Path : {resource.Location}");
                return null;
            }

            using (var sr = new StreamReader(fullPath))
            {
                var contents = await sr.ReadToEndAsync();

                try
                {
                    return Saturn.Backends.Protocols.Common.SceneBlueprint.Parser.ParseJson(contents);
                }
                catch (System.Exception e)
                {
                    m_Logger.LogCritical($"Protobuf Parse Failed, Saturn.Backends.Protocols.Common.SceneBlueprint, {e}");
                    return null;
                }

            }
        }

        public async Task<Prometheus.Models.Databases.Resource> ModifiedResourceByMessage(Prometheus.Models.Databases.Resource resource, Google.Protobuf.IMessage message, Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND kind, long? previewResourceId)
        {
            Prometheus.Models.Databases.PreviewResource previewResource = null;
            if (previewResourceId.HasValue || 0 < previewResourceId.Value)
            {
                previewResource = await GetPreviewResoure(previewResourceId.Value);
                if (null == previewResource)
                {
                    return null;
                }
            }

            try
            {
                var beforeResoruceName = resource.Name;
                var beforeResourceLocation = resource.Location;
                var beforePreviewResource = resource.PreviewResource;

                resource.Name = $"{DateTimeOffset.Now.ToUnixTimeSeconds()}_{Guid.NewGuid().ToString()}.json";
                resource.ContentType = "application/json";
                resource.PreviewResource = previewResource;
                resource.Kind = kind;


                var contentName = string.Empty;
                switch (kind)
                {
                    case Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND.Scene:
                        contentName = "Scenes";
                        break;
                    case Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND.Map:
                        contentName = "Coordinates";
                        break;
                    case Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND.Subtitle:
                        contentName = "Subtitles";
                        break;
                    default:
                        break;
                }

                var folderName = Path.Combine("Resources", contentName);
                var toLocation = Path.Combine(Services.ResourceService.ResourceLocation, folderName);
                var directoryInform = new System.IO.DirectoryInfo(toLocation);
                if (!directoryInform.Exists)
                {
                    System.IO.Directory.CreateDirectory(toLocation);
                }

                var fileName = resource.Name;
                var fullPath = Path.Combine(toLocation, fileName);

                resource.Location = Path.Combine(folderName, fileName).Replace(@"\", "/");
                resource.Folder = contentName;

                Google.Protobuf.JsonFormatter formatter = new Google.Protobuf.JsonFormatter(new Google.Protobuf.JsonFormatter.Settings(false));
                string content = formatter.Format(message);
                using (var sw = new StreamWriter(fullPath, true))
                {
                    await sw.WriteAsync(content);
                }

                using (var stream = new FileStream(fullPath, FileMode.Open))
                {
                    using (var md5 = MD5.Create())
                    {
                        resource.Hash = md5.ComputeHash(stream);
                    }
                }

                var fileInfo = new System.IO.FileInfo(fullPath);
                if (null != fileInfo)
                {
                    resource.Size = fileInfo.Length;
                }

                resource.UpdateSeconds = DateTimeOffset.Now.ToUnixTimeSeconds();

                // delete before preview resource
                if (null != beforePreviewResource)
                {
                    var bDeleted = await DeletePreviewResource(beforePreviewResource);
                    if (!bDeleted)
                    {
                        m_Logger.LogCritical($"ResourceService, ModifiedResourceByMessage, Before preview resource delete failed, PreviewResourceId : {beforePreviewResource.Id}");
                    }
                }

                // delete resource 
                bool bSuccess = await UpdateResource(resource);
                if (!bSuccess)
                {
                    try
                    {
                        if (System.IO.File.Exists(fullPath))
                        {
                            System.IO.File.Delete(fullPath);
                        }

                    }
                    catch (System.Exception e)
                    {
                        m_Logger.LogCritical($"ResourceService, ModifiedResourceByMessage, File Delete Failed, Exception : {e}");
                    }



                    return null;
                }

                // 성공하였을 경우 기존 파일은 제거 한다.
                fullPath = Path.Combine(toLocation, beforeResoruceName);
                try
                {
                    if (System.IO.File.Exists(fullPath))
                    {
                        System.IO.File.Delete(fullPath);
                    }

                }
                catch (System.Exception e)
                {
                    m_Logger.LogCritical($"ResourceService, ModifiedResourceByMessage, File Delete Failed, Exception : {e}");
                }
                return resource;
            }
            catch (Exception e)
            {
                m_Logger.LogCritical($"ResourceService, ModifiedResourceByMessage, exception : {e}");
            }

            return null;
        }

        public async Task<Prometheus.Models.Databases.Resource> MakeResourceByMessage(Google.Protobuf.IMessage message, Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND kind, long? previewResourceId)
        {
            Prometheus.Models.Databases.PreviewResource previewResource = null;
            if (previewResourceId.HasValue || 0 < previewResourceId.Value)
            {
                previewResource = await GetPreviewResoure(previewResourceId.Value);
                if (null == previewResource)
                {
                    return null;
                }
            }

            try
            {
                var resource = new Prometheus.Models.Databases.Resource();
                resource.Name = $"{DateTimeOffset.Now.ToUnixTimeSeconds()}_{Guid.NewGuid().ToString()}.json";
                resource.ContentType = "application/json";
                resource.PreviewResource = previewResource;
                resource.Kind = kind;

                var contentName = string.Empty;
                switch (kind)
                {
                    case Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND.Scene:
                        contentName = "Scenes";
                        break;
                    case Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND.Map:
                        contentName = "Coordinates";
                        break;
                    case Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND.Subtitle:
                        contentName = "Subtitles";
                        break;
                    default:
                        break;
                }

                var folderName = Path.Combine("Resources", contentName);
                var toLocation = Path.Combine(Services.ResourceService.ResourceLocation, folderName);
                var directoryInform = new System.IO.DirectoryInfo(toLocation);
                if (!directoryInform.Exists)
                {
                    System.IO.Directory.CreateDirectory(toLocation);
                }

                var fileName = resource.Name;
                var fullPath = Path.Combine(toLocation, fileName);

                resource.Location = Path.Combine(folderName, fileName).Replace(@"\", "/");
                resource.Folder = contentName;

                Google.Protobuf.JsonFormatter formatter = new Google.Protobuf.JsonFormatter(new Google.Protobuf.JsonFormatter.Settings(false));
                string content = formatter.Format(message);
                using (var sw = new StreamWriter(fullPath, true))
                {
                    await sw.WriteAsync(content);
                }

                using (var stream = new FileStream(fullPath, FileMode.Open))
                {
                    using (var md5 = MD5.Create())
                    {
                        resource.Hash = md5.ComputeHash(stream);
                    }
                }

                var fileInfo = new System.IO.FileInfo(fullPath);
                if (null != fileInfo)
                {
                    resource.Size = fileInfo.Length;
                }

                resource.CreatedSeconds = DateTimeOffset.Now.ToUnixTimeSeconds();
                resource.UpdateSeconds = resource.CreatedSeconds;

                resource = await InsertResource(resource);
                if (null == resource)
                {
                    try
                    {
                        if (System.IO.File.Exists(fullPath))
                        {
                            System.IO.File.Delete(fullPath);
                        }

                    }
                    catch (System.Exception e)
                    {
                        m_Logger.LogCritical($"File Delete Failed, Exception : {e}");
                    }
                }

                return resource;
            }
            catch (Exception e)
            {
                m_Logger.LogCritical($"MakeResourceByMessage, exception : {e}");
            }

            return null;
        }

        public async Task<PaginatedList<Models.Databases.Resource>> GetItems(int from, int size)
        {
            return await PaginatedList<Prometheus.Models.Databases.Resource>.CreateAsync(m_Resources.Table.Where(x => x.Kind != Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND.Scene && x.Kind != Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND.Screencapture).OrderByDescending(x => x.UpdateSeconds), from, size);
        }

        public async Task<PaginatedList<Prometheus.Models.Databases.Resource>> GetPaginatedResource(int from, int size)
        {
            return await PaginatedList<Prometheus.Models.Databases.Resource>.CreateAsync(m_Resources.Table.Include(x => x.PreviewResource).Where(x => x.Kind != Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND.Scene && x.Kind != Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND.Screencapture).OrderByDescending(x => x.CreatedSeconds), from, size);
        }
        public async Task<PaginatedList<Prometheus.Models.Databases.Resource>> GetPaginatedResourceByKind(int from, int size, Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND? kind)
        {
            if (!kind.HasValue)
            {
                return await PaginatedList<Prometheus.Models.Databases.Resource>.CreateAsync(m_Resources.Table
                    .Include(x => x.PreviewResource)
                    .Where(x =>
                        x.Kind != Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND.Scene
                        && x.Kind != Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND.Screencapture
                        && x.DepartmentResourceFolder == null)
                    .OrderByDescending(x => x.UpdateSeconds), from, size);
            }

            return await PaginatedList<Prometheus.Models.Databases.Resource>.CreateAsync(m_Resources.Table
                    .Include(x => x.PreviewResource)
                    .Where(x => x.DepartmentResourceFolder == null
                        && x.Kind == kind.Value)

                    .OrderByDescending(x => x.UpdateSeconds), from, size);

        }

        public async Task<Prometheus.Models.Databases.Resource> GetResource(long resourceId)
        {
            return await m_Resources.Select(resourceId);
        }


        public async Task<Prometheus.Models.Databases.Resource> GetItemByName(string resourceName)
        {
            return await m_Resources.Table.Where(x => x.Name == resourceName).FirstOrDefaultAsync();
        }

        public async Task<Prometheus.Models.Databases.PreviewResource> GetPreviewResoure(long previewResourceId)
        {
            return await m_PreviewResources.Select(previewResourceId);
        }

        public async Task<Models.Databases.Resource> InsertResource(Models.Databases.Resource resource)
        {
            return await m_Resources.Insert(resource);
        }

        public async Task<Models.Databases.Resource> GetItemById(long id)
        {
            return await m_Resources.Select(id);
        }

        public async Task<bool> UpdateResource(Models.Databases.Resource resource)
        {
            return await m_Resources.Update(resource);
        }

        public async Task<bool> RemoveResource(Models.Databases.Resource resource)
        {

            var execution = m_Resources.GetExecution();
            return await execution.ExecuteAsync(async () =>
            {
                var removeLocations = new List<string>();

                using (var tran = await m_Resources.BeginTransaction())
                {
                    try
                    {
                        if (null != resource.PreviewResource)
                        {
                            removeLocations.Add(resource.PreviewResource.Location);

                            if (!await DeletePreviewResource(resource.PreviewResource))
                            {
                                m_Logger.LogCritical($"ResourceService, RemoveResource, Preview Resource delete failed, PreviewResourceId : {resource.PreviewResourceId}");

                                await tran.RollbackAsync();

                                return false;
                            }
                        }


                        if (!await m_Resources.Delete(resource))
                        {
                            m_Logger.LogCritical($"ResourceService, RemoveResource, Resource delete failed, ResourceId : {resource.Id}");

                            await tran.RollbackAsync();

                            return false;
                        }

                        foreach (var location in removeLocations)
                        {
                            var fullPath = System.IO.Path.Combine(Services.ResourceService.ResourceLocation, location);
                            if (System.IO.File.Exists(fullPath))
                            {
                                System.IO.File.Delete(fullPath);
                            }
                        }

                        await tran.CommitAsync();

                        return true;
                    }
                    catch (System.Exception)
                    {
                        await tran.RollbackAsync();

                        return false;
                    }
                }
            });
        }

        public async Task<Models.Databases.PreviewResource> InsertPreviewResource(Models.Databases.PreviewResource previewResource)
        {
            return await m_PreviewResources.Insert(previewResource);
        }

        public async Task<bool> DeletePreviewResource(Models.Databases.PreviewResource previewResource)
        {
            bool bDeleted = await m_PreviewResources.Delete(previewResource);
            if (bDeleted)
            {
                var fullPath = System.IO.Path.Combine(Services.ResourceService.ResourceLocation, previewResource.Location);
                if (System.IO.File.Exists(fullPath))
                {
                    System.IO.File.Delete(fullPath);
                }
            }

            return bDeleted;
        }

        // Get Resources by department folder id 
        public async Task<PaginatedList<Models.Databases.Resource>> GetResourcesByFolderId(long departmentResourceFolderId, int from, int size, Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND? kind)
        {
            if (!kind.HasValue || kind.Value == Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND.Default)
            {
                return await PaginatedList<Prometheus.Models.Databases.Resource>.CreateAsync(m_Resources.Table.Include(x => x.PreviewResource).OrderByDescending(x => x.UpdateSeconds).Where(x => x.DepartmentResourceFolderId == departmentResourceFolderId), from, size);
            }

            return await PaginatedList<Prometheus.Models.Databases.Resource>.CreateAsync(m_Resources.Table.Include(x => x.PreviewResource).OrderByDescending(x => x.UpdateSeconds).Where(x => x.DepartmentResourceFolderId == departmentResourceFolderId && x.Kind == (kind ?? Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND.Default)), from, size);
        }

        // Has Resources by department folder id 
        public async Task<bool> HasResourcesByFolderId(long departmentResourceFolderId)
        {
            return 0 < await m_Resources.Table.Where(x => x.DepartmentResourceFolderId == departmentResourceFolderId).CountAsync();
        }

        // Update Resources by department folder 
        public async Task<List<Models.Databases.Resource>> UpdateResourcesToFolder(Models.Databases.Member meber, IEnumerable<long> resourceIds, Models.Databases.DepartmentResourceFolder departmentResourceFolder)
        {
            var execution = m_Resources.GetExecution();
            return await execution.ExecuteAsync(async () =>
            {
                var resources = new List<Models.Databases.Resource>();

                using (var tran = await m_Resources.BeginTransaction())
                {
                    foreach (var resourceId in resourceIds)
                    {
                        try
                        {
                            var resource = await m_Resources.Select(resourceId);
                            if (null == resource)
                            {
                                continue;
                            }

                            resource.DepartmentResourceFolder = departmentResourceFolder;

                            if (await m_Resources.Update(resource))
                            {
                                resources.Add(resource);
                            }
                        }
                        catch (System.Exception ex)
                        {
                            m_Logger.LogCritical($"ResourceService, UpdateResourcesToFolder, Exception : {ex}");

                            continue;
                        }
                    }

                    await tran.CommitAsync();
                }

                return resources;
            });
        }

        private (string folderName, Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND kind) ParseResourceKindFromFile(Microsoft.AspNetCore.Http.IFormFile formFile)
        {
            var contentFolderName = string.Empty;
            Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND kind = Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND.Default;

            if (formFile.ContentType.Contains("video/mp4"))
            {
                contentFolderName = "Videos";
                kind = Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND.Video;
            }
            else if (formFile.ContentType.Contains("application/pdf"))
            {
                contentFolderName = "Documents";
                kind = Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND.Pdf;
            }
            else if (formFile.ContentType.Contains("image"))
            {
                contentFolderName = "Images";
                kind = Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND.Image;
            }
            else if (formFile.ContentType.Contains("text/plain") || formFile.ContentType.Contains("text/xml"))
            {
                contentFolderName = "Subtitles";
                kind = Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND.Subtitle;
            }

            return (contentFolderName, kind);
        }
    }
}