using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics;
using System.Linq;

namespace Prometheus.Models.Databases
{
    public class Connector : DatabaseId
    {
        [MaxLength(50), Required]
        public string Name { get; set; }

        [Required, MaxLength(256)]
        public string DeviceId { get; set; }

        public long CreatedSeconds { get; set; }

        public Saturn.Backends.Protocols.Common.CONNECTOR_REGISTER_KIND Kind { get; set; }

        public long? DepartmentId { get; set; }

        [ForeignKey("DepartmentId")]
        public Department Department { get; set; }

        public long? SceneId { get; set; }

        [ForeignKey("SceneId")]
        public Scene Scene { get; set; }
        public ICollection<ConnectorScheduleScene> Schedules { get; set; }

        public long LastUpdatedSeconds { get; set; }
        public long? ResourceId { get; set; }

        [ForeignKey("ResourceId")]
        public Resource Resource { get; set; }

        public long? EmergencySceneId { get; set; }

        [ForeignKey("EmergencySceneId")]
        public Scene EmergencyScene { get; set; }

        public bool IsEmergency { get; set; }
    }

    namespace Extensions
    {
        public static class ConnectorExtensions
        {
            public static Saturn.Backends.Protocols.Common.ConnectorBase ToMessageBase(this Connector connector)
            {
                var message = new Saturn.Backends.Protocols.Common.ConnectorBase();
                message.ConnectorId = connector.Id;
                message.Name = connector.Name;
                message.DeviceId = connector.DeviceId;
                message.CreatedSeconds = connector.CreatedSeconds;
                message.Kind = connector.Kind;
                if (connector.Resource != null)
                {
                    message.Resource = connector.Resource.ToMessage();
                }

                if (connector.EmergencySceneId.HasValue)
                {
                    message.EmergencySceneId = connector.EmergencySceneId.Value;
                }
                message.IsEmergency = connector.IsEmergency;


                message.UpdatedSeconds = connector.LastUpdatedSeconds;

                return message;
            }

            public static Saturn.Backends.Protocols.Common.ConnectorDepartmentBase ToConnectorDepartmentBaseMessage(this Connector connector)
            {
                var message = new Saturn.Backends.Protocols.Common.ConnectorDepartmentBase();
                message.ConnectorBase = connector.ToMessageBase();

                Debug.Assert(null != connector.Department);
                if (null != connector.Department)
                {
                    message.DepartmentBase = connector.Department.ToMessageBase();
                }


                return message;
            }
            public static Saturn.Backends.Protocols.Common.Connector ToMessage(this Connector connector)
            {
                var message = new Saturn.Backends.Protocols.Common.Connector();
                message.Base = connector.ToMessageBase();
                if (null != connector.Department)
                {
                    message.DepartmentBase = connector.Department.ToMessageBase();
                }

                if (null != connector.Scene)
                {
                    message.Scene = connector.Scene.ToMessage();
                }

                if (connector.Schedules != null)
                {
                    message.Schedules.AddRange(connector.Schedules.Select(x => x.ToMessage()));
                }

                if (connector.EmergencyScene != null)
                {
                    message.EmergencyScene = connector.EmergencyScene.ToMessage();
                }


                return message;
            }
        }
    }
}
