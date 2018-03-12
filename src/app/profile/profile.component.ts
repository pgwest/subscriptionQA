import { Component, OnInit } from '@angular/core';

import { DashboardModule } from '../dashboard/dashboard.module';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { DataService } from '../data-service.service';
import {AuthService} from '../auth.service';


@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    isEditSettings: boolean;
    name: string;
    email: string;
    jobTitle: string;
    description: string;
    photoUrl: string;


    constructor(private data : DataService, public authService: AuthService) {
      this.isEditSettings = false;
      // this.photoUrl = '../assets/img/faces/joe-gardner-2.jpg';
      
    }

    ngOnInit() {
      this.data.currentName.subscribe(name => {this.name = name;});
      this.data.currentEmail.subscribe(email => {this.email = email;});
      this.data.currentJobTitle.subscribe(jobTitle => {this.jobTitle = jobTitle;});
      this.data.currentDescription.subscribe(description => {this.description = description;});
      this.data.currentPhotoUrl.subscribe(photoUrl => {this.photoUrl = photoUrl;});

    }

    edit(){
      this.isEditSettings = true;
    }

    save(){


      this.data.changeName(this.name);
      this.data.changeEmail(this.email);
      this.data.changeJobTitle(this.jobTitle);
      this.data.changeDescription(this.description);
      this.data.changePhotoUrl(this.photoUrl);

      this.authService.updateUserData();
      this.isEditSettings = false;

    }

}
