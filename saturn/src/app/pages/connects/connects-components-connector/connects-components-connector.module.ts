import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectsComponentsConnectorComponent } from './connects-components-connector.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ConnectsComponentsConnectorComponent],
  imports: [CommonModule, MaterialsModule, FlexLayoutModule],
  exports: [ConnectsComponentsConnectorComponent],
})
export class ConnectsComponentsConnectorModule {}
