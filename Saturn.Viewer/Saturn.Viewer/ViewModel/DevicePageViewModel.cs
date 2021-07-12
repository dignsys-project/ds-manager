using Saturn.Backends.Protocols.Common;
using Saturn.Viewer.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using Saturn.Viewer.Services;
using DeviceId;
using Saturn.Viewer.Models;
using Saturn.Viewer.Models.Extensions;

namespace Saturn.Viewer.ViewModel
{
    public class DevicePageViewModel : BaseViewModel
    {
        private static readonly log4net.ILog m_Logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        private ConnectorService m_ConnectorService = null;
        private ConnectionService m_ConnectionService = null;

        private bool m_bProcess = false;

        /// <summary>
        /// Device Name
        /// </summary>
        public string Name { get; set; } = string.Empty;

        /// <summary>
        /// Device Id
        /// </summary>
        public string DeviceId { get; set; } = string.Empty;

        public bool CanRegister
        {
            get
            {
                return Name.Length > 5 && Name.Length <= 25 && !IsProcess;
            }
        }

        public bool IsProcess
        {
            get
            {
                return m_bProcess;
            }

            private set
            {
                m_bProcess = value;
                OnPropertyChanged("IsProcess");
                OnPropertyChanged("CanRegister");
            }
        }


        public SaturnCommand RegisterCommand { get; set; } = null;

        /// <summary>
        /// 디바이스 등록 메세지
        /// </summary>
        public string StatusMessage { get; private set; } = string.Empty;

        /// <summary>
        /// 디바이스 등록 메세지 유무
        /// </summary>
        public Visibility IsShowStatus { get; private set; } = Visibility.Hidden;

        public DevicePageViewModel(ConnectorService connectorService, ConnectionService connectionService)
        {
            m_ConnectionService = connectionService;
            m_ConnectorService = connectorService;

            RegisterCommand = new SaturnCommand(async () => await RegisterDevice());
        }

        public async Task Onload()
        {
            var document = Services.DocumentService.Instance.Document;

            if (!m_ConnectionService.IsConnected && document.IsPossibleDisConnectedMode())
            {
                // Load Scenes from document
                PageService.Instance.MovePage(ApplicationPage.ResourceUpdate);

                return;
            }

            if (!document.HaveConnector())
            {
                var connector = new Models.Connector();
                connector.DeviceId = new DeviceId.DeviceIdBuilder().AddMachineName().AddMotherboardSerialNumber().AddSystemDriveSerialNumber().ToString();
                document.Connector = connector;

                await Services.DocumentService.Instance.SaveAsync();
            }

            DeviceId = document.Connector.DeviceId;
            Name = document.Connector.Name;

            if (!await m_ConnectorService.GetConnector())
            {
                document.Connector.ConnectorId = 0;

                await Services.DocumentService.Instance.SaveAsync();

                return;
            }

            if (document.Connector.HaveConnector())
            {
                PageService.Instance.MovePage(ApplicationPage.DeviceApproval);

                return;
            }

        }

        private async Task RegisterDevice()
        {
            if (!m_ConnectionService.IsConnected)
            {
                m_Logger.Error("DevicePageViewModel, Prometheus Service Disconnected.");

                PageService.Instance.MovePage(ApplicationPage.Prometheus);

                return;
            }

            IsShowStatus = Visibility.Hidden;
            IsProcess = true;

            var response = await m_ConnectorService.CreateDevice(Name, DeviceId);
            if (null == response)
            {
                m_ConnectionService.IsConnected = false; 

                IsProcess = false;
                return;
            }

            if (!response.Common.IsSuccess())
            {
                SetStatusMessage($"알수 없는 에러. Code : {response.Common.Status}");

                IsProcess = false;

                return;
            }

            var document = DocumentService.Instance.Document;


            bool bCheckDevice = false;
            switch (response.Kind)
            {
                case Backends.Protocols.Prometheus.PostConnectorResponse.Types.POST_KIND.Created:
                    SetStatusMessage("등록이 완료되었습니다.");
                    bCheckDevice = true;


                    document.Connector = response.Connector.ToElement();
                    await DocumentService.Instance.SaveAsync();
                    break;

                case Backends.Protocols.Prometheus.PostConnectorResponse.Types.POST_KIND.DuplicatedDevice:
                    SetStatusMessage("중복된 디바이스 ID가 있습니다.");
                    bCheckDevice = true;
                    break;

                case Backends.Protocols.Prometheus.PostConnectorResponse.Types.POST_KIND.DuplicatedName:
                    SetStatusMessage("중복된 디바이스 이름이 있습니다.");
                    break;
            }

            await m_ConnectorService.GetConnector();

            if (bCheckDevice || document.Connector.HaveConnector())
            {
                PageService.Instance.MovePage(Models.ApplicationPage.DeviceApproval);

                IsProcess = false;

                return;
            }

            IsProcess = false;
        }

        private void SetStatusMessage(string message)
        {
            StatusMessage = message;
            IsShowStatus = Visibility.Visible;
        }
    }
}
