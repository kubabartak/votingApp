import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ChartsModule} from 'ng2-charts';
import { AppComponent } from './app.component';
import { ChartComponentComponent } from './chart-component/chart-component.component';
import { PollsComponent } from './polls/polls.component';
import { PollComponent } from './poll/poll.component';
import {Routes, RouterModule, CanActivate} from '@angular/router';
import {AUTH_PROVIDERS} from 'angular2-jwt';
import { AuthGuard } from './services/auth-guard.service';
import { CallbackComponent} from './callBackComponent';
import { AuthService } from './services/auth.service';
import  { ProfileService} from './services/profile.service';
import { UserComponent } from './user/user.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { ProfileComponent } from './profile/profile.component';


const appRoutes: Routes = [
   {path: 'polls', component: PollsComponent },
  {path: 'poll/:id', component: PollComponent},
  {path: 'user/:id', component: UserComponent, canActivate: [AuthGuard]},
  {path: 'callback', component: CallbackComponent},
  {path: 'user', component: UserHomeComponent, canActivate: [AuthGuard]},
  {path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'polls', pathMatch: 'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    ChartComponentComponent,
    PollComponent,
    PollsComponent, 
    CallbackComponent, UserComponent, UserHomeComponent, ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
