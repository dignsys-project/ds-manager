import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScenesListRoutingModule } from './scenes-list-routing.module';
import { ScenesListComponent } from './scenes-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from 'src/app/materials.module';
import { ComponentsScenesModule } from 'src/app/components/components-scenes/components-scenes.module';
import { ComponentsSceneDialogModule } from 'src/app/components/components-scene-dialog/components-scene-dialog.module';

@NgModule({
  declarations: [ScenesListComponent],
  imports: [
    CommonModule,
    ScenesListRoutingModule,
    FlexLayoutModule,
    MaterialsModule,
    ComponentsScenesModule,
    ComponentsSceneDialogModule,
  ],
})
export class ScenesListModule {}
