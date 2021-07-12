using System.IO;
using System.Net.Http;
using System.ServiceModel.Syndication;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Serialization;
using Microsoft.Extensions.Logging;
using Saturn.Backends.Commons.Models;

namespace Saturn.Backends.Services
{

    public interface IRssService
    {
        Task<SyndicationFeed> GetRssFeedAsync(string rssAddress);
    }

    public class RssService : AbstractMoonService, IRssService
    {
        private string m_Address;

        protected override string Address => m_Address;


        public RssService(ILogger<RssService> logger, IHttpClientFactory factory) : base(logger, factory)
        {
        }

        public void SetAddress(string address)
        {
            m_Address = address;
        }

        public async Task<SyndicationFeed> GetRssFeedAsync(string rssAddress)
        {
            using (var reader = XmlReader.Create(rssAddress))
            {
                try
                {
                    return await Task.Run(() => SyndicationFeed.Load(reader));
                }
                catch (System.Exception e)
                {
                    m_Logger.LogCritical($"RssService, GetRssFeedAsync, SyndicationFeed.Load failed, Exception : {e}");
                }
            }

            return default(SyndicationFeed);
        }

    }
}