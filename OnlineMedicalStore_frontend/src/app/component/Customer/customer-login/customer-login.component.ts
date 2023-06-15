import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { MedicalstoreService } from 'src/app/medicalstore.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit{
  email: string = "";
  password: string = "";
  //clientLoginForm = new FormGroup({});
  customerLoginForm:any;

  constructor(
    private router: Router,
    private gservice:MedicalstoreService,
    private fb: FormBuilder

  ) {
    const pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 
    this.customerLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(pattern)]],
      password: [null, Validators.compose([Validators.required, Validators.minLength(8)])]
    });

  }

  ngOnInit(): void {
  }

  
  signIn(): void {

    const body = {
      "emailID": this.customerLoginForm.controls['email'].value,
      "password": this.customerLoginForm.controls['password'].value
    }
    console.log("=======>",body);
    this.gservice.clientSignIn(body).pipe(take(1)).subscribe((res :any) => {
      console.log("*****",res);
      if(res && res?.customerId){
       // alert("Login sucessful");
        this.gservice.storeClientAuthorization(res?.customerId);
        let userName = '';
        if (res?.firstName) {
          userName+=res?.firstName;
        }
        if (res?.lastName){
          userName+=' ' + res?.lastName;
        }
        this.gservice.storeClientUserName(userName);
         this.router.navigate(['/Customer/Home']);
       
       
      }
    }, err => {
      console.log("Error ", err);
      console.log(">>> ", err);
      if(err?.error && err?.error.startsWith("Customer  not found with")      ){
        alert("Customer username/password invalid");
      }
      else{
        alert("Something going wrong in login! pl try again");
      }
    })
  }

  routeToNewUser(): void {
    this.router.navigate(["/customer-signUp"]);
  }

  routeToForgotPassword(): void {
    this.router.navigate(["/forgot-password"]);
  }


}
