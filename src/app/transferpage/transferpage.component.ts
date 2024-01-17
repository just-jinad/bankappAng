import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  bankUserName:string = ""
  constructor(public http: HttpClient, public formDetail:FormBuilder){
    
      this.bank = this.formDetail.group({
      userPin:[""],
      userAmount:[""],
      acctNum:[""],
      listOfbanks:['']
    })  

    }

 
   

    ngOnInit(){
      this.http.get<any>("http://localhost/mybankapp/bankList.php").subscribe(
        (data)=>{
          // console.log(data.data);
          this.bankList= data.data
          this.bankCode = data.code
        }
      )
    }

      makeTransfer(){
        console.log(this.bank.value);
        this.http.post("http://localhost/mybankapp/accVerify.php",this.bank.value).subscribe(
          (response:any) => {
            console.log(response);
          let  bankStatus = response.status
          let  bankUserName = response.data.account_name


          console.log(bankUserName);
          console.log(bankStatus);
          
          if ( response.status) {
            
            // const newBalance =  response.newBalance;
            // console.log(`New balance: $${newBalance}`);
          } else {
          
            console.error( response.message);
          }
            
          },
          (error) => {
            console.error(error);
      
          }
        );


       
      
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
