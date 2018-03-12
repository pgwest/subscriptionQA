import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { Question } from './price-wizard/question';
import { qaQuestions } from './price-wizard/qaQuestions';
import { devQuestions } from './price-wizard/devQuestions';
import { monitoringQuestions } from './price-wizard/monitoringQuestions';
import { resourceQuestions } from './price-wizard/resourceQuestions';


@Injectable()
export class DataService {

    private uid = new BehaviorSubject<string>('tempUid');
    currentUid = this.uid.asObservable();

    // private _stuffSubject = new ReplaySubject<any>(1);
    //
    // private questions = new ReplaySubject<Question[]>(1);
    // currentQuestions = this.questions.asObservable();

    private questions = new BehaviorSubject<Question[]>(null);
    currentQuestions = this.questions.asObservable();

    private devQuestions = new BehaviorSubject<Question[]>(devQuestions);
    currentDevQuestions = this.devQuestions.asObservable();

    private qaQuestions = new BehaviorSubject<Question[]>(qaQuestions);
    currentQaQuestions = this.qaQuestions.asObservable();

    private monitoringQuestions = new BehaviorSubject<Question[]>(monitoringQuestions);
    currentMonitoringQuestions = this.monitoringQuestions.asObservable();

    private resourceQuestions = new BehaviorSubject<Question[]>(resourceQuestions);
    currentResourceQuestions = this.resourceQuestions.asObservable();

    private messageSource = new BehaviorSubject<string>("default message");
    currentMessage = this.messageSource.asObservable();

    private billingFrequency = new BehaviorSubject<string>("monthly");
    currentBillingFrequency = this.billingFrequency.asObservable();

    private qaResources = new BehaviorSubject<number>(2);
    currentQa = this.qaResources.asObservable();

    private devResources = new BehaviorSubject<number>(0);
    currentDev = this.devResources.asObservable();

    private monitoringResources = new BehaviorSubject<number>(0);
    currentMonitoring = this.monitoringResources.asObservable();

    private percentageCompleted = new BehaviorSubject<number>(0);
    currentCompleted = this.percentageCompleted.asObservable();

    private loginFailure = new BehaviorSubject<boolean>(false);
    currentLoginFailure = this.loginFailure.asObservable();

    private loginAlertMessage = new BehaviorSubject<string>("");
    currentLoginAlertMessage = this.loginAlertMessage.asObservable();

    private loginSuccess = new BehaviorSubject<boolean>(true);
    currentLoginSuccess = this.loginSuccess.asObservable();

    private loggedIn = new BehaviorSubject<boolean>(true);
    currentLoggedIn = this.loggedIn.asObservable();

    private name = new BehaviorSubject<string>("Update Your Name");
    currentName = this.name.asObservable();

      private email = new BehaviorSubject<string>("email");
      currentEmail = this.email.asObservable();

      private photoUrl = new BehaviorSubject<string>("../assets/img/avatar.png");
      currentPhotoUrl = this.photoUrl.asObservable();

      private jobTitle = new BehaviorSubject<string>("Job Title");
      currentJobTitle = this.jobTitle.asObservable();

      private description = new BehaviorSubject<string>("Write a description of yourself here.");
      currentDescription = this.description.asObservable();

      private billingEmail = new BehaviorSubject<string>("Please enter the email of where to send invoices");
      currentBillingEmail = this.billingEmail.asObservable();

      private accountContactPreference = new BehaviorSubject<string>("phone or email");
      currentAccountContactPreference = this.accountContactPreference.asObservable();

      private commentsForManager = new BehaviorSubject<string>("comments");
      currentCommentsForManager = this.commentsForManager.asObservable();

      private weeklyUpdates = new BehaviorSubject<boolean>(true);
      currentWeeklyUpdates = this.weeklyUpdates.asObservable();

      private monthlyUpdates = new BehaviorSubject<boolean>(true);
      currentMonthlyUpdates = this.monthlyUpdates.asObservable();

      private regularMeetings = new BehaviorSubject<boolean>(true);
      currentRegularMeetings = this.regularMeetings.asObservable();

      private termsAccepted = new BehaviorSubject<boolean>(false);
      currentTermsAccepted = this.termsAccepted.asObservable();


    constructor() { }

    clearQuestions(){
      this.questions = new BehaviorSubject<Question[]>(null);
    }

    changeQuestions(questionSet: Question[]) {
      // this.questions = new BehaviorSubject<Question[]>(null);
      this.questions.next(questionSet);
      // console.log(this.questions.getValue());
    }

    getQuestions() {
      return this.questions.getValue();
    }

    changeUid(uid: string) {
      this.uid.next(uid);
    }

    changeQaQuestions(questionSet: Question[]) {
      this.qaQuestions.next(questionSet);
    }


    changeDevQuestions(questionSet: Question[]) {
      this.devQuestions.next(questionSet);
    }


    changeMonitoringQuestions(questionSet: Question[]) {
      this.monitoringQuestions.next(questionSet);
    }


    changeResourceQuestions(questionSet: Question[]) {
      this.resourceQuestions.next(questionSet);
    }


    changeMessage(message: string) {
      this.messageSource.next(message)
    }

    changeFrequency(message: string) {
      this.billingFrequency.next(message)
    }

    changeQaResources(resources: number) {
      this.qaResources.next(resources)
    }

    changeDevResources(resources: number) {
      this.devResources.next(resources)
    }

    changeMonitoringResources(resources: number) {
      this.monitoringResources.next(resources)
    }

    changeCompleted(completed: number) {
      this.percentageCompleted.next(completed);
    }

    changeLoginFailure(failure: boolean) {
      this.loginFailure.next(failure);
    }

    changeLoginMessage(loginMessage: string) {
      this.loginAlertMessage.next(loginMessage);
    }

    changeLoginSuccess(success: boolean) {
      this.loginSuccess.next(true);
    }

    changeLoggedIn(success: boolean) {
      this.loggedIn.next(success);
    }

    changeName(name: string) {
      this.name.next(name);
    }

    changeEmail(email: string) {
      this.email.next(email);
    }

    changePhotoUrl(photoUrl: string) {
      this.photoUrl.next(photoUrl);
    }

    changeJobTitle(jobTitle: string) {
      this.jobTitle.next(jobTitle);
    }

    changeDescription(description: string) {
      this.description.next(description);
    }

    changeBillingEmail(email: string) {
      this.billingEmail.next(email);
    }

    changeAccountContactPreference(accountContactPreference: string) {
      this.accountContactPreference.next(accountContactPreference);
    }

    changeCommentsForManager(commentsForManager: string) {
      this.commentsForManager.next(commentsForManager);
    }

    changeWeeklyupdates(weeklyUpdates: boolean) {
      this.weeklyUpdates.next(weeklyUpdates);
    }

    changeMonthlyUpdates(monthlyUpdates: boolean) {
      this.monthlyUpdates.next(monthlyUpdates);
    }

    changeRegularMeetings(success: boolean) {
      this.regularMeetings.next(success);
    }

    changeTermsAccepted(success: boolean) {
      this.termsAccepted.next(success);
    }

}
