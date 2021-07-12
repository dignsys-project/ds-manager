using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;
using Saturn.Viewer.Models;
using System.IO;
using System.Security.Cryptography;
using System.Net;
using System.Data.SqlTypes;
using System.Web.ModelBinding;
using Saturn.Backends.Protocols.Common;
using Saturn.Viewer.Extensions;
using System.Windows.Documents;
using Saturn.Viewer.Models.Extensions;

namespace Saturn.Viewer.Services
{
    public class ResourceService
    {
        private bool m_bProcess = false;


        private readonly SceneService m_SceneService = null;

        private readonly IPrometheusService m_PrometheusService = null;

        private readonly string ResourceFolder = string.Empty;
        private readonly string PrometheusAddress = string.Empty;


        private bool m_bWillbeUpdateResources = false;
        public bool HasUpdateResources => m_bWillbeUpdateResources;

        private long UpdateStartSeconds = 0;

        public delegate void DownloadProcess(long filesCount, int currentFilesIndex, int currentFilePercent, long totolSize, long currentSize, bool bCompleted);
        public delegate void OnParseSceneConnected(bool bCompeleted, int sceneCount);

        private static readonly log4net.ILog m_Logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);


        public ResourceService(SceneService sceneService, PrometheusService prometheusService)
        {
            m_SceneService = sceneService;
            m_PrometheusService = prometheusService;

            ResourceFolder = DocumentService.Instance.GetDocumentsFolder();

            var document = DocumentService.Instance.Document;
            PrometheusAddress = document.PrometheusAddress;

        }

        public async Task<bool> DoUpdate(DownloadProcess downloadProcess, OnParseSceneConnected onParseSceneConnected = null)
        {
            bool bProcess = m_bProcess;
            if (bProcess)
            {
                return false;
            }

            m_bProcess = true;

            // Download all about include scenes 
            if (onParseSceneConnected != null)
            {
                onParseSceneConnected(false, 0);
            }
            var resourcesContainer = await ResourcesThatWillbeDownload();
            if (onParseSceneConnected != null)
            {
                var scenesCount = 0;
                var scenes = m_SceneService.GetScenes();
                if (null != scenes)
                {
                    scenesCount = scenes.Count;
                }
                onParseSceneConnected(true, scenesCount);
            }

            var downloadResources = resourcesContainer.downloadResources;

            m_bWillbeUpdateResources = downloadResources.Count > 0;

            long downloadedSize = 0;

            if (m_bWillbeUpdateResources)
            {
                UpdateStartSeconds = DateTimeOffset.UtcNow.Second;
                var size = downloadResources.Sum(x => x.Size);

                int filesCount = downloadResources.Count;

                int current = 0;

                long receiveSize = 0;



                long totalSize = downloadResources.Sum(x => x.Size);
                foreach (var resource in downloadResources)
                {
                    // Download Process 
                    using (WebClient downloader = new WebClient())
                    {
                        downloader.DownloadProgressChanged += (object sender, DownloadProgressChangedEventArgs e) =>
                        {
                            receiveSize = e.BytesReceived;

                            if (downloadProcess != null)
                            {
                                downloadProcess.Invoke(filesCount, current, e.ProgressPercentage, totalSize, downloadedSize + receiveSize, false);
                            }
                        };

                        var builder = new UriBuilder($"{PrometheusAddress}/{resource.Location}");

                        var resourceFolder = System.IO.Path.Combine(DocumentService.Instance.GetDocumentsFolder(), "Resources");
                        if (!Directory.Exists(resourceFolder))
                        {
                            Directory.CreateDirectory(resourceFolder);
                        }

                        var destFolder = Path.Combine(resourceFolder, resource.FolderName);
                        if (!Directory.Exists(destFolder))
                        {
                            Directory.CreateDirectory(destFolder);
                        }

                        var fileName = Path.Combine(DocumentService.Instance.GetDocumentsFolder(), resource.Location);

                        try
                        {
                            await downloader.DownloadFileTaskAsync(builder.Uri, fileName);
                        }
                        catch (System.Exception ex)
                        {
                            m_Logger.Error($"ResourceService, DownLoadFileTaskAsync Exception: {ex}");

                            continue;
                        }

                        downloadedSize += receiveSize;
                    }
                    current++;
                }

                if (null != downloadProcess)
                {
                    downloadProcess.Invoke(filesCount, current, 100, totalSize, downloadedSize, true);
                }
            }

            // save all scenes 
            var document = DocumentService.Instance.Document;
            document.Scenes = m_SceneService.GetScenes();
            document.SceneBases = m_SceneService.GetSceneBases();
            document.Resources = resourcesContainer.resources;
            document.IsDownloadCompleted = true;
            await DocumentService.Instance.SaveAsync();

            await m_SceneService.LoadBlueprints();



            m_bProcess = false;

            return downloadedSize > 0;
        }

        private void Downloader_DownloadProgressChanged(object sender, DownloadProgressChangedEventArgs e)
        {
            m_Logger.Debug($"Receive : {e.TotalBytesToReceive}, Percent : {e.ProgressPercentage}");
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns>
        /// resources   : 다운 받을 최신 리소스들
        /// </returns>
        private async Task<(List<Models.Resource> resources, List<Models.Resource> downloadResources)> ResourcesThatWillbeDownload()
        {
            List<Models.Scene> scenes = new List<Models.Scene>();

            var sceneBases = m_SceneService.GetSceneBases();
            foreach (var sceneBase in sceneBases)
            {
                var response = await m_PrometheusService.GetSceneBySceneIdAsync(sceneBase.SceneId);
                if (null == response)
                {
                    m_Logger.Error($"ResourceService, ResourcesThatWillbeDownload Failed, SceneId : {sceneBase.SceneId}");

                    continue;
                }

                if (!response.Common.IsSuccess())
                {
                    m_Logger.Error($"ResourceService, ResourcesThatWillbeDownload Common Failed, SceneId : {response.Common.Status}");

                    continue;
                }

                var scene = response.Scene.ToElement();
                if (null == scene)
                {
                    continue;
                }

                if (scene.ConnectedScenes.Count > 0)
                {
                    var connectedScenes = await GetScenesConnected(scenes, scene);
                    if (null != connectedScenes)
                    {
                        scenes.AddRange(connectedScenes.Where(connectedScene => -1 == scenes.FindIndex(x => x.Base.SceneId == connectedScene.Base.SceneId)));
                    }
                }

                if (-1 == scenes.FindIndex(x => x.Base.SceneId == scene.Base.SceneId))
                {
                    scenes.Add(scene);
                }
            }

            m_SceneService.SetScenes(scenes);



            Dictionary<long, Models.Resource> container = new Dictionary<long, Models.Resource>();

            var document = DocumentService.Instance.Document;
            foreach (var scene in scenes)
            {
                foreach (var resource in scene.Resources)
                {
                    if (!container.ContainsKey(resource.ResourceId))
                    {
                        container.Add(resource.ResourceId, resource);
                    }
                }
            }

            var resources = document.Resources;

            List<Models.Resource> downloadResources = new List<Models.Resource>();
            foreach (var resource in container.Values)
            {
                var fullPath = System.IO.Path.Combine(ResourceFolder, resource.Location);
                var fileInfo = new System.IO.FileInfo(fullPath);
                if (!fileInfo.Exists)
                {
                    downloadResources.Add(resource);

                    continue;
                }

                if (fileInfo.Length != resource.Size)
                {
                    //resources.Add(resource);

                    continue;
                }

                if (resources == null || resources.Count <= 0)
                {
                    downloadResources.Add(resource);

                    continue;
                }

                var existsResource = resources.Find(x => x.ResourceId == resource.ResourceId);
                if (existsResource == null)
                {
                    downloadResources.Add(resource);

                    continue;
                }

                if(existsResource.UpdatedSeconds != resource.UpdatedSeconds)
                {
                    downloadResources.Add(resource);

                    continue;
                }
            }

            return (resources: container.Values.ToList(), downloadResources: downloadResources);
        }

        private async Task<List<Models.Scene>> GetScenesConnected(List<Models.Scene> scenes, Models.Scene scene)
        {
            if (-1 == scenes.FindIndex(x => x.Base.SceneId == scene.Base.SceneId))
            {
                scenes.Add(scene);
            }

            // 이미 해당 씬이 있다면 패스한다.
            bool bAllInclude = true;

            var connectedScenes = new List<Models.SceneBase>();
            foreach (var connectedScene in scene.ConnectedScenes)
            {
                var index = scenes.FindIndex(x => x.Base.SceneId == connectedScene.SceneId);
                if (-1 == index)
                {
                    connectedScenes.Add(connectedScene);

                    if (bAllInclude)
                    {
                        bAllInclude = false;
                    }

                }

            }


            var simpleSceneBases = new Dictionary<long, Models.SceneBase>();

            connectedScenes.ForEach(s =>
            {
                if (!simpleSceneBases.ContainsKey(s.SceneId))
                {
                    simpleSceneBases.Add(s.SceneId, s);
                }
            });


            if (bAllInclude)
            {
                return null;
            }


            foreach (var sceneBase in simpleSceneBases.Values)
            {
                var response = await m_PrometheusService.GetSceneBySceneIdAsync(sceneBase.SceneId);
                if (null == response)
                {
                    m_Logger.Error($"ResourceService, GetSceneBySceneIdAsync Failed, SceneId : {sceneBase.SceneId}");

                    continue;
                }

                if (!response.Common.IsSuccess())
                {
                    m_Logger.Error($"ResourceService, GetSceneBySceneIdAsync Common Failed, SceneId : {response.Common.Status}");

                    continue;
                }

                var model = new Models.Scene();
                model.FromMessage(response.Scene);

                if (-1 == scenes.FindIndex(x => x.Base.SceneId == model.Base.SceneId))
                {
                    scenes.Add(model);
                }

                if (null == await GetScenesConnected(scenes, model))
                {
                    continue;
                }
            }

            return scenes;
        }
    }
}
