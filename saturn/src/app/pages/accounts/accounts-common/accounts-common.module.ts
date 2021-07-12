import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AccountsCommonRoutingModule } from "./accounts-common-routing.module";
import { AccountsCommonComponent } from "./accounts-common.component";
import { MaterialsModule } from "src/app/materials.module";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [AccountsCommonComponent],
  imports: [
    CommonModule,
    AccountsCommonRoutingModule,
    MaterialsModule,
    FlexLayoutModule,
  ],
})
export class AccountsCommonModule {}
