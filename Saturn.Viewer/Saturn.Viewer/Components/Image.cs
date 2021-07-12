using Saturn.Viewer.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Controls;

namespace Saturn.Viewer.Components
{
    public class Image : Grid
    {
        private readonly System.Windows.Controls.Image m_Image = null;
        private readonly string m_DocumentFolder;

        public System.Windows.Controls.Image ImageContent { get { return m_Image; } }

        private static readonly log4net.ILog m_Logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);


        public Image(Saturn.Backends.Protocols.Common.ScenePartCommon common, Saturn.Backends.Protocols.Common.ScenePartImage scenePart, string documentFolder)
        {
            m_DocumentFolder = documentFolder;

            // set background 
            if (!string.IsNullOrEmpty(common.Background))
            {
                var brush = common.Background.ToParsedBrush();
                if (null != brush)
                {
                    Background = brush;
                }
            }

            var resource = scenePart.Resource;
            if (resource != null)
            {
                var location = resource.Location;

                try
                {
                    var document = Services.DocumentService.Instance.Document;
                    var resources = new List<Models.Resource>(document.Resources);
                    var existsResource = resources.Find(x => x.ResourceId == resource.ResourceId);
                    if (null != existsResource)
                    {
                        location = existsResource.Location;
                    }

                }
                catch (Exception ex)
                {
                    m_Logger.Error($"Image Component, constructor, exists Resource is Used. exception : {ex}");
                }

                m_Image = new System.Windows.Controls.Image();
                m_Image.Stretch = System.Windows.Media.Stretch.Fill;

                var source = new System.Windows.Media.Imaging.BitmapImage(new Uri(System.IO.Path.Combine(m_DocumentFolder, location)));
                m_Image.Source = source;
                if(System.IO.Path.GetExtension(location) == ".gif")
                {
                    WpfAnimatedGif.ImageBehavior.SetAnimatedSource(m_Image, source);
                }
                Children.Add(m_Image);
            }
        }


        public Image(Backends.Protocols.Common.ScenePartCommon common, Backends.Protocols.Common.Resource resource, string documentFolder)
        {
            m_DocumentFolder = documentFolder;
            if (null != resource)
            {

                var location = resource.Location;

                try
                {
                    var document = Services.DocumentService.Instance.Document;
                    var resources = new List<Models.Resource>(document.Resources);
                    if (resources != null)
                    {
                        var existsResource = resources.Find(x => x.ResourceId == resource.ResourceId);
                        if (null != existsResource)
                        {
                            location = existsResource.Location;
                        }
                    }
                }
                catch (Exception ex)
                {
                    m_Logger.Error($"Image, constructor(), Exception : {ex}");
                }

                m_Image = new System.Windows.Controls.Image();
                m_Image.Stretch = System.Windows.Media.Stretch.Fill;
                var source = new System.Windows.Media.Imaging.BitmapImage(new Uri(System.IO.Path.Combine(m_DocumentFolder, location)));
                m_Image.Source = source;
                if (System.IO.Path.GetExtension(location) == ".gif")
                {
                    WpfAnimatedGif.ImageBehavior.SetAnimatedSource(m_Image, source);
                }

                Children.Add(m_Image);
            }
        }




    }
}
