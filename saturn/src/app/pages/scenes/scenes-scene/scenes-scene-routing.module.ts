import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScenesSceneComponent } from './scenes-scene.component';

const routes: Routes = [{ path: '', component: ScenesSceneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScenesSceneRoutingModule {}
