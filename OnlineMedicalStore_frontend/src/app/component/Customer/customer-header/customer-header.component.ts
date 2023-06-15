import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { MedicalstoreService } from 'src/app/medicalstore.service';

@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.css']
})
export class CustomerHeaderComponent implements OnInit {
  url: string = "/client/home";
  userName: string = '';
  constructor(
    private gService :MedicalstoreService,
    private router:Router
  ) {
    if (this.gService.getClientName() !== null) {
      this.userName = this.gService.getClientName();
    }
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: any) => {
      this.url = event?.url;
    });
  }
  routerToLink(link: string): void {
    if (link === '/Customer/logout') {
      this.gService.clientLogout();
      return;
    }
    this.router.navigate([link]);
  }



}
