using System.ComponentModel.DataAnnotations;

namespace Prometheus.Models.Databases
{
    public class PreviewResource : DatabaseId
    {
        [Required]
        public string Location { get; set; }
    }

    namespace Extensions
    {
        public static class PreviewResourceExtensions
        {
            public static Saturn.Backends.Protocols.Common.PreviewResource ToMessage(this PreviewResource previewResource)
            {
                var message = new Saturn.Backends.Protocols.Common.PreviewResource();
                message.PreviewResourceId = previewResource.Id;
                message.Location = previewResource.Location;
                return message;
            }
        }
    }
}
