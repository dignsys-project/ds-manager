import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsRegisterComponent } from "./components-register.component";
import { MaterialsModule } from "src/app/materials.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ComponentsCommonDialogModule } from "../components-common-dialog/components-common-dialog.module";

@NgModule({
  declarations: [ComponentsRegisterComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsCommonDialogModule,
  ],
  exports: [ComponentsRegisterComponent],
})
export class ComponentsRegisterModule {}
