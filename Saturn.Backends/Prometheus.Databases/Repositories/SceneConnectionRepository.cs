using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Prometheus.Models.Databases;

namespace Prometheus.Databases.Repositories
{
    public interface ISceneConnectionRepository : Commons.IRepository<Models.Databases.SceneConnection>
    {

    }

    public class SceneConnectionRepository : Commons.AbstractRepository<Models.Databases.SceneConnection>, ISceneConnectionRepository
    {
        public override DbSet<SceneConnection> Table => m_Context.SceneConnections;

        protected override string RepositoryName => "SceneConnections";

        public SceneConnectionRepository(ILogger<SceneConnectionRepository> logger, Databases.DatabaseDbContext context) : base(logger, context) { }
    }
}