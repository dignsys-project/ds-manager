using Microsoft.EntityFrameworkCore.Migrations;

namespace Prometheus.Migrations
{
    public partial class RESOURCES_ADD_FILESIZE : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "Size",
                table: "Resources",
                nullable: false,
                defaultValue: 0L);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Size",
                table: "Resources");
        }
    }
}
