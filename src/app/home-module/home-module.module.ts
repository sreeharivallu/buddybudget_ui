//import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, Response } from '@angular/http';

//routes
import { routes } from './home.routes';

import { HomeComponent } from './home/home.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { AddItemComponent } from './add-item/add-item.component';

//services
import { httpserviceClass } from '../myHttpservice';
import { sharedserviceClass } from '../mySharedservice';

@NgModule({
  imports: [
    CommonModule,
   // BrowserModule,
    routes,
    HttpModule,
    FormsModule,
    routes
  ],
  declarations: [HomeComponent, AddGroupComponent, AddItemComponent],
  providers: [httpserviceClass, sharedserviceClass],
})
export class HomeModuleModule { }
