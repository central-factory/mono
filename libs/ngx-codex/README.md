# ngx-codex

Angular editor.js component with ControlValueAccesorTool Support.

Implements `ControlValueAccesor`.

## Getting Started

### 1. Install packages
```sh
npm i @editorjs/editorjs
npm i @central-factory/ngx-codex
```

### 2. Import Module
```typescript
import { CodexModule } from '@central-factory/ngx-codex';

@NgModule({
  declarations: [AppComponent],
  imports: [
    FormsModule,
    CodexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### 3. Load editor.js tools

```typescript

import Header from '@editorjs/header';

const myEditorTools = [
  header: {
    class: Header,
    shortcut: 'CMD+SHIFT+H',
    config: {
      placeholder: 'Enter a header'
    }
  }
]
```

### 4. Include the component

```html
<ngx-codex [(ngModel)]="myEditorValueModel"
  [tools]="myEditorTools">
</ngx-codex>
```

## Inputs

| name | description |
| ---- | ----------- |
| tools | EditorJS Tools. [See editor.js configuration](https://editorjs.io/configuration) |

## Tips

### Loading Angular Components

```ts
import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

import { ControlValueAccesorTool } from '@central-factory/ngx-codex';
import { BPMNModelerComponent } from '@central-factory/ngx-bpmn-modeler';

export class BPMNTool extends ControlValueAccesorTool {

  static get toolbox() {
    return {
      title: 'BPMN',
      icon: `
      <svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="#707684" d="M6.27 17.05C6.72 17.58 7 18.25 7 19C7 20.66 5.66 22 4 22S1 20.66 1 19 2.34 16 4 16C4.18 16 4.36 16 4.53 16.05L7.6 10.69L5.86 9.7L9.95 8.58L11.07 12.67L9.33 11.68L6.27 17.05M20 16C18.7 16 17.6 16.84 17.18 18H11V16L8 19L11 22V20H17.18C17.6 21.16 18.7 22 20 22C21.66 22 23 20.66 23 19S21.66 16 20 16M12 8C12.18 8 12.36 8 12.53 7.95L15.6 13.31L13.86 14.3L17.95 15.42L19.07 11.33L17.33 12.32L14.27 6.95C14.72 6.42 15 5.75 15 5C15 3.34 13.66 2 12 2S9 3.34 9 5 10.34 8 12 8Z" />
      </svg>
      `
    };
  }

}


@Component({
  selector: 'app-root',
  template: `
    <ngx-codex
      [ngModel]="codex.content"
      [tools]="codex.tools">
    </ngx-codex>
  `
})
export class AppComponent {
  title = 'testing';

  codex = {
    content: null,
    tools: {
      bpmn: {
        class: BPMNTool,
        config: {
          getFactoryResolver: () => this.factoryResolver,
          getContainerRef: () => this.containerRef,
          component: BPMNModelerComponent,
          inputs: {
            wrapperClass: 'bpmn-wrapper',
            containerClass: 'bpmn-container',
            propertiesClass: 'bpmn-properties'
          }
        }
      },
    }
  };

  constructor(
    private factoryResolver: ComponentFactoryResolver,
    private containerRef: ViewContainerRef,
  ) {}
}

```

