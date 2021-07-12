using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Saturn.Viewer.Models
{
    public enum ApplicationPage
    {
        Default = 0,
        Prometheus,
        Connector,
        Device,
        DeviceApproval,
        ResourceUpdate,
        Scene,
        // For test scene
        OfflineScene,
        GuideScene,
        AnimationScene,
    }
}
