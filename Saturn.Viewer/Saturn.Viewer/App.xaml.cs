using log4net.Core;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Saturn.Viewer.Services;
using Saturn.Viewer.ViewModel;
using System;
using System.Windows;
using log4net;
using Saturn.Viewer.Pages;
using Saturn.Viewer.Timers;

namespace Saturn.Viewer
{
    /// <summary>
    /// Interaction logic for App.xaml
    /// </summary>
    public partial class App : Application
    {
        public IConfiguration Configuration { get; private set; }

        private static readonly log4net.ILog m_Logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        protected override void OnStartup(StartupEventArgs e)
        {
            log4net.Config.XmlConfigurator.Configure();

            System.Reflection.Assembly assembly = System.Reflection.Assembly.GetExecutingAssembly();
            System.Diagnostics.FileVersionInfo fvi = System.Diagnostics.FileVersionInfo.GetVersionInfo(assembly.Location);
            string version = fvi.FileVersion;

            bool isRelease = false;
#if DEBUG
            isRelease = false;
#else
            isRelease = true;
#endif 

            m_Logger.Info($"Saturn Viewer Started, Version : {version}, Release : {isRelease}");


            base.OnStartup(e);

            // dependency injection
            var serviceCollection = new ServiceCollection();
            ConfigurationServices(serviceCollection);

            var provider = serviceCollection.BuildServiceProvider();

            Services.PageService.Instance.Provider = provider;

            // Load DocumentService
            Services.DocumentService.Instance.Load();


            // Main Windows Show.
            var mainWindow = Services.PageService.Instance.GetMainWindow();
            mainWindow.Show();
        }

        private void ConfigurationServices(IServiceCollection services)
        {
            services.AddHttpClient();

            services.AddSingleton(typeof(MainWindow));
            services.AddSingleton(typeof(MainWindowViewModel));
            services.AddSingleton(typeof(ResourceService));
            services.AddSingleton(typeof(SceneService));
            services.AddSingleton(typeof(ScheduleService));
            services.AddSingleton(typeof(ConnectorService));
            services.AddSingleton(typeof(ResourceDispatcherTimerService));
            services.AddSingleton(typeof(ConnectionService));

            services.AddTransient(typeof(PrometheusService));

            services.AddTransient(typeof(Pages.PrometheusPage));
            services.AddTransient(typeof(PrometheusPageViewModel));

            services.AddTransient(typeof(Pages.ConnectorPage));
            services.AddTransient(typeof(ConnectorPageViewModel));

            services.AddTransient(typeof(Pages.DevicePage));
            services.AddTransient(typeof(DevicePageViewModel));

            services.AddTransient(typeof(Pages.DeviceApprovalPage));
            services.AddTransient(typeof(DeviceApprovalViewModel));

            services.AddTransient(typeof(Pages.ResourcePage));
            services.AddTransient(typeof(ResourcePageViewModel));


            services.AddTransient(typeof(Pages.ScenePage));
            services.AddTransient(typeof(ScenePageViewModel));

            services.AddTransient(typeof(Pages.OfflineScenePage));
            services.AddTransient(typeof(OfflineScenePageViewModel));

            services.AddTransient(typeof(Pages.GuideScenePage));
            services.AddTransient(typeof(GuideScenePageViewModel));

            services.AddTransient(typeof(Pages.AnimationPage));
            services.AddTransient(typeof(AnimationPageViewModel));
        }
    }
}
