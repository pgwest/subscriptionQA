import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class DataService {


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



    constructor() { }

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
      console.log(this.percentageCompleted);
    }




}
