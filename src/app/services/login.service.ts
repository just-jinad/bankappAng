import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) { }
  public url : string = "http://justjinad.atwebpages.com"
  userLoginService(obj:any){
   
    // http://justjinad.atwebpages.com/login.php
    // http://localhost/mybankapp/login.php
   return this.http.post('http://justjinad.atwebpages.com/login.php', obj)
  }

 

  // withdrawal(amount: number, userPin: string): Observable<any> {
  //   const withdrawalData = { amount, userPin };
  //   return this.http.post("http://localhost/mybankapp/withdraw.php", withdrawalData);
  // }
}
