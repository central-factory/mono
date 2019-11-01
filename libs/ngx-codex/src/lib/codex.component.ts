import { Component, Input, ViewChild, ElementRef, OnInit, forwardRef } from '@angular/core';

import EditorJS from '@editorjs/editorjs';

import { CodexTools } from './codex.tools';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ngx-codex',
  template: `
    <div #container></div>
  `,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CodexComponent),
    multi: true
  }]
})
export class CodexComponent implements OnInit, ControlValueAccessor  {

  @Input() tools: CodexTools;

  @Input() disabled = false;

  @ViewChild('container', { static: true }) container: ElementRef;

  private editor: EditorJS;

  private _value = null;

  async ngOnInit() {
    this.editor = new EditorJS({
      autofocus: true,
      holder: this.container.nativeElement,
      tools: this.tools,
      onChange: async () => {
        this._value = await this.editor.save();
        this.writeValue(this._value);
      },
      data: this._value
    });
  }

  onChange = (value: any) => {};

  onTouched = () => {};

  get value(): any {
    return this._value;
  }

  writeValue(value: any): void {
    if (value !== this._value) {
      this.loadContent(value);
    }
    this._value = value;
    this.onChange(this.value);
  }

  // Allows Angular to register a function to call when the model changes.
  // Save the function as a property to call later here.
  registerOnChange(fn: (rating: number) => void): void {
    this.onChange = fn;
  }

  // Allows Angular to register a function to call when the input has been touched.
  // Save the function as a property to call later here.
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Allows Angular to disable the input.
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  async loadContent(value: any) {
    await this.editor.isReady;
    this.editor.render(value);
  }
}
