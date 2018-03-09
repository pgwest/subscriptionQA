import { Component, OnInit, ElementRef } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import {AuthService} from '../../auth.service';
import {SessionService} from '../../session-service.service';
import {DataService} from '../../data-service.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(public location: Location, private element : ElementRef, public authService: AuthService, private data: DataService, public sessionService : SessionService) {
        this.sidebarVisible = false;
    }

    ngOnInit() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        // console.log(this.authService.user);
        this.updateSessionData();
        // this.data.currentEmail.subscribe(email => this.email = email);
        // this.data.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
        // this.data.currentJobTitle.subscribe(jobTitle => this.jobTitle = jobTitle);
        // this.data.currentDescription.subscribe(description => this.description = description);
        // this.data.currentBillingFrequency.subscribe(billingFrequency => this.billingTimeframe = billingFrequency);
        // this.data.currentBillingEmail.subscribe(billingEmail => this.billingEmail = billingEmail);
        // this.data.currentAccountContactPreference.subscribe(accountContactPreference => this.accountContactPreference = accountContactPreference);
        // this.data.currentCommentsForManager.subscribe(commentsForManager => this.commentsForManager = commentsForManager);
        // this.data.currentWeeklyUpdates.subscribe(weeklyUpdates => this.weeklyUpdates = weeklyUpdates);
        // this.data.currentMonthlyUpdates.subscribe(monthlyUpdates => this.monthlyUpdates = monthlyUpdates);
        // this.data.currentRegularMeetings.subscribe(regularMeetings => this.regularMeetings = regularMeetings);
        // this.data.currentTermsAccepted.subscribe(termsAccepted => this.termsAccepted = termsAccepted);
        // this.data.currentQuestions.subscribe(questions => this.questions = questions);
        // this.data.currentQa.subscribe(qaResources => this.qaResources = qaResources);
        // this.data.currentDev.subscribe(devResources => this.devResources = devResources);
        // this.data.currentMonitoring.subscribe(monitoringResources => this.monitoringResources = monitoringResources);
        // this.data.currentUid.subscribe(uid => this.uid = uid);
    }

    updateSessionData(){
      this.authService.retrieveSessionData();
    }


    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');

        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };
    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if( titlee === '/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if( titlee === '/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }

    logout() {
      this.authService.logout();
    }
}
