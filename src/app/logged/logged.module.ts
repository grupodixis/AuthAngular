import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { authInterceptor } from '../shared/interceptors/auth.interceptor';
import { HomeComponent } from './home/home.component';
import { LoggedRoutingModule } from './logged.routing';
import { PartesComponent } from './partes/partes.component';
import { NuevoComponent } from './partes/nuevo/nuevo.component';

@NgModule({
    declarations: [HomeComponent, PartesComponent, NuevoComponent],
    imports: [ CommonModule,LoggedRoutingModule ],
    exports: [],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: authInterceptor,
        multi:true
      }],
})
export class loggedModule {}