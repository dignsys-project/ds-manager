using Saturn.Viewer.Models.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Saturn.Viewer.Models
{
    public class ConnectorScheduleScene : IEquatable<ConnectorScheduleScene>
    {
        public long ConnectorScheduleSceneId { get; set; }

        public ScheduleScene ScheduleScene { get; set; }
        public long UpdatedSeconds { get; set; }

        public bool Equals(ConnectorScheduleScene other)
        {
            return ConnectorScheduleSceneId == other.ConnectorScheduleSceneId;
        }

        public void FromMessage(Saturn.Backends.Protocols.Common.ConnectorScheduleScene message)
        {
            ConnectorScheduleSceneId = message.ConnectorScheduleSceneId;
            if(null != message.ScheduleScene)
            {
                ScheduleScene = message.ScheduleScene.ToElement();
            }

            UpdatedSeconds = message.Updated;
        }
    }

    namespace Extensions
    {
        public static class ConnectorScheduleSceneExtensions
        { 
            public static ConnectorScheduleScene ToElement(this Saturn.Backends.Protocols.Common.ConnectorScheduleScene message)
            {
                var element = new ConnectorScheduleScene();
                element.FromMessage(message);
                return element;
            }
        }

    }
}
