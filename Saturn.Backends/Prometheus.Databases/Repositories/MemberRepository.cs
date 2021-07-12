using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Prometheus.Models.Databases;

namespace Prometheus.Databases.Repositories
{
    public interface IMemberRepository : Commons.IRepository<Models.Databases.Member>
    {
        Task<Models.Databases.Member> SelectByUuid(Guid uuid);

        Task<Models.Databases.Member> SelectByEmail(string email);

        Task<long> MemberCount();

        Task<long> AdminCount();

        Task<long> ManagerCount();
    }

    public class MemberRepository : Commons.AbstractRepository<Models.Databases.Member>, IMemberRepository
    {
        public override DbSet<Member> Table => m_Context.Members;

        protected override string RepositoryName => "Members";

        public MemberRepository(ILogger<MemberRepository> logger, Databases.DatabaseDbContext context) : base(logger, context) { }

        private async Task<long> MemberCount(Saturn.Backends.Protocols.Common.MEMBER_KIND memberKind)
        {
            return await Table.LongCountAsync(x => x.MemberKind == memberKind);
        }

        public async Task<Models.Databases.Member> SelectByUuid(Guid uuid)
        {
            return await Table.Include(x => x.MemberDepartments).ThenInclude(x => x.Department).Include(x => x.MemberPermissions).SingleOrDefaultAsync(x => x.Uuid == uuid);
        }

        public async Task<Models.Databases.Member> SelectByEmail(string email)
        {
            return await Table.Include(x => x.MemberDepartments).ThenInclude(x => x.Department).Include(x => x.MemberPermissions).SingleOrDefaultAsync(x => x.Email.ToLower() == email.ToLower());
        }

        public async Task<long> MemberCount()
        {
            return await MemberCount(Saturn.Backends.Protocols.Common.MEMBER_KIND.Normal);
        }

        public async Task<long> AdminCount()
        {
            return await MemberCount(Saturn.Backends.Protocols.Common.MEMBER_KIND.Admin);
        }

        public async Task<long> ManagerCount()
        {
            return await MemberCount(Saturn.Backends.Protocols.Common.MEMBER_KIND.Manager);
        }
    }
}