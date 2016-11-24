import { Directive, Input, forwardRef, OnInit } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { PhoneValidators } from './phone-validators';

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
        this.validator = PhoneValidators.isPossibleNumberWithReason(this.phone);
    }

    validate(c: AbstractControl): { [key: string]: any } {
        return this.validator(c);
    }
}

@Directive({
    selector: '[countryCode][formControlName],[countryCode][formControl],[countryCode][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => PhoneValidatorDirective),
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
