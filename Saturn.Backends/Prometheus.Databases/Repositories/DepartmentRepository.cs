using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Prometheus.Models.Databases;

namespace Prometheus.Databases.Repositories
{
    public interface IDepartmentRepository : Commons.IRepository<Models.Databases.Department>
    {
        Task<List<Department>> GetItems();

        Task<List<Models.Databases.Connector>> GetConnectorsIncludeLowersByDepartmentId(long departmentId);
    }

    public class DepartmentRepository : Commons.AbstractRepository<Models.Databases.Department>, IDepartmentRepository
    {
        public override DbSet<Department> Table => m_Context.Departments;

        protected override string RepositoryName => "Departments";

        public DepartmentRepository(ILogger<DepartmentRepository> logger, Databases.DatabaseDbContext context) : base(logger, context) { }

        public async Task<List<Department>> GetItems()
        {
            return await Table
                .Include(x => x.MemberDepartments)
                    .ThenInclude(x => x.Member)
                .Include(x => x.Connectors)
                .ToListAsync();
        }
        public override async Task<Department> Select(long id)
        {
            return await Table
                .Include(x => x.MemberDepartments)
                    .ThenInclude(x => x.Member)
                .Include(x => x.Connectors)
                .Include(x => x.DepartmentLowers)
                    .ThenInclude(x => x.LowerDepartemnt)
                // .Include(x => x.DepartmentSceneFolders)
                // .Include(x => x.DepartmentResourceFolders)
                .FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<List<Models.Databases.Connector>> GetConnectorsIncludeLowersByDepartmentId(long departmentId)
        {
            var department = await Table.Include(x => x.DepartmentLowers)
                                            .ThenInclude(x => x.LowerDepartemnt)
                                                .ThenInclude(x => x.Connectors)
                                        .Include(x => x.Connectors)
                                        .FirstOrDefaultAsync(x => x.Id == departmentId);

            var connectors = department?.DepartmentLowers.SelectMany(x => x.LowerDepartemnt.Connectors).ToList();
            connectors.AddRange(department.Connectors);

            return connectors;
        }
    }
}