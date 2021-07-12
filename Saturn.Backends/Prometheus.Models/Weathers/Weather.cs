// Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse); 
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json;

namespace Prometheus.Models.Weathers
{
    // Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse); 
    public class Header
    {

        [JsonProperty("resultCode")]
        public string ResultCode { get; set; }

        [JsonProperty("resultMsg")]
        public string ResultMsg { get; set; }

    }

    public class Item
    {

        [JsonProperty("baseDate")]
        public string BaseDate { get; set; }

        [JsonProperty("baseTime")]
        public string BaseTime { get; set; }

        [JsonProperty("category")]
        public string Category { get; set; }

        [JsonProperty("fcstDate")]
        public string FcstDate { get; set; }

        [JsonProperty("fcstTime")]
        public string FcstTime { get; set; }

        [JsonProperty("fcstValue")]
        public string FcstValue { get; set; }

        [JsonProperty("nx")]
        public int Nx { get; set; }

        [JsonProperty("ny")]
        public int Ny { get; set; }

    }

    public class Items
    {

        [JsonProperty("item")]
        public List<Item> Item { get; set; }

    }

    public class Body
    {

        [JsonProperty("dataType")]
        public string DataType { get; set; }

        [JsonProperty("items")]
        public Items Items { get; set; }

        [JsonProperty("pageNo")]
        public int PageNo { get; set; }

        [JsonProperty("numOfRows")]
        public int NumOfRows { get; set; }

        [JsonProperty("totalCount")]
        public int TotalCount { get; set; }

    }

    public class Response
    {

        [JsonProperty("header")]
        public Header Header { get; set; }

        [JsonProperty("body")]
        public Body Body { get; set; }

    }

    public class WeatherResponse
    {

        [JsonProperty("response")]
        public Response Response { get; set; }
    }

    namespace Extensions
    {
        public static class WeatherResponseExtensions
        {
            public static bool IsSuccess(this WeatherResponse response)
            {
                return null != response && response.Response.Header.ResultCode == "00";
            }

            public static Saturn.Backends.Protocols.Common.Weather ToMessage(this WeatherResponse response)
            {
                var message = new Saturn.Backends.Protocols.Common.Weather();

                var skyItems = response.Response.Body.Items.Item.FindAll(x => x.Category == "SKY");
                var skyItem = skyItems.Where(x => int.TryParse(x.FcstTime, out var timeSecond)).OrderBy(x => x.FcstTime).FirstOrDefault();
                if (int.TryParse(skyItem.FcstValue, out var skyCode))
                {
                    message.SkyCode = skyCode;
                }

                var ptyItems = response.Response.Body.Items.Item.FindAll(x => x.Category == "PTY");
                var ptyItem = ptyItems.Where(x => int.TryParse(x.FcstTime, out var timeSecond)).OrderBy(x => x.FcstTime).FirstOrDefault();
                if (int.TryParse(ptyItem.FcstValue, out var ptyCode))
                {
                    message.PtyCode = ptyCode;
                }

                var temperatureItems = response.Response.Body.Items.Item.FindAll(x => x.Category == "T1H");
                var temperature = temperatureItems.Where(x => int.TryParse(x.FcstTime, out var timeSecond)).OrderBy(x => x.FcstTime).FirstOrDefault();
                if (int.TryParse(temperature.FcstValue, out var temperatureValue))
                {
                    message.Temperature = temperatureValue;
                }

                return message;
            }
        }

    }
}