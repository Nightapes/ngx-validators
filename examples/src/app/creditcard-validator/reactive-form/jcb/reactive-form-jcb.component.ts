import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreditCardValidators } from 'ngx-validators';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-jcb',
  templateUrl: './reactive-form-jcb.component.html'
})
export class ReactiveFormJcpComponent implements OnInit {

  form: FormGroup;
  creditcard = new FormControl('', Validators.compose([CreditCardValidators.jcb]));
  constructor(protected _fb: FormBuilder) { }

  ngOnInit() {
    this.form = this._fb.group({
      'creditcard': this.creditcard,
    });
  }
}
