import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private http: HttpClient;
  constructor(handler: HttpBackend) {
    this.http = new HttpClient(handler);
   }
  
  //Login Method //
  login(user:any):Observable <any>{
    const uri = '/auth/local'
    return this.http.post(environment.apiUrl + uri, user)
  }
  


}
