import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BpmnModelerModule } from '@public/bpmn-modeler';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BpmnModelerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
