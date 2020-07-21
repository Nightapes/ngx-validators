import {
  Directive,
  Input,
  forwardRef,
  OnInit,
  SimpleChanges,
  OnChanges,
} from "@angular/core";
import {
  NG_VALIDATORS,
  Validator,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from "@angular/forms";

import { PhoneValidators } from "./phone-validators";

@Directive({
  selector:
    "[possiblePhone][formControlName],[possiblePhone][formControl],[possiblePhone][ngModel]",
  providers: [
    {
      provide: NG_VALIDATORS,
      // tslint:disable-next-line:no-forward-ref
      useExisting: forwardRef(() => PossiblePhoneValidatorDirective),
      multi: true,
    },
  ],
})
export class PossiblePhoneValidatorDirective implements Validator, OnInit {
  @Input() possiblePhone = "US";

  private validator: ValidatorFn;

  ngOnInit() {
    this.validator = PhoneValidators.isPossibleNumberWithReason(
      this.possiblePhone
    );
  }

  validate(c: AbstractControl): ValidationErrors {
    return this.validator(c);
  }
}

@Directive({
  selector: "[phone][formControlName],[phone][formControl],[phone][ngModel]",
  providers: [
    {
      provide: NG_VALIDATORS,
      // tslint:disable-next-line:no-forward-ref
      useExisting: forwardRef(() => PhoneValidatorDirective),
      multi: true,
    },
  ],
})
export class PhoneValidatorDirective implements Validator, OnInit, OnChanges {
  @Input() phone = "US";

  private validator: ValidatorFn;
  private onChange: () => void;

  ngOnInit() {
    this.validator = PhoneValidators.isPhoneNumber(this.phone);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.phone && !changes.phone.isFirstChange()) {
      this.validator = PhoneValidators.isPhoneNumber(
        changes.phone.currentValue
      );
      this.onChange();
    }
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onChange = fn;
  }

  validate(c: AbstractControl): ValidationErrors {
    return this.validator(c);
  }
}

@Directive({
  selector:
    "[countryCode][formControlName],[countryCode][formControl],[countryCode][ngModel]",
  providers: [
    {
      provide: NG_VALIDATORS,
      // tslint:disable-next-line:no-forward-ref
      useExisting: forwardRef(() => CountryCodeValidatorDirective),
      multi: true,
    },
  ],
})
export class CountryCodeValidatorDirective implements Validator, OnInit {
  private validator: ValidatorFn;

  ngOnInit() {
    this.validator = PhoneValidators.isValidRegionCode;
  }

  validate(c: AbstractControl): ValidationErrors {
    return this.validator(c);
  }
}
