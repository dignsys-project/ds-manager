import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ScenesCreateCanvasComponent } from "./scenes-create-canvas.component";

const routes: Routes = [{ path: "", component: ScenesCreateCanvasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScenesCreateCanvasRoutingModule {}
