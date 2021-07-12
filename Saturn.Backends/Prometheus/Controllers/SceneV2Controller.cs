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
    [Route("scene/v2")]
    public class SceneV2Controller : AbstractBaseController
    {
        private readonly ILogger m_Logger = null;
        private readonly Services.IMemberService m_Members = null;
        private readonly Services.IResourceService m_ResourceService = null;
        private readonly Services.ISceneService m_SceneService = null;
        private readonly Services.IConnectorService m_ConnectorService = null;
        private readonly Services.IDepartmentService m_DepartmentService = null;
        public SceneV2Controller(ILogger<SceneV2Controller> logger, Services.IMemberService memberService, Services.IResourceService resourceService, Services.ISceneService sceneService, Services.IConnectorService connectorService, Services.IDepartmentService departmentService)
        {
            m_Logger = logger;
            m_Members = memberService;
            m_ResourceService = resourceService;
            m_SceneService = sceneService;
            m_ConnectorService = connectorService;

            m_DepartmentService = departmentService;
        }

        [HttpGet("{sceneId}/blueprint")]
        public async Task<IActionResult> GetSceneBlueprint([FromRoute] long sceneId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var response = new Saturn.Backends.Protocols.Prometheus.GetSceneByIdBlueprintV2Response();
            var scene = await m_SceneService.GetSceneBySceneId(sceneId);
            if (null == scene)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedRefresh);
                return OkWithMessage(response);
            }

            if (scene.Resource is null)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            var blueprint = await m_ResourceService.GetBlueprintFromSceneResource(scene.Resource);
            if (null == blueprint)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.SceneBase = scene.ToMessageBase();
            response.Blueprint = blueprint;

            if (null != scene.SceneResources)
            {
                response.Resources.AddRange(scene.SceneResources.Select(x => x.Resource.ToMessage()));
            }

            if (null != scene.SceneConnections)
            {
                response.SceneBases.AddRange(scene.SceneConnections.Select(x => x.ConnectedScene.ToMessageBase()));
            }

            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }
    }
}
