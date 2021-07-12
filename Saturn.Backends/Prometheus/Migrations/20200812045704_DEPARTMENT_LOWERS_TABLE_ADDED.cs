using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Prometheus.Migrations
{
    public partial class DEPARTMENT_LOWERS_TABLE_ADDED : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DepartmentLowers",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    DepartmentId = table.Column<long>(nullable: false),
                    LowerDepartmentId = table.Column<long>(nullable: false),
                    CreatedSeconds = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DepartmentLowers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DepartmentLowers_Departments_DepartmentId",
                        column: x => x.DepartmentId,
                        principalTable: "Departments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DepartmentLowers_Departments_LowerDepartmentId",
                        column: x => x.LowerDepartmentId,
                        principalTable: "Departments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DepartmentLowers_LowerDepartmentId",
                table: "DepartmentLowers",
                column: "LowerDepartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_DepartmentLowers_DepartmentId_LowerDepartmentId",
                table: "DepartmentLowers",
                columns: new[] { "DepartmentId", "LowerDepartmentId" },
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DepartmentLowers");
        }
    }
}
