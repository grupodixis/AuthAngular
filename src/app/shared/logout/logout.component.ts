import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.logout()
  }

  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')

    this.router.navigate(['/login'])
  }
}
