using Google.Protobuf;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Specialized;
using System.Globalization;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace Saturn.Viewer.Services
{
    public interface IPrometheusService
    {
        Task<Saturn.Backends.Protocols.Prometheus.PostConnectorResponse> PostConnector(string name, string deviceId);

        Task<Saturn.Backends.Protocols.Prometheus.PostConnectorByIdResponse> PostConnectorScreenCapture(long connectorId, string deviceId, string directoryName, string fileName);

        Task<Saturn.Backends.Protocols.Common.GetVersionResponse> GetVersionAsync();

        Task<Saturn.Backends.Protocols.Prometheus.GetSceneByIdResponse> GetSceneBySceneIdAsync(long sceneId);

        Task<Saturn.Backends.Protocols.Prometheus.GetWeatherResponse> GetWeatherAsync();
    }

    public class PrometheusService : IPrometheusService
    {

        private static readonly log4net.ILog m_Logger = log4net.LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        public PrometheusService()
        {

        }

        public async Task<Saturn.Backends.Protocols.Prometheus.PostConnectorResponse> PostConnector(string name, string deviceId)
        {
            var request = new Saturn.Backends.Protocols.Prometheus.PostConnectorRequest();
            request.Name = name;
            request.DeviceId = deviceId;

            return await PostAsync<Saturn.Backends.Protocols.Prometheus.PostConnectorResponse>("connector", null, request);
        }

        public async Task<Saturn.Backends.Protocols.Prometheus.GetConnectorResponse> GetConnector(long connectorId)
        {
            return await GetAsync<Saturn.Backends.Protocols.Prometheus.GetConnectorResponse>($"connector/{connectorId}", null);
        }

        public async Task<Saturn.Backends.Protocols.Prometheus.GetConnectorResponse> GetConnectorbyDeviceId(string deviceId)
        {
            var queries = HttpUtility.ParseQueryString(string.Empty);
            queries["device"] = deviceId;

            return await GetAsync<Saturn.Backends.Protocols.Prometheus.GetConnectorResponse>($"connector/0", queries);
        }


        public async Task<Saturn.Backends.Protocols.Common.GetVersionResponse> GetVersionAsync()
        {
            var queries = HttpUtility.ParseQueryString(string.Empty);
            queries["pretty"] = false.ToString();

            return await GetAsync<Saturn.Backends.Protocols.Common.GetVersionResponse>("anonymous", queries);
        }

        public async Task<Saturn.Backends.Protocols.Prometheus.GetSceneByIdResponse> GetSceneBySceneIdAsync(long sceneId)
        {
            return await GetAsync<Saturn.Backends.Protocols.Prometheus.GetSceneByIdResponse>($"scene/{sceneId}", null);
        }

        public async Task<Saturn.Backends.Protocols.Prometheus.GetWeatherResponse> GetWeatherAsync()
        {
            return await GetAsync<Saturn.Backends.Protocols.Prometheus.GetWeatherResponse>($"weather", null);
        }

        public async Task<Saturn.Backends.Protocols.Prometheus.PostConnectorByIdResponse> PostConnectorScreenCapture(long connectorId, string deviceId, string directoryName, string fileName)
        {
            Google.Protobuf.MessageParser<Saturn.Backends.Protocols.Prometheus.PostConnectorByIdResponse> parser = new Google.Protobuf.MessageParser<Saturn.Backends.Protocols.Prometheus.PostConnectorByIdResponse>(() => new Saturn.Backends.Protocols.Prometheus.PostConnectorByIdResponse());

            var queries = HttpUtility.ParseQueryString(string.Empty);
            queries["deviceId"] = deviceId;

            var contents = await PostFileStreamAsync($"connector/{connectorId}", directoryName, fileName, queries);
            if (null == contents)
            {
                return default;
            }

            try
            {
                return parser.ParseFrom(contents);
            }
            catch (System.Exception ex)
            {
                m_Logger.Error($"PrometheusService, Protobuf Parse Failed, Exception : {ex}");
            }

            return default;
        }


        protected async Task<ResponseMessageType> PostAsync<ResponseMessageType>(string route, NameValueCollection queries, Google.Protobuf.IMessage message) where ResponseMessageType : Google.Protobuf.IMessage<ResponseMessageType>, new()
        {
            Google.Protobuf.MessageParser<ResponseMessageType> parser = new Google.Protobuf.MessageParser<ResponseMessageType>(() => new ResponseMessageType());

            var contents = await RequestAsync(route, HttpMethod.Post, queries, message);
            if (null == contents)
            {
                return default;
            }

            try
            {
                return parser.ParseFrom(contents);
            }
            catch (System.Exception /*ex*/)
            {

            }

            return default;
        }


        protected async Task<ResponseMessageType> GetAsync<ResponseMessageType>(string route, NameValueCollection queries) where ResponseMessageType : Google.Protobuf.IMessage<ResponseMessageType>, new()
        {
            Google.Protobuf.MessageParser<ResponseMessageType> parser = new Google.Protobuf.MessageParser<ResponseMessageType>(() => new ResponseMessageType());

            var contents = await RequestAsync(route, HttpMethod.Get, queries, null);
            if (null == contents)
            {
                m_Logger.Error("PrometheusService, GetAsync, contents is empty.");
                return default;
            }
            try
            {
                return parser.ParseFrom(contents);
            }
            catch (System.Exception ex)
            {
                m_Logger.Error($"PrometheusService, GetAsync, Protobuf ParseFrom Exception. Exception : {ex}");
            }

            return default;
        }

        protected async Task<ResponseMessageType> PutAsync<ResponseMessageType>(string route, NameValueCollection queries, Google.Protobuf.IMessage message) where ResponseMessageType : Google.Protobuf.IMessage<ResponseMessageType>, new()
        {
            Google.Protobuf.MessageParser<ResponseMessageType> parser = new Google.Protobuf.MessageParser<ResponseMessageType>(() => new ResponseMessageType());
            var contents = await RequestAsync(route, HttpMethod.Put, queries, message);
            if (null == contents)
            {
                return default;
            }

            try
            {
                return parser.ParseFrom(contents);
            }
            catch (System.Exception /*ex*/)
            {

            }

            return default;
        }

        private static bool ValidateCertificatie(object sender, X509Certificate certificate, X509Chain chain, SslPolicyErrors sslPolicyErrors)
        {
            return true;
        }

        protected async Task<byte[]> PostFileStreamAsync(string route, string directory, string fileName, NameValueCollection queries)
        {
            if (!System.IO.File.Exists(System.IO.Path.Combine(directory, fileName)))
            {
                m_Logger.Error($"PrometheusService, PostFileStreamAsync, Can not found File, Directory : {directory}, FileName : {fileName}");

                return null;
            }

            using (var httpClientHandler = new HttpClientHandler())
            using (var client = new HttpClient())
            using (var request = new HttpRequestMessage())
            {
                ServicePointManager.ServerCertificateValidationCallback = ValidateCertificatie;

                // set time span 

                // SET the HttpMethod method 
                request.Method = HttpMethod.Post;

                var document = Services.DocumentService.Instance.Document;
                string prometheusRoute = $"{document.PrometheusAddress}/{route}";

                var builder = new UriBuilder(prometheusRoute);
                if (queries?.Count > 0)
                {
                    builder.Query = queries.ToString();
                }

                // Consturct the full URI
                request.RequestUri = builder.Uri;

                using (var content = new MultipartFormDataContent("upload----" + DateTime.Now.ToString(CultureInfo.InvariantCulture)))
                {
                    using (var fs = new FileStream(System.IO.Path.Combine(directory, fileName), FileMode.Open, FileAccess.Read))
                    {
                        content.Add(new StreamContent(fs), fileName, fileName);
                        request.Content = content;

                        try
                        {
                            HttpResponseMessage response = await client.SendAsync(request);
                            if (response.IsSuccessStatusCode)
                            {
                                var contents = await response.Content.ReadAsStringAsync();
                                var deserialized = JsonConvert.DeserializeObject(contents) as string;
                                return Convert.FromBase64String(deserialized);
                            }

                            m_Logger.Error($"PrometheusService, POST, {route}, StatusCode: {response.StatusCode}");
                        }
                        catch (System.Exception e)
                        {
                            m_Logger.Error($"PrometheusService, POST, {route}, Exception : {e}");
                        }
                    }
                }


            }

            return null;
        }

        private async Task<byte[]> RequestAsync(string route, HttpMethod method, NameValueCollection queries, Google.Protobuf.IMessage message = null)
        {
            using (var httpClientHandler = new HttpClientHandler())
            using (var client = new HttpClient())
            using (var request = new HttpRequestMessage())
            {
                //httpClientHandler.ServerCertificateCustomValidationCallback = ValidateCertificatie;
                ServicePointManager.ServerCertificateValidationCallback = ValidateCertificatie;

                // set time span 

                // SET the HttpMethod method 
                request.Method = method;

                var document = Services.DocumentService.Instance.Document;
                string prometheusRoute = $"{document.PrometheusAddress}/{route}";

                try
                {
                    var builder = new UriBuilder(prometheusRoute);
                    if (queries?.Count > 0)
                    {
                        builder.Query = queries.ToString();
                    }

                    // Consturct the full URI
                    request.RequestUri = builder.Uri;

                    if (null != message)
                    {
                        // Add The Sereialized JOSN object to your request
                        request.Content = new StringContent(Convert.ToBase64String(message.ToByteArray()), Encoding.UTF8, "application/x-protobuf");
                    }
                }
                catch (System.Exception e)
                {
                    m_Logger.Error($"PrometheusService, Content Serialize Failed, Exception : {e}");

                    return null;
                }

                try
                {
                    HttpResponseMessage response = await client.SendAsync(request);
                    if (response.IsSuccessStatusCode)
                    {
                        var contents = await response.Content.ReadAsStringAsync();
                        var deserialized = JsonConvert.DeserializeObject(contents) as string;
                        return Convert.FromBase64String(deserialized);
                    }

                    m_Logger.Error($"PrometheusService, GET, {route}, StatusCode: {response.StatusCode}");
                }
                catch (System.Net.Http.HttpRequestException e)
                {
                    m_Logger.Error($"PrometheusService:HttpRequestException, GET, {route}, Exception : {e}");
                }
                catch (System.Net.Sockets.SocketException ex)
                {
                    m_Logger.Error($"PrometheusService:SocketException, GET, {route}, Exception : {ex}");
                }
                catch (System.Exception e)
                {
                    m_Logger.Error($"PrometheusService:Exception, GET, {route}, Exception : {e}");
                }
            }

            return null;
        }

    }
}
