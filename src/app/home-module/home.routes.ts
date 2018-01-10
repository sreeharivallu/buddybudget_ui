
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { UserLoginComponent } from '../user-login/user-login.component';

export const router: Routes = [
  //  { path: '', redirectTo: 'welcome', pathMatch: 'full'}, 
    //{ path: 'welcome',  component: HomeComponent,
    { path: '', component: HomeComponent,
       children:[
        //{path: '', redirectTo:'addGroup', pathMatch: 'full' },
	 	{path: 'addItem/:groupName/:id', component:AddItemComponent},
	 	{path: 'addGroup', component:AddGroupComponent}
	  	]
	},
	//{path: 'logout', component:UserLoginComponent}
];

export const routes: ModuleWithProviders = RouterModule.forChild(router);