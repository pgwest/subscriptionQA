import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import 'rxjs/add/operator/switchMap';

import { Observable } from 'rxjs/Observable';
// import { Routes, RouterModule } from '@angular/router';
import {Router } from '@angular/router';

import { DataService } from './data-service.service';

import { Question } from './price-wizard/question';
import { Choice } from './price-wizard/choice';


interface User {
  uid: string;
  email: string;
  photoUrl?: string;
  jobTitle: string;
  description: string;
  billingTimeframe: string;
  billingEmail: string;
  accountContactPreference: string;
  commentsForManager: string;
  weeklyUpdates: boolean;
  monthlyUpdates: boolean;
  regularMeetings: boolean;
  termsAccepted: boolean;
  qaResources: number;
  devResources: number;
  monitoringResources: number;
  questions: Question[];

}


@Injectable()
export class AuthService {

  user: Observable<firebase.User>;
  router: Router;
  loginAlert: string;
  loginFailure: boolean;
  loginSuccess: boolean;
  userKey: string;
  uid: string;
  email: string;
  photoUrl?: string;
  jobTitle: string;
  description: string;
  billingTimeframe: string;
  billingEmail: string;
  accountContactPreference: string;
  commentsForManager: string;
  weeklyUpdates: boolean;
  monthlyUpdates: boolean;
  regularMeetings: boolean;
  termsAccepted: boolean;
  questions: Question[];
  qaResources: number;
  devResources: number;
  monitoringResources: number;

  constructor(private firebaseAuth: AngularFireAuth, private afs: AngularFirestore, router : Router,  private data : DataService) {
    this.user = firebaseAuth.authState;
    this.router = router;
    this.loginFailure = false;

    this.data.currentEmail.subscribe(email => this.email = email);
    this.data.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
    this.data.currentJobTitle.subscribe(jobTitle => this.jobTitle = jobTitle);
    this.data.currentDescription.subscribe(description => this.description = description);
    this.data.currentBillingFrequency.subscribe(billingFrequency => this.billingTimeframe = billingFrequency);
    this.data.currentBillingEmail.subscribe(billingEmail => this.billingEmail = billingEmail);
    this.data.currentAccountContactPreference.subscribe(accountContactPreference => this.accountContactPreference = accountContactPreference);
    this.data.currentCommentsForManager.subscribe(commentsForManager => this.commentsForManager = commentsForManager);
    this.data.currentWeeklyUpdates.subscribe(weeklyUpdates => this.weeklyUpdates = weeklyUpdates);
    this.data.currentMonthlyUpdates.subscribe(monthlyUpdates => this.monthlyUpdates = monthlyUpdates);
    this.data.currentRegularMeetings.subscribe(regularMeetings => this.regularMeetings = regularMeetings);
    this.data.currentTermsAccepted.subscribe(termsAccepted => this.termsAccepted = termsAccepted);
    this.data.currentQuestions.subscribe(questions => this.questions = questions);
    this.data.currentQa.subscribe(qaResources => this.qaResources = qaResources);
    this.data.currentDev.subscribe(devResources => this.devResources = devResources);
    this.data.currentMonitoring.subscribe(monitoringResources => this.monitoringResources = monitoringResources);
    this.data.currentUid.subscribe(uid => this.uid = uid);

  }

   updateUserData() {
      const userRef: AngularFirestoreDocument<any> = this.afs.collection('users').doc(`${this.uid}`);

      const userData: User = {
          uid: this.uid,
          email: this.email,
          photoUrl: this.photoUrl,
          jobTitle: this.jobTitle,
          description: this.description,
          billingTimeframe: this.billingTimeframe,
          billingEmail: this.billingEmail,
          accountContactPreference: this.accountContactPreference,
          commentsForManager: this.commentsForManager,
          weeklyUpdates: this.weeklyUpdates,
          monthlyUpdates: this.monthlyUpdates,
          regularMeetings: this.regularMeetings,
          termsAccepted: this.termsAccepted,
          questions: Object.assign({}, this.questions),
          qaResources: this.qaResources,
          devResources: this.devResources,
          monitoringResources: this.monitoringResources
      }

      return userRef.set(userData);
  }


  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        this.data.changeLoginFailure(false);
        console.log('Success!', value);
        console.log('Nice, it worked!');
        console.log("uid is ", value.uid)
        this.data.changeUid(value.uid);
        this.data.changeEmail(value.email);
        this.userKey = value.uid;
        this.router.navigate(['./dashboard']);
        this.data.changeLoginSuccess(true);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
        this.data.changeLoginFailure(true);
        this.data.changeLoginMessage(err.message);
        this.data.changeLoginSuccess(false);
      });
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        this.data.changeLoginFailure(false);
        console.log('Nice, it worked!');
        console.log("uid is ", value.uid)
        this.userKey = value.uid;
        this.data.changeEmail(value.email);
        this.data.changeUid(value.uid);
        this.router.navigate(['./dashboard']);
        this.data.changeLoginSuccess(true);


      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
        this.data.changeLoginFailure(true);
        this.data.changeLoginMessage(err.message);
        this.data.changeLoginSuccess(false);
        console.log("login failure");

      });
  }

  logout() {
    this.firebaseAuth
      .auth
      .signOut();
      this.router.navigate(['./home']);

  }

  getAuthStatus(){
    this.firebaseAuth.authState.subscribe(res => {
        if (res && res.uid) {
          // console.log('user is logged in');
          this.data.changeLoggedIn(true);
        } else {
          // console.log('user not logged in');
          this.data.changeLoggedIn(false);
        }
      });
  }

}
