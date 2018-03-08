import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProfileModule } from '../profile/profile.module';
import { TermsModule } from '../terms/terms.module';
import { SupportModule } from '../support/support.module';

import { ResourceSummaryModule } from '../resource-summary/resource-summary.module';
import { CostSummaryModule } from '../cost-summary/cost-summary.module';
import { FullServiceSummaryModule } from '../full-service-summary/full-service-summary.module';


import {DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileModule,
    TermsModule,
    NgbModule,
    SupportModule,
    ResourceSummaryModule,
    CostSummaryModule,
    FullServiceSummaryModule

  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
