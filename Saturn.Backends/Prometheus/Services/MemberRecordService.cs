using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Prometheus.Models.Databases;
using Saturn.Backends.Commons;
using Saturn.Backends.Commons.Extensions;

namespace Prometheus.Services
{
    public interface IMemberRecordService
    {
        Task<PaginatedList<Prometheus.Models.Databases.MemberRecord>> GetItems(int from, int size);
        Task<PaginatedList<Prometheus.Models.Databases.MemberRecord>> GetItemsByMemberId(long memberId, int from, int size);

        Task<Prometheus.Models.Databases.MemberRecord> Insert(Member member, Saturn.Backends.Protocols.Common.MemberRecordBlueprint memberRecordBlueprint);

        Task<Prometheus.Models.Databases.MemberRecord> Insert(Prometheus.Models.Databases.MemberRecord memberRecord);

        Task<bool> Update(Prometheus.Models.Databases.MemberRecord memberRecord);

        Task<bool> Delete(Prometheus.Models.Databases.MemberRecord memberRecord);
        Task<bool> DeleteById(long memberRecordId);
    }

    public class MemberRecordService : IMemberRecordService
    {
        private readonly ILogger m_Logger = null;
        private readonly Databases.Repositories.IMemberRecordRepository m_Repository = null;
        public MemberRecordService(ILogger<MemberRecordService> logger, Databases.Repositories.IMemberRecordRepository memberRecordRepository)
        {
            m_Logger = logger;
            m_Repository = memberRecordRepository;
        }

        public async Task<PaginatedList<MemberRecord>> GetItems(int from, int size)
        {
            return await PaginatedList<Prometheus.Models.Databases.MemberRecord>.CreateAsync(m_Repository.Table.Include(x => x.Member).OrderByDescending(x => x.BehaviorSeconds), from, size);
        }

        public async Task<PaginatedList<Prometheus.Models.Databases.MemberRecord>> GetItemsByMemberId(long memberId, int from, int size)
        {
            return await PaginatedList<Prometheus.Models.Databases.MemberRecord>.CreateAsync(m_Repository.Table.Include(x => x.Member).Where(x => x.Member.Id == memberId).OrderByDescending(x => x.BehaviorSeconds), from, size);
        }

        public async Task<bool> Delete(MemberRecord memberRecord)
        {
            return await m_Repository.Delete(memberRecord);
        }

        public async Task<bool> DeleteById(long memberRecordId)
        {
            return await m_Repository.DeleteById(memberRecordId);
        }

        public async Task<Prometheus.Models.Databases.MemberRecord> Insert(Member member, Saturn.Backends.Protocols.Common.MemberRecordBlueprint memberRecordBlueprint)
        {
            var memberRecord = new MemberRecord();
            memberRecord.Member = member;
            memberRecord.SerializedParamater = memberRecordBlueprint.ToNetwork();
            memberRecord.BehaviorSeconds = DateTimeOffset.Now.ToUnixTimeSeconds();
            memberRecord.kind = memberRecordBlueprint.Kind;

            return await Insert(memberRecord);
        }


        public async Task<MemberRecord> Insert(MemberRecord memberRecord)
        {
            return await m_Repository.Insert(memberRecord);
        }

        public async Task<bool> Update(MemberRecord memberRecord)
        {
            return await m_Repository.Update(memberRecord);
        }
    }
}