import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProfileModule } from '../profile/profile.module';
import { TermsModule } from '../terms/terms.module';
import { SupportModule } from '../support/support.module';

import {DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileModule,
    TermsModule,
    NgbModule,
    SupportModule

  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
 
