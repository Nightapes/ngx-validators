import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UniversalValidators } from 'ngx-validators';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-is-in-range',
  templateUrl: './reactive-form-is-in-range.component.html'
})
export class ReactiveFormIsInRangeComponent implements OnInit {

  form: FormGroup;

  isInRange: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    UniversalValidators.isInRange(3, 6)
  ]));
  constructor(protected _fb: FormBuilder) { }

  ngOnInit() {
    this.form = this._fb.group({
      'isInRange': this.isInRange
    });
  }
}
