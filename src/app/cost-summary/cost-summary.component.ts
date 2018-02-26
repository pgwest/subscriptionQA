import { Component, OnInit } from '@angular/core';

import { ServicesModule } from '../services/services.module';

import { costCalculations } from './costCalculations';

import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cost-summary',
  templateUrl: './cost-summary.component.html',
  styleUrls: ['./cost-summary.component.scss']
})
export class CostSummaryComponent implements OnInit {

  costs: costCalculations[] = [
      {
        name: "Hourly",
        price: 16.48
      },
      {
        name: "Weekly",
        price: 700
      },
      {
        name: "Monthly",
        price: 2900
      },
      {
        name: "Annual",
        price: 34800
      },
      {
        name: "Total",
        price: 5800
      }
    ];


    // <h3 ><b>Price: <strong>$5800</strong></b> (monthly)</h3>
    // <ul>
    //     <li><b><strong>$16.48</strong></b> Hourly Per Resource Equivalent</li>
    //     <li><b><strong>$2900</strong></b> Monthly Per Resource Equivalent</li>
    //     <li><b><strong>$34,800</strong></b> Annual Per Resource Equivalent</li>

  constructor() { }

  ngOnInit() {
  }

}
