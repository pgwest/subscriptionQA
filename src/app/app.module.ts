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
import { PlatformToolsComponent } from './platform-tools/platform-tools.component';
import { ResourcesComponent } from './resources/resources.component';
// import { BlogComponent } from './blog/blog.component';
import { WhitepaperComponent } from './whitepaper/whitepaper.component';
import { CostSummaryComponent } from './cost-summary/cost-summary.component';
import { ResourceSummaryComponent } from './resource-summary/resource-summary.component';
import { PriceWizardComponent } from './price-wizard/price-wizard.component';
import { FullServiceSummaryComponent } from './full-service-summary/full-service-summary.component';
import { ImpactComponent } from './impact/impact.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { BlogpostsComponent } from './blogposts/blogposts.component';
import { TermsComponent } from './terms/terms.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    ResourcesComponent,
    WhitepaperComponent,
    CostSummaryComponent,
    ResourceSummaryComponent,
    PriceWizardComponent,
    FullServiceSummaryComponent,
    ImpactComponent,
    AboutComponent,
    BlogpostComponent,
    BlogpostsComponent,
    ServicesComponent,
    ProfileComponent,
    TermsComponent
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
