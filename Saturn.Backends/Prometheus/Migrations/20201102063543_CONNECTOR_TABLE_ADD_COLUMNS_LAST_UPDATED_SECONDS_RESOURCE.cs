using Microsoft.EntityFrameworkCore.Migrations;

namespace Prometheus.Migrations
{
    public partial class CONNECTOR_TABLE_ADD_COLUMNS_LAST_UPDATED_SECONDS_RESOURCE : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "LastUpdatedSeconds",
                table: "Connectors",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.AddColumn<long>(
                name: "ResourceId",
                table: "Connectors",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Connectors_ResourceId",
                table: "Connectors",
                column: "ResourceId");

            migrationBuilder.AddForeignKey(
                name: "FK_Connectors_Resources_ResourceId",
                table: "Connectors",
                column: "ResourceId",
                principalTable: "Resources",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Connectors_Resources_ResourceId",
                table: "Connectors");

            migrationBuilder.DropIndex(
                name: "IX_Connectors_ResourceId",
                table: "Connectors");

            migrationBuilder.DropColumn(
                name: "LastUpdatedSeconds",
                table: "Connectors");

            migrationBuilder.DropColumn(
                name: "ResourceId",
                table: "Connectors");
        }
    }
}
