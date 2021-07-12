using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace Prometheus.Models.Databases
{
    public class DepartmentResourceFolder : DatabaseId
    {
        [MaxLength(20), Required]
        public string Name { get; set; }

        public long DepartmentId { get; set; }

        [ForeignKey("DepartmentId")]
        public Department Department { get; set; }

        public long? ParentDepartmentResourceFolderId { get; set; }

        [ForeignKey("ParentDepartmentResourceFolderId")]
        public DepartmentResourceFolder Parent { get; set; }

        public long CreatedSeconds { get; set; }

        public long Size { get; set; }
    }

    namespace Extensions
    {
        public static class DepartmentResourceFolderExtensions
        {
            public static Saturn.Backends.Protocols.Common.DepartmentResourceFolder ToMessage(this DepartmentResourceFolder m)
            {
                var message = new Saturn.Backends.Protocols.Common.DepartmentResourceFolder();
                message.DepartmentFolderId = m.Id;
                message.Name = m.Name;
                message.DepartmentId = m.DepartmentId;
                message.ParentDepartmentResourceFolderId = m.ParentDepartmentResourceFolderId ?? 0;
                message.CreatedSeconds = m.CreatedSeconds;
                message.Size = m.Size;

                return message;
            }
        }
    }
}
