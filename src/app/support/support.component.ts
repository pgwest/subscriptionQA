import { Component, OnInit } from '@angular/core';

import { DashboardModule } from '../dashboard/dashboard.module';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { DataService } from '../data-service.service';
import {AuthService} from '../auth.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  state_info = true;
  state_info1 = true;
  state_info2 = true;

  // data : Date = new Date();

  accountContactPreference: string;
  commentsForManager: string;
  weeklyUpdates: boolean;
  monthlyUpdates: boolean;
  regularMeetings: boolean;
  closeResult: string;


  constructor(private data : DataService, public authService: AuthService, private modalService: NgbModal) { }

  ngOnInit() {
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('settings');
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.add('navbar-transparent');
      navbar.classList.add('bg-danger');

      this.data.currentAccountContactPreference.subscribe(accountContactPreference => {this.accountContactPreference = accountContactPreference;});
      this.data.currentCommentsForManager.subscribe(commentsForManager => {this.commentsForManager = commentsForManager;});
      this.data.currentWeeklyUpdates.subscribe(weeklyUpdates => {this.weeklyUpdates = weeklyUpdates;});
      this.data.currentMonthlyUpdates.subscribe(monthlyUpdates => {this.monthlyUpdates = monthlyUpdates;});
      this.data.currentRegularMeetings.subscribe(regularMeetings => {this.regularMeetings = regularMeetings;});
      this.data.currentWeeklyUpdates.subscribe(weeklyUpdates => {this.state_info = weeklyUpdates;});
      this.data.currentMonthlyUpdates.subscribe(monthlyUpdates => {this.state_info1 = monthlyUpdates;});
      this.data.currentRegularMeetings.subscribe(regularMeetings => {this.state_info2 = regularMeetings;});
  }

  ngOnDestroy(){
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('settings');
      var navbar = document.getElementsByTagName('nav')[0];
      navbar.classList.remove('navbar-transparent');
      navbar.classList.remove('bg-danger');
  }

  getWeeklyUpdates(){
    // console.log(this.state_info);
    // this.weeklyUpdates = this.state_info;
    this.weeklyUpdates = !this.weeklyUpdates;
    this.save();
  }

  getMonthlyUpdates(){
    // this.monthlyUpdates = this.state_info1;
    this.monthlyUpdates = !this.monthlyUpdates;
    this.save();
  }

  getRegularMeetings(){
    // this.regularMeetings = this.state_info2;
    this.regularMeetings = !this.regularMeetings;
    this.save();
  }


  save(){
    this.data.changeAccountContactPreference(this.accountContactPreference);
    this.data.changeCommentsForManager(this.commentsForManager);
    this.data.changeWeeklyupdates(this.weeklyUpdates);
    // console.log(this.weeklyUpdates);
    this.data.changeMonthlyUpdates(this.monthlyUpdates);
    this.data.changeRegularMeetings(this.regularMeetings);

    this.authService.updateUserData();
    // console.log("saved");
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
