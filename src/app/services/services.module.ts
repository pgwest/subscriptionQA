import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { ResourceSummaryModule } from '../resource-summary/resource-summary.module';
import { CostSummaryModule } from '../cost-summary/cost-summary.module';
import { PriceWizardModule } from '../price-wizard/price-wizard.module';
import { FullServiceSummaryModule } from '../full-service-summary/full-service-summary.module';


import {ServicesComponent } from './services.component';


@NgModule({
  imports: [
    CommonModule,
    ResourceSummaryModule,
    CostSummaryModule,
    PriceWizardModule,
    NgbModule,
    FullServiceSummaryModule
  ],
  declarations: [ServicesComponent],
  exports: [ServicesComponent]
})
export class ServicesModule { }
