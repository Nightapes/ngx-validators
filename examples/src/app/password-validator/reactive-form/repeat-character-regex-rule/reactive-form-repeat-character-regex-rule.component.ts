import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from 'ngx-validators';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-repeat-character-regex-rule',
  templateUrl: './reactive-form-repeat-character-regex-rule.component.html'
})
export class ReactiveFormRepeatCharacterRegexRuleComponent implements OnInit {

  form: FormGroup;

  repeatCharacterRegexRule: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    PasswordValidators.repeatCharacterRegexRule(3)
  ]));
  constructor(protected _fb: FormBuilder) { }

  ngOnInit() {
    this.form = this._fb.group({
      'newPassword': this.repeatCharacterRegexRule
    });
  }
}
