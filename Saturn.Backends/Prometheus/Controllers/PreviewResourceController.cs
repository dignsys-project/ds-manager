using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.Logging;
using Prometheus.Models.Databases.Extensions;
using Saturn.Backends.Commons;
using SixLabors.ImageSharp;
using SixLabors.ImageSharp.Formats;
using SixLabors.ImageSharp.PixelFormats;
using SixLabors.ImageSharp.Processing;

namespace Prometheus.Controllers
{
    [Authorize]
    [Route("[controller]")]
    [ApiController]
    public class PreviewResourceController : AbstractBaseController
    {
        private readonly ILogger m_Logger = null;
        private readonly Services.IResourceService m_Resource = null;

        public PreviewResourceController(ILogger<PreviewResourceController> logger, Services.IResourceService resources)
        {
            m_Logger = logger;
            m_Resource = resources;
        }

        [HttpPost, DisableRequestSizeLimit]
        public async Task<IActionResult> CreatePreviewResource()
        {
            var file = Request.Form?.Files.FirstOrDefault();
            if (null == file)
            {
                return BadRequest();
            }

            var response = new Saturn.Backends.Protocols.Enceladus.PostPreviewResourceResponse();

            var previewResource = await m_Resource.MakePreviewResourceByFormFile(file);
            if (null == previewResource)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.PreviewResource = previewResource.ToMessage();
            response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }
    }
}