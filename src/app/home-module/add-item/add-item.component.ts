import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Router, ActivatedRoute} from "@angular/router";
import { Http, Response,Headers } from '@angular/http';
import { sharedserviceClass } from '../../mySharedservice';
import { httpserviceClass } from '../../myHttpservice';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  myusername : string;
  item:any = {};
  groupName : string;
  itemList;
  private params:any;
  private currentUser;
  private headers;
  constructor(private location:Location,private router:Router, private activatedRoute:ActivatedRoute, private sharedservice: sharedserviceClass, private httpservice: httpserviceClass) { 
    
  	this.myusername = this.sharedservice.getusername();
  	console.log("myusername is", this.myusername);

  	 // read the route parameter in constructor
  	      var self = this;
           var gg = this.activatedRoute.snapshot.queryParams["groupName"];
           console.log('gg is', this.params);

  	//console.log('activatedRoute params',activatedRoute.params.value);
  }

  ngOnInit() {

  	/*this.id = this.activatedRoute.queryParams.subscribe(params => {      
       this.groupName = params['groupName']; 
    });*/
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
    this.headers = new Headers();
    this.headers.append('Authorization','Bearer ' + this.currentUser.token);

        this.params = this.activatedRoute.params.subscribe( params => {
         console.log(params);
         this.groupName = params['groupName'];
        console.log('this group is', this.headers);
         this.httpservice.getData("listItems/" + this.groupName, this.headers)
          .subscribe(res => {
            console.log('itemList in res is', res.itemList);
            this.itemList = res.itemList;
          })
            });
  }

  addItem(itemData){
  	console.log('groupname is', this.groupName);
  	console.log('item details are', this.item);
  	console.log('form Inputs are', itemData.value);


  	this.httpservice.postData("addItem", itemData.value, this.headers)
  	.subscribe(res => {
  		console.log('addItem res is', res.itemList);
  		this.itemList = res.itemList;
  	})
  }

  goBack(){   
    this.location.back(); // <-- go back to previous location
  }

}
