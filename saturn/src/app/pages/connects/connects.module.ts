import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectsRoutingModule } from './connects-routing.module';
import { ConnectsComponent } from './connects.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ConnectsHeaderService } from './connects-header.service';

@NgModule({
  declarations: [ConnectsComponent],
  imports: [
    CommonModule,
    ConnectsRoutingModule,
    MaterialsModule,
    FlexLayoutModule,
    RouterModule,
  ],
  providers: [ConnectsHeaderService],
})
export class ConnectsModule {}
