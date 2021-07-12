import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccountsCommonComponent } from "./accounts-common.component";

const routes: Routes = [{ path: "", component: AccountsCommonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsCommonRoutingModule {}
