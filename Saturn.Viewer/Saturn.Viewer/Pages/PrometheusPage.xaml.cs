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
    /// Interaction logic for PrometheusPage.xaml
    /// </summary>
    public partial class PrometheusPage : Page
    {
        private readonly ViewModel.PrometheusPageViewModel m_ViewModel = null;
        public PrometheusPage(ViewModel.PrometheusPageViewModel viewModel)
        {
            m_ViewModel = viewModel;
            
            InitializeComponent();

            DataContext = viewModel;
        }

        private async void Page_Loaded(object sender, RoutedEventArgs e)
        {
            await m_ViewModel.OnLoad();

        }
    }
}
