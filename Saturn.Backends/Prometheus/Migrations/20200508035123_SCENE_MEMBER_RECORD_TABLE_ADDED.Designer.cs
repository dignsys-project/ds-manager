﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Prometheus.Databases;

namespace Prometheus.Migrations
{
    [DbContext(typeof(DatabaseDbContext))]
    [Migration("20200508035123_SCENE_MEMBER_RECORD_TABLE_ADDED")]
    partial class SCENE_MEMBER_RECORD_TABLE_ADDED
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("Prometheus.Models.Databases.Department", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    b.Property<long>("CreatedSeconds")
                        .HasColumnType("bigint");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("varchar(20) CHARACTER SET utf8mb4")
                        .HasMaxLength(20);

                    b.HasKey("Id");

                    b.HasIndex("Name")
                        .IsUnique();

                    b.ToTable("Departments");
                });

            modelBuilder.Entity("Prometheus.Models.Databases.DepartmentNode", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    b.Property<long>("DepartmentId")
                        .HasColumnType("bigint");

                    b.Property<long?>("Order")
                        .HasColumnType("bigint");

                    b.Property<long?>("ParentDepartmentNodeId")
                        .HasColumnType("bigint");

                    b.HasKey("Id");

                    b.HasIndex("DepartmentId");

                    b.ToTable("DepartmentNodes");
                });

            modelBuilder.Entity("Prometheus.Models.Databases.Member", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    b.Property<long>("CreatedSeconds")
                        .HasColumnType("bigint");

                    b.Property<long?>("DepartmentId")
                        .HasColumnType("bigint");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("varchar(50) CHARACTER SET utf8mb4")
                        .HasMaxLength(50);

                    b.Property<long>("LastConnectedSeconds")
                        .HasColumnType("bigint");

                    b.Property<int>("MemberKind")
                        .HasColumnType("int");

                    b.Property<string>("PasswordHash")
                        .IsRequired()
                        .HasColumnType("varchar(512) CHARACTER SET utf8mb4")
                        .HasMaxLength(512);

                    b.Property<string>("PasswordSalt")
                        .IsRequired()
                        .HasColumnType("varchar(512) CHARACTER SET utf8mb4")
                        .HasMaxLength(512);

                    b.Property<int>("RegisterKind")
                        .HasColumnType("int");

                    b.Property<Guid>("Uuid")
                        .HasColumnType("char(36)");

                    b.HasKey("Id");

                    b.HasIndex("DepartmentId");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.HasIndex("Uuid");

                    b.ToTable("Members");
                });

            modelBuilder.Entity("Prometheus.Models.Databases.MemberDepartment", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    b.Property<long>("DepartmentId")
                        .HasColumnType("bigint");

                    b.Property<long>("MemberId")
                        .HasColumnType("bigint");

                    b.HasKey("Id");

                    b.HasIndex("DepartmentId");

                    b.HasIndex("MemberId");

                    b.HasIndex("MemberId", "DepartmentId")
                        .IsUnique();

                    b.ToTable("MemberDepartments");
                });

            modelBuilder.Entity("Prometheus.Models.Databases.MemberPermission", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    b.Property<long>("MemberId")
                        .HasColumnType("bigint");

                    b.Property<int>("Permission")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("MemberId");

                    b.HasIndex("MemberId", "Permission")
                        .IsUnique();

                    b.ToTable("MemberPermissions");
                });

            modelBuilder.Entity("Prometheus.Models.Databases.MemberRecord", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    b.Property<long>("BehaviorSeconds")
                        .HasColumnType("bigint");

                    b.Property<long>("MemberId")
                        .HasColumnType("bigint");

                    b.Property<string>("SerializedParamater")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("Id");

                    b.HasIndex("MemberId");

                    b.ToTable("MemberRecords");
                });

            modelBuilder.Entity("Prometheus.Models.Databases.PreviewResource", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    b.Property<string>("Location")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("Id");

                    b.ToTable("PreviewResources");
                });

            modelBuilder.Entity("Prometheus.Models.Databases.Resource", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    b.Property<string>("ContentType")
                        .IsRequired()
                        .HasColumnType("varchar(256) CHARACTER SET utf8mb4")
                        .HasMaxLength(256);

                    b.Property<long>("CreatedSeconds")
                        .HasColumnType("bigint");

                    b.Property<string>("Folder")
                        .IsRequired()
                        .HasColumnType("varchar(256) CHARACTER SET utf8mb4")
                        .HasMaxLength(256);

                    b.Property<byte[]>("Hash")
                        .IsRequired()
                        .HasColumnType("longblob");

                    b.Property<int>("Kind")
                        .HasColumnType("int");

                    b.Property<string>("Location")
                        .IsRequired()
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("varchar(256) CHARACTER SET utf8mb4")
                        .HasMaxLength(256);

                    b.Property<long?>("PreviewResourceId")
                        .HasColumnType("bigint");

                    b.Property<long>("UpdateSeconds")
                        .HasColumnType("bigint");

                    b.HasKey("Id");

                    b.HasIndex("Kind");

                    b.HasIndex("PreviewResourceId");

                    b.ToTable("Resources");
                });

            modelBuilder.Entity("Prometheus.Models.Databases.Scene", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    b.Property<long>("CreatedSeconds")
                        .HasColumnType("bigint");

                    b.Property<long>("ResourceId")
                        .HasColumnType("bigint");

                    b.HasKey("Id");

                    b.HasIndex("ResourceId");

                    b.ToTable("Scenes");
                });

            modelBuilder.Entity("Prometheus.Models.Databases.DepartmentNode", b =>
                {
                    b.HasOne("Prometheus.Models.Databases.Department", "Department")
                        .WithMany()
                        .HasForeignKey("DepartmentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Prometheus.Models.Databases.Member", b =>
                {
                    b.HasOne("Prometheus.Models.Databases.Department", null)
                        .WithMany("Members")
                        .HasForeignKey("DepartmentId");
                });

            modelBuilder.Entity("Prometheus.Models.Databases.MemberDepartment", b =>
                {
                    b.HasOne("Prometheus.Models.Databases.Department", "Department")
                        .WithMany()
                        .HasForeignKey("DepartmentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Prometheus.Models.Databases.Member", "Member")
                        .WithMany("MemberDepartments")
                        .HasForeignKey("MemberId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Prometheus.Models.Databases.MemberPermission", b =>
                {
                    b.HasOne("Prometheus.Models.Databases.Member", "Member")
                        .WithMany("MemberPermissions")
                        .HasForeignKey("MemberId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Prometheus.Models.Databases.MemberRecord", b =>
                {
                    b.HasOne("Prometheus.Models.Databases.Member", "Member")
                        .WithMany()
                        .HasForeignKey("MemberId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Prometheus.Models.Databases.Resource", b =>
                {
                    b.HasOne("Prometheus.Models.Databases.PreviewResource", "PreviewResource")
                        .WithMany()
                        .HasForeignKey("PreviewResourceId");
                });

            modelBuilder.Entity("Prometheus.Models.Databases.Scene", b =>
                {
                    b.HasOne("Prometheus.Models.Databases.Resource", "Resource")
                        .WithMany()
                        .HasForeignKey("ResourceId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
