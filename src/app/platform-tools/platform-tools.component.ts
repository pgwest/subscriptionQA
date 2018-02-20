import { Component, OnInit } from '@angular/core';

import { HomeModule } from '../home/home.module';

@Component({
  selector: 'app-platform-tools',
  templateUrl: './platform-tools.component.html',
  styleUrls: ['./platform-tools.component.scss']
})
export class PlatformToolsComponent implements OnInit {

    showPlatform : boolean;
    showTools : boolean;
    showWorkflow : boolean;

  constructor(
  ) {

      this.showPlatform = true;
      this.showTools = false;
      this.showWorkflow = false;
     }

  ngOnInit() {
  }


  platformEvent() {
    // console.log("platform");
    this.showPlatform = true;
    this.showTools = false;
    this.showWorkflow = false;
  }

  toolsEvent() {
    // console.log("tools");
    this.showPlatform = false;
    this.showTools = true;
    this.showWorkflow = false;
  }

  workflowEvent() {
    // console.log("workflow");
    this.showPlatform = false;
    this.showTools = false;
    this.showWorkflow = true;
  }

}
