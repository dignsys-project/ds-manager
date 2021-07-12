using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Prometheus.Services
{
    public interface IMemberService
    {
        Task<List<Models.Databases.Member>> GetMembers();
        Task<List<Models.Databases.Member>> GetMembersExcludeDepartmentById(long departmentId);
        Task<List<Models.Databases.MemberPermission>> GetMemberPermissions();
        Task<List<Models.Databases.MemberDepartment>> GetMemberDepartments();

        Task<List<Models.Databases.Department>> GetDepartmentsByMemberId(long memberId);

        Task<Models.Databases.Member> GetMemberByEmail(string email);
        Task<Models.Databases.Member> GetMemberByGuid(Guid id);
        Task<Models.Databases.Member> GetMemberById(long id);
        Task<Models.Databases.Member> GetMemberPermissionBymemberId(long id);

        Task<Models.Databases.Member> AddPermission(Models.Databases.Member member, Saturn.Backends.Protocols.Common.MEMBER_PERMISSION_KIND permission);
        Task<Models.Databases.Member> RemovePermission(Models.Databases.Member member, Models.Databases.MemberPermission memberPermission);

        Task<bool> DeletePermission(Models.Databases.Member member);

        Task<bool> UpdateMemberKind(Models.Databases.Member member, Models.Databases.Member otherMember, Saturn.Backends.Protocols.Common.MEMBER_KIND kind);
        Task<bool> UpdateMemberPermissions(Models.Databases.Member member, Models.Databases.Member otherMember, List<Saturn.Backends.Protocols.Common.MEMBER_PERMISSION_KIND> permissions);

        Task<Models.Databases.Member> Create(Models.Databases.Member member);

        Task<bool> Update(Models.Databases.Member member);

        Task<bool> Delete(Models.Databases.Member member);

        bool CreatePasswordHash(string password, out string passwordHash, out string passwordSalt);
        bool VarifyHashedPassword(string password, string passwordHash, string passwordSalt);

        Task<Models.Databases.Member> InsertMemberDepartment(Models.Databases.Member member, Models.Databases.Department departemnt);

        Task<bool> HaveAdmin();
    }

    public class MemberService : IMemberService
    {
        private readonly ILogger m_Logger = null;
        private readonly Databases.Repositories.IMemberRepository m_Members = null;
        private readonly Databases.Repositories.IMemberPermissionRepository m_MemberPermissions = null;
        private readonly Databases.Repositories.IMemberDepartmentRepository m_MemberDepartments = null;
        public MemberService(
            ILogger<MemberService> logger,
            Databases.Repositories.IMemberRepository members,
            Databases.Repositories.IMemberPermissionRepository memberPermissions,
            Databases.Repositories.IMemberDepartmentRepository memberDepartments)
        {
            m_Logger = logger;
            m_Members = members;
            m_MemberDepartments = memberDepartments;
            m_MemberPermissions = memberPermissions;
        }

        public async Task<bool> HaveAdmin()
        {
            return 0 < await m_Members.AdminCount();
        }

        public async Task<List<Models.Databases.Member>> GetMembers()
        {
            return await m_Members.Table.Include(x => x.MemberDepartments).ThenInclude(x => x.Department).Include(x => x.MemberPermissions).ToListAsync();
        }
        public async Task<List<Models.Databases.Member>> GetMembersExcludeDepartmentById(long departmentId)
        {
            var members = await m_Members.Table
            .Include(x => x.MemberDepartments).ThenInclude(x => x.Department).ToListAsync();

            return members.Where(x => -1 == x.MemberDepartments.FindIndex(x => x.DepartmentId == departmentId)).ToList();
        }

        public async Task<List<Models.Databases.MemberPermission>> GetMemberPermissions()
        {
            return await m_MemberPermissions.GetItems();
        }

        public async Task<List<Models.Databases.MemberDepartment>> GetMemberDepartments()
        {
            return await m_MemberDepartments.GetItems();
        }
        public async Task<List<Models.Databases.Department>> GetDepartmentsByMemberId(long memberId)
        {
            return await m_MemberDepartments.GetDepartmentByMemberId(memberId);
        }

        public async Task<Models.Databases.Member> InsertMemberDepartment(Models.Databases.Member member, Models.Databases.Department departemnt)
        {
            var memberDepartment = new Models.Databases.MemberDepartment();
            memberDepartment.Member = member;
            memberDepartment.Department = departemnt;
            memberDepartment = await m_MemberDepartments.Insert(memberDepartment);
            if (null != memberDepartment)
            {
                return member;
            }

            return null;
        }

        public async Task<Models.Databases.Member> GetMemberByGuid(Guid id)
        {
            return await m_Members.Table.Include(x => x.MemberDepartments).ThenInclude(x => x.Department).Include(x => x.MemberPermissions).FirstOrDefaultAsync(x => x.Uuid == id);
        }
        public async Task<Models.Databases.Member> GetMemberById(long id)
        {
            return await m_Members.Table.Include(x => x.MemberDepartments).ThenInclude(x => x.Department).Include(x => x.MemberPermissions).FirstOrDefaultAsync(x => x.Id == id);
        }
        public async Task<Models.Databases.Member> GetMemberPermissionBymemberId(long id)
        {
            return await m_Members.Table.Include(x => x.MemberPermissions).Include(x => x.MemberDepartments).FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<bool> UpdateMemberPermissions(Models.Databases.Member member, Models.Databases.Member otherMember, List<Saturn.Backends.Protocols.Common.MEMBER_PERMISSION_KIND> permissions)
        {
            var execution = m_Members.GetExecution();
            bool bSuccess = await execution.ExecuteAsync(async () =>
            {
                // for remove 
                otherMember.MemberPermissions.RemoveAll(x => !permissions.Contains(x.Permission));

                // for create 
                foreach (var permission in permissions.Where(permission => -1 == otherMember.MemberPermissions.FindIndex(x => x.Permission == permission)))
                {
                    if (null == otherMember.MemberPermissions)
                    {
                        otherMember.MemberPermissions = new List<Models.Databases.MemberPermission>();
                    }

                    otherMember.MemberPermissions.Add(new Models.Databases.MemberPermission { Member = member, Permission = permission });
                }

                using (var tran = await m_Members.BeginTransaction())
                {
                    try
                    {

                        bSuccess = await m_Members.Update(otherMember);
                        if (!bSuccess)
                        {
                            m_Logger.LogCritical($"Member Kind Update Failed., MemberId: {otherMember.Id}");

                            await tran.RollbackAsync();

                            return false;
                        }

                        // insert member record

                        await tran.CommitAsync();
                    }
                    catch (System.Exception ex)
                    {
                        m_Logger.LogCritical($"MemberService, UpdateMemberKind Failed. Exception : {ex}");

                        await tran.RollbackAsync();

                        return false;
                    }
                }

                return true;
            });

            return bSuccess;
        }
        public async Task<bool> UpdateMemberKind(Models.Databases.Member member, Models.Databases.Member otherMember, Saturn.Backends.Protocols.Common.MEMBER_KIND kind)
        {
            var execution = m_Members.GetExecution();
            bool bSuccess = await execution.ExecuteAsync(async () =>
            {
                using (var tran = await m_Members.BeginTransaction())
                {
                    try
                    {
                        otherMember.MemberKind = kind;
                        bSuccess = await m_Members.Update(otherMember);
                        if (!bSuccess)
                        {
                            m_Logger.LogCritical($"Member Kind Update Failed., MemberId: {otherMember.Id}");

                            await tran.RollbackAsync();

                            return false;
                        }

                        // insert member record

                        await tran.CommitAsync();
                    }
                    catch (System.Exception ex)
                    {
                        m_Logger.LogCritical($"MemberService, UpdateMemberKind Failed. Exception : {ex}");

                        await tran.RollbackAsync();

                        return false;
                    }
                }

                return true;
            });

            return bSuccess;
        }

        public async Task<Models.Databases.Member> AddPermission(Models.Databases.Member member, Saturn.Backends.Protocols.Common.MEMBER_PERMISSION_KIND permission)
        {
            if (null == member.MemberPermissions)
            {
                member.MemberPermissions = new List<Models.Databases.MemberPermission>();
            }

            var memberPermission = new Models.Databases.MemberPermission() { Member = member, MemberId = member.Id, Permission = permission };
            member.MemberPermissions.Add(memberPermission);

            bool bSuccess = await m_Members.Update(member);
            if (!bSuccess)
            {
                m_Logger.LogCritical($"Add Member Permission Failed, MemberId : {member.Id}, Permission: {permission}");

                return null;
            }

            m_Logger.LogInformation($"Add Member Permission Failed, MemberId : {member.Id}, Permission Id: {memberPermission.Id}");

            return member;
        }

        public async Task<bool> DeletePermission(Models.Databases.Member member)
        {
            return await m_MemberPermissions.DeletePermissionsByMemberId(member.Id);
        }
        public async Task<Models.Databases.Member> RemovePermission(Models.Databases.Member member, Models.Databases.MemberPermission memberPermission)
        {
            if (!member.MemberPermissions.Remove(memberPermission))
            {
                return null;
            }

            bool bSuccess = await m_Members.Update(member);
            if (!bSuccess)
            {
                m_Logger.LogCritical($"Remove Member Permission Failed, MemberId : {member.Id}, Permission Id: {memberPermission.Id}");

                return null;
            }

            return member;
        }

        public async Task<Models.Databases.Member> Create(Models.Databases.Member member)
        {
            return await m_Members.Insert(member);
        }

        public async Task<Models.Databases.Member> GetMemberByEmail(string email)
        {
            return await m_Members.SelectByEmail(email);
        }

        public async Task<bool> Update(Models.Databases.Member member)
        {
            return await m_Members.Update(member);
        }

        public async Task<bool> Delete(Models.Databases.Member member)
        {
            return await m_Members.Delete(member);
        }

        public bool VarifyHashedPassword(string password, string passwordHash, string passwordSalt)
        {
            var hash = CreatePasswordSalt(password, Convert.FromBase64String(passwordSalt));

            return CryptographicOperations.FixedTimeEquals(hash, Convert.FromBase64String(passwordHash));
        }


        public bool CreatePasswordHash(string password, out string passwordHash, out string passwordSalt)
        {
            try
            {
                // generate a 128-bit salt using a secure PRNG
                var salt = new byte[128 / 8];

                using (var rng = RandomNumberGenerator.Create())
                {
                    rng.GetBytes(salt);
                }

                // derive a 256-bit subkey (use HMACSHA1 with 10,000 iterations)
                passwordSalt = Convert.ToBase64String(salt);
                passwordHash = Convert.ToBase64String(CreatePasswordSalt(password, salt));

                return true;
            }
            catch (System.Exception e)
            {

                m_Logger.LogCritical($"CreatePassword Hash Failed, Exception : {e}");
            }

            passwordHash = null;
            passwordSalt = null;

            return false;
        }

        private byte[] CreatePasswordSalt(string password, byte[] passworhSalt)
        {
            return KeyDerivation.Pbkdf2(
                    password: password,
                    salt: passworhSalt,
                    prf: KeyDerivationPrf.HMACSHA1,
                    iterationCount: 10000,
                    numBytesRequested: 256 / 8
                );
        }
    }
}