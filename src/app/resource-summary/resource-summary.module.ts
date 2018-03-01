import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourceSummaryComponent } from '../resource-summary/resource-summary.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ResourceSummaryComponent],
  exports: [ResourceSummaryComponent]
})
export class ResourceSummaryModule { }
