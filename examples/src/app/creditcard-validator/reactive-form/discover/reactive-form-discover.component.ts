import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CreditCardValidators } from 'ngx-validators';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-discover',
  templateUrl: './reactive-form-discover.component.html'
})
export class ReactiveFormDiscoverComponent implements OnInit {

  form: FormGroup;
  creditcard = new FormControl('', Validators.compose([CreditCardValidators.discover]));
  constructor(protected _fb: FormBuilder) { }

  ngOnInit() {
    this.form = this._fb.group({
      'creditcard': this.creditcard,
    });
  }
}
