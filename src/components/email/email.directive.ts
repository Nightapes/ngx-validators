import { Directive, Input, forwardRef, OnInit } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { EmailValidators } from './email-validators';

@Directive({
    selector: '[email][formControlName],[email][formControl],[email][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        // tslint:disable-next-line:no-forward-ref
        useExisting: forwardRef(() => EmailValidatorDirective),
        multi: true
    }]
})
export class EmailValidatorDirective implements Validator, OnInit {
    @Input() email: string = 'normal';

    private validator: ValidatorFn;

    ngOnInit() {
        switch (this.email) {
            case 'simple':
                this.validator = EmailValidators.simple;
                break;
            case 'normal':
                this.validator = EmailValidators.normal;
                break;
            default:
                this.validator = EmailValidators.normal;
                break;
        }

    }

    validate(c: AbstractControl): { [key: string]: any } {
        return this.validator(c);
    }
}
