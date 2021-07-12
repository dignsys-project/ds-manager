using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Prometheus.Models.Databases;

namespace Prometheus.Databases.Repositories
{
    public interface IConnectorRepository : Commons.IRepository<Models.Databases.Connector>
    {
        Task<List<Models.Databases.Connector>> GetConnectors();
        Task<List<Models.Databases.Connector>> GetConnectorsByKind(Saturn.Backends.Protocols.Common.CONNECTOR_REGISTER_KIND kind);
        Task<Models.Databases.Connector> GetConnectorById(long connectorId);
        Task<Models.Databases.Connector> GetConnectorByName(string name);
        Task<Models.Databases.Connector> GetConnectorByDeviceId(string deviceId);
    }

    public class ConnectorRepository : Commons.AbstractRepository<Models.Databases.Connector>, IConnectorRepository
    {
        public override DbSet<Connector> Table => m_Context.Connectors;

        protected override string RepositoryName => "Connectors";

        public ConnectorRepository(ILogger<ConnectorRepository> logger, Databases.DatabaseDbContext context) : base(logger, context) { }

        public async Task<List<Models.Databases.Connector>> GetConnectorsByKind(Saturn.Backends.Protocols.Common.CONNECTOR_REGISTER_KIND kind)
        {
            return await Table.Include(x => x.Department).Include(x => x.Scene).Where(x => x.Kind == kind).ToListAsync();
        }

        public async Task<List<Connector>> GetConnectors()
        {
            return await Table.Include(x => x.Department).Include(x => x.Resource).OrderByDescending(x => x.LastUpdatedSeconds).ToListAsync();
        }

        public async Task<Connector> GetConnectorById(long connectorId)
        {
            return await GetCommon().FirstOrDefaultAsync(x => x.Id == connectorId);
        }

        public async Task<Models.Databases.Connector> GetConnectorByName(string name)
        {
            return await GetCommon().FirstOrDefaultAsync(x => x.Name.ToLower() == name.ToLower());
        }

        public async Task<Connector> GetConnectorByDeviceId(string deviceId)
        {
            return await GetCommon().FirstOrDefaultAsync(x => x.DeviceId == deviceId);
        }

        private Microsoft.EntityFrameworkCore.Query.IIncludableQueryable<Connector, Scene> GetCommon()
        {
            return Table
            .Include(x => x.Department)
            // from schedules 
            .Include(x => x.Schedules)
                .ThenInclude(x => x.ScheduleScene)
                    .ThenInclude(x => x.Scene)

            .Include(x => x.Schedules)
                .ThenInclude(x => x.ScheduleScene)
                    .ThenInclude(x => x.Schedule)
            .Include(x => x.EmergencyScene)
            .Include(x => x.Scene);
        }
    }
}