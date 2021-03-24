import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpErrorResponse
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class authInterceptor implements HttpInterceptor {
  
  constructor(public router:Router){}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    
    console.log('http interceptada');
    const hd = {Authorization : 'bearer '+ localStorage.getItem('token')}
    const headers = new HttpHeaders(hd)
      const reqClone = req.clone({headers})
      return next.handle(reqClone)
        .pipe(
          catchError((err) => {
            console.log('error caught in service')
            console.error(err);
            this.router.navigate(['/login'])
            //Handle the error here
            
            return throwError(err);    //Rethrow it back to component
          }) 
          
          )
          
        }
        
     

}