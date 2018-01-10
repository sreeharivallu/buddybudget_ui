import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Http, Response,Headers } from '@angular/http';
import { sharedserviceClass } from '../../mySharedservice';
import { httpserviceClass } from '../../myHttpservice';


@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss']
})
export class AddGroupComponent implements OnInit {

  current: number = 0;
  groupAdd: boolean = false;
  group:any = {};
  groups:any;
  groupList;
  delGroup:any = {};
  selectedGroup;
  groupIndex;
  private currentUser;
  private headers;


  constructor(private router: Router, private sharedservice: sharedserviceClass, private httpservice: httpserviceClass) { }

  ngOnInit() {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
    console.log('xxxxx ====', this.currentUser);
    this.headers = new Headers();
      this.headers.append('Authorization','Bearer ' + this.currentUser.token);
    this.httpservice.getData("listGroup", this.headers)
      .subscribe(res => {
        console.log('groupList res is', res);        

          this.groups = res;
        
    })
  }

  addGroup(){
  
  	if (this.currentUser) {
      // logged in so return true
      console.log('current.token user is', this.currentUser.token);


      this.group.partner = this.group.partner.split(',');
      this.group.partner.push(this.currentUser.username);

      this.httpservice.postData("addGroup", this.group, this.headers)
      .subscribe(res => {
        console.log('addItem res is', res);
        this.groups = res;
        //this.router.navigate(['home','addItem',this.group.groupName]);
      })
    }else{
      this.router.navigate(['login']);
    }
  }


  deleteGroup(groupName){
    this.delGroup.username = this.sharedservice.getusername();
    this.delGroup.groupName = groupName;
    
    if (this.currentUser) {
      // logged in so return true
      console.log('current.token user is', this.currentUser.token);
      
      this.httpservice.postData("deleteGroup", this.delGroup, this.headers)
      .subscribe(res => {
        console.log('delGroup res is', res);
        this.groupList = res;        
      })
    }else{
      this.router.navigate(['login']);
    }
  }

  setSelectedGroup(index){
    this.groupIndex = index;
    this.selectedGroup=true;
  }
}
