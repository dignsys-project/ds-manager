using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

// EXPERIMENT : 부모만 가진 트리

namespace Prometheus.Models.Databases
{
    public class DepartmentNode : DatabaseId
    {
        public long DepartmentId { get; set; }

        [ForeignKey("DepartmentId")]
        public Department Department { get; set; }

        public long? Order { get; set; }

        public long? ParentDepartmentNodeId { get; set; }
    }

    namespace Extensions
    {
        public static class DepartmentNodeExtensions
        {
            public static Saturn.Backends.Protocols.Common.DepartmentNodeBase ToMessageBase(this DepartmentNode departmentNode)
            {
                var message = new Saturn.Backends.Protocols.Common.DepartmentNodeBase();
                message.Id = departmentNode.Id;
                message.Order = departmentNode.Order ?? 0;
                message.ParentDepartmentNodeId = departmentNode.ParentDepartmentNodeId ?? 0;

                return message;
            }


            public static Saturn.Backends.Protocols.Common.DepartmentNode ToMessage(this DepartmentNode departmentNode)
            {
                var message = new Saturn.Backends.Protocols.Common.DepartmentNode();
                message.Base = departmentNode.ToMessageBase();
                message.Department = departmentNode.Department?.ToMessage();

                return message;
            }

            public static DepartmentNode FromMessage(this DepartmentNode departmentNode, Saturn.Backends.Protocols.Common.DepartmentNode message)
            {
                if (null == departmentNode)
                {
                    return null;
                }

                // departmentNode.Order = message.Order;
                // departmentNode.ParentDepartmentNodeId = message.ParentDepartmentNodeId;
                return departmentNode;
            }
        }
    }

}
