using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.UI.WebControls;
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
using MapControl;
using Microsoft.Extensions.Logging;
using Saturn.Viewer.Services;

namespace Saturn.Viewer
{
    public class PointItem : BaseViewModel
    {

        public string Name { get; set; }

        private Location location;
        public Location Location
        {
            get { return location; }
            set
            {
                location = value;
            }
        }
    }

    public class Polyline
    {
        public LocationCollection Locations { get; set; }
    }

    public class LocationToVisibilityConverter : IMultiValueConverter
    {
        public object Convert(object[] values, Type targetType, object parameter, CultureInfo culture)
        {
            var visibility = Visibility.Hidden;

            if (values.Length == 2 && values[0] is MapBase && values[1] is Point?)
            {
                var parentMap = (MapBase)values[0];
                var position = (Point?)values[1];

                if (position.HasValue &&
                    position.Value.X >= 0d && position.Value.X <= parentMap.ActualWidth &&
                    position.Value.Y >= 0d && position.Value.Y <= parentMap.ActualHeight)
                {
                    visibility = Visibility.Visible;
                }
            }

            return visibility;
        }

        public object[] ConvertBack(object value, Type[] targetTypes, object parameter, CultureInfo culture)
        {
            throw new NotSupportedException();
        }
    }

    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private readonly MainWindowViewModel m_ViewModel = null;

        private readonly Timers.CaptureDispatcherTimer m_Timer = null;

        public MainWindow(ILogger<MainWindow> logger, MainWindowViewModel viewModel, PrometheusService prometheusService)
        {
            InitializeComponent();

            m_Timer = new Timers.CaptureDispatcherTimer(TimeSpan.FromSeconds(5), Content as UIElement, prometheusService);


            MainFrame.NavigationUIVisibility = System.Windows.Navigation.NavigationUIVisibility.Hidden;
            viewModel.View = this;
            viewModel.MainFrame = MainFrame;

            m_ViewModel = viewModel;

            PageService.Instance.MainFrame = MainFrame;

            this.DataContext = m_ViewModel;
        }

        public void RequestFullScreen()
        {
            m_ViewModel.View.WindowState = WindowState.Maximized;
        }

        public void NormalScreen()
        {
            m_ViewModel.View.WindowState = WindowState.Normal;
        }


        public void MapItemTouchDown(object sender, TouchEventArgs e)
        {
            var mapItem = (MapItem)sender;
            mapItem.IsSelected = !mapItem.IsSelected;
            e.Handled = true;
        }



    }
}
