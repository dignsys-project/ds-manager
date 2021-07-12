using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Media;
using System.Windows.Controls;
using System.Windows;

namespace Saturn.Viewer.Extensions
{
    public static class TextExtensions
    {
        public static TextBlock ToTextBlock(this Saturn.Backends.Protocols.Common.ScenePartText part)
        {
            if (null == part)
            {
                return null;
            }

            var textBlock = new TextBlock();
            textBlock.TextTrimming = TextTrimming.None;
            textBlock.Text = part.Text;
            textBlock.FontSize = part.TextSize;
            textBlock.VerticalAlignment = VerticalAlignment.Center;

            if (part.Bold)
            {
                textBlock.FontWeight = FontWeights.Bold;
            }

            if (part.Italic)
            {
                textBlock.FontStyle = FontStyles.Italic;
            }

            if (!string.IsNullOrEmpty(part.TextColor))
            {
                textBlock.Foreground = part.TextColor.ToParsedBrush();
            }

            return textBlock;
        }

        public static Label ToLabel(this Saturn.Backends.Protocols.Common.ScenePartText text, long width, long height)
        {
            var label = new System.Windows.Controls.Label();
            label.Width = width;
            label.Height = height;

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
                    label.HorizontalContentAlignment = System.Windows.HorizontalAlignment.Right;
                    break;
            }



            return label; 
        }
    }
}
