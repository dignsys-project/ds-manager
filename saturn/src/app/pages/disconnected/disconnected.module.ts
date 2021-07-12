import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisconnectedRoutingModule } from './disconnected-routing.module';
import { DisconnectedComponent } from './disconnected.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [DisconnectedComponent],
  imports: [
    CommonModule,
    DisconnectedRoutingModule,
    MaterialsModule,
    FlexLayoutModule,
  ],
})
export class DisconnectedModule {}
