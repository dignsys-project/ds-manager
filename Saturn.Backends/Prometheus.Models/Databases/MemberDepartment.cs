using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Prometheus.Models.Databases
{
    public class MemberDepartment : DatabaseId
    {
        public long MemberId { get; set; }

        [ForeignKey("MemberId")]
        public Member Member { get; set; }

        public long DepartmentId { get; set; }
        [ForeignKey("DepartmentId")]
        public Department Department { get; set; }
    }

    namespace Extensions
    {
        public static class MemberDepartmentExtensions
        {
            public static Saturn.Backends.Protocols.Common.MemberDepartment ToMessage(this MemberDepartment memberDepartment)
            {
                var message = new Saturn.Backends.Protocols.Common.MemberDepartment();
                message.Id = memberDepartment.Id;
                message.MemberBase = memberDepartment.Member.ToMessageBase();
                message.DepartmentBase = memberDepartment.Department.ToMessageBase();
                return message;
            }
        }
    }
}
