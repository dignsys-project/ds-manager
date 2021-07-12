using System;
using System.IO;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.Extensions.Logging;


namespace Saturn.Backends.Commons.Fomatters
{
    public class ProtobufInputFormatter : InputFormatter
    {
        public ProtobufInputFormatter()
        {
            // SupportedMediaTypes.Add(Microsoft.Net.Http.Headers.MediaTypeHeaderValue.Parse("application/x-protobuf"));
            SupportedMediaTypes.Add("application/x-protobuf");
        }
        public override async Task<InputFormatterResult> ReadRequestBodyAsync(InputFormatterContext context)
        {
            var request = context.HttpContext.Request;
            using (var reader = new StreamReader(request.Body))
            {
                var encoded = await reader.ReadToEndAsync();
                try
                {
                    return await InputFormatterResult.SuccessAsync(Convert.FromBase64String(encoded));
                }
                catch (System.Exception)
                {
                    // m_Logger.LogCritical($"ProtobufInputFormatter, {ex}");
                }

                return await InputFormatterResult.FailureAsync();
            }
        }

        protected override bool CanReadType(Type type)
        {
            return type == typeof(byte[]);
        }
    }
}
