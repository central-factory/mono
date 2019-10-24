import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@public/api-interfaces';

import bpmn from './pfs/bpmn';
import customPropertiesDescriptor from './pfs/properties-descriptor';

@Component({
  selector: 'public-root',
  template: `
    <!-- div style="text-align:center">
      <h1>Welcome to app!</h1>
      <img width="450" src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png"/>
    </div -->
    <div>Message: {{ hello$ | async | json }}</div>
    <ngx-bpmn-modeler
      [propertiesDescriptor]="propertiesDescriptor"
      [ngModel]="bpmn"
      (ngModelChange)="log('value changes', $event)">
    </ngx-bpmn-modeler>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  bpmn = bpmn;
  propertiesDescriptor = customPropertiesDescriptor;

  hello$ = this.http.get<Message>('/api/hello');

  constructor(private http: HttpClient) {}

  log(text, event) {
    console.log(text, event);
  }
}
