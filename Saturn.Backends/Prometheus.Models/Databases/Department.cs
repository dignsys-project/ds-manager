using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace Prometheus.Models.Databases
{
    public class Department : DatabaseId
    {
        [MaxLength(20), Required]
        public string Name { get; set; }
        public long CreatedSeconds { get; set; }
        public ICollection<Connector> Connectors { get; set; }
        public ICollection<MemberDepartment> MemberDepartments { get; set; }
        public List<DepartmentLower> DepartmentLowers { get; set; }
        public List<DepartmentResourceFolder> DepartmentResourceFolders { get; set; }
        public List<DepartmentSceneFolder> DepartmentSceneFolders { get; set; }
    }

    namespace Extensions
    {
        public static class DepartmentExtensions
        {
            public static Saturn.Backends.Protocols.Common.DepartmentBase ToMessageBase(this Department department)
            {
                var message = new Saturn.Backends.Protocols.Common.DepartmentBase();
                message.Id = department.Id;
                message.Name = department.Name;
                message.CreatedSeconds = department.CreatedSeconds;

                return message;
            }

            public static Saturn.Backends.Protocols.Common.Department ToMessage(this Department department)
            {
                var message = new Saturn.Backends.Protocols.Common.Department();
                message.Base = department.ToMessageBase();
                if (department.Connectors?.Count > 0)
                {
                    message.ConnectorBases.AddRange(department.Connectors.Select(x => x.ToMessageBase()));
                }

                if (department.MemberDepartments?.Count > 0)
                {
                    message.MemberBases.AddRange(department.MemberDepartments.Select(x => x.Member.ToMessageBase()));
                }

                if (department.DepartmentLowers?.Count > 0)
                {
                    message.DepartmentLowers.AddRange(department.DepartmentLowers.Select(x => x.ToMessageBase()));
                }

                return message;
            }

            public static Department FromMessage(this Department department, Saturn.Backends.Protocols.Common.Department message)
            {
                if (null == department)
                {
                    return null;
                }

                // department.Name = message.Name;

                return department;
            }
        }
    }

}
