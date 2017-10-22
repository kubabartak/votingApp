import { Component } from '@angular/core';
import { PollsService} from '../services/polls.service';
import {Polls} from '../../Poll';
import {AuthService } from '../services/auth.service';
import { AuthGuard } from '../services/auth-guard.service';

@Component({
  moduleId: module.id,
  selector: 'polls',
  templateUrl: `./polls.component.html`,
  providers: [AuthGuard, AuthService],
})
export class PollsComponent {

  polls: Polls[];
	pollName: string;
	pollAnswer: string;
	
	constructor(private pollsService:PollsService){
		this.pollsService.getPolls()
		.subscribe(polls =>{
			this.polls = polls;
		})
	}

		
	

}
