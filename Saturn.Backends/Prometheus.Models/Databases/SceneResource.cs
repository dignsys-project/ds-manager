using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace Prometheus.Models.Databases
{
    public class SceneResource : DatabaseId
    {
        public long SceneId { get; set; }

        [ForeignKey("SceneId")]
        public Scene Scene { get; set; }

        public long ResourceId { get; set; }
        [ForeignKey("ResourceId")]
        public Resource Resource { get; set; }
    }

    namespace Extensions
    {
        public static class SceneResourceExtensions
        {
            public static Saturn.Backends.Protocols.Common.SceneResourceBase ToMessageBase(this SceneResource sceneResource)
            {
                var message = new Saturn.Backends.Protocols.Common.SceneResourceBase();
                message.SceneResourceId = sceneResource.Id;
                message.SceneId = sceneResource.SceneId;
                message.Resource = sceneResource.Resource.ToMessage();
                return message;
            }

            public static Saturn.Backends.Protocols.Common.SceneResource ToMessage(this SceneResource sceneResource)
            {
                var message = new Saturn.Backends.Protocols.Common.SceneResource();
                message.Base = sceneResource.ToMessageBase();
                return message;
            }
        }
    }
}