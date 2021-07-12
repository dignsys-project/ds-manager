using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Saturn.Viewer.Models.Extensions;

namespace Saturn.Viewer.Models
{
    public class Document
    {
        public Connector Connector { get; set; } = null;

        /// <summary>
        /// Prometheus Address
        /// </summary>
        public string PrometheusAddress { get; set; } = string.Empty;       

        public List<Scene> Scenes { get; set; }
        public List<SceneBase> SceneBases { get; set; }

        public bool IsDownloadCompleted { get; set; } = false;

        public List<Resource> Resources { get; set; }


        //public void FromMessage(Saturn.Backends.Protocols.Common.Scene message)
        //{
        //    Scene = message.ToElement();
        //}
    }

    public static class DocumentExtensions
    {
        public static bool HaveConnector(this Document document)
        {
            return null != document && document.Connector.HaveConnector();
        }

        public static bool IsPossibleDisConnectedMode(this Document document)
        {
            return document.HaveConnector() && document.Connector.IsGranted() && document.Connector.HaveScene() && document.IsDownloadCompleted;
        }
    }

    
}
