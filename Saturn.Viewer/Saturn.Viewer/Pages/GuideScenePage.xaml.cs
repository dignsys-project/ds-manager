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

namespace Saturn.Viewer.Pages
{
    /// <summary>
    /// Interaction logic for GuideScenePage.xaml
    /// </summary>
    public partial class GuideScenePage : Page
    {
        private readonly GuideScenePageViewModel m_ViewModel = null;
        public GuideScenePage(GuideScenePageViewModel viewModel)
        {
            InitializeComponent();
            
            m_ViewModel = viewModel;

            viewModel.View = this;
            
            DataContext = viewModel;

            m_ViewModel.OnInit();
        }

        private void Page_Loaded(object sender, RoutedEventArgs e)
        {
            m_ViewModel.OnLoad();
        }
    }
}
