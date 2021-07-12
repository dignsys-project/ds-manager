import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisconnectedComponent } from './disconnected.component';

const routes: Routes = [{ path: '', component: DisconnectedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisconnectedRoutingModule {}
