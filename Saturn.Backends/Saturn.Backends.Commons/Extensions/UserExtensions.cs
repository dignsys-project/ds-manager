using System.Linq;

namespace Saturn.Backends.Commons.Extensions
{
    public static class UserExtensions
    {
        public static long MemberId(this System.Security.Claims.ClaimsPrincipal user)
        {
            var claimsIdentity = user.Identity as System.Security.Claims.ClaimsIdentity;
            if (null != claimsIdentity)
            {
                var memberIdClaim = claimsIdentity.Claims.FirstOrDefault(x => x.Type == "id");
                if (null != memberIdClaim && long.TryParse(memberIdClaim.Value, out var memberId))
                {
                    return memberId;
                }
            }
            return 0;
        }
    }
}