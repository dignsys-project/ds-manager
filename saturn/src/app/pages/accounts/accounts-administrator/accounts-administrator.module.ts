import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdministratorRoutingModule } from "./accounts-administrator-routing.module";
import { AccountsAdministratorComponent } from "./accounts-administrator.component";
import { MaterialsModule } from "src/app/materials.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ComponentsRegisterModule } from "src/app/components/components-register/components-register.module";

@NgModule({
  declarations: [AccountsAdministratorComponent],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsRegisterModule
  ]
})
export class AdministratorModule {}
