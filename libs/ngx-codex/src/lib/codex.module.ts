import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export * from './tools/controlvalueaccesor.tool';

import { CodexComponent } from './codex.component';

export { CodexComponent } from './codex.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CodexComponent],
  exports: [CodexComponent],
})
export class CodexModule {}
