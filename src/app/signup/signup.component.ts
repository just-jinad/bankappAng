import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DbService } from '../services/db.service';
import {  Router } from '@angular/router';
import Swal from 'sweetalert2';


interface bankuser {
  userName : String;
  userEmail: String;
  userAdd: String;
  userPhone: String;
  userGender: String;
  userDOB : String,
  userPin : number





  // status: boolean;
  // message: string;
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  // registrationStatus: boolean;
  // registrationMessage: string;

  constructor(public service: DbService, public routes:Router) {}
  
 

  userName = '';
  userEmail = '';
  userPhone = '';
  userGender = '';
  userDOB = '';
  userAdd = '';
  userPin ='';

  registrationMessage: string | null = null;

  public allUsersArray: bankuser[] = [];
  userReg() {
    let userReg = {
    userName:this.userName,
    userEmail: this.userEmail,
    userPhone: this.userPhone,
    userGender: this.userGender,
    userDOB: this.userDOB,
    userAdd: this.userAdd,
    userPin: this.userPin
    };
    console.log(userReg );

    this.service.userSignup(userReg).subscribe(
      (data: any) =>
      {
        console.log(data);
        let registrationStatus = data.status;
        let registrationMessage = data.message;
        console.log(registrationMessage);
        if (registrationStatus == true) {
          Swal.fire(
            {
              icon: 'success',
              text:'Sign Up Successful'})
          setTimeout(() => {
            this.routes.navigate(['/login'])
          }, 2000);
        }else{
          Swal.fire({
            icon: 'warning',
            text: 'An Error Occured'
          }).then((res)=>{
            Swal.fire(
              registrationMessage,
            )

          })
        }
        
      },
      (err)=>{
        console.log(err);

      }
    )
  }
}




