import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PollService{
	constructor(private http:Http){}

	getPoll(pollId){
		return this.http.get('/api/poll/'+pollId)
		.map(res => res.json());
	}

	addAnswers(newAnswers, Id){
	var toBeAdded={
		newAnswers: newAnswers,
		answer_vote: ['']
	}
	var headers=new Headers();
		headers.append('Content-Type', 'application/json')
		
		return this.http.post('/api/poll/'+Id, JSON.stringify(toBeAdded), {headers: headers})
		.map(res =>res.json());
	}

addVote(VoteValue, Id){
	var votes={
		vote: VoteValue,
		id: Id};
	var headers=new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post('/api/vote', JSON.stringify(votes), {headers: headers})
		.map(res =>res.json());
	}

}