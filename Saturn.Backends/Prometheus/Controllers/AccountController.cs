using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Google.Protobuf;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Prometheus.Services;
using Saturn.Backends.Commons;
using Saturn.Backends.Commons.Extensions;
using Saturn.Backends.Protocols.Common;

namespace Prometheus.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class AccountController : AbstractBaseController
    {
        private readonly ILogger m_Logger = null;
        private readonly IJwtService m_JwtService = null;

        private readonly IMemberService m_MemberService = null;

        private string m_Secret = string.Empty;

        public AccountController(ILogger<AccountController> logger, IJwtService jwtService, IMemberService memberService, IConfiguration configuration)
        {
            m_Logger = logger;
            m_JwtService = jwtService;
            m_MemberService = memberService;

            var section = configuration.GetSection("Encription");
            if (section != null)
            {
                m_Secret = section.GetValue("Secret", string.Empty);
            }
        }

        [HttpGet("{memberId}")]
        public async Task<IActionResult> GetMemberPermissions([FromRoute] long memberId)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var response = new Saturn.Backends.Protocols.Prometheus.GetAccountResponse();

            var member = await m_MemberService.GetMemberPermissionBymemberId(memberId);
            if (null == member)
            {
                // 이미 삭제 한 경우
                response.Common = MakeCommon(COMMON_STATUS_KIND.Unauthorized);
                return OkWithMessage(response);
            }

            response.Kind = member.MemberKind;
            response.Permissions.AddRange(member.MemberPermissions?.Select(x => x.Permission));
            response.DepartmentIds.AddRange(member.MemberDepartments?.Select(x => x.DepartmentId));
            response.Common = MakeCommon(COMMON_STATUS_KIND.Success);

            return OkWithMessage(response);
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Register([FromBody] byte[] decoded)
        {
            Saturn.Backends.Protocols.Prometheus.PostAccountRequest request = null;

            var response = new Saturn.Backends.Protocols.Prometheus.PostAccountResponse();
            try
            {
                request = Saturn.Backends.Protocols.Prometheus.PostAccountRequest.Parser.ParseFrom(decoded);
            }
            catch (System.Exception e)
            {
                m_Logger.LogCritical($"Protobuf, Message : Saturn.Backends.Protocols.Prometheus.PostRegisterRequest, Exception : {e}");

                response.Common = MakeCommon(COMMON_STATUS_KIND.FailedProtobuf);
                return OkWithMessage(response);
            }

            var member = await m_MemberService.GetMemberByEmail(request.Email);
            if (member != null)
            {
                response.Common = MakeCommon(COMMON_STATUS_KIND.FailedDuplicated);
                return OkWithMessage(response);
            }

            var password = request.Password;
            password = await DecryptionAsync(password, m_Secret);

            if (!m_MemberService.CreatePasswordHash(password, out var hash, out var salt))
            {
                response.Common = MakeCommon(COMMON_STATUS_KIND.Failed);

                return OkWithMessage(response);
            }

            var currentSeconds = DateTimeOffset.Now.ToUnixTimeSeconds();

            var memberKind = await m_MemberService.HaveAdmin() ? MEMBER_KIND.Normal : MEMBER_KIND.Admin;
            switch (request.MemberKind)
            {
                case MEMBER_KIND.Test:
                    memberKind = MEMBER_KIND.Test;
                    break;

                default:
                    break;
            }

            var uuid = Guid.NewGuid();

            member = new Models.Databases.Member
            {
                Uuid = Guid.NewGuid(),
                Email = request.Email,
                PasswordHash = hash,
                PasswordSalt = salt,
                MemberKind = memberKind,
                RegisterKind = MEMBER_REGISTER_KIND.Registered,
                CreatedSeconds = currentSeconds,
                LastConnectedSeconds = currentSeconds
            };

            // Admin의 경우 모든 권한을 입력해준다.
            if (member.MemberKind == MEMBER_KIND.Admin)
            {
                member.MemberPermissions = new List<Models.Databases.MemberPermission>();
                foreach (int i in Enum.GetValues(typeof(Saturn.Backends.Protocols.Common.MEMBER_PERMISSION_KIND)))
                {
                    var kind = (Saturn.Backends.Protocols.Common.MEMBER_PERMISSION_KIND)i;
                    if (kind == MEMBER_PERMISSION_KIND.Default)
                    {
                        continue;
                    }

                    member.MemberPermissions.Add(new Models.Databases.MemberPermission { Member = member, Permission = kind });
                }
            }

            member = await m_MemberService.Create(member);
            if (null == member)
            {
                response.Common = MakeCommon(COMMON_STATUS_KIND.FailedDatabase);
                return OkWithMessage(response);
            }

            response.Common = MakeCommon(COMMON_STATUS_KIND.Success);
            return OkWithMessage(response);
        }

        [AllowAnonymous]
        [HttpPut]
        public async Task<IActionResult> Authorize([FromBody] byte[] decoded)
        {
            Saturn.Backends.Protocols.Prometheus.PutAccountRequest request = null;

            var response = new Saturn.Backends.Protocols.Prometheus.PutAccountResponse();
            try
            {
                request = Saturn.Backends.Protocols.Prometheus.PutAccountRequest.Parser.ParseFrom(decoded);
            }
            catch (System.Exception e)
            {
                m_Logger.LogCritical($"Protobuf, Message : Saturn.Backends.Protocols.Prometheus.PutAccountRequest, Exception : {e}");

                response.Common = MakeCommon(COMMON_STATUS_KIND.FailedProtobuf);
                return OkWithMessage(response);
            }

            var member = await m_MemberService.GetMemberByEmail(request.Email);
            if (member == null)
            {
                response.Common = MakeCommon(COMMON_STATUS_KIND.Unauthorized);
                return OkWithMessage(response);
            }

            bool bCanNotAuthorize = member.MemberKind == MEMBER_KIND.Test || member.MemberKind == MEMBER_KIND.Default || member.MemberKind == MEMBER_KIND.Normal;
            if (bCanNotAuthorize)
            {
                response.Common = MakeCommon(COMMON_STATUS_KIND.FailedPermission);
                return OkWithMessage(response);
            }

            var password = request.Password;
            password = await DecryptionAsync(password, m_Secret);

            if (!m_MemberService.VarifyHashedPassword(password, member.PasswordHash, member.PasswordSalt))
            {
                response.Common = MakeCommon(COMMON_STATUS_KIND.Unauthorized);

                return OkWithMessage(response);
            }

            var currentSeconds = DateTimeOffset.Now.ToUnixTimeSeconds();

            member.LastConnectedSeconds = currentSeconds;
            if (!await m_MemberService.Update(member))
            {
                m_Logger.LogWarning($"Update LastConnected Failed, {member.Id}");
            }

            string token = string.Empty;
            try
            {
                token = m_JwtService.GenerateSecurityToken(member.Id, member.Uuid, member.Email, member.MemberKind, member.RegisterKind);
            }
            catch (System.Exception e)
            {
                m_Logger.LogCritical($"Token Generate Failed, Exception : {e}");

                response.Common = MakeCommon(COMMON_STATUS_KIND.Failed);
                return OkWithMessage(response);
            }

            response.Common = MakeCommon(COMMON_STATUS_KIND.Success);
            response.Token = token;
            return OkWithMessage(response);
        }

        private async Task<string> DecryptionAsync(string cipherMessage, string secret = "secret")
        {
            byte[] cipherBytes = Convert.FromBase64String(cipherMessage);

            try
            {
                using (Aes encryptor = Aes.Create())
                {
                    var salt = cipherBytes.Take(16).ToArray();
                    var iv = cipherBytes.Skip(16).Take(16).ToArray();
                    var encrypted = cipherBytes.Skip(32).ToArray();

                    var pdb = new Rfc2898DeriveBytes(secret, salt, 100);

                    encryptor.Key = pdb.GetBytes(32);
                    encryptor.IV = iv;

                    var message = string.Empty;
                    using (var ms = new MemoryStream(encrypted))
                    {
                        using (CryptoStream cs = new CryptoStream(ms, encryptor.CreateDecryptor(), CryptoStreamMode.Read))
                        {
                            using (var reader = new StreamReader(cs, Encoding.UTF8))
                            {
                                message = await reader.ReadToEndAsync();
                            }
                        }
                    }

                    return message;
                }
            }
            catch (System.Exception ex)
            {
                m_Logger.LogCritical($"AccountController, Description, Ex : {ex}");
            }

            return null;

        }
    }
}
