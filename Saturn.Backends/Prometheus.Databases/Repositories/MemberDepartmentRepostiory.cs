using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Prometheus.Databases.Repositories
{
    public interface IMemberDepartmentRepository : Commons.IRepository<Models.Databases.MemberDepartment>
    {
        Task<List<Models.Databases.MemberDepartment>> GetItems();

        Task<List<Models.Databases.MemberDepartment>> GetItemByMemberId(long memberId);
        Task<List<Models.Databases.Department>> GetDepartmentByMemberId(long memberId);
    }

    public class MemberDepartmentRepository : Commons.AbstractRepository<Models.Databases.MemberDepartment>, IMemberDepartmentRepository
    {
        public override DbSet<Models.Databases.MemberDepartment> Table => m_Context.MemberDepartments;

        protected override string RepositoryName => "MemberDepartments";

        public MemberDepartmentRepository(ILogger<MemberDepartmentRepository> logger, Databases.DatabaseDbContext context) : base(logger, context) { }

        public async Task<List<Models.Databases.MemberDepartment>> GetItems()
        {
            return await Table.Include(x => x.Department).ToListAsync();
        }
        public async Task<List<Models.Databases.MemberDepartment>> GetItemByMemberId(long memberId)
        {
            return await Table.Include(x => x.Department).Where(x => x.MemberId == memberId).ToListAsync();
        }

        public async Task<List<Models.Databases.Department>> GetDepartmentByMemberId(long memberId)
        {
            return await Table.Include(x => x.Department).Where(x => x.MemberId == memberId).Select(x => x.Department).ToListAsync();
        }
        public override async Task<Models.Databases.MemberDepartment> Select(long id)
        {
            return await Table.Include(x => x.Department).Include(x => x.Member).FirstOrDefaultAsync(x => x.Id == id);
        }
    }
}