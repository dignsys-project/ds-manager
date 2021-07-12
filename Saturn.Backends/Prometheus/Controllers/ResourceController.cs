using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.Logging;
using Prometheus.Models.Databases.Extensions;
using Saturn.Backends.Commons;
using Saturn.Backends.Commons.Extensions;

namespace Prometheus.Controllers
{
    [Authorize]
    [Route("[controller]")]
    [ApiController]
    public class ResourceController : AbstractBaseController
    {
        private readonly ILogger m_Logger = null;
        private readonly Services.IResourceService m_Resource = null;

        private readonly Services.ISceneService m_Scenes = null;

        private readonly Services.IMemberService m_Members = null;

        private readonly Services.IDepartmentService m_DepartmentService = null;

        public ResourceController(ILogger<ResourceController> logger, Services.IResourceService resources, Services.ISceneService scenes, Services.IMemberService members, Services.IDepartmentService departmentService)
        {
            m_Logger = logger;
            m_Resource = resources;
            m_Scenes = scenes;
            m_Members = members;
            m_DepartmentService = departmentService;
        }

        [HttpGet]
        public async Task<IActionResult> GetItems([FromQuery] int from, [FromQuery] int size, [FromQuery] Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND? kind)
        {
            var response = new Saturn.Backends.Protocols.Prometheus.GetResourcesResponse();

            var items = await m_Resource.GetPaginatedResourceByKind(from, size, kind);
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
            response.PagesCount = items.PagesCount;
            response.ItemsCount = items.ItemsCount;
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [HttpGet("{departmentId}/{departmentResourceFolderId}/{resourceId}")]
        public async Task<IActionResult> GetResourceByResourceId([FromRoute] long departmentId, [FromRoute] long departmentResourceFolderId, [FromRoute] long resourceId)
        {
            if (!ModelState.IsValid || 0 >= departmentId || 0 >= departmentResourceFolderId)
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

            var response = new Saturn.Backends.Protocols.Prometheus.GetResourceResponse();

            // check member base permission
            if (!member.IsAdministrator() && !member.HavePermission(Saturn.Backends.Protocols.Common.MEMBER_PERMISSION_KIND.SceneUpdate))
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedPermission);
                return OkWithMessage(response);
            }

            // check member department permission
            Models.Databases.Department department = await m_DepartmentService.GetAccessedDepartmentIncludeResourceFolders(member, departmentId);
            if (null == department)
            {
                // doens`t find department that includes member inside department lowers
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedPermission);
                return OkWithMessage(response);
            }

            // department scene folder doesn`t find from database.
            var departmentResourceFolder = await m_DepartmentService.GetResourceFolderById(departmentResourceFolderId);
            if (null == departmentResourceFolder)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedPermission);
                return OkWithMessage(response);
            }

            var resource = await m_Resource.GetResource(resourceId);
            if (null == resource)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            response.Resource = resource.ToMessage();

            return OkWithMessage(response);
        }

        [HttpPost("{departmentId}/{departmentResourceFolderId}"), DisableRequestSizeLimit]
        public async Task<IActionResult> Upload([FromRoute] long departmentId, [FromRoute] long departmentResourceFolderId, [FromQuery] long previewResourceId = 0)
        {
            if (!ModelState.IsValid || 0 >= departmentId || 0 >= departmentResourceFolderId)
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

            var file = Request.Form?.Files.FirstOrDefault();
            if (null == file)
            {
                return BadRequest();
            }

            var response = new Saturn.Backends.Protocols.Enceladus.PostResourceResponse();

            // check member base permission
            if (!member.IsAdministrator() && !member.HavePermission(Saturn.Backends.Protocols.Common.MEMBER_PERMISSION_KIND.SceneUpdate))
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedPermission);
                return OkWithMessage(response);
            }

            // check member department permission
            Models.Databases.Department department = await m_DepartmentService.GetAccessedDepartmentIncludeResourceFolders(member, departmentId);
            if (null == department)
            {
                // doens`t find department that includes member inside department lowers
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedPermission);
                return OkWithMessage(response);
            }

            // department scene folder doesn`t find from database.
            var departmentResourceFolder = await m_DepartmentService.GetResourceFolderById(departmentResourceFolderId);
            if (null == departmentResourceFolder)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            var resource = await m_Resource.MakeResourceByFormFile(file, departmentResourceFolder, previewResourceId);
            if (null == resource)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.Resource = resource.ToMessage();
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [HttpPut("{departmentId}/{departmentResourceFolderId}/{ResourceId}"), DisableRequestSizeLimit]
        public async Task<IActionResult> UpdateResource([FromRoute] long departmentId, [FromRoute] long departmentResourceFolderId, [FromRoute] long resourceId, [FromQuery] long previewResourceId = 0)
        {
            if (!ModelState.IsValid || 0 >= departmentId || 0 >= departmentResourceFolderId || 0 >= resourceId)
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

            var file = Request.Form?.Files.FirstOrDefault();
            if (null == file)
            {
                return BadRequest();
            }

            var response = new Saturn.Backends.Protocols.Prometheus.PutResourceResponse();

            // check member base permission
            if (!member.IsAdministrator() && !member.HavePermission(Saturn.Backends.Protocols.Common.MEMBER_PERMISSION_KIND.SceneUpdate))
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedPermission);
                return OkWithMessage(response);
            }

            // check member department permission
            Models.Databases.Department department = await m_DepartmentService.GetAccessedDepartmentIncludeResourceFolders(member, departmentId);
            if (null == department)
            {
                // doens`t find department that includes member inside department lowers
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedPermission);
                return OkWithMessage(response);
            }

            // department scene folder doesn`t find from database.
            var departmentResourceFolder = await m_DepartmentService.GetResourceFolderById(departmentResourceFolderId);
            if (null == departmentResourceFolder)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            var resource = await m_Resource.GetResource(resourceId);
            if (null == resource)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            var bSuccess = await m_Resource.UpdateResourceByFormFile(resource, file, previewResourceId);
            if (!bSuccess)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.Resource = resource.ToMessage();
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }
    }
}