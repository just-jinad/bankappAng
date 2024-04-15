import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransferpageComponent } from './transferpage/transferpage.component';
import { DisplayComponent } from './display/display.component';
import { AboutComponent } from './about/about.component';
import { AirtimeComponent } from './airtime/airtime.component';
import { DataComponent } from './data/data.component';
import { AuthService } from './services/auth.service';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { userGuard } from './guards/user.guard';

const routes: Routes = [
  {path:"", component:LandingpageComponent},
  {path:"home", redirectTo:'', pathMatch:'full'},
  {path:"signup", component:SignupComponent},
  {path:"login", component:LoginComponent},

  {path:"dashboard", children:[
    {path:"", component:DashboardComponent},
    {path:"transferpage", component:TransferpageComponent},
    {path:"airtime", component:AirtimeComponent},
    {path:'data', component:DataComponent},
  ], canActivate:[userGuard]},

  {path:"auth", component:AuthService},
  {path:"about", component:AboutComponent},
  {path:"contact", component:DisplayComponent},
  {path:"**", component:ErrorpageComponent}

];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
