import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor(
    private router:Router,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
  }
  logout(){
    this.router.navigate(['/logout'])
  }

  validUser(){
    this.authService.getUserData().subscribe(res => console.log(res))
    
    
  }

}
