import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UniversalValidators } from 'ngx-validators';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-max-length',
  templateUrl: './reactive-form-max-length.component.html'
})
export class ReactiveFormMaxLengthComponent implements OnInit {

  form: FormGroup;

  maxLength: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    UniversalValidators.maxLength(5)
  ]));

  constructor(protected _fb: FormBuilder) { }

  ngOnInit() {
    this.form = this._fb.group({
      'maxLength': this.maxLength
    });
  }

}
