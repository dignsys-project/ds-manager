using Saturn.Viewer.Extensions;
using Saturn.Viewer.Pages;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.UI.WebControls;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using System.Windows.Threading;
using System.Windows.Media;

namespace Saturn.Viewer.Components
{
    public class WeatherBox : System.Windows.Controls.Canvas
    {
        private readonly System.Windows.Controls.Image m_WeatherImage = null;

        private readonly System.Windows.Controls.Label m_TemperatureLabel = null;

        private readonly DispatcherTimer m_DispatcherTimer = null;

        private readonly BackgroundWorker m_Worker = null;

        private readonly Services.IPrometheusService m_Prometheus = null;

        private Models.Weather m_Weather = null;

        private int m_OldTemperature = int.MaxValue;

        private static readonly log4net.ILog m_Logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        public WeatherBox(Saturn.Backends.Protocols.Common.ScenePartCommon common, Saturn.Backends.Protocols.Common.ScenePartWeather part, Services.PrometheusService prometheusService)
        {
            m_Prometheus = prometheusService;

            // set background 
            var background = common.Background;
            if (!string.IsNullOrEmpty(background))
            {
                Background = background.ToParsedBrush();
                
            }

            // create Background Image 
            var weatherImage = new System.Windows.Controls.Image();

            // set size 
            var size = common.Size;
            weatherImage.Width = size.Width;
            weatherImage.Height = size.Height;
            weatherImage.Stretch = Stretch.None;
            weatherImage.HorizontalAlignment = HorizontalAlignment.Left;
            weatherImage.StretchDirection = StretchDirection.DownOnly;
            m_WeatherImage = weatherImage;

            Children.Add(m_WeatherImage);

            
            // create Temperature text
            if (null != part.Text)
            {
                m_TemperatureLabel = part.Text.ToLabel(size.Width, size.Height);
                m_TemperatureLabel.Padding = new Thickness(0);
                if (part.Text.HorizontalKind == Backends.Protocols.Common.TEXT_ALIGN_KIND.Default)
                {
                    m_TemperatureLabel.HorizontalAlignment = HorizontalAlignment.Right;
                }

                //if (part.Text.VerticalKind == Backends.Protocols.Common.TEXT_ALIGN_KIND.Default)
                //{
                //    m_TemperatureLabel.VerticalAlignment = VerticalAlignment.Center;
                //}

                Children.Add(m_TemperatureLabel);
            }

            Visibility = Visibility.Hidden;

            // create worker 
            m_Worker = new BackgroundWorker();
            m_Worker.DoWork += Worker_DoWork;
            m_Worker.RunWorkerAsync();
            m_Worker.RunWorkerCompleted += Worker_RunWorkerCompleted;

            // create dispatcher
            m_DispatcherTimer = new DispatcherTimer();
            m_DispatcherTimer.Tick += new EventHandler(dispatcherTimer_Tick);
            m_DispatcherTimer.Interval = new TimeSpan(0, 10, 0);
            m_DispatcherTimer.Start();

            Unloaded += WeatherBox_Unloaded;
        }

        private void WeatherBox_Unloaded(object sender, RoutedEventArgs e)
        {
            m_DispatcherTimer.Stop();
        }

        private void Worker_RunWorkerCompleted(object sender, RunWorkerCompletedEventArgs e)
        {
            RefreshWeather();
        }

        private void Worker_DoWork(object sender, DoWorkEventArgs e)
        {
            Task.Run(() => this.RequestWeather()).Wait();
        }

        //  System.Windows.Threading.DispatcherTimer.Tick handler
        //
        //  Updates the current seconds display and calls
        //  InvalidateRequerySuggested on the CommandManager to force 
        //  the Command to raise the CanExecuteChanged event.
        private void dispatcherTimer_Tick(object sender, EventArgs e)
        {
            // Updating the Label which displays the current second
            Task.Run(() => this.RequestWeather()).Wait();

            RefreshWeather();

            // Forcing the CommandManager to raise the RequerySuggested event
            CommandManager.InvalidateRequerySuggested();
        }

        private void RefreshWeather()
        {
            if (m_Weather == null)
            {
                m_Logger.Error("WeatherBox, RefreshWeather, Weather Service is Failed.");

                Visibility = Visibility.Hidden;
                return;
            }

            try
            {
                Uri uri = new Uri($"pack://application:,,,/Images/Weathers/{m_Weather.WeatherResoruce}");
                var bitmapImage = m_WeatherImage.Source as System.Windows.Media.Imaging.BitmapImage;


                if (bitmapImage?.UriSource != uri)
                {
                    m_WeatherImage.Stretch = System.Windows.Media.Stretch.Uniform;
                    m_WeatherImage.Source = new System.Windows.Media.Imaging.BitmapImage(uri);
                }


                if (m_OldTemperature != m_Weather.Temperature)
                {
                    m_TemperatureLabel.Content = $"{m_Weather.Temperature}°";
                }

                Visibility = Visibility.Visible;
            }
            catch (System.Exception ex)
            {
                m_Logger.Error($"WeatherBox, RefreshWeather, WeatherResource is not found. {ex}");

                Visibility = Visibility.Hidden;
            }
        }

        private async Task RequestWeather()
        {
            var response = await m_Prometheus.GetWeatherAsync();
            if (null == response)
            {
                return;
            }

            if (!response.Common.IsSuccess())
            {
                m_Logger.Error($"WeatherBox, RequestWeather, GetWeatherAsync failed. Common : {response.Common}");
                return;
            }

            if (m_Weather == null)
            {
                m_Weather = new Models.Weather();
            }
            else
            {
                m_OldTemperature = m_Weather.Temperature;
            }


            m_Weather.FromMessage(response.Weather);
        }

    }
}
