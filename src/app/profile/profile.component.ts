
import { Component, OnInit } from '@angular/core';
import { ProfileService} from '../services/profile.service';
import {PollsService} from '../services/polls.service';
import {Polls} from '../../Poll';
import {AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  polls: Polls[];
	pollName: string;
	pollAnswer: string;
	userInfo: string;
	profile: object;

	
	constructor(private profileService:ProfileService,
		private pollsService: PollsService,
		private authService: AuthService){

		this.userInfo = localStorage.getItem('profile');
		this.profile=JSON.parse(this.userInfo);
		this.profileService.getPolls(this.profile["sub"])
		.subscribe(polls =>{
			this.polls = polls;
		});
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
	delete(poll){
		event.preventDefault();
		this.polls = this.polls.filter(h => h!==poll);
		this.profileService.removePoll(poll._id).subscribe(message=>{console.log(message)});

	}

		
	

}

