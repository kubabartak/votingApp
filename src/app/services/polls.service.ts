import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PollsService{
	constructor(private http:Http){}

	getPolls(){
		return this.http.get('/api/polls')
		.map(res => res.json());
	}

	addPoll(newPoll){
		var headers=new Headers();
		headers.append('Content-Type', 'application/json')
		return this.http.post('/api/newPoll', JSON.stringify(newPoll), {headers: headers})
		.map(res => res.json());
	}
}