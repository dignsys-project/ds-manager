import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccountsAuthorizeComponent } from "./accounts-authorize.component";

const routes: Routes = [{ path: "", component: AccountsAuthorizeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsAuthorizeRoutingModule {}
