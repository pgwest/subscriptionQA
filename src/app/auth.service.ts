import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
// import { Routes, RouterModule } from '@angular/router';
import {Router } from '@angular/router';

import { DataService } from './data-service.service';


@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  router: Router;
  loginAlert: string;
  loginFailure: boolean;
  loginSuccess: boolean;


  constructor(private firebaseAuth: AngularFireAuth, router : Router,  private data : DataService) {
    this.user = firebaseAuth.authState;
    this.router = router;
    this.loginFailure = false;
  }

  signup(email: string, password: string) {
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        this.data.changeLoginFailure(false);
        console.log('Success!', value);
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
          console.log('user is logged in');
          this.data.changeLoggedIn(true);
        } else {
          console.log('user not logged in');
          this.data.changeLoggedIn(false);
        }
      });
  }

}
