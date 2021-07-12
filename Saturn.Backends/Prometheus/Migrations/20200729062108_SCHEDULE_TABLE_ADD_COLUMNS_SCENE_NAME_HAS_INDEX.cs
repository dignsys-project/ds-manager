using Microsoft.EntityFrameworkCore.Migrations;

namespace Prometheus.Migrations
{
    public partial class SCHEDULE_TABLE_ADD_COLUMNS_SCENE_NAME_HAS_INDEX : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "CreatedSeconds",
                table: "Schedules",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.AddColumn<long>(
                name: "UpdateSeconds",
                table: "Schedules",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.CreateIndex(
                name: "IX_Scenes_Name",
                table: "Scenes",
                column: "Name",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Scenes_Name",
                table: "Scenes");

            migrationBuilder.DropColumn(
                name: "CreatedSeconds",
                table: "Schedules");

            migrationBuilder.DropColumn(
                name: "UpdateSeconds",
                table: "Schedules");
        }
    }
}
