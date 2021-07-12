using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Saturn.Viewer.Models
{
    public class Scene 
    {
        public SceneBase Base { get; set; }

        public List<Resource> Resources { get; set; }

        public List<SceneBase> ConnectedScenes { get; set; }

        public void FromMessage(Saturn.Backends.Protocols.Common.Scene message)
        {
            Base = new SceneBase();
            Base.FromMessage(message.Base);

            Resources = message.SceneResourceBases.Select(x => x.ToElement()).ToList();
            ConnectedScenes = message.SceneConnections.Select(x => x.ConnectedSceneBase.ToElement()).ToList();
        }
    }

    public static class SceneExtensions
    {
        
        public static Scene ToElement(this Saturn.Backends.Protocols.Common.Scene message)
        {
            var scene = new Scene();
            scene.FromMessage(message);
            return scene;
        }
    }
}
