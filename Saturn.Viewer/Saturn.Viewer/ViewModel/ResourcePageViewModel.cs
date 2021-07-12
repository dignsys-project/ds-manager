using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Saturn.Viewer.Extensions;
using Saturn.Viewer.Services;
using System.Windows;
using Saturn.Viewer.Models;
using System.ComponentModel;
using System.Windows.Media.Imaging;
using System.Windows.Input;
using System.Windows.Threading;

namespace Saturn.Viewer.ViewModel
{
    public class ResourcePageViewModel : BaseViewModel
    {
        private readonly ResourceService m_ResourceService = null;
        private readonly SceneService m_SceneService = null;
        private readonly ScheduleService m_ScheduleService = null;
        private readonly ConnectionService m_ConnectionService = null;
        private readonly ConnectorService m_ConnectorService = null;

        private readonly DispatcherTimer m_Timer = null;

        private BackgroundWorker m_Worker = null;

        public string SceneName { get; set; }
        public Visibility IsShowScene { get; set; } = Visibility.Hidden;
        public Visibility IsNoContent { get; set; } = Visibility.Hidden;

        public Visibility IsUpdated { get; set; } = Visibility.Hidden;
        public Visibility IsParseSceneVisibility { get; set; } = Visibility.Hidden;
        public Visibility IsSceneBaseVisibility { get; set; } = Visibility.Hidden;

        public bool IsCompleted { get; set; } = true;

        public int SceneBasesCount { get; set; } = 0;


        public double DownloadPercent { get; set; } = 0.0;
        public string DownloadTotalSize { get; set; }

        public long DownloadSpeed { get; set; } = 0;

        public string CurrentDownloadSpeed { get; set; }

        public string RemainSeconds { get; set; }

        private long m_CurrentDownloadBytes = 0;

        private long m_PreviousDownloadBytes = 0;

        private long m_TotalSize = 0;


        public ResourcePageViewModel(ResourceService resourceService, SceneService sceneService, ScheduleService scheduleService, ConnectionService connectionService, ConnectorService connectorService)
        {
            m_ConnectionService = connectionService;
            m_ConnectorService = connectorService;

            m_SceneService = sceneService;
            m_ScheduleService = scheduleService;
            m_ResourceService = resourceService;

            m_Timer = new DispatcherTimer();
            m_Timer.Interval = TimeSpan.FromSeconds(1);
            m_Timer.Tick += OnTickParseSpeedCalculate;
        }

        public async Task OnLoad()
        {
            var document = DocumentService.Instance.Document;
            if (!m_ConnectionService.IsConnected && document.IsPossibleDisConnectedMode())
            {
                m_ConnectorService.LoadSceneFromConnector(document.Connector);

                m_SceneService.SetScenes(document.Scenes);

                await m_SceneService.LoadBlueprints();

                m_SceneService.NextSceneId = m_SceneService.StartSceneId;

                PageService.Instance.MovePage(Models.ApplicationPage.Scene);

                return;
            }

            m_Worker = new BackgroundWorker();
            m_Worker.DoWork += DoWorker;
            m_Worker.ProgressChanged += (sender, e) =>
            {
                IsUpdated = m_ResourceService.HasUpdateResources ? Visibility.Visible : Visibility.Hidden;
            };

            m_Worker.RunWorkerAsync();

            await Task.Delay(1);
        }

        public void Unload()
        {
            if (m_Timer != null)
            {
                try
                {
                    m_Timer.Stop();
                }
                catch (System.Exception)
                {

                }
            }
        }


        private void UpdateSceneContent(bool bShowScene)
        {
            IsShowScene = bShowScene ? Visibility.Visible : Visibility.Hidden;
            IsNoContent = bShowScene ? Visibility.Hidden : Visibility.Visible;

            OnPropertyChanged("IsShowScene");
            OnPropertyChanged("IsNoContent");
        }

        private async void DoWorker(object sender, DoWorkEventArgs e)
        {
            // Update Resource_
            var document = DocumentService.Instance.Document;
            var scene = document.Connector.Scene;
            if (null != scene)
            {
                await m_ResourceService.DoUpdate(DownloadProcess, OnParseSceneCompleted);

                SceneName = scene.Base.Name;

                UpdateSceneContent(true);

                m_SceneService.NextSceneId = m_SceneService.StartSceneId;

                PageService.Instance.MovePage(Models.ApplicationPage.Scene);
            }
            else
            {
                UpdateSceneContent(false);
            }


            IsCompleted = true;
            IsUpdated = Visibility.Hidden;

        }



        private void OnParseSceneCompleted(bool bCompleted, int sceneBaseCount)
        {
            if (bCompleted)
            {
                IsSceneBaseVisibility = Visibility.Visible;
                IsParseSceneVisibility = Visibility.Hidden;
                SceneBasesCount = sceneBaseCount;


                m_Timer.Start();
            }
            else
            {
                IsParseSceneVisibility = Visibility.Visible;



            }
        }

        private void OnTickParseSpeedCalculate(object sender, EventArgs e)
        {
            if (0 < m_CurrentDownloadBytes)
            {
                var previousDownloadBytes = m_PreviousDownloadBytes;

                var currentDownloadBytes = m_CurrentDownloadBytes;

                m_PreviousDownloadBytes = currentDownloadBytes;

                var a = currentDownloadBytes - previousDownloadBytes;

                CurrentDownloadSpeed = $"{FormatBytes(a)}/s";

                if(a > 0)
                {
                    RemainSeconds = $"{(m_TotalSize - currentDownloadBytes) / a} 초 남음";
                }
                

            }
        }

        private void DownloadProcess(long filesCount, int completedFilesCount, int currentFilePercent, long totalSize, long currentSize, bool bCompleted)
        {
            IsUpdated = !bCompleted ? Visibility.Visible : Visibility.Hidden;

            var document = DocumentService.Instance.Document;
            var scene = document.Connector.Scene;
            if (null != scene)
            {
                SceneName = scene.Base.Name;

                UpdateSceneContent(true);
            }
            else
            {
                UpdateSceneContent(false);
            }

            if (m_TotalSize != totalSize)
            {
                DownloadTotalSize = FormatBytes(totalSize);
                m_TotalSize = totalSize;
            }

            m_CurrentDownloadBytes = currentSize;

            DownloadPercent = ((double)(currentSize) / (double)(totalSize)) * (double)100;

        }


        private string FormatBytes(long bytes)
        {
            string[] Suffix = { "B", "KB", "MB", "GB", "TB" };
            int i;
            double dblSByte = bytes;
            for (i = 0; i < Suffix.Length && bytes >= 1024; i++, bytes /= 1024)
            {
                dblSByte = bytes / 1024.0;
            }

            return String.Format("{0:0.##} {1}", dblSByte, Suffix[i]);
        }
    }
}
