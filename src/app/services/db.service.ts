import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(public httpcl: HttpClient) { }

  userSignup(obj:any){
    return this.httpcl.post('http://localhost/mybankapp/bankdatabase.php', obj)
  }
}
