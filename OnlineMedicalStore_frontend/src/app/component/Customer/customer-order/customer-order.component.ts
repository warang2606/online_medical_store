import { Component, OnInit } from '@angular/core';
import { Order } from '../../Model/order.model';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MedicalstoreService } from 'src/app/medicalstore.service';
import { take } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CustomerOrderHistoryComponent } from '../customer-order-history/customer-order-history.component';


@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent implements OnInit {
  
  orderList: Order[]=[];
  constructor(
    private gService: MedicalstoreService,
    private router: Router,
    private datePipe : DatePipe,
    private dialog: MatDialog
  ) { 
    this.gService.isClientLoginPresent();
  }

  ngOnInit(): void {
    this.getOrderList();
  }
  getOrderList():void{
    this.gService.orderList(this.gService.getClientAuthorization()).pipe(take(1)).subscribe(
      (res: any) => {
        console.log("************",res);
        if(!!res && Array.isArray(res)){
          this.orderList=res;
        }
        
      }, err => {
        console.log("Error");
      }
    )
  }
  getDate(d:string|undefined):any{
    //return  !!d ? this.datePipe.transform(new Date(d),"" )?.toString(): "";
    //return this.datePipe.transform(d,"").toString();
    let ans :any;
    console.log("DDDDDD",d);
    if(!!d && d!== null){
      ans=this.datePipe.transform(d,"shortDate")||null;
      console.log("@@@@@@@@",ans);
    }
    return ans;
  }
  
  addPayment(order: Order): void {
    this.router.navigate([`/Customer/payment/${order?.orderId}/${order?.totalPrice}`])
  }
  openHistory(order: Order): void {
    console.log('>>>>>>>', order);
    const dialogRef = this.dialog.open(CustomerOrderHistoryComponent, {
      data: order,
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '80%',
      width: '80%'
      
    }); 
  }

}
