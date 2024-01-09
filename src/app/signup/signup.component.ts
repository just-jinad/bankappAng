import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DbService } from '../services/db.service';

interface bankuser {
  userName : String;
  userEmail: String;
  userAdd: String;
  userPhone: Number;
  userGender: String;
  userDOB : String,
  userPin : Number
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(public service: DbService) {}

  // public bankForm = this.formBuilder.group({
  //   userName:['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
  //   userEmail:[''],
  //   userPhone:[''],
  //   userGender:[''],
  //   userDOB:[''],
  //   userAdd:[''],
  //   userPin:[""]
  // })

  userName = '';
  userEmail = '';
  userPhone = '';
  userGender = '';
  userDOB = '';
  userAdd = '';
  userPin = 0;
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
    console.log(userReg);
    
    // console.log(this.bankForm.value);
    // const userRegistration = JSON.stringify(this.bankForm.value)

    this.service.userSignup(userReg).subscribe(
      (data)=>{
        console.log(data);

      },
      (err)=>{
        console.log(err);

      }
    )
  }
}
