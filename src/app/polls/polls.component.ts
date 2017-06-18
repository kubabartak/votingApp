import { Component } from '@angular/core';
import { PollsService} from '../services/polls.service';
import {Polls} from '../../Poll';

@Component({
  moduleId: module.id,
  selector: 'polls',
  templateUrl: `./polls.component.html`
})
export class PollsComponent  {
	polls: Polls[];
	pollName: string;
	pollAnswer: string;
	
	constructor(private pollsService:PollsService){
		this.pollsService.getPolls()
		.subscribe(polls =>{
			this.polls = polls;
		})
	}

	addPoll(event){
		event.preventDefault();
		var newPoll = {
			poll_name: this.pollName,
			poll_options: this.pollAnswer
		}

		this.pollsService.addPoll(newPoll)
		.subscribe(poll =>{
			this.polls.push(poll);
			this.pollName='';
			this.pollAnswer='';
		})
	}

		
	
}
