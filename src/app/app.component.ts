import { Component } from '@angular/core';
import { PollsService} from './services/polls.service';
import { PollService} from './services/poll.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
   providers: [PollsService, PollService]
})
export class AppComponent {
  title = 'app works!';
}
