import { EmailOptions } from "./email-util";
import { Directive, Input, forwardRef, OnInit } from "@angular/core";
import {
  NG_VALIDATORS,
  Validator,
  ValidatorFn,
  AbstractControl,
  ValidationErrors
} from "@angular/forms";

import { EmailValidators } from "./email-validators";

@Directive({
  selector: "[email][formControlName],[email][formControl],[email][ngModel]",
  providers: [
    {
      provide: NG_VALIDATORS,
      // tslint:disable-next-line:no-forward-ref
      useExisting: forwardRef(() => EmailValidatorDirective),
      multi: true
    }
  ]
})
export class EmailValidatorDirective implements Validator, OnInit {
  @Input() email = "normal";

  private validator: ValidatorFn;

  ngOnInit() {
    switch (this.email) {
      case "simple":
        this.validator = EmailValidators.simple;
        break;
      case "normal":
        this.validator = EmailValidators.normal;
        break;
      default:
        this.validator = EmailValidators.normal;
        break;
    }
  }

  validate(c: AbstractControl): ValidationErrors {
    return this.validator(c);
  }
}

@Directive({
  selector:
    "[emailSuggest][formControlName],[emailSuggest][formControl],[emailSuggest][ngModel]",
  providers: [
    {
      provide: NG_VALIDATORS,
      // tslint:disable-next-line:no-forward-ref
      useExisting: forwardRef(() => EmailSuggestValidatorDirective),
      multi: true
    }
  ]
})
export class EmailSuggestValidatorDirective implements Validator, OnInit {
  @Input() emailSuggest: EmailOptions;

  private validator: ValidatorFn;

  ngOnInit() {
    this.validator = EmailValidators.suggest(this.emailSuggest);
  }

  validate(c: AbstractControl): ValidationErrors {
    return this.validator(c);
  }
}
