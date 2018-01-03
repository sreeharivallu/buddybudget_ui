import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

//services
import { httpserviceClass } from '../myHttpservice';
import { sharedserviceClass } from '../mySharedservice';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  error;
  model:any = {};
  constructor(private router: Router, private httpservice: httpserviceClass, 
  				private sharedservice: sharedserviceClass) { }

  ngOnInit() {
    this.error = null;
  }

  login(){
  	 console.log('model is', this.model);

    this.httpservice.postData("login", this.model)
      .subscribe(res => {
        console.log('res from login is', res);
        if(res.success){
          localStorage.setItem('currentUser',
               JSON.stringify({ username: this.model.username, token: res.token }));
          this.sharedservice.setusername(this.model.username);
          this.sharedservice.settoken(res.token);
          this.router.navigate(['home']);  
        }else{
          console.log('login failed');
          this.error =  "Invalid login details";
        }        
      
    })

  	
  	
   }

  }

