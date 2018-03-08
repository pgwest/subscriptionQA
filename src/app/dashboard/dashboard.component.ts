import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { TermsComponent } from '../terms/terms.component';

import { ResourceSummaryComponent } from '../resource-summary/resource-summary.component';
import { CostSummaryComponent } from '../cost-summary/cost-summary.component';
import { FullServiceSummaryComponent } from '../full-service-summary/full-service-summary.component';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { DataService } from '../data-service.service';
import {AuthService} from '../auth.service';

import { Question } from '../price-wizard/question';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  questions: Question[] = [];
  frequency: string;

  constructor(private data : DataService, public authService: AuthService) { }


  ngOnInit() {
    this.data.currentQuestions.subscribe(questions => {this.questions = questions;});
    this.data.currentBillingFrequency.subscribe(frequency => {this.frequency = frequency;});

  }

}
