import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IssueTrackerComponent} from './components/issue-tracker/issue-tracker.component';
import {RouterModule, Routes} from '@angular/router';
import {MatCardModule} from '@angular/material';
import {IssuesService} from './services/issues.service';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {
    path: 'issues',
    pathMatch: 'full',
    component: IssueTrackerComponent,
  },
];

@NgModule({
  declarations: [IssueTrackerComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    HttpClientModule
  ],
  exports: [IssueTrackerComponent],
  providers: [IssuesService]
})
export class IssuesModule {
}
