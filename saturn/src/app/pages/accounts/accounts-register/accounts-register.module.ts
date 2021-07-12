import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AccountsRegisterRoutingModule } from "./accounts-register-routing.module";
import { AccountsRegisterComponent } from "./accounts-register.component";
import { MaterialsModule } from "src/app/materials.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ComponentsRegisterModule } from "src/app/components/components-register/components-register.module";

@NgModule({
  declarations: [AccountsRegisterComponent],
  imports: [
    CommonModule,
    AccountsRegisterRoutingModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsRegisterModule,
  ],
})
export class AccountsRegisterModule {}
