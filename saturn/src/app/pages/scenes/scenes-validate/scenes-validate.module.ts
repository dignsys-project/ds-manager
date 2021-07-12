import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScenesValidateRoutingModule } from './scenes-validate-routing.module';
import { ScenesValidateComponent } from './scenes-validate.component';
import { MaterialsModule } from 'src/app/materials.module';
import { ComponentsSceneItemModule } from 'src/app/components/components-scene-item/components-scene-item.module';

@NgModule({
  declarations: [ScenesValidateComponent],
  imports: [
    CommonModule,
    ScenesValidateRoutingModule,
    MaterialsModule,
    ComponentsSceneItemModule,
  ],
})
export class ScenesValidateModule {}
