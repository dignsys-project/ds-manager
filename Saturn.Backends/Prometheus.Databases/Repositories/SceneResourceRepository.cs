using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Prometheus.Models.Databases;

namespace Prometheus.Databases.Repositories
{
    public interface ISceneResourceRepository : Commons.IRepository<Models.Databases.SceneResource>
    {
        Task<List<SceneResource>> GetSceneResourcesByResourceId(long resourceId);
    }

    public class SceneResourceRepository : Commons.AbstractRepository<Models.Databases.SceneResource>, ISceneResourceRepository
    {
        public override DbSet<SceneResource> Table => m_Context.SceneResources;

        protected override string RepositoryName => "ScenesResource";

        public SceneResourceRepository(ILogger<SceneResourceRepository> logger, Databases.DatabaseDbContext context) : base(logger, context) { }

        public async Task<List<SceneResource>> GetSceneResourcesByResourceId(long resourceId)
        {
            return await Table.Where(x => x.ResourceId == resourceId).ToListAsync();
        }

    }
}