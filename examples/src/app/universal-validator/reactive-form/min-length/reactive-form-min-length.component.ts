import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UniversalValidators } from 'ngx-validators';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-min-length',
  templateUrl: './reactive-form-min-length.component.html'
})
export class ReactiveFormMinLengthComponent implements OnInit {

  form: FormGroup;

  minLength: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    UniversalValidators.minLength(3)
  ]));

  constructor(protected _fb: FormBuilder) { }

  ngOnInit() {
    this.form = this._fb.group({
      'minLength': this.minLength
    });
  }

}
