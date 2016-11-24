import { Directive, Input, forwardRef, OnInit } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { PhoneValidators } from './phone-validators';

@Directive({
    selector: '[possiblePhone][formControlName],[possiblePhone][formControl],[possiblePhone][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => PossiblePhoneValidatorDirective),
        multi: true
    }]
})

export class PossiblePhoneValidatorDirective implements Validator, OnInit {
    @Input() possiblePhone: string = 'US';

    private validator: ValidatorFn;

    ngOnInit() {
        this.validator = PhoneValidators.isPossibleNumberWithReason(this.possiblePhone);
    }

    validate(c: AbstractControl): { [key: string]: any } {
        return this.validator(c);
    }
}

@Directive({
    selector: '[phone][formControlName],[phone][formControl],[phone][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => PhoneValidatorDirective),
        multi: true
    }]
})

export class PhoneValidatorDirective implements Validator, OnInit {
    @Input() phone: string = 'US';

    private validator: ValidatorFn;

    ngOnInit() {
        this.validator = PhoneValidators.isPhoneNumber(this.phone);
    }

    validate(c: AbstractControl): { [key: string]: any } {
        return this.validator(c);
    }
}

@Directive({
    selector: '[countryCode][formControlName],[countryCode][formControl],[countryCode][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => CountryCodeValidatorDirective),
        multi: true
    }]
})

export class CountryCodeValidatorDirective implements Validator, OnInit {

    private validator: ValidatorFn;

    ngOnInit() {
        this.validator = PhoneValidators.isValidRegionCode();
    }

    validate(c: AbstractControl): { [key: string]: any } {
        return this.validator(c);
    }
}
