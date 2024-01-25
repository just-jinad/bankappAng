import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { __values } from 'tslib';

@Component({
  selector: 'app-transferpage',
  templateUrl: './transferpage.component.html',
  styleUrls: ['./transferpage.component.css']
})
export class TransferpageComponent {
  bankList:any = []
  bankCode:any = []

  bank:FormGroup

  bankStatus:null | string = null 
  bankMessage:string = ""
  public userAmount: string | number = "";
  public userName: string = "";
 public num:String = ""
  public userAcct: string | number = "";
  userData: any;
  constructor(public http: HttpClient, public formDetail:FormBuilder){
    
    this.bank = this.formDetail.group({
      userPin:['',],
      userAmount:[""],
      senderPhone:[""],
      acctNum:[""],
      listOfbanks:['']
    })  
    // this.bank.get('senderPhone').setValue(this.userAcct);

    }

    ngOnInit(){
      this.http.get<any>("http://localhost/mybankapp/bankList.php").subscribe(
        (data)=>{
          // console.log(data.data);
          this.bankList= data.data
          this.bankCode = data.code
        }
      )


      const user_id = localStorage.getItem('user_id');

      if (user_id) {
        // User_id available, fetch user data from the server
        this.http.get<any>('http://localhost/mybankapp/dashboard.php', {
          params: { user_id: user_id }
        }).subscribe(
          (data) => {
            console.log(data);
            
            if (data.status) {
              // User data successfully fetched
              this.userAmount = data.userData.userAmount;
              this.userName = data.userData.userName
              this.userAcct = data.userData.userPhone
              console.log('User Amount:', this.userAmount);
              console.log(this.userAcct);
         
              
            } else {
              // User not found or an error occurred, handle accordingly
              console.log('Error fetching user data:', data.message);
            }
          },
          (err) => {
            console.log('Error:', err);
          }
        );
      } else {
        console.log('User_id not available');
      }
    }

      makeTransfer(){
        console.log(this.bank.value);
        this.http.post("http://localhost/mybankapp/accVerify.php",this.bank.value).subscribe(
          (response:any) => {
            console.log(response);
          let  bankStatus = response.status
          let   bankMessage = response.message

          console.log( bankMessage);
          console.log(bankStatus);

          if (bankStatus == true) {
            Swal.fire('Transfer SuccessFul ')
          }else if(bankStatus == false){
            Swal.fire({
              icon: 'warning',
              text: 'An Error Occured'
            }).then((res)=>{
              Swal.fire(
                bankMessage,
              )

            })
          }
          
            
          },
          (error) => {
            console.error(error);
      
          }
        );


        // Swal.fire({
        //   title: 'Are you sure want to remove?',
        //   text: 'You will not be able to recover this file!',
        //   icon: 'warning',
        //   showCancelButton: true,
        //   confirmButtonText: 'Yes, delete it!',
        //   cancelButtonText: 'No, keep it'
        // }).then((result) => {
        //   if (result.value) {
        //     Swal.fire(
        //       'Deleted!',
        //       'Your imaginary file has been deleted.',
        //       'success'
        //     )
        //   } else if (result.dismiss === Swal.DismissReason.cancel) {
        //     Swal.fire(
        //       'Cancelled',
        //       'Your imaginary file is safe :)',
        //       'error'
        //     )
        //   }
        // })
       
      
          // this.http.post("http://localhost/mybankapp/withdraw.php", this.bank.value).subscribe(
          //   (data: any) => {
          //     console.log(data);
      
          //     if (data.status) {
        
          //       const newBalance = data.newBalance;
          //       console.log(`New balance: $${newBalance}`);
          //     } else {
          
          //       console.error(data.message);
          //     }
          //   },
          //   (error) => {
          //     console.error(error);
          //   }
          // );

          // this.http.userLoginService(this.bank.value).subscribe(
          //   (data:any)
          // )
        }
 


}
