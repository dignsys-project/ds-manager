using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Prometheus.Models.Databases.Extensions;
using Saturn.Backends.Commons;
using Saturn.Backends.Commons.Extensions;

namespace Prometheus.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class SceneController : AbstractBaseController
    {
        private readonly ILogger m_Logger = null;
        private readonly Services.IMemberService m_Members = null;
        private readonly Services.IResourceService m_ResourceService = null;
        private readonly Services.ISceneService m_SceneService = null;
        private readonly Services.IConnectorService m_ConnectorService = null;
        private readonly Services.IDepartmentService m_DepartmentService = null;

        private readonly Services.ISceneConnectionService m_SceneConnections = null;
        public SceneController(ILogger<SceneController> logger, Services.IMemberService memberService, Services.IResourceService resourceService, Services.ISceneService sceneService, Services.IConnectorService connectorService, Services.IDepartmentService departmentService, Services.ISceneConnectionService sceneConnections)
        {
            m_Logger = logger;
            m_Members = memberService;
            m_ResourceService = resourceService;
            m_SceneService = sceneService;
            m_ConnectorService = connectorService;

            m_DepartmentService = departmentService;

            m_SceneConnections = sceneConnections;
        }

        [HttpGet]
        public async Task<IActionResult> GetScenes([FromQuery] int from, [FromQuery] int size)
        {
            var response = new Saturn.Backends.Protocols.Prometheus.GetSceneResponse();
            var scenes = await m_SceneService.GetScenes(from, size);
            if (null == scenes)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }
            response.SceneBases.AddRange(scenes.Select(x => x.ToMessageBase()));
            response.ItemsCount = scenes.ItemsCount;

            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [HttpGet("{id}/blueprint")]
        public async Task<IActionResult> GetSceneBlueprint([FromRoute] long id)
        {
            var sceneId = id;
            if (0 >= sceneId)
            {
                return BadRequest();
            }

            var response = new Saturn.Backends.Protocols.Prometheus.GetSceneByIdBlueprintResponse();
            var scene = await m_SceneService.GetSceneBySceneId(sceneId);
            if (null == scene)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedRefresh);
                return OkWithMessage(response);
            }

            if (null == scene.Resource)
            {
                response.Scene = scene.ToMessage();
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            var blueprint = await m_ResourceService.GetBlueprintFromSceneResource(scene.Resource);
            if (null == blueprint)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.Blueprint = blueprint;
            response.Scene = scene.ToMessage();
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }


        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetScene([FromRoute] long id)
        {
            var sceneId = id;
            if (0 >= sceneId)
            {
                return BadRequest();
            }

            var response = new Saturn.Backends.Protocols.Prometheus.GetSceneByIdResponse();
            var scene = await m_SceneService.GetSceneBySceneId(sceneId);
            if (null == scene)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            response.Scene = scene.ToMessage();
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [HttpPost("{departmentId}/{departmentSceneFolderId}")]
        public async Task<IActionResult> CreateScene([FromRoute] long departmentId, [FromRoute] long departmentSceneFolderId, [FromBody] byte[] decoded)
        {
            if (!ModelState.IsValid || 0 >= departmentId || 0 >= departmentSceneFolderId)
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

            var response = new Saturn.Backends.Protocols.Prometheus.PostSceneResponse();
            Saturn.Backends.Protocols.Prometheus.PostSceneRequest request = null;
            try
            {
                request = Saturn.Backends.Protocols.Prometheus.PostSceneRequest.Parser.ParseFrom(decoded);
            }
            catch (System.Exception e)
            {
                m_Logger.LogCritical($"Protobuf, Message : Saturn.Backends.Protocols.Prometheus.PostSceneRequest, Exception : {e}");

                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedProtobuf);
                return OkWithMessage(response);
            }

            // check member base permission
            if (!member.IsAdministrator() && !member.HavePermission(Saturn.Backends.Protocols.Common.MEMBER_PERMISSION_KIND.SceneUpdate))
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedPermission);
                return OkWithMessage(response);
            }

            // check member department permission
            Models.Databases.Department department = await m_DepartmentService.GetAccessedDepartmentIncludeSceneFolders(member, departmentId);
            if (null == department)
            {
                // doens`t find department that includes member inside department lowers
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedPermission);
                return OkWithMessage(response);
            }

            // department scene folder doesn`t find from database.
            var departmentSceneFolder = await m_DepartmentService.GetSceneFolderById(departmentSceneFolderId);
            if (null == departmentSceneFolder)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            // 2020.10.14 임시 씬을 저장하기 위한 코드 추가.
            bool isTemporary = request.IsTemporary;

            // check name
            var existsScene = await m_SceneService.GetSceneBySceneName(request.Name);
            if (null != existsScene)
            {
                if (isTemporary)
                {
                    response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDuplicated);
                }
                else
                {
                    response.OverwriteScene = existsScene.ToMessageBase();
                    response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedOverwrite);
                }

                return OkWithMessage(response);
            }

            Models.Databases.Resource resource = null;
            IEnumerable<Models.Databases.Scene> referenceScenes = null;
            IEnumerable<Models.Databases.Resource> referenceResources = null;
            long canvasWidth = 0;
            long canvasHeight = 0;

            if (!isTemporary)
            {
                // make Resource 
                resource = await m_ResourceService.MakeResourceByMessage(request.SceneBlueprint, Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND.Scene, request.PreviewResource?.PreviewResourceId ?? 0);
                if (null == resource)
                {
                    response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Failed);
                    return OkWithMessage(response);
                }
                // get reference resources and scenes
                var reference = await GetUsedResourcesAsync(request.SceneBlueprint);
                if (null == reference.resources || null == reference.scenes)
                {
                    await m_ResourceService.RemoveResource(resource);

                    response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Failed);
                    return OkWithMessage(response);
                }

                reference.resources.Add(resource);

                referenceResources = reference.resources.Distinct();
                referenceScenes = reference.scenes.Distinct();

                canvasWidth = request.SceneBlueprint.Canvas.Size.Width;
                canvasHeight = request.SceneBlueprint.Canvas.Size.Height;
            }

            // insert database
            var scene = new Models.Databases.Scene();
            scene.Resource = resource;
            scene.CreatedSeconds = scene.UpdatedSeconds = DateTimeOffset.Now.ToUnixTimeSeconds();
            scene.Name = request.Name;
            scene.Width = canvasWidth;
            scene.Height = canvasHeight;
            scene.IsValified = !isTemporary;

            if (null != referenceResources)
            {
                scene.SceneResources = new List<Models.Databases.SceneResource>();
                scene.SceneResources.AddRange(referenceResources.Select(x => new Models.Databases.SceneResource { Scene = scene, Resource = x }));
            }

            if (null != referenceScenes)
            {
                scene.SceneConnections = new List<Models.Databases.SceneConnection>();
                scene.SceneConnections.AddRange(referenceScenes.Select(x => new Models.Databases.SceneConnection { Scene = scene, ConnectedScene = x }));
            }

            scene.DepartmentSceneFolder = departmentSceneFolder;

            scene = await m_SceneService.CreateScene(member, scene);
            if (null == scene)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.Scene = scene.ToMessage();
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [HttpPut("{sceneId}")]
        public async Task<IActionResult> ModifiedScene([FromRoute] long sceneId, [FromBody] byte[] decoded)
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

            var response = new Saturn.Backends.Protocols.Prometheus.PutSceneResponse();
            Saturn.Backends.Protocols.Prometheus.PutSceneRequest request = null;
            try
            {
                request = Saturn.Backends.Protocols.Prometheus.PutSceneRequest.Parser.ParseFrom(decoded);
            }
            catch (System.Exception e)
            {
                m_Logger.LogCritical($"Protobuf, Message : Saturn.Backends.Protocols.Prometheus.PutSceneRequest, Exception : {e}");

                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedProtobuf);
                return OkWithMessage(response);
            }

            // check member base permission
            if (!member.IsAdministrator() && !member.HavePermission(Saturn.Backends.Protocols.Common.MEMBER_PERMISSION_KIND.SceneUpdate))
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedPermission);
                return OkWithMessage(response);
            }

            // get scene 
            var scene = await m_SceneService.GetSceneBySceneId(request.SceneId);
            if (null == scene)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Failed);
                return OkWithMessage(response);
            }

            // make Resource 
            Models.Databases.Resource resource = null;
            if (null != scene.Resource)
            {
                resource = await m_ResourceService.ModifiedResourceByMessage(scene.Resource, request.SceneBlueprint, Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND.Scene, request.PreviewResource?.PreviewResourceId ?? 0);
            }
            else
            {
                resource = await m_ResourceService.MakeResourceByMessage(request.SceneBlueprint, Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND.Scene, request.PreviewResource?.PreviewResourceId ?? 0);
            }

            if (null == resource)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Failed);
                return OkWithMessage(response);
            }


            // get reference resources
            var reference = await GetUsedResourcesAsync(request.SceneBlueprint);
            if (null == reference.resources || null == reference.scenes)
            {
                await m_ResourceService.RemoveResource(resource);

                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Failed);
                return OkWithMessage(response);
            }
            reference.resources.Add(resource);

            var distinctResources = new Dictionary<long, Models.Databases.Resource>();
            reference.resources.ForEach(x =>
            {
                if (!distinctResources.ContainsKey(x.Id))
                {
                    distinctResources.Add(x.Id, x);
                }
            });

            var distinctScenes = new Dictionary<long, Models.Databases.Scene>();
            reference.scenes.ForEach(x =>
            {
                if (!distinctScenes.ContainsKey(x.Id))
                {
                    distinctScenes.Add(x.Id, x);
                }
            });

            var resources = distinctResources.Values;
            var scenes = distinctScenes.Values;

            // update database
            scene.Resource = resource;
            scene.UpdatedSeconds = DateTimeOffset.Now.ToUnixTimeSeconds();

            scene.Name = request.Name;
            scene.Width = request.SceneBlueprint.Canvas.Size.Width;
            scene.Height = request.SceneBlueprint.Canvas.Size.Height;

            scene.SceneResources = new List<Models.Databases.SceneResource>();
            scene.SceneResources.AddRange(resources.Select(x => new Models.Databases.SceneResource { Scene = scene, Resource = x }));

            scene.SceneConnections = new List<Models.Databases.SceneConnection>();
            scene.SceneConnections.AddRange(scenes.Select(x => new Models.Databases.SceneConnection { Scene = scene, ConnectedScene = x }));

            bool bUpdated = await m_SceneService.UpdateScene(member, scene);
            if (!bUpdated)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.Scene = scene.ToMessage();
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }


        [HttpDelete("{departmentId}/{departmentSceneFolderId}/{sceneId}")]
        public async Task<IActionResult> DeleteScene([FromRoute] long departmentId, [FromRoute] long departmentSceneFolderId, [FromRoute] long sceneId)
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

            // check member base permission
            var response = new Saturn.Backends.Protocols.Prometheus.DeleteSceneResponse();
            if (!member.IsAdministrator() && !member.HavePermission(Saturn.Backends.Protocols.Common.MEMBER_PERMISSION_KIND.SceneUpdate))
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedPermission);
                return OkWithMessage(response);
            }

            // check member department permission 
            var department = await m_DepartmentService.GetAccessedDepartmentIncludeSceneFolders(member, departmentId);
            if (null == department)
            {
                // doens`t find department that includes member inside department lowers
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedPermission);
                return OkWithMessage(response);
            }

            // department scene folder doesn`t find from database.
            var departmentSceneFolder = await m_DepartmentService.GetSceneFolderById(departmentSceneFolderId);
            if (null == departmentSceneFolder)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }




            // get scene from database
            var scene = await m_SceneService.GetSceneBySceneId(sceneId);
            if (null == scene)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }


            // 2020.12.11 씬 삭제를 다시 막도록 수정.

            // 결되어진 씬이 있다면 삭제 할 수 없다.
            var connections = await m_SceneConnections.GetSceneConnectionByScene(scene);
            if (null == connections)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            if (connections.Count > 0)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.DbRestrict);
                return OkWithMessage(response);
            }

            // 디바이스에 연결된 씬이 있다면 삭제 할 수 없다.
            var connectorsCount = await m_ConnectorService.GetConnectorsCountByScene(scene);
            if (connectorsCount > 0)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.DbRestrict);
                return OkWithMessage(response);
            }

            // delete 
            bool bSuccess = await m_SceneService.DeleteScene(member, scene);
            if (!bSuccess)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }



        private async Task<(List<Models.Databases.Resource> resources, List<Models.Databases.Scene> scenes)> GetUsedResourcesAsync(Saturn.Backends.Protocols.Common.SceneBlueprint blueprint)
        {
            var resources = new List<Models.Databases.Resource>();
            var referenceScenes = new List<Models.Databases.Scene>();
            foreach (var part in blueprint.Parts)
            {
                switch (part.Common.Kind)
                {
                    case Saturn.Backends.Protocols.Common.SCENE_COMPONENTS_KIND.Button:
                    case Saturn.Backends.Protocols.Common.SCENE_COMPONENTS_KIND.Image:
                    case Saturn.Backends.Protocols.Common.SCENE_COMPONENTS_KIND.Video:
                    case Saturn.Backends.Protocols.Common.SCENE_COMPONENTS_KIND.Pdf:
                    case Saturn.Backends.Protocols.Common.SCENE_COMPONENTS_KIND.Map:
                    case Saturn.Backends.Protocols.Common.SCENE_COMPONENTS_KIND.Clock:
                    case Saturn.Backends.Protocols.Common.SCENE_COMPONENTS_KIND.SlideImage:
                    case Saturn.Backends.Protocols.Common.SCENE_COMPONENTS_KIND.Subtitle:
                        break;
                    default:
                        continue;
                }

                Models.Databases.Resource resource = null;
                if (null != part.Button)
                {
                    if (null != part.Button.Resource)
                    {
                        resource = await m_ResourceService.GetResource(part.Button.Resource.ResourceId);
                        if (null != resource)
                        {
                            resources.Add(resource);
                        }
                    }

                    if (part.Button.SceneId > 0)
                    {
                        if (-1 == referenceScenes.FindIndex(x => x.Id == part.Button.SceneId))
                        {
                            var scene = await m_SceneService.GetSceneBySceneId(part.Button.SceneId);
                            if (null == scene)
                            {
                                return (null, null);
                            }

                            // resources.AddRange(scene.SceneResources.Select(x => x.Resource));
                            // referenceScenes.AddRange(scene.SceneConnections.Select(x => x.Scene));
                            referenceScenes.Add(scene);
                        }
                    }

                    continue;
                }

                if (null != part.Image && null != part.Image.Resource)
                {
                    resource = await m_ResourceService.GetResource(part.Image.Resource.ResourceId);
                    if (null != resource)
                    {
                        resources.Add(resource);
                    }
                    continue;
                }

                if (null != part.Video && null != part.Video.Resource)
                {
                    resource = await m_ResourceService.GetResource(part.Video.Resource.ResourceId);
                    if (null != resource)
                    {
                        resources.Add(resource);
                    }


                    if (part.Video.SceneId > 0)
                    {
                        if (-1 == referenceScenes.FindIndex(x => x.Id == part.Video.SceneId))
                        {
                            var scene = await m_SceneService.GetSceneBySceneId(part.Video.SceneId);
                            if (null == scene)
                            {
                                return (null, null);
                            }

                            referenceScenes.Add(scene);
                            // referenceScenes.AddRange(scene.SceneConnections.Select(x => x.Scene));
                            // resources.AddRange(scene.SceneResources.Select(x => x.Resource));
                        }
                    }
                    continue;
                }

                if (null != part.Document && null != part.Document.Resource)
                {
                    resource = await m_ResourceService.GetResource(part.Document.Resource.ResourceId);
                    if (null != resource)
                    {
                        resources.Add(resource);
                    }
                    continue;
                }

                if (null != part.Coordinate)
                {
                    if (null != part.Coordinate.Resource)
                    {
                        resource = await m_ResourceService.GetResource(part.Coordinate.Resource.ResourceId);
                        if (null != resource)
                        {
                            resources.Add(resource);
                        }
                    }

                    if (null != part.Coordinate.CoordinateRresource)
                    {
                        resource = await m_ResourceService.GetResource(part.Coordinate.CoordinateRresource.ResourceId);
                        if (null != resource)
                        {
                            resources.Add(resource);
                        }
                    }

                    if (null != part.Coordinate.SourceResource)
                    {
                        resource = await m_ResourceService.GetResource(part.Coordinate.SourceResource.ResourceId);
                        if (null != resource)
                        {
                            resources.Add(resource);
                        }
                    }

                    if (null != part.Coordinate.DestinationResource)
                    {
                        resource = await m_ResourceService.GetResource(part.Coordinate.DestinationResource.ResourceId);
                        if (null != resource)
                        {
                            resources.Add(resource);
                        }
                    }
                }

                if (null != part.Clock && null != part.Clock.Resource)
                {
                    resource = await m_ResourceService.GetResource(part.Clock.Resource.ResourceId);
                    if (null == resource)
                    {
                        return (null, null);
                    }

                    resources.Add(resource);
                }

                if (null != part.SlideImage && null != part.SlideImage.SlideImages && part.SlideImage.SlideImages.Count > 0)
                {
                    foreach (var slideImage in part.SlideImage.SlideImages)
                    {
                        if (null == slideImage.Resource)
                        {
                            continue;
                        }

                        resource = await m_ResourceService.GetResource(slideImage.Resource.ResourceId);
                        if (null == resource)
                        {
                            return (null, null);
                        }

                        resources.Add(resource);
                    }
                }

                if (null != part.Subtitle)
                {
                    var subtitleResource = part.Subtitle.Resource;
                    if (null != subtitleResource)
                    {
                        resource = await m_ResourceService.GetResource(subtitleResource.ResourceId);
                        if (null == resource)
                        {
                            return (null, null);
                        }

                        resources.Add(resource);
                    }
                }
            }

            var dispatchScene = blueprint.DispatchScene;
            if (null != dispatchScene && dispatchScene.IsUsed == true && dispatchScene.SceneId > 0)
            {
                if (-1 == referenceScenes.FindIndex(x => x.Id != dispatchScene.SceneId))
                {
                    var scene = await m_SceneService.GetSceneBySceneId(dispatchScene.SceneId);
                    if (null != scene)
                    {
                        referenceScenes.Add(scene);
                        // referenceScenes.AddRange(scene.SceneConnections.Select(x => x.Scene));
                        // resources.AddRange(scene.SceneResources.Select(x => x.Resource));
                    }
                }
            }

            return (resources, referenceScenes);
        }
    }
}
