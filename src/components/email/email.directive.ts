import { EmailOptions } from "./email-util";
import {
  Directive,
  Input,
  forwardRef,
  OnInit,
  OnChanges,
  SimpleChanges
} from "@angular/core";
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
export class EmailValidatorDirective implements Validator, OnInit, OnChanges {
  @Input() email: "normal" | "simple" = "normal";

  private validator: ValidatorFn;
  private onChange: () => void;

  ngOnInit() {
    this.setValidator(this.email);
  }

  setValidator(type: string) {
    switch (type) {
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["email"]) {
      this.setValidator(changes["email"].currentValue);
      this.onChange();
    }
  }

  registerOnValidatorChange?(fn: () => void): void {
    this.onChange = fn;
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
  private onChange: () => void;

  ngOnInit() {
    this.validator = EmailValidators.suggest(this.emailSuggest);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["emailSuggest"]) {
      this.validator = EmailValidators.suggest(
        changes["emailSuggest"].currentValue
      );
      this.onChange();
    }
  }

  registerOnValidatorChange?(fn: () => void): void {
    this.onChange = fn;
  }

  validate(c: AbstractControl): ValidationErrors {
    return this.validator(c);
  }
}
