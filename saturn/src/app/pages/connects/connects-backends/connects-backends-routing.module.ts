import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConnectsBackendsComponent } from "./connects-backends.component";

const routes: Routes = [{ path: "", component: ConnectsBackendsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectsBackendsRoutingModule {}
