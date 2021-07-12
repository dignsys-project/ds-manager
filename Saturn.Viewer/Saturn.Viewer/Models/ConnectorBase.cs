using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Saturn.Viewer.Models
{
    public class ConnectorBase
    {
        /// <summary>
        /// Connector Id 
        /// </summary>
        public long ConnectorId { get; set; } = 0;

        /// <summary>
        /// Connector Name
        /// </summary>
        public string Name { get; set; } = string.Empty;

        /// <summary>
        /// Connector Device Id
        /// </summary>
        public string DeviceId { get; set; } = string.Empty;
        
        public bool IsEmergency { get; set; }

        public Saturn.Backends.Protocols.Common.CONNECTOR_REGISTER_KIND Kind { get; set; } = Backends.Protocols.Common.CONNECTOR_REGISTER_KIND.Default;

        public void FromMessage(Saturn.Backends.Protocols.Common.ConnectorBase message)
        {
            ConnectorId = message.ConnectorId;
            Name = message.Name;
            DeviceId = message.DeviceId;
            Kind = message.Kind;
            IsEmergency = message.IsEmergency;
        }
    }

    public static class ConnectorBaseExtensions
    {
        public static ConnectorBase ToElement(this Saturn.Backends.Protocols.Common.ConnectorBase connectorBase)
        {
            var element = new ConnectorBase();
            element.FromMessage(connectorBase);

            return element;
            
        }
    }
}
