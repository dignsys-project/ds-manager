using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;

namespace Saturn.Viewer.Models
{
    public class DayOfWeek
    {
        public int StartHour { get; set; }
        public int StartMinute { get; set; }
        public int EndHour { get; set; }
        public int EndMinute { get; set; }

        public bool IsAllDay { get; set; }
        public bool IsDisabled { get; set; }
    }

    namespace Extensions
    {
        public static class DayOfWeekExtensions
        {
            public static DayOfWeek FromMessage(this DayOfWeek model, Saturn.Backends.Protocols.Common.Schedule.Types.DayOfWeek message)
            {
                if(null == model)
                {
                    model = new DayOfWeek();
                }

                model.StartHour = message.StartHour;
                model.StartMinute = message.StartMinute;
                model.EndHour = message.EndHour;
                model.EndMinute = message.EndMinute;
                model.IsAllDay = message.IsAllDay;
                model.IsDisabled = message.Disabled;

                return model;
            }
        }
    }
}
