import { Component, OnInit } from '@angular/core';
// import Swal from 'sweetalert2/dist/sweetalert2.js';
import Swal from 'sweetalert2';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'bankapp';
  
  ngOnInit(){
    console.log('This is init method');
 
  }


}
