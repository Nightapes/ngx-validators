import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UniversalValidators } from 'ngx-validators';
import { min } from 'rxjs/operator/min';
import { max } from 'rxjs/operator/max';
import { isNumber } from 'util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-universal-validator',
  templateUrl: './universal-validator.component.html',
  styleUrls: ['./universal-validator.component.css']
})
export class ReactiveFormUniversalValidatorComponent implements OnInit {

  form: FormGroup;
  noWhitespace: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    UniversalValidators.noWhitespace
  ]));

  noEmptyString: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    UniversalValidators.noEmptyString
  ]));

  min: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    UniversalValidators.min(5)
  ]));

  max: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    UniversalValidators.max(10)
  ]));

  isNumber: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    UniversalValidators.isNumber
  ]));

  isInRange: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    UniversalValidators.isInRange(3, 6)
  ]));

  maxLength: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    UniversalValidators.maxLength(5)
  ]));

  minLength: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    UniversalValidators.minLength(3)
  ]));

  constructor(protected _fb: FormBuilder) { }

  ngOnInit() {
    this.form = this._fb.group({
      'noWhitespace': this.noWhitespace,
      'noEmptyString' : this.noEmptyString,
      'min': this.min,
      'max': this.max,
      'isNumber': this.isNumber,
      'isInRange': this.isInRange,
      'maxLength': this.maxLength,
      'minLength': this.minLength
    });
  }

}
