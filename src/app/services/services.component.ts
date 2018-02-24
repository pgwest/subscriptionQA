import { Component, OnInit } from '@angular/core';
import { ResourceSummaryComponent } from '../resource-summary/resource-summary.component';
import { CostSummaryComponent } from '../cost-summary/cost-summary.component';
import { PriceWizardComponent } from '../price-wizard/price-wizard.component';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
