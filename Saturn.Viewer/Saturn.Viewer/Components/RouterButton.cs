using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Media.Imaging;
using Saturn.Viewer.Services;

namespace Saturn.Viewer.Components
{
    public class RouterButton : AbstractButton
    {
        public static volatile bool m_bProcess = false;

        private readonly List<RouterButton> m_Routers = null;

        private readonly System.Windows.Controls.Image m_Router = null;
        private readonly System.Windows.Controls.Image m_Source = null;
        private readonly System.Windows.Controls.Image m_Destination = null;

        public RouterButton(List<RouterButton> routers, Backends.Protocols.Common.ScenePartCommon common, Backends.Protocols.Common.ScenePartCoordinate scenePartCoordinate, System.Windows.Controls.Image router, System.Windows.Controls.Image source, System.Windows.Controls.Image destination, string documentFolder)
            : base(common, scenePartCoordinate.Resource, scenePartCoordinate.Text, documentFolder)
        {
            m_Routers = routers;

            m_Router = router;
            m_Source = source;
            m_Destination = destination;
            if(null != m_Destination)
            {
                MoveTo(m_Destination, 2);
            }

        }


        protected override void OnClickButton()
        {
            if (m_Router.Visibility == Visibility.Visible)
            {
                // 안 보이도록 
                DontShowRouter();
            }
            else
            {
                var routers = m_Routers.Where(x => x != this);
                foreach (var router in routers)
                {
                    router.DontShowRouter();
                }

                // 보이도록 
                ShowRouter();
            }
        }

        public void ShowRouter()
        {
            DoubleAnimation anim = new DoubleAnimation(0, 1, TimeSpan.FromSeconds(0.5));
            m_Router.BeginAnimation(System.Windows.Controls.Image.OpacityProperty, anim);

            m_Router.Visibility = Visibility.Visible;
            if (null != m_Source)
            {
                m_Source.Visibility = Visibility.Visible;
            }

            if (null != m_Destination)
            {
                m_Destination.Visibility = Visibility.Visible;
            }
        }

        public void DontShowRouter()
        {
            m_Router.Visibility = Visibility.Hidden;
            
            if (null != m_Source)
            {
                m_Source.Visibility = Visibility.Hidden;
            }

            if (null != m_Destination)
            {
                m_Destination.Visibility = Visibility.Hidden;
            }
        }

        public void MoveTo(System.Windows.Controls.Image target, double percent)
        {
            var left = Canvas.GetLeft(target);
            var top = Canvas.GetTop(target);
            TranslateTransform trans = new TranslateTransform();
            target.RenderTransform = trans;

            var destinationY = top - ((top * percent) / 100);
            DoubleAnimation anim2 = new DoubleAnimation(0, -10, TimeSpan.FromSeconds(0.5));
            anim2.AutoReverse = true;
            anim2.RepeatBehavior = RepeatBehavior.Forever;
            target.RenderTransform.BeginAnimation(TranslateTransform.YProperty, anim2);
        }
    }
}
