using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Prometheus.Models.Databases;

namespace Prometheus.Databases.Repositories
{
    public interface IDepartmentNodeRepository : Commons.IRepository<Models.Databases.DepartmentNode>
    {
        Task<DepartmentNode> SelectByDepartmentId(long departmentId);

        Task<DepartmentNode> GetResourceFoldersByDepartmentId(long departmentId);
        Task<DepartmentNode> GetSceneFoldersByDepartmentId(long departmentId);
    }

    public class DepartmentNodeRepository : Commons.AbstractRepository<Models.Databases.DepartmentNode>, IDepartmentNodeRepository
    {
        public override DbSet<DepartmentNode> Table => m_Context.DepartmentNodes;

        protected override string RepositoryName => "DepartmentNodes";

        public DepartmentNodeRepository(ILogger<IDepartmentNodeRepository> logger, Databases.DatabaseDbContext context) : base(logger, context) { }

        public override async Task<DepartmentNode> Select(long id)
        {
            return await Table.Include(x => x.Department).ThenInclude(x => x.DepartmentLowers).FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<DepartmentNode> SelectByDepartmentId(long departmentId)
        {
            return await Table.Include(x => x.Department).ThenInclude(x => x.DepartmentLowers).FirstOrDefaultAsync(x => x.DepartmentId == departmentId);
        }

        public async Task<DepartmentNode> GetResourceFoldersByDepartmentId(long departmentId)
        {
            return await Table.Include(x => x.Department).ThenInclude(x => x.DepartmentResourceFolders).FirstOrDefaultAsync(x => x.DepartmentId == departmentId);
        }

        public async Task<DepartmentNode> GetSceneFoldersByDepartmentId(long departmentId)
        {
            return await Table.Include(x => x.Department).ThenInclude(x => x.DepartmentSceneFolders).FirstOrDefaultAsync(x => x.DepartmentId == departmentId);
        }
    }
}