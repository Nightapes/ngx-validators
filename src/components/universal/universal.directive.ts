import {
  Directive,
  forwardRef,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import {
  AbstractControl,
  NG_VALIDATORS,
  Validator,
  ValidatorFn,
  ValidationErrors
} from "@angular/forms";

import { UniversalValidators } from "./universal-validators";

@Directive({
  selector:
    "[noWhitespace][formControlName],[noWhitespace][formControl],[noWhitespace][ngModel]",
  providers: [
    {
      provide: NG_VALIDATORS,
      // tslint:disable-next-line:no-forward-ref
      useExisting: forwardRef(() => WhiteSpaceValidatorDirective),
      multi: true
    }
  ]
})
export class WhiteSpaceValidatorDirective implements Validator, OnInit {
  private validator: ValidatorFn;

  ngOnInit() {
    this.validator = UniversalValidators.noWhitespace;
  }

  validate(c: AbstractControl): ValidationErrors {
    return this.validator(c);
  }
}

@Directive({
  selector:
    "[noEmptyString][formControlName],[noEmptyString][formControl],[noEmptyString][ngModel]",
  providers: [
    {
      provide: NG_VALIDATORS,
      // tslint:disable-next-line:no-forward-ref
      useExisting: forwardRef(() => EmptyStringValidatorDirective),
      multi: true
    }
  ]
})
export class EmptyStringValidatorDirective implements Validator, OnInit {
  private validator: ValidatorFn;

  ngOnInit() {
    this.validator = UniversalValidators.noEmptyString;
  }

  validate(c: AbstractControl): ValidationErrors {
    return this.validator(c);
  }
}

@Directive({
  selector:
    "[isNumber][formControlName],[isNumber][formControl],[isNumber][ngModel]",
  providers: [
    {
      provide: NG_VALIDATORS,
      // tslint:disable-next-line:no-forward-ref
      useExisting: forwardRef(() => IsNumberValidatorDirective),
      multi: true
    }
  ]
})
export class IsNumberValidatorDirective implements Validator, OnInit {
  private validator: ValidatorFn;

  ngOnInit() {
    this.validator = UniversalValidators.isNumber;
  }

  validate(c: AbstractControl): ValidationErrors {
    return this.validator(c);
  }
}

@Directive({
  selector:
    "[isInRange][formControlName],[isInRange][formControl],[isInRange][ngModel]",
  providers: [
    {
      provide: NG_VALIDATORS,
      // tslint:disable-next-line:no-forward-ref
      useExisting: forwardRef(() => IsInRangeValidatorDirective),
      multi: true
    }
  ]
})
export class IsInRangeValidatorDirective implements Validator, OnInit {
  @Input() minValue: number;
  @Input() maxValue: number;

  private validator: ValidatorFn;
  private onChange: () => void;

  ngOnInit() {
    this.validator = UniversalValidators.isInRange(
      this.minValue,
      this.maxValue
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["minValue"] || changes["maxValue"]) {
      this.validator = UniversalValidators.isInRange(
        changes["minValue"].currentValue,
        changes["maxValue"].currentValue
      );
      this.onChange();
    }
  }

  validate(c: AbstractControl): ValidationErrors {
    return this.validator(c);
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onChange = fn;
  }
}

@Directive({
  selector:
    "input[type=text][max][formControlName],input[type=text][max][formControl],input[type=text][max][ngModel]",
  providers: [
    {
      provide: NG_VALIDATORS,
      // tslint:disable-next-line:no-forward-ref
      useExisting: forwardRef(() => MaxValidatorDirective),
      multi: true
    }
  ]
})
export class MaxValidatorDirective implements Validator, OnInit, OnChanges {
  @Input() max: number;

  private validator: ValidatorFn;
  private onChange: () => void;

  ngOnInit() {
    this.validator = UniversalValidators.max(this.max);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["max"]) {
      this.validator = UniversalValidators.max(changes["max"].currentValue);
      this.onChange();
    }
  }

  validate(c: AbstractControl): ValidationErrors {
    return this.validator(c);
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onChange = fn;
  }
}

@Directive({
  selector:
    "input[type=text][min][formControlName],input[type=text][min][formControl],input[type=text][min][ngModel]",
  providers: [
    {
      provide: NG_VALIDATORS,
      // tslint:disable-next-line:no-forward-ref
      useExisting: forwardRef(() => MinValidatorDirective),
      multi: true
    }
  ]
})
export class MinValidatorDirective implements Validator, OnInit, OnChanges {
  @Input() min: number;

  private validator: ValidatorFn;
  private onChange: () => void;

  ngOnInit() {
    this.validator = UniversalValidators.min(this.min);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["min"]) {
      this.validator = UniversalValidators.min(changes["min"].currentValue);
      this.onChange();
    }
  }

  validate(c: AbstractControl): ValidationErrors {
    return this.validator(c);
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onChange = fn;
  }
}
