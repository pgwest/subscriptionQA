import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


import { ServicesModule } from '../services/services.module';
import { costCalculations } from './costCalculations';
import { CurrencyPipe } from '@angular/common';

import { DataService } from '../data-service.service';

export interface Price {
  id?: string;
  price: number;
  service: string;
  standard: boolean;
}

export interface fixedPrice {
  id?: string;
  weeklyPrice: number;
  monthlyPrice: number;
}


@Component({
  selector: 'app-cost-summary',
  templateUrl: './cost-summary.component.html',
  styleUrls: ['./cost-summary.component.scss']
})
export class CostSummaryComponent implements OnInit {

    hourly : number;
    weekly: number;
    monthly: number;
    annual : number;
    total  : number;
    frequency : string;
    message : string;
    qaResources: number;
    devResources: number;
    monitoringResources: number;

    priceCollectionRef: AngularFirestoreCollection<Price>;
    price$: Observable<Price[]>;

    fixedPriceCollectionRef: AngularFirestoreCollection<fixedPrice>;
    fixedPrice$: Observable<fixedPrice[]>;

    qaPrice : number;
    devPrice: number;
    monitoringPrice: number;
    tempQA : number;

    qaWeekly : number;
    qaMonthly : number;
    devWeekly : number;
    devMonthly : number;
    monitoringWeekly : number;
    monitoringMonthly : number;
    // subscriberId :string;

    constructor(private afs: AngularFirestore, private data : DataService) {
      this.priceCollectionRef = this.afs.collection<Price>('prices');
      // this.price$ = this.priceCollectionRef.valueChanges();
      this.price$ = this.priceCollectionRef.snapshotChanges().map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data() as Price;
          const id = action.payload.doc.id;
          return { id, ...data };
        });
});

      this.fixedPriceCollectionRef = this.afs.collection<fixedPrice>('fixedPrices');
      // this.price$ = this.priceCollectionRef.valueChanges();
      this.fixedPrice$ = this.fixedPriceCollectionRef.snapshotChanges().map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data() as fixedPrice;
          const id = action.payload.doc.id;
          return { id, ...data };
        });
      });

      this.total = 5200;
      this.monthly = 2600;
      this.weekly = 605;
      this.hourly = 14.77;
      this.annual = 31200;
      this.frequency = " (monthly)";

      this.qaWeekly = 0;
      this.qaMonthly = 0;
      this.devWeekly = 0;
      this.devMonthly = 0;
      this.monitoringWeekly = 0;
      this.monitoringMonthly = 0;
      // subscriberId = "qaServices";
    }


  ngOnInit() {
    this.data.currentMessage.subscribe(message => {this.message = message; this.getPricing();});
    this.data.currentBillingFrequency.subscribe(frequency => {this.frequency = frequency; this.getPricing();});
    this.data.currentQa.subscribe(qaResources => {this.qaResources = qaResources; this.getPricing();});
    this.data.currentDev.subscribe(devResources => {this.devResources = devResources; this.getPricing();});
    this.data.currentMonitoring.subscribe(monitoringResources => {this.monitoringResources = monitoringResources; this.getPricing();});

    // console.log(this.price$);
    // this.fixedPrice$.subscribe(val => console.log(val));
    // this.fixedPrice$.subscribe(val => console.log(val[0].weeklyPrice));
    // this.fixedPrice$.subscribe(val => console.log(val[0].monthlyPrice));
    // this.fixedPrice$.subscribe(val => console.log(val[1].weeklyPrice));
    // this.fixedPrice$.subscribe(val => console.log(val[1].monthlyPrice));
    // this.fixedPrice$.subscribe(val => console.log(val[2].weeklyPrice));
    // this.fixedPrice$.subscribe(val => console.log(val[2].monthlyPrice));

    this.fixedPrice$.subscribe(val => {this.qaWeekly = val[2].weeklyPrice; this.getPricing();});
    this.fixedPrice$.subscribe(val => {this.qaMonthly = val[2].monthlyPrice; this.getPricing();});
    this.fixedPrice$.subscribe(val => {this.devWeekly = val[0].weeklyPrice; this.getPricing();});
    this.fixedPrice$.subscribe(val => {this.devMonthly = val[0].monthlyPrice; this.getPricing();});
    this.fixedPrice$.subscribe(val => {this.monitoringWeekly = val[1].weeklyPrice; this.getPricing();});
    this.fixedPrice$.subscribe(val => {this.monitoringMonthly = val[1].monthlyPrice; this.getPricing();});

    // this.price$.subscribe(val => console.log();
    this.getPricing();
    // console.log(this.qaResources);
    // console.log(this.total);


  }


  getPricing(){
    if(this.frequency =="monthly")
    {
      this.total = this.qaResources*this.qaMonthly + this.devResources*this.devMonthly + this.monitoringResources*this.monitoringMonthly;
    }
    else{
      this.total = this.qaResources*this.qaWeekly + this.devResources*this.devWeekly + this.monitoringResources*this.monitoringWeekly;
    }
    // console.log(this.total);
  }










}
