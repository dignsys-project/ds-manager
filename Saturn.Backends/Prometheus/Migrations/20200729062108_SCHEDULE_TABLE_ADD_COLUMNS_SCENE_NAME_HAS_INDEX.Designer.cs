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
    [Migration("20200729062108_SCHEDULE_TABLE_ADD_COLUMNS_SCENE_NAME_HAS_INDEX")]
    partial class SCHEDULE_TABLE_ADD_COLUMNS_SCENE_NAME_HAS_INDEX
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("Prometheus.Models.Databases.Connector", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    b.Property<long>("CreatedSeconds")
                        .HasColumnType("bigint");

                    b.Property<long?>("DepartmentId")
                        .HasColumnType("bigint");

                    b.Property<string>("DeviceId")
                        .IsRequired()
                        .HasColumnType("varchar(256) CHARACTER SET utf8mb4")
                        .HasMaxLength(256);

                    b.Property<int>("Kind")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("varchar(50) CHARACTER SET utf8mb4")
                        .HasMaxLength(50);

                    b.Property<long?>("SceneId")
                        .HasColumnType("bigint");

                    b.HasKey("Id");

                    b.HasIndex("DepartmentId");

                    b.HasIndex("DeviceId")
                        .IsUnique();

                    b.HasIndex("Kind");

                    b.HasIndex("Name")
                        .IsUnique();

                    b.HasIndex("SceneId");

                    b.ToTable("Connectors");
                });

            modelBuilder.Entity("Prometheus.Models.Databases.ConnectorScheduleScene", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    b.Property<long>("ConnectorId")
                        .HasColumnType("bigint");

                    b.Property<long>("CreatedSeconds")
                        .HasColumnType("bigint");

                    b.Property<long>("ScheduleSceneId")
                        .HasColumnType("bigint");

                    b.Property<long>("UpdatedSceonds")
                        .HasColumnType("bigint");

                    b.HasKey("Id");

                    b.HasIndex("ScheduleSceneId");

                    b.HasIndex("ConnectorId", "ScheduleSceneId")
                        .IsUnique();

                    b.ToTable("ConnectorScheduleScenes");
                });

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

                    b.Property<int>("kind")
                        .HasColumnType("int");

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

                    b.Property<long>("Size")
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

                    b.Property<long>("Height")
                        .HasColumnType("bigint");

                    b.Property<string>("Name")
                        .HasColumnType("varchar(100) CHARACTER SET utf8mb4")
                        .HasMaxLength(100);

                    b.Property<long>("ResourceId")
                        .HasColumnType("bigint");

                    b.Property<long>("UpdatedSeconds")
                        .HasColumnType("bigint");

                    b.Property<long>("Width")
                        .HasColumnType("bigint");

                    b.HasKey("Id");

                    b.HasIndex("Name")
                        .IsUnique();

                    b.HasIndex("ResourceId");

                    b.ToTable("Scenes");
                });

            modelBuilder.Entity("Prometheus.Models.Databases.SceneConnection", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    b.Property<long>("ConnectedSceneId")
                        .HasColumnType("bigint");

                    b.Property<long>("SceneId")
                        .HasColumnType("bigint");

                    b.HasKey("Id");

                    b.HasIndex("ConnectedSceneId");

                    b.HasIndex("SceneId");

                    b.ToTable("SceneConnections");
                });

            modelBuilder.Entity("Prometheus.Models.Databases.SceneResource", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    b.Property<long>("ResourceId")
                        .HasColumnType("bigint");

                    b.Property<long>("SceneId")
                        .HasColumnType("bigint");

                    b.HasKey("Id");

                    b.HasIndex("ResourceId");

                    b.HasIndex("SceneId");

                    b.ToTable("SceneResources");
                });

            modelBuilder.Entity("Prometheus.Models.Databases.Schedule", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    b.Property<long>("CreatedSeconds")
                        .HasColumnType("bigint");

                    b.Property<long?>("EndDateSeconds")
                        .HasColumnType("bigint");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("varchar(50) CHARACTER SET utf8mb4")
                        .HasMaxLength(50);

                    b.Property<long?>("StartDateSeconds")
                        .HasColumnType("bigint");

                    b.Property<long>("UpdateSeconds")
                        .HasColumnType("bigint");

                    b.Property<bool>("UseDate")
                        .HasColumnType("tinyint(1)");

                    b.Property<string>("WeekSerialized")
                        .HasColumnType("longtext CHARACTER SET utf8mb4");

                    b.HasKey("Id");

                    b.ToTable("Schedules");
                });

            modelBuilder.Entity("Prometheus.Models.Databases.ScheduleScene", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    b.Property<long>("CreatedSeconds")
                        .HasColumnType("bigint");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("varchar(30) CHARACTER SET utf8mb4")
                        .HasMaxLength(30);

                    b.Property<long>("SceneId")
                        .HasColumnType("bigint");

                    b.Property<long>("ScheduleId")
                        .HasColumnType("bigint");

                    b.Property<long>("UpdatedSceonds")
                        .HasColumnType("bigint");

                    b.HasKey("Id");

                    b.HasIndex("SceneId");

                    b.HasIndex("ScheduleId");

                    b.ToTable("ScheduleScenes");
                });

            modelBuilder.Entity("Prometheus.Models.Databases.Connector", b =>
                {
                    b.HasOne("Prometheus.Models.Databases.Department", "Department")
                        .WithMany("Connectors")
                        .HasForeignKey("DepartmentId");

                    b.HasOne("Prometheus.Models.Databases.Scene", "Scene")
                        .WithMany()
                        .HasForeignKey("SceneId");
                });

            modelBuilder.Entity("Prometheus.Models.Databases.ConnectorScheduleScene", b =>
                {
                    b.HasOne("Prometheus.Models.Databases.Connector", "Connector")
                        .WithMany("Schedules")
                        .HasForeignKey("ConnectorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Prometheus.Models.Databases.ScheduleScene", "ScheduleScene")
                        .WithMany()
                        .HasForeignKey("ScheduleSceneId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Prometheus.Models.Databases.DepartmentNode", b =>
                {
                    b.HasOne("Prometheus.Models.Databases.Department", "Department")
                        .WithMany()
                        .HasForeignKey("DepartmentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Prometheus.Models.Databases.MemberDepartment", b =>
                {
                    b.HasOne("Prometheus.Models.Databases.Department", "Department")
                        .WithMany("MemberDepartments")
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

            modelBuilder.Entity("Prometheus.Models.Databases.SceneConnection", b =>
                {
                    b.HasOne("Prometheus.Models.Databases.Scene", "ConnectedScene")
                        .WithMany()
                        .HasForeignKey("ConnectedSceneId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Prometheus.Models.Databases.Scene", "Scene")
                        .WithMany("SceneConnections")
                        .HasForeignKey("SceneId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Prometheus.Models.Databases.SceneResource", b =>
                {
                    b.HasOne("Prometheus.Models.Databases.Resource", "Resource")
                        .WithMany()
                        .HasForeignKey("ResourceId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Prometheus.Models.Databases.Scene", "Scene")
                        .WithMany("SceneResources")
                        .HasForeignKey("SceneId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Prometheus.Models.Databases.ScheduleScene", b =>
                {
                    b.HasOne("Prometheus.Models.Databases.Scene", "Scene")
                        .WithMany()
                        .HasForeignKey("SceneId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Prometheus.Models.Databases.Schedule", "Schedule")
                        .WithMany()
                        .HasForeignKey("ScheduleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
