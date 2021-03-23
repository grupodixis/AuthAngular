import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  user: any = {};
  constructor(
    private _login: LoginService,
    private router:Router
    ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {

  }

  login() {
    this._login.login(this.user).subscribe(res => {
      localStorage.setItem('token', res.jwt)
      console.log(res);
      this.router.navigate(['/home'])
    })
  }

  
}
