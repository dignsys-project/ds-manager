using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace Prometheus.Models.Databases
{
    public class Member : DatabaseId
    {
        [Required]
        public Guid Uuid { get; set; }

        [MaxLength(50), Required]
        public string Email { get; set; }

        [Required, MaxLength(512)]
        public string PasswordHash { get; set; }

        [Required, MaxLength(512)]
        public string PasswordSalt { get; set; }

        [Required]
        public Saturn.Backends.Protocols.Common.MEMBER_KIND MemberKind { get; set; }

        [Required]
        public Saturn.Backends.Protocols.Common.MEMBER_REGISTER_KIND RegisterKind { get; set; }

        [Required]
        public long CreatedSeconds { get; set; }

        public long LastConnectedSeconds { get; set; }
        public List<MemberPermission> MemberPermissions { get; set; }
        public List<MemberDepartment> MemberDepartments { get; set; }
    }

    namespace Extensions
    {
        public static class MemberExtensions
        {
            public static Saturn.Backends.Protocols.Common.MemberBase ToMessageBase(this Member member)
            {
                var message = new Saturn.Backends.Protocols.Common.MemberBase();
                message.Id = member.Id;
                message.Uuid = member.Uuid.ToString();
                message.Email = member.Email;
                message.MemberKind = member.MemberKind;
                message.RegisterKind = member.RegisterKind;
                message.CreatedSeconds = member.CreatedSeconds;
                message.LastConnectedSeconds = member.LastConnectedSeconds;

                return message;
            }

            public static Saturn.Backends.Protocols.Common.Member ToMessage(this Member member)
            {
                var message = new Saturn.Backends.Protocols.Common.Member();
                message.Base = member.ToMessageBase();
                if (member.MemberDepartments?.Count > 0)
                {
                    message.DepartmentBases.AddRange(member.MemberDepartments?.Select(x => x.Department.ToMessageBase()));
                }

                if (member.MemberPermissions?.Count > 0)
                {
                    message.Permissions.AddRange(member.MemberPermissions?.Select(x => x.Permission));
                }

                return message;
            }

            public static bool IsAdministrator(this Member member)
            {
                return member.MemberKind == Saturn.Backends.Protocols.Common.MEMBER_KIND.Admin;
            }

            public static bool HavePermission(this Member member, Saturn.Backends.Protocols.Common.MEMBER_PERMISSION_KIND permissionKind)
            {
                if (null == member.MemberPermissions)
                {
                    return false;
                }

                return member.MemberPermissions.Where(x => x.Permission == permissionKind).Count() > 0;
            }
        }
    }
}
