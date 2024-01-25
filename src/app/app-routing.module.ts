import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransferpageComponent } from './transferpage/transferpage.component';
import { DisplayComponent } from './display/display.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:"", component:LandingpageComponent},
  {path:"home", redirectTo:'', pathMatch:'full'},
  {path:"signup", component:SignupComponent},
  {path:"login", component:LoginComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"about", component:AboutComponent},
  {path:"contact", component:DisplayComponent},
  {path:"transferpage", component:TransferpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
