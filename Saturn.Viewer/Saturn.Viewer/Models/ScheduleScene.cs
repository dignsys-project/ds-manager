using Saturn.Viewer.Models.Extensions;
using Saturn.Viewer.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Saturn.Viewer.Models
{
    public class ScheduleScene
    {
        public long ScheduleSceneId { get; set; }

        public string Name { get; set; }

        public Schedule Schedule { get; set; }

        public SceneBase SceneBase { get; set; }
        public long UpdatedSeconds { get; set; }

        public void FromMessage(Saturn.Backends.Protocols.Common.ScheduleScene message)
        {
            ScheduleSceneId = message.ScheduleSceneId;
            Name = message.Name;
            if (null != message.Schedule)
            {
                Schedule = message.Schedule.ToElement();
            }

            if (null != message.SceneBase)
            {
                SceneBase = message.SceneBase.ToElement();
            }

            UpdatedSeconds = message.Updated;
        }
    }

    namespace Extensions
    {
        public static class ScheduleSceneExtensions
        {
            public static ScheduleScene ToElement(this Saturn.Backends.Protocols.Common.ScheduleScene message)
            {
                var element = new ScheduleScene();
                element.FromMessage(message);
                return element;
            }
        }
    }
}
