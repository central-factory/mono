
# ngx-bpmn-modeler

Angular bpmn-js component with Custom Properties Panel Support.

Implements `ControlValueAccesor`.


## Getting Started

### 1. Install packages
```sh
npm i bpmn-js bpmn-js-properties-panel diagram-js-minimap
npm i @central-factory/ngx-bpmn-modeler
```

### 2. Include bpmn-js stylesheets

```scss
@import '~bpmn-js/dist/assets/diagram-js';
@import '~bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
@import '~bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css';
@import '~diagram-js-minimap/assets/diagram-js-minimap';
```

### 3. Import Module
```typescript
import { BpmnModelerModule } from '@central-factory/ngx-bpmn-modeler';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BpmnModelerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### 4. Define your CustomPropertiesProvider and customPropertiesDescriptor 

You can see how at [bpmn-js examples](https://github.com/bpmn-io/bpmn-js-examples/tree/master/properties-panel-extension)

### 5. Use the component
```html
<ngx-bpmn-modeler
  [propertiesProvider]="MyPropertiesProvider"
  [propertiesDescriptor]="myPropertiesDescriptor"
  [wrapperClass]="myWrapperCSSClass"
  [containerClass]="myContainerCSSClass"
  [propertiesClass]="myPropertiesPanelCSSClass"
  [ngModel]="modelerXMLValue">
</ngx-bpmn-modeler>
```

