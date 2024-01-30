import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TransferpageComponent } from './transferpage/transferpage.component';
import { AngularToastifyModule, ToastService } from 'angular-toastify';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayComponent } from './display/display.component';
import { AboutComponent } from './about/about.component';
import { AirtimeComponent } from './airtime/airtime.component';
import { DataComponent } from './data/data.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    TransferpageComponent,
    DisplayComponent,
    AboutComponent,
    AirtimeComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularToastifyModule,
    BrowserAnimationsModule
  ],
  providers: [  ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
