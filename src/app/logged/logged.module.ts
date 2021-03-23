import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { authInterceptor } from '../shared/interceptors/auth.interceptor';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [HomeComponent],
    imports: [ CommonModule ],
    exports: [],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: authInterceptor,
        multi:true
      }],
})
export class loggedModule {}