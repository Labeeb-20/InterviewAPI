import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import { AppContentComponent } from './components/app-content/app-content.component';
import { AddCandidatesComponent } from './components/add-candidates/add-candidates.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchCandidatesComponent } from './components/search-candidates/search-candidates.component';
import { SearchInterviewComponent } from './components/search-interview/search-interview.component';
import { ScheduleInterviewComponent } from './components/schedule-interview/schedule-interview.component';
import { RouterModule, Routes } from '@angular/router';
import { UpdateStatusComponent } from './components/update-status/update-status.component';
import { UpdateOfferletterstatusComponent } from './components/update-offerletterstatus/update-offerletterstatus.component';


const routes: Routes = [
  {
    path:"add-candidates",
    component: AddCandidatesComponent
  },
  {
    path:"search-candidates",
    component: SearchCandidatesComponent
  },
  {
    path:"schedule-interview",
    component: ScheduleInterviewComponent
  },
  {
    path:"search-interview",
    component: SearchInterviewComponent
  },
  {
    path:"update-status",
    component: UpdateStatusComponent
  },
  {
    path:"update-offerletterstatus",
    component: UpdateOfferletterstatusComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppContentComponent,
    AddCandidatesComponent,
    SearchCandidatesComponent,
    SearchInterviewComponent,
    ScheduleInterviewComponent,
    UpdateStatusComponent,
    UpdateOfferletterstatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
