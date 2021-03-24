//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { loggedModule } from './logged/logged.module';

//Routes
import { AppRoutingModule } from './app.routing';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import { LogoutComponent } from './login/logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    loggedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
