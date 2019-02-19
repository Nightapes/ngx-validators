import { Component } from '@angular/core';

@Component({
  selector: 'app-min',
  templateUrl: './form-min.component.html',
  styles: ['mat-form-field {width: 100%;}']
})

export class FormMinComponent {
  model: any = {
    min: ''
  };
}
