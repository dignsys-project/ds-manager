import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DepartmentsListComponent } from "./departments-list.component";

const routes: Routes = [
  {
    path: "",
    component: DepartmentsListComponent,
    children: [
      {
        path: "",
        redirectTo: "common",
        pathMatch: "full",
      },
      {
        path: "common",
        loadChildren: () =>
          import(
            "./departments-list-common/departments-list-common.module"
          ).then((x) => x.DepartmentsListCommonModule),
      },
      {
        path: "create",
        loadChildren: () =>
          import(
            "./departments-list-create/departments-list-create.module"
          ).then((x) => x.DepartmentsListCreateModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentsListRoutingModule {}
