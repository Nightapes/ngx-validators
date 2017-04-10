import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PhoneValidators } from 'ngx-validators';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-phone-validator',
  templateUrl: './phone-validator.component.html',
  styleUrls: ['./phone-validator.component.css']
})
export class ReactiveFormPhoneValidatorComponent implements OnInit {
  form: FormGroup;
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


  constructor(protected _fb: FormBuilder) { }

  ngOnInit() {

    this.form = this._fb.group({
      'possiblePhone': this.possiblePhone,
      'phone': this.phone,
      'countryCode': this.countryCode
    });

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
}
