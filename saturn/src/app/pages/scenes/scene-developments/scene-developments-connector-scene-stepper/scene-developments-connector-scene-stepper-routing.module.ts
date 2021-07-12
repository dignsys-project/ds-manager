import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SceneDevelopmentsConnectorSceneStepperComponent } from './scene-developments-connector-scene-stepper.component';

const routes: Routes = [
  { path: '', component: SceneDevelopmentsConnectorSceneStepperComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SceneDevelopmentsConnectorSceneStepperRoutingModule {}
