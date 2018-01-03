import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, Response } from '@angular/http';

//routes
import { routes } from './app.routes';

//Components
import { AppComponent } from './app.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserLoginComponent } from './user-login/user-login.component';

//Modules
import { HomeModuleModule } from './home-module/home-module.module';

//services
import { httpserviceClass } from './myHttpservice';
import { sharedserviceClass } from './mySharedservice';
//End services

@NgModule({
  declarations: [
    AppComponent,
    UserSignupComponent,
    UserLoginComponent,    
  ],
  imports: [
    BrowserModule,
    routes,
    HttpModule,
    FormsModule,
    HomeModuleModule
  ],
  providers: [httpserviceClass, sharedserviceClass],
  bootstrap: [AppComponent]
})
export class AppModule { }
