import { Directive, Input, forwardRef, OnInit } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { UniversalValidators } from './universal-validators';

@Directive({
    selector: '[noWhitespace][formControlName],[noWhitespace][formControl],[noWhitespace][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        // tslint:disable-next-line:no-forward-ref
        useExisting: forwardRef(() => WhiteSpaceValidatorDirective),
        multi: true
    }]
})
export class WhiteSpaceValidatorDirective implements Validator, OnInit {
    private validator: ValidatorFn;

    ngOnInit() {
        this.validator = UniversalValidators.noWhitespace;
    }

    validate(c: AbstractControl): { [key: string]: any } {
        return this.validator(c);
    }
}

@Directive({
    selector: '[isNumber][formControlName],[isNumber][formControl],[isNumber][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        // tslint:disable-next-line:no-forward-ref
        useExisting: forwardRef(() => IsNumberValidatorDirective),
        multi: true
    }]
})
export class IsNumberValidatorDirective implements Validator, OnInit {
    private validator: ValidatorFn;

    ngOnInit() {
        this.validator = UniversalValidators.isNumber;
    }

    validate(c: AbstractControl): { [key: string]: any } {
        return this.validator(c);
    }
}

@Directive({
    selector: '[isInRange][formControlName],[isInRange][formControl],[isInRange][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        // tslint:disable-next-line:no-forward-ref
        useExisting: forwardRef(() => IsInRangeValidatorDirective),
        multi: true
    }]
})
export class IsInRangeValidatorDirective implements Validator, OnInit {
    @Input() minValue: number;
    @Input() maxValue: number;

    private validator: ValidatorFn;

    ngOnInit() {
        this.validator = UniversalValidators.isInRange(this.minValue, this.maxValue);
    }

    validate(c: AbstractControl): { [key: string]: any } {
        return this.validator(c);
    }
}

@Directive({
    selector: '[max][formControlName],[max][formControl],[max][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        // tslint:disable-next-line:no-forward-ref
        useExisting: forwardRef(() => MaxValidatorDirective),
        multi: true
    }]
})
export class MaxValidatorDirective implements Validator, OnInit {
    @Input() max: number;

    private validator: ValidatorFn;

    ngOnInit() {
        this.validator = UniversalValidators.max(this.max);
    }

    validate(c: AbstractControl): { [key: string]: any } {
        return this.validator(c);
    }
}

@Directive({
    selector: '[min][formControlName],[min][formControl],[min][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        // tslint:disable-next-line:no-forward-ref
        useExisting: forwardRef(() => MinValidatorDirective),
        multi: true
    }]
})

export class MinValidatorDirective implements Validator, OnInit {
    @Input() min: number;

    private validator: ValidatorFn;

    ngOnInit() {
        this.validator = UniversalValidators.min(this.min);
    }

    validate(c: AbstractControl): { [key: string]: any } {
        return this.validator(c);
    }
}
