import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient, private route:Router){}
  getUserData(){
    return this.http.get(environment.apiUrl+'/users/me')
  }
 returnToLogin(){
   this.route.navigate(['/login'])
 }

}
