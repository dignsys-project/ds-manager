import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsEmergencyComponent } from './departments-emergency.component';

const routes: Routes = [{ path: '', component: DepartmentsEmergencyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentsEmergencyRoutingModule {}
