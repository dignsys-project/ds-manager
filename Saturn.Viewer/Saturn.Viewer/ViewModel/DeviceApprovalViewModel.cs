using Saturn.Viewer.Extensions;
using Saturn.Viewer.Models;
using Saturn.Viewer.Models.Extensions;
using Saturn.Viewer.Services;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Input;

namespace Saturn.Viewer.ViewModel
{
    public class DeviceApprovalViewModel : BaseViewModel
    {
        private static readonly log4net.ILog m_Logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        private static int RequestSeconds = 5;

        public int TimerCount { get; set; } = RequestSeconds;
        public string RegisteredMessage { get; set; } = string.Empty;

        public Visibility ProcessVisibility { get; set; } = Visibility.Hidden;

        public int Percent { get; set; } = 0;

        public string DeviceName { get; set; }

        private volatile static bool m_bRun = false;

        private System.Windows.Threading.DispatcherTimer m_DispatcherTimer = null;

        private readonly Services.ConnectorService m_ConnectorService = null;
        private readonly Services.ConnectionService m_ConnectionService= null;

        public DeviceApprovalViewModel(ConnectorService connectorService, ConnectionService connectionService)
        {
            m_ConnectorService = connectorService;
            m_ConnectionService = connectionService;
        }

        public async Task OnLoad()
        {
            if(await RequestGetconnector())
            {
                return;
            }
             
            m_DispatcherTimer = new System.Windows.Threading.DispatcherTimer();
            m_DispatcherTimer.Tick += new EventHandler(dispatcherTimer_Tick);
            m_DispatcherTimer.Interval = new TimeSpan(0, 0, 1);
            m_DispatcherTimer.Start();

            await Task.Delay(1);
        }

        //  System.Windows.Threading.DispatcherTimer.Tick handler
        //
        //  Updates the current seconds display and calls
        //  InvalidateRequerySuggested on the CommandManager to force 
        //  the Command to raise the CanExecuteChanged event.
        private void dispatcherTimer_Tick(object sender, EventArgs e)
        {
            if(m_bRun)
            {
                return;
            }

            if (!m_ConnectionService.IsConnected)
            {
                m_Logger.Error("DevicePageViewModel, Prometheus Service Disconnected.");

                PageService.Instance.MovePage(ApplicationPage.Prometheus);

                return;
            }

            m_bRun = true;
            // Updating the Label which displays the current second
            // lblSeconds.Content = DateTime.Now.Second;
            var tick = TimerCount;

            if(tick > 0)
            {
                tick--;

                if(tick <= 0)
                {
                    tick= RequestSeconds;

                    

                    Task.Run(async () => await RequestGetconnector()).Wait();

                }

                TimerCount = tick;
            }

            var value = (double)((double)((double)TimerCount / (double)RequestSeconds) * (double)100);
            Percent = Convert.ToInt32(value);


            // Forcing the CommandManager to raise the RequerySuggested event
            CommandManager.InvalidateRequerySuggested();

            m_bRun = false;
        }

        private async Task<bool> RequestGetconnector()
        {
            ProcessVisibility = Visibility.Visible;
            if(!await m_ConnectorService.GetConnector())
            {
                PageService.Instance.MovePage(Models.ApplicationPage.Device);

                ProcessVisibility = Visibility.Hidden;

                return false;
            }

            var document = DocumentService.Instance.Document;
            if(document.HaveConnector())
            {
                var connector = document.Connector;
                
                DeviceName = connector.Name;

                switch (connector.Kind)
                {
                    case Backends.Protocols.Common.CONNECTOR_REGISTER_KIND.Comfirm:
                        if (document.Connector.HaveScene())
                        {
                            if (null != m_DispatcherTimer)
                            {
                                m_DispatcherTimer.Stop();
                            }

                            PageService.Instance.MovePage(Models.ApplicationPage.ResourceUpdate);

                            return true;
                        }
                        else
                        {
                            RegisteredMessage = "선택된 씬 정보 대기 중.";

                            OnPropertyChanged("RegisteredMessage");
                        }
                        ProcessVisibility = Visibility.Hidden;
                        return false;

                    case Backends.Protocols.Common.CONNECTOR_REGISTER_KIND.Deny:
                        RegisteredMessage = "승인 거부 되었습니다.";
                        OnPropertyChanged("RegisteredMessage");
                        break;

                    case Backends.Protocols.Common.CONNECTOR_REGISTER_KIND.Registered:
                        RegisteredMessage = "승인 대기 중입니다.";
                        OnPropertyChanged("RegisteredMessage");
                        break;

                }
            }

            ProcessVisibility = Visibility.Hidden;

            return false;
        }
    }
}
