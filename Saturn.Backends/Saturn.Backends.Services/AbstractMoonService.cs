using System;
using System.Net.Http;
using System.Threading.Tasks;
using System.Collections.Specialized;
using Microsoft.Extensions.Logging;
using System.Text;
using Newtonsoft.Json;
using Google.Protobuf;
using Saturn.Backends.Commons.Extensions;

namespace Saturn.Backends.Services
{
    public abstract class AbstractMoonService
    {
        protected readonly ILogger m_Logger = null;
        private readonly IHttpClientFactory m_Factory = null;

        protected virtual string Address { get; }

        public AbstractMoonService(ILogger logger, IHttpClientFactory factory)
        {
            m_Logger = logger;
            m_Factory = factory;
        }

        protected async Task<byte[]> Get(string route, NameValueCollection queries = null)
        {
            return await Request(route, HttpMethod.Get, queries, null);
        }

        protected async Task<string> GetStringAsync(string route, NameValueCollection queries = null)
        {
            return await RequestStringAsync(route, HttpMethod.Get, queries);
        }



        protected async Task<string> RequestStringAsync(string route, HttpMethod method, NameValueCollection queries)
        {
            using (var client = m_Factory.CreateClient())
            using (var request = new HttpRequestMessage())
            {
                // set time span 


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

                    m_Logger.LogCritical($"MoonService, GET, {route}, StatusCode: {response.StatusCode}");
                }
                catch (System.Exception e)
                {
                    m_Logger.LogCritical($"MoonService, GET, {route}, Exception : {e}");
                }
            }

            return default(string);
        }

        protected async Task<byte[]> Request(string route, HttpMethod method, NameValueCollection queries, IMessage message)
        {
            using (var client = m_Factory.CreateClient())
            using (var request = new HttpRequestMessage())
            {
                // set time span 

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
                    if (null != message)
                    {
                        // Add The Sereialized JOSN object to your request
                        request.Content = new StringContent(message.ToNetwork(), Encoding.UTF8, "application/x-protobuf");
                    }
                }
                catch (System.Exception e)
                {
                    m_Logger.LogCritical($"MoonService, Content Serialize Failed, Exception : {e}");

                    return null;
                }

                try
                {
                    HttpResponseMessage response = await client.SendAsync(request);
                    if (response.IsSuccessStatusCode)
                    {
                        return Convert.FromBase64String(JsonConvert.DeserializeObject(await response.Content.ReadAsStringAsync()) as string);
                    }

                    m_Logger.LogCritical($"MoonService, GET, {route}, StatusCode: {response.StatusCode}");
                }
                catch (System.Exception e)
                {
                    m_Logger.LogCritical($"MoonService, GET, {route}, Exception : {e}");
                }
            }

            return null;
        }
    }
}
