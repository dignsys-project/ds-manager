import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsConnectorsSceneStepperComponent } from './components-connectors-scene-stepper.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsConnectorDepartmentTableModule } from '../components-connector-department-table/components-connector-department-table.module';
import { ComponentsScenesV2Module } from '../components-scenes-v2/components-scenes-v2.module';

@NgModule({
  declarations: [ComponentsConnectorsSceneStepperComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsConnectorDepartmentTableModule,
    ComponentsScenesV2Module,
  ],
  exports: [ComponentsConnectorsSceneStepperComponent],
})
export class ComponentsConnectorsSceneStepperModule {}
