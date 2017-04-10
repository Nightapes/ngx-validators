import { EmailValidators } from 'ngx-validators';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-email-validator',
  templateUrl: './email-validator.component.html',
  styleUrls: ['./email-validator.component.css']
})
export class ReactiveFormEmailValidatorComponent implements OnInit {

  form: FormGroup;
  email = new FormControl('', Validators.compose([EmailValidators.normal]));
  constructor(protected _fb: FormBuilder) { }

  ngOnInit() {
    this.form = this._fb.group({
      'email': this.email,
    });
  }

}
