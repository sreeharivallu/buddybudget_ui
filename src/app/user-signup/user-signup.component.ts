import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import {Router} from "@angular/router";

//services
import { httpserviceClass } from '../myHttpservice';
import { sharedserviceClass } from '../mySharedservice';


//End services

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  reg:any = {};
  constructor(private router: Router,  private httpservice: httpserviceClass, 
  				private sharedservice: sharedserviceClass) { }

  ngOnInit() {

  }

  submitSignupForm(signupData){
  	console.log("signupData", signupData);
  	console.log('this.reg is', this.reg);

  	this.httpservice.postData("signup", this.reg)
  		.subscribe(res => {
  			console.log('res from signup is', res);
  			
  			this.router.navigate(['login']);
  		
  	})

  }
}
