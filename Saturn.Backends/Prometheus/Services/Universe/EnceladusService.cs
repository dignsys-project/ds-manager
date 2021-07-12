using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace Prometheus.Services.Universe
{
    public interface IEnceladusService
    {
        Task<byte[]> GetVersion();
    }

    public class EnceladusService : Saturn.Backends.Services.AbstractMoonService, IEnceladusService
    {
        private readonly string m_Address = null;
        public EnceladusService(ILogger<EnceladusService> logger, IHttpClientFactory factory, IConfiguration configuration)
        : base(logger, factory)
        {
            var moons = configuration.GetSection("Moons");
            m_Address = moons.GetValue("Enceladus", string.Empty);
        }

        protected override string Address => m_Address;

        public async Task<byte[]> GetVersion()
        {
            var queries = HttpUtility.ParseQueryString(string.Empty);
            queries["pretty"] = false.ToString();

            return await this.Request($"{m_Address}/anonymous", HttpMethod.Get, queries, null);
        }
    }
}