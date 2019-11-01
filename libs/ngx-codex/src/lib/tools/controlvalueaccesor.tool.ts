import { ComponentFactoryResolver, ViewContainerRef, ComponentRef } from '@angular/core';

export class ControlValueAccesorTool {

  data: any;
  config: any;
  api: any;

  wrapper: HTMLElement;
  componentRef: ComponentRef<any>;
  value: any;

  constructor({data, config, api}){
    this.data = data;
    this.api = api;
    this.config = config;
  }

  render(){
    const resolver: ComponentFactoryResolver = this.config.getFactoryResolver();
    const containerRef: ViewContainerRef = this.config.getContainerRef();

    this.wrapper = document.createElement('div');

    const componentFactory = resolver.resolveComponentFactory(this.config.component);
    this.componentRef = containerRef.createComponent(componentFactory);
    const nativeComponent = this.componentRef.location.nativeElement;

    this.componentRef.instance._value = this.data && this.data.value ? this.data.value : '';
    this.value = this.componentRef.instance._value;
    this.componentRef.instance.onChange = (value) => {
      this.value = value;
    }

    if (this.config.inputs) {
      Object.keys(this.config.inputs).forEach(
        key => this.componentRef.instance[key] = this.config.inputs[key]
      );
    }

    this.wrapper.appendChild(nativeComponent);

    return this.wrapper;
  }

  destroy() {
    this.wrapper.innerHTML = '';
  }

  save(blockContent){
    return {
      value: this.value
    }
  }
}
