import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


import { PayOption } from './pay-option.model';

@Component({
  selector: 'mt-pay',
  templateUrl: './pay.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PayComponent),
      multi: true
    }
  ]
})
export class PayComponent implements OnInit, ControlValueAccessor {

  @Input() options: PayOption[]

  value: any

  onChange: any

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any) {
    this.value = value
    this.onChange(this.value)
  }

  writeValue(obj: any): void {
    this.value = obj
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisable: boolean): void {}

}
