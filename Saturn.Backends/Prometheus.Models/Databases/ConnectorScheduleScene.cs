using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Prometheus.Models.Databases
{
    public class ConnectorScheduleScene : DatabaseId
    {
        [Required]
        public long ConnectorId { get; set; }
        [ForeignKey("ConnectorId")]
        public Connector Connector { get; set; }

        public long ScheduleSceneId { get; set; }

        [ForeignKey("ScheduleSceneId")]
        public ScheduleScene ScheduleScene { get; set; }

        public long CreatedSeconds { get; set; }

        [Required]
        public long UpdatedSceonds { get; set; }        // obsolete
    }

    namespace Extensions
    {
        public static class ConnectorSceneScheduleExtensions
        {
            public static Saturn.Backends.Protocols.Common.ConnectorScheduleScene ToMessage(this ConnectorScheduleScene model)
            {
                var message = new Saturn.Backends.Protocols.Common.ConnectorScheduleScene();
                message.ConnectorScheduleSceneId = model.Id;
                message.ScheduleScene = model.ScheduleScene.ToMessage();
                message.Created = model.CreatedSeconds;
                message.Updated = model.UpdatedSceonds;
                return message;
            }
        }
    }
}