using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Prometheus.Models.Databases;

namespace Prometheus.Databases.Repositories
{
    public interface IDepartmentSceneFolderRepository : Commons.IRepository<Models.Databases.DepartmentSceneFolder>
    {
        Task<List<DepartmentSceneFolder>> SelectByDepartmentId(long departmentId);

        Task<DepartmentSceneFolder> SelectByName(long departmentId, string name, long? parentDepartmentSceneFolderId);

    }

    public class DepartmentSceneFolderRepository : Commons.AbstractRepository<Models.Databases.DepartmentSceneFolder>, IDepartmentSceneFolderRepository
    {
        public override DbSet<DepartmentSceneFolder> Table => m_Context.DepartmentSceneFolders;

        protected override string RepositoryName => "DepartmentResourceFolders";

        public DepartmentSceneFolderRepository(ILogger<DepartmentResourceFolderRepository> logger, Databases.DatabaseDbContext context) : base(logger, context) { }


        public async Task<List<DepartmentSceneFolder>> SelectByDepartmentId(long departmentId)
        {
            return await Table.Where(x => x.DepartmentId == departmentId).ToListAsync();
        }

        public async Task<DepartmentSceneFolder> SelectByName(long departmentId, string name, long? parentDepartmentSceneFolderId)
        {
            return await Table.FirstOrDefaultAsync(x => x.DepartmentId == departmentId && x.Name.ToLower().Equals(name.ToLower()) && x.ParentDepartmentSceneFolderId == (parentDepartmentSceneFolderId ?? null));
        }
    }
}