import { AbstractControl, ValidatorFn } from '@angular/forms';
import { AbstractControlUtil } from './../abstract-control-util';
import { EmailSuggestion, EmailOptions } from './email-util';

export class EmailValidators {
    private static emailSuggestion: EmailSuggestion = new EmailSuggestion();

    public static simple(control: AbstractControl): { [key: string]: boolean } {
        if (AbstractControlUtil.isNotPresent(control)) {
            return undefined
        };

        let pattern = /.+@.+\..+/i;
        if (pattern.test(control.value)) {
            return undefined;
        }
        return { 'simpleEmailRule': true };
    };

    // https://www.w3.org/TR/html5/forms.html#valid-e-mail-address
    public static normal(control: AbstractControl): { [key: string]: boolean } {
        if (AbstractControlUtil.isNotPresent(control)) {
            return undefined
        };
        // tslint:disable-next-line:max-line-length
        let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        if (pattern.test(control.value)) {
            return undefined;
        }
        return { 'normalEmailRule': true };
    };

    public static suggest(options?: EmailOptions): ValidatorFn {
        const validator = (control: AbstractControl): { [key: string]: any } => {
            if (AbstractControlUtil.isNotPresent(control)) {
                return undefined
            };
            return this.emailSuggestion.suggest(control.value, options)
        };
        return validator;
    };

}
