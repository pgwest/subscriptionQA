import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {AuthService} from '../auth.service';
import { DataService } from '../data-service.service';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  email: string;
  password: string;
  showAlertLogin : boolean;
  loginAlertMessage : string;s

  constructor(public authService: AuthService, private data : DataService) {}


  ngOnInit() {
      this.data.currentLoginFailure.subscribe(loginFailure => this.showAlertLogin = loginFailure);
      this.data.currentLoginAlertMessage.subscribe(loginAlertMessage => this.loginAlertMessage = loginAlertMessage);

  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';

    if(this.authService.loginFailure){
      console.log(this.authService.loginAlert);
      this.loginAlertMessage = this.authService.loginAlert;
      this.showAlertLogin = true;

    }
    else{
      this.showAlertLogin = false;

    }

  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';

    if(this.authService.loginFailure){
      console.log(this.authService.loginAlert);
      this.loginAlertMessage = this.authService.loginAlert;
      this.showAlertLogin = true;

    }
    else{
      this.showAlertLogin = false;
      // console.log("success! on login");
      // console.log(this.authService.user);
    }
  }

  logout() {
    this.authService.logout();
  }

    test : Date = new Date();
//
//     user: Observable<firebase.User>;
//     // items: FirebaseListObservable<any[]>;
//     msgVal: string = '';
//
//     constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
//       // this.items = af.list('/messages', {
//       //   query: {
//       //     limitToLast: 50
//       //   }
//       // });
//
//       this.user = this.afAuth.authState;
//
//     }
//
//     login(email: string, password : string) {
//       firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // ...
//       });
// }
//
//   create(email: string, password : string){
//     firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // ...
//     });
//
//   }
//
//     logout() {
//         // this.afAuth.auth.signOut();
//         firebase.auth().signOut().then(function() {
//   // Sign-out successful.
// }).catch(function(error) {
//   // An error happened.
// });
//     }
//
//     Send(desc: string) {
//         // this.items.push({ message: desc});
//         this.msgVal = '';
//     }

}
