import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsEmergencyRoutingModule } from './departments-emergency-routing.module';
import { DepartmentsEmergencyComponent } from './departments-emergency.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from 'src/app/materials.module';
import { ComponentsConnectorsSceneStepperModule } from 'src/app/components/components-connectors-scene-stepper/components-connectors-scene-stepper.module';

@NgModule({
  declarations: [DepartmentsEmergencyComponent],
  imports: [
    CommonModule,
    DepartmentsEmergencyRoutingModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsConnectorsSceneStepperModule,
  ],
})
export class DepartmentsEmergencyModule {}
