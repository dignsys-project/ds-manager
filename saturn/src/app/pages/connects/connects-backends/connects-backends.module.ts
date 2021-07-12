import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ConnectsBackendsRoutingModule } from "./connects-backends-routing.module";
import { ConnectsBackendsComponent } from "./connects-backends.component";
import { MaterialsModule } from "src/app/materials.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ConnectsBackendsService } from "./connects-backends.service";

@NgModule({
  declarations: [ConnectsBackendsComponent],
  imports: [
    CommonModule,
    ConnectsBackendsRoutingModule,
    MaterialsModule,
    FlexLayoutModule
  ],
  providers: [ConnectsBackendsService]
})
export class ConnectsBackendsModule {}
