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

namespace Prometheus.Controllers
{
    namespace Extensions
    {
        public static class DepartmentSceneFolderControllerExtensions
        {
            public static Saturn.Backends.Protocols.Prometheus.GetDepartmentSceneFolderResponse.Types.Item ToSceneFolderItem(this Models.Databases.DepartmentNode m)
            {
                var message = new Saturn.Backends.Protocols.Prometheus.GetDepartmentSceneFolderResponse.Types.Item();
                message.DepartmentNodeBase = m.ToMessageBase();
                if (null != m.Department)
                {
                    message.DepartmentBase = m.Department?.ToMessageBase();

                    if (null != m.Department?.DepartmentSceneFolders)
                    {
                        message.SceneFolders.AddRange(m.Department?.DepartmentSceneFolders?.Select(x => x.ToMessage()));
                    }
                }

                return message;
            }
        }
    }

    [Authorize]
    [ApiController]
    [Route("Department/{departmentId}/sf")]
    public class DepartmentSceneFolderController : AbstractBaseController
    {
        private readonly ILogger m_Logger = null;
        private readonly IDepartmentService m_DepartmentService = null;

        private readonly ISceneService m_SceneService = null;

        private readonly IMemberService m_Members = null;

        public DepartmentSceneFolderController(ILogger<DepartmentSceneFolderController> logger, IDepartmentService departmentService, IMemberService members, ISceneService sceneService)
        {
            m_Logger = logger;
            m_SceneService = sceneService;

            m_DepartmentService = departmentService;
            m_Members = members;
        }


        [HttpGet]
        public async Task<IActionResult> GetSceneFoldersByDepartmentId([FromRoute] long departmentId)
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

            var response = new Saturn.Backends.Protocols.Prometheus.GetDepartmentSceneFolderResponse();

            // check member base permission
            if (!member.IsAdministrator() && !member.HavePermission(Saturn.Backends.Protocols.Common.MEMBER_PERMISSION_KIND.SceneSelect))
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedPermission);
                return OkWithMessage(response);
            }

            var accessDepartmentIds = new List<long>();

            if (!member.IsAdministrator())
            {
                // Get department that member includes
                var memberDepartmentIds = member.MemberDepartments.Select(x => x.DepartmentId).ToList();
                foreach (var memberDepartmentId in memberDepartmentIds)
                {
                    // Get department detail for DepartmentLowers
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
                var departmentNode = await m_DepartmentService.GetNodesForSceneFoldersByDepartmentId(accessDepartmentId);
                if (null != departmentNode)
                {
                    response.Items.Add(departmentNode.ToSceneFolderItem());
                }
            }

            response.Common = MakeCommon(response.Items.Count > 0 ? Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success : Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
            return OkWithMessage(response);

        }

        [HttpPost]
        public async Task<IActionResult> CreateSceneFolder([FromRoute] long departmentId, [FromBody] byte[] decoded)
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

            var response = new Saturn.Backends.Protocols.Prometheus.PostDepartmentSceneFolderResponse();
            Saturn.Backends.Protocols.Prometheus.PostDepartmentSceneFolderRequest request = null;
            try
            {
                request = Saturn.Backends.Protocols.Prometheus.PostDepartmentSceneFolderRequest.Parser.ParseFrom(decoded);
            }
            catch (System.Exception e)
            {
                m_Logger.LogCritical($"Protobuf, Message : Saturn.Backends.Protocols.Prometheus.PostDepartmentSceneFolderRequest, Exception : {e}");

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


            var sceneFolderName = request.Name;

            // check same folder name
            var existsSceneFolder = await m_DepartmentService.GetSceneFolderByName(departmentId, sceneFolderName, request.ParentDepartmentSceneFolderId);
            if (null != existsSceneFolder)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDuplicated);
                return OkWithMessage(response);
            }

            Models.Databases.DepartmentSceneFolder parentSceneFolder = null;
            var parentSceneFolderId = request.ParentDepartmentSceneFolderId;
            if (parentSceneFolderId > 0)
            {
                parentSceneFolder = await m_DepartmentService.GetSceneFolderById(parentSceneFolderId);
            }

            // create scene folder
            var sceneFolder = await m_DepartmentService.CreateSceneFolder(member, department, sceneFolderName, parentSceneFolder);
            if (null == sceneFolder)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.DepartmentSceneFolder = sceneFolder.ToMessage();
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [HttpPatch("{departmentSceneFolderId}")]
        public async Task<IActionResult> PatchDepartmentSceneFolderNameChanged([FromRoute] long departmentId, [FromRoute] long departmentSceneFolderId, [FromBody] byte[] decoded)
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

            Saturn.Backends.Protocols.Prometheus.PatchDepartmentSceneFolderRequest request = null;
            try
            {
                request = Saturn.Backends.Protocols.Prometheus.PatchDepartmentSceneFolderRequest.Parser.ParseFrom(decoded);
            }
            catch (System.Exception e)
            {
                m_Logger.LogCritical($"Protobuf, Message : Saturn.Backends.Protocols.Prometheus.PatchDepartmentSceneFolderRequest, Exception : {e}");

                return BadRequest();
            }

            var response = new Saturn.Backends.Protocols.Prometheus.PatchDepartmentSceneFolderResponse();

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

            // have scene folder
            var sceneFolder = department.DepartmentSceneFolders.Find(x => x.Id == departmentSceneFolderId);
            if (null == sceneFolder)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedRefresh);
                return OkWithMessage(response);
            }

            var sceneFolderName = request.Name;

            // check same folder name
            var existsSceneFolder = await m_DepartmentService.GetSceneFolderByName(departmentId, sceneFolderName, sceneFolder.ParentDepartmentSceneFolderId);
            if (null != existsSceneFolder && existsSceneFolder.Id != sceneFolder.Id)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDuplicated);
                return OkWithMessage(response);
            }

            // get scene folder 
            sceneFolder = await m_DepartmentService.GetSceneFolderById(departmentSceneFolderId);
            if (null == sceneFolder)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedRefresh);
                return OkWithMessage(response);
            }

            // create scene folder
            var bSuccess = await m_DepartmentService.UpdateSceneFolder(member, sceneFolder, sceneFolderName);
            if (!bSuccess)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.DepartmentSceneFolder = sceneFolder.ToMessage();
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }


        [HttpPut("{departmentSceneFolderId}")]
        public async Task<IActionResult> PutScenesToDepartmentSceneFolderId([FromRoute] long departmentId, [FromRoute] long departmentSceneFolderId, [FromBody] byte[] decoded)
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

            Saturn.Backends.Protocols.Prometheus.PutDepartmentSceneFolderRequest request = null;
            try
            {
                request = Saturn.Backends.Protocols.Prometheus.PutDepartmentSceneFolderRequest.Parser.ParseFrom(decoded);
            }
            catch (System.Exception e)
            {
                m_Logger.LogCritical($"Protobuf, Message : Saturn.Backends.Protocols.Prometheus.PutDepartmentSceneFolderRequest, Exception : {e}");

                return BadRequest();
            }

            var sceneIds = request.SceneIds.Distinct();
            if (0 >= sceneIds.Count())
            {
                return BadRequest();
            }

            var response = new Saturn.Backends.Protocols.Prometheus.PutDepartmentSceneFolderResponse();
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

            // m_DepartmentService.GetSceneFolderById(departmentF)

            // have scene folder
            var sceneFolder = department.DepartmentSceneFolders.Find(x => x.Id == departmentSceneFolderId);
            if (null == sceneFolder)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedRefresh);
                return OkWithMessage(response);
            }

            // get scene folder 
            sceneFolder = await m_DepartmentService.GetSceneFolderById(departmentSceneFolderId);
            if (null == sceneFolder)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedRefresh);
                return OkWithMessage(response);
            }

            // update scenes to departhment folder
            var scenes = await m_SceneService.UpdateScenesToFolder(member, sceneIds, sceneFolder);
            if (null == scenes || 0 >= scenes.Count)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.SceneIds.AddRange(scenes.Select(x => x.Id));
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [HttpDelete("{departmentSceneFolderId}")]
        public async Task<IActionResult> DeleteSceneFolder([FromRoute] long departmentId, [FromRoute] long departmentSceneFolderId)
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

            var response = new Saturn.Backends.Protocols.Prometheus.DeleteDepartmentSceneFolderResponse();

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

            // have scene folder
            var sceneFolder = department.DepartmentSceneFolders.Find(x => x.Id == departmentSceneFolderId);
            if (null == sceneFolder)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedRefresh);
                return OkWithMessage(response);
            }

            var hasFolders = await m_DepartmentService.HasSceneFoldersById(departmentSceneFolderId);
            if (hasFolders)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.DbRestrict);
                return OkWithMessage(response);
            }

            // get scene folder 
            sceneFolder = await m_DepartmentService.GetSceneFolderById(departmentSceneFolderId);
            if (null == sceneFolder)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedRefresh);
                return OkWithMessage(response);
            }

            bool bHasScenes = await m_SceneService.HasScenesByFolderId(departmentSceneFolderId);
            if (bHasScenes)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.DbRestrict);
                return OkWithMessage(response);
            }

            // delete scene folder
            var bSuccess = await m_DepartmentService.RemoveSceneFolder(member, sceneFolder);
            if (!bSuccess)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

    }
}
