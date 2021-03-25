import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:Auth
  constructor(private http:HttpClient){}
  getUserData(){
    return this.http.get(environment.apiUrl+'/users/me')
  }

  userInfo():Auth{
    return JSON.parse(localStorage.getItem('user'))
  }
  
  isLoggedIn(){
    if(localStorage.getItem('user') === null){
        return false
    }
    this.user = this.userInfo()
    
    let data = JSON.parse(atob(this.user.jwt.split('.')[1]))
    return !!(data.exp > ( Date.now() /1000 ))
  }


   role( route: ActivatedRouteSnapshot){
     
    const userRole = this.userInfo().user.role.id
        if (route.data.role && route.data.role.indexOf(userRole) === -1) {
          //this.router.navigate(['/home']);
          return false;
        }
        return true;
  } 

}
