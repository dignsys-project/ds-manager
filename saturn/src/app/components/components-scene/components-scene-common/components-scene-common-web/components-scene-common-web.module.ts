import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsSceneCommonWebComponent } from './components-scene-common-web.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from 'src/app/materials.module';
import { SafePipe } from 'src/app/pipes/safe/safe.pipe';
import { SafeModule } from 'src/app/pipes/safe/safe.module';

@NgModule({
  declarations: [ComponentsSceneCommonWebComponent],
  imports: [CommonModule, MaterialsModule, FlexLayoutModule, SafeModule],
  exports: [ComponentsSceneCommonWebComponent],
})
export class ComponentsSceneCommonWebModule {}
