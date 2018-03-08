import { Component, OnInit } from '@angular/core';

import { ServicesModule } from '../services/services.module';

import { Choice } from '../price-wizard/choice';
import { Question } from '../price-wizard/question';
import { Answer } from '../price-wizard/answer';
import { qaQuestions } from '../price-wizard/qaQuestions';
import { devQuestions } from '../price-wizard/devQuestions';
import { monitoringQuestions } from '../price-wizard/monitoringQuestions';
import { resourceQuestions } from '../price-wizard/resourceQuestions';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


//Services
import { DataService } from '../data-service.service';
import {AuthService} from '../auth.service';

export interface fixedPrice {
  id?: string;
  weeklyPrice: number;
  monthlyPrice: number;
}

@Component({
  selector: 'app-full-service-summary',
  templateUrl: './full-service-summary.component.html',
  styleUrls: ['./full-service-summary.component.scss']
})
export class FullServiceSummaryComponent implements OnInit {

  loggedIn : boolean;

  frequency : string;
  weekly : boolean;

  qaWeekly : number;
  qaMonthly : number;
  devWeekly : number;
  devMonthly : number;
  monitoringWeekly : number;
  monitoringMonthly : number;
  questions: Question[] = [];

  fixedPriceCollectionRef: AngularFirestoreCollection<fixedPrice>;
  fixedPrice$: Observable<fixedPrice[]>;



  constructor(private data : DataService, public authService: AuthService, private afs: AngularFirestore) {
    this.fixedPriceCollectionRef = this.afs.collection<fixedPrice>('fixedPrices');
    // this.price$ = this.priceCollectionRef.valueChanges();
    this.fixedPrice$ = this.fixedPriceCollectionRef.snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as fixedPrice;
        const id = action.payload.doc.id;
        return { id, ...data };
      });
    });


    // this.questions = qaQuestions;
    // this.questions.unshift(this.firstQuestion);
    // // this.questions = this.questions.concat(qaQuestions);
    // this.questions = this.questions.concat(qaQuestions);
    // this.questions = this.questions.concat(devQuestions);
    // this.questions = this.questions.concat(monitoringQuestions);
    // this.questions = this.questions.concat(this.resourcesQuestion);
    // this.questions = this.questions.concat(resourceQuestions);
   }

  ngOnInit() {
    this.data.currentBillingFrequency.subscribe(frequency => {this.frequency = frequency; this.getPricing();});
    this.data.currentLoggedIn.subscribe(loggedIn => {this.loggedIn = loggedIn; this.refreshQuestions();});
    this.data.currentQuestions.subscribe(questions => {this.questions = questions;});

    this.fixedPrice$.subscribe(val => {this.qaWeekly = val[2].weeklyPrice; this.getPricing();});
    this.fixedPrice$.subscribe(val => {this.qaMonthly = val[2].monthlyPrice; this.getPricing();});
    this.fixedPrice$.subscribe(val => {this.devWeekly = val[0].weeklyPrice; this.getPricing();});
    this.fixedPrice$.subscribe(val => {this.devMonthly = val[0].monthlyPrice; this.getPricing();});
    this.fixedPrice$.subscribe(val => {this.monitoringWeekly = val[1].weeklyPrice; this.getPricing();});
    // this.fixedPrice$.subscribe(val => {this.monitoringMonthly = val[1].monthlyPrice; this.getPricing(); console.log(val);});
    this.fixedPrice$.subscribe(val => {this.monitoringMonthly = val[1].monthlyPrice; this.getPricing();});


    this.authService.getAuthStatus();


  }

  refreshQuestions(){
      if(this.authService.user){
        //pull from database and update selected questions
        // this.databaseQuestions =
      }
      else {
        // this.questions = qaQuestions;
        // this.questions.unshift(this.firstQuestion);
        // this.questions = this.questions.concat(devQuestions);
        // this.questions = this.questions.concat(monitoringQuestions);
        // this.questions = this.questions.concat(this.resourcesQuestion);
        // this.questions = this.questions.concat(resourceQuestions);
        // this.data.changeQuestions(this.questions);
      }
  }

  getPricing(){
    if (this.frequency == "monthly"){
      this.weekly = false;
    }
    else{
      this.weekly = true;
    }
  }




}
