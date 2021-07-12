import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneDevelopmentsConnectorSceneStepperRoutingModule } from './scene-developments-connector-scene-stepper-routing.module';
import { SceneDevelopmentsConnectorSceneStepperComponent } from './scene-developments-connector-scene-stepper.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from 'src/app/materials.module';
import { ComponentsConnectorsSceneStepperModule } from 'src/app/components/components-connectors-scene-stepper/components-connectors-scene-stepper.module';
import { ComponentsDepartmentFolderTreeModule } from 'src/app/components/components-department-folder-tree/components-department-folder-tree.module';
import { ComponentsDepartmentsTreeV2Module } from 'src/app/components/components-departments-tree-v2/components-departments-tree-v2.module';
import { DepartmentsService } from 'src/app/pages/departments/departments.service';
import { ConnectorsService } from 'src/app/services/connectors.service';

@NgModule({
  declarations: [SceneDevelopmentsConnectorSceneStepperComponent],
  imports: [
    CommonModule,
    SceneDevelopmentsConnectorSceneStepperRoutingModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsConnectorsSceneStepperModule,
    ComponentsDepartmentFolderTreeModule,
    ComponentsDepartmentsTreeV2Module,
  ],
  providers: [DepartmentsService, ConnectorsService],
})
export class SceneDevelopmentsConnectorSceneStepperModule {}
