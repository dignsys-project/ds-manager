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
using Saturn.Viewer.Services;

namespace Saturn.Viewer.Pages
{
    /// <summary>
    /// Interaction logic for OfflineScenePage.xaml
    /// </summary>
    public partial class OfflineScenePage : Page
    {
        private readonly ViewModel.OfflineScenePageViewModel m_ViewModel = null;
        public OfflineScenePage(ViewModel.OfflineScenePageViewModel viewModel)
        {
            InitializeComponent();

            m_ViewModel = viewModel;
            m_ViewModel.View = this;
            DataContext = m_ViewModel;
        }

        private async void Page_Loaded(object sender, RoutedEventArgs e)
        {

            var mainWindow = PageService.Instance.GetMainWindow();
            if (null != mainWindow)
            {
                mainWindow.RequestFullScreen();
            }

            await m_ViewModel.OnLoad();

        }
    }
}
