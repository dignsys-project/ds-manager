using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Controls;
using Saturn.Viewer.Pages;
using System.Windows.Media.Animation;
using System.Windows;

namespace Saturn.Viewer.ViewModel
{
    public class AnimElement
    {
        public FrameworkElement Element { get; set; }
        public Storyboard ShowStoryBoard { get; set; }
    }

    public class GuideScenePageViewModel : BaseViewModel
    {
        public GuideScenePage View { get; set; } = null;

        private List<AnimElement> m_AnimElements = new List<AnimElement>();

        public SaturnCommand RouteCommand01 { get; set; } = null;
        public SaturnCommand RouteCommand02 { get; set; } = null;
        public SaturnCommand RouteCommand03 { get; set; } = null;
        public SaturnCommand RouteCommand04 { get; set; } = null;
        public GuideScenePageViewModel()
        {
            RouteCommand01 = new SaturnCommand(() => OnClickedRoute01());
            RouteCommand02 = new SaturnCommand(() => OnClickedRoute02());
            RouteCommand03 = new SaturnCommand(() => OnClickedRoute03());
            RouteCommand04 = new SaturnCommand(() => OnClickedRoute04());
        }

        private void OnClickedRoute01()
        {
            OnRouteFade(View.Route01);
        }

        private void OnClickedRoute02()
        {
            OnRouteFade(View.Route02);
        }

        private void OnClickedRoute03()
        {
            OnRouteFade(View.Route03);
        }

        private void OnClickedRoute04()
        {
            OnRouteFade(View.Route04);
        }

        private void OnRouteFade(Image route)
        {
            route.Visibility = route.Visibility == Visibility.Hidden ? Visibility.Visible : Visibility.Hidden;

            var others = m_AnimElements.FindAll(x => x.Element != route);
            foreach(var other in others)
            {
                if(other.Element.Visibility != Visibility.Hidden)
                {
                    other.Element.Visibility = Visibility.Hidden;
                }
                
            }
        }

        private void OnRouteVisibleChange(object sender, DependencyPropertyChangedEventArgs e)
        {
            var image = sender as Image;
            if (image.Visibility == Visibility.Visible)
            {
                var animElement = m_AnimElements.Find(x => x.Element == sender);
                animElement.ShowStoryBoard.Begin(View);
            }
          

        }

        public void OnInit()
        {
            var routes = new List<Image>(new Image[] { View.Route01, View.Route02, View.Route03, View.Route04 });

            DoubleAnimation hiddenAnim = new DoubleAnimation { From = 1, To = 0, Duration = TimeSpan.FromSeconds(1.5) };
            DoubleAnimation visibilityAnim = new DoubleAnimation { From = 0, To = 1, Duration = TimeSpan.FromSeconds(1.5) };

            routes.ForEach(x =>
            {
                Storyboard.SetTargetName(hiddenAnim, x.Name);
                Storyboard.SetTargetProperty(hiddenAnim, new PropertyPath(Image.OpacityProperty));

                Storyboard.SetTargetName(visibilityAnim, x.Name);
                Storyboard.SetTargetProperty(visibilityAnim, new PropertyPath(Image.OpacityProperty));

                var story = new Storyboard();
                story.Children.Add(visibilityAnim);

                m_AnimElements.Add(new AnimElement { Element = x, ShowStoryBoard = story });

                x.IsVisibleChanged += OnRouteVisibleChange;
            });
        }

        public void OnLoad()
        {

        }
    }
}
