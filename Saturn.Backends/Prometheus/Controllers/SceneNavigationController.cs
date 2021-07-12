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
    [Route("scene/{connectedSceneId}/navigation")]
    public class SceneNavigationController : AbstractBaseController
    {
        private readonly ILogger m_Logger = null;
        private readonly Services.ISceneConnectionService m_SceneConnections = null;
        private readonly Services.ISceneService m_Scenes = null;
        public SceneNavigationController(ILogger<SceneNavigationController> logger, Services.ISceneConnectionService sceneConnections, Services.ISceneService scenes)
        {
            m_Logger = logger;
            m_Scenes = scenes;

            m_SceneConnections = sceneConnections;
        }

        [HttpGet]
        public async Task<IActionResult> GetSceneNavigationByConnectedSceneId([FromRoute] long connectedSceneId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var response = new Saturn.Backends.Protocols.Prometheus.GetSceneNavigationResponse();
            var scene = await m_Scenes.GetSceneBySceneId(connectedSceneId);
            if (null == scene)
            {
                return NoContent();
            }

            var sourceScenes = await m_SceneConnections.GetSceneConnectionByScene(scene);
            response.Scene = scene.ToMessage();
            if (null != sourceScenes)
            {
                response.SourceSceneBases.AddRange(sourceScenes.Select(x => x.Scene.ToMessageBase()));
            }

            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

    }
}
