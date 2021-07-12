using System;
using System.Configuration;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Google.Protobuf;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Prometheus.Models.Databases.Extensions;
using Prometheus.Services;
using Saturn.Backends.Commons;
using Saturn.Backends.Commons.Extensions;
using Saturn.Backends.Protocols.Common;

namespace Prometheus.Controllers
{
    [Authorize]
    [ApiController]
    [Route("member")]
    public class MemberRecordController : AbstractBaseController
    {
        private readonly ILogger m_Logger = null;
        private readonly IMemberService m_Members = null;
        private readonly IMemberRecordService m_MemberRecords = null;

        public MemberRecordController(ILogger<MemberRecordController> logger, IMemberService members, IMemberRecordService memberRecords)
        {
            m_Logger = logger;
            m_Members = members;
            m_MemberRecords = memberRecords;
        }

        [HttpGet("record")]
        public async Task<IActionResult> GetItems([FromQuery] int from = 0, [FromQuery] int size = 3)
        {
            var response = new Saturn.Backends.Protocols.Prometheus.GetMemberRecordResponse();

            var items = await m_MemberRecords.GetItems(from, size);
            if (null == items)
            {
                response.Common = MakeCommon(COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            if (items.Count <= 0)
            {
                response.Common = MakeCommon(COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            response.ItemsCount = items.ItemsCount;
            response.MemberRecords.AddRange(items.Select(x => x.ToMessage()));
            response.Common = MakeCommon(COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [HttpGet("{memberId}/record")]
        public async Task<IActionResult> GetItemsByMemberId([FromRoute] long memberId, [FromQuery] int from = 0, [FromQuery] int size = 3)
        {
            var response = new Saturn.Backends.Protocols.Prometheus.GetMemberRecordByMemberIdResponse();

            var items = await m_MemberRecords.GetItemsByMemberId(memberId, from, size);
            if (null == items)
            {
                response.Common = MakeCommon(COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            if (items.Count <= 0)
            {
                response.Common = MakeCommon(COMMON_STATUS_KIND.NoContent);
                return OkWithMessage(response);
            }

            response.ItemsCount = items.ItemsCount;
            response.MemberRecords.AddRange(items.Select(x => x.ToMessage()));
            response.Common = MakeCommon(COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }
    }
}
