import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderSideComponent } from "./header-side.component";
import { MaterialsModule } from "../materials.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [HeaderSideComponent],
  imports: [CommonModule, MaterialsModule, FlexLayoutModule, RouterModule],
  exports: [HeaderSideComponent]
})
export class HeaderSideModule {}
