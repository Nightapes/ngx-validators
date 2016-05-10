import { AbstractControl } from '@angular/common';

export class PasswordValidators {

    static repeatCharacterRegexRule(repeatCount: number): any {
        return function validate(control: AbstractControl): { [key: string]: any } {
            let repeatDec = repeatCount - 1;
            let pattern = '([^\\x00-\\x1F])\\1{' + repeatDec + '}';
            if (control.value !== '' && new RegExp(pattern).test(control.value)) {
                return { 'repeatCharacterRegexRule': true };
            }
            return undefined;
        };
    }

    static whitespaceRule(): any {
        return function validate(control: AbstractControl): { [key: string]: any } {
            let pattern = '\\s';
            if (control.value !== '' && new RegExp(pattern).test(control.value)) {
                return { 'whitespaceRule': true };
            }
            return undefined;
        };
    }

}