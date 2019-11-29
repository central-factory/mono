import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@central-factory/blueprints';

@Component({
  selector: 'public-root',
  template: `

    <div>Message: {{ hello$ | async | json }}</div>
  `
})
export class AppComponent {


  hello$ = this.http.get<Message>('/api/hello');

  constructor(
    private http: HttpClient
  ) {}
}
