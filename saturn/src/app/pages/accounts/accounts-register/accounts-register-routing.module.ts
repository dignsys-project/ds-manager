import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccountsRegisterComponent } from "./accounts-register.component";

const routes: Routes = [{ path: "", component: AccountsRegisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsRegisterRoutingModule {}
