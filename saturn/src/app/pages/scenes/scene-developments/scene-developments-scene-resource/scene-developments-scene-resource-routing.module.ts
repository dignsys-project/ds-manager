import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SceneDevelopmentsSceneResourceComponent } from './scene-developments-scene-resource.component';

const routes: Routes = [
  { path: '', component: SceneDevelopmentsSceneResourceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SceneDevelopmentsSceneResourceRoutingModule {}
