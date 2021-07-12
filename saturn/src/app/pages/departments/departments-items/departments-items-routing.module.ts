import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DepartmentsItemsComponent } from "./departments-items.component";

const routes: Routes = [{ path: "", component: DepartmentsItemsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentsItemsRoutingModule {}
