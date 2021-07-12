import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MaterialsModule } from "src/app/materials.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { DepartmentsListCreateComponent } from "./departments-list-create.component";
import { DepartmentsListCreateRoutingModule } from "./departments-list-create-routing.module";

@NgModule({
  declarations: [DepartmentsListCreateComponent],
  imports: [
    CommonModule,
    DepartmentsListCreateRoutingModule,
    MaterialsModule,
    FlexLayoutModule,
  ],
})
export class DepartmentsListCreateModule {}
