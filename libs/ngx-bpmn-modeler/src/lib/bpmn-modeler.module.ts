import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BPMNModelerComponent } from './bpmn-modeler.component';

export { BPMNModelerComponent } from './bpmn-modeler.component';

export * from './properties-panel';

@NgModule({
  imports: [CommonModule],
  declarations: [BPMNModelerComponent],
  exports: [BPMNModelerComponent]
})
export class BpmnModelerModule {}
