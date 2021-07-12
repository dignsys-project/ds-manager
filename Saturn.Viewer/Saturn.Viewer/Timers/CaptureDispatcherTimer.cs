using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel;
using System.Windows.Threading;
using Saturn.Viewer.Services;
using System.Windows;
using System.Windows.Media.Imaging;
using System.IO;
using System.Threading;
using System.Drawing;
using System.Drawing.Imaging;
using System.Windows.Forms;
using Saturn.Viewer.Extensions;
using System.Windows.Media;

namespace Saturn.Viewer.Timers
{
    public class CaptureDispatcherTimer
    {
        private readonly IPrometheusService m_Prometheus = null;
        private readonly DispatcherTimer m_Timer = null;

        private readonly Uri m_Destination = null;

        private readonly UIElement m_Element = null;

        private readonly string m_DeviceId = null;

        private int m_bProcess = 0;

        private static readonly log4net.ILog m_Logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        public CaptureDispatcherTimer(TimeSpan duration, UIElement source, PrometheusService prometheusService)
        {
            m_Prometheus = prometheusService;

            m_Element = source;

            var workerFolder = System.IO.Path.Combine(DocumentService.CaptureFolder, $"{m_DeviceId}_{DateTime.Now.ToString("YYYYmmdd")}.png");
            m_Destination = new Uri(workerFolder);

            m_Timer = new DispatcherTimer();
            m_Timer.Interval = duration;
            m_Timer.Tick += DoWorker;
            m_Timer.Start();
        }

        private async void DoWorker(object sender, EventArgs e)
        {
            await CaptureScreen();
        }

        private async Task<bool> CaptureScreen()
        {
            var document = DocumentService.Instance.Document;
            if (null == document)
            {
                return false;
            }

            var connector = document.Connector;

            if (null == connector)
            {
                return false;
            }

            if (string.IsNullOrEmpty(connector.DeviceId))
            {
                return false;
            }

            bool bSuccess = false;
            if (Interlocked.CompareExchange(ref m_bProcess, 1, 0) == 0)
            {
                var deviceId = connector.DeviceId;
                var connectorId = connector.ConnectorId;

                var destFolder = DocumentService.CaptureFolder;

                if (!System.IO.Directory.Exists(destFolder))
                {
                    System.IO.Directory.CreateDirectory(destFolder);
                }

                string fileName = $"{deviceId}.png";

                var fullName = System.IO.Path.Combine(destFolder, fileName);

                bSuccess = await CreateScreenCapture(fullName);
                if (bSuccess)
                {
                    var response = await m_Prometheus.PostConnectorScreenCapture(connectorId, deviceId, destFolder, fileName);
                    if (null == response || !response.Common.IsSuccess())
                    {
                        m_Logger.Error($"CaptureDispatcherTimer, Screen capture to Prometheus failed, ConnectorId: {connectorId}, DeviceId : {deviceId}");
                    }
                }


                Interlocked.Exchange(ref m_bProcess, 0);
            }

            return bSuccess;
        }

        private async Task<bool> CreateScreenCaptureUIElement(string fullName)
        {
            return await Task.Run(() =>
            {
                try
                {
                    var source = m_Element;

                    double Height, renderHeight, Width, renderWidth;

                    Height = renderHeight = source.RenderSize.Height;
                    Width = renderWidth = source.RenderSize.Width;



                    //Specification for target bitmap like width/height pixel etc.
                    RenderTargetBitmap renderTarget = new RenderTargetBitmap((int)renderWidth, (int)renderHeight, 96, 96, PixelFormats.Pbgra32);
                    //creates Visual Brush of UIElement
                    VisualBrush visualBrush = new VisualBrush(source);

                    DrawingVisual drawingVisual = new DrawingVisual();
                    using (DrawingContext drawingContext = drawingVisual.RenderOpen())
                    {
                        //draws image of element
                        drawingContext.DrawRectangle(visualBrush, null, new System.Windows.Rect(new System.Windows.Point(0, 0), new System.Windows.Point(Width, Height)));
                    }
                    //renders image
                    renderTarget.Render(drawingVisual);

                    //PNG encoder for creating PNG file
                    PngBitmapEncoder encoder = new PngBitmapEncoder();
                    encoder.Frames.Add(BitmapFrame.Create(renderTarget));
                    using (FileStream stream = new FileStream(fullName, FileMode.Create, FileAccess.Write))
                    {
                        encoder.Save(stream);
                    }

                }
                catch (System.Exception ex)
                {
                    m_Logger.Error($"CaptureDispatcherTimer, CreateScreenCaptureUIElement, ScreenCapture Failed, Exception : {ex}");

                    return false;
                }

                return true;
            });

        }

        private async Task<bool> CreateScreenCapture(string fullName)
        {
            // 주화면의 크기 정보 읽기 

            int screenLeft = SystemInformation.VirtualScreen.Left;
            int screenTop = SystemInformation.VirtualScreen.Top;
            int screenWidth = SystemInformation.VirtualScreen.Width;
            int screenHeight = SystemInformation.VirtualScreen.Height;

            return await Task.Run(() =>
            {
                try
                {
                    using (Bitmap bmp = new Bitmap(screenWidth, screenHeight, System.Drawing.Imaging.PixelFormat.Format32bppArgb))
                    {
                        // Bitmap 이미지 변경을 위해 Graphics 객체 생성 
                        using (Graphics gr = Graphics.FromImage(bmp))
                        {
                            // 화면을 그대로 카피해서 Bitmap 메모리에 저장 
                            gr.CopyFromScreen(screenLeft, screenTop, 0, 0, bmp.Size);
                        } // Bitmap 데이타를 파일로 저장 //bmp.Save("test.png", ImageFormat.Png); // Bitmap 2 BitmapImage // Image에 캡처한 이미지를 뿌려주기 위해 Bitmap을 BitmapImage로 변환한다. using (MemoryStream memory = new MemoryStream()) { bmp.Save(memory, ImageFormat.Bmp); memory.Position = 0; BitmapImage bitmapimage = new BitmapImage(); bitmapimage.BeginInit(); bitmapimage.StreamSource = memory; bitmapimage.CacheOption = BitmapCacheOption.OnLoad; bitmapimage.EndInit(); imgCapture.Source = bitmapimage; 

                        bmp.Save(fullName, ImageFormat.Png);
                    }

                    return true;
                }
                catch (System.Exception ex)
                {
                    m_Logger.Error($"CaptureDispatcherTimer, CreateScreenCapture, ScreenCapture Failed, Exception : {ex}");

                    return false;
                }
            });
        }
    }


}
