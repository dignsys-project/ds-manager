using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Saturn.Viewer.Models
{
    public class Schedule
    {
        public long ScheduleId { get; set; }

        public string Name { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public bool UseDate { get; set; }

        public Week Week { get; set; }

        public void FromMessage(Saturn.Backends.Protocols.Common.Schedule message)
        {
            ScheduleId = message.ScheduleId;
            Name = message.Name;

            UseDate = message.UseDate;
            if (UseDate)
            {
                StartDate = DateTimeOffset.FromUnixTimeSeconds(message.StartDateSeconds).DateTime;

                var endDateTimeOffset = DateTimeOffset.FromUnixTimeSeconds(message.EndDateSeconds);
                EndDate = endDateTimeOffset.AddHours(11).AddMinutes(59).AddSeconds(59).DateTime;
            }

            if (null != message.Week)
            {
                Week = new Week();

                Week.FromMessage(message.Week);
            }

        }

    }

    namespace Extensions
    {
        public static class ScheduleExtensions
        {
            public static Schedule ToElement(this Saturn.Backends.Protocols.Common.Schedule message)
            {
                var element = new Schedule();

                element.FromMessage(message);

                return element;
            }
        }
    }
}
