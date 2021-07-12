using System;
using System.Collections.Specialized;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Prometheus.Models.Weathers;

namespace Prometheus.Services
{
    public interface IWeatherService
    {
        long ExecutionSeconds { get; }
        Models.Weathers.WeatherResponse Response { get; }
        Task<Models.Weathers.WeatherResponse> Get(int hour, int minute, int? nx, int? ny);
        void SetResponse(Models.Weathers.WeatherResponse response);
    }

    public class WeatherService : IWeatherService
    {
        private readonly string m_Address = string.Empty;
        private readonly string m_ServiceKey = string.Empty;

        private readonly ILogger m_Logger = null;
        private readonly IHttpClientFactory m_Factory = null;

        private readonly int m_NX = 60;
        private readonly int m_NY = 127;


        private long m_ExecutionSeconds = 0;
        public long ExecutionSeconds
        {
            get
            {
                return m_ExecutionSeconds;
            }
            private set
            {
                m_ExecutionSeconds = value;
            }
        }

        public WeatherResponse Response => m_Response;

        private Models.Weathers.WeatherResponse m_Response = null;

        public WeatherService(ILogger<WeatherService> logger, IHttpClientFactory factory, IConfiguration configuration)
        {
            m_Logger = logger;
            m_Factory = factory;

            var moons = configuration.GetSection("Weather");
            m_Address = moons.GetValue("Address", string.Empty);
            m_ServiceKey = moons.GetValue("ServiceKey", string.Empty);
            m_NX = moons.GetValue("NX", 60);
            m_NY = moons.GetValue("NY", 127);
        }

        public void SetResponse(Models.Weathers.WeatherResponse response)
        {
            if (response == null)
            {
                return;
            }
            Interlocked.Exchange(ref m_Response, response);

            m_ExecutionSeconds = DateTimeOffset.Now.ToUnixTimeSeconds();
        }

        public async Task<Models.Weathers.WeatherResponse> Get(int hour, int minute, int? nx, int? ny)
        {
            var current = DateTimeOffset.Now;

            var queries = HttpUtility.ParseQueryString(string.Empty);
            queries["serviceKey"] = m_ServiceKey;
            queries["pageNo"] = 1.ToString();
            queries["numOfRows"] = 50.ToString();
            queries["dataType"] = "JSON";
            queries["base_date"] = DateTime.Now.ToString("yyyyMMdd");
            queries["base_time"] = $"{hour.ToString("00")}{minute.ToString("00")}";
            queries["nx"] = nx.HasValue ? nx.ToString() : m_NX.ToString();
            queries["ny"] = ny.HasValue ? ny.ToString() : m_NY.ToString();


            var response = await this.Request($"{m_Address}", HttpMethod.Get, queries);

            try
            {
                return JsonConvert.DeserializeObject<Models.Weathers.WeatherResponse>(response);
            }
            catch (System.Exception e)
            {
                m_Logger.LogCritical($"WeatherService, Json Deserialize exception : {e}, Response : {response}");
            }

            return null;
        }

        protected async Task<string> Request(string route, HttpMethod method, NameValueCollection queries)
        {
            using (var client = m_Factory.CreateClient())
            using (var request = new HttpRequestMessage())
            {
                // SET the HttpMethod method 
                request.Method = method;

                var builder = new UriBuilder(route);
                if (queries?.Count > 0)
                {
                    builder.Query = queries.ToString();
                }

                // Consturct the full URI
                request.RequestUri = builder.Uri;

                try
                {
                    HttpResponseMessage response = await client.SendAsync(request);
                    if (response.IsSuccessStatusCode)
                    {
                        return await response.Content.ReadAsStringAsync();
                    }

                    m_Logger.LogCritical($"Weather Service, GET, {route}, StatusCode: {response.StatusCode}");
                }
                catch (System.Exception e)
                {
                    m_Logger.LogCritical($"Weather Service, GET, {route}, Exception : {e}");
                }
            }

            return null;
        }
    }
}