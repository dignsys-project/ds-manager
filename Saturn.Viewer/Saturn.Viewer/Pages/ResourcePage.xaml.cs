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
    /// Interaction logic for ResourcePage.xaml
    /// </summary>
    public partial class ResourcePage : Page
    {
        private ViewModel.ResourcePageViewModel m_ViewModel = null;
        public ResourcePage(ViewModel.ResourcePageViewModel viewModel)
        {
            InitializeComponent();

            m_ViewModel = viewModel;
            DataContext = m_ViewModel;
            Unloaded += OnUnloadPage;
        }

        private void OnUnloadPage(object sender, RoutedEventArgs e)
        {
            m_ViewModel.Unload();
        }

        private async void Page_Loaded(object sender, RoutedEventArgs e)
        {
            await m_ViewModel.OnLoad();
        }
    }
}
