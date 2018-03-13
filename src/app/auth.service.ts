import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';

import 'rxjs/add/operator/switchMap';

import { Observable } from 'rxjs/Observable';
// import { Routes, RouterModule } from '@angular/router';
import {Router } from '@angular/router';

import { DataService } from './data-service.service';

import { SessionService } from './session-service.service';


import { Question } from './price-wizard/question';
import { Choice } from './price-wizard/choice';

import { qaQuestions } from './price-wizard/qaQuestions';
import { devQuestions } from './price-wizard/devQuestions';
import { monitoringQuestions } from './price-wizard/monitoringQuestions';



interface User {
  uid: string;
  name: string;
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

interface DownloadUser {
  name: string;
  email: string;
}


@Injectable()
export class AuthService {

  questionArray : Question[] = [];

  user: Observable<firebase.User>;
  router: Router;
  loginAlert: string;
  loginFailure: boolean;
  loginSuccess: boolean;
  userKey: string;
  uid: string;
  email: string;
  name: string;
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

  constructor(private firebaseAuth: AngularFireAuth, private afs: AngularFirestore, router : Router,  private data : DataService, private sessionService: SessionService) {
    this.user = firebaseAuth.authState;
    this.router = router;
    this.loginFailure = false;

    this.data.currentEmail.subscribe(email => this.email = email);
    this.data.currentName.subscribe(name => this.name = name);
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
      // this.storeSessionData();

      const userData: User = {
          uid: this.uid,
          name: this.name,
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

      userRef.set(userData);
      // this.retrieveDatabaseInfo();
  }


    retrieveDatabaseInfo(){
      // var userData;
      if(this.user){
      // console.log("pulling database info");
        const document: AngularFirestoreDocument<User> = this.afs.collection('users').doc(this.uid);
        const document$: Observable<User> = document.valueChanges();
        // this.data.clearQuestions();
        document$.subscribe(data => {
          // console.log(data)
          // console.log("updating data");
          this.data.changeUid(data.uid);
          this.data.changeName(data.name);
          this.data.changeEmail(data.email);
          this.data.changeBillingEmail(data.billingEmail);
          this.data.changePhotoUrl(data.photoUrl);
          this.data.changeJobTitle(data.jobTitle);
          this.data.changeDescription(data.description);
          this.data.changeFrequency(data.billingTimeframe);
          this.data.changeAccountContactPreference(data.accountContactPreference);
          this.data.changeCommentsForManager(data.commentsForManager);
          this.data.changeWeeklyupdates(data.weeklyUpdates);
          this.data.changeMonthlyUpdates(data.monthlyUpdates);
          this.data.changeRegularMeetings(data.regularMeetings);
          this.data.changeTermsAccepted(data.termsAccepted);
          this.data.changeDevResources(data.devResources);
          this.data.changeQaResources(data.qaResources);
          this.data.changeMonitoringResources(data.monitoringResources);


          // console.log(this.data.getQuestions());
          if(this.data.getQuestions()){
            // console.log(this.data.getQuestions().length);
          }
          else {
            // console.log("no questions yet");

              // if(this.data.questions.value){
              //if length is not zero, return, else add questions from database.
            // }
              var i=0;
              while(data.questions[i]){
                // console.log(data.questions[i]);
                this.questionArray.push(data.questions[i]);
                i++;
              }
              // console.log(this.questionArray);

              this.data.changeQaQuestions(qaQuestions);
              this.data.changeDevQuestions(devQuestions);
              this.data.changeMonitoringQuestions(monitoringQuestions);
              // if(!this.questions){
              this.data.changeQuestions(this.questionArray);
              // }
              // console.log(this.questions);
              // if(this.questions){
                for (var i = 0; i < this.questions.length; i++){
                  var questionIndex = qaQuestions.findIndex(e => e.uid == this.questions[i].uid);
                  if(questionIndex != -1){
                    qaQuestions[questionIndex] = this.questions[i];
                  }
                  var questionIndex = devQuestions.findIndex(e => e.uid == this.questions[i].uid);
                  if(questionIndex != -1){
                    devQuestions[questionIndex] = this.questions[i];
                  }
                  var questionIndex = monitoringQuestions.findIndex(e => e.uid == this.questions[i].uid);
                  if(questionIndex != -1){
                    monitoringQuestions[questionIndex] = this.questions[i];
                  }
                }
              // }
              // console.log(this.questions);
            }
        });
      }
    }

    storeSessionData() {
       const userData: User = {
           uid: this.uid,
           name: this.name,
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

         this.sessionService.setSettings(userData);
     }

     retrieveSessionData() {
        const userData: User = this.sessionService.getUserSettings();
        // console.log(userData);
        if(userData == null){

        }
        else {
          this.data.changeUid(userData.uid);
          this.data.changeName(userData.name);
          this.data.changeEmail(userData.email);
          this.data.changePhotoUrl(userData.photoUrl);
          this.data.changeJobTitle(userData.jobTitle);
          this.data.changeDescription(userData.description);
          this.data.changeFrequency(userData.billingTimeframe);
          this.data.changeAccountContactPreference(userData.accountContactPreference);
          this.data.changeCommentsForManager(userData.commentsForManager);
          this.data.changeWeeklyupdates(userData.weeklyUpdates);
          this.data.changeMonthlyUpdates(userData.monthlyUpdates);
          this.data.changeRegularMeetings(userData.regularMeetings);
          this.data.changeTermsAccepted(userData.termsAccepted);
          this.data.changeDevResources(userData.devResources);
          this.data.changeQaResources(userData.qaResources);
          this.data.changeMonitoringResources(userData.monitoringResources);
        }
    }


  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        this.data.changeLoginFailure(false);
        // console.log('Success!', value);
        // console.log('Nice, it worked!');
        // console.log("uid is ", value.uid)
        this.data.changeUid(value.uid);
        this.data.changeEmail(value.email);
        this.userKey = value.uid;
        this.updateUserData();
        this.storeSessionData();
        if(this.router.url == "/signup"){
          this.router.navigate(['./dashboard']);
        }
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
        // console.log('Nice, it worked!');
        // console.log("uid is ", value.uid)
        this.userKey = value.uid;
        this.data.changeEmail(value.email);
        this.data.changeUid(value.uid);
        this.storeSessionData();

        this.router.navigate(['./dashboard']);
        this.data.changeLoginSuccess(true);
        this.retrieveDatabaseInfo();


      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
        this.data.changeLoginFailure(true);
        this.data.changeLoginMessage(err.message);
        this.data.changeLoginSuccess(false);
        // console.log("login failure");

      });
  }

  logout() {
    this.sessionService.cleanAll();
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
          // console.log("user is logged in");
          if(!this.questions){
            this.retrieveDatabaseInfo();
          }
        } else {
          // console.log('user not logged in');
          this.data.changeLoggedIn(false);
          // console.log("not logged in");
        }
      });
  }


  addDownloadUser(downloadName:string, downloadEmail:string) {
     // const downloadCollectionRef: AngularFirestoreCollection<any> = this.afs.collection('qaBestPracticesDownloads');
     // // this.storeSessionData();
     //
     // const userData: DownloadUser = {
     //     name: this.name,
     //     email: this.email
     // }
     //
     // downloadCollectionRef.update(userData);
     // this.afs.collection('qaBestPracticesDownloads').add({'name': downloadName, 'email': downloadEmail});
     this.afs.collection('qaBestPracticesDownloads').doc(downloadEmail + " - " + downloadName).set({'name': downloadName, 'email': downloadEmail});

 }

}
