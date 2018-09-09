import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidators } from 'ngx-validators';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-email',
  templateUrl: './reactive-form-email.component.html'
})
export class ReactiveFormEmailComponent implements OnInit {

  form: FormGroup;
  email = new FormControl('', Validators.compose([EmailValidators.normal]));
  constructor(protected _fb: FormBuilder) { }

  ngOnInit() {
    this.form = this._fb.group({
      'email': this.email,
    });
  }
}
