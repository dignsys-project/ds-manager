using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Prometheus.Models.Databases
{
    public class Resource : DatabaseId
    {
        [Required]
        public Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND Kind { get; set; }

        [Required]
        public string Location { get; set; }

        [Required, MaxLength(256)]
        public string Folder { get; set; }

        [Required, MaxLength(256)]
        public string Name { get; set; }

        [Required, MaxLength(256)]
        public string ContentType { get; set; }

        [Required]
        public byte[] Hash { get; set; }

        public long CreatedSeconds { get; set; }
        public long UpdateSeconds { get; set; }

        public long? PreviewResourceId { get; set; }

        public long Size { get; set; }

        [ForeignKey("PreviewResourceId")]
        public PreviewResource PreviewResource { get; set; }

        public long? DepartmentResourceFolderId { get; set; }

        [ForeignKey("DepartmentResourceFolderId")]

        public DepartmentResourceFolder DepartmentResourceFolder { get; set; }

        public long Duration { get; set; }
    }

    namespace Extensions
    {
        public static class ResourceExtensions
        {
            public static Saturn.Backends.Protocols.Common.Resource ToMessage(this Resource resource)
            {
                var message = new Saturn.Backends.Protocols.Common.Resource();
                message.ResourceId = resource.Id;
                message.Kind = resource.Kind;
                message.Location = resource.Location;
                message.FolderName = resource.Folder;
                message.Name = resource.Name;
                message.Hash = System.Convert.ToBase64String(resource.Hash);
                message.Size = resource.Size;
                message.Created = resource.CreatedSeconds;
                message.Updated = resource.UpdateSeconds;
                message.Duration = resource.Duration;
                if (null != resource.PreviewResource)
                {
                    message.PreviewResource = resource.PreviewResource.ToMessage();
                }

                return message;
            }
        }
    }
}