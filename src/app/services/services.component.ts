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

  constructor(private data: DataService) { }

  ngOnInit() {
    // this.data.currentMessage.subscribe(message => this.message = message);
    this.data.currentBillingFrequency.subscribe(frequency => this.frequency = frequency);
  }

  billingTimeframe(event: any){
    if(event.activeId == "ngb-tab-1"){
      // this.data.changeMessage("Test from service monthly");
      this.data.changeFrequency("monthly");
    }
    else{
      // this.data.changeMessage("Test from service weekly");
      this.data.changeFrequency("weekly");
    }
  }



}
