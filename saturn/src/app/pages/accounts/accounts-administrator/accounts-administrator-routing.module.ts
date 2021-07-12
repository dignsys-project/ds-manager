import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccountsAdministratorComponent } from "./accounts-administrator.component";

const routes: Routes = [
  { path: "", component: AccountsAdministratorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule {}
