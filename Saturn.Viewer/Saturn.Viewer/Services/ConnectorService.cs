using Saturn.Viewer.Extensions;
using Saturn.Viewer.Models;
using Saturn.Viewer.Models.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Saturn.Viewer.Services
{
    public class ConnectorService
    {
        private static readonly log4net.ILog m_Logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        private readonly PrometheusService m_PrometheusService = null;

        private readonly SceneService m_SceneService = null;

        private readonly ScheduleService m_ScheduleService = null;

        private readonly ConnectionService m_ConnectionService = null;

        public ConnectorService(PrometheusService prometheusService, SceneService sceneService, ScheduleService scheduleService, ConnectionService connectionService)
        {
            m_PrometheusService = prometheusService;
            m_SceneService = sceneService;
            m_ScheduleService = scheduleService;
            m_ConnectionService = connectionService;

            m_Logger.Info("Create Connector Service");
        }

        public async Task<bool> CheckPrometheus()
        {
            var document = DocumentService.Instance.Document;
            if (null == document || string.IsNullOrEmpty(document.PrometheusAddress))
            {
                m_ConnectionService.IsConnected = false;
                return false;
            }

            var versionResponse = await GetVersionAsync();
            if (null == versionResponse)
            {
                m_ConnectionService.IsConnected = false;

                return false;
            }

            if (!versionResponse.Common.IsSuccess())
            {
                m_ConnectionService.IsConnected = false;

                return false;
            }

            m_ConnectionService.IsConnected = true;

            return true;
        }

        public async Task<Saturn.Backends.Protocols.Common.GetVersionResponse> GetVersionAsync()
        {
            return await m_PrometheusService.GetVersionAsync();
        }


        public async Task<bool> GetConnector()
        {
            var document = DocumentService.Instance.Document;
            if (null == document.Connector)
            {
                return false;
            }

            var response = await m_PrometheusService.GetConnectorbyDeviceId(document.Connector.DeviceId);
            if (null == response)
            {
                m_Logger.Error($"ConnectorService, GetConnector, Response failed");

                return false;
            }

            if (!response.Common.IsSuccess())
            {
                m_Logger.Error($"ConnectorService, GetConnector, GetConnectorByDeviceId failed. Common : {response.Common}");

                return false;
            }


            document.Connector = response.Connector.ToElement();
            LoadSceneFromConnector(document.Connector);

            await DocumentService.Instance.SaveAsync();

            return true;
        }

        public bool LoadSceneFromConnector(Models.Connector connector)
        {
            if (null == connector.Scene)
            {
                return false;
            }

            List<Models.SceneBase> sceneBases = new List<Models.SceneBase>();


            // set default scene base 
            var startSceneBase = connector.Scene.Base;

            sceneBases.Add(startSceneBase);

            // 스케줄 설정이 있는지 판단한다.
            var connectorScheduleScenes = connector.ConnectorScheduleScenes;
            if (null != connectorScheduleScenes)
            {
                sceneBases.AddRange(connectorScheduleScenes.Select(x => x.ScheduleScene.SceneBase));


                m_ScheduleService.SetSchedules(connectorScheduleScenes);
            }

            // 긴급 씬 추가
            if(null != connector.EmergencyScene)
            {
                sceneBases.Add(connector.EmergencyScene.Base);
            }

            var scenes = new Dictionary<long, Models.SceneBase>();

            sceneBases.ForEach(x =>
            {
                if (!scenes.ContainsKey(x.SceneId))
                {
                    scenes.Add(x.SceneId, x);
                }
            });

            // set connector scene bases that can be use
            m_SceneService.SetSceneBases(scenes.Values.ToList(), startSceneBase);

            return true;
        }

        public async Task<Saturn.Backends.Protocols.Prometheus.PostConnectorResponse> CreateDevice(string name, string deviceId)
        {
            return await m_PrometheusService.PostConnector(name, deviceId);
        }

        public async Task<bool> CheckDeviceApproval()
        {
            bool bCheckDevice = await GetConnector();
            if (!bCheckDevice)
            {
                return false;
            }

            var document = DocumentService.Instance.Document;
            if (document.HaveConnector())
            {
                return document.Connector.Kind == Backends.Protocols.Common.CONNECTOR_REGISTER_KIND.Comfirm;
            }

            return false;
        }
    }
}
