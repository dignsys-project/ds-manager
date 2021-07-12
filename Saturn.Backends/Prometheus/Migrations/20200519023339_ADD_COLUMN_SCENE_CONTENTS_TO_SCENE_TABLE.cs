using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Prometheus.Migrations
{
    public partial class ADD_COLUMN_SCENE_CONTENTS_TO_SCENE_TABLE : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SceneConnections",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    SceneId = table.Column<long>(nullable: false),
                    ConnectedSceneId = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SceneConnections", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SceneConnections_Scenes_ConnectedSceneId",
                        column: x => x.ConnectedSceneId,
                        principalTable: "Scenes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SceneConnections_Scenes_SceneId",
                        column: x => x.SceneId,
                        principalTable: "Scenes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SceneConnections_ConnectedSceneId",
                table: "SceneConnections",
                column: "ConnectedSceneId");

            migrationBuilder.CreateIndex(
                name: "IX_SceneConnections_SceneId",
                table: "SceneConnections",
                column: "SceneId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SceneConnections");
        }
    }
}
