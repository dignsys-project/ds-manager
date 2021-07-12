import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SceneDevelopmentsComponentsSubtitleComponent } from './scene-developments-components-subtitle.component';

const routes: Routes = [
  { path: '', component: SceneDevelopmentsComponentsSubtitleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SceneDevelopmentsComponentsSubtitleRoutingModule {}
