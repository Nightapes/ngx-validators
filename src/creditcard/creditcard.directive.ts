import { Directive, Input, forwardRef, OnInit } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { CreditCardValidators } from './creditcard-validators';

@Directive({
    selector: '[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => CreditCardValidatorDirective),
        multi: true
    }]
})
export class CreditCardValidatorDirective implements Validator, OnInit {
    @Input() creditCard: string = 'all';

    private validator: ValidatorFn;

    ngOnInit() {
        switch (this.creditCard) {
            case 'all':
                this.validator = CreditCardValidators.isCreditCard();
                break;
            case 'americanExpress':
                this.validator = CreditCardValidators.americanExpress();
                break;
            case 'dinersclub':
                this.validator = CreditCardValidators.dinersclub();
                break;
            case 'discover':
                this.validator = CreditCardValidators.discover();
                break;
            case 'jcb':
                this.validator = CreditCardValidators.jcb();
                break;
            case 'maestro':
                this.validator = CreditCardValidators.maestro();
                break;
            case 'mastercard':
                this.validator = CreditCardValidators.mastercard();
                break;
            case 'visa':
                this.validator = CreditCardValidators.visa();
                break;
            default:
                this.validator = CreditCardValidators.isCreditCard();
                break;
        }

    }

    validate(c: AbstractControl): { [key: string]: any } {
        return this.validator(c);
    }
}
