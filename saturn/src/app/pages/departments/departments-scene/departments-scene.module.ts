import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsSceneRoutingModule } from './departments-scene-routing.module';
import { DepartmentsSceneComponent } from './departments-scene.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsConnectorDepartmentTableModule } from 'src/app/components/components-connector-department-table/components-connector-department-table.module';
import { ComponentsScenesModule } from 'src/app/components/components-scenes/components-scenes.module';
import { DepartmentsConnectorsService } from 'src/app/services/departments-connectors.service';
import { ComponentsSceneItemModule } from 'src/app/components/components-scene-item/components-scene-item.module';
import { ComponentsCommonDialogModule } from 'src/app/components/components-common-dialog/components-common-dialog.module';
import { ConnectorSceneService } from 'src/app/services/connector-scene.service';
import { ComponentsScenesV2Module } from 'src/app/components/components-scenes-v2/components-scenes-v2.module';

@NgModule({
  declarations: [DepartmentsSceneComponent],
  imports: [
    CommonModule,
    DepartmentsSceneRoutingModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsConnectorDepartmentTableModule,
    ComponentsScenesModule,
    ComponentsSceneItemModule,
    ComponentsCommonDialogModule,
    ComponentsScenesV2Module,
  ],
  providers: [DepartmentsConnectorsService, ConnectorSceneService],
})
export class DepartmentsSceneModule {}
