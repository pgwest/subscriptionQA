import { Component, OnInit } from '@angular/core';

import { DashboardModule } from '../dashboard/dashboard.module';


import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { DataService } from '../data-service.service';
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  isAccepted : boolean;

  constructor(private data : DataService, public authService: AuthService) {
    this.isAccepted = false;
  }

  ngOnInit() {
    this.data.currentTermsAccepted.subscribe(termsAccepted => {this.isAccepted = termsAccepted;});
  }

  acceptTerms(){
    this.isAccepted = true;
    this.data.changeTermsAccepted(this.isAccepted);
    this.authService.updateUserData();
  }


}
