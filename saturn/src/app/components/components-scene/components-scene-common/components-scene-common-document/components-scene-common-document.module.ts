import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsSceneCommonDocumentComponent } from './components-scene-common-document.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [ComponentsSceneCommonDocumentComponent],
  imports: [CommonModule, MaterialsModule, FlexLayoutModule, PdfViewerModule],
  exports: [ComponentsSceneCommonDocumentComponent],
})
export class ComponentsSceneCommonDocumentModule {}
