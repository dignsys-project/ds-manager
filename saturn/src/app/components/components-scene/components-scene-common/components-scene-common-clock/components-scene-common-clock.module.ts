import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ComponentsSceneCommonClockComponent } from './components-scene-common-clock.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ComponentsSceneCommonClockComponent],
  imports: [CommonModule, MaterialsModule, FlexLayoutModule],
  providers: [DatePipe],
  exports: [ComponentsSceneCommonClockComponent],
})
export class ComponentsSceneCommonClockModule {}
