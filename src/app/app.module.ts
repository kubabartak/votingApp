import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ChartsModule} from 'ng2-charts';
import { AppComponent } from './app.component';
import { ChartComponentComponent } from './chart-component/chart-component.component';
import { PollsComponent } from './polls/polls.component';
import { PollComponent } from './poll/poll.component';
import {RouterModule} from '@angular/router';

const ROUTES = [
   {path: 'polls', component: PollsComponent },
  {path: 'poll/:id', component: PollComponent},
 // {path: 'poll', component: PollComponent},
  {path: '', redirectTo: '/polls', pathMatch: 'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    ChartComponentComponent,
    PollComponent,
    PollsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
