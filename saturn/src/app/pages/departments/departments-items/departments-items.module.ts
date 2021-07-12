import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DepartmentsItemsRoutingModule } from "./departments-items-routing.module";
import { DepartmentsItemsComponent } from "./departments-items.component";
import { MaterialsModule } from "src/app/materials.module";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [DepartmentsItemsComponent],
  imports: [
    CommonModule,
    DepartmentsItemsRoutingModule,
    MaterialsModule,
    FlexLayoutModule,
  ],
})
export class DepartmentsItemsModule {}
