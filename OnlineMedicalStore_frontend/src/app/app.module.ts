import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import { AdminHeaderComponent } from './component/Admin/admin-header/admin-header.component';
import { AdminHomeComponent } from './component/Admin/admin-home/admin-home.component';
import { AdminListitemComponent } from './component/Admin/admin-listitem/admin-listitem.component';
import { AdminAdditemComponent } from './component/Admin/admin-additem/admin-additem.component';
import { CustomerHeaderComponent } from './component/Customer/customer-header/customer-header.component';
import { CustomerLoginComponent } from './component/Customer/customer-login/customer-login.component';
import { CustomerCartComponent } from './component/Customer/customer-cart/customer-cart.component';
import { CustomerOrderComponent } from './component/Customer/customer-order/customer-order.component';
import { CustomerPaymentComponent } from './component/Customer/customer-payment/customer-payment.component';
import { AdminLoginComponent } from './component/Admin/admin-login/admin-login.component';
import { CustomerHomeComponent } from './component/Customer/customer-home/customer-home.component';
import { CustomerSignupComponent } from './component/Customer/customer-signup/customer-signup.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { AppHeaderComponent } from './component/app-header/app-header.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { PagingComponent } from './component/paging/paging.component';
import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/core';
import { AdminOrderlistComponent } from './component/Admin/admin-orderlist/admin-orderlist.component';
import { CustomerOrderHistoryComponent } from './component/Customer/customer-order-history/customer-order-history.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonToggleModule} from '@angular/material/button-toggle';




@NgModule({
  declarations: [
    AppComponent,
    AdminHeaderComponent,
    AdminHomeComponent,
    AdminListitemComponent,
    AdminAdditemComponent,
    CustomerHeaderComponent,
    CustomerLoginComponent,
    CustomerCartComponent,
    CustomerOrderComponent,
    CustomerPaymentComponent,
    AdminLoginComponent,
    CustomerHomeComponent,
    CustomerSignupComponent,
    AboutUsComponent,
    AppHeaderComponent,
    ChangePasswordComponent,
    ContactUsComponent,
    ForgotPasswordComponent,
    HomePageComponent,
    PagingComponent,
    AdminOrderlistComponent,
    CustomerOrderHistoryComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    MatSliderModule,
    HttpClientModule,
    MatMenuModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatDialogModule,
    MatButtonToggleModule
  
  
  ],
  providers: [
    DatePipe
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
