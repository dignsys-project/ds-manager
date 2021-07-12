using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Prometheus.Models.Databases
{
    public class MemberRecord : DatabaseId
    {
        [Required]
        public Member Member { get; set; }

        [Required]
        public Saturn.Backends.Protocols.Common.MEMBER_RECORD_KIND kind { get; set; }

        [Required]
        public string SerializedParamater { get; set; }


        [Required]
        public long BehaviorSeconds { get; set; }
    }

    namespace Extensions
    {
        public static class MemberRecordExtenisons
        {
            public static Saturn.Backends.Protocols.Common.MemberRecord ToMessage(this MemberRecord memberRecord)
            {
                var message = new Saturn.Backends.Protocols.Common.MemberRecord();
                message.MemberRecordId = memberRecord.Id;
                if (null != memberRecord.Member)
                {
                    message.MemberBase = memberRecord.Member?.ToMessageBase();
                }

                // deserialized from message
                var deserialized = Newtonsoft.Json.JsonConvert.DeserializeObject<string>(memberRecord.SerializedParamater);
                var bytes = System.Convert.FromBase64String(deserialized);

                message.Blueprint = Saturn.Backends.Protocols.Common.MemberRecordBlueprint.Parser.ParseFrom(bytes);
                message.Kind = memberRecord.kind;
                message.BehaviorSeconds = memberRecord.BehaviorSeconds;

                return message;
            }
        }
    }
}