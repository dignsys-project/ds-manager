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
    public class ValidateController : AbstractBaseController
    {
        private readonly ILogger m_Logger = null;
        private readonly Services.IMemberService m_Members = null;
        private readonly Services.IResourceService m_Resources = null;
        private readonly Services.ISceneService m_Scenes = null;
        public ValidateController(ILogger<SceneController> logger, Services.IMemberService memberService, Services.IResourceService resourceService, Services.ISceneService sceneService)
        {
            m_Logger = logger;
            m_Members = memberService;
            m_Resources = resourceService;
            m_Scenes = sceneService;
        }

        [HttpGet("scene")]
        public async Task<IActionResult> GetScenes([FromQuery] int from, [FromQuery] int size)
        {

            var response = new Saturn.Backends.Protocols.Prometheus.GetValidateSceneResponse();
            var scenes = await m_Scenes.GetItems(from, size);
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

        [Obsolete]
        [HttpGet("resource")]
        public async Task<IActionResult> GetResources([FromQuery] int from, [FromQuery] int size)
        {
            var response = new Saturn.Backends.Protocols.Prometheus.GetValidateResourceResponse();

            var items = await m_Resources.GetItems(from, size);
            if (null == items)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            if (items.Count <= 0)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            response.Resources.AddRange(items.Select(x => x.ToMessage()));
            response.ItemsCount = items.ItemsCount;
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [HttpGet("resource/{resourceId}")]
        public async Task<IActionResult> GetResourceById([FromRoute] long resourceId, [FromQuery] int from, [FromQuery] int size)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var response = new Saturn.Backends.Protocols.Prometheus.GetValidateResourceByResourceIdResponse();

            var item = await m_Resources.GetItemById(resourceId);
            if (null == item)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            var sceneResources = await m_Resources.GetPaginatedSceneResourceByResourceId(item.Id, from, size);
            if (sceneResources != null)
            {
                var distinctScenes = new Dictionary<long, Models.Databases.Scene>();
                sceneResources.ForEach(x =>
                {
                    var scene = x.Scene;
                    if (!distinctScenes.ContainsKey(scene.Id))
                    {
                        distinctScenes.Add(scene.Id, scene);
                    }
                });

                response.SceneBases.AddRange(distinctScenes.Values.Select(x => x.ToMessageBase()));
                response.ItemCount = sceneResources.ItemsCount;
            }
            else
            {
                response.ItemCount = 0;
            }

            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }
    }
}
