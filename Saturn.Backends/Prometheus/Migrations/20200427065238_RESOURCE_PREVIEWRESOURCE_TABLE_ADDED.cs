using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Prometheus.Migrations
{
    public partial class RESOURCE_PREVIEWRESOURCE_TABLE_ADDED : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PreviewResources",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Location = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PreviewResources", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Resources",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Kind = table.Column<int>(nullable: false),
                    Location = table.Column<string>(nullable: false),
                    Folder = table.Column<string>(maxLength: 256, nullable: false),
                    Name = table.Column<string>(maxLength: 256, nullable: false),
                    ContentType = table.Column<string>(maxLength: 256, nullable: false),
                    Hash = table.Column<byte[]>(nullable: false),
                    CreatedSeconds = table.Column<long>(nullable: false),
                    UpdateSeconds = table.Column<long>(nullable: false),
                    PreviewResourceId = table.Column<long>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Resources", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Resources_PreviewResources_PreviewResourceId",
                        column: x => x.PreviewResourceId,
                        principalTable: "PreviewResources",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Resources_Kind",
                table: "Resources",
                column: "Kind");

            migrationBuilder.CreateIndex(
                name: "IX_Resources_PreviewResourceId",
                table: "Resources",
                column: "PreviewResourceId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Resources");

            migrationBuilder.DropTable(
                name: "PreviewResources");
        }
    }
}
