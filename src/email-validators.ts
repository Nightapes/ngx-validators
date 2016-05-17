import { AbstractControl } from '@angular/common';

export class EmailValidators {

    static simple(): any {
        return function validate(control: AbstractControl): { [key: string]: any } {
            let pattern = '^.+@.+\\..+$';
            if (control.value !== '' && !new RegExp(pattern).test(control.value)) {
                return { 'simpleEmailRule': true };
            }
            return undefined;
        };
    }

    // https://www.w3.org/TR/html5/forms.html#valid-e-mail-address
    static normal(): any {
        return function validate(control: AbstractControl): { [key: string]: any } {
            let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
            if (control.value !== '' && !pattern.test(control.value)) {
                return { 'normalEmailRule': true };
            }
            return undefined;
        };
    }
}

