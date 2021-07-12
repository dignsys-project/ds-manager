using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Controls;
using System.Net;
using Saturn.Viewer.Extensions;
using System.Windows.Media;
using System.Windows;
using Saturn.Viewer.Services;
using Saturn.Viewer.Models;

namespace Saturn.Viewer
{
    public class ConnectorPageViewModel : BaseViewModel
    {
        private readonly ConnectorService m_ConnectorService = null;

        private readonly ConnectionService m_ConnectionService = null;

        /// <summary>
        /// Prometheu Address 
        /// </summary>
        private string m_PrometheusAddress = string.Empty;

        private bool m_bProcess = false;

        public Page View { get; set; } = null;

        public Visibility IsShowConnectedMessage { get; set; } = Visibility.Hidden;

#if DEBUG
        public Visibility IsDevelopmentMode { get; set; } = Visibility.Visible;
#else
        public Visibility IsDevelopmentMode { get; set; } = Visibility.Hidden;
#endif

        private static readonly log4net.ILog m_Logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        /// <summary>
        /// Prometheus address
        /// </summary>
        public string PrometheusAddress
        {
            get
            {
                return m_PrometheusAddress;
            }

            set
            {
                m_PrometheusAddress = value;

                CanCheckVersion = Uri.IsWellFormedUriString(m_PrometheusAddress, UriKind.Absolute);

                IsShowConnectedMessage = Visibility.Hidden;
            }
        }


        /// <summary>
        /// Version Check Command
        /// </summary>
        public SaturnCommand VersionCommand { get; set; } = null;

        /// <summary>
        /// 오프라인 지도 테스트 Command
        /// </summary>
        public SaturnCommand OfflineModeCommand { get; set; } = null;

        /// <summary>
        /// is it valid url from PrometheusAddress written
        /// </summary>
        public bool CanCheckVersion { get; set; } = false;

        /// <summary>
        /// Connected message 
        /// </summary>
        public string ConnectedMessage { get; set; } = string.Empty;


        /// <summary>
        /// Connector message 
        /// </summary>
        public Visibility IsShowConnector { get; set; } = Visibility.Hidden;

        public string DeviceId { get; set; }
        public string Name { get; set; }

        /// <summary>
        /// if process is true then elements will be disabled
        /// </summary>
        public bool IsProcess
        {
            get
            {
                return m_bProcess;
            }
            private set
            {
                m_bProcess = value;

                UpdateStatus();
            }
        }

        public bool IsEnabledAddressBox
        {
            get
            {
                return !IsProcess;
            }
        }


        public bool IsEnabledCheckedVersion
        {
            get
            {
                return !IsProcess && CanCheckVersion;
            }
        }

        public ConnectorPageViewModel(ConnectorService connectorService, ConnectionService connectionService)
        {
            m_ConnectorService = connectorService;
            m_ConnectionService = connectionService;

            VersionCommand = new SaturnCommand(async () => await CheckVersionCommand());

            OfflineModeCommand = new SaturnCommand(() => OfflineSceneCommand());
        }

        public async Task Onload()
        {
            var document = DocumentService.Instance.Document;

            // 2020.09.17 오프라인 일 경우 Document에 Scene이 존재하는지 확인한 후 Scene이 있다면 현재 씬을 보여준다.
            if (!m_ConnectionService.IsConnected && document.IsPossibleDisConnectedMode())
            {
                SetConnectedMessage("오프라인 모드로 씬이 동작합니다.");

                await Task.Delay(3000);

                m_Logger.Info($"Document have scene. move to scene page. Scene Id: {document.Connector.Scene.Base.SceneId}, Scene Name : {document.Connector.Scene.Base.Name}");

                PageService.Instance.MovePage(Models.ApplicationPage.Device);

                return;
            }

            // check prometheus 
            if (!await m_ConnectorService.CheckPrometheus())
            {
                return;
            }


            if (null != document && !string.IsNullOrEmpty(document.PrometheusAddress))
            {
                PrometheusAddress = document.PrometheusAddress;

                m_Logger.Info($"Connector request to connect Prometheus. Prometheus Address : {PrometheusAddress}");

                await CheckVersionCommand();
            }
        }

        private void OfflineSceneCommand()
        {
            PageService.Instance.MovePage(Models.ApplicationPage.OfflineScene);
        }

        private async Task CheckVersionCommand()
        {
            IsProcess = true;
            OnPropertyChanged("IsEnabledAddressBox");

            if (!Uri.IsWellFormedUriString(PrometheusAddress, UriKind.RelativeOrAbsolute))
            {
                m_Logger.Error($"ConnectorPageViewModel, Connector request to connect the prometheus failed, Kind: invalid Address, Prometheus Address : {PrometheusAddress}");

                SetConnectedMessage("올바른 서버 주소를 연결해주세요");

                IsProcess = false;

                return;
            }

            m_Logger.Info($"ConnectorPageViewModel, Connector request to connect Prometheus. Prometheus Address : {PrometheusAddress}");

            // save prometheus address
            Services.DocumentService.Instance.Document.PrometheusAddress = PrometheusAddress;
            var response = await m_ConnectorService.GetVersionAsync();
            if (null == response)
            {
                m_Logger.Error($"ConnectorPageViewModel, Connector request to connect the prometheus failed, Kind: Request Version Failed, Prometheus Address : {PrometheusAddress}");

                // Error 
                SetConnectedMessage("서버와 연결할 수 없습니다.");

                IsProcess = false;

                return;
            }

            if (response.Common.IsSuccess())
            {
                var version = response.Versions.FirstOrDefault();
                if (null != version)
                {
                    m_Logger.Info($"ConnectorPageViewModel, Connector request to connect the prometheus success, Prometheus Address : {PrometheusAddress}, Version : {version.AssemVersion.Version}");

                    SetConnectedMessage($"서버 버전 : {version.AssemVersion.Version}");

                    m_ConnectionService.IsConnected = true; 

                    await Task.Delay(1000);

                    // Save document for prometheus address
                    var document = Services.DocumentService.Instance.Document;
                    document.PrometheusAddress = PrometheusAddress;

                    await Services.DocumentService.Instance.SaveAsync();

                    IsProcess = false;

                    Services.PageService.Instance.MovePage(Models.ApplicationPage.Device);

                }
            }
            else
            {
                m_Logger.Error($"ConnectorPageViewModel, Connector request to connect the prometheus failed, Kind: Response failed Version Failed, Prometheus Address : {PrometheusAddress}, Common : {response.Common.Status}");

                SetConnectedMessage("서버의 정보가 잘못되었습니다.");
            }

            IsProcess = false;
        }

        private void UpdateStatus()
        {
            OnPropertyChanged("IsEnabledAddressBox");
            OnPropertyChanged("IsEnabledCheckedVersion");
        }


        private void SetConnectedMessage(string message)
        {
            ConnectedMessage = message;
            OnPropertyChanged("ConnectedMessage");

            IsShowConnectedMessage = Visibility.Visible;
        }


    }
}
