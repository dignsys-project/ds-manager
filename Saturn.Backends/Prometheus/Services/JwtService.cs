using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;

namespace Prometheus.Services
{
    public class JwtConfiguration
    {
        [JsonProperty("secret")]
        public string Secret;

        [JsonProperty("expiredMinutes")]
        public long ExpiredMinutes;

        [JsonProperty("validateIssuer")]
        public bool IsValidateIssuer;

        [JsonProperty("validateAudience")]
        public bool IsValidateAudience;

        [JsonProperty("issuer")]
        public string Issuer;

        [JsonProperty("audience")]
        public string Audience;

        public SymmetricSecurityKey SecurityKey => new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(Secret));
    }

    public interface IJwtService
    {

        TokenValidationParameters Parameters { get; }

        string GenerateSecurityToken(long id, Guid uuid, string email, Saturn.Backends.Protocols.Common.MEMBER_KIND member, Saturn.Backends.Protocols.Common.MEMBER_REGISTER_KIND register);

        bool IsValidate(string token);
    }

    public class JwtService : IJwtService
    {
        private readonly JwtConfiguration m_Configuration = null;

        private readonly TokenValidationParameters m_Parameters = null;

        public TokenValidationParameters Parameters => m_Parameters;

        private long Test;

        public JwtService(JwtConfiguration configuration)
        {
            Test = new Random().Next();

            m_Configuration = configuration;

            m_Parameters = GetParameters();
        }

        private TokenValidationParameters GetParameters()
        {
            var parameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = m_Configuration.SecurityKey,
                ValidateIssuer = m_Configuration.IsValidateIssuer,
                ValidateAudience = m_Configuration.IsValidateAudience,
            };

            if (parameters.ValidateIssuer)
            {
                parameters.ValidIssuer = m_Configuration.Issuer;

            }

            if (parameters.ValidateAudience)
            {
                parameters.ValidAudience = m_Configuration.Audience;
            }

            return parameters;
        }


        public bool IsValidate(string token)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            try
            {
                tokenHandler.ValidateToken(token, m_Parameters, out var validatedToken);
            }
            catch (System.Exception)
            {

                return false;
            }

            return true;
        }

        public string GenerateSecurityToken(long id, Guid uuid, string email, Saturn.Backends.Protocols.Common.MEMBER_KIND member, Saturn.Backends.Protocols.Common.MEMBER_REGISTER_KIND register)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenDescriptor = new SecurityTokenDescriptor()
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim("id", id.ToString()),
                    new Claim("uuid", uuid.ToString()),
                    new Claim(ClaimTypes.Email, email),
                    new Claim(ClaimTypes.Role, member.ToString()),
                    new Claim("register", register.ToString()),
                }),
                Expires = DateTime.Now.AddMinutes(double.Parse(m_Configuration.ExpiredMinutes.ToString())),
                // Expires = DateTime.Now.AddDays(7),
                SigningCredentials = new SigningCredentials(m_Configuration.SecurityKey, SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
}