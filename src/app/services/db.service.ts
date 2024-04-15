import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(public httpcl: HttpClient) { }
  // public url : string = "http://justjinad.atwebpages.com"

  userSignup(obj:any){
    
    // http://justjinad.atwebpages.com/bankdatabase.php
    return this.httpcl.post('http://justjinad.atwebpages.com/signup.php', obj)
    // return this.httpcl.post('http://localhost/mybankapp/bankdatabase.php', obj) 
  
  }

}

