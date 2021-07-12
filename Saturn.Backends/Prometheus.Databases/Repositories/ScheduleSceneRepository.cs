using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Prometheus.Databases.Repositories
{
    public interface IScheduleSceneRepository : Commons.IRepository<Models.Databases.ScheduleScene>
    {
        Task<Models.Databases.ScheduleScene> SelectByName(string name);

        Task<List<Models.Databases.ScheduleScene>> SelectByScheduleId(long scheduleId);
    }

    public class ScheduleSceneRepository : Commons.AbstractRepository<Models.Databases.ScheduleScene>, IScheduleSceneRepository
    {
        public override DbSet<Models.Databases.ScheduleScene> Table => m_Context.ScheduleScenes;

        protected override string RepositoryName => "ScheduleScenes";

        public ScheduleSceneRepository(ILogger<ScheduleSceneRepository> logger, Databases.DatabaseDbContext context) : base(logger, context) { }

        public async Task<Models.Databases.ScheduleScene> SelectByName(string name)
        {
            return await Table.FirstOrDefaultAsync(x => x.Name.ToLower() == name.ToLower());
        }

        public override async Task<Models.Databases.ScheduleScene> Select(long id)
        {
            return await Table
            .Include(x => x.Schedule)
                    .Include(x => x.Scene)
                        .ThenInclude(x => x.Resource)
                        .ThenInclude(x => x.PreviewResource).FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<List<Models.Databases.ScheduleScene>> SelectByScheduleId(long scheduleId)
        {
            return await Table.Where(x => x.ScheduleId == scheduleId).ToListAsync();
        }
    }
}