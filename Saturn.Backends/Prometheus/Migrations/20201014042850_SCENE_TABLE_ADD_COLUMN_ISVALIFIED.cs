using Microsoft.EntityFrameworkCore.Migrations;

namespace Prometheus.Migrations
{
    public partial class SCENE_TABLE_ADD_COLUMN_ISVALIFIED : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Scenes_Resources_ResourceId",
                table: "Scenes");

            migrationBuilder.AlterColumn<long>(
                name: "ResourceId",
                table: "Scenes",
                nullable: true,
                oldClrType: typeof(long),
                oldType: "bigint");

            migrationBuilder.AddColumn<bool>(
                name: "IsValified",
                table: "Scenes",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddForeignKey(
                name: "FK_Scenes_Resources_ResourceId",
                table: "Scenes",
                column: "ResourceId",
                principalTable: "Resources",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Scenes_Resources_ResourceId",
                table: "Scenes");

            migrationBuilder.DropColumn(
                name: "IsValified",
                table: "Scenes");

            migrationBuilder.AlterColumn<long>(
                name: "ResourceId",
                table: "Scenes",
                type: "bigint",
                nullable: false,
                oldClrType: typeof(long),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Scenes_Resources_ResourceId",
                table: "Scenes",
                column: "ResourceId",
                principalTable: "Resources",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
