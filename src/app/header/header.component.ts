import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges, DoCheck {
  title = 'angular-paintings';
  isAuthenticated: any = JSON.parse(sessionStorage.getItem('isAuthenticated'));;
  
  constructor(private authService: AuthService) {
    
   }
  
  ngOnChanges() {
    // this.isAuthenticated = JSON.parse(sessionStorage.getItem('isAuthenticated'));
    // console.log("isAuthenticated in header in OnChanges : ", this.isAuthenticated);
    // console.log("isAuthenticated typeOf in header : ", typeof this.isAuthenticated);
  }

  ngDoCheck() {
    this.isAuthenticated = JSON.parse(sessionStorage.getItem('isAuthenticated'));
    console.log("isAuthenticated in header in DoCheck : ", this.isAuthenticated);
    console.log("isAuthenticated typeOf in header : ", typeof this.isAuthenticated);
  }
  ngOnInit(): void {
  }

  logout() {
    this.authService.logout('/').then((response) => {
      console.log("Logged out successfully.");
      sessionStorage.clear();
    });
  }
}
