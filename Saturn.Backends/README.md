- [Pre Build Event for Visual Studio](#pre-build-event-for-visual-studio)
- [Build and Test](#build-and-test)
- [Contribute](#contribute)
- [BUILD_RELEASE](#build_release)
  - [RELEASE SERVER](#release-server)
  - [SEJONG SERVER](#sejong-server)
  - [UPDATE](#update)
  - [DATABASE UPDATE](#database-update)
    - [2020.07.29](#20200729)

# Pre Build Event for Visual Studio

```xml
<Exec Command="$(SolutionDir)protos\protoc -I=$(SolutionDir)protos $(SolutionDir)protos\*.proto --csharp_out=$(SolutionDir)Saturn.BackEnds.Protocols" />
```

# Build and Test

1. compile protobuf
2. build

# Contribute

- .NET Core : 3.1.302
- Google Protobuf : 3.11.4

# BUILD_RELEASE

## RELEASE SERVER

| 날짜             | 버전       |
| ---------------- | ---------- |
| 2020.09.02 15:00 | 1.1.0902.1 |
| 2020.10.07 11:23 | 1.1.1007.2 |

## SEJONG SERVER

| 날짜             | 버전       |
| ---------------- | ---------- |
| 2020.09.02 15:00 | 1.1.0902.1 |

## UPDATE

- 1.1.0902.1
  - 시계 컴포넌트 추가.

## DATABASE UPDATE

### 2020.07.29

- **20200729062108_SCHEDULE_TABLE_ADD_COLUMNS_SCENE_NAME_HAS_INDEX, Designer**

  - Schedules TABLE
    - add column CreatedSeconds
    - add column UpdatedSeconds
  - Scenes TABLE
    - add index IX_Scenes_Name NAME column

* **20200812045704_DEPARTMENT_LOWERS_TABLE_ADDED, Desiginer**

  - DepartmentLowers TABLE added.

* **20200928032209_RESOURCE_SCENE_FOLDER_TABLE_CREATED, Designer**

  - DepartmentResourceFolders TABLE added.
  - DepartmentSceneFolders TABLE added.
  - Scenes TABLE
    - add column DepartmentSceneFolderId
    - add index IX_Scenes_DepartmentSceneFolderId
  - Resources TABLE
    - add column DepartmentResourceFolderId
    - add column Duration

* **20201014042850_SCENE_TABLE_ADD_COLUMN_ISVALIFIED, Designer**
  - Scenes TABLE
    - add property ResourceId nullable
    - add column IsValified
* **20201102063543_CONNECTOR_TABLE_ADD_COLUMNS_LAST_UPDATED_SECONDS_RESOURCE, Designer**
  - Connectors TABLE
    - add column LastUpdatedSeconds
    - add column ResourceId
* **20201105061951_CONNECTOR_TABLE_ADD_EMERGENCY, Designer**
  - Connectors TABLE
    - add column EmergencySceneId
    - add column IsEmergency
