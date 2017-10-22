import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService{
	constructor(private http:Http){}


	getPolls(userId){
		return this.http.get('/api/profile/'+userId)
		.map(res => res.json());
	}

	removePoll(pollId){

		return this.http.delete('/api/delete/'+pollId).map(res=> res.json())
	}
}
