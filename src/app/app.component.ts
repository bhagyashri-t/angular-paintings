import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isAuthenticated: Boolean = false;

  constructor(public authService: AuthService) {
    this.authService.isAuthenticated.subscribe((isAuthenticated:Boolean) => {
      this.isAuthenticated = isAuthenticated;
      sessionStorage.setItem('isAuthenticated', isAuthenticated.toString());
    });
   }

   async ngOnInit() {
     this.isAuthenticated = await this.authService.checkAuthenticated();
   }
}
