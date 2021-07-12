using Microsoft.EntityFrameworkCore.Migrations;

namespace Prometheus.Migrations
{
    public partial class CONNECTOR_TABLE_ADD_EMERGENCY : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "EmergencySceneId",
                table: "Connectors",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsEmergency",
                table: "Connectors",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateIndex(
                name: "IX_Connectors_EmergencySceneId",
                table: "Connectors",
                column: "EmergencySceneId");

            migrationBuilder.AddForeignKey(
                name: "FK_Connectors_Scenes_EmergencySceneId",
                table: "Connectors",
                column: "EmergencySceneId",
                principalTable: "Scenes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Connectors_Scenes_EmergencySceneId",
                table: "Connectors");

            migrationBuilder.DropIndex(
                name: "IX_Connectors_EmergencySceneId",
                table: "Connectors");

            migrationBuilder.DropColumn(
                name: "EmergencySceneId",
                table: "Connectors");

            migrationBuilder.DropColumn(
                name: "IsEmergency",
                table: "Connectors");
        }
    }
}
