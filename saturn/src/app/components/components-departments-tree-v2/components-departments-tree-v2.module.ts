import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsDepartmentsTreeV2Component } from "./components-departments-tree-v2.component";
import { MaterialsModule } from "src/app/materials.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ComponentsCommonDialogModule } from "../components-common-dialog/components-common-dialog.module";
import { DepartmentsListService } from "src/app/pages/departments/departments-list/departments-list.service";

@NgModule({
  declarations: [ComponentsDepartmentsTreeV2Component],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    DragDropModule,
    ComponentsCommonDialogModule,
  ],
  exports: [ComponentsDepartmentsTreeV2Component],
  providers: [DepartmentsListService],
})
export class ComponentsDepartmentsTreeV2Module {}
