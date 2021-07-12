using Microsoft.EntityFrameworkCore.Migrations;

namespace Prometheus.Migrations
{
    public partial class CONNECTOR_ADD_REGISTER_KIND : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Kind",
                table: "Connectors",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Connectors_Kind",
                table: "Connectors",
                column: "Kind");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Connectors_Kind",
                table: "Connectors");

            migrationBuilder.DropColumn(
                name: "Kind",
                table: "Connectors");
        }
    }
}
