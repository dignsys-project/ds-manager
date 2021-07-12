import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AccountsRoutingModule } from "./accounts-routing.module";
import { AccountsComponent } from "./accounts.component";
import { MaterialsModule } from "src/app/materials.module";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [AccountsComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    MaterialsModule,
    FlexLayoutModule,
  ],
})
export class AccountsModule {}
