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
    [Route("scene/folder/{departmentSceneFolderId}/scene")]
    public class SceneFolderController : AbstractBaseController
    {
        private readonly ILogger m_Logger = null;
        private readonly Services.IMemberService m_Members = null;
        private readonly Services.IResourceService m_ResourceService = null;
        private readonly Services.ISceneService m_SceneService = null;

        private readonly Services.IConnectorService m_ConnectorService = null;
        public SceneFolderController(ILogger<SceneController> logger, Services.IMemberService memberService, Services.IResourceService resourceService, Services.ISceneService sceneService, Services.IConnectorService connectorService)
        {
            m_Logger = logger;
            m_Members = memberService;
            m_ResourceService = resourceService;
            m_SceneService = sceneService;
            m_ConnectorService = connectorService;
        }

        [HttpGet]
        public async Task<IActionResult> GetSceneFoldersItemsByDepartmentSceneFolderId([FromRoute] long departmentSceneFolderId, [FromQuery] int from, [FromQuery] int size)
        {
            if (!ModelState.IsValid || 0 > departmentSceneFolderId)
            {
                return BadRequest();
            }


            var response = new Saturn.Backends.Protocols.Prometheus.GetSceneFolderScenesResponse();
            var scenes = await m_SceneService.GetScenesByFolderId(departmentSceneFolderId, from, size);
            if (null == scenes)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.SceneBases.AddRange(scenes.Select(x => x.ToMessageBase()));
            response.ItemsCount = scenes.ItemsCount;

            response.Common = MakeCommon(response.SceneBases.Count > 0 ? Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success : Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
            return OkWithMessage(response);
        }

    }
}
