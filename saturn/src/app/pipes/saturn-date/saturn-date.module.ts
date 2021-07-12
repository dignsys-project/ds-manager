import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SaturnDatePipe } from './saturn-date.pipe';

@NgModule({
  declarations: [SaturnDatePipe],
  imports: [CommonModule],
  exports: [SaturnDatePipe],
  providers: [DatePipe],
})
export class SaturnDateModule {}
