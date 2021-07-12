using Microsoft.Extensions.DependencyInjection;
using Saturn.Viewer.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Controls;

namespace Saturn.Viewer.Services
{

    public class PageService : BaseViewModel
    {
        #region SINGLETON_INSTANCE

        private static PageService m_Instance = null;

        public static PageService Instance
        {
            get
            {
                if (null == m_Instance)
                {
                    m_Instance = new PageService();
                }

                return m_Instance;
            }
        }
        #endregion

        private static readonly log4net.ILog m_Logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        private Frame m_MainFrame = null;
        public Frame MainFrame
        {
            set
            {
                m_MainFrame = value;
            }
        }

        public IServiceProvider Provider { get; set; }

        public long CurrentScheduleId { get; set; } = 0;

        public PageService()
        {

        }

        public void Refresh()
        {
            m_MainFrame.NavigationService.Refresh();
        }

        public Models.ApplicationPage CurrentKind { get; set; } = Models.ApplicationPage.Prometheus;

        // Get MainWindow.xaml
        public MainWindow GetMainWindow() => Provider.GetRequiredService<MainWindow>();

        // Get ConnectorPage.xaml
        public Pages.ConnectorPage GetConnectorPage() => Provider.GetRequiredService<Pages.ConnectorPage>();
        // Get DevicePage.xaml
        public Pages.DevicePage GetDevicePage() => Provider.GetRequiredService<Pages.DevicePage>();
        // Get DeviceApprovalPage.xaml
        public Pages.DeviceApprovalPage GetDeviceApprovalPage() => Provider.GetRequiredService<Pages.DeviceApprovalPage>();
        // Get PrometheusPage.xaml
        public Pages.PrometheusPage GetPrometheusPage() => Provider.GetRequiredService<Pages.PrometheusPage>();

        // Get ResourcePage.xaml
        public Pages.ResourcePage GetResourcePage() => Provider.GetRequiredService<Pages.ResourcePage>();

        // Get ScenePage.xaml
        public Pages.ScenePage GetScenePage() => Provider.GetRequiredService<Pages.ScenePage>();

        // Get OfflineScenePage.xaml
        public Pages.OfflineScenePage GetOfflineScenePage() => Provider.GetRequiredService<Pages.OfflineScenePage>();

        // Get GuideScenePage.xaml
        public Pages.GuideScenePage GetGuideScenePage() => Provider.GetRequiredService<Pages.GuideScenePage>();

        // Get AnimationPage.xaml
        public Pages.AnimationPage GetAnimationScenePage() => Provider.GetRequiredService<Pages.AnimationPage>();

        public System.Windows.Controls.Page Current { get; set; } = null;

        public void MovePage(Models.ApplicationPage kind)
        {
            if (kind == Models.ApplicationPage.Scene)
            {
                CurrentKind = kind;

                OnPropertyChanged("CurrentKind");
            }

            if (CurrentKind == kind)
            {
                return;
            }

            m_Logger.Debug($"PageService, MovePage, ApplicationPage : {kind}");

            CurrentKind = kind;
        }



    }
}
