import { Injectable } from '@angular/core';


@Injectable()
export class sharedserviceClass{
	private username;
	private token:string;

	constructor() {}

	setusername(message:string){
		this.username = message;
	}

	getusername(){
		return this.username;
	}

	settoken(token:string){
		this.token = token;
	}

	gettoken(){
		return this.username;
	}
}