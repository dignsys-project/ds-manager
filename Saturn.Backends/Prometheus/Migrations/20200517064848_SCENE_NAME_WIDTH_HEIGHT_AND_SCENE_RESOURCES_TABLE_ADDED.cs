using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Prometheus.Migrations
{
    public partial class SCENE_NAME_WIDTH_HEIGHT_AND_SCENE_RESOURCES_TABLE_ADDED : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "Height",
                table: "Scenes",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Scenes",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "Width",
                table: "Scenes",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.CreateTable(
                name: "SceneResources",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    SceneId = table.Column<long>(nullable: false),
                    ResourceId = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SceneResources", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SceneResources_Resources_ResourceId",
                        column: x => x.ResourceId,
                        principalTable: "Resources",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SceneResources_Scenes_SceneId",
                        column: x => x.SceneId,
                        principalTable: "Scenes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_SceneResources_ResourceId",
                table: "SceneResources",
                column: "ResourceId");

            migrationBuilder.CreateIndex(
                name: "IX_SceneResources_SceneId",
                table: "SceneResources",
                column: "SceneId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SceneResources");

            migrationBuilder.DropColumn(
                name: "Height",
                table: "Scenes");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Scenes");

            migrationBuilder.DropColumn(
                name: "Width",
                table: "Scenes");
        }
    }
}
