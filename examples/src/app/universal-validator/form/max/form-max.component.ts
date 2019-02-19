import { Component } from '@angular/core';

@Component({
  selector: 'app-max',
  templateUrl: './form-max.component.html',
  styles: ['mat-form-field {width: 100%;}']
})

export class FormMaxComponent {
  model: any = {
    max: ''
  };
}
