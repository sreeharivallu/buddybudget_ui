import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Router, ActivatedRoute} from "@angular/router";
import { Http, Response,Headers } from '@angular/http';
import { sharedserviceClass } from '../../mySharedservice';
import { httpserviceClass } from '../../myHttpservice';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  myusername : string;
  item:any = {};
  groupName : string;
  itemList;
  private params:any;
  private currentUser;
  private headers;
  private id;readonly
  constructor(private location:Location,private router:Router, private activatedRoute:ActivatedRoute, private sharedservice: sharedserviceClass, private httpservice: httpserviceClass) { 
      	
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
    this.myusername = this.currentUser.username;

        this.params = this.activatedRoute.params.subscribe( params => {
         console.log(params);
         this.groupName = params['groupName'];
         this.id = params['id'];
        console.log('this group is', this.headers);
         this.httpservice.getData("listItems/" + this.groupName + '/' + this.id, this.headers)
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

    let data = {id:this.id,itemData:itemData.value};

  	this.httpservice.postData("addItem", data, this.headers)
  	.subscribe(res => {
  		console.log('addItem res is', res.itemList);
  		this.itemList = res.itemList;
  	})
  }

  goBack(){   
    this.location.back(); // <-- go back to previous location
  }

}
