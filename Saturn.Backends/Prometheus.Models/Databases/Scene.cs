using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace Prometheus.Models.Databases
{
    public class Scene : DatabaseId
    {
        [MaxLength(100)]
        public string Name { get; set; }

        public long? ResourceId { get; set; }

        [ForeignKey("ResourceId")]
        public Resource Resource { get; set; }

        [Required]
        public long CreatedSeconds { get; set; }

        [Required]
        public long UpdatedSeconds { get; set; }

        [Required]
        public long Width { get; set; }
        [Required]
        public long Height { get; set; }

        public long? DepartmentSceneFolderId { get; set; }

        [ForeignKey("DepartmentSceneFolderId")]

        public DepartmentSceneFolder DepartmentSceneFolder { get; set; }
        public List<SceneResource> SceneResources { get; set; }
        public List<SceneConnection> SceneConnections { get; set; }
        public bool IsValified { get; set; }
    }

    namespace Extensions
    {
        public static class SceneExtensions
        {
            public static Saturn.Backends.Protocols.Common.SceneBase ToMessageBase(this Scene scene)
            {
                var message = new Saturn.Backends.Protocols.Common.SceneBase();
                message.SceneId = scene.Id;
                message.Name = scene.Name;
                if (null != scene.Resource)
                {
                    message.Resource = scene.Resource.ToMessage();
                }

                message.CreatedSeconds = scene.CreatedSeconds;
                message.Width = scene.Width;
                message.Height = scene.Height;
                message.DepartmentSceneFolderId = scene.DepartmentSceneFolderId ?? 0;

                message.IsValified = scene.IsValified;
                message.UpdatedSeconds = scene.UpdatedSeconds;

                return message;
            }
            public static Saturn.Backends.Protocols.Common.Scene ToMessage(this Scene scene)
            {
                var message = new Saturn.Backends.Protocols.Common.Scene();
                message.Base = scene.ToMessageBase();
                if (null != scene.SceneResources)
                {
                    message.SceneResourceBases.AddRange(scene.SceneResources.Select(x => x.ToMessageBase()));
                }

                if (null != scene.SceneConnections)
                {
                    message.SceneConnections.AddRange(scene.SceneConnections.Select(x => x.ToMessage()));
                }

                return message;
            }
        }
    }
}