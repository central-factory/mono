
# ngx-bpmn-modeler

Angular bpmn-js component with Custom Properties Panel Support.
Implements `ControlValueAccesor`.


## Getting Started

### 1. Import Module
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

### 2. Use the component
```html
<ngx-bpmn-modeler
  [propertiesProvider]="myPropertiesProvider"
  [propertiesDescriptor]="myPropertiesDescriptor"
  [wrapperClass]="myWrapperCSSClass"
  [containerClass]="myContainerCSSClass"
  [propertiesClass]="myPropertiesPanelCSSClass"
  [ngModel]="modelerXMLValue">
</ngx-bpmn-modeler>
```



## Running unit tests

Run `nx test bpmn-modeler` to execute the unit tests.
