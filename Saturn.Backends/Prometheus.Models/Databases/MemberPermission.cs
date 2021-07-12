using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Prometheus.Models.Databases
{
    public class MemberPermission : DatabaseId
    {
        public long MemberId { get; set; }

        [ForeignKey("MemberId")]
        public Member Member { get; set; }
        public Saturn.Backends.Protocols.Common.MEMBER_PERMISSION_KIND Permission { get; set; }
    }

    namespace Extensions
    {
        public static class MemberPermissionExtensions
        {
            public static Saturn.Backends.Protocols.Common.MemberPermission ToMessage(this MemberPermission memberPermission)
            {
                var message = new Saturn.Backends.Protocols.Common.MemberPermission();
                message.Id = memberPermission.Id;
                message.MemberBase = memberPermission.Member.ToMessageBase();
                message.Permission = memberPermission.Permission;
                return message;
            }
        }
    }
}
