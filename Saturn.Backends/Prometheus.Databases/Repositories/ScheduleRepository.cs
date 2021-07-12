using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Prometheus.Databases.Repositories
{
    public interface IScheduleRepository : Commons.IRepository<Models.Databases.Schedule>
    {
        Task<Models.Databases.Schedule> SelectByName(string name);
    }

    public class ScheduleRepository : Commons.AbstractRepository<Models.Databases.Schedule>, IScheduleRepository
    {
        public override DbSet<Models.Databases.Schedule> Table => m_Context.Schedules;

        protected override string RepositoryName => "Schedules";

        public ScheduleRepository(ILogger<ScheduleRepository> logger, Databases.DatabaseDbContext context) : base(logger, context) { }

        public async Task<Models.Databases.Schedule> SelectByName(string name)
        {
            return await Table.FirstOrDefaultAsync(x => x.Name.ToLower() == name.ToLower());
        }
    }
}