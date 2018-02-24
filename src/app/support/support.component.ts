import { Component, OnInit } from '@angular/core';

import { DashboardModule } from '../dashboard/dashboard.module';


@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  state_info = true;
  state_info1 = true;
  state_info2 = true;

  data : Date = new Date();

  constructor() { }

  ngOnInit() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('settings');
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.add('navbar-transparent');
      navbar.classList.add('bg-danger');
  }
  ngOnDestroy(){
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('settings');
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('navbar-transparent');
      navbar.classList.remove('bg-danger');
  }
}
