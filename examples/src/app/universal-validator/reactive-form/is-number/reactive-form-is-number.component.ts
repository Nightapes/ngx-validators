import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UniversalValidators } from 'ngx-validators';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-is-number',
  templateUrl: './reactive-form-is-number.component.html'
})
export class ReactiveFormIsNumberComponent implements OnInit {

  form: FormGroup;

  isNumber: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    UniversalValidators.isNumber
  ]));

  constructor(protected _fb: FormBuilder) { }

  ngOnInit() {
    this.form = this._fb.group({
      'isNumber': this.isNumber
    });
  }
}
