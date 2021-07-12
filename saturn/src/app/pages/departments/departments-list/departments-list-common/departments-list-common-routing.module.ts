import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DepartmentsListCommonComponent } from "./departments-list-common.component";

const routes: Routes = [
  { path: "", component: DepartmentsListCommonComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentsListCommonRoutingModule {}
