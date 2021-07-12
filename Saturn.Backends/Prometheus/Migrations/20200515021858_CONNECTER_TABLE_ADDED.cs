using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Prometheus.Migrations
{
    public partial class CONNECTER_TABLE_ADDED : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Members_Departments_DepartmentId",
                table: "Members");

            migrationBuilder.DropIndex(
                name: "IX_Members_DepartmentId",
                table: "Members");

            migrationBuilder.DropColumn(
                name: "DepartmentId",
                table: "Members");

            migrationBuilder.CreateTable(
                name: "Connectors",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(maxLength: 50, nullable: false),
                    DeviceId = table.Column<string>(maxLength: 256, nullable: false),
                    CreatedSeconds = table.Column<long>(nullable: false),
                    DepartmentId = table.Column<long>(nullable: true),
                    SceneId = table.Column<long>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Connectors", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Connectors_Departments_DepartmentId",
                        column: x => x.DepartmentId,
                        principalTable: "Departments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Connectors_Scenes_SceneId",
                        column: x => x.SceneId,
                        principalTable: "Scenes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Connectors_DepartmentId",
                table: "Connectors",
                column: "DepartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_Connectors_DeviceId",
                table: "Connectors",
                column: "DeviceId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Connectors_Name",
                table: "Connectors",
                column: "Name",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Connectors_SceneId",
                table: "Connectors",
                column: "SceneId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Connectors");

            migrationBuilder.AddColumn<long>(
                name: "DepartmentId",
                table: "Members",
                type: "bigint",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Members_DepartmentId",
                table: "Members",
                column: "DepartmentId");

            migrationBuilder.AddForeignKey(
                name: "FK_Members_Departments_DepartmentId",
                table: "Members",
                column: "DepartmentId",
                principalTable: "Departments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
