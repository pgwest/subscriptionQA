import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { TermsComponent } from '../terms/terms.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
