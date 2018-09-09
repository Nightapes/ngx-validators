import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UniversalValidators } from 'ngx-validators';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-min',
  templateUrl: './reactive-form-min.component.html'
})
export class ReactiveFormMinComponent implements OnInit {

  form: FormGroup;

  min: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    UniversalValidators.min(5)
  ]));

  constructor(protected _fb: FormBuilder) { }

  ngOnInit() {
    this.form = this._fb.group({
      'min': this.min
    });
  }
}
