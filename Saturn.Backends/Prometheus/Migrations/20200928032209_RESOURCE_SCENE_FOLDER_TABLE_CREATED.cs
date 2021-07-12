using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Prometheus.Migrations
{
    public partial class RESOURCE_SCENE_FOLDER_TABLE_CREATED : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<long>(
                name: "DepartmentSceneFolderId",
                table: "Scenes",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "DepartmentResourceFolderId",
                table: "Resources",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "Duration",
                table: "Resources",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.CreateTable(
                name: "DepartmentResourceFolders",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(maxLength: 20, nullable: false),
                    DepartmentId = table.Column<long>(nullable: false),
                    ParentDepartmentResourceFolderId = table.Column<long>(nullable: true),
                    CreatedSeconds = table.Column<long>(nullable: false),
                    Size = table.Column<long>(nullable: false, defaultValue: 0L)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DepartmentResourceFolders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DepartmentResourceFolders_Departments_DepartmentId",
                        column: x => x.DepartmentId,
                        principalTable: "Departments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DepartmentResourceFolders_DepartmentResourceFolders_ParentDe~",
                        column: x => x.ParentDepartmentResourceFolderId,
                        principalTable: "DepartmentResourceFolders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "DepartmentSceneFolders",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(maxLength: 20, nullable: false),
                    DepartmentId = table.Column<long>(nullable: false),
                    ParentDepartmentSceneFolderId = table.Column<long>(nullable: true),
                    CreatedSeconds = table.Column<long>(nullable: false),
                    Size = table.Column<long>(nullable: false, defaultValue: 0L)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DepartmentSceneFolders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DepartmentSceneFolders_Departments_DepartmentId",
                        column: x => x.DepartmentId,
                        principalTable: "Departments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DepartmentSceneFolders_DepartmentSceneFolders_ParentDepartme~",
                        column: x => x.ParentDepartmentSceneFolderId,
                        principalTable: "DepartmentSceneFolders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Scenes_DepartmentSceneFolderId",
                table: "Scenes",
                column: "DepartmentSceneFolderId");

            migrationBuilder.CreateIndex(
                name: "IX_Resources_DepartmentResourceFolderId",
                table: "Resources",
                column: "DepartmentResourceFolderId");

            migrationBuilder.CreateIndex(
                name: "IX_DepartmentResourceFolders_ParentDepartmentResourceFolderId",
                table: "DepartmentResourceFolders",
                column: "ParentDepartmentResourceFolderId");

            migrationBuilder.CreateIndex(
                name: "IX_DepartmentResourceFolders_DepartmentId_ParentDepartmentResou~",
                table: "DepartmentResourceFolders",
                columns: new[] { "DepartmentId", "ParentDepartmentResourceFolderId", "Name" },
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_DepartmentSceneFolders_ParentDepartmentSceneFolderId",
                table: "DepartmentSceneFolders",
                column: "ParentDepartmentSceneFolderId");

            migrationBuilder.CreateIndex(
                name: "IX_DepartmentSceneFolders_DepartmentId_ParentDepartmentSceneFol~",
                table: "DepartmentSceneFolders",
                columns: new[] { "DepartmentId", "ParentDepartmentSceneFolderId", "Name" },
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Resources_DepartmentResourceFolders_DepartmentResourceFolder~",
                table: "Resources",
                column: "DepartmentResourceFolderId",
                principalTable: "DepartmentResourceFolders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Scenes_DepartmentSceneFolders_DepartmentSceneFolderId",
                table: "Scenes",
                column: "DepartmentSceneFolderId",
                principalTable: "DepartmentSceneFolders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Resources_DepartmentResourceFolders_DepartmentResourceFolder~",
                table: "Resources");

            migrationBuilder.DropForeignKey(
                name: "FK_Scenes_DepartmentSceneFolders_DepartmentSceneFolderId",
                table: "Scenes");

            migrationBuilder.DropTable(
                name: "DepartmentResourceFolders");

            migrationBuilder.DropTable(
                name: "DepartmentSceneFolders");

            migrationBuilder.DropIndex(
                name: "IX_Scenes_DepartmentSceneFolderId",
                table: "Scenes");

            migrationBuilder.DropIndex(
                name: "IX_Resources_DepartmentResourceFolderId",
                table: "Resources");

            migrationBuilder.DropColumn(
                name: "DepartmentSceneFolderId",
                table: "Scenes");

            migrationBuilder.DropColumn(
                name: "DepartmentResourceFolderId",
                table: "Resources");

            migrationBuilder.DropColumn(
                name: "Duration",
                table: "Resources");
        }
    }
}
