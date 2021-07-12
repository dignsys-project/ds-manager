using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Prometheus.Migrations
{
    public partial class CONNECTOR_SCHEDULE_TABLE_ADD : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Schedules",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(maxLength: 50, nullable: false),
                    StartDateSeconds = table.Column<long>(nullable: true),
                    EndDateSeconds = table.Column<long>(nullable: true),
                    UseDate = table.Column<bool>(nullable: false),
                    WeekSerialized = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Schedules", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ScheduleScenes",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(maxLength: 30, nullable: false),
                    ScheduleId = table.Column<long>(nullable: false),
                    SceneId = table.Column<long>(nullable: false),
                    CreatedSeconds = table.Column<long>(nullable: false),
                    UpdatedSceonds = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ScheduleScenes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ScheduleScenes_Scenes_SceneId",
                        column: x => x.SceneId,
                        principalTable: "Scenes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ScheduleScenes_Schedules_ScheduleId",
                        column: x => x.ScheduleId,
                        principalTable: "Schedules",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ConnectorScheduleScenes",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    ConnectorId = table.Column<long>(nullable: false),
                    ScheduleSceneId = table.Column<long>(nullable: false),
                    CreatedSeconds = table.Column<long>(nullable: false),
                    UpdatedSceonds = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ConnectorScheduleScenes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ConnectorScheduleScenes_Connectors_ConnectorId",
                        column: x => x.ConnectorId,
                        principalTable: "Connectors",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ConnectorScheduleScenes_ScheduleScenes_ScheduleSceneId",
                        column: x => x.ScheduleSceneId,
                        principalTable: "ScheduleScenes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ConnectorScheduleScenes_ScheduleSceneId",
                table: "ConnectorScheduleScenes",
                column: "ScheduleSceneId");

            migrationBuilder.CreateIndex(
                name: "IX_ConnectorScheduleScenes_ConnectorId_ScheduleSceneId",
                table: "ConnectorScheduleScenes",
                columns: new[] { "ConnectorId", "ScheduleSceneId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_ScheduleScenes_SceneId",
                table: "ScheduleScenes",
                column: "SceneId");

            migrationBuilder.CreateIndex(
                name: "IX_ScheduleScenes_ScheduleId",
                table: "ScheduleScenes",
                column: "ScheduleId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ConnectorScheduleScenes");

            migrationBuilder.DropTable(
                name: "ScheduleScenes");

            migrationBuilder.DropTable(
                name: "Schedules");
        }
    }
}
