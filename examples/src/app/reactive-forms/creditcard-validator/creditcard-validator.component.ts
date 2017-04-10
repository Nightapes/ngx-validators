import { CreditCardValidators } from 'ngx-validators';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-creditcard-validator',
  templateUrl: './creditcard-validator.component.html',
  styleUrls: ['./creditcard-validator.component.css']
})
export class ReactiveFormCreditcardValidatorComponent implements OnInit {

  form: FormGroup;
  creditcard = new FormControl('', Validators.compose([CreditCardValidators.isCreditCard]));
  constructor(protected _fb: FormBuilder) { }

  ngOnInit() {
    this.form = this._fb.group({
      'creditcard': this.creditcard,
    });
  }

}
