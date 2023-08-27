import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectComponent } from './project/project.component';
import { WorkComponent } from './work/work.component';
import { FormsModule } from '@angular/forms';
import { CertificateComponent } from './certificate/certificate.component';
import { Routes ,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http'


const appRoutes: Routes = [
  { path : '', component: HomeComponent }
];  


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingPageComponent,
    ProfileComponent,
    SkillsComponent,
    ProjectComponent,
    WorkComponent,
    CertificateComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
