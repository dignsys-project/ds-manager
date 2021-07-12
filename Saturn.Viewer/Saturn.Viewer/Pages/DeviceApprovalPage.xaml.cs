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
    /// Interaction logic for DeviceApprovalPage.xaml
    /// </summary>
    public partial class DeviceApprovalPage : Page
    {
        private readonly ViewModel.DeviceApprovalViewModel m_ViewModel = null;
        public DeviceApprovalPage(ViewModel.DeviceApprovalViewModel viewModel)
        {
            InitializeComponent();

            m_ViewModel = viewModel;
            DataContext = m_ViewModel;
        }

        private async void Page_Loaded(object sender, RoutedEventArgs e)
        {
            await m_ViewModel.OnLoad();
        }

        private void Page_Unloaded(object sender, RoutedEventArgs e)
        {

        }
    }
}
