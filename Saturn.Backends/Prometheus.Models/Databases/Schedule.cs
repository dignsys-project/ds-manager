using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Saturn.Backends.Commons.Extensions;
// using Saturn.Backends.Commons.Extensions;

namespace Prometheus.Models.Databases
{
    public class Schedule : DatabaseId
    {
        [Required, MaxLength(50)]
        public string Name { get; set; }

        public long? StartDateSeconds { get; set; }

        // 종료 날짜
        public long? EndDateSeconds { get; set; }

        [Required]
        public bool UseDate { get; set; }

        // 요일 Text 
        public string WeekSerialized { get; set; }

        [Required]
        public long CreatedSeconds { get; set; }

        [Required]
        public long UpdateSeconds { get; set; }
    }

    namespace Extensions
    {
        public static class ScheduleExtensions
        {
            public static Schedule FromMessage(this Schedule schedule, Saturn.Backends.Protocols.Common.Schedule message)
            {
                if (null == schedule)
                {
                    schedule = new Schedule();
                }

                // schedule.Id = message.ScheduleId;
                schedule.Name = message.Name;
                schedule.StartDateSeconds = message.StartDateSeconds;
                schedule.EndDateSeconds = message.EndDateSeconds;
                schedule.UseDate = message.UseDate;
                schedule.WeekSerialized = message.Week.ToNetwork();

                return schedule;
            }

            public static Saturn.Backends.Protocols.Common.Schedule ToMessage(this Schedule schedule)
            {
                var message = new Saturn.Backends.Protocols.Common.Schedule();
                message.ScheduleId = schedule.Id;
                message.Name = schedule.Name;
                message.StartDateSeconds = schedule.StartDateSeconds ?? 0;
                message.EndDateSeconds = schedule.EndDateSeconds ?? 0;
                message.UseDate = schedule.UseDate;

                var deserialized = Newtonsoft.Json.JsonConvert.DeserializeObject<string>(schedule.WeekSerialized);
                var bytes = System.Convert.FromBase64String(deserialized);

                message.Week = Saturn.Backends.Protocols.Common.Schedule.Types.Week.Parser.ParseFrom(bytes);

                message.CreatedSeconds = schedule.CreatedSeconds;
                message.UpdatedSeconds = schedule.UpdateSeconds;

                return message;
            }
        }
    }
}