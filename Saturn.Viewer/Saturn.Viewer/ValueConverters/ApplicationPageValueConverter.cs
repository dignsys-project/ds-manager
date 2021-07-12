using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.UI;
using Saturn.Viewer.ValueConverters;

namespace Saturn.Viewer
{
    public class ApplicationPageValueConverter : BaseValueConverter<ApplicationPageValueConverter>
    {
        public override object Convert(object value, Type targetType, object parameter, CultureInfo culture)
        {
            System.Windows.Controls.Page page = null;
            // Find the appropriate page
            switch ((Models.ApplicationPage)value)
            {
                case Models.ApplicationPage.Connector:
                    page = Services.PageService.Instance.GetConnectorPage();
                    break;
                case Models.ApplicationPage.Device:
                    page = Services.PageService.Instance.GetDevicePage();
                    break;
                case Models.ApplicationPage.DeviceApproval:
                    page = Services.PageService.Instance.GetDeviceApprovalPage();
                    break;
                case Models.ApplicationPage.Prometheus:
                    page = Services.PageService.Instance.GetPrometheusPage();
                    break;
                case Models.ApplicationPage.ResourceUpdate:
                    page = Services.PageService.Instance.GetResourcePage();
                    break;
                case Models.ApplicationPage.Scene:
                    page = Services.PageService.Instance.GetScenePage();
                    break;
                case Models.ApplicationPage.OfflineScene:
                    page = Services.PageService.Instance.GetOfflineScenePage();
                    break;
                case Models.ApplicationPage.GuideScene:
                    page = Services.PageService.Instance.GetGuideScenePage();
                    break;
                case Models.ApplicationPage.AnimationScene:
                    page = Services.PageService.Instance.GetAnimationScenePage();
                    break;

                default:
                    Debugger.Break();
                    return null;
                    
            }

            Services.PageService.Instance.Current = page;

            return page;
        }

        public override object ConvertBack(object value, Type targetType, object parameter, CultureInfo culture)
        {
            throw new NotImplementedException();
        }
    }
}
