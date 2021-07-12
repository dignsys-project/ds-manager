using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace Prometheus.Models.Databases
{
    public class DepartmentSceneFolder : DatabaseId
    {
        [MaxLength(20), Required]
        public string Name { get; set; }

        public long DepartmentId { get; set; }

        [ForeignKey("DepartmentId")]
        public Department Department { get; set; }

        public long? ParentDepartmentSceneFolderId { get; set; }

        [ForeignKey("ParentDepartmentSceneFolderId")]
        public DepartmentSceneFolder Parent { get; set; }

        public long CreatedSeconds { get; set; }

        public long Size { get; set; }
    }

    namespace Extensions
    {
        public static class DepartmentSceneFolderExtensions
        {
            public static Saturn.Backends.Protocols.Common.DepartmentSceneFolder ToMessage(this DepartmentSceneFolder m)
            {
                var message = new Saturn.Backends.Protocols.Common.DepartmentSceneFolder();
                message.DepartmentFolderId = m.Id;
                message.Name = m.Name;
                message.DepartmentId = m.DepartmentId;
                message.ParentDepartmentSceneFolderId = m.ParentDepartmentSceneFolderId ?? 0;
                message.CreatedSeconds = m.CreatedSeconds;
                message.Size = m.Size;

                return message;
            }
        }
    }
}
