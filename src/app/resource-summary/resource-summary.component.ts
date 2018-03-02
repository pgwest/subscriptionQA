import { Component, OnInit } from '@angular/core';

import { ServicesModule } from '../services/services.module';

import { resourceType } from './resourceType';

import { DataService } from '../data-service.service';


@Component({
  selector: 'app-resource-summary',
  templateUrl: './resource-summary.component.html',
  styleUrls: ['./resource-summary.component.scss']
})
export class ResourceSummaryComponent implements OnInit {

  // resources: resourceType[] = [
  //     {
  //       name: "QA Resources : ",
  //       numberResources: 2
  //     },
  //     {
  //       name: "Dev Resources : ",
  //       numberResources: 0
  //     },
  //     {
  //       name: "Monitoring Resources : ",
  //       numberResources: 0
  //     }
  //   ];

    qaResources: number;
    devResources: number;
    monitoringResources: number;

      constructor(private data : DataService) { }

      ngOnInit() {
        this.data.currentQa.subscribe(qaResources => this.qaResources = qaResources);
        this.data.currentDev.subscribe(devResources => this.devResources = devResources);
        this.data.currentMonitoring.subscribe(monitoringResources => this.monitoringResources = monitoringResources);

      }

}
