import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { MedicalstoreService } from 'src/app/medicalstore.service';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css']
})
export class CustomerSignupComponent {
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  password: string = "";
  dob: string = "";
  phone: string = "";
  district: string = "";
  state: string = "";
  zipcode: string = "";
  gender: string = "male";

  constructor(
    
    private router: Router,
    private datePipe: DatePipe,
    private gservice:MedicalstoreService

  ) { }

  ngOnInit(): void {
  }
  setDOB(ev: any): void {
    const date: any = this.datePipe.transform(ev?.value, 'yyyy-MM-dd');
    this.dob = date;
  }


  signup(): void {
    const emailpattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (this.firstName === '' || this.firstName.length < 3) {
      alert('FirstName must contain atleast 3 characters');
      return;
    }
    if (this.lastName === '' || this.lastName.length < 3) {
      alert('LastName must contain atleast 3 characters');
      return;
    }
    if (!emailpattern.test(this.email)) {
      alert("Email is not valid.");
      return;
    }
    if (this.phone === '' || this.phone.length < 10 || this.phone.length > 10) {
      alert('Phone must contain atleast 10 characters');
      return;
    }
    const pattern=/^[6789][0-9]{9}$/;
    if (!pattern.test(this.phone)) {
      alert('Invalid mobile number.');
      return;
    }
    if (this.district === '' || this.district.length < 3) {
      alert('District must contain atleast 3 characters');
      return;
    }
    if (this.state === '' || this.state.length < 3) {
      alert('State must contain atleast 3 characters');
      return;
    }
    if (this.zipcode === '' || this.zipcode.length < 6) {
      alert('Zipcode must contain atleast 6 characters');
      return;
    }
    const passpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passpattern.test(this.password)) {
      alert("Password should contains 1 Uppercase, 1 Digit and should be 8 character long");
      return;
    }
    // if(this.password.length<8)
    // {
    //    alert("Password should contains 1 Uppercase, 1 Digit and should be 8 character long");
    //    return;
    // }
//alert("sucess")
    const body: any = {
      firstName : this.firstName,
      lastName : this.lastName,
      dateOfBirth :this.dob,
      phoneNumber : this.phone,
      district : this.district,
      state: this.state,
      zipCode :this.zipcode,
      emailID :this.email,
      gender :this.gender,
      password:this.password

    }
    console.log("=======>",body);
    this.gservice.signUp(body).pipe(take(1)).subscribe((res :any) => {
      console.log("*****",res);
      if(res && res?.customerId){
        alert("Registration sucessfull!!");
        this.router.navigate(["/customer-login"]);
      }
    }, err => {
      console.log("Error  ", err);
      if (err && err?.error === 'Oops duplicate Entry of the data !') {
        alert("Email address already in use, please select another email address for create account.");
      } 
      
    })
  }


}
