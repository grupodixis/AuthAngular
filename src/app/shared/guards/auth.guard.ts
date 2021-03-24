import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  user:Auth
  exp:boolean
  constructor(private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
      if (!this.isUserLogged()){
        this.router.navigate(['/login'])
        return false
      }else{
        return true
      } 
    }
  


  checkExp(){
    //let data = JSON.parse(atob(this.user.jwt.split('.')[1]))
    //console.log(data.exp)
    console.log(Date.now());
    }

  userInfo(){
    return JSON.parse(localStorage.getItem('user'))
  }
  
  isUserLogged(){
    if(localStorage.getItem('user') === null){
        return false
    }
    this.user = this.userInfo()
    let data = JSON.parse(atob(this.user.jwt.split('.')[1]))
    return !!(data.exp > ( Date.now() /1000 ))
    
  }

}
