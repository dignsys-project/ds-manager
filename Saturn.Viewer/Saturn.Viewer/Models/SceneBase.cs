using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Saturn.Viewer.Models
{
    public class SceneBase : IEquatable<SceneBase>
    {
        public long SceneId { get; set; }
        public string Name { get; set; }

        // 씬의 블루프린트 리소스
        public Resource Resource { get; set; }
        public long Width { get; set; }
        public long Height { get; set; }

        public long UpdateSeconds { get; set; }

        public bool Equals(SceneBase other)
        {
            return SceneId == other.SceneId;
        }

        public void FromMessage(Saturn.Backends.Protocols.Common.SceneBase message)
        {
            SceneId = message.SceneId;
            Name = message.Name;
            if (null != message.Resource)
            {
                Resource = message.Resource.ToElement();
            }
            Width = message.Width;
            Height = message.Height;
            UpdateSeconds = message.UpdatedSeconds;
        }
    }

    public static class SceneBaseExtensions
    {
        public static SceneBase ToElement(this Saturn.Backends.Protocols.Common.SceneBase message)
        {
            var scenebase = new SceneBase();
            scenebase.FromMessage(message);
            return scenebase;
        }
    }
}
