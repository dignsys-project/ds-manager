import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DepartmentsListCommonRoutingModule } from "./departments-list-common-routing.module";
import { MaterialsModule } from "src/app/materials.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { DepartmentsListCommonComponent } from "./departments-list-common.component";

@NgModule({
  declarations: [DepartmentsListCommonComponent],
  imports: [
    CommonModule,
    DepartmentsListCommonRoutingModule,
    MaterialsModule,
    FlexLayoutModule,
  ],
})
export class DepartmentsListCommonModule {}
