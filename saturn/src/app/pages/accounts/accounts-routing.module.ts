import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccountsComponent } from "./accounts.component";

const routes: Routes = [
  {
    path: "",
    component: AccountsComponent,
    children: [
      {
        path: "",
        redirectTo: "authorize",
        pathMatch: "full",
      },
      {
        path: "common",
        loadChildren: () =>
          import("./accounts-common/accounts-common.module").then(
            (x) => x.AccountsCommonModule
          ),
      },
      {
        path: "register",
        loadChildren: () =>
          import("./accounts-register/accounts-register.module").then(
            (x) => x.AccountsRegisterModule
          ),
      },
      {
        path: "authorize",
        loadChildren: () =>
          import("./accounts-authorize/accounts-authorize.module").then(
            (x) => x.AccountsAuthorizeModule
          ),
      },
      {
        path: "administrator",
        loadChildren: () =>
          import("./accounts-administrator/accounts-administrator.module").then(
            (x) => x.AdministratorModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule {}
