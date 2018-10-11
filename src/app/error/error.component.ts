import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error',
  template: `
    <ul *ngIf="showErrors()">
      <li style="color: red" *ngFor="let error of errors()">{{error}}</li>
    </ul>
  `,
})
export class ErrorComponent {

  private static readonly errorMessages = {
    'required': () => 'Campo Requerido',
    'minlength': (params: any) => 'El Valor Minimo es: ' + params.requiredLength,
    'maxlength': (params: any) => 'El Valor Maximo es: ' + params.requiredLength,
    'pattern': () => 'Formato no Valido ',
    'email': (params: any) => params.message
  };

  @Input()
  private control: AbstractControlDirective | AbstractControl;

  showErrors(): boolean {
    return this.control &&
      this.control.errors &&
     (this.control.dirty || this.control.touched);
  }

  errors(): string[] {
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
  }

  private getMessage(type: string, params: any) {
    return (<any>ErrorComponent.errorMessages)[type](params);
  }

}
