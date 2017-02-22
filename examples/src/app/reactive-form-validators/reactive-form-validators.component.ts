import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailValidators } from './../../../../src/email/email-validators';
import { PasswordValidators } from './../../../../src/password/password-validators';
import { PhoneValidators } from './../../../../src/phone/phone-validators';
import { CreditCardValidators } from './../../../../src/creditcard/creditcard-validators';
import { UniversalValidators } from './../../../../src/universal/universal-validators';

@Component({
  selector: 'app-reactive-form-validators',
  templateUrl: './reactive-form-validators.component.html',
  styleUrls: ['./reactive-form-validators.component.css']
})
export class ReactiveFormValidatorsComponent implements OnInit {

  form: FormGroup;
  userCountryCode: string;
  email = new FormControl('', Validators.compose([EmailValidators.normal]));
  password = new FormControl('', Validators.compose([
    Validators.required,
    PasswordValidators.repeatCharacterRegexRule(4),
    PasswordValidators.alphabeticalCharacterRule(1),
    PasswordValidators.digitCharacterRule(1),
    PasswordValidators.lowercaseCharacterRule(1),
    PasswordValidators.uppercaseCharacterRule(1),
    PasswordValidators.specialCharacterRule(1)
  ]));
  confirmPassword = new FormControl('', Validators.required);

  countryCode: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    PhoneValidators.isValidRegionCode
  ]));
  possiblePhone: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    PhoneValidators.isPossibleNumberWithReason('ZZ')
  ]));
  phone: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    PhoneValidators.isPhoneNumber('ZZ')
  ]));

  creditCard: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    CreditCardValidators.isCreditCard
  ]));

  noWhitespace: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    UniversalValidators.noWhitespace
  ]));

  min: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    UniversalValidators.min(10)
  ]));

  max: FormControl = new FormControl('', Validators.compose([
    Validators.required,
    UniversalValidators.max(5)
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
    UniversalValidators.minLength(1)
  ]));

  constructor(protected _fb: FormBuilder) { }

  ngOnInit() {
    this.form = this._fb.group({
      'email': this.email,
      'newPassword': this.password,
      'confirmPassword': this.confirmPassword,
      'possiblePhone': this.possiblePhone,
      'phone': this.phone,
      'countryCode': this.countryCode,
      'creditCard': this.creditCard,
      'noWhitespace': this.noWhitespace,
      'min': this.min,
      'max': this.max,
      'isNumber': this.isNumber,
      'isInRange': this.isInRange,
      'maxLength': this.maxLength,
      'minLength': this.minLength
    });
    this.form.setValidators(PasswordValidators.mismatchedPasswords());

    this.countryCode.valueChanges.subscribe(data => {
      this.phone.setValidators(
        Validators.compose([
          Validators.required,
          PhoneValidators.isPhoneNumber(data)
        ])
      );
      this.possiblePhone.setValidators(
        Validators.compose([
          Validators.required,
          PhoneValidators.isPossibleNumberWithReason(data)
        ])
      );
      this.phone.updateValueAndValidity();
    });

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

}
