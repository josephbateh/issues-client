import {Component, OnInit} from '@angular/core';
import {IssuesService} from '../../services/issues.service';
import {Issue} from '../../models/issue';

@Component({
  selector: 'app-issue-tracker',
  templateUrl: './issue-tracker.component.html',
  styleUrls: ['./issue-tracker.component.scss']
})
export class IssueTrackerComponent implements OnInit {
  private readonly service: IssuesService;
  private issues: Issue[];

  constructor(service: IssuesService) {
    this.service = service;
  }

  async ngOnInit() {
    this.service.getIssues().subscribe((data: Issue[]) => {
      this.issues = [];
      for (const issue of data) {
        this.issues = this.issues.concat(issue);
      }
    });
  }

  increment(id: string) {
    this.service.incrementIssue(id).subscribe((data: Issue) => this.issues.map(x => {
      if (x.id === id) {
        x.count = data.count;
      }
    }));
  }
}
