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
    [Route("resource/folder/{departmentResourceFolderId}/resource")]
    public class ResourceFolderController : AbstractBaseController
    {
        private readonly ILogger m_Logger = null;
        private readonly Services.IMemberService m_Members = null;
        private readonly Services.IResourceService m_ResourceService = null;

        private readonly Services.IDepartmentService m_DepartmentService = null;
        public ResourceFolderController(ILogger<SceneController> logger, Services.IMemberService memberService, Services.IResourceService resourceService, Services.IDepartmentService departmentService)
        {
            m_Logger = logger;
            m_Members = memberService;
            m_ResourceService = resourceService;

            m_DepartmentService = departmentService;
        }

        [HttpGet]
        public async Task<IActionResult> GetResourceFoldersItemsByDepartmentResourceFolderId([FromRoute] long departmentResourceFolderId, [FromQuery] int from, [FromQuery] int size, [FromQuery] Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND? kind)
        {
            if (!ModelState.IsValid || 0 > departmentResourceFolderId)
            {
                return BadRequest();
            }

            var response = new Saturn.Backends.Protocols.Prometheus.GetResourceFolderResourcesResponse();

            var resources = await m_ResourceService.GetResourcesByFolderId(departmentResourceFolderId, from, size, kind);
            if (null == resources)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.Resources.AddRange(resources.Select(x => x.ToMessage()));
            response.ItemCount = resources.ItemsCount;

            response.Common = MakeCommon(response.Resources.Count > 0 ? Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success : Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
            return OkWithMessage(response);
        }
    }
}
