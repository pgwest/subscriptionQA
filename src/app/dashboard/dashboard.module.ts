import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileModule } from '../profile/profile.module';
import { TermsModule } from '../terms/terms.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SupportModule } from '../support/support.module';

// import { RouterModule } from '@angular/router';
// import { BrowserModule } from '@angular/platform-browser';

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
