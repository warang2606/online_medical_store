import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicalstoreService  {
  url: string = 'http://localhost:8085';  //backend port number

  category: any = [{
    name: "MULTIVITAMINS" , value: 0,
  }, {
    name: "TABLETS", value: 1,
  }, {
    name: "BABYPRODUCTS", value: 2
  }, {
    name: " LIQUIDS", value:  3
  }, {
    name: "CAPSULE", value:  4
  }, {
    name: "INHALERS", value:  5
  }
];


  constructor(
    private http: HttpClient,
    private router: Router

  ) { }
  /* Client Registeration */
  signUp(body: any): Observable<any> {
    return this.http.post(this.url + "/api/customers/register", body);
  }
  //client login
  clientSignIn(body: any): Observable<any> {
    return this.http.post(this.url + "/api/customers/login", body);
  }
//once we logged in that time we are storing client id into token 
storeClientAuthorization(token: string): void {
  localStorage.setItem("token", token);
}

getClientAuthorization(): any {
  const token = localStorage.getItem("token");
  return token; 
}

storeClientUserName(name: string): void {
  localStorage.setItem("userName", name);
}

getClientName(): any {
  const name = localStorage.getItem("userName");
  return name;
}

clientLogout(): void {
  localStorage.clear(); 
  this.router.navigate(['']);
}
//admin login
adminSignIn(body: any): Observable<any> {
  return this.http.post(this.url + "/api/admin/login", body);
}
storeAdminAuthorization(token: string): void {
  localStorage.setItem("admin", token);
}
getAdminAuthorization(): any {
  const token = localStorage.getItem("admin");
  return token; 
}

storeAdminUserName(name: string): void {
  localStorage.setItem("adminName", name);
}

getAdminName(): any {
  const name = localStorage.getItem("adminName");
  return name;
}
//this is to get username from admin.home.html
isAdminLoginPresent(): void {
  if (this.getAdminAuthorization() === null) {
    this.router.navigate(['/admin-login']);
  }

}

adminLogout(): void {
  localStorage.clear();
  this.router.navigate(['']);
}
addProduct(body: any): Observable<any> {
  return this.http.post(this.url + "/api/products/add products", body);
}
getAllProducts(offset: any, limit: any):Observable<any>{
  return this.http.get(this.url+"/api/products/" + offset + "/" + limit);
}

getProductlist():Observable<any> {
  return this.http.get(this.url + "/api/products");
}
getAllorderList():Observable<any>{
  return this.http.get(this.url+"/api/orders/");
}

deleteProduct(id :any):Observable<any> {
  //return this.http.delete(this.url + "/api/products/" +id);
  //secondway
  return this.http.delete(`${this.url}/api/products/${id}`);
}

getProductById(id:any):Observable<any> {
  return this.http.get(this.url + "/api/products/products/"+id);
}

editProduct(body: any,id:any): Observable<any> {
  return this.http.put(this.url + "/api/products/"+id, body);
}

addToCart(body: any,pid:any,cid:any):Observable<any>{
  return this.http.post(this.url+"/api/cart/"+cid+"/"+pid,body);
}

getCustomerById(id:any):Observable<any> {
  return this.http.get(this.url + "/api/customers/customer/"+id);
}

cartList():Observable<any>{
  return this.http.get(this.url+"/api/cart/list");
}
placeOrderItem(cid:any, body:any):Observable<any>{
  return this.http.post(this.url + "/api/orders/addOrder/"+cid+"/", body);
}
deleteCart(id :any):Observable<any> {
  
  return this.http.delete(`${this.url}/api/cart/${id}`);
}

orderList(id:any):Observable<any>{
  return this.http.get(this.url+"/api/orders/"+id);
}

getCategoryList(): any {
  return this.category;
}
addPayment(body:any,orderid:any,cid:any):Observable<any> {
  return this.http.post(this.url + "/api/payements/"+orderid+"/"+cid, body);
}

isClientLoginPresent(): void {
  if (this.getClientAuthorization() === null) {
    this.router.navigate(['/client-login']);
  }
}

forgotPassword(body: any):Observable<any> {
  return this.http.post(this.url + "/api/customers/forgotpassword", body);
}

updateCustomerInformation(body: any):Observable<any> {
  return this.http.put(this.url + "/api/customers/customer/"+body?.customerId, body);
}

changePassword(cid: any,password:any):Observable<any> {
  return this.http.post(this.url + "/api/customers/"+cid+"/"+password,{});
}

getProductByCategory(cid: any, offset: any, limit: any):Observable<any>{
  return this.http.get(this.url+"/api/products/" + cid + "/"+ offset + "/" + limit);
}
addOrderItem(cid:any,Body:any):Observable<any> 
{
  return this.http.post(this.url + "/addOrder/"+cid, Body);
}

}
