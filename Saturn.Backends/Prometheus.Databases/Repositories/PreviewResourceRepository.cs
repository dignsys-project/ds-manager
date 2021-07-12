using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Prometheus.Models.Databases;

namespace Prometheus.Databases.Repositories
{
    public interface IPreviewResourceRepository : Commons.IRepository<Models.Databases.PreviewResource>
    {
        Task<List<PreviewResource>> GetItems();
    }

    public class PreviewResourceRepository : Commons.AbstractRepository<Models.Databases.PreviewResource>, IPreviewResourceRepository
    {
        public override DbSet<PreviewResource> Table => m_Context.PreviewResources;

        protected override string RepositoryName => "PreviewResources";

        public PreviewResourceRepository(ILogger<PreviewResourceRepository> logger, Databases.DatabaseDbContext context) : base(logger, context) { }

        public async Task<List<PreviewResource>> GetItems()
        {
            return await Table.ToListAsync();
        }
    }
}