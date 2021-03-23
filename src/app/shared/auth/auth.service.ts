import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  host:string ='http://localhost:1337'
  constructor(private http:HttpClient, private route:Router){}
  getUserData(){
    return this.http.get(this.host+'/users/me')
  }
 returnToLogin(){
   this.route.navigate(['/login'])
 }

}
