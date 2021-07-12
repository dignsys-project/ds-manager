import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MaterialsModule } from "src/app/materials.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ComponentsDepartmentsTreeV2Module } from "src/app/components/components-departments-tree-v2/components-departments-tree-v2.module";
import { DepartmentsListService } from "./departments-list.service";
import { DepartmentsListComponent } from "./departments-list.component";
import { DepartmentsListRoutingModule } from "./departments-list-routing.module";

@NgModule({
  declarations: [DepartmentsListComponent],
  imports: [
    CommonModule,
    DepartmentsListRoutingModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsDepartmentsTreeV2Module,
  ],
  providers: [DepartmentsListService],
})
export class DepartmentListModule {}
