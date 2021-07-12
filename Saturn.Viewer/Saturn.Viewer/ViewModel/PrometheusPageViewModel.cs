using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Saturn.Viewer.Extensions;
using Saturn.Viewer.Services;

namespace Saturn.Viewer.ViewModel
{
    public class PrometheusPageViewModel : BaseViewModel
    {
        private static readonly log4net.ILog m_Logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        private readonly ConnectorService m_ConnectorService = null;

        private readonly ConnectionService m_ConnectionService = null;

        public string VersionMessage { get; set; }


        public PrometheusPageViewModel(ConnectorService connectorService, ConnectionService connectionService)
        {
            m_ConnectionService = connectionService;
            m_ConnectorService = connectorService;
        }

        public async Task OnLoad()
        {
            VersionMessage = "서버와의 통신을 확인 중입니다.";

            // Check Connector
            if (!await m_ConnectorService.CheckPrometheus())
            {
                m_Logger.Warn("PrometheusPageViewModel, Connector Check failed."); 

                PageService.Instance.MovePage(Models.ApplicationPage.Connector);

                return;
            }


            await Task.Delay(1000);

            VersionMessage = "디바이스의 상태 체크 중입니다.";

            // Check Device 
            if (!await m_ConnectorService.GetConnector())
            {
                PageService.Instance.MovePage(Models.ApplicationPage.Device);

                return;
            }

            await Task.Delay(1000);


            VersionMessage = "디바이스의 유효성을 검증 중입니다.";


            PageService.Instance.MovePage(Models.ApplicationPage.DeviceApproval);
        }
    }
}
