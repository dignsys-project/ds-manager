using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Prometheus.Models.Databases
{
    public class ScheduleScene : DatabaseId
    {

        [Required, MaxLength(30)]
        public string Name { get; set; }

        public long ScheduleId { get; set; }

        [ForeignKey("ScheduleId")]

        public Schedule Schedule { get; set; }

        [Required]
        public long SceneId { get; set; }

        [ForeignKey("SceneId")]
        public Scene Scene { get; set; }

        [Required]
        public long CreatedSeconds { get; set; }

        [Required]
        public long UpdatedSceonds { get; set; }
    }

    namespace Extensions
    {
        public static class SceneScheduleExtensions
        {
            public static Saturn.Backends.Protocols.Common.ScheduleScene ToMessage(this ScheduleScene model)
            {
                var message = new Saturn.Backends.Protocols.Common.ScheduleScene();
                message.ScheduleSceneId = model.Id;
                message.Name = model.Name;
                message.SceneBase = model.Scene.ToMessageBase();
                message.Schedule = model.Schedule.ToMessage();
                message.Created = model.CreatedSeconds;
                message.Updated = model.UpdatedSceonds;
                return message;
            }
        }
    }
}