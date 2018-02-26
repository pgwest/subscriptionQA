import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { TermsComponent } from '../terms/terms.component';

import { ResourceSummaryComponent } from '../resource-summary/resource-summary.component';
import { CostSummaryComponent } from '../cost-summary/cost-summary.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
