import { Directive, Input, forwardRef, OnInit } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { UniversalValidators } from './universal-validators';

@Directive({
    selector: '[noWhitespace][formControlName],[noWhitespace][formControl],[noWhitespace][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => WhiteSpaceValidator),
        multi: true
    }]
})
export class WhiteSpaceValidator implements Validator, OnInit {
    private validator: ValidatorFn;

    ngOnInit() {
        this.validator = UniversalValidators.noWhitespace();
    }

    validate(c: AbstractControl): { [key: string]: any } {
        return this.validator(c);
    }
}

@Directive({
    selector: '[isNumber][formControlName],[isNumber][formControl],[isNumber][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => IsNumberValidator),
        multi: true
    }]
})
export class IsNumberValidator implements Validator, OnInit {
    private validator: ValidatorFn;

    ngOnInit() {
        this.validator = UniversalValidators.isNumber();
    }

    validate(c: AbstractControl): { [key: string]: any } {
        return this.validator(c);
    }
}

@Directive({
    selector: '[isInRange][formControlName],[isInRange][formControl],[isInRange][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => IsInRangealidator),
        multi: true
    }]
})
export class IsInRangealidator implements Validator, OnInit {
    @Input() min: number;
    @Input() max: number;

    private validator: ValidatorFn;

    ngOnInit() {
        this.validator = UniversalValidators.isInRange(this.min, this.max);
    }

    validate(c: AbstractControl): { [key: string]: any } {
        return this.validator(c);
    }
}

@Directive({
    selector: '[max][formControlName],[max][formControl],[max][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => MaxValidator),
        multi: true
    }]
})
export class MaxValidator implements Validator, OnInit {
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
        useExisting: forwardRef(() => MinValidator),
        multi: true
    }]
})
export class MinValidator implements Validator, OnInit {
    @Input() min: number;

    private validator: ValidatorFn;

    ngOnInit() {
        this.validator = UniversalValidators.max(this.min);
    }

    validate(c: AbstractControl): { [key: string]: any } {
        return this.validator(c);
    }
}