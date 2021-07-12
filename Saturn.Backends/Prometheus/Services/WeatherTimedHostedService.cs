using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Prometheus.Models.Weathers.Extensions;

namespace Prometheus.Services
{
    public class WeatherTimedHostedService : IHostedService, IDisposable
    {
        private int m_ExecutionHour = 0;

        private readonly ILogger m_Logger = null;
        private readonly IWeatherService m_WeatherService = null;
        private Timer m_Timer = null;

        private readonly ReaderWriterLockSlim m_RWLock;


        public WeatherTimedHostedService(ILogger<WeatherTimedHostedService> logger, IWeatherService weatherService)
        {
            m_RWLock = new ReaderWriterLockSlim();

            m_Logger = logger;
            m_WeatherService = weatherService;
        }


        public async Task StartAsync(CancellationToken cancellationToken)
        {
            m_Logger.LogInformation("Weather Timed Hosted Service Running.");

            m_Logger.LogInformation($"Current Time : {DateTime.Now}, UTC Time : {DateTime.UtcNow}");

            await RequestWeather();

            m_Timer = new Timer(DoWork, null, TimeSpan.Zero, TimeSpan.FromMinutes(5)); // for test 
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            m_Logger.LogInformation("Weather Timeed Hosted Service is Stopping.");

            m_Timer?.Change(Timeout.Infinite, 0);

            return Task.CompletedTask;
        }

        private async Task RequestWeather()
        {
            // 기상청 API에 의하면 매시 45분 이후로 데이터를 요청하라고 함.


            var current = DateTime.Now;

            var requestHour = current.Hour;

            var baseMinutes = 46;
            if (current.Minute < baseMinutes)
            {
                var requestTime = current.AddHours(-1);

                requestHour = requestTime.Hour;
            }

            m_ExecutionHour = requestHour;

            m_Logger.LogInformation($"Current Time : {DateTime.Now}, UTC Time : {DateTime.UtcNow}");

            var response = await m_WeatherService.Get(requestHour, baseMinutes, null, null);
            if (response.IsSuccess())
            {
                m_WeatherService.SetResponse(response);
            }
            else
            {
                if (response != null && response.Response != null && response.Response.Header != null)
                {
                    m_Logger.LogCritical($"Weather Service is Failed. Code : {response?.Response?.Header?.ResultCode}, Message : {response.Response?.Header?.ResultMsg}");
                }

            }
        }

        public void Dispose()
        {
            m_Timer?.Dispose();
        }

        private async void DoWork(object state)
        {
            var response = m_WeatherService.Response;
            if (!response.IsSuccess())
            {
                await RequestWeather();
            }
            else
            {
                var current = DateTime.Now;
                if (current.Hour != m_ExecutionHour && current.Minute > 45)
                {
                    await RequestWeather();
                }
            }
        }
    }
}