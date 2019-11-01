import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BpmnModelerModule, BPMNModelerComponent } from '@central-factory/ngx-bpmn-modeler';
import { CodexModule } from '@central-factory/ngx-codex';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BpmnModelerModule,
    CodexModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BPMNModelerComponent]
})
export class AppModule {}
