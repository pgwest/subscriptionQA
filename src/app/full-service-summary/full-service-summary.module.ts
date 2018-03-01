import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullServiceSummaryComponent } from './full-service-summary.component';
// import { CostSummaryComponent } from '../cost-summary/cost-summary.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FullServiceSummaryComponent],
  exports: [FullServiceSummaryComponent]
})
export class FullServiceSummaryModule { }
