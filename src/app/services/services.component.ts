import { Component, OnInit } from '@angular/core';
import { ResourceSummaryComponent } from '../resource-summary/resource-summary.component';
import { CostSummaryComponent } from '../cost-summary/cost-summary.component';
import { PriceWizardComponent } from '../price-wizard/price-wizard.component';
import { FullServiceSummaryComponent } from '../full-service-summary/full-service-summary.component';

import {DataService} from '../data-service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  // message: string;
  frequency : string;
  completed : number;
  isWeekly: boolean;


  constructor(private data: DataService) {
    // this.completed = 0;
    this.isWeekly = false;
  }

  ngOnInit() {
    // this.data.currentMessage.subscribe(message => this.message = message);
    this.data.currentBillingFrequency.subscribe(frequency => {this.frequency = frequency; this.selectTab();});
    this.data.currentCompleted.subscribe(percentageCompleted => this.completed = percentageCompleted);
    // console.log(this.completed);
  }


  selectTab(){
    if (this.frequency == "weekly"){
      this.isWeekly = true;
    }
    else{
      this.isWeekly = false;
    }
  }

  // billingTimeframe(event: any){
  //   if(event.activeId == "ngb-tab-1"){
  //     // this.data.changeMessage("Test from service monthly");
  //     this.data.changeFrequency("monthly");
  //   }
  //   else{
  //     // this.data.changeMessage("Test from service weekly");
  //     this.data.changeFrequency("weekly");
  //   }
  // }
  billingTimeframe(){
    if(this.isWeekly){
      // this.data.changeMessage("Test from service monthly");
      this.isWeekly = false;
      this.data.changeFrequency("monthly");
    }
    else{
      this.isWeekly = true;
      // this.data.changeMessage("Test from service weekly");
      this.data.changeFrequency("weekly");
    }
  }



}
