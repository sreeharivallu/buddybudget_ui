
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AddGroupComponent } from './add-group/add-group.component';

export const router: Routes = [
    {
        path: '',  component: HomeComponent,
       children:[
	 	{path: 'addItem/:groupName', component:AddItemComponent},
	 	{path: 'addGroup', component:AddGroupComponent},
	  	]
	}
];

export const routes: ModuleWithProviders = RouterModule.forChild(router);