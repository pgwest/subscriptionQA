import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
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


@Component({
  selector: 'app-cost-summary',
  templateUrl: './cost-summary.component.html',
  styleUrls: ['./cost-summary.component.scss']
})
export class CostSummaryComponent implements OnInit {

    hourly : number;
    monthly: number;
    annual : number;
    total  : number;
    frequency : string;
    message : string;

    priceCollectionRef: AngularFirestoreCollection<Price>;
    price$: Observable<Price[]>;

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

      this.total = 5200;
      this.monthly = 2600;
      this.hourly = 14.77;
      this.annual = 31200;
      this.frequency = " (monthly)";

    }


  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
    this.data.currentBillingFrequency.subscribe(frequency => this.frequency = frequency);
  }

}
