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
using System.Windows.Media.Animation;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Windows.Threading;
using Saturn.Viewer.Windows;

namespace Saturn.Viewer.Pages
{
    /// <summary>
    /// Interaction logic for ConnectorPage.xaml
    /// </summary>
    public partial class ConnectorPage : Page
    {
        private ConnectorPageViewModel m_ViewModel = null;
        public ConnectorPage(ConnectorPageViewModel viewModel)
        {
            InitializeComponent();

            viewModel.View = this;
            m_ViewModel = viewModel;

            DataContext = m_ViewModel;
        }

        private async void Page_Loaded(object sender, RoutedEventArgs e)
        {
            await m_ViewModel.Onload();
        }


    }
}
