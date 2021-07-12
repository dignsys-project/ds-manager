using Saturn.Viewer.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Media;
using System.Windows.Media.Imaging;

namespace Saturn.Viewer.Components
{
    public abstract class AbstractButton : System.Windows.Controls.Canvas
    {
        protected readonly System.Windows.Controls.Button m_Button = null;

        public AbstractButton(Backends.Protocols.Common.ScenePartCommon common, Backends.Protocols.Common.Resource resource, Backends.Protocols.Common.ScenePartText text, string documentFolder)
        {

            // create button 
            m_Button = new System.Windows.Controls.Button();
            m_Button.BorderThickness = new Thickness(0, 0, 0, 0);
            m_Button.Margin = new Thickness(0, 0, 0, 0);

            // set size 
            var size = common.Size;
            m_Button.Width = size.Width;
            m_Button.Height = size.Height;

            SetTop(m_Button, 0);
            SetLeft(m_Button, 0);

            var canvas = new System.Windows.Controls.Grid();
            canvas.Width = size.Width;
            canvas.Height = size.Height;

            // set background.
            var background = common.Background;
            if (!string.IsNullOrEmpty(background))
            {
                canvas.Background = background.ToParsedBrush();
            }


            if (resource != null)
            {
                var document = Services.DocumentService.Instance.Document;

                List<Models.Resource> resources;
                try
                {
                    resources = new List<Models.Resource>(document.Resources);
                }
                catch (Exception ex)
                {
                    resources = null;
                }

                // 20.12.14 GIF 이미지를 추가하기 위하여 코드 추가.
                //var imageBrush = resource.ToImageBrush(documentFolder, resources);
                //if (null != imageBrush)
                //{
                //    m_Button.Background = imageBrush;
                //}

                var image = resource.ToImage(documentFolder, resources);
                if (null != image)
                {

                    image.Width = size.Width;
                    image.Height = size.Height;
                    image.Stretch = Stretch.UniformToFill;
                    image.StretchDirection = System.Windows.Controls.StretchDirection.Both;
                    image.HorizontalAlignment = HorizontalAlignment.Center;
                    image.VerticalAlignment = VerticalAlignment.Center;

                    canvas.Children.Add(image);
                    canvas.Margin = new System.Windows.Thickness(0, 0, 0, 0);
                    SetTop(image, 0);
                    SetRight(image, 0);

                }
            }

            if (text != null)
            {
                var label = new System.Windows.Controls.Label();
                label.Width = size.Width;
                label.Height = size.Height;

                label.Content = text.Text;
                label.FontSize = text.TextSize;
                label.Foreground = text.TextColor.ToParsedBrush();
                label.BorderThickness = new System.Windows.Thickness(0, 0, 0, 0);
                label.Padding = new System.Windows.Thickness(10);
                label.Margin = new System.Windows.Thickness(0, 0, 0, 0);
                label.Opacity = 1;

                if (text.Bold)
                {
                    label.FontWeight = FontWeights.Bold;
                }

                if (text.Italic)
                {
                    label.FontStyle = FontStyles.Italic;
                }

                switch (text.VerticalKind)
                {
                    case Backends.Protocols.Common.TEXT_ALIGN_KIND.VerticalStart:
                        label.VerticalContentAlignment = System.Windows.VerticalAlignment.Top;
                        break;

                    case Backends.Protocols.Common.TEXT_ALIGN_KIND.VerticalCenter:
                        label.VerticalContentAlignment = System.Windows.VerticalAlignment.Center;
                        break;

                    case Backends.Protocols.Common.TEXT_ALIGN_KIND.VerticalEnd:
                        label.VerticalContentAlignment = System.Windows.VerticalAlignment.Bottom;
                        break;
                    default:
                        label.VerticalContentAlignment = System.Windows.VerticalAlignment.Center;
                        break;
                }

                switch (text.HorizontalKind)
                {
                    case Backends.Protocols.Common.TEXT_ALIGN_KIND.HorizontalStart:
                        label.HorizontalContentAlignment = System.Windows.HorizontalAlignment.Left;
                        break;

                    case Backends.Protocols.Common.TEXT_ALIGN_KIND.HorizontalCenter:
                        label.HorizontalContentAlignment = System.Windows.HorizontalAlignment.Center;
                        break;

                    case Backends.Protocols.Common.TEXT_ALIGN_KIND.HorizontalEnd:
                        label.HorizontalContentAlignment = System.Windows.HorizontalAlignment.Right;
                        break;

                    default:
                        label.HorizontalContentAlignment = System.Windows.HorizontalAlignment.Center;
                        break;
                }

                System.Windows.Controls.Canvas.SetLeft(label, 0);
                System.Windows.Controls.Canvas.SetRight(label, 0);
                canvas.Children.Add(label);

                m_Button.Content = canvas;
            }

            if (Application.Current.Resources.Contains("SaturnButton"))
            {
                m_Button.Style = Application.Current.Resources["SaturnButton"] as Style;
            }

            m_Button.Click += OnButtonClicked;

            Children.Add(m_Button);
        }

        private void OnButtonClicked(object sender, RoutedEventArgs e)
        {
            this.OnClickButton();
        }


        protected abstract void OnClickButton();
    }
}
