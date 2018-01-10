import { Injectable } from '@angular/core';
import { Http, Response,Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class httpserviceClass{

	constructor(private http: Http){		

	}

	private handleErrorObservable (error: Response | any) {
		console.error(error.message || error);
		return Observable.throw(error.message || error);
    }

	postData(path, data, headers?:Headers){

 		//let url = 'https://buddybudgetapi.herokuapp.com/' + path;
 		let url = 'http://localhost:3000/' + path;
        //let headers  = data.headers;
		console.log('data is', data);
		return this.http.post(url, data, {headers:headers})
		.map(response=> {
			console.log('response is', response);
			return response.json()	
		})
		// .catch(this.handleErrorObservable);	
		

		
	//.catch((error: any) => {
		//	return error;
		//})
	}

	getData(path, headers?:Headers){
		//let url = 'https://buddybudgetapi.herokuapp.com/' + path;
		let url = 'http://localhost:3000/' + path;
		return this.http.get(url, {headers:headers})
		.map(response=> response.json());
	}

}