import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Question } from './price-wizard/question';
import { qaQuestions } from './price-wizard/qaQuestions';
import { devQuestions } from './price-wizard/devQuestions';
import { monitoringQuestions } from './price-wizard/monitoringQuestions';
import { resourceQuestions } from './price-wizard/resourceQuestions';

@Injectable()
export class DataService {

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

    constructor() { }

    changeQuestions(questionSet: Question[]) {
      this.questions.next(questionSet);
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

}
