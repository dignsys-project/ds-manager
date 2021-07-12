using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Prometheus.Migrations
{
    public partial class MEMBER_PERMISSIONS_DEPARTMENTS_TABLE_ADD : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DepartmentNodes_Departments_DepartmentId",
                table: "DepartmentNodes");

            migrationBuilder.DropColumn(
                name: "PermissionKind",
                table: "Members");

            migrationBuilder.AlterColumn<long>(
                name: "DepartmentId",
                table: "DepartmentNodes",
                nullable: false,
                oldClrType: typeof(long),
                oldType: "bigint",
                oldNullable: true);

            migrationBuilder.CreateTable(
                name: "MemberDepartments",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    MemberId = table.Column<long>(nullable: false),
                    DepartmentId = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MemberDepartments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MemberDepartments_Departments_DepartmentId",
                        column: x => x.DepartmentId,
                        principalTable: "Departments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MemberDepartments_Members_MemberId",
                        column: x => x.MemberId,
                        principalTable: "Members",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MemberPermissions",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    MemberId = table.Column<long>(nullable: false),
                    Permission = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MemberPermissions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MemberPermissions_Members_MemberId",
                        column: x => x.MemberId,
                        principalTable: "Members",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_MemberDepartments_DepartmentId",
                table: "MemberDepartments",
                column: "DepartmentId");

            migrationBuilder.CreateIndex(
                name: "IX_MemberDepartments_MemberId",
                table: "MemberDepartments",
                column: "MemberId");

            migrationBuilder.CreateIndex(
                name: "IX_MemberDepartments_MemberId_DepartmentId",
                table: "MemberDepartments",
                columns: new[] { "MemberId", "DepartmentId" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_MemberPermissions_MemberId",
                table: "MemberPermissions",
                column: "MemberId");

            migrationBuilder.CreateIndex(
                name: "IX_MemberPermissions_MemberId_Permission",
                table: "MemberPermissions",
                columns: new[] { "MemberId", "Permission" },
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_DepartmentNodes_Departments_DepartmentId",
                table: "DepartmentNodes",
                column: "DepartmentId",
                principalTable: "Departments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DepartmentNodes_Departments_DepartmentId",
                table: "DepartmentNodes");

            migrationBuilder.DropTable(
                name: "MemberDepartments");

            migrationBuilder.DropTable(
                name: "MemberPermissions");

            migrationBuilder.AddColumn<int>(
                name: "PermissionKind",
                table: "Members",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<long>(
                name: "DepartmentId",
                table: "DepartmentNodes",
                type: "bigint",
                nullable: true,
                oldClrType: typeof(long));

            migrationBuilder.AddForeignKey(
                name: "FK_DepartmentNodes_Departments_DepartmentId",
                table: "DepartmentNodes",
                column: "DepartmentId",
                principalTable: "Departments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
