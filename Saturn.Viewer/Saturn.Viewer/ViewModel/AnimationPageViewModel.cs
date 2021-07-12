using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Media.Animation;
using Saturn.Viewer.Services;
using Saturn.Viewer.Pages;
using System.Drawing;
using System.Windows.Media;
using System.Windows.Controls;

namespace Saturn.Viewer.ViewModel
{
    public class AnimationPageViewModel : BaseViewModel
    {
        private static readonly log4net.ILog m_Logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        private bool m_bVisiblity = true;

        public AnimationPage Page { get; set; } = null;

        public SaturnCommand MoveOfflineSceneCommand { get; set; } = null;

        public SaturnCommand RouterCommand { get; set; } = null;
        public SaturnCommand DestinationCommand { get; set; } = null;

        public AnimationPageViewModel()
        {
            MoveOfflineSceneCommand = new SaturnCommand(() => PageService.Instance.MovePage(Models.ApplicationPage.OfflineScene));
            RouterCommand = new SaturnCommand(() => OnClickedRouterCommand());
            DestinationCommand = new SaturnCommand(() => OnClickedDestinationCommand());
        }

        private void OnClickedRouterCommand()
        {
            m_Logger.Debug("OnClickedRouterCommand");
            if (m_bVisiblity)
            {

                DoubleAnimation anim = new DoubleAnimation(1, 0, TimeSpan.FromSeconds(0.5));
                Page.AnimImage.BeginAnimation(System.Windows.Controls.Image.OpacityProperty, anim);


            }
            else
            {
                DoubleAnimation anim = new DoubleAnimation(0, 1, TimeSpan.FromSeconds(0.5));
                Page.AnimImage.BeginAnimation(System.Windows.Controls.Image.OpacityProperty, anim);
            }

            m_bVisiblity = !m_bVisiblity;

        }

        private void OnClickedDestinationCommand()
        {
            m_Logger.Debug("OnClickedDestinationCommand");

            var target = Page.SourceImage;

            MoveTo(target, 10);
        }

        public static void MoveTo(System.Windows.Controls.Image target, double newY)
        {
            var top = Canvas.GetTop(target);
            var left = Canvas.GetLeft(target);
            TranslateTransform trans = new TranslateTransform();
            target.RenderTransform = trans;

            DoubleAnimation anim2 = new DoubleAnimation(left, left + newY, TimeSpan.FromSeconds(1));
            anim2.AutoReverse = true;
            target.RenderTransform.BeginAnimation(TranslateTransform.YProperty, anim2);
        }
    }
}
