import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsSceneComponent } from './departments-scene.component';

const routes: Routes = [{ path: '', component: DepartmentsSceneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentsSceneRoutingModule {}
