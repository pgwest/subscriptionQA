import { Component, OnInit } from '@angular/core';

import { ServicesModule } from '../services/services.module';

import { resourceType } from './resourceType';

@Component({
  selector: 'app-resource-summary',
  templateUrl: './resource-summary.component.html',
  styleUrls: ['./resource-summary.component.scss']
})
export class ResourceSummaryComponent implements OnInit {

  resources: resourceType[] = [
      {
        name: "QA Resources : ",
        numberResources: 2
      },
      {
        name: "Dev Resources : ",
        numberResources: 0
      },
      {
        name: "Monitoring Resources : ",
        numberResources: 0
      }
    ];

      constructor() { }

      ngOnInit() {
      }

}
