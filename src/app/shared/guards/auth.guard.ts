import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  user:Auth
  constructor(private router:Router, private auth:AuthService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
      if (!this.auth.isLoggedIn()){
        this.router.navigate(['/login'])
        return false
      }else{
        return true
      } 
    }

  userInfo(){
    return JSON.parse(localStorage.getItem('user'))
  }
  
  isUserLogged(){
    if(localStorage.getItem('user') === null){
        return false
    }
   // if(this.auth.role())
    this.user = this.userInfo()
    let data = JSON.parse(atob(this.user.jwt.split('.')[1]))
    return !!(data.exp > ( Date.now() /1000 ))
    
  }

}
