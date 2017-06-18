import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PollService} from '../services/poll.service';
import {Polls} from '../../Poll';
import {ChartsModule} from 'ng2-charts';


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
    	private pollService:PollService) {

    	 }

    ngOnInit() {
        // get param
        this.Id=this.route.snapshot.params.id;
        this.pollService.getPoll(this.Id)
		.subscribe(poll =>{
			this.poll_name = poll.poll_name;
			this.poll_options = poll.poll_options;
			console.log(poll.poll_options);
			this.chartLabels=[];
			for (let i of poll.poll_options) {
				
				this.chartData.push(i.answer_vote.length);
				this.chartLabels.push(i.answer_name);
				
			};
			console.log(this.chartLabels)
			});			
		}

		addAnswers(event){
			
		event.preventDefault();
		this.pollService.addAnswers(this.newAnswers, this.Id)
		.subscribe(updated =>{
			this.poll_options=updated.poll_options;
			this.newAnswers=[];	
			this.chartLabels=[];
			this.chartData=[];
			for (let i of updated.poll_options) {
				this.chartLabels.push(i.answer_name);
				this.chartData.push(i.answer_vote.length)	
			};
			console.log(this.chartLabels)
		})
		
    }

		addVote(event){
			
		event.preventDefault();
		this.pollService.addVote(this.VoteValue, this.Id)
		.subscribe(docs =>{
			this.chartData=[];
			this.poll_options=docs.poll_options;
			for (let i of docs.poll_options) {
				
				this.chartData.push(i.answer_vote.length)
			};
			console.log(this.chartData)
		})
    };


}; 
