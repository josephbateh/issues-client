import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  private readonly client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  getIssues() {
    return this.client.get('http://localhost:5000/api/issues');
  }

  incrementIssue(id: string) {
    return this.client.post(`http://localhost:5000/api/issues/${id}`, null);
  }
}
