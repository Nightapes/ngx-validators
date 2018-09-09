import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UniversalValidators } from 'ngx-validators';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-no-empty-string',
  templateUrl: './reactive-form-no-empty-string.component.html'
})
export class ReactiveFormNoEmptyStringComponent implements OnInit {

  form: FormGroup;

  noEmptyString: FormControl = new FormControl('', UniversalValidators.noEmptyString);

  constructor(protected _fb: FormBuilder) { }

  ngOnInit() {
    this.form = this._fb.group({
      'noEmptyString': this.noEmptyString
    });
  }

}
