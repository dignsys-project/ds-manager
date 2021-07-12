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
    public interface ISceneResourceService
    {
        Task<List<Models.Databases.SceneResource>> GetSceneResourcesByResourceId(Models.Databases.Resource resource);
    }

    public class SceneResourceService : ISceneResourceService
    {
        private readonly ILogger m_Logger = null;
        private readonly Databases.Repositories.ISceneResourceRepository m_SceneResources = null;
        public SceneResourceService(ILogger<SceneResourceService> logger, Databases.Repositories.ISceneResourceRepository sceneResources)
        {
            m_Logger = logger;
            m_SceneResources = sceneResources;
        }

        public async Task<List<Models.Databases.SceneResource>> GetSceneResourcesByResourceId(Models.Databases.Resource resource)
        {
            return await m_SceneResources.Table
                .Include(x => x.Scene)
                    .ThenInclude(x => x.Resource)
                        .ThenInclude(x => x.PreviewResource)
                .Where(x => x.ResourceId == resource.Id).ToListAsync();
        }


    }
}