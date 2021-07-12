using Saturn.Viewer.Models.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Saturn.Viewer.Models
{
    public class Week
    {
        public DayOfWeek Mon { get; set; }
        public DayOfWeek Tue { get; set; }
        public DayOfWeek Wed { get; set; }
        public DayOfWeek Thu { get; set; }
        public DayOfWeek Fri { get; set; }
        public DayOfWeek Sat { get; set; }
        public DayOfWeek Sun { get; set; }

        public void FromMessage(Saturn.Backends.Protocols.Common.Schedule.Types.Week message)
        {
            if (null != message.Mon)
            {
                Mon = Mon.FromMessage(message.Mon);
            }

            if (null != message.Tue)
            {
                Tue = Tue.FromMessage(message.Tue);
            }

            if (null != message.Wed)
            {
                Wed = Wed.FromMessage(message.Wed);
            }

            if (null != message.Thu)
            {
                Thu = Thu.FromMessage(message.Thu);
            }

            if (null != message.Fri)
            {
                Fri = Fri.FromMessage(message.Fri);
            }

            if (null != message.Sat)
            {
                Sat = Sat.FromMessage(message.Sat);
            }

            if (null != message.Sun)
            {
                Sun = Sun.FromMessage(message.Sun);
            }
        }

    }

    namespace Extensions
    {
        public static class WeekExtensions
        {
            public static Week ToElement(this Saturn.Backends.Protocols.Common.Schedule.Types.Week message)
            {
                var element = new Week();
                element.FromMessage(message);

                return element;
            }
        }
    }

}
