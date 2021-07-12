using Microsoft.EntityFrameworkCore.Migrations;

namespace Prometheus.Migrations
{
    public partial class ADD_COLUMN_KIND_INTO_TABLE_MEMBER_RECORD : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "kind",
                table: "MemberRecords",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "kind",
                table: "MemberRecords");
        }
    }
}
