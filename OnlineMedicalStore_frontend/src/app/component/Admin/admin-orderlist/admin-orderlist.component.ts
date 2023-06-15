import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MedicalstoreService } from 'src/app/medicalstore.service';
import { Order } from '../../Model/order.model';
import {take} from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin-orderlist',
  templateUrl: './admin-orderlist.component.html',
  styleUrls: ['./admin-orderlist.component.css']
})
export class AdminOrderlistComponent {
  orderList: Order[] = [];
  tempOrderList: Order[] = [];
  today = new Date();
  constructor(
    private fService: MedicalstoreService,
    private router: Router,
    private datePipe: DatePipe
  ) {
    this.fService.isAdminLoginPresent();
  }

  ngOnInit(): void {
    this.getOrderList();
  }
  getOrderList(): void {
    this.fService.getAllorderList().pipe(take(1)).subscribe(
      (res: any) => {
        if (!!res && Array.isArray(res)) {
          this.orderList = res;
          this.tempOrderList = res;
        }
      }, err => {
        console.log("Error");
      }
    )
  }
  getDate(d: string | undefined): any {
    let ans: any;
    if (!!d && d !== null) {
      ans = this.datePipe.transform(d, "shortDate") || null;
    }
    return ans;
  }

  changeDate(ev: any): void {
    const date: string = this.datePipe.transform(ev?.value, 'yyyy-MM-dd')?.toString() || '';
   //  console.log(new Date(this.orderList[0].orderedDate).getTime(), '>>>>>>', new Date(date).getTime() );
    this.orderList= this.tempOrderList.filter((item: Order) => new Date(item?.orderedDate).getTime() === new Date(date).getTime() );
    // this.appointmentDate = date;
  }

}


