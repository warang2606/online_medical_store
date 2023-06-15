import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { MedicalstoreService } from 'src/app/medicalstore.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements  OnInit{
  email: string = "";
  password: string = "";

  constructor(
    private router:Router,
    private eservice:MedicalstoreService
  ) { }

  ngOnInit(): void {
  }
  signIn(): void {
    const pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 
    if (!pattern.test(this.email)) {
      alert("Email is not valid.");
      return;
    }
    if (this.password === '') {
      alert("Password should not be blank");
      return;
    }
    //alert("sucess")
    const body = {
      "adminEmailId": this.email,
      "adminPassword": this.password
    }
    
    this.eservice.adminSignIn(body).pipe(take(1)).subscribe((res :any) => {
      console.log("*****",res);
      if(res && res?.adminId){
        let userName = '';
        if (res?.firstName) {
          userName+=res?.firstName;
        }
        if (res?.lastName){
          userName+=' ' + res?.lastName;
        }
        this.eservice.storeAdminUserName(userName);
        this.eservice.storeAdminAuthorization(res?.adminId);
        this.router.navigate(['/Admin/home']);
       
      }
    }, err =>{
      console.log("Error  ",err);
      alert("Something going wrong in login!!pl try again");
    })
  }

}
