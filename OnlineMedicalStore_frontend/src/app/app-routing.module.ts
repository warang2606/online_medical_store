import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerHeaderComponent } from './component/Customer/customer-header/customer-header.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { CustomerSignupComponent } from './component/Customer/customer-signup/customer-signup.component';
import { CustomerLoginComponent } from './component/Customer/customer-login/customer-login.component';
import { AdminLoginComponent } from './component/Admin/admin-login/admin-login.component';
import { CustomerHomeComponent } from './component/Customer/customer-home/customer-home.component';
import { CustomerCartComponent } from './component/Customer/customer-cart/customer-cart.component';
import { CustomerOrderComponent } from './component/Customer/customer-order/customer-order.component';
import { CustomerPaymentComponent } from './component/Customer/customer-payment/customer-payment.component';
import { AdminHomeComponent } from './component/Admin/admin-home/admin-home.component';
import { AdminAdditemComponent } from './component/Admin/admin-additem/admin-additem.component';
import { AdminListitemComponent } from './component/Admin/admin-listitem/admin-listitem.component';
import { AdminOrderlistComponent } from './component/Admin/admin-orderlist/admin-orderlist.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'change-password',component:ChangePasswordComponent},
  {path:'customer-signUp',component:CustomerSignupComponent},
  {path:'customer-login',component:CustomerLoginComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'Customer',children:[
    {path:'Home',component:CustomerHomeComponent},
    {path:'cart',component:CustomerCartComponent},
    {path:'order',component:CustomerOrderComponent},
    {path:'payment/:orderId/:totalPrice',component:CustomerPaymentComponent}
  ]},
  {path:'Admin',children:[
    {path:'home',component:AdminHomeComponent},
    {path:'add-item',component:AdminAdditemComponent},
    {path:'list-item',component:AdminListitemComponent},
    {path:'order-list',component:AdminOrderlistComponent}
  ]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
