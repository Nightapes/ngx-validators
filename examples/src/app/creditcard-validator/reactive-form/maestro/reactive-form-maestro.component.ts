import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreditCardValidators } from 'ngx-validators';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-maestro',
  templateUrl: './reactive-form-maestro.component.html'
})
export class ReactiveFormMaestroComponent implements OnInit {

  form: FormGroup;
  creditcard = new FormControl('', Validators.compose([CreditCardValidators.maestro]));
  constructor(protected _fb: FormBuilder) { }

  ngOnInit() {
    this.form = this._fb.group({
      'creditcard': this.creditcard,
    });
  }
}
