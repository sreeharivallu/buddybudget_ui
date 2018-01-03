
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomeModuleModule } from './home-module/home-module.module';
import { HomeComponent } from './home-module/home/home.component';


export const appRoutes: Routes = [

{path:'', redirectTo:'login', pathMatch: 'full'},
{path: 'login', component : UserLoginComponent},
//{path: '', redirectTo: '/login', pathMatch: 'full'},
{path: 'signup', component : UserSignupComponent}, 
{path: 'home', loadChildren: './home-module/home-module.module#HomeModuleModule'},    
 //{path: 'home', component:HomeComponent, children:[
 //	{path: 'addItem/:groupName', component:AddItemComponent},
 //	{path: 'addGroup', component:AddGroupComponent},
  //	]}
 //{path: 'signin', component:UserSigninComponent} 
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);