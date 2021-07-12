using System;
using System.IO;
using System.Threading.Tasks;
using FirebaseAdmin;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using Microsoft.OpenApi.Models;

namespace Prometheus
{
    public class Startup
    {
        public static string C_CORS_NAME = "Prometheus";

        private string m_ResourceFolderLocation = "";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add Encoding
            System.Text.Encoding.RegisterProvider(System.Text.CodePagesEncodingProvider.Instance);

            services.AddControllers();

            services.AddMvc(x =>
            {
                x.InputFormatters.Add(new Saturn.Backends.Commons.Fomatters.ProtobufInputFormatter());
            });

            services.AddHttpClient();

            services.AddSingleton<Saturn.Backends.Services.IVersionService>(x => new Saturn.Backends.Services.VersionService("Prometheus"));

            services.AddHostedService<Services.WeatherTimedHostedService>();

            // cors 
            var saturnAddress = Configuration.GetSection("Saturn").GetValue("Address", string.Empty);
            services.AddCors(options => options.AddPolicy(C_CORS_NAME, builder => builder.WithOrigins(saturnAddress).AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin()));
            // services.AddCors(options => options.AddPolicy(C_CORS_NAME, builder => builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin()));

            // database connection pool
            var databaseSection = Configuration.GetSection("Database");

            var connection = databaseSection.GetValue("Maria", string.Empty);
            var bUseQueryLogger = databaseSection.GetValue("UseQueryLogger", false);

            services.AddDbContextPool<Databases.DatabaseDbContext>(optionsBuilder =>
            {
                if (bUseQueryLogger)
                {
                    optionsBuilder.UseLoggerFactory(LoggerFactory.Create(x => x.AddConsole()));
                }

                optionsBuilder.UseMySql(connection, x =>
                {
                    x.MigrationsAssembly("Prometheus");

                    // 재연결하는 코드 추가. 
                    // 2020.03.30 https://docs.microsoft.com/ko-kr/dotnet/standard/microservices-architecture/implement-resilient-applications/implement-resilient-entity-framework-core-sql-connections
                    x.EnableRetryOnFailure(maxRetryCount: 10, maxRetryDelay: TimeSpan.FromSeconds(20), errorNumbersToAdd: null);
                });
            });

            Services.JwtConfiguration jwtConfiguration = new Services.JwtConfiguration();

            var jwtSection = Configuration.GetSection("JWT");
            if (null != jwtSection)
            {
                jwtConfiguration.Secret = jwtSection.GetValue("secret", string.Empty);
                long.TryParse(jwtSection.GetValue("expiredMinutes", string.Empty), out jwtConfiguration.ExpiredMinutes);
                bool.TryParse(jwtSection.GetValue("validateIssuer", string.Empty), out jwtConfiguration.IsValidateIssuer);
                bool.TryParse(jwtSection.GetValue("validateAudience", string.Empty), out jwtConfiguration.IsValidateIssuer);
                jwtConfiguration.Issuer = jwtSection.GetValue("issuer", string.Empty);
                jwtConfiguration.Audience = jwtSection.GetValue("audience", string.Empty);
            }

            var filePath = Environment.GetEnvironmentVariable("PROMETHEUS_AUTHENTICATION");
            if (!string.IsNullOrEmpty(filePath))
            {
                using (FileStream fs = new FileStream(filePath, FileMode.Open))
                using (StreamReader sr = new StreamReader(fs))
                {
                    jwtConfiguration = JsonConvert.DeserializeObject<Services.JwtConfiguration>(sr.ReadToEnd());
                }
            }

            // JWT configuration
            bool bSuccess = JwtBearerConfigureService(services, jwtConfiguration);

            // Dependency Injections 
            // services.AddScoped<Services.Universe.IEnceladusService, Services.Universe.EnceladusService>();

            // databases
            services.AddTransient<Databases.Repositories.IMemberRepository, Databases.Repositories.MemberRepository>();
            services.AddTransient<Databases.Repositories.IMemberDepartmentRepository, Databases.Repositories.MemberDepartmentRepository>();
            services.AddTransient<Databases.Repositories.IMemberPermissionRepository, Databases.Repositories.MemberPermissionRepository>();
            services.AddTransient<Databases.Repositories.IDepartmentRepository, Databases.Repositories.DepartmentRepository>();
            services.AddTransient<Databases.Repositories.IDepartmentNodeRepository, Databases.Repositories.DepartmentNodeRepository>();

            // databases
            services.AddTransient<Prometheus.Databases.Repositories.IResourceRepository, Prometheus.Databases.Repositories.ResourceRepository>();
            services.AddTransient<Prometheus.Databases.Repositories.IPreviewResourceRepository, Prometheus.Databases.Repositories.PreviewResourceRepository>();
            services.AddTransient<Prometheus.Databases.Repositories.ISceneRepository, Prometheus.Databases.Repositories.SceneRepository>();
            services.AddTransient<Prometheus.Databases.Repositories.ISceneResourceRepository, Prometheus.Databases.Repositories.SceneResourceRepository>();

            services.AddTransient<Prometheus.Databases.Repositories.IMemberRecordRepository, Prometheus.Databases.Repositories.MemberRecordRepository>();
            services.AddTransient<Prometheus.Databases.Repositories.IConnectorRepository, Prometheus.Databases.Repositories.ConnectorRepository>();
            services.AddTransient<Prometheus.Databases.Repositories.IScheduleRepository, Prometheus.Databases.Repositories.ScheduleRepository>();
            services.AddTransient<Prometheus.Databases.Repositories.IScheduleSceneRepository, Prometheus.Databases.Repositories.ScheduleSceneRepository>();
            services.AddTransient<Prometheus.Databases.Repositories.IConnectorScheduleSceneRepository, Prometheus.Databases.Repositories.ConnectorScheduleSceneRepository>();
            services.AddTransient<Prometheus.Databases.Repositories.IDepartmentLowerRepository, Prometheus.Databases.Repositories.DepartmentLowerRepository>();
            services.AddTransient<Prometheus.Databases.Repositories.IDepartmentResourceFolderRepository, Prometheus.Databases.Repositories.DepartmentResourceFolderRepository>();
            services.AddTransient<Prometheus.Databases.Repositories.IDepartmentSceneFolderRepository, Prometheus.Databases.Repositories.DepartmentSceneFolderRepository>();
            services.AddTransient<Prometheus.Databases.Repositories.ISceneConnectionRepository, Prometheus.Databases.Repositories.SceneConnectionRepository>();

            services.AddTransient<Services.IMemberService, Services.MemberService>();
            services.AddTransient<Services.IDepartmentService, Services.DepartmentService>();
            services.AddTransient<Services.IResourceService, Services.ResourceService>();
            services.AddTransient<Services.ISceneService, Services.SceneService>();
            services.AddTransient<Services.IMemberRecordService, Services.MemberRecordService>();
            services.AddTransient<Services.IConnectorService, Services.ConnectorService>();
            services.AddTransient<Services.IMemberDepartmentService, Services.MemberDepartmentService>();
            services.AddTransient<Services.IScheduleService, Services.ScheduleService>();
            services.AddTransient<Services.ISceneConnectionService, Services.SceneConnectionService>();
            services.AddTransient<Services.ISceneResourceService, Services.SceneResourceService>();

            services.AddSingleton<Services.IWeatherService, Services.WeatherService>();
            services.AddTransient<Saturn.Backends.Services.IRssService, Saturn.Backends.Services.RssService>();

            services.Configure<Microsoft.AspNetCore.Http.Features.FormOptions>(o =>
            {
                o.ValueLengthLimit = int.MaxValue;
                o.MultipartBodyLengthLimit = (long)(int.MaxValue) * 5;
                o.MemoryBufferThreshold = int.MaxValue;
            });

            // Register the Swagger generator, defining 1 or more Swagger documents
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Prometheus API", Version = "v1" });
            });

            // get resource folderlocation from appsettings.json
            var resourceSection = Configuration.GetSection("Resource");
            if (null != resourceSection)
            {
                var resourceFolderLocation = resourceSection.GetValue("FolderLocation", string.Empty);
                if (!string.IsNullOrEmpty(resourceFolderLocation))
                {
                    m_ResourceFolderLocation = resourceFolderLocation;
                }
            }
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, Databases.DatabaseDbContext dbContext, ILogger<Startup> logger)
        {
            try
            {
                // 현재 응용프로그램의 어셈블리 버전
                // Get the version of the executing assembly (that is, this assembly).
                var assem = System.Reflection.Assembly.GetEntryAssembly();
                var assemName = assem.GetName();
                var assemVer = assemName.Version;

                logger.LogInformation($"Startup, Prometheus Version : {assemVer}, Production : {env.IsProduction()}");

                // Automatically perform database migration // https://jasonwatmore.com/post/2019/12/27/aspnet-core-automatic-ef-core-migrations-to-sql-database-on-startup
                // migrate any database changes on startup (includes initial db creation)
                dbContext.Database.Migrate();

                if (env.IsDevelopment())
                {
                    app.UseDeveloperExceptionPage();

                    // Enable middleware to serve generated Swagger as a JSON endpoint.
                    app.UseSwagger();

                    // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.),
                    // specifying the Swagger JSON endpoint.
                    app.UseSwaggerUI(c =>
                    {
                        c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
                    });

                }

                string resourceFolderLocation = string.Empty;
                if (!string.IsNullOrEmpty(m_ResourceFolderLocation))
                {
                    resourceFolderLocation = m_ResourceFolderLocation;
                }
                else
                {
                    resourceFolderLocation = Directory.GetCurrentDirectory();
                }

                var resourceFolderLocationFullPath = Path.Combine(resourceFolderLocation, @"Resources");

                // check resources directory
                var directoryInfo = new System.IO.DirectoryInfo(resourceFolderLocationFullPath);
                if (!directoryInfo.Exists)
                {
                    directoryInfo = System.IO.Directory.CreateDirectory(resourceFolderLocationFullPath);
                }

                logger.LogInformation($"Full Resource Location : {resourceFolderLocationFullPath}, Resource Location : {resourceFolderLocation}");

                // set resource location 
                Services.ResourceService.ResourceLocation = resourceFolderLocation;

                app.UseStaticFiles(new StaticFileOptions()
                {
                    FileProvider = new PhysicalFileProvider(resourceFolderLocationFullPath),
                    RequestPath = new PathString("/Resources"),
                    OnPrepareResponse = context => context.Context.Response.Headers["Access-Control-Allow-Origin"] = "*"
                });

                app.UseCors(C_CORS_NAME);

                // app.UseHttpsRedirection();

                app.UseRouting();

                app.UseAuthentication();
                app.UseAuthorization();

                app.UseEndpoints(endpoints => endpoints.MapControllers());

            }
            catch (System.Exception ex)
            {

                logger.LogCritical($"Startup, ConfigureServices, Exception : {ex}");
            }
        }

        private bool JwtBearerConfigureService(IServiceCollection services, Services.JwtConfiguration jwtConfiguration)
        {
            if (null != jwtConfiguration)
            {
                var jwtService = new Prometheus.Services.JwtService(jwtConfiguration);
                services.AddSingleton<Prometheus.Services.IJwtService>(p => jwtService);

                services.AddAuthentication(x =>
                {
                    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                })
                .AddJwtBearer(x =>
                {
                    x.RequireHttpsMetadata = false;
                    x.SaveToken = true;

                    x.TokenValidationParameters = jwtService.Parameters;

                    x.Events = new JwtBearerEvents
                    {
                        OnAuthenticationFailed = (context) =>
                        {
                            Console.WriteLine(context.Exception);
                            return Task.CompletedTask;
                        },

                        OnMessageReceived = (context) =>
                        {
                            return Task.CompletedTask;
                        },

                        OnTokenValidated = (context) =>
                        {
                            return Task.CompletedTask;
                        }
                    };
                });
            }

            return true;
        }
    }
}
