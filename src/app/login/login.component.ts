import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { PaintingService } from '../services/painting.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  public loginInvalid: Boolean = true;
  private formSubmitAttempt: boolean = false;
  private returnUrl: string = "";

  constructor(private route:ActivatedRoute, 
              private paintingService: PaintingService,
              private fb: FormBuilder,
              private router: Router,
              private authService: AuthService) { 
   
  }

  async ngOnInit(){
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/paintings';

    this.form = this.fb.group({
      'username': ['', Validators.email],
      'password': ['', Validators.required]
    });

    if(await this.authService.checkAuthenticated()) {
      this.getPaintingsData();
      await this.router.navigate([this.returnUrl]);
    }
  }

  async onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if(this.form.valid) {
      try {
        const username = this.form.value.username;
        const password = this.form.value.password;
        await this.authService.login(username, password).then((response) => {
          console.log("Login response: ", response);
        });
      } catch (error) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }

  getPaintingsData() {
    this.route.data.subscribe((res) => {
      console.log("app component data: " ,res);
      this.paintingService.paintingsData = res.paintings;
      sessionStorage.setItem('paintings', JSON.stringify(res.paintings) || '');
    })
  }
}
