using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace Prometheus.Databases
{
    public class DatabaseDbContext : DbContext
    {
        public DbSet<Prometheus.Models.Databases.Member> Members { get; set; }

        public DbSet<Models.Databases.Department> Departments { get; set; }

        public DbSet<Models.Databases.MemberDepartment> MemberDepartments { get; set; }
        public DbSet<Models.Databases.MemberPermission> MemberPermissions { get; set; }
        public DbSet<Models.Databases.DepartmentNode> DepartmentNodes { get; set; }

        // Resources table
        public DbSet<Models.Databases.Resource> Resources { get; set; }

        // PreviewResources table
        public DbSet<Models.Databases.PreviewResource> PreviewResources { get; set; }
        public DbSet<Models.Databases.Scene> Scenes { get; set; }
        public DbSet<Models.Databases.SceneResource> SceneResources { get; set; }
        public DbSet<Models.Databases.SceneConnection> SceneConnections { get; set; }
        public DbSet<Models.Databases.MemberRecord> MemberRecords { get; set; }
        public DbSet<Models.Databases.Connector> Connectors { get; set; }

        public DbSet<Models.Databases.ConnectorScheduleScene> ConnectorScheduleScenes { get; set; }
        public DbSet<Models.Databases.Schedule> Schedules { get; set; }
        public DbSet<Models.Databases.ScheduleScene> ScheduleScenes { get; set; }

        public DbSet<Models.Databases.DepartmentLower> DepartmentLowers { get; set; }

        public DbSet<Models.Databases.DepartmentResourceFolder> DepartmentResourceFolders { get; set; }
        public DbSet<Models.Databases.DepartmentSceneFolder> DepartmentSceneFolders { get; set; }

        public DatabaseDbContext(DbContextOptions<DatabaseDbContext> options) : base(options)
        {
            // var a = this.GetService<IHostEnvironment>().IsDevelopment();

            // m_Logger = this.GetService<ILoggerFactory>().CreateLogger<DatabaseDbContext>();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // optionsBuilder.EnableSensitiveDataLogging();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Prometheus.Models.Databases.Member>(e =>
            {
                e.HasIndex(x => x.Uuid);
                e.HasIndex(x => x.Email).IsUnique();
                e.HasMany(x => x.MemberDepartments);
                e.HasMany(x => x.MemberPermissions);
            });

            modelBuilder.Entity<Models.Databases.Department>(e =>
            {
                e.HasIndex(x => x.Name).IsUnique();
            });

            modelBuilder.Entity<Models.Databases.MemberDepartment>(e =>
            {
                e.HasIndex(x => x.MemberId);
                e.HasIndex(x => new { x.MemberId, x.DepartmentId }).IsUnique();
            });

            modelBuilder.Entity<Models.Databases.MemberPermission>(e =>
            {
                e.HasIndex(x => x.MemberId);
                e.HasIndex(x => new { x.MemberId, x.Permission }).IsUnique();
            });

            modelBuilder.Entity<Models.Databases.Resource>(e =>
            {
                e.HasIndex(x => x.Kind);
                e.Property(x => x.Duration).HasDefaultValue(0);
            });

            modelBuilder.Entity<Models.Databases.Connector>(e =>
            {
                e.HasIndex(x => x.Name).IsUnique();
                e.HasIndex(x => x.DeviceId).IsUnique();
                e.HasIndex(x => x.Kind);
                e.HasIndex(x => x.SceneId);
                e.Property(x => x.LastUpdatedSeconds).HasDefaultValue(0);
            });

            modelBuilder.Entity<Models.Databases.SceneConnection>(e =>
            {
                e.HasOne(x => x.Scene).WithMany(x => x.SceneConnections).HasForeignKey(x => x.SceneId);
            });

            modelBuilder.Entity<Models.Databases.ConnectorScheduleScene>(e =>
            {
                e.HasIndex(x => new { x.ConnectorId, x.ScheduleSceneId }).IsUnique();
            });

            modelBuilder.Entity<Models.Databases.Scene>(e =>
            {
                e.HasIndex(x => x.Name).IsUnique();
            });

            modelBuilder.Entity<Prometheus.Models.Databases.DepartmentLower>(e =>
            {
                e.HasIndex(x => new { x.DepartmentId, x.LowerDepartmentId }).IsUnique();

                e.HasOne(x => x.Departemnt).WithMany(x => x.DepartmentLowers).HasForeignKey(x => x.DepartmentId);
            });

            modelBuilder.Entity<Prometheus.Models.Databases.DepartmentResourceFolder>(e =>
            {
                e.HasIndex(x => new { x.DepartmentId, x.ParentDepartmentResourceFolderId, x.Name }).IsUnique();
                e.HasOne(x => x.Department).WithMany(x => x.DepartmentResourceFolders).HasForeignKey(x => x.DepartmentId);
                e.Property(x => x.Size).HasDefaultValue(0);
            });

            modelBuilder.Entity<Prometheus.Models.Databases.DepartmentSceneFolder>(e =>
            {
                e.HasIndex(x => new { x.DepartmentId, x.ParentDepartmentSceneFolderId, x.Name }).IsUnique();
                e.HasOne(x => x.Department).WithMany(x => x.DepartmentSceneFolders).HasForeignKey(x => x.DepartmentId);
                e.Property(x => x.Size).HasDefaultValue(0);
            });

            modelBuilder.Entity<Prometheus.Models.Databases.Scene>(e =>
            {
                e.Property(x => x.IsValified).HasDefaultValue(false);
            });

            modelBuilder.Entity<Prometheus.Models.Databases.Connector>(e =>
            {
                e.Property(x => x.IsEmergency).HasDefaultValue(false);
            });
        }

        public IExecutionStrategy CreateExecutionStrategy()
        {
            return Database.CreateExecutionStrategy();
        }

    }
}
