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
  
  constructor(private router:Router){}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    
    console.log('http interceptada');
    const headers = new HttpHeaders(
      {Authorization : 'bearer '+ localStorage.getItem('token')}
      )
      const reqClone = req.clone({
        headers
      })
      
      
      return next.handle(reqClone).pipe(
        catchError(this.manejarErrores)
        
        )
        
      }
      
      
      manejarErrores(err:HttpErrorResponse){
        console.log('Ocurrio un error');
        console.log('Se ha registrado en el Log');
        console.warn(err);
        return throwError('Error personalizado') 
  }

}