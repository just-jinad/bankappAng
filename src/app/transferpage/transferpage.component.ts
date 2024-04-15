import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { debounceTime, switchMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-transferpage',
  templateUrl: './transferpage.component.html',
  styleUrls: ['./transferpage.component.css']
})
export class TransferpageComponent implements OnInit, OnDestroy {
  bankList: any = [];
  bankCode: any = [];
  bank: FormGroup;
  private destroy$: Subject<void> = new Subject<void>();

  bankStatus: null | string = null;
  bankMessage: string = '';
  public userAmount: string | number = '';
  public userName: string = '';
  public userAcct: string | number = '';
  userData: any;
  senderPhone:any

  constructor(public http: HttpClient, public formDetail: FormBuilder) {
    this.bank = this.formDetail.group({
      userPin: [''],
      userAmount: [''],
      senderPhone: [''],
      acctNum: [''],
      listOfbanks: ['']
    });

    this.bank
      .get('acctNum')!
      .valueChanges.pipe(
        debounceTime(1700),
        switchMap((accountNumber: string) => this.fetchReceiverName(accountNumber)),
        takeUntil(this.destroy$)
      )
      .subscribe(
        (data) => {
          if (data.status) {
            Swal.fire({
              title: 'Receiver Name',
              text: data.receiverName,
              icon: 'info',
              showCancelButton: true,
              confirmButtonText: 'OK'
            });
          } else {
            Swal.fire({
              icon: 'error',
              text: 'Incorrect Account Number'
            });
          }
        },
        (error) => {
          console.error(error);
        }
      );
  }

  ngOnInit() {
    this.http.get<any>('http://localhost/mybankapp/bankList.php').subscribe((data) => {
      this.bankList = data.data;
      this.bankCode = data.code;
    });

    const user_id = localStorage.getItem('user_id');

    if (user_id) {
      this.http
        .get<any>('http://localhost/mybankapp/dashboard.php', {
          params: { user_id: user_id }
        })
        .subscribe(
          (data) => {
            console.log(data);

            if (data.status) {
              this.userAmount = data.userData.userAmount;
              this.userName = data.userData.userName;
              this.userAcct = data.userData.userPhone;
              console.log('User Amount:', this.userAmount);
              console.log(this.userAcct);
              
              console.log(this.userAcct);
              this.bank.patchValue({
                senderPhone: this.userAcct
              })
              console.log(this.bank);
            } else {
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

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  makeTransfer() {

    const transferDetails = {
      receiver: this.bank.value.receiver,
      amount: this.bank.value.amount,
    };

    console.log(this.bank.value);
    this.http.post('http://localhost/mybankapp/accVerify.php', this.bank.value).subscribe(
      (response: any) => {
        console.log(response);
        let bankStatus = response.status;
        let bankMessage = response.message;

        console.log(bankMessage);
        console.log(bankStatus);

        if (bankStatus == true) {
          Swal.fire({
            icon: 'success',
            text: 'Transfer Successful '});

           this.bank.reset()

        } else if (bankStatus == false) {
          Swal.fire({
            icon: 'warning',
            text: 'An Error Occurred'
            
          }).then((res) => {
            Swal.fire(bankMessage);
          });
          this.saveTransferDetails(transferDetails)
          this.bank.reset() 
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  saveTransferDetails(transferDetails: any) {
    this.http.post('http://localhost/mybankapp/transHistory.php', transferDetails).subscribe(
      (response: any) => {
        console.log('Transfer details saved successfully:', response);
      },
      (error) => {
        console.error('Error saving transfer details:', error);
      }
    );
  }

  

  fetchReceiverName(accountNumber: string) {
    return this.http.get<any>(`http://localhost/mybankapp/fetchReceiverName.php?accountNumber=${accountNumber}`);
  }
}


