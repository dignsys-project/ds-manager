using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Prometheus.Models.Databases;

namespace Prometheus.Databases.Repositories
{
    public interface ISceneRepository : Commons.IRepository<Models.Databases.Scene>
    {
        Task<Scene> SelectRow(long sceneId);
    }

    public class SceneRepository : Commons.AbstractRepository<Models.Databases.Scene>, ISceneRepository
    {
        public override DbSet<Scene> Table => m_Context.Scenes;

        protected override string RepositoryName => "Scenes";

        public SceneRepository(ILogger<SceneRepository> logger, Databases.DatabaseDbContext context) : base(logger, context) { }

        public async Task<Scene> SelectRow(long sceneId)
        {
            return await Table.Include(x => x.DepartmentSceneFolder).FirstOrDefaultAsync(x => x.Id == sceneId);
        }

        public override async Task<Scene> Select(long id)
        {
            return await Table
                .Include(x => x.Resource)
                    .ThenInclude(x => x.PreviewResource)
                .Include(x => x.SceneResources)
                    .ThenInclude(x => x.Resource)
                        .ThenInclude(x => x.PreviewResource)
                .Include(x => x.SceneConnections)
                    .ThenInclude(x => x.ConnectedScene)
                        .ThenInclude(x => x.Resource)
                .FirstOrDefaultAsync(x => x.Id == id);
        }


    }
}