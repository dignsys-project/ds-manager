using System;
using System.Reflection;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Saturn.Backends.Commons;

namespace Prometheus.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AdminController : AbstractBaseController
    {
        private readonly ILogger m_Logger = null;
        private readonly Services.Universe.IEnceladusService m_EnceladusService = null;

        public AdminController(ILogger<AdminController> logger, Services.Universe.IEnceladusService enceladusService)
        {
            m_Logger = logger;

            m_EnceladusService = enceladusService;
        }

    }
}
