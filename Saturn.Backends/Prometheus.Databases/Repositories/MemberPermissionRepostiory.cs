using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Prometheus.Databases.Repositories
{
    public interface IMemberPermissionRepository : Commons.IRepository<Models.Databases.MemberPermission>
    {
        Task<List<Models.Databases.MemberPermission>> GetItems();

        Task<List<Models.Databases.MemberPermission>> GetItemByMemberId(long memberId);

        Task<bool> DeletePermissionsByMemberId(long memberId);
    }

    public class MemberPermissionRepository : Commons.AbstractRepository<Models.Databases.MemberPermission>, IMemberPermissionRepository
    {
        public override DbSet<Models.Databases.MemberPermission> Table => m_Context.MemberPermissions;

        protected override string RepositoryName => "MemberPermissions";

        public MemberPermissionRepository(ILogger<MemberPermissionRepository> logger, Databases.DatabaseDbContext context) : base(logger, context) { }

        public async Task<List<Models.Databases.MemberPermission>> GetItems()
        {
            return await Table.ToListAsync();
        }
        public async Task<List<Models.Databases.MemberPermission>> GetItemByMemberId(long memberId)
        {
            return await Table.Where(x => x.MemberId == memberId).ToListAsync();
        }
        public override async Task<Models.Databases.MemberPermission> Select(long id)
        {
            return await Table.Include(x => x.Member).FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<bool> DeletePermissionsByMemberId(long memberId)
        {
            IEnumerable<Models.Databases.MemberPermission> entities = Table.Where(x => x.MemberId == memberId).AsEnumerable();

            Table.RemoveRange(entities);
            try
            {
                await m_Context.SaveChangesAsync();

                m_Logger.LogInformation($"Delete {RepositoryName}, Database Id : {entities.Select(x => x.Id)}");

                return true;
            }
            catch (System.Exception e)
            {
                m_Logger.LogCritical($"Delete {RepositoryName}, Exception : {e}");

                return false;
            }
        }
    }
}