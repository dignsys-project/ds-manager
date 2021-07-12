using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Saturn.Viewer.Models.Extensions;

namespace Saturn.Viewer.Models
{
    public class Connector : ConnectorBase
    {
        public Scene Scene { get; set; }
        public List<ConnectorScheduleScene> ConnectorScheduleScenes { get; set; }


        public Scene EmergencyScene { get; set; }

        public void FromMessage(Saturn.Backends.Protocols.Common.Connector message)
        {
            if (null != message.Base)
            {
                FromMessage(message.Base);
            }

            if (null != message.Scene)
            {
                Scene = message.Scene.ToElement();
            }

            if (message.Schedules.Count > 0)
            {
                ConnectorScheduleScenes = message.Schedules.Select(x => x.ToElement()).ToList();
            }

            if(null != message.EmergencyScene)
            {
                EmergencyScene = message.EmergencyScene.ToElement();
            }
        }
    }

    namespace Extensions
    {
        public static class ConnectorExtensions
        {
            public static Connector ToElement(this Saturn.Backends.Protocols.Common.Connector message)
            {
                var element = new Models.Connector();
                element.FromMessage(message);
                return element;
            }

            public static bool HaveConnector(this Connector connector)
            {
                return null != connector && null != connector && 0 < connector.ConnectorId;
            }

            public static bool IsGranted(this Connector connector)
            {
                return connector.HaveConnector() && connector.Kind == Backends.Protocols.Common.CONNECTOR_REGISTER_KIND.Comfirm;
            }

            public static bool HaveScene(this Connector connector)
            {
                return connector.HaveConnector() && null != connector.Scene;
            }
        }
    }
}
