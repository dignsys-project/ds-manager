using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Media;
using System.Windows.Media.Imaging;

namespace Saturn.Viewer.Extensions
{
    public static class ResourceExtensions
    {
        private static readonly log4net.ILog m_Logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        public static ImageBrush ToImageBrush(this Saturn.Backends.Protocols.Common.Resource resource, string documentFolder, List<Models.Resource> resources)
        {
            if (null == resource)
            {
                return null;
            }

            var imageBrush = new System.Windows.Media.ImageBrush();
            try
            {
                var location = resource.Location;

                var existsResource = resources.Find(x => x.ResourceId == resource.ResourceId);
                if (existsResource != null)
                {
                    location = existsResource.Location; 
                }

                imageBrush.ImageSource = new BitmapImage(new Uri(System.IO.Path.Combine(documentFolder, location)));
                imageBrush.Stretch = System.Windows.Media.Stretch.UniformToFill;
            }
            catch (System.Exception ex)
            {
                m_Logger.Error($"ResourceExtensions, ToImageBrush, Document: {documentFolder}, Resource: {resource.Location}, Exception: {ex}");
            }

            return imageBrush;
        }

        public static System.Windows.Controls.Image ToImage(this Saturn.Backends.Protocols.Common.Resource resource, string documentFolder, List<Models.Resource> resources)
        {
            if (null == resource)
            {
                return null;
            }

            var image = new System.Windows.Controls.Image();
            

            try
            {
                var location = resource.Location;

                var existsResource = resources.Find(x => x.ResourceId == resource.ResourceId);
                if (existsResource != null)
                {
                    location = existsResource.Location;
                }

                var source = new BitmapImage(new Uri(System.IO.Path.Combine(documentFolder, location)));
                image.Source = source;
                image.Stretch = System.Windows.Media.Stretch.UniformToFill;
                if (System.IO.Path.GetExtension(location) == ".gif")
                {
                    WpfAnimatedGif.ImageBehavior.SetAnimatedSource(image, source);
                }

                return image; 
            }
            catch (System.Exception ex)
            {
                m_Logger.Error($"ResourceExtensions, ToImageBrush, Document: {documentFolder}, Resource: {resource.Location}, Exception: {ex}");
                return null;
            }
        }

    }
}
