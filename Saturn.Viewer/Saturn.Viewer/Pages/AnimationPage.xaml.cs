using Saturn.Viewer.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Windows.Media.Animation;
using System.Web.Routing;
using Microsoft.Xaml.Behaviors.Media;

namespace Saturn.Viewer.Pages
{
    /// <summary>
    /// Interaction logic for AnimationPage.xaml
    /// </summary>
    public partial class AnimationPage : Page
    {
        private readonly AnimationPageViewModel m_ViewModel = null;

        // private readonly Storyboard m_Storyboard = null;
        public AnimationPage(AnimationPageViewModel viewModel)
        {
            InitializeComponent();

            m_ViewModel = viewModel;
            viewModel.Page = this;

            DataContext = viewModel;

            // 
            //             var sb = new Storyboard();
            // 
            //             DoubleAnimation anim = new DoubleAnimation { From = 0, To = 1, Duration = TimeSpan.FromSeconds(1) };
            // 
            //             // Storyboard 만들기
            //             m_Storyboard = new Storyboard();
            //             m_Storyboard.Children.Add(anim);
            // 
            //             // 애니메이션 적용할 위치 선정
            //             Storyboard.SetTargetName(anim, AnimImage.Name);
            //             Storyboard.SetTargetProperty(anim, new PropertyPath(Image.OpacityProperty));
            // 
            //             // 트리거 연결
            //             AnimImage.IsVisibleChanged += delegate (object sender, DependencyPropertyChangedEventArgs e)
            //             {
            //                 m_Storyboard.Begin(this);
            //             };
        }

    }
}
