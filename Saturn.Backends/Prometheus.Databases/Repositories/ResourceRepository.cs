using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Prometheus.Models.Databases;

namespace Prometheus.Databases.Repositories
{
    public interface IResourceRepository : Commons.IRepository<Models.Databases.Resource>
    {
        Task<List<Resource>> GetItems();
    }

    public class ResourceRepository : Commons.AbstractRepository<Models.Databases.Resource>, IResourceRepository
    {
        public override DbSet<Resource> Table => m_Context.Resources;

        protected override string RepositoryName => "Resources";

        public ResourceRepository(ILogger<ResourceRepository> logger, Databases.DatabaseDbContext context) : base(logger, context) { }

        public async Task<List<Resource>> GetItems()
        {
            return await Table.Include(x => x.PreviewResource).Where(x => x.Kind != Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND.Screencapture).ToListAsync();
        }

        public async override Task<Resource> Select(long id)
        {
            return await Table.Include(x => x.PreviewResource).FirstOrDefaultAsync(x => x.Id == id);
        }
    }
}