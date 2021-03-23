import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user.interface';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  //host:string ='http://dixis.es:34471'
  host:string ='http://localhost:1337'
  private http: HttpClient;
  constructor(handler: HttpBackend) {
    this.http = new HttpClient(handler);
   }
  
  //Login Method //
  login(user:any):Observable <any>{
    const uri = '/auth/local'
    return this.http.post(this.host + uri, user)
  }
  


}
