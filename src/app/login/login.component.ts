import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userEmail = ""
  userPin = ""

  loginStatus:string | null = null
  loginMessage:string | null = null
  constructor(public loginService:LoginService , public route:Router, private toastservice: ToastService){}

  userLogin(){
    this.toastservice.info("workin")
    let loginValidation = {
      userEmail: this.userEmail,
      userPin: this.userPin
    }

    console.log(loginValidation);
    
    this.loginService.userLoginService(loginValidation).subscribe(
      (data:any)=>{
        console.log(data);
        let loginStatus = data.status
        let loginMessage = data.message
        console.log(loginStatus);

        if (loginStatus == true) {
          Swal.fire({
            icon: 'success',
            text:'Login Successful'})
          localStorage.setItem('user_id', data.userData.user_id);

          setTimeout(() => {
            
            this.route.navigate(["/dashboard"])
          }, 2000);
        }else{
          Swal.fire({
            icon: 'error',
            text: 'An Error Occured'
          }).then((res)=>{
            Swal.fire(
          '❌❌',
          loginMessage
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
