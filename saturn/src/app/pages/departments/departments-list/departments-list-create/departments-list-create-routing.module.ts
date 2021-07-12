import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DepartmentsListCreateComponent } from "./departments-list-create.component";

const routes: Routes = [
  { path: "", component: DepartmentsListCreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentsListCreateRoutingModule {}
