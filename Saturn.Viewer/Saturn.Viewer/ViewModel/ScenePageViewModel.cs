using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Saturn.Viewer.Services;
using System.Windows.Media;
using System.Web.UI.WebControls;
using System.Windows.Controls;
using Saturn.Viewer.Properties;
using System.Windows.Media.Imaging;
using System.Windows;
using System.Runtime.InteropServices;
using System.Windows.Media.Animation;
using System.Globalization;
using DeviceId.Formatters;
using Saturn.Viewer.Extensions;
using Saturn.Viewer.Components;
using Saturn.Backends.Protocols.Common;
using System.Windows.Threading;
using System.Threading;

namespace Saturn.Viewer.ViewModel
{
    public class ScenePageViewModel : BaseViewModel
    {
        public bool IsFullScreen { get; set; }

        private readonly SceneService m_SceneService = null;

        public System.Windows.Controls.Canvas MainCanvas { get; set; }

        private readonly string m_DocumentFolder = string.Empty;

        private readonly MainWindowViewModel m_MainWindowViewModel = null;

        private static readonly log4net.ILog m_Logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        private List<RouterButton> m_Routers = new List<RouterButton>();

        private readonly PrometheusService m_PrometheusService = null;

        private bool m_IsDispatchTouch = false;
        private long m_DispatchSeconds = 0;
        private long m_DispatchSceneId = 0;

        private DispatcherTimer m_Timer = null;
        private volatile int m_bProcess = 0;

        private CefSharp.IContextMenuHandler m_ChromeContextMenuHandler = new Handlers.ChromeMenuHandler();

        public ScenePageViewModel(SceneService sceneService, PrometheusService prometheusService, MainWindowViewModel mainWindow, ResourceDispatcherTimerService resourceDispatcherTimerService)
        {
            m_DocumentFolder = DocumentService.Instance.GetDocumentsFolder();

            m_PrometheusService = prometheusService;
            m_SceneService = sceneService;

            resourceDispatcherTimerService.Execute();

            m_MainWindowViewModel = mainWindow;
        }

        public async Task OnLoad()
        {
            if (m_SceneService.CurrentSceneId != m_SceneService.NextSceneId)
            {
                m_SceneService.CurrentSceneId = m_SceneService.NextSceneId;
                m_SceneService.NextSceneId = 0;
            }

            var sceneId = m_SceneService.CurrentSceneId;

            await MakeCanvas(sceneId);

            await Task.Delay(1);
        }

        public async Task OnUnLoaded()
        {
            m_Routers.Clear();

            if (null != m_Timer)
            {
                m_Timer.Stop();
            }

            await Task.Delay(1);
        }



        private async Task MakeCanvas(long sceneId)
        {
            var blueprint = m_SceneService.FindBlueprint(sceneId);
            if (null == blueprint)
            {
                m_Logger.Error($"ScenePageViewModel, MakeCanvas, Can not found Scene, SceneId : {sceneId}");

                return;
            }

            var canvas = blueprint.Canvas;

            var width = m_MainWindowViewModel.View.ActualWidth;
            var height = m_MainWindowViewModel.View.ActualHeight;

            // set canvas size
            MainCanvas.Width = canvas.Size.Width;
            MainCanvas.Height = canvas.Size.Height;

            // set canvas position
            MainCanvas.Margin = new Thickness(0, 0, width - MainCanvas.Width, height - MainCanvas.Height);

            // set canvas background color 
            if (!string.IsNullOrEmpty(canvas.Background))
            {
                MainCanvas.Background = canvas.Background.ToParsedBrush();
            }

            foreach (var part in blueprint.Parts)
            {
                if (null != part.Button)
                {
                    MakeButtonPart(part.Common, part.Button);
                }

                if (null != part.Image)
                {
                    MakeImagePart(part.Common, part.Image);
                }

                if (null != part.Video)
                {
                    MakeViedoPart(part.Common, part.Video);
                }

                if (null != part.Document)
                {
                    MakeDocumentPart(part.Common, part.Document);
                }

                if (null != part.Subtitle)
                {
                    await MakeSubtitlePart(part.Common, part.Subtitle);
                }

                if (null != part.Web)
                {
                    MakeWebPart(part.Common, part.Web);
                }

                if (null != part.Weather)
                {
                    MakeWeather(part.Common, part.Weather);
                }

                if (null != part.Clock)
                {
                    MakeClockPart(part.Common, part.Clock);
                }

                if (null != part.SlideImage)
                {
                    MakeSlideImagePart(part.Common, part.SlideImage);
                }
            }

            // 혹시 모르니 경로에 대한 모든것은 제일 마지막에 그린다. 지도 이미지에 종속되어 있기 때문이다.
            var coordinateSceneParts = blueprint.Parts.Where(x => null != x.Coordinate);
            foreach (var coordinateScenePart in coordinateSceneParts)
            {
                // 부모의 지도를 찾는다.
                var scenePartImage = blueprint.Parts.Where(x => x.Common.Id == coordinateScenePart.Coordinate.ScenePartImageId).FirstOrDefault();
                if (null != scenePartImage)
                {
                    MakeCoordinatePart(coordinateScenePart.Common, coordinateScenePart.Coordinate, scenePartImage.Common);
                }
            }

            m_Routers.ForEach(x => x.DontShowRouter());

            //////////////////////////////////////////////////////////////////////////
            // 2020.10.15 for dispatch scene 
            this.MainCanvas.MouseLeftButtonUp += MainCanvas_MouseLeftButtonUp;

            var dispatchScene = blueprint.DispatchScene;
            if (null != dispatchScene)
            {

                if (dispatchScene.IsUsed)
                {
                    m_IsDispatchTouch = dispatchScene.IsTouched;
                    m_DispatchSceneId = dispatchScene.SceneId;

                    if (dispatchScene.Seconds > 0)
                    {
                        var current = DateTimeOffset.Now.ToUnixTimeSeconds();

                        m_DispatchSeconds = current + dispatchScene.Seconds;

                        m_Timer = new DispatcherTimer();
                        m_Timer.Interval = TimeSpan.FromSeconds(1);
                        m_Timer.Tick += TimerDoWorkerForDispatchScene;
                        m_Timer.Start();
                    }
                }
            }

            //////////////////////////////////////////////////////////////////////////
        }

        private void TimerDoWorkerForDispatchScene(object sender, EventArgs e)
        {
            if (Interlocked.Exchange(ref m_bProcess, 1) == 1)
            {
                return;
            }

            var current = DateTimeOffset.Now.ToUnixTimeSeconds();

            //m_Logger.Debug($"Dispatcher Seconds : {m_DispatchSeconds - current}");

            if (current >= m_DispatchSeconds)
            {
                m_Timer.Stop();

                var blueprint = m_SceneService.FindBlueprint(m_DispatchSceneId);
                if (null != blueprint)
                {
                    m_SceneService.NextSceneId = m_DispatchSceneId;

                    PageService.Instance.MovePage(Models.ApplicationPage.Scene);
                }
                else
                {
                    m_Logger.Error($"ScenePageViewModel, TimerDoWorker, not found blueprint, Dispatch Scene Id: {m_DispatchSceneId}");
                }
            }

            Interlocked.Exchange(ref m_bProcess, 0);
        }

        private void MainCanvas_MouseLeftButtonUp(object sender, System.Windows.Input.MouseButtonEventArgs e)
        {
            //m_Logger.Debug("Mouse Left Button Up");
        }

        private void MakeClockPart(Backends.Protocols.Common.ScenePartCommon common, Backends.Protocols.Common.ScenePartClock part)
        {
            var component = new Components.ClockBox(common, part, m_DocumentFolder);
            MakeCommon(component, common);
            MainCanvas.Children.Add(component);
        }

        private void MakeSlideImagePart(Backends.Protocols.Common.ScenePartCommon common, Backends.Protocols.Common.ScenePartSlideImage part)
        {
            var component = new Components.ImageSlide(common, part, m_DocumentFolder);
            MakeCommon(component, common);
            MainCanvas.Children.Add(component);


        }

        private void MakeWebPart(Backends.Protocols.Common.ScenePartCommon common, Backends.Protocols.Common.ScenePartWeb scenePart)
        {
            try
            {
                var browser = new CefSharp.Wpf.ChromiumWebBrowser();
                MakeCommon(browser, common);
                browser.Address = scenePart.Url;
                browser.LoadError += Browser_LoadError;
                browser.MenuHandler = m_ChromeContextMenuHandler;
                MainCanvas.Children.Add(browser);
            }
            catch (System.Exception ex)
            {
                var panel = new StackPanel();
                panel.Background = Brushes.Black;
                panel.Margin = new System.Windows.Thickness(10);

                var textBlock = new TextBlock();
                textBlock.Text = $"URL: {scenePart.Url}";
                textBlock.FontSize = 25;
                textBlock.Foreground = Brushes.Red;
                textBlock.FontWeight = FontWeights.Bold;
                textBlock.Padding = new Thickness(10);
                panel.Children.Add(textBlock);

                textBlock = new TextBlock();
                textBlock.Text = $"Error: {ex.Message}";
                textBlock.FontSize = 25;
                textBlock.Foreground = Brushes.Red;
                textBlock.FontWeight = FontWeights.Bold;
                textBlock.Padding = new Thickness(10);
                panel.Children.Add(textBlock);

                MainCanvas.Children.Add(panel);

                m_Logger.Error(ex.Message);
            }

        }

        private void Browser_LoadError(object sender, CefSharp.LoadErrorEventArgs e)
        {

            MainCanvas.Dispatcher.BeginInvoke(DispatcherPriority.Normal, new Action(() =>
            {
                var panel = new StackPanel();
                panel.Background = Brushes.Black;
                panel.Margin = new System.Windows.Thickness(10);
                
                var textBlock = new TextBlock();
                textBlock.Text = $"URL: {e.FailedUrl}";
                textBlock.FontSize = 25;
                textBlock.Foreground = Brushes.Red;
                textBlock.FontWeight = FontWeights.Bold;
                textBlock.Padding = new Thickness(10);
                panel.Children.Add(textBlock);

                textBlock = new TextBlock();
                textBlock.Text = $"Error: {e.ErrorText}";
                textBlock.FontSize = 25;
                textBlock.Foreground = Brushes.Red;
                textBlock.FontWeight = FontWeights.Bold;
                textBlock.Padding = new Thickness(10);
                panel.Children.Add(textBlock);
                
                MainCanvas.Children.Add(panel);

            }));

        }

        private void MakeCoordinatePart(Backends.Protocols.Common.ScenePartCommon common, Backends.Protocols.Common.ScenePartCoordinate part, Backends.Protocols.Common.ScenePartCommon mapCommon)
        {

            var router = MakeImagePart(mapCommon, part.CoordinateRresource);

            System.Windows.Controls.Image source = null;
            System.Windows.Controls.Image destination = null;

            // generate source
            if (null != part.SourceResource)
            {
                var sourcePosition = part.SourcePosition;
                var x = sourcePosition?.X ?? 0;
                var y = sourcePosition?.Y ?? 0;

                var sourceSize = part.SourceSize;
                var width = sourceSize?.Width ?? 0;
                var height = sourceSize?.Height ?? 0;

                source = MakeImagePart(x, y, width, height, part.SourceResource);
            }

            // generate destination
            if (null != part.DestinationResource)
            {
                var destinationPosition = part.DestinationPosition;
                var x = destinationPosition?.X ?? 0;
                var y = destinationPosition?.Y ?? 0;

                var destinationSize = part.DestinationSize;
                var width = destinationSize?.Width ?? 0;
                var height = destinationSize?.Height ?? 0;

                destination = MakeImagePart(x, y, width, height, part.DestinationResource);
            }

            var routerButton = new Components.RouterButton(m_Routers, common, part, router.ImageContent, source, destination, m_DocumentFolder);
            MakeCommon(routerButton, common);

            m_Routers.Add(routerButton);

            MainCanvas.Children.Add(routerButton);
        }

        // 구 버전의 실재 OpenStreetmap의 경로 정보를 불러와서 보여주는 것
        private void MakeCoordinatePartOld(Backends.Protocols.Common.ScenePartCommon common, Backends.Protocols.Common.ScenePartCoordinate scenePartCoordinate)
        {
            var map = new Components.CoordinateOsmMap();
            MakeCommon(map, common);
            MainCanvas.Children.Add(map);
        }

        private void MakeDocumentPart(Backends.Protocols.Common.ScenePartCommon common, Backends.Protocols.Common.ScenePartDocument scenePartDocument)
        {
            var browser = new CefSharp.Wpf.ChromiumWebBrowser();
            MakeCommon(browser, common);

            var documentUri = new Uri(System.IO.Path.Combine(m_DocumentFolder, scenePartDocument.Resource.Location)).AbsoluteUri;
            var decodedUri = new Uri(System.Web.HttpUtility.UrlDecode(documentUri));

            var url = decodedUri.ToString();
            browser.Address = url;

            MainCanvas.Children.Add(browser);
        }

        private void MakeViedoPart(Backends.Protocols.Common.ScenePartCommon common, Backends.Protocols.Common.ScenePartVideo scenePartVideo)
        {
            var mediaElement = new MediaElement();
            MakeCommon(mediaElement, common);

            var resource = scenePartVideo.Resource;
            if (resource != null)
            {
                var location = resource.Location;
                try
                {
                    var document = Services.DocumentService.Instance.Document;
                    var resources = new List<Models.Resource>(document.Resources);
                    var existsResource = resources.Find(x => x.ResourceId == resource.ResourceId);
                    if (null != existsResource)
                    {
                        location = existsResource.Location;
                    }

                }
                catch (Exception ex)
                {
                    m_Logger.Error($"Subtitle, LoadContentAsync, exists Resource is Used. exception : {ex}");
                }

                mediaElement.Source = new Uri(System.IO.Path.Combine(m_DocumentFolder, location));
                mediaElement.LoadedBehavior = MediaState.Manual;
                mediaElement.Stretch = Stretch.Uniform;
                //if (scenePartVideo.Played || scenePartVideo.Repeated)
                //{
                //    mediaElement.Loaded += (sender, e) =>
                //    {
                //        mediaElement.Play();
                //    };
                //}
                //else
                //{
                //    mediaElement.Loaded += (sender, e) =>
                //    {
                //        mediaElement.Play();
                //    };
                //}

                mediaElement.Play();

                //if (scenePartVideo.Repeated)
                //{
                //    mediaElement.MediaEnded += (sender, e) =>
                //    {
                //        mediaElement.Position = new TimeSpan(0, 0, 1);
                //        mediaElement.Play();
                //    };
                //}

                // TODO : 자동으로 이동되도록 수정 예정
                mediaElement.MediaEnded += (sender, e) =>
                {
                    mediaElement.Position = new TimeSpan(0, 0, 1);
                    mediaElement.Play();
                };

            }

            MainCanvas.Children.Add(mediaElement);
        }

        private Components.Image MakeImagePart(Backends.Protocols.Common.ScenePartCommon common, Backends.Protocols.Common.ScenePartImage scenePart)
        {
            var image = new Components.Image(common, scenePart, m_DocumentFolder);

            MakeCommon(image, common);

            MainCanvas.Children.Add(image);

            return image;

        }

        private Components.Image MakeImagePart(Backends.Protocols.Common.ScenePartCommon common, Backends.Protocols.Common.Resource resource)
        {
            var image = new Components.Image(common, resource, m_DocumentFolder);

            MakeCommon(image, common);

            MainCanvas.Children.Add(image);

            return image;

        }

        private System.Windows.Controls.Image MakeImagePart(long x, long y, long width, long height, Backends.Protocols.Common.Resource resource)
        {
            var image = new System.Windows.Controls.Image();

            // set size
            image.Width = width;
            image.Height = height;

            // set position 
            Canvas.SetLeft(image, x);
            Canvas.SetTop(image, y);
            Canvas.SetZIndex(image, 0);

            if (resource != null)
            {
                var location = resource.Location;
                try
                {
                    var document = Services.DocumentService.Instance.Document;
                    var resources = new List<Models.Resource>(document.Resources);
                    var existsResource = resources.Find(res => res.ResourceId == resource.ResourceId);
                    if (null != existsResource)
                    {
                        location = existsResource.Location;
                    }

                }
                catch (Exception ex)
                {
                    m_Logger.Error($"Subtitle, LoadContentAsync, exists Resource is Used. exception : {ex}");
                }

                image.Source = new BitmapImage(new Uri(System.IO.Path.Combine(m_DocumentFolder, location)));
                image.Stretch = Stretch.Fill;
                image.StretchDirection = StretchDirection.DownOnly;
            }

            MainCanvas.Children.Add(image);

            return image;
        }

        private void MakeButtonPart(Backends.Protocols.Common.ScenePartCommon common, Backends.Protocols.Common.ScenePartButton scenePartButton)
        {
            var button = new Components.SceneButton(m_SceneService, common, scenePartButton, m_DocumentFolder);
            MakeCommon(button, common);
            MainCanvas.Children.Add(button);
        }

        private void MakeWeather(Backends.Protocols.Common.ScenePartCommon common, Backends.Protocols.Common.ScenePartWeather scenePart)
        {
            var weatherBox = new Components.WeatherBox(common, scenePart, m_PrometheusService);

            MakeCommon(weatherBox, common);
            MainCanvas.Children.Add(weatherBox);
        }

        [Obsolete]
        private void MakeSubtitlePart_deprecated(Backends.Protocols.Common.ScenePartCommon common, Backends.Protocols.Common.ScenePartSubtitle scenePart)
        {
            var canvas = new System.Windows.Controls.Canvas();
            canvas.ClipToBounds = true;

            MakeCommon(canvas, common);

            if (!string.IsNullOrEmpty(common.Background))
            {
                canvas.Background = common.Background.ToParsedBrush();
            }


            var textBlock = new Components.SubtitleTextBlock(scenePart);
            textBlock.Seconds = scenePart.Seconds;
            var scenePartText = scenePart.Text;
            if (scenePartText != null)
            {
                textBlock.TextTrimming = TextTrimming.None;
                textBlock.Text = scenePartText.Text;
                textBlock.FontSize = scenePartText.TextSize;
                if (scenePartText.Bold)
                {
                    textBlock.FontWeight = FontWeights.Bold;
                }

                if (scenePartText.Italic)
                {
                    textBlock.FontStyle = FontStyles.Italic;
                }

                textBlock.Foreground = scenePartText.TextColor.ToParsedBrush();
            }

            canvas.Children.Add(textBlock);
            MainCanvas.Children.Add(canvas);
        }

        private async Task MakeSubtitlePart(Backends.Protocols.Common.ScenePartCommon common, Backends.Protocols.Common.ScenePartSubtitle scenePart)
        {
            var subtitle = new Components.Subtitle(common, scenePart, m_DocumentFolder);
            if (null != subtitle)
            {
                await subtitle.LoadContentAsync();

                MakeCommon(subtitle, common);
                MainCanvas.Children.Add(subtitle);
            }
        }

        private void MakeCommon(FrameworkElement element, Backends.Protocols.Common.ScenePartCommon common)
        {
            // set size 
            var size = common.Size;
            element.Width = size.Width;
            element.Height = size.Height;

            // set position 
            var position = common.Position;
            Canvas.SetLeft(element, position.X);
            Canvas.SetTop(element, position.Y);
            Canvas.SetZIndex(element, common.ZIndex);


        }
    }
}
