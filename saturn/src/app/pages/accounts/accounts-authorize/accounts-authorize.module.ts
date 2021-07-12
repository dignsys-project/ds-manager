import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsAuthorizeRoutingModule } from './accounts-authorize-routing.module';
import { AccountsAuthorizeComponent } from './accounts-authorize.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ComponentsCommonDialogModule } from 'src/app/components/components-common-dialog/components-common-dialog.module';

@NgModule({
  declarations: [AccountsAuthorizeComponent],
  imports: [
    CommonModule,
    AccountsAuthorizeRoutingModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsCommonDialogModule,
  ],
})
export class AccountsAuthorizeModule {}
