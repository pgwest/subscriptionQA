import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ServicesComponent } from './services/services.component';
import { ResourcesComponent } from './resources/resources.component';
import { ImpactComponent } from './impact/impact.component';
import { AboutComponent } from './about/about.component';


const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'dashboard',          component: DashboardComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'services',      component: ServicesComponent },
    { path: 'resources',      component: ResourcesComponent },
    { path: 'impact',      component: ImpactComponent },
    { path: 'about',      component: AboutComponent },
    { path: 'pricing',      component: ServicesComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
