using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Prometheus.Databases.Repositories
{
    public interface IConnectorScheduleSceneRepository : Commons.IRepository<Models.Databases.ConnectorScheduleScene>
    {
    }

    public class ConnectorScheduleSceneRepository : Commons.AbstractRepository<Models.Databases.ConnectorScheduleScene>, IConnectorScheduleSceneRepository
    {
        public override DbSet<Models.Databases.ConnectorScheduleScene> Table => m_Context.ConnectorScheduleScenes;

        protected override string RepositoryName => "ConnectorSceneSchedules";

        public ConnectorScheduleSceneRepository(ILogger<ConnectorScheduleSceneRepository> logger, Databases.DatabaseDbContext context) : base(logger, context) { }
    }
}