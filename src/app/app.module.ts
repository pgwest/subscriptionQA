import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
