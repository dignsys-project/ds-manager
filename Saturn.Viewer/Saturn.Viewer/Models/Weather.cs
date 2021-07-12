using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;

namespace Saturn.Viewer.Models
{
    public class Weather
    {
        public string WeatherResoruce
        {
            get
            {
                var weatherPtyCode = PtyCode> 4 ? 1 : PtyCode;

                return $"{SkyCode}_{weatherPtyCode}.png";
            }
        }
        public int SkyCode { get; set; }
        public int PtyCode { get; set; }
        public int Temperature { get; set; }

        public void FromMessage(Saturn.Backends.Protocols.Common.Weather message)
        {
            SkyCode = message.SkyCode;
            PtyCode = message.PtyCode;
            Temperature = message.Temperature;
        }


    }
}
