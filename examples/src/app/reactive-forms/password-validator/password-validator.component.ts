import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from 'ngx-validators';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-password-validator',
  templateUrl: './password-validator.component.html',
  styleUrls: ['./password-validator.component.css']
})
export class ReactiveFormPasswordValidatorComponent implements OnInit {

  form: FormGroup;
  value: string;
  password = new FormControl('', Validators.compose([
    //Validators.required,
    PasswordValidators.repeatCharacterRegexRule(4),
    PasswordValidators.alphabeticalCharacterRule(1),
    PasswordValidators.digitCharacterRule(1),
    PasswordValidators.lowercaseCharacterRule(1),
    PasswordValidators.uppercaseCharacterRule(1),
    PasswordValidators.specialCharacterRule(1)
  ]));
  confirmPassword = new FormControl('');

  constructor(protected _fb: FormBuilder) { }

  ngOnInit() {
    this.form = this._fb.group({
      'newPassword': this.password,
      'confirmPassword': this.confirmPassword
    });

    this.form.setValidators(PasswordValidators.mismatchedPasswords());
  }

  getHintClass(formName: string, errorId: string): string {
    if (this.form.controls[formName].hasError('required')) {
      return 'grey';
    } else if (this.form.controls[formName].hasError(errorId)) {
      return 'error';
    } else if (!this.form.controls[formName].hasError(errorId)) {
      return 'success';
    }

  }

  submit() {
    this.value = JSON.stringify(this.form.value);
  }
}
