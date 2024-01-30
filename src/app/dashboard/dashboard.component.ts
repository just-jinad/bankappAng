import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  amountStar:boolean  = false
 public userAmount: string | number = "";
 public userName: string = "";
 public userAcct: string | number = "";
 userData: any;

  constructor(private router: Router, public http: HttpClient) {}

 // ... (existing code)

ngOnInit() {
  // Fetch user_id from local storage
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

tfBtn = () => {
  this.router.navigateByUrl('transferpage');
}

amountSta(){
  this.amountStar = !this.amountStar
}

}
