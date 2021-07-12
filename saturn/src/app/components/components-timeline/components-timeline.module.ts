import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsTimelineComponent } from './components-timeline.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MemberRecordService } from 'src/app/services/member-record.service';
import { SaturnDateModule } from 'src/app/pipes/saturn-date/saturn-date.module';

@NgModule({
  declarations: [ComponentsTimelineComponent],
  imports: [CommonModule, MaterialsModule, FlexLayoutModule, SaturnDateModule],
  exports: [ComponentsTimelineComponent],
  providers: [MemberRecordService],
})
export class ComponentsTimelineModule {}
