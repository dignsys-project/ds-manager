using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Documents;
using Microsoft.Extensions.Logging;
using Saturn.Backends.Protocols.Common;

namespace Saturn.Viewer.Services
{
    public class SceneService
    {
        public long StartSceneId { get; private set; }

        public long CurrentSceneId { get; set; }

        public long NextSceneId { get; set; }

        public bool StartSceneChanged { get; set; }

        public bool IsEmergecyScene { get; set; }

        private static readonly log4net.ILog m_Logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);


        private List<Models.SceneBase> m_SceneBases = new List<Models.SceneBase>();
        private List<Models.Scene> m_Scenes = new List<Models.Scene>();

        private readonly ReaderWriterLockSlim m_RWLock = null;

        public SceneService()
        {
            m_RWLock = new ReaderWriterLockSlim();

            m_Logger.Info("Create Scene Service");
        }

        private Dictionary<long, Saturn.Backends.Protocols.Common.SceneBlueprint> m_SceneBlueprints = new Dictionary<long, Saturn.Backends.Protocols.Common.SceneBlueprint>();

        /// <summary>
        /// 디바이스가 사용할 수 있는 모든 SceneBases
        /// </summary>
        /// <returns></returns>
        public List<Models.SceneBase> GetSceneBases()
        {
            List<Models.SceneBase> scenes = new List<Models.SceneBase>();

            m_RWLock.EnterReadLock();

            scenes.AddRange(m_SceneBases);

            m_RWLock.ExitReadLock();

            return scenes;
        }

        /// <summary>
        /// 디바이스가 사용할 수 있는 모든 SceneBases
        /// </summary>
        /// <param name="scenes">SceneBases that can be use </param>
        /// <param name="defaultScene"></param>
        public void SetSceneBases(List<Models.SceneBase> scenes, Models.SceneBase defaultScene)
        {
            m_RWLock.EnterWriteLock();

            m_SceneBases = scenes;

            // check changed default scene id
            if (StartSceneId > 0 && StartSceneId != defaultScene.SceneId)
            {
                StartSceneChanged = true;
            }
            StartSceneId = defaultScene.SceneId;

            m_RWLock.ExitWriteLock();
        }

        public void RemoveSceneBases()
        {
            m_RWLock.EnterWriteLock();
            m_SceneBases.Clear();

            StartSceneId = 0;
            CurrentSceneId = 0;
            NextSceneId = 0;
            StartSceneChanged = false;
            m_RWLock.ExitWriteLock();
        }

        public List<Models.Scene> GetScenes()
        {
            List<Models.Scene> scenes = null;
            m_RWLock.EnterReadLock();

            scenes = new List<Models.Scene>(m_Scenes);

            m_RWLock.ExitReadLock();

            return scenes;
        }

        public void SetScenes(List<Models.Scene> scenes)
        {
            m_RWLock.EnterWriteLock();

            m_Scenes = scenes;

            m_RWLock.ExitWriteLock();
        }



        public async Task<bool> LoadBlueprints()
        {
            var scenes = GetScenes();
            foreach (var scene in scenes)
            {
                var sceneBase = scene.Base;

                if (sceneBase.Resource == null)
                {
                    m_Logger.Error($"Scene Resource can not found. Scene Name : { sceneBase.Name}, Scene Id : {sceneBase.SceneId}");

                    continue;
                }

                var content = await GetFileAsync(sceneBase.Resource);
                try
                {
                    var message = Saturn.Backends.Protocols.Common.SceneBlueprint.Parser.ParseJson(content);
                    if (!m_SceneBlueprints.ContainsKey(sceneBase.SceneId))
                    {
                        m_SceneBlueprints.Add(sceneBase.SceneId, message);

                    }
                    else
                    {
                        m_SceneBlueprints[sceneBase.SceneId] = message;
                    }

                }
                catch (System.Exception ex)
                {
                    m_Logger.Error($"Protobuf Parse failed, Exception : {ex}");

                    return false;
                }
            }


            return true;
        }

        public async Task<string> GetFileAsync(Models.Resource resource)
        {
            using (var sr = new StreamReader(System.IO.Path.Combine(DocumentService.Instance.GetDocumentsFolder(), resource.Location)))
            {
                var content = await sr.ReadToEndAsync();

                return content;
            }
        }

        public Saturn.Backends.Protocols.Common.SceneBlueprint FindBlueprint(long sceneId)
        {
            if (m_SceneBlueprints.TryGetValue(sceneId, out var value))
            {
                return value;
            }

            return null;
        }
    }
}
