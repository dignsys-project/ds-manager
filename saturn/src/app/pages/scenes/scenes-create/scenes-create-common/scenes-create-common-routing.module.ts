import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ScenesCreateCommonComponent } from "./scenes-create-common.component";

const routes: Routes = [{ path: "", component: ScenesCreateCommonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScenesCreateCommonRoutingModule {}
