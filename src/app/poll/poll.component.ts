import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PollService} from '../services/poll.service';
import {Polls} from '../../Poll';


@Component({
    moduleId: module.id,
  	selector: 'poll',
    templateUrl: './poll.component.html'
})


export class PollComponent implements OnInit {

poll_name: string; 
poll_options: string[];
newAnswers: string[];
Id: string;
VoteValue;


    constructor(private route: ActivatedRoute,
    	private pollService:PollService) {

    	 }

    ngOnInit() {
        // get param
        this.Id=this.route.snapshot.params.id;
        this.pollService.getPoll(this.Id)
		.subscribe(poll =>{
			this.poll_name = poll.poll_name;
			this.poll_options = poll.poll_options;
			});			
		}

		addAnswers(event){
		event.preventDefault();
		this.pollService.addAnswers(this.newAnswers, this.Id)
		.subscribe(poll =>{
			this.poll_options=poll.poll_options;
			this.newAnswers=[];	
		})
    }

		addVote(event){
		event.preventDefault();
		this.pollService.addVote(this.VoteValue, this.Id)
		.subscribe(docs =>{
			
			this.poll_options=docs.poll_options
			
			;
			
		})
    };


}; 
