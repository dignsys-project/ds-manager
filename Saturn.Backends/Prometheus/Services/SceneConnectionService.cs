using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Saturn.Backends.Commons;

namespace Prometheus.Services
{
    public interface ISceneConnectionService
    {
        Task<List<Models.Databases.SceneConnection>> GetSceneConnectionByScene(Models.Databases.Scene scene);
    }

    public class SceneConnectionService : ISceneConnectionService
    {
        private readonly ILogger m_Logger = null;
        private readonly Databases.Repositories.ISceneConnectionRepository m_SceneConnections = null;
        public SceneConnectionService(ILogger<SceneConnectionService> logger, Databases.Repositories.ISceneRepository scenes, Databases.Repositories.ISceneConnectionRepository sceneConnections)
        {
            m_Logger = logger;
            m_SceneConnections = sceneConnections;
        }

        public async Task<List<Models.Databases.SceneConnection>> GetSceneConnectionByScene(Models.Databases.Scene scene)
        {
            return await m_SceneConnections.Table
                .Include(x => x.Scene)
                    .ThenInclude(x => x.Resource)
                        .ThenInclude(x => x.PreviewResource)
                .Where(x => x.ConnectedSceneId == scene.Id).ToListAsync();
        }


    }
}