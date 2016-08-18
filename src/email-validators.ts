import { AbstractControl } from '@angular/common';
import {Util} from './util';

export class EmailValidators {

    static simple(): any {
        return function validate(control: AbstractControl): { [key: string]: any } {
            if (Util.isNotPresent(control)) return undefined;
            let pattern = '^.+@.+\\..+$';
            if (new RegExp(pattern).test(control.value)) {
                return undefined;
            }
            return { 'simpleEmailRule': true };
        };
    }

    // https://www.w3.org/TR/html5/forms.html#valid-e-mail-address
    static normal(): any {
        return function validate(control: AbstractControl): { [key: string]: any } {
            if (Util.isNotPresent(control)) return undefined;
            // tslint:disable max-length 
            let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
            // tslint:enable
            if (pattern.test(control.value)) {
                return undefined;
            }
            return { 'normalEmailRule': true };
        };
    }
}

