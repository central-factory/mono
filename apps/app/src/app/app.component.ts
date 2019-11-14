import { Component, Injector, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@public/api-interfaces';

import { XStatePropertiesDescriptor, bpmn2xstate } from '@central-factory/bpmn2xstate';

import { Machine, interpret } from 'xstate';

import { getCodexTools } from './pfs/codex.tools'

@Component({
  selector: 'public-root',
  styles: [`
    .card {
      max-width: 800px;
      background: #fff;
      border-radius: 2px;
      display: block;
      margin: 20px auto;
      padding: 20px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }
  `],
  template: `

    <!-- div>Message: {{ hello$ | async | json }}</div -->

    <!-- ngx-codex
      class="card"
      [ngModel]="codex.content"
      [tools]="codex.tools"
      (ngModelChange)="logAndSave('codex.content', $event)">
    </ngx-codex -->

    <ngx-bpmn-modeler
      wrapperClass="bpmn-wrapper"
      containerClass="bpmn-container"
      propertiesClass="bpmn-properties"
      [propertiesDescriptor]="bpmnModeler.propertiesDescriptor"
      [ngModel]="bpmnModeler.content"
      (ngModelChange)="logAndSave('modeler.content', $event)">
    </ngx-bpmn-modeler>

    <button (click)="exportToXState()">Export</button>
  `
})
export class AppComponent {

  codex = {
    content: this.load('codex.content') || {
      "time":1572583409787,
      "blocks":[{"type":"paragraph","data":{"text":"assaas"}}],
      "version":"2.15.1"
    },
    tools: getCodexTools(
      this.componentFactoryResolver,
      this.viewContainerRef
    )
  };

  bpmnModeler = {
    content: this.load('modeler.content') || '',
    propertiesDescriptor: XStatePropertiesDescriptor
  };


  hello$ = this.http.get<Message>('/api/hello');

  constructor(
    private http: HttpClient,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {}

  logAndSave(key, value) {
    // console.log(key, value);
    localStorage.setItem(key, JSON.stringify(value));
  }

  log(text, event) {
    // console.log(text, event);
  }

  save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  exportToXState() {
    const stateMachine = bpmn2xstate(this.load('modeler.content'));
    const machine = Machine(stateMachine, {
      actions: {
        a: (context, event) => console.log('actions:a', event),
        b: (context, event) => console.log('actions:b', event),
        runAction1: (context, event) => console.log('actions:runAction1', event)
      },
      activities: {
        a: (context, event) => console.log('activities:a', event)
      },
      services: {
        someService: (context, event) => Promise.resolve(console.log('services:someService', event))
      },
      guards: {
        isAuthenticated: () => true
      }
    });
    const interpreter = interpret(machine);

    interpreter.onTransition(
      (transition) => console.log('onTransition', {
        event: transition.event.type,
        value: transition.value
      })
    );

    interpreter.start();

    interpreter.send('next');
  }

  load(key) {
    // console.log(key, localStorage.getItem(key));
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch {
      return null;
    }
  }
}
