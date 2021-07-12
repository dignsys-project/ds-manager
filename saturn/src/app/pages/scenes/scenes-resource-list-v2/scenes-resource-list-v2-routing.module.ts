import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScenesResourceListV2Component } from './scenes-resource-list-v2.component';

const routes: Routes = [{ path: '', component: ScenesResourceListV2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScenesResourceListV2RoutingModule {}
