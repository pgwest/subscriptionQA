import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { TermsComponent } from '../terms/terms.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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
  isWeekly: boolean;
  billingEmail: string;
  closeResult: string;


  constructor(private data : DataService, public authService: AuthService, private modalService: NgbModal) {
    this.isWeekly = false;
   }


  ngOnInit() {
    this.data.currentQuestions.subscribe(questions => {this.questions = questions;});
    this.data.currentBillingFrequency.subscribe(frequency => {this.frequency = frequency; this.selectTab();});
    this.data.currentBillingEmail.subscribe(billingEmail => {this.billingEmail = billingEmail;});

  }

  selectTab(){
    if (this.frequency == "weekly"){
      this.isWeekly = true;
    }
    else{
      this.isWeekly = false;
    }
  }

  billingTimeframe(){
    if(this.isWeekly){
      // this.data.changeMessage("Test from service monthly");
      this.isWeekly = false;
      this.data.changeFrequency("monthly");
      this.authService.updateUserData();
    }
    else{
      this.isWeekly = true;
      // this.data.changeMessage("Test from service weekly");
      this.data.changeFrequency("weekly");
      this.authService.updateUserData();
    }
  }

  saveEmail(){
    this.data.changeBillingEmail(this.billingEmail);
    this.authService.updateUserData();
  }

  open(content, type) {
      if (type === 'sm') {
          // console.log('aici');
          this.modalService.open(content, { size: 'sm' }).result.then((result) => {
              this.closeResult = `Closed with: ${result}`;
          }, (reason) => {
              this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
      } else {
          this.modalService.open(content).result.then((result) => {
              this.closeResult = `Closed with: ${result}`;
          }, (reason) => {
              this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
      }
  }

  private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
      } else {
          return  `with: ${reason}`;
      }
  }

}
