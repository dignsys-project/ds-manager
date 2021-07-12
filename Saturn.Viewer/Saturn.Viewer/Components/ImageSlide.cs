using Saturn.Viewer.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media.Animation;
using System.Windows.Threading;

namespace Saturn.Viewer.Components
{
    public class ImageSlideElement
    {
        public System.Windows.Media.Imaging.BitmapImage ImageSource { get; set; } = null;
        public int Seconds { get; set; } = 1;
    }
    public class ImageSlide : Grid
    {
        private readonly TextBlock m_TimeTextBox = null;

        private readonly System.Windows.Controls.Image m_Current = null;
        private readonly System.Windows.Controls.Image m_Next = null;

        private readonly List<ImageSlideElement> m_Elements = null;

        private int m_CurrentIndex = 0;

        private readonly DispatcherTimer m_Timer = null;

        private int m_StartSeconds = 0;

        private readonly Storyboard m_EnterStoryboard = null;

        private volatile int m_bExecuted = 0;

        private bool m_bStartEnterStoryboard = false;



        public ImageSlide(Saturn.Backends.Protocols.Common.ScenePartCommon common, Saturn.Backends.Protocols.Common.ScenePartSlideImage part, string documentFolder)
        {
            // set background 
            if (!string.IsNullOrEmpty(common.Background))
            {
                var brush = common.Background.ToParsedBrush();
                if (null != brush)
                {
                    Background = brush;
                }
            }

            m_Elements = part.SlideImages.Where(x =>
            {
                var filePath = System.IO.Path.Combine(documentFolder, x.Resource.Location);
                var fileInfo = new System.IO.FileInfo(filePath);
                //if (!fileInfo.Exists || fileInfo.Length != resource.Size)
                return fileInfo.Exists;

            }).Select(x =>
            {

                return new ImageSlideElement
                {
                    ImageSource = new System.Windows.Media.Imaging.BitmapImage(new Uri(System.IO.Path.Combine(documentFolder, x.Resource.Location))),
                    Seconds = x.Seconds
                };

            }).ToList();

            if (m_Elements.Count() <= 0)
            {
                m_TimeTextBox = new TextBlock();
                m_TimeTextBox.Text = "설정 가능한 이미지가 없습니다. 관리자에 문의해야 합니다.";
                Children.Add(m_TimeTextBox);
                return;
            }

            m_Current = new System.Windows.Controls.Image();
            m_Current.Stretch = System.Windows.Media.Stretch.Fill;
            m_Current.Opacity = 1;
            m_Current.Source = m_Elements[m_CurrentIndex].ImageSource;
            m_Current.Name = "ImageCurrent";

            Children.Add(m_Current);

            m_Next = new System.Windows.Controls.Image();
            m_Next.Stretch = System.Windows.Media.Stretch.Fill;
            m_Next.Opacity = 0;
            m_Next.Name = "ImageNext";

            Children.Add(m_Next);

            // Create a DoubleAnimation to animate the enter of the image
            DoubleAnimation enterAnimation = new DoubleAnimation();
            enterAnimation.Duration = TimeSpan.FromMilliseconds(300);
            enterAnimation.From = 0;
            enterAnimation.To = 1;

            // Create a DoubleAnimation to animate the leave of the image
            DoubleAnimation leaveAnimation = new DoubleAnimation();
            leaveAnimation.Duration = TimeSpan.FromMilliseconds(200);
            leaveAnimation.From = 1;
            leaveAnimation.To = 0;

            // Configure the animation to target the image's opacity property.

            Storyboard.SetTargetProperty(enterAnimation, new PropertyPath(Image.OpacityProperty));
            // Configure the animation to target the image's opacity property.
            Storyboard.SetTargetProperty(leaveAnimation, new PropertyPath(Image.OpacityProperty));

            Storyboard.SetTarget(enterAnimation, m_Current);
            Storyboard.SetTarget(leaveAnimation, m_Next);

            // Create a storyboard to contain the animation.
            m_EnterStoryboard = new Storyboard();
            m_EnterStoryboard.Children.Add(enterAnimation);
            m_EnterStoryboard.Children.Add(leaveAnimation);


            

            //Storyboard.SetTarget(enterAnimation, m_Next);
            //Storyboard.SetTarget(leaveAnimation, m_Current);

            //// Create a storyboard to contain the animation.
            //m_LeaveStoryboard = new Storyboard();
            //m_LeaveStoryboard.Children.Add(leaveAnimation);
            //m_LeaveStoryboard.Children.Add(enterAnimation);


            m_Timer = new DispatcherTimer();
            m_Timer.Interval = TimeSpan.FromSeconds(1);
            m_Timer.Tick += M_Timer_Tick;
            m_Timer.Start();

            Unloaded += ImageSlide_Unloaded;
        }

        private void ImageSlide_Unloaded(object sender, RoutedEventArgs e)
        {
            if(null != m_Timer)
            {
                m_Timer.Stop();
            }
        }

        private void M_Timer_Tick(object sender, EventArgs e)
        {
            if (Interlocked.Exchange(ref m_bExecuted, 1) == 1)
            {
                return;
            }

            bool bNextScene = false;
            var index = m_CurrentIndex;
            if (index < m_Elements.Count)
            {
                var element = m_Elements[index];
                if (m_StartSeconds + 1 <= element.Seconds)
                {
                    m_StartSeconds++;
                }
                else
                {
                    m_StartSeconds = 0;

                    var next = index + 1;
                    if (m_Elements.Count < next)
                    {
                        m_CurrentIndex = 0;

                        bNextScene = true;
                    }
                    else
                    {
                        this.m_CurrentIndex = next;
                        bNextScene = true;
                    }
                }
            }
            else
            {
                this.m_CurrentIndex = 0;
                bNextScene = true;
            }



            var current = m_CurrentIndex;
            if (bNextScene && m_Elements.Count > current)
            {
                m_Next.Source = m_Current.Source;
                m_Current.Source = m_Elements[current].ImageSource;
                m_EnterStoryboard.Begin();

                this.m_bStartEnterStoryboard = !this.m_bStartEnterStoryboard;



                // m_LeaveStoryboard.Begin(m_Next);
                // m_EnterStoryboard.Begin(m_Current);
            }

            Interlocked.Exchange(ref m_bExecuted, 0);
        }
    }
}
