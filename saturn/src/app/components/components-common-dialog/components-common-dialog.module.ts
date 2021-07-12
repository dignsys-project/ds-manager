import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsCommonDialogComponent } from "./components-common-dialog.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialsModule } from "src/app/materials.module";

@NgModule({
  declarations: [ComponentsCommonDialogComponent],
  imports: [CommonModule, MaterialsModule, FlexLayoutModule],
  entryComponents: [ComponentsCommonDialogComponent],
})
export class ComponentsCommonDialogModule {}
