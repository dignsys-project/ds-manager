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
    public interface IMemberDepartmentService
    {
        Task<Prometheus.Models.Databases.MemberDepartment> GetMemberDepartmentById(long memberDepartmentId);
        Task<Prometheus.Models.Databases.MemberDepartment> Insert(Prometheus.Models.Databases.MemberDepartment memberDepartment);
        Task<bool> Delete(Prometheus.Models.Databases.MemberDepartment memberDepartment);
        Task<bool> DeleteById(long memberDepartmentId);
    }

    public class MemberDepartmentService : IMemberDepartmentService
    {
        private readonly ILogger m_Logger = null;
        private readonly Databases.Repositories.IMemberDepartmentRepository m_Repository = null;
        public MemberDepartmentService(ILogger<MemberDepartmentService> logger, Databases.Repositories.IMemberDepartmentRepository memberDepartmentRepository)
        {
            m_Logger = logger;
            m_Repository = memberDepartmentRepository;
        }

        public async Task<bool> Delete(MemberDepartment memberDepartment)
        {
            return await m_Repository.Delete(memberDepartment);
        }

        public async Task<bool> DeleteById(long memberDepartmentId)
        {
            return await m_Repository.DeleteById(memberDepartmentId);
        }

        public async Task<MemberDepartment> GetMemberDepartmentById(long memberDepartmentId)
        {
            return await m_Repository.Select(memberDepartmentId);
        }

        public async Task<MemberDepartment> Insert(MemberDepartment memberDepartment)
        {
            return await m_Repository.Insert(memberDepartment);
        }
    }
}