import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges, DoCheck {
  title = 'angular-paintings';
  isAuthenticated: any = JSON.parse(sessionStorage.getItem('isAuthenticated') || '');
  
  constructor(private authService: AuthService) { }
  
  ngOnChanges() {
  }

  ngDoCheck() {
    this.isAuthenticated = JSON.parse(sessionStorage.getItem('isAuthenticated') || '');
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
