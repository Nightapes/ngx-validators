import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Util } from './../util';

export const repeatCharacterRegexRule = (repeatCount: number): ValidatorFn => {
    return (control: AbstractControl): { [key: string]: any } => {
        if (Util.isNotPresent(control)) return undefined;
        let repeatDec = repeatCount - 1;
        let pattern = '([^\\x00-\\x1F])\\1{' + repeatDec + '}';
        if (control.value !== '' && new RegExp(pattern).test(control.value)) {
            return { 'repeatCharacterRegexRule': true };
        }
        return undefined;
    };
};

export const allowedCharacterRule = (allowedChars: string[]): ValidatorFn => {
    return (control: AbstractControl): { [key: string]: any } => {
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
};

export const alphabeticalCharacterRule = (amount: number): ValidatorFn => {
    return (control: AbstractControl): { [key: string]: any } => {
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
};

export const digitCharacterRule = (amount: number): ValidatorFn => {
    return (control: AbstractControl): { [key: string]: any } => {
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
};

export const lowercaseCharacterRule = (amount: number): ValidatorFn => {
    return (control: AbstractControl): { [key: string]: any } => {
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
};

export const uppercaseCharacterRule = (amount: number): ValidatorFn => {
    return (control: AbstractControl): { [key: string]: any } => {
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
};

export const mismatchedPasswords = (passwordControlName?: string, confirmPasswordControlName?: string): ValidatorFn => {
    return (group: AbstractControl): { [key: string]: any } => {
        let newPasswordValue = group.get(passwordControlName ? passwordControlName : 'newPassword').value;
        let newPasswordConfirmValue = group.get(confirmPasswordControlName ? confirmPasswordControlName : 'confirmPassword').value;
        if (newPasswordValue !== newPasswordConfirmValue) {
            group.get(confirmPasswordControlName ? confirmPasswordControlName : 'confirmPassword')
                .setErrors({ 'mismatchedPasswords': true });
            return { 'mismatchedPasswords': true };
        }
        return undefined;

    };
};
// tslint:disable-next-line:variable-name
export const PasswordValidators = {
    repeatCharacterRegexRule,
    allowedCharacterRule,
    alphabeticalCharacterRule,
    digitCharacterRule,
    lowercaseCharacterRule,
    uppercaseCharacterRule,
    mismatchedPasswords
};
