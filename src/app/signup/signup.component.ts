import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DbService } from '../services/db.service';


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
    
    // console.log(this.bankForm.value);
    // const userRegistration = JSON.stringify(this.bankForm.value)

    this.service.userSignup(userReg).subscribe(
      (data: any) =>
      {
        console.log(data);
        let registrationStatus = data.status;
        let registrationMessage = data.message;
        console.log(registrationMessage);
        if (registrationStatus == true) {
          alert(registrationMessage)
          window.location.href = "/login"
        }else{
          alert(registrationMessage)
        }
        
      },
      (err)=>{
        console.log(err);

      }
    )
  }
}



// import { Component } from '@angular/core';
// import { DbService } from '../services/db.service';

// interface RegistrationResponse {
//   status: boolean;
//   message: string;
// }

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css'],
// })
// export class SignupComponent {
//   userName = '';
//   userEmail = '';
//   userPhone = '';
//   userGender = '';
//   userDOB = '';
//   userAdd = '';
//   userPin = '';

//   registrationStatus: boolean | null = null;
//   registrationMessage: string | null = null;

//   constructor(public service: DbService) {}

//   userReg() {
//     let userReg = {
//       userName: this.userName,
//       userEmail: this.userEmail,
//       userPhone: this.userPhone,
//       userGender: this.userGender,
//       userDOB: this.userDOB,
//       userAdd: this.userAdd,
//       userPin: this.userPin,
//     };

//     this.service.userSignup(userReg).subscribe(
//       (data:any) => {
//         console.log(data);
//         this.registrationStatus = data.status;
//         this.registrationMessage = data.message;
//         console.log(this.registrationMessage);
//       },
//       (err) => {
//         console.log(err);
//       }
//     );
//   }
// }

