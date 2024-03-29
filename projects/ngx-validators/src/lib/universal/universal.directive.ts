import type { OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { Directive, forwardRef, Input } from "@angular/core";
import type { AbstractControl, Validator, ValidatorFn, ValidationErrors } from "@angular/forms";
import { NG_VALIDATORS } from "@angular/forms";

import { UniversalValidators } from "./universal-validators";

@Directive({
  selector: "[noWhitespace][formControlName],[noWhitespace][formControl],[noWhitespace][ngModel]",
  providers: [
    {
      provide: NG_VALIDATORS,
      // tslint:disable-next-line:no-forward-ref
      useExisting: forwardRef(() => WhiteSpaceValidatorDirective),
      multi: true,
    },
  ],
})
export class WhiteSpaceValidatorDirective implements Validator {
  private validator: ValidatorFn = UniversalValidators.noWhitespace;

  validate(c: AbstractControl): ValidationErrors | null {
    return this.validator(c);
  }
}

@Directive({
  selector: "[noEmptyString][formControlName],[noEmptyString][formControl],[noEmptyString][ngModel]",
  providers: [
    {
      provide: NG_VALIDATORS,
      // tslint:disable-next-line:no-forward-ref
      useExisting: forwardRef(() => EmptyStringValidatorDirective),
      multi: true,
    },
  ],
})
export class EmptyStringValidatorDirective implements Validator {
  private validator: ValidatorFn = UniversalValidators.noEmptyString;

  validate(c: AbstractControl): ValidationErrors | null {
    return this.validator(c);
  }
}

@Directive({
  selector: "[isNumber][formControlName],[isNumber][formControl],[isNumber][ngModel]",
  providers: [
    {
      provide: NG_VALIDATORS,
      // tslint:disable-next-line:no-forward-ref
      useExisting: forwardRef(() => IsNumberValidatorDirective),
      multi: true,
    },
  ],
})
export class IsNumberValidatorDirective implements Validator {
  private validator = UniversalValidators.isNumber;

  validate(c: AbstractControl): ValidationErrors | null {
    return this.validator(c);
  }
}

@Directive({
  selector: "[isInRange][formControlName],[isInRange][formControl],[isInRange][ngModel]",
  providers: [
    {
      provide: NG_VALIDATORS,
      // tslint:disable-next-line:no-forward-ref
      useExisting: forwardRef(() => IsInRangeValidatorDirective),
      multi: true,
    },
  ],
})
export class IsInRangeValidatorDirective implements Validator, OnInit, OnChanges {
  @Input() minValue = 0;
  @Input() maxValue = 0;

  private validator?: ValidatorFn;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChange = () => {};

  ngOnInit() {
    this.validator = UniversalValidators.isInRange(this.minValue, this.maxValue);
  }

  ngOnChanges(changes: SimpleChanges): void {
    let minValue = this.minValue;
    let maxValue = this.maxValue;
    let changed = false;

    if (changes["minValue"]) {
      minValue = changes["minValue"].currentValue;
      changed = changes["minValue"].isFirstChange() ? false : true;
    }

    if (changes["maxValue"]) {
      maxValue = changes["maxValue"].currentValue;
      changed = changes["maxValue"].isFirstChange() ? false : true;
    }

    if (changed) {
      this.validator = UniversalValidators.isInRange(minValue, maxValue);
      this.onChange();
    }
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this.validator ? this.validator(c) : null;
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onChange = fn;
  }
}

@Directive({
  selector: "input[type=text][max][formControlName],input[type=text][max][formControl],input[type=text][max][ngModel]",
  providers: [
    {
      provide: NG_VALIDATORS,
      // tslint:disable-next-line:no-forward-ref
      useExisting: forwardRef(() => MaxValidatorDirective),
      multi: true,
    },
  ],
})
export class MaxValidatorDirective implements Validator, OnInit, OnChanges {
  @Input() max = 0;

  private validator?: ValidatorFn;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChange = () => {};

  ngOnInit() {
    this.validator = UniversalValidators.max(this.max);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["max"] && !changes["max"].isFirstChange()) {
      this.validator = UniversalValidators.max(changes["max"].currentValue);
      this.onChange();
    }
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this.validator ? this.validator(c) : null;
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onChange = fn;
  }
}

@Directive({
  selector: "input[type=text][min][formControlName],input[type=text][min][formControl],input[type=text][min][ngModel]",
  providers: [
    {
      provide: NG_VALIDATORS,
      // tslint:disable-next-line:no-forward-ref
      useExisting: forwardRef(() => MinValidatorDirective),
      multi: true,
    },
  ],
})
export class MinValidatorDirective implements Validator, OnInit, OnChanges {
  @Input() min = 0;

  private validator?: ValidatorFn;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChange = () => {};

  ngOnInit() {
    this.validator = UniversalValidators.min(this.min);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["min"] && !changes["min"].isFirstChange()) {
      this.validator = UniversalValidators.min(changes["min"].currentValue);
      this.onChange();
    }
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this.validator ? this.validator(c) : null;
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onChange = fn;
  }
}

@Directive({
  selector:
    "input[type=text][minDate][formControlName],input[type=text][minDate][formControl],input[type=text][minDate][ngModel]",
  providers: [
    {
      provide: NG_VALIDATORS,
      // tslint:disable-next-line:no-forward-ref
      useExisting: forwardRef(() => MinDateValidatorDirective),
      multi: true,
    },
  ],
})
export class MinDateValidatorDirective implements Validator, OnInit, OnChanges {
  @Input() minDate = "";

  private validator?: ValidatorFn;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChange = () => {};

  ngOnInit() {
    this.validator = UniversalValidators.minDate(new Date(this.minDate));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["minDate"] && !changes["minDate"].isFirstChange()) {
      this.validator = UniversalValidators.minDate(changes["min"].currentValue);
      this.onChange();
    }
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this.validator ? this.validator(c) : null;
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onChange = fn;
  }
}

@Directive({
  selector:
    "input[type=text][maxDate][formControlName],input[type=text][maxDate][formControl],input[type=text][maxDate][ngModel]",
  providers: [
    {
      provide: NG_VALIDATORS,
      // tslint:disable-next-line:no-forward-ref
      useExisting: forwardRef(() => MaxDateValidatorDirective),
      multi: true,
    },
  ],
})
export class MaxDateValidatorDirective implements Validator, OnInit, OnChanges {
  @Input() maxDate = "";

  private validator?: ValidatorFn;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChange = () => {};

  ngOnInit() {
    this.validator = UniversalValidators.maxDate(new Date(this.maxDate));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["maxDate"] && !changes["maxDate"].isFirstChange()) {
      this.validator = UniversalValidators.maxDate(changes["min"].currentValue);
      this.onChange();
    }
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this.validator ? this.validator(c) : null;
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onChange = fn;
  }
}

@Directive({
  selector: "input[requireType][formControlName]",
  providers: [
    {
      provide: NG_VALIDATORS,
      // tslint:disable-next-line:no-forward-ref
      useExisting: forwardRef(() => TypeValidatorDirective),
      multi: true,
    },
  ],
})
export class TypeValidatorDirective implements Validator, OnInit, OnChanges {
  @Input() requiredType: "number" | "string" | "object" | "boolean" = "string";

  private validator?: ValidatorFn;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private onChange = () => {};

  ngOnInit() {
    this.validator = UniversalValidators.type(this.requiredType);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["requireType"] && !changes["requireType"].isFirstChange()) {
      this.validator = UniversalValidators.type(changes["requireType"].currentValue);
      this.onChange();
    }
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this.validator ? this.validator(c) : null;
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onChange = fn;
  }
}
