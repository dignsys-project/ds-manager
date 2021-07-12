using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;
using System.Windows.Media.Animation;

namespace Saturn.Viewer.Components
{
    public class SubtitleTextBlock : TextBlock
    {
        public long Seconds { get; set; }

        public SubtitleTextBlock(Saturn.Backends.Protocols.Common.ScenePartSubtitle subtitle)
        {
            if (null != subtitle.Resource)
            {

            }

            Loaded += OnLoaded;
        }

        private void OnLoaded(object sender, RoutedEventArgs _)
        {
            TranslateTextblockAnim();
        }

        private void TranslateTextblockAnim()
        {

            FrameworkElement canvas = Parent as FrameworkElement;

            DoubleAnimation animation = new DoubleAnimation();
            animation.From = -ActualWidth;
            animation.To = canvas.ActualWidth;
            animation.Duration = TimeSpan.FromSeconds(Seconds);
            animation.RepeatBehavior = RepeatBehavior.Forever;
            BeginAnimation(Canvas.RightProperty, animation);
        }

        private void ParseContent(string content)
        {

        }
    }
}
