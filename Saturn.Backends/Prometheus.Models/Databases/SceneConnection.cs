using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace Prometheus.Models.Databases
{
    public class SceneConnection : DatabaseId
    {
        public long SceneId { get; set; }

        [ForeignKey("SceneId")]
        public Scene Scene { get; set; }
        public long ConnectedSceneId { get; set; }

        [ForeignKey("ConnectedSceneId")]
        public Scene ConnectedScene { get; set; }
    }

    namespace Extensions
    {
        public static class SceneIncludeExtensions
        {
            public static Saturn.Backends.Protocols.Common.SceneConnection ToMessage(this SceneConnection sceneConnection)
            {
                var message = new Saturn.Backends.Protocols.Common.SceneConnection();
                message.SceneConnectionId = sceneConnection.Id;
                message.SceneId = sceneConnection.SceneId;
                message.ConnectedSceneBase = sceneConnection.ConnectedScene?.ToMessageBase();

                return message;
            }
        }
    }
}