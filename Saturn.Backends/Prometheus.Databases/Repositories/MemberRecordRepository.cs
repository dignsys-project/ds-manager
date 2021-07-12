using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Prometheus.Models.Databases;

namespace Prometheus.Databases.Repositories
{
    public interface IMemberRecordRepository : Commons.IRepository<Models.Databases.MemberRecord>
    {
    }

    public class MemberRecordRepository : Commons.AbstractRepository<Models.Databases.MemberRecord>, IMemberRecordRepository
    {
        public override DbSet<MemberRecord> Table => m_Context.MemberRecords;

        protected override string RepositoryName => "MemberRecords";

        public MemberRecordRepository(ILogger<MemberRecordRepository> logger, Databases.DatabaseDbContext context) : base(logger, context) { }

    }
}