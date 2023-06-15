import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],

})
export class HomePageComponent implements OnInit{
  gotourl(url: string): void {
    this.route.navigate(["/"+url]);
  }



  constructor(
    private route: Router
  ) {
    // config.interval = 2000;
    // config.keyboard = false;
    // config.pauseOnHover = false;
  }

  ngOnInit(): void {
  }

  gotoLogin(): void {
    this.route.navigate(['/customer-login'])
  }
  
}