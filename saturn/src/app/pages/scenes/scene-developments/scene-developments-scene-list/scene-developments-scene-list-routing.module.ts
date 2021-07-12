import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SceneDevelopmentsSceneListComponent } from './scene-developments-scene-list.component';

const routes: Routes = [
  { path: '', component: SceneDevelopmentsSceneListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SceneDevelopmentsSceneListRoutingModule {}
