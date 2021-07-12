using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Media.Animation;
using Saturn.Viewer.Services;

namespace Saturn.Viewer.ViewModel
{
    public class OfflineScenePageViewModel : BaseViewModel
    {
        public Saturn.Viewer.Pages.OfflineScenePage View { get; set; } = null;

        public SaturnCommand MoveGuideSceneCommand { get; set; } = null;
        public SaturnCommand MoveAnimationSceneCommand { get; set; } = null;

        public OfflineScenePageViewModel()
        {
            MoveGuideSceneCommand = new SaturnCommand(() => MoveGuideScene());
            MoveAnimationSceneCommand = new SaturnCommand(() => PageService.Instance.MovePage(Models.ApplicationPage.AnimationScene));
        }

        public async Task OnLoad()
        {
            await Task.Delay(1);

            //var image = new Image();
            //var trigger = new Trigger();

            //image.Triggers.Add(new Trigger());

            //var anim = new DoubleAnimation { From = 0, To = 1 };
            //anim.BeginAnimation(Image.VisibilityProperty, anim);
        }

        private void MoveGuideScene()
        {
            PageService.Instance.MovePage(Models.ApplicationPage.GuideScene);
        }
    }
}
