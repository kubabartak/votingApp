import { Component, OnInit } from '@angular/core';
import { PollsService} from './services/polls.service';
import { PollService} from './services/poll.service';
import { AuthService } from './services/auth.service';
import { ProfileService } from './services/profile.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers: [PollsService, PollService, AuthService, ProfileService]
})
export class AppComponent {
 profile: any;
 


	constructor (private authService: AuthService){
	

	}
}
