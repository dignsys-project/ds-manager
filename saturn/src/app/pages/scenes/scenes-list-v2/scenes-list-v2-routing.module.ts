import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScenesListV2Component } from './scenes-list-v2.component';

const routes: Routes = [{ path: '', component: ScenesListV2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScenesListV2RoutingModule {}
