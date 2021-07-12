import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from 'src/app/materials.module';
import { ComponentsResourcesCreateV2Component } from './components-resources-create-v2.component';
import { NgxFilesizeModule } from 'ngx-filesize';
import { ComponentsResourcesCreateDragDropDirective } from './components-resources-create-drag-drop.directive';
import { ComponentsResourcesCreateElementModule } from '../components-resources-create-element/components-resources-create-element.module';

@NgModule({
  declarations: [
    ComponentsResourcesCreateV2Component,
    ComponentsResourcesCreateDragDropDirective,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialsModule,
    NgxFilesizeModule,
    ComponentsResourcesCreateElementModule,
  ],
  exports: [ComponentsResourcesCreateV2Component],
})
export class ComponentsResourcesCreateV2Module {}
