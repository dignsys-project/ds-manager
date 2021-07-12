using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Prometheus.Models.Databases;
using Prometheus.Models.Databases.Extensions;

namespace Prometheus.Services
{
    public interface IDepartmentService
    {
        // Get Member have department that is possible to access
        Task<Models.Databases.Department> GetAccessedDepartmentIncludeResourceFolders(Models.Databases.Member member, long departmentId);

        Task<Models.Databases.Department> GetAccessedDepartmentIncludeSceneFolders(Models.Databases.Member member, long departmentId);
        Task<Models.Databases.Department> SelectDepartmentByName(string name);
        Task<Models.Databases.Department> GetDepartmentByDepartmentId(long departmentId);

        Task<Models.Databases.DepartmentNode> GetNodesForResourceFoldersByDepartmentId(long departmentId);
        Task<Models.Databases.DepartmentNode> GetNodesForSceneFoldersByDepartmentId(long departmentId);

        // Get connectors by departmentId
        Task<List<Models.Databases.Connector>> GetConnectorsIncludeLowersByDepartmentId(long departmentId);
        Task<List<long>> GetLowersDepartmentIdByDepartmentId(long departmentId);

        // Update department name
        Task<bool> UpdateDepartmentName(Models.Databases.Member member, Models.Databases.Department department, string name);

        // Get Department Nodes
        Task<List<Models.Databases.DepartmentNode>> GetDepartmentNodes();

        // Get Department Node by DepartmentNodeId
        Task<Models.Databases.DepartmentNode> SelectDepartmentNodesById(long id);


        // Create Department with DepartmentNode
        Task<Models.Databases.DepartmentNode> CreateDepartmentWithNodeId(Models.Databases.Member member, string departmentNome, long parentDepartmentNodeId);

        // Update DepartmentNode
        Task<bool> UpdateDepartmentNode(Models.Databases.Member member, Models.Databases.DepartmentNode departmentNode, long newParentDepartmentNodeId);

        // Delete DepartmentNode
        Task<bool> DeleteDepartmentNode(Models.Databases.Member member, Models.Databases.DepartmentNode departmentNode);

        // Get Department Resource Folder
        Task<DepartmentResourceFolder> GetResourceFolderByName(long departmentId, string name, long? parentDepartmentResourceId);

        Task<DepartmentResourceFolder> GetResourceFolderById(long departmentResourceFolderId);

        // Create Department Resource Folder 
        Task<DepartmentResourceFolder> CreateResourceFolder(Member member, Department department, string name, DepartmentResourceFolder parentDepartmentResourceFolder);

        // Update Department Resource Folder Name
        Task<bool> UpdateResourceFolder(Member member, DepartmentResourceFolder departmentResourceFolder, string name);

        // Remove Department Resource Folder
        Task<bool> RemoveResourceFolder(Member member, DepartmentResourceFolder departmentResourceFolder);

        // Get Department Scene Folder
        Task<DepartmentSceneFolder> GetSceneFolderByName(long departmentId, string name, long? parentDepartmentSceneFolderId);

        Task<DepartmentSceneFolder> GetSceneFolderById(long departmentSceneFolderId);

        Task<bool> HasSceneFoldersById(long departmentSceneFolderId);

        Task<bool> HasResourceFolderById(long departmentResourceFolderId);

        // Create Department Scene Folder 
        Task<DepartmentSceneFolder> CreateSceneFolder(Member member, Department department, string name, Models.Databases.DepartmentSceneFolder parentSceneFolder);

        // Update Department Scene Folder Name
        Task<bool> UpdateSceneFolder(Member member, DepartmentSceneFolder sceneFolder, string name);

        // Remove Department Scene Folder
        Task<bool> RemoveSceneFolder(Member member, DepartmentSceneFolder sceneFolder);

        // Task<
    }

    public class DepartmentService : IDepartmentService
    {
        private readonly ILogger m_Logger = null;
        private readonly Databases.Repositories.IDepartmentRepository m_Departments = null;
        private readonly Databases.Repositories.IDepartmentNodeRepository m_DepartmentNodes = null;
        private readonly Databases.Repositories.IDepartmentLowerRepository m_DepartmentLowers = null;

        private readonly Databases.Repositories.IDepartmentResourceFolderRepository m_DepartmentResourceFolders = null;
        private readonly Databases.Repositories.IDepartmentSceneFolderRepository m_SceneFolders = null;

        private readonly Services.IMemberRecordService m_MemberRecordService = null;

        private readonly Databases.Repositories.IMemberRepository m_Members = null;
        public DepartmentService(
            ILogger<DepartmentService> logger,
            Databases.Repositories.IDepartmentRepository departments,
            Databases.Repositories.IDepartmentNodeRepository departmentNodes,
            Databases.Repositories.IDepartmentLowerRepository departmentLowers,
            Databases.Repositories.IDepartmentResourceFolderRepository departmentResourceFolders,
            Databases.Repositories.IDepartmentSceneFolderRepository sceneFolderRepository,
            Databases.Repositories.IMemberRepository members,
            Services.IMemberRecordService memberRecordService)
        {
            m_Logger = logger;
            m_Departments = departments;
            m_DepartmentNodes = departmentNodes;
            m_DepartmentLowers = departmentLowers;
            m_DepartmentResourceFolders = departmentResourceFolders;
            m_SceneFolders = sceneFolderRepository;
            m_Members = members;

            m_MemberRecordService = memberRecordService;
        }



        public async Task<Models.Databases.Department> GetAccessedDepartmentIncludeSceneFolders(Models.Databases.Member member, long departmentId)
        {
            // check member department permission
            Models.Databases.Department department = null;

            if (!member.IsAdministrator())
            {
                // get departments by member
                var memberDepartments = member.MemberDepartments.Select(x => x.Department);

                // for opt
                if (memberDepartments.Select(x => x.Id).Contains(departmentId))
                {
                    var departmentNode = await GetNodesForSceneFoldersByDepartmentId(departmentId);
                    if (null == departmentNode)
                    {
                        m_Logger.LogCritical($"DepartmentSceneFolderController, DeleteSceneFolder, DepartmentNode found failed, DepartmentId: {departmentId}");

                        return null;
                    }
                    department = departmentNode.Department;
                }
                else
                {

                    foreach (var memberDepartment in memberDepartments)
                    {
                        var lowersDepartmentIds = await GetLowersDepartmentIdByDepartmentId(memberDepartment.Id);
                        if (lowersDepartmentIds.Contains(departmentId))
                        {
                            var departmentNode = await GetNodesForSceneFoldersByDepartmentId(departmentId);
                            if (null == departmentNode)
                            {
                                m_Logger.LogCritical($"DepartmentSceneFolderController, DeleteSceneFolder, DepartmentNode found failed, DepartmentId: {departmentId}");

                                return null;
                            }
                            department = departmentNode.Department;
                            break;
                        }
                    }
                }
            }
            else
            {
                var departmentNode = await GetNodesForSceneFoldersByDepartmentId(departmentId);
                if (null == departmentNode)
                {
                    m_Logger.LogCritical($"DepartmentSceneFolderController, DeleteSceneFolder, DepartmentNode found failed, DepartmentId: {departmentId}");

                    return null;
                }

                department = departmentNode.Department;
            }

            return department;
        }

        public async Task<Models.Databases.Department> GetAccessedDepartmentIncludeResourceFolders(Models.Databases.Member member, long departmentId)
        {
            // check member department permission
            Models.Databases.Department department = null;

            if (!member.IsAdministrator())
            {
                // get departments by member
                var memberDepartments = member.MemberDepartments.Select(x => x.Department);

                // for opt
                if (memberDepartments.Select(x => x.Id).Contains(departmentId))
                {
                    var departmentNode = await GetNodesForResourceFoldersByDepartmentId(departmentId);
                    if (null == departmentNode)
                    {
                        m_Logger.LogCritical($"DepartmentSceneFolderController, DeleteSceneFolder, DepartmentNode found failed, DepartmentId: {departmentId}");

                        return null;
                    }
                    department = departmentNode.Department;
                }
                else
                {

                    foreach (var memberDepartment in memberDepartments)
                    {
                        var lowersDepartmentIds = await GetLowersDepartmentIdByDepartmentId(memberDepartment.Id);
                        if (lowersDepartmentIds.Contains(departmentId))
                        {
                            var departmentNode = await GetNodesForResourceFoldersByDepartmentId(departmentId);
                            if (null == departmentNode)
                            {
                                m_Logger.LogCritical($"DepartmentSceneFolderController, DeleteSceneFolder, DepartmentNode found failed, DepartmentId: {departmentId}");

                                return null;
                            }
                            department = departmentNode.Department;
                            break;
                        }
                    }
                }
            }
            else
            {
                var departmentNode = await GetNodesForResourceFoldersByDepartmentId(departmentId);
                if (null == departmentNode)
                {
                    m_Logger.LogCritical($"DepartmentSceneFolderController, DeleteSceneFolder, DepartmentNode found failed, DepartmentId: {departmentId}");

                    return null;
                }

                department = departmentNode.Department;
            }

            return department;
        }

        public async Task<Models.Databases.Department> GetDepartmentByDepartmentId(long departmentId)
        {
            return await m_Departments.Select(departmentId);
        }

        public async Task<Models.Databases.DepartmentNode> GetNodesForResourceFoldersByDepartmentId(long departmentId)
        {
            return await m_DepartmentNodes.GetResourceFoldersByDepartmentId(departmentId);
        }
        public async Task<Models.Databases.DepartmentNode> GetNodesForSceneFoldersByDepartmentId(long departmentId)
        {
            return await m_DepartmentNodes.GetSceneFoldersByDepartmentId(departmentId);
        }

        public async Task<Models.Databases.Department> SelectDepartmentByName(string name)
        {
            return await m_Departments.Table.SingleOrDefaultAsync(x => x.Name.ToLower() == name.ToLower());
        }

        public async Task<List<Models.Databases.Connector>> GetConnectorsIncludeLowersByDepartmentId(long departmentId)
        {
            return await m_Departments.GetConnectorsIncludeLowersByDepartmentId(departmentId);
        }

        public async Task<List<long>> GetLowersDepartmentIdByDepartmentId(long departmentId)
        {
            return await m_DepartmentLowers.Table.Where(x => x.DepartmentId == departmentId).Select(x => x.LowerDepartmentId).ToListAsync();
        }

        protected async Task<Models.Databases.Department> CreateDepartment(string name)
        {
            return await m_Departments.Insert(new Models.Databases.Department { Name = name, CreatedSeconds = DateTimeOffset.Now.ToUnixTimeSeconds() });
        }


        public async Task<Models.Databases.DepartmentNode> CreateDepartmentWithNodeId(Models.Databases.Member member, string departmentName, long parentDepartmentNodeId)
        {
            var departmentNode = new DepartmentNode();
            var execution = m_Departments.GetExecution();
            bool bSuccess = await execution.ExecuteAsync(async () =>
            {
                using (var tran = await m_Departments.BeginTransaction())
                {
                    // Create department
                    var department = await CreateDepartment(departmentName);
                    if (null == departmentName)
                    {
                        m_Logger.LogCritical($"CreateDepartmentWithNodeId, Create department failed, departmentName : {departmentName}");

                        await tran.RollbackAsync();

                        return false;
                    }

                    if (0 < parentDepartmentNodeId)
                    {
                        var parentDepartmentNode = await m_DepartmentNodes.Select(parentDepartmentNodeId);
                        if (null == parentDepartmentNode)
                        {
                            m_Logger.LogCritical($"CreateDepartmentWithNodeId, Find parent of departmentNode failed, parentDepartmentNodeId : {parentDepartmentNodeId}");

                            await tran.RollbackAsync();

                            return false;
                        }

                        departmentNode.ParentDepartmentNodeId = parentDepartmentNodeId;

                        // add department to parent department
                        if (!await AddDepartmentLowersToParent(parentDepartmentNode.Department, department))
                        {

                            await tran.RollbackAsync();

                            return false;
                        }
                    }

                    departmentNode.Department = department;
                    departmentNode = await m_DepartmentNodes.Insert(departmentNode);
                    if (null == departmentNode)
                    {
                        await tran.RollbackAsync();
                        return false;
                    }

                    // insert member record
                    var memberRecordBlueprint = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint();

                    var record = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint.Types.MemberDepartmentRecord();
                    record.DepartmentId = department.Id;
                    record.DepartmentName = department.Name;
                    memberRecordBlueprint.DepartmentRecord = record;
                    memberRecordBlueprint.Kind = Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.DepartmentCreated;

                    if (null == await m_MemberRecordService.Insert(member, memberRecordBlueprint))
                    {
                        await tran.RollbackAsync();
                        return false;
                    }

                    await tran.CommitAsync();

                }

                return true;
            });


            return bSuccess ? departmentNode : null;
        }


        public async Task<bool> UpdateDepartmentName(Models.Databases.Member member, Models.Databases.Department department, string name)
        {
            var execution = m_Departments.GetExecution();
            return await execution.ExecuteAsync(async () =>
            {
                using (var tran = await m_Departments.BeginTransaction())
                {
                    var oldName = department.Name;
                    department.Name = name;
                    var bSuccess = await m_Departments.Update(department);
                    if (!bSuccess)
                    {
                        m_Logger.LogCritical($"UpdateDepartmentName, Update Department Name Failed., DepartmentId : {department.Id}");

                        await tran.RollbackAsync();

                        return false;
                    }

                    // insert member record
                    var memberRecordBlueprint = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint();

                    var record = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint.Types.MemberDepartmentRecord();
                    record.DepartmentId = department.Id;
                    record.DepartmentName = oldName;
                    record.NewDepartmentName = name;
                    memberRecordBlueprint.DepartmentRecord = record;
                    memberRecordBlueprint.Kind = Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.DepartmentUpdated;

                    if (null == await m_MemberRecordService.Insert(member, memberRecordBlueprint))
                    {
                        await tran.RollbackAsync();
                        return false;
                    }

                    await tran.CommitAsync();

                }

                return true;
            });
        }

        public async Task<bool> DeleteDepartmentNode(Models.Databases.Member member, Models.Databases.DepartmentNode departmentNode)
        {
            var execution = m_Departments.GetExecution();
            return await execution.ExecuteAsync(async () =>
            {
                using (var tran = await m_Departments.BeginTransaction())
                {
                    var department = departmentNode.Department;

                    // remove department lowers
                    var parentDepartmentNodeId = departmentNode.ParentDepartmentNodeId ?? 0;
                    if (0 < parentDepartmentNodeId)
                    {
                        var parentDepartmentNode = await m_DepartmentNodes.Select(parentDepartmentNodeId);
                        if (null != parentDepartmentNode)
                        {
                            await RemoveDepartmentLowersToParent(parentDepartmentNode.Department, department);
                        }
                    }

                    // Remove departmentNode
                    var bSuccess = await m_DepartmentNodes.Delete(departmentNode);
                    if (!bSuccess)
                    {
                        m_Logger.LogCritical($"DepartmentNode Delete Failed., DepartmentNode Id : {departmentNode.Id}");

                        await tran.RollbackAsync();

                        return false;
                    }

                    // Remove department
                    bSuccess = await m_Departments.Delete(department);
                    if (!bSuccess)
                    {
                        m_Logger.LogCritical($"Department Delete Failed., Department Id : {department.Id}");

                        await tran.RollbackAsync();

                        return false;
                    }

                    // insert member record
                    var memberRecordBlueprint = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint();

                    var record = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint.Types.MemberDepartmentRecord();
                    record.DepartmentId = department.Id;
                    record.DepartmentName = department.Name;
                    memberRecordBlueprint.DepartmentRecord = record;
                    memberRecordBlueprint.Kind = Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.DepartmentDeleted;

                    if (null == await m_MemberRecordService.Insert(member, memberRecordBlueprint))
                    {
                        await tran.RollbackAsync();
                        return false;
                    }

                    await tran.CommitAsync();

                }

                return true;
            });
        }

        public async Task<List<DepartmentNode>> GetDepartmentNodes()
        {
            return await m_DepartmentNodes.Table
            .Include(x => x.Department).ThenInclude(x => x.MemberDepartments).ThenInclude(x => x.Member)
            .Include(x => x.Department).ThenInclude(x => x.Connectors)
            .Include(x => x.Department).ThenInclude(x => x.DepartmentLowers)
            .ToListAsync();
        }

        public async Task<DepartmentNode> SelectDepartmentNodesById(long id)
        {
            return await m_DepartmentNodes.Table
            .Include(x => x.Department)
                .ThenInclude(x => x.MemberDepartments)
                    .ThenInclude(x => x.Member)
            .Include(x => x.Department)
                .ThenInclude(x => x.Connectors)
            .Include(x => x.Department).ThenInclude(x => x.DepartmentLowers).ThenInclude(x => x.Departemnt)
            .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<bool> UpdateDepartmentNode(Models.Databases.Member member, Models.Databases.DepartmentNode departmentNode, long newParentDepartmentNodeId)
        {
            var department = departmentNode.Department;
            if (null == department)
            {
                m_Logger.LogCritical($"UpdateDepartmentNode, Can`t find Department in DepartmentNode, DepartmentNodeId : {departmentNode.Id}");

                return false;
            }

            var execution = m_Departments.GetExecution();
            return await execution.ExecuteAsync(async () =>
            {
                using (var tran = await m_Departments.BeginTransaction())
                {
                    var record = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint.Types.MemberDepartmentNodeRecord();

                    var currentParentDepartmentNodeId = departmentNode.ParentDepartmentNodeId ?? 0;
                    if (0 < currentParentDepartmentNodeId)
                    {
                        // remove department, department lowers from current parent of department
                        var parentDepartmentNode = await m_DepartmentNodes.Select(currentParentDepartmentNodeId);
                        if (null != parentDepartmentNode)
                        {
                            // parent of departemnt
                            var parentDepartment = parentDepartmentNode.Department;
                            if (null != parentDepartment)
                            {
                                // for record
                                record.ParentDepartmentId = parentDepartment.Id;
                                record.ParentDepartmentName = parentDepartment.Name;

                                if (!await RemoveDepartmentLowersToParent(parentDepartment, department))
                                {
                                    await tran.RollbackAsync();

                                    return false;
                                }
                            }

                        }
                    }

                    if (0 < newParentDepartmentNodeId)
                    {
                        // Find new parent departmentNode
                        var newParentDepartmentNode = await m_DepartmentNodes.Select(newParentDepartmentNodeId);
                        if (null == newParentDepartmentNode)
                        {
                            m_Logger.LogCritical($"UpdateDepartmentNode, Can`t find Parent departmentNodeId, newParentDepartmentNodeId : {newParentDepartmentNodeId}");

                            await tran.RollbackAsync();

                            return false;
                        }

                        var newParentDepartment = newParentDepartmentNode.Department;
                        if (null != newParentDepartment)
                        {
                            // set the new parent of departmentNode on current departmentNode
                            departmentNode.ParentDepartmentNodeId = newParentDepartmentNode.Id;

                            // for record 
                            record.NewParentDepartmentId = newParentDepartment.Id;
                            record.NewParentDepartmentName = newParentDepartment.Name;

                            // add department, department lowers to new parent of department
                            if (!await AddDepartmentLowersToParent(newParentDepartment, department))
                            {
                                await tran.RollbackAsync();

                                return false;
                            }
                        }

                    }
                    else
                    {
                        departmentNode.ParentDepartmentNodeId = 0;
                    }

                    bool bSuccess = await m_DepartmentNodes.Update(departmentNode);
                    if (!bSuccess)
                    {
                        m_Logger.LogCritical("UpdateDepartmentNode, Department Update Failed");

                        await tran.RollbackAsync();

                        return false;
                    }

                    // insert member record
                    var memberRecordBlueprint = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint();
                    memberRecordBlueprint.DepartmentNodeRecord = record;
                    memberRecordBlueprint.Kind = Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.DepartmentNodeUpdated;

                    if (null == await m_MemberRecordService.Insert(member, memberRecordBlueprint))
                    {
                        await tran.RollbackAsync();

                        return false;
                    }

                    await tran.CommitAsync();

                }

                return true;
            });
        }

        private async Task<bool> AddDepartmentLowersToParent(Department department, Department lower)
        {
            // Check department
            if (null == department)
            {
                return true;
            }

            if (null == department.DepartmentLowers)
            {
                department.DepartmentLowers = new List<DepartmentLower>();
            }

            var current = DateTimeOffset.Now.ToUnixTimeSeconds();

            // Add lower 
            if (-1 == department.DepartmentLowers.FindIndex(x => x.DepartmentId == department.Id && x.LowerDepartmentId == lower.Id))
            {
                department.DepartmentLowers.Add(new DepartmentLower { DepartmentId = department.Id, LowerDepartmentId = lower.Id, CreatedSeconds = current });

            }


            // Check the lower that has lowers
            if (null != lower.DepartmentLowers)
            {
                // Add children of lower
                foreach (var departmentLower in lower.DepartmentLowers.Select(x => new DepartmentLower { DepartmentId = department.Id, LowerDepartmentId = x.LowerDepartmentId, CreatedSeconds = current }))
                {
                    if (-1 == department.DepartmentLowers.FindIndex(x => x.DepartmentId == department.Id && x.LowerDepartmentId == departmentLower.LowerDepartmentId))
                    {
                        department.DepartmentLowers.Add(departmentLower);
                    }
                }
            }

            if (!await m_Departments.Update(department))
            {
                return false;
            }

            // Find departmentNode
            DepartmentNode departmentNode = await m_DepartmentNodes.SelectByDepartmentId(department.Id);
            if (null == departmentNode)
            {
                return true;
            }

            // Check have the departmentNodeId of parent
            var parentDepartmentNodeId = departmentNode.ParentDepartmentNodeId ?? 0;
            if (0 >= parentDepartmentNodeId)
            {
                return true;
            }

            // Find departmentNode of parent
            var parentDepartmentNode = await m_DepartmentNodes.Select(parentDepartmentNodeId);
            if (null != parentDepartmentNode)
            {
                // recurcive find parent of parent
                if (!await AddDepartmentLowersToParent(parentDepartmentNode.Department, lower))
                {
                    return false;
                }
            }

            return true;
        }

        private async Task<bool> RemoveDepartmentLowersToParent(Department department, Department lower)
        {
            if (null == department)
            {
                return true;
            }

            if (null != department.DepartmentLowers)
            {
                // remove lower
                var index = department.DepartmentLowers.FindIndex(x => x.LowerDepartmentId == lower.Id);
                if (-1 != index)
                {
                    department.DepartmentLowers.RemoveAt(index);
                }

                // remove children of lower
                lower.DepartmentLowers.ForEach(x =>
                {
                    index = department.DepartmentLowers.FindIndex(x => x.LowerDepartmentId == x.LowerDepartmentId);
                    if (-1 != index)
                    {
                        department.DepartmentLowers.RemoveAt(index);
                    }
                });
            }

            if (!await m_Departments.Update(department))
            {
                return false;
            }

            // Find departmentNode
            DepartmentNode departmentNode = await m_DepartmentNodes.SelectByDepartmentId(department.Id);
            if (null == departmentNode)
            {
                return true;
            }

            // Check have the departmentNodeId of parent
            var parentDepartmentNodeId = departmentNode.ParentDepartmentNodeId ?? 0;
            if (0 >= parentDepartmentNodeId)
            {
                return true;
            }

            // Find departmentNode of parent
            var parentDepartmentNode = await m_DepartmentNodes.Select(parentDepartmentNodeId);
            if (null != parentDepartmentNode)
            {
                // recurcive find parent of parent
                if (!await RemoveDepartmentLowersToParent(parentDepartmentNode?.Department, lower))
                {
                    return false;
                }
            }

            return true;
        }

        // Get Resource Folder By name
        public async Task<DepartmentResourceFolder> GetResourceFolderByName(long departmentId, string name, long? parentDepartmentResourceId)
        {
            return await m_DepartmentResourceFolders.SelectByName(departmentId, name, parentDepartmentResourceId);
        }

        public async Task<DepartmentResourceFolder> GetResourceFolderById(long departmentResourceFolderId)
        {
            return await m_DepartmentResourceFolders.Select(departmentResourceFolderId);
        }

        // Create Department Resource Folder 
        public async Task<DepartmentResourceFolder> CreateResourceFolder(Member member, Department department, string name, DepartmentResourceFolder parentDepartmentResourceFolder)
        {
            if (null == department)
            {
                m_Logger.LogCritical($"DepartmentService, CreateResourceFolder, Department is null.");

                return null;
            }

            var execution = m_Departments.GetExecution();
            return await execution.ExecuteAsync(async () =>
            {
                DepartmentResourceFolder created = null;
                using (var tran = await m_Departments.BeginTransaction())
                {
                    var departmentResourceFolder = new DepartmentResourceFolder
                    {
                        Department = department,
                        Name = name,
                        Parent = parentDepartmentResourceFolder,
                        CreatedSeconds = DateTimeOffset.Now.ToUnixTimeSeconds()
                    };

                    created = await m_DepartmentResourceFolders.Insert(departmentResourceFolder);
                    if (null == created)
                    {
                        m_Logger.LogCritical("DepartmentService, CreateResourceFolder Insert Failed");

                        await tran.RollbackAsync();

                        return created;
                    }

                    // insert member record
                    var record = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint.Types.MemberDepartmentResourceFolderRecord();
                    record.DepartmentId = department.Id;
                    record.DepartmentName = department.Name;
                    record.DepartmentResourceFolderId = created.Id;
                    record.DepartmentResourceFolderName = created.Name;

                    var memberRecordBlueprint = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint();
                    memberRecordBlueprint.DepartmentResourceFolderRecord = record;
                    memberRecordBlueprint.Kind = Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.ResourceFolderCreated;

                    if (null == await m_MemberRecordService.Insert(member, memberRecordBlueprint))
                    {
                        await tran.RollbackAsync();

                        return null;
                    }

                    await tran.CommitAsync();

                }

                return created;
            });
        }

        // Update Department Resource Folder Name
        public async Task<bool> UpdateResourceFolder(Member member, DepartmentResourceFolder departmentResourceFolder, string name)
        {
            var department = departmentResourceFolder.Department;
            if (null == department)
            {
                m_Logger.LogCritical($"DepartmentService, UpdateResourceFolder, Department is empty, DepartmentResourceFolderId : {departmentResourceFolder.Id}");

                return false;
            }

            var execution = m_Departments.GetExecution();
            return await execution.ExecuteAsync(async () =>
            {
                using (var tran = await m_Departments.BeginTransaction())
                {
                    var exists = await m_DepartmentResourceFolders.SelectByName(departmentResourceFolder.DepartmentId, name, departmentResourceFolder.ParentDepartmentResourceFolderId);
                    if (null != exists && exists.Id != departmentResourceFolder.Id)
                    {
                        await tran.RollbackAsync();

                        return false;
                    }

                    // for record
                    var record = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint.Types.MemberDepartmentResourceFolderRecord();
                    record.DepartmentId = department.Id;
                    record.DepartmentName = department.Name;

                    record.DepartmentResourceFolderId = departmentResourceFolder.Id;
                    record.DepartmentResourceFolderName = departmentResourceFolder.Name;
                    record.NewDepartmentResourceFolderName = name;

                    departmentResourceFolder.Name = name;

                    // update database
                    var bUpdated = await m_DepartmentResourceFolders.Update(departmentResourceFolder);
                    if (!bUpdated)
                    {
                        m_Logger.LogCritical("DepartmentService, UpdateResourceFolder Update Failed");

                        await tran.RollbackAsync();

                        return false;
                    }

                    // insert member record
                    var memberRecordBlueprint = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint();
                    memberRecordBlueprint.DepartmentResourceFolderRecord = record;
                    memberRecordBlueprint.Kind = Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.ResourceFolderUpdated;

                    if (null == await m_MemberRecordService.Insert(member, memberRecordBlueprint))
                    {
                        await tran.RollbackAsync();

                        return false;
                    }

                    await tran.CommitAsync();

                }

                return true;
            });
        }

        // Remove Department Resource Folder
        public async Task<bool> RemoveResourceFolder(Member member, DepartmentResourceFolder departmentResourceFolder)
        {
            var department = departmentResourceFolder.Department;
            if (null == department)
            {
                m_Logger.LogCritical($"RemoveResourceFolder, Department is null.");

                return false;
            }

            var execution = m_Departments.GetExecution();
            return await execution.ExecuteAsync(async () =>
            {
                using (var tran = await m_Departments.BeginTransaction())
                {
                    // for record
                    var record = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint.Types.MemberDepartmentResourceFolderRecord();
                    record.DepartmentId = department.Id;
                    record.DepartmentName = department.Name;

                    record.DepartmentResourceFolderId = departmentResourceFolder.Id;
                    record.DepartmentResourceFolderName = departmentResourceFolder.Name;

                    // delete from database
                    var bDeleted = await m_DepartmentResourceFolders.Delete(departmentResourceFolder);
                    if (!bDeleted)
                    {
                        m_Logger.LogCritical("DepartmentService, RemoveResourceFolder Update Failed");

                        await tran.RollbackAsync();

                        return false;
                    }

                    // insert member record
                    var memberRecordBlueprint = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint();
                    memberRecordBlueprint.DepartmentResourceFolderRecord = record;
                    memberRecordBlueprint.Kind = Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.ResourceFolderDeleted;

                    if (null == await m_MemberRecordService.Insert(member, memberRecordBlueprint))
                    {
                        await tran.RollbackAsync();

                        return false;
                    }

                    await tran.CommitAsync();

                }

                return true;
            });
        }

        // Get Resource Folder By name
        public async Task<DepartmentSceneFolder> GetSceneFolderByName(long departmentId, string name, long? parentDepartmentSceneFolderId)
        {
            return await m_SceneFolders.SelectByName(departmentId, name, parentDepartmentSceneFolderId);
        }

        public async Task<DepartmentSceneFolder> GetSceneFolderById(long departmentSceneFolderId)
        {
            return await m_SceneFolders.Select(departmentSceneFolderId);
        }

        public async Task<bool> HasSceneFoldersById(long departmentSceneFolderId)
        {
            return 0 < await m_SceneFolders.Table.Where(x => x.ParentDepartmentSceneFolderId == departmentSceneFolderId).CountAsync();
        }

        public async Task<bool> HasResourceFolderById(long departmentResourceFolderId)
        {
            return 0 < await m_DepartmentResourceFolders.Table.Where(x => x.ParentDepartmentResourceFolderId == departmentResourceFolderId).CountAsync();
        }

        // Create Department Resource Folder 
        public async Task<DepartmentSceneFolder> CreateSceneFolder(Member member, Department department, string name, Models.Databases.DepartmentSceneFolder parentSceneFolder = null)
        {
            if (null == department)
            {
                m_Logger.LogCritical($"CreateSceneFolder, Department is null.");

                return null;
            }

            var execution = m_Departments.GetExecution();
            return await execution.ExecuteAsync(async () =>
            {
                DepartmentSceneFolder created = null;
                using (var tran = await m_Departments.BeginTransaction())
                {
                    var sceneFolder = new DepartmentSceneFolder
                    {
                        Department = department,
                        Name = name,
                        Parent = parentSceneFolder,
                        CreatedSeconds = DateTimeOffset.Now.ToUnixTimeSeconds()
                    };

                    created = await m_SceneFolders.Insert(sceneFolder);
                    if (null == created)
                    {
                        m_Logger.LogCritical("DepartmentService, CreateSceneFolder Insert Failed");

                        await tran.RollbackAsync();

                        return created;
                    }

                    // insert member record
                    var record = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint.Types.MemberDepartmentSceneFolderRecord();
                    record.DepartmentId = department.Id;
                    record.DepartmentName = department.Name;
                    record.DepartmentSceneFolderId = created.Id;
                    record.DepartmentSceneFolderName = created.Name;

                    var memberRecordBlueprint = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint();
                    memberRecordBlueprint.DepartmentSceneFolderRecord = record;
                    memberRecordBlueprint.Kind = Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.SceneFolderCreated;

                    if (null == await m_MemberRecordService.Insert(member, memberRecordBlueprint))
                    {
                        await tran.RollbackAsync();

                        return null;
                    }

                    await tran.CommitAsync();

                }

                return created;
            });
        }

        // Update Department Scene Folder Name
        public async Task<bool> UpdateSceneFolder(Member member, DepartmentSceneFolder departmentSceneFolder, string name)
        {
            var department = departmentSceneFolder.Department;
            if (null == department)
            {
                m_Logger.LogCritical($"DepartmentService, UpdateSceneFolder, Department is empty, DepartmentResourceFolderId : {departmentSceneFolder.Id}");

                return false;
            }

            var execution = m_Departments.GetExecution();
            return await execution.ExecuteAsync(async () =>
            {
                using (var tran = await m_Departments.BeginTransaction())
                {
                    var exists = await m_SceneFolders.SelectByName(departmentSceneFolder.DepartmentId, name, departmentSceneFolder.ParentDepartmentSceneFolderId);
                    if (null != exists && exists.Id != departmentSceneFolder.Id)
                    {
                        await tran.RollbackAsync();

                        return false;
                    }

                    // for record
                    var record = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint.Types.MemberDepartmentSceneFolderRecord();
                    record.DepartmentId = department.Id;
                    record.DepartmentName = department.Name;

                    record.DepartmentSceneFolderId = departmentSceneFolder.Id;
                    record.DepartmentSceneFolderName = departmentSceneFolder.Name;
                    record.NewDepartmentSceneFolderName = name;

                    departmentSceneFolder.Name = name;

                    // update database
                    var bUpdated = await m_SceneFolders.Update(departmentSceneFolder);
                    if (!bUpdated)
                    {
                        m_Logger.LogCritical("DepartmentService, UpdateSceneFolder Update Failed");

                        await tran.RollbackAsync();

                        return false;
                    }

                    // insert member record
                    var memberRecordBlueprint = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint();
                    memberRecordBlueprint.DepartmentSceneFolderRecord = record;
                    memberRecordBlueprint.Kind = Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.SceneFolderUpdated;

                    if (null == await m_MemberRecordService.Insert(member, memberRecordBlueprint))
                    {
                        await tran.RollbackAsync();

                        return false;
                    }

                    await tran.CommitAsync();

                }

                return true;
            });
        }

        // Remove Department Scene Folder
        public async Task<bool> RemoveSceneFolder(Member member, DepartmentSceneFolder departmentSceneFolder)
        {
            var department = departmentSceneFolder.Department;
            if (null == department)
            {
                m_Logger.LogCritical($"DepartmentService, RemoveSceneFolder, Department is null.");

                return false;
            }

            var execution = m_Departments.GetExecution();
            return await execution.ExecuteAsync(async () =>
            {
                using (var tran = await m_Departments.BeginTransaction())
                {
                    // for record
                    var record = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint.Types.MemberDepartmentSceneFolderRecord();
                    record.DepartmentId = department.Id;
                    record.DepartmentName = department.Name;

                    record.DepartmentSceneFolderId = departmentSceneFolder.Id;
                    record.DepartmentSceneFolderName = departmentSceneFolder.Name;

                    // delete from database
                    var bDeleted = await m_SceneFolders.Delete(departmentSceneFolder);
                    if (!bDeleted)
                    {
                        m_Logger.LogCritical("DepartmentService, RemoveSceneFolder Delete Failed");

                        await tran.RollbackAsync();

                        return false;
                    }

                    // insert member record
                    var memberRecordBlueprint = new Saturn.Backends.Protocols.Common.MemberRecordBlueprint();
                    memberRecordBlueprint.DepartmentSceneFolderRecord = record;
                    memberRecordBlueprint.Kind = Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND.SceneFolderDeleted;

                    if (null == await m_MemberRecordService.Insert(member, memberRecordBlueprint))
                    {
                        await tran.RollbackAsync();

                        return false;
                    }

                    await tran.CommitAsync();

                }

                return true;
            });
        }
    }


}