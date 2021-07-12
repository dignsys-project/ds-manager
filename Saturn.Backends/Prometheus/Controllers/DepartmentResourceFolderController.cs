using System;
using System.Linq;
using System.Reflection;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Google.Protobuf;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Prometheus.Models.Databases.Extensions;
using Prometheus.Services;
using Saturn.Backends.Commons;
using Saturn.Backends.Commons.Extensions;
using Prometheus.Controllers.Extensions;
using System.Collections.Generic;
using Microsoft.AspNetCore.Http;

namespace Prometheus.Controllers
{
    namespace Extensions
    {
        public static class DepartmentResourceFolderControllerExtensions
        {
            public static Saturn.Backends.Protocols.Prometheus.GetDepartmentResourceFolderResponse.Types.Item ToResourceFolderItem(this Models.Databases.DepartmentNode m)
            {
                var message = new Saturn.Backends.Protocols.Prometheus.GetDepartmentResourceFolderResponse.Types.Item();
                message.DepartmentNodeBase = m.ToMessageBase();
                message.DepartmentBase = m.Department?.ToMessageBase();
                message.ResourceFolders.AddRange(m.Department?.DepartmentResourceFolders?.Select(x => x.ToMessage()));


                return message;
            }
        }
    }

    [Authorize]
    [ApiController]
    [Route("Department/{departmentId}/rf")]
    public class DepartmentResourceFolderController : AbstractBaseController
    {
        private readonly ILogger m_Logger = null;
        private readonly IDepartmentService m_DepartmentService = null;
        private readonly IMemberService m_Members = null;
        private readonly IResourceService m_Resources = null;

        public DepartmentResourceFolderController(ILogger<DepartmentResourceFolderController> logger, IDepartmentService departmentService, IMemberService members, IResourceService resourceService)
        {
            m_Logger = logger;
            m_DepartmentService = departmentService;
            m_Members = members;
            m_Resources = resourceService;
        }


        [HttpGet]
        public async Task<IActionResult> GetResourceFoldersByDepartmentId([FromRoute] long departmentId)
        {
            if (!ModelState.IsValid)
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

            var response = new Saturn.Backends.Protocols.Prometheus.GetDepartmentResourceFolderResponse();

            // check member base permission
            if (!member.IsAdministrator() && !member.HavePermission(Saturn.Backends.Protocols.Common.MEMBER_PERMISSION_KIND.SceneUpdate))
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedPermission);
                return OkWithMessage(response);
            }

            var accessDepartmentIds = new List<long>();

            if (!member.IsAdministrator())
            {
                var memberDepartmentIds = member.MemberDepartments.Select(x => x.DepartmentId).ToList();
                foreach (var memberDepartmentId in memberDepartmentIds)
                {
                    var department = await m_DepartmentService.GetDepartmentByDepartmentId(memberDepartmentId);
                    if (null != department)
                    {
                        if (!accessDepartmentIds.Contains(department.Id))
                        {
                            accessDepartmentIds.Add(department.Id);
                        }

                        foreach (var lowerDepartmentId in department.DepartmentLowers.Select(x => x.LowerDepartmentId))
                        {
                            if (!accessDepartmentIds.Contains(lowerDepartmentId))
                            {
                                accessDepartmentIds.Add(lowerDepartmentId);
                            }
                        }
                    }
                }
            }
            else
            {
                var departmentNodes = await m_DepartmentService.GetDepartmentNodes();
                if (null != departmentNodes)
                {
                    accessDepartmentIds.AddRange(departmentNodes.Select(x => x.DepartmentId));
                }
            }

            foreach (var accessDepartmentId in accessDepartmentIds)
            {
                var departmentNode = await m_DepartmentService.GetNodesForResourceFoldersByDepartmentId(accessDepartmentId);
                if (null != departmentNode)
                {
                    response.Items.Add(departmentNode.ToResourceFolderItem());
                }
            }

            response.Common = MakeCommon(response.Items.Count > 0 ? Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success : Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
            return OkWithMessage(response);
        }

        [HttpPost]
        public async Task<IActionResult> CreateResourceFolder([FromRoute] long departmentId, [FromBody] byte[] decoded)
        {

            if (!ModelState.IsValid || 0 >= departmentId)
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

            var response = new Saturn.Backends.Protocols.Prometheus.PostDepartmentResourceFolderResponse();
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

            Saturn.Backends.Protocols.Prometheus.PostDepartmentResourceFolderRequest request = null;
            try
            {
                request = Saturn.Backends.Protocols.Prometheus.PostDepartmentResourceFolderRequest.Parser.ParseFrom(decoded);
            }
            catch (System.Exception e)
            {
                m_Logger.LogCritical($"Protobuf, Message : Saturn.Backends.Protocols.Prometheus.PostDepartmentResourceFolderRequest, Exception : {e}");

                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedProtobuf);
                return OkWithMessage(response);
            }

            var resourceFolderName = request.Name;

            // check same folder name
            var existsResourceFolder = await m_DepartmentService.GetResourceFolderByName(departmentId, resourceFolderName, request.ParentDepartmentResourceFolderId);
            if (null != existsResourceFolder)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDuplicated);
                return OkWithMessage(response);
            }

            Models.Databases.DepartmentResourceFolder parentResourceFolder = null;
            var parentResourceFolderId = request.ParentDepartmentResourceFolderId;
            if (parentResourceFolderId > 0)
            {
                parentResourceFolder = await m_DepartmentService.GetResourceFolderById(parentResourceFolderId);
            }

            // create resoure folder
            var resourceFolder = await m_DepartmentService.CreateResourceFolder(member, department, resourceFolderName, parentResourceFolder);
            if (null == resourceFolder)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.DepartmentResourceFolder = resourceFolder.ToMessage();
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [HttpPut("{departmentResourceFolderId}")]
        public async Task<IActionResult> PutScenesToDepartmentResourceFolderId([FromRoute] long departmentId, [FromRoute] long departmentResourceFolderId, [FromBody] byte[] decoded)
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

            Saturn.Backends.Protocols.Prometheus.PutDepartmentResourceFolderRequest request = null;
            try
            {
                request = Saturn.Backends.Protocols.Prometheus.PutDepartmentResourceFolderRequest.Parser.ParseFrom(decoded);
            }
            catch (System.Exception e)
            {
                m_Logger.LogCritical($"Protobuf, Message : Saturn.Backends.Protocols.Prometheus.PutDepartmentResourceFolderRequest, Exception : {e}");

                return BadRequest();
            }

            var resourceIds = request.ResourceIds.Distinct();
            if (0 >= resourceIds.Count())
            {
                return BadRequest();
            }

            var response = new Saturn.Backends.Protocols.Prometheus.PutDepartmentResourceFolderResponse();
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

            // have resource folder
            var resourceFolder = department.DepartmentResourceFolders.Find(x => x.Id == departmentResourceFolderId);
            if (null == resourceFolder)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedRefresh);
                return OkWithMessage(response);
            }

            resourceFolder = await m_DepartmentService.GetResourceFolderById(departmentResourceFolderId);
            if (null == resourceFolder)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedRefresh);
                return OkWithMessage(response);
            }

            // update resources to department folder 
            var resources = await m_Resources.UpdateResourcesToFolder(member, resourceIds, resourceFolder);
            if (null == resources || 0 >= resources.Count())
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.ResourceIds.AddRange(resources.Select(x => x.Id));
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }


        [HttpPatch("{departmentResourceFolderId}")]
        public async Task<IActionResult> PatchDepartmentResourceFolderNameChanged([FromRoute] long departmentId, [FromRoute] long departmentResourceFolderId, [FromBody] byte[] decoded)
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

            // check member base permission
            if (!member.IsAdministrator() && !member.HavePermission(Saturn.Backends.Protocols.Common.MEMBER_PERMISSION_KIND.SceneUpdate))
            {
                return StatusCode(StatusCodes.Status406NotAcceptable);
            }


            Saturn.Backends.Protocols.Prometheus.PatchDepartmentResourceFolderRequest request = null;
            try
            {
                request = Saturn.Backends.Protocols.Prometheus.PatchDepartmentResourceFolderRequest.Parser.ParseFrom(decoded);
            }
            catch (System.Exception e)
            {
                m_Logger.LogCritical($"Protobuf, Message : Saturn.Backends.Protocols.Prometheus.PatchDepartmentResourceFolderRequest, Exception : {e}");

                return BadRequest();
            }

            var response = new Saturn.Backends.Protocols.Prometheus.PatchDepartmentResourceFolderResponse();
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

            // have scene folder
            var resourceFolder = department.DepartmentResourceFolders.Find(x => x.Id == departmentResourceFolderId);
            if (null == resourceFolder)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedRefresh);
                return OkWithMessage(response);
            }

            var resourceFolderName = request.Name;

            // check same folder name
            var existsResourceFolder = await m_DepartmentService.GetResourceFolderByName(departmentId, resourceFolderName, resourceFolder.ParentDepartmentResourceFolderId);
            if (null != existsResourceFolder && existsResourceFolder.Id != resourceFolder.Id)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDuplicated);
                return OkWithMessage(response);
            }

            // get resource folder 
            resourceFolder = await m_DepartmentService.GetResourceFolderById(departmentResourceFolderId);
            if (null == resourceFolder)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedRefresh);
                return OkWithMessage(response);
            }

            // create resource folder
            var bSuccess = await m_DepartmentService.UpdateResourceFolder(member, resourceFolder, resourceFolderName);
            if (!bSuccess)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.DepartmentResourceFolder = resourceFolder.ToMessage();
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }


        [HttpDelete("{departmentResourceFolderId}")]
        public async Task<IActionResult> DeleteResourceFolder([FromRoute] long departmentId, [FromRoute] long departmentResourceFolderId)
        {
            if (!ModelState.IsValid || 0 >= departmentId)
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

            var response = new Saturn.Backends.Protocols.Prometheus.DeleteDepartmentResourceFolderResponse();

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

            // have resource folder
            var resourceFolder = department.DepartmentResourceFolders.Find(x => x.Id == departmentResourceFolderId);
            if (null == resourceFolder)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedRefresh);
                return OkWithMessage(response);
            }

            var hasResources = await m_DepartmentService.HasResourceFolderById(departmentResourceFolderId);
            if (hasResources)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.DbRestrict);
                return OkWithMessage(response);
            }

            // get resource folder 
            resourceFolder = await m_DepartmentService.GetResourceFolderById(departmentResourceFolderId);
            if (null == resourceFolder)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedRefresh);
                return OkWithMessage(response);
            }

            // remove resoure folder
            var bSuccess = await m_DepartmentService.RemoveResourceFolder(member, resourceFolder);
            if (!bSuccess)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [HttpDelete("{departmentResourceFolderId}/resource/{resourceId}")]
        public async Task<IActionResult> DeleteResource([FromRoute] long departmentId, [FromRoute] long departmentResourceFolderId, [FromRoute] long resourceId)
        {
            if (!ModelState.IsValid || 0 > departmentId || 0 > departmentResourceFolderId)
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

            var response = new Saturn.Backends.Protocols.Prometheus.DeleteDepartmentResourceFolderResourceResponse();

            // check member base permission
            if (!member.IsAdministrator() && !member.HavePermission(Saturn.Backends.Protocols.Common.MEMBER_PERMISSION_KIND.SceneUpdate))
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedPermission);
                return OkWithMessage(response);
            }

            // administrator remove resource 
            if (member.IsAdministrator() && (0 == departmentId || 0 == departmentResourceFolderId))
            {
                response.Common = await RemoveByAdministrator(resourceId);

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

            // have resource folder
            var resourceFolder = department.DepartmentResourceFolders.Find(x => x.Id == departmentResourceFolderId);
            if (null == resourceFolder)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedRefresh);
                return OkWithMessage(response);
            }

            var resource = await m_Resources.GetItemById(resourceId);
            if (null == resource)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            if (resource.DepartmentResourceFolderId != departmentResourceFolderId)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedPermission);
                return OkWithMessage(response);
            }

            // check used resources 
            var sceneResources = await m_Resources.GetSceneResourcesByResourceId(resource.Id);
            if (sceneResources == null)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            if (0 < sceneResources.Count)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.DbRestrict);
                return OkWithMessage(response);
            }

            // remove resource
            bool bSuccess = await m_Resources.RemoveResource(resource);
            if (!bSuccess)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        private async Task<Saturn.Backends.Protocols.Common.CommonStatus> RemoveByAdministrator(long resourceId)
        {

            var resource = await m_Resources.GetItemById(resourceId);
            if (null == resource)
            {
                return MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
            }

            var sceneResources = await m_Resources.GetSceneResourcesByResourceId(resource.Id);
            if (sceneResources == null)
            {
                return MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
            }

            if (0 < sceneResources.Count)
            {
                return MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.DbRestrict);
            }

            bool bSuccess = await m_Resources.RemoveResource(resource);
            if (!bSuccess)
            {
                return MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
            }

            return MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
        }
    }

}
