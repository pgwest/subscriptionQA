import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class DataService {


    private messageSource = new BehaviorSubject<string>("default message");
    currentMessage = this.messageSource.asObservable();

    private billingFrequency = new BehaviorSubject<string>("monthly");
    currentBillingFrequency = this.billingFrequency.asObservable();

    constructor() { }

    changeMessage(message: string) {
      this.messageSource.next(message)
    }

    changeFrequency(message: string) {
      this.billingFrequency.next(message)
    }

}
