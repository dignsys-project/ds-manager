import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsResourcesCreateElementComponent } from './components-resources-create-element.component';
import { NgxFilesizeModule } from 'ngx-filesize';

@NgModule({
  declarations: [ComponentsResourcesCreateElementComponent],
  imports: [CommonModule, MaterialsModule, FlexLayoutModule, NgxFilesizeModule],
  exports: [ComponentsResourcesCreateElementComponent],
})
export class ComponentsResourcesCreateElementModule {}
