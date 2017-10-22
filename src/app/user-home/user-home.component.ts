import { Component, OnInit } from '@angular/core';
import { PollsService} from '../services/polls.service';
import {Polls} from '../../Poll';
import {AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent {

  polls: Polls[];
	pollName: string;
	pollAnswer: string;
	userInfo: string;
	profile: object;

	
	constructor(private pollsService:PollsService,
		private authService: AuthService){
		this.pollsService.getPolls()
		.subscribe(polls =>{
			this.polls = polls;
		});
		this.userInfo = localStorage.getItem('profile');
		this.profile=JSON.parse(this.userInfo);
	console.log(this.profile)
	}

	addPoll(event){
		event.preventDefault();
		var newPoll = {
			poll_name: this.pollName,
			poll_options: this.pollAnswer,
			poll_author: this.profile["nickname"],
			poll_author_id: this.profile["sub"]

		};
		
		this.pollsService.addPoll(newPoll)
		.subscribe(poll =>{
			this.polls.push(poll);
			this.pollName='';
			this.pollAnswer='';
		})
	}

		
	

}
