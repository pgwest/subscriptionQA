import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ServicesComponent } from './services/services.component';
import { ResourcesComponent } from './resources/resources.component';
import { ImpactComponent } from './impact/impact.component';
import { AboutComponent } from './about/about.component';
import { BlogpostsComponent } from './blogposts/blogposts.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { WhitepaperComponent } from './whitepaper/whitepaper.component';

import { AdminComponent } from './admin/admin.component';


const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'dashboard',          component: DashboardComponent },
    { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'services',      component: ServicesComponent },
    { path: 'resources',      component: ResourcesComponent },
    { path: 'impact',      component: ImpactComponent },
    { path: 'about',      component: AboutComponent },
    { path: 'pricing',      component: ServicesComponent },
    { path: 'blog',      component: BlogpostsComponent },
    { path: 'post',      component: BlogpostComponent },
    { path: 'whitepaper',      component: WhitepaperComponent },
    { path: 'admin',      component: AdminComponent },
    { path: '**', component: HomeComponent },

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
