import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { MedicalstoreService } from 'src/app/medicalstore.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  url: string = '';
  userName: string = '';
  constructor(
    private eService: MedicalstoreService,
    private router:Router,
    private changeDetector: ChangeDetectorRef
  ) {
    if (this.eService.getAdminName() !== null) {
      this.userName = this.eService.getAdminName();
    }
    this.eService.isAdminLoginPresent();
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: any) => {
      this.url = event?.url;
    });
  }
  gotourl(url: string): void {
    if (url === '/admin/logout') {
          this.eService.adminLogout();
          return;
        }
    this.router.navigate(["/"+url]);
  }

}