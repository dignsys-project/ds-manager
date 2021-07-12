using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Prometheus.Models.Weathers.Extensions;

namespace Prometheus.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherController : Saturn.Backends.Commons.AbstractBaseController
    {
        private readonly ILogger<WeatherController> m_Logger = null;
        private readonly Services.IWeatherService m_WeatherService = null;

        public WeatherController(ILogger<WeatherController> logger, Services.IWeatherService weatherService)
        {
            m_Logger = logger;
            m_WeatherService = weatherService;
        }


        [HttpGet]
        public IActionResult Get(bool pretty = false)
        {
            var response = new Saturn.Backends.Protocols.Prometheus.GetWeatherResponse();

            var weatherResponse = m_WeatherService.Response;
            if (null == weatherResponse)
            {
                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            try
            {
                if (weatherResponse.IsSuccess())
                {
                    response.Weather = weatherResponse.ToMessage();
                    response.DateTimeSeconds = m_WeatherService.ExecutionSeconds;
                    response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Success);
                    return !pretty ? OkWithMessage(response) : Ok(response.ToString());
                }
                else
                {
                    response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.FailedEnceladus);
                    return OkWithMessage(response);
                }
            }
            catch (System.Exception e)
            {
                m_Logger.LogCritical($"Weather, ToMessage Exception : {e}");

                response.Common = MakeCommon(Saturn.Backends.Protocols.Common.COMMON_STATUS_KIND.Failed);
                return OkWithMessage(response);
            }
        }

    }
}
