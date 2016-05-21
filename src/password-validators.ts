import { AbstractControl } from '@angular/common';
import {Util} from './util'

export class PasswordValidators {

    static repeatCharacterRegexRule(repeatCount: number): any {
        return function validate(control: AbstractControl): { [key: string]: any } {
            if (Util.isNotPresent(control)) return undefined;
            let repeatDec = repeatCount - 1;
            let pattern = '([^\\x00-\\x1F])\\1{' + repeatDec + '}';
            if (control.value !== '' && new RegExp(pattern).test(control.value)) {
                return { 'repeatCharacterRegexRule': true };
            }
            return undefined;
        };
    }

    static allowedCharacterRule(allowedChars: string[]): any {
        return function validate(control: AbstractControl): { [key: string]: any } {
            if (Util.isNotPresent(control)) return undefined;
            let value: string = control.value;
            let valid = true;
            let invalidChars: string[] = [];

            for (let char of value) {
                if (allowedChars.indexOf(char) === -1) {
                    valid = false;
                    if (invalidChars.indexOf(char) === -1) {
                        invalidChars.push(char);
                    }
                }
            }
            if (!valid) {
                return { 'allowedCharacterRule': invalidChars };
            }
            return undefined;
        };
    }

    static alphabeticalCharacterRule(amount: number): any {
        return function validate(control: AbstractControl): { [key: string]: any } {
            if (Util.isNotPresent(control)) return undefined;
            let value: string = control.value;
            if (value.length === 0) {
                return undefined;
            }
            let pattern = /[^A-Za-z]+/g;
            let stripped = value.replace(pattern, '');
            if (stripped.length < amount) {
                return { 'alphabeticalCharacterRule': true };
            }
            return undefined;
        };
    }

    static digitCharacterRule(amount: number): any {
        return function validate(control: AbstractControl): { [key: string]: any } {
            if (Util.isNotPresent(control)) return undefined;
            let value: string = control.value;
            if (value.length === 0) {
                return undefined;
            }
            let pattern = /[^0-9\.]+/g;
            let stripped = value.replace(pattern, '');
            if (stripped.length < amount) {
                return { 'digitCharacterRule': true };
            }
            return undefined;
        };
    }

    static lowercaseCharacterRule(amount: number): any {
        return function validate(control: AbstractControl): { [key: string]: any } {
            if (Util.isNotPresent(control)) return undefined;
            let value: string = control.value;
            if (value.length === 0) {
                return undefined;
            }
            let pattern = /[^a-z]+/g;
            let stripped = value.replace(pattern, '');
            if (stripped.length < amount) {
                return { 'lowercaseCharacterRule': true };
            }
            return undefined;
        };
    }

    static uppercaseCharacterRule(amount: number): any {
        return function validate(control: AbstractControl): { [key: string]: any } {
            if (Util.isNotPresent(control)) return undefined;
            let value: string = control.value;
            if (value.length === 0) {
                return undefined;
            }
            let pattern = /[^A-Z]+/g;
            let stripped = value.replace(pattern, '');
            if (stripped.length < amount) {
                return { 'uppercaseCharacterRule': true };
            }
            return undefined;
        };
    }

}