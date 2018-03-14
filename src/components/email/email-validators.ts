import { AbstractControl } from '@angular/forms';
import { Util } from './../util';

export class EmailValidators {
    public static simple(control: AbstractControl): { [key: string]: boolean } {
        if (Util.isNotPresent(control)) return undefined;
        let pattern = /.+@.+\..+/i;
        if (pattern.test(control.value)) {
            return undefined;
        }
        return { 'simpleEmailRule': true };
    };

    // https://www.w3.org/TR/html5/forms.html#valid-e-mail-address
    public static normal(control: AbstractControl): { [key: string]: boolean } {
        if (Util.isNotPresent(control)) return undefined;
        // tslint:disable-next-line:max-line-length
        let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (pattern.test(control.value)) {
            return undefined;
        }
        return { 'normalEmailRule': true };
    };
}
