import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CostSummaryComponent } from '../cost-summary/cost-summary.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CostSummaryComponent],
  exports: [CostSummaryComponent]
})
export class CostSummaryModule { }
