using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace Prometheus.Models.Databases
{
    public class DepartmentLower : DatabaseId
    {
        public long DepartmentId { get; set; }

        [ForeignKey("DepartmentId")]
        public Department Departemnt { get; set; }

        public long LowerDepartmentId { get; set; }

        [ForeignKey("LowerDepartmentId")]
        public Department LowerDepartemnt { get; set; }

        public long CreatedSeconds { get; set; }
    }

    namespace Extensions
    {

        public static class DepartmentLowerExtensions
        {
            public static Saturn.Backends.Protocols.Common.DepartmentLowerBase ToMessageBase(this DepartmentLower departmentLower)
            {
                var message = new Saturn.Backends.Protocols.Common.DepartmentLowerBase();
                message.Id = departmentLower.Id;
                if (null != departmentLower.LowerDepartemnt)
                {
                    message.LowerDepartmentBase = departmentLower.LowerDepartemnt?.ToMessageBase();
                }
                message.CreatedSeconds = departmentLower.CreatedSeconds;

                return message;
            }
        }

    }

}
