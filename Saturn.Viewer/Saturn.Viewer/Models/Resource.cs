using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Saturn.Viewer.Models
{
    public class Resource
    {
        public long ResourceId { get; set; }
        public Saturn.Backends.Protocols.Common.SCENE_RESOURCE_KIND Kind { get; set; }
        public string Location { get; set; }
        public string FolderName { get; set; }
        public string Name { get; set; }
        public string Hash { get; set; }
        public long Size { get; set; }
        public long? UpdatedSeconds { get; set; }
        
        // PreviewResource doesn`t need device
    }

    public static class ResourceExtensions
    {
        public static Resource ToElement(this Saturn.Backends.Protocols.Common.SceneResourceBase sceneResourceBase)
        {
            if(sceneResourceBase.Resource != null)
            {
                return sceneResourceBase.Resource.ToElement();
            }

            return null;
        }
        public static Resource ToElement(this Saturn.Backends.Protocols.Common.Resource message)
        {
            var resource = new Resource();
            resource.ResourceId = message.ResourceId;
            resource.Kind = message.Kind;
            resource.Location = message.Location;
            resource.FolderName = message.FolderName;
            resource.Name = message.Name;
            resource.Hash = message.Hash;
            resource.Size = message.Size;
            resource.UpdatedSeconds = message.Updated;

            return resource;
        }
    }
}
