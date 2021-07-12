import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsMemberPermissionComponent } from "./components-member-permission.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialsModule } from "src/app/materials.module";

@NgModule({
  declarations: [ComponentsMemberPermissionComponent],
  imports: [CommonModule, MaterialsModule, FlexLayoutModule],
  exports: [ComponentsMemberPermissionComponent],
})
export class ComponentsMemberPermissionModule {}
