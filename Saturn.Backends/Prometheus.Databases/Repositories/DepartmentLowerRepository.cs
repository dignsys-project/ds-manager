using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Prometheus.Models.Databases;

namespace Prometheus.Databases.Repositories
{
    public interface IDepartmentLowerRepository : Commons.IRepository<Models.Databases.DepartmentLower>
    {
    }

    public class DepartmentLowerRepository : Commons.AbstractRepository<Models.Databases.DepartmentLower>, IDepartmentLowerRepository
    {
        public override DbSet<Models.Databases.DepartmentLower> Table => m_Context.DepartmentLowers;

        protected override string RepositoryName => "DepartmentLowers";

        public DepartmentLowerRepository(ILogger<DepartmentLowerRepository> logger, Databases.DatabaseDbContext context) : base(logger, context) { }

    }
}