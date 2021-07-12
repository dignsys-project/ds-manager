using Saturn.Viewer.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Automation.Peers;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Saturn.Viewer.Pages
{
    /// <summary>
    /// Interaction logic for ScenePage.xaml
    /// </summary>
    public partial class ScenePage : Page
    {
        private readonly ViewModel.ScenePageViewModel m_ViewModel = null;
        public ScenePage(ViewModel.ScenePageViewModel viewModel)
        {
            InitializeComponent();

            m_ViewModel = viewModel;
            m_ViewModel.MainCanvas = MainCanvas;


            DataContext = m_ViewModel;
            this.Unloaded += ScenePage_Unloaded;
        }

        private async void ScenePage_Unloaded(object sender, RoutedEventArgs e)
        {
            await m_ViewModel.OnUnLoaded();
        }

        private async void Page_Loaded(object sender, RoutedEventArgs e)
        {
            var mainWindow = PageService.Instance.GetMainWindow();
            if (null != mainWindow)
            {
                mainWindow.RequestFullScreen();
            }

            await m_ViewModel.OnLoad();

            //MainCanvas.BeginStoryboard((Storyboard)this.Resources["slideRightToLeft"]);
        }
    }
}
