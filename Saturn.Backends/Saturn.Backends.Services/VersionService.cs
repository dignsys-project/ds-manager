using System;
using System.Reflection;
using Saturn.Backends.Protocols.Common;

namespace Saturn.Backends.Services
{
    public interface IVersionService
    {
        string MoonName { get; }
        MoonVersion GetMoonVersion();
    }

    public class VersionService : IVersionService
    {
        public string MoonName => m_MoonName;
        private readonly string m_MoonName = null;

        public VersionService(string moonName)
        {
            m_MoonName = moonName;
        }

        public MoonVersion GetMoonVersion()
        {
            // 운영 체제 버전
            // Get the operating system version.
            OperatingSystem os = Environment.OSVersion;

            // 공용 언어 런타임의 버전
            // Get the common language runtime version.
            var ver = Environment.Version;

            // 현재 응용프로그램의 어셈블리 버전
            // Get the version of the executing assembly (that is, this assembly).
            Assembly assem = Assembly.GetEntryAssembly();
            AssemblyName assemName = assem.GetName();
            Version assemVer = assemName.Version;

            var moonVersion = new Saturn.Backends.Protocols.Common.MoonVersion();
            moonVersion.ServiceName = MoonName;
            moonVersion.OsVersion = os.VersionString;
            moonVersion.RuntimeVersion = ver.ToString();
            moonVersion.AssemVersion = new Saturn.Backends.Protocols.Common.MoonVersion.Types.AssemVersion();
            moonVersion.AssemVersion.Name = assemName.ToString();
            moonVersion.AssemVersion.Version = assemVer.ToString();

            return moonVersion;
        }
    }
}