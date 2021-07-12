using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Prometheus.Models.Databases;

namespace Prometheus.Databases.Repositories
{
    public interface IDepartmentResourceFolderRepository : Commons.IRepository<Models.Databases.DepartmentResourceFolder>
    {
        Task<List<DepartmentResourceFolder>> SelectByDepartmentId(long departmentId);

        Task<DepartmentResourceFolder> SelectByName(long departmentId, string name, long? parentDepartmentResourceId);

    }

    public class DepartmentResourceFolderRepository : Commons.AbstractRepository<Models.Databases.DepartmentResourceFolder>, IDepartmentResourceFolderRepository
    {
        public override DbSet<DepartmentResourceFolder> Table => m_Context.DepartmentResourceFolders;

        protected override string RepositoryName => "DepartmentResourceFolders";

        public DepartmentResourceFolderRepository(ILogger<DepartmentResourceFolderRepository> logger, Databases.DatabaseDbContext context) : base(logger, context) { }

        public async Task<List<DepartmentResourceFolder>> SelectByDepartmentId(long departmentId)
        {
            return await Table.Where(x => x.DepartmentId == departmentId).ToListAsync();
        }

        public async Task<DepartmentResourceFolder> SelectByName(long departmentId, string name, long? parentDepartmentResourceId)
        {
            return await Table.Where(x => x.DepartmentId == departmentId && x.ParentDepartmentResourceFolderId == (parentDepartmentResourceId ?? null) && x.Name.ToLower().Equals(name.ToLower())).FirstOrDefaultAsync();
        }

        public override async Task<DepartmentResourceFolder> Select(long departmentResourceFolderId)
        {
            return await Table.Where(x => x.Id == departmentResourceFolderId).FirstOrDefaultAsync();
        }
    }
}