import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PollService} from '../services/poll.service';
import {Polls} from '../../Poll';
import {ChartsModule} from 'ng2-charts';
import {AuthService } from '../services/auth.service';
import { AuthGuard } from '../services/auth-guard.service';


@Component({
    moduleId: module.id,
  	selector: 'poll',
    templateUrl: './poll.component.html'
})


export class PollComponent implements OnInit {

poll_author: string;
poll_name: string; 
poll_options: string[];
newAnswers: string[];
Id: string;
VoteValue;
chartLabels: any =[];
chartData: number[]=[];
// Pie

  public pieChartType:string = 'pie';
  public pieChartOptions: any = {responsive: true, 
  	maintainAspectRatio: false};
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

    constructor(private route: ActivatedRoute,
    	private pollService:PollService,
    	private authService: AuthService) {

    	 }

    ngOnInit() {

        // get param


        this.Id=this.route.snapshot.params.id;
        this.pollService.getPoll(this.Id)
		.subscribe(poll =>{
			this.poll_name = poll.poll_name;
			this.poll_options = poll.poll_options;
			this.poll_author = poll.poll_author;
			console.log(poll);
			this.chartLabels=[];
			for (let i of poll.poll_options) {
				
				this.chartData.push(i.answer_vote.length);
				this.chartLabels.push(i.answer_name);		
			};
			});			
		}


		addVote(answer){
			
		event.preventDefault();
		this.pollService.addVote(answer._id, this.Id)
		.subscribe(docs =>{
			console.log(docs);
			this.chartData=[];
			this.poll_options=docs.poll_options;
			for (let i of docs.poll_options) {
				
				this.chartData.push(i.answer_vote.length)
			};
		})
    };


}; 
