import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScenesRoutingModule } from './scenes-routing.module';
import { ScenesComponent } from './scenes.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScenesHeaderService } from './scenes-header.service';
import { ScenesLayoutService } from './scenes-layout.service';

@NgModule({
  declarations: [ScenesComponent],
  imports: [
    CommonModule,
    ScenesRoutingModule,
    MaterialsModule,
    FlexLayoutModule,
  ],
  providers: [ScenesHeaderService, ScenesLayoutService],
})
export class ScenesModule {}
