import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@public/api-interfaces';

import bpmn from './pfs/bpmn';
import CustomPropertiesProvider from './pfs/properties-panel/provider';
import customPropertiesDescriptor from './pfs/properties-panel/descriptor';

@Component({
  selector: 'public-root',
  template: `
    <!-- div style="text-align:center">
      <h1>Welcome to app!</h1>
      <img width="450" src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png"/>
    </div -->
    <div>Message: {{ hello$ | async | json }}</div>
    <bpmn-modeler
      [propertiesProvider]="propertiesProvider"
      [propertiesDescriptor]="propertiesDescriptor"
      [ngModel]="bpmn"
      (ngModelChange)="log('value changes', $event)">
    </bpmn-modeler>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  bpmn = bpmn;
  propertiesProvider = CustomPropertiesProvider;
  propertiesDescriptor = customPropertiesDescriptor;

  hello$ = this.http.get<Message>('/api/hello');

  constructor(private http: HttpClient) {}

  log(text, event) {
    console.log(text, event);
  }
}
