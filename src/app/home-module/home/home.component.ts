import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from '../add-item/add-item.component';
import { AddGroupComponent } from '../add-group/add-group.component';
//import { HomeComponent } from './home.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  tiles: any = [];
  constructor() { }

  ngOnInit() {
    var tileData:any = {};
    tileData.tile_img = "Owned Groups";
    tileData.tile_link = "addGroup";
    this.tiles.push(tileData);

    tileData.tile_img = "Partnered Groups";
    tileData.tile_link = "addGroup";
    this.tiles.push(tileData);

  }

  logout():void {
     localStorage.removeItem('currentUser');
  }
}

/*
export const router: Routes = [
    {
        path: '',
       children:[
	 	{path: 'addItem/:groupName', component:AddItemComponent},
	 	{path: 'addGroup', component:AddGroupComponent},

	  	]
	}
];
*/