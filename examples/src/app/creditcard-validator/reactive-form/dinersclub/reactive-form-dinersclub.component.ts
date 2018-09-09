import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreditCardValidators } from 'ngx-validators';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-dinersclub',
  templateUrl: './reactive-form-dinersclub.component.html'
})
export class ReactiveFormDinersclubComponent implements OnInit {

  form: FormGroup;
  creditcard = new FormControl('', Validators.compose([CreditCardValidators.dinersclub]));
  constructor(protected _fb: FormBuilder) { }

  ngOnInit() {
    this.form = this._fb.group({
      'creditcard': this.creditcard,
    });
  }
}
