import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Util } from './../util';

const noWhitespace: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } => {
    if (Util.isNotPresent(control)) return undefined;
    let pattern = '\\s';
    if (new RegExp(pattern).test(control.value)) {
        return { 'noWhitespaceRequired': true };
    }
    return undefined;
};

const isNumber: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } => {
    if (Util.isNotPresent(control)) return undefined;
    if (isNaN(control.value)) {
        return { 'numberRequired': true };
    }
    return undefined;
};

const isInRange = (minValue: number, maxValue: number): ValidatorFn => {
    return (control: AbstractControl): { [key: string]: any } => {
        if (Util.isNotPresent(control)) return undefined;
        if (isNaN(control.value)) {
            return { 'numberRequired': true };
        }
        if (+control.value < minValue) {
            return { 'rangeValueToSmall': true };
        }

        if (+control.value > maxValue) {
            return { 'rangeValueToBig': true };
        } else {
            return undefined;
        }
    };
};

const minLength = (minLength: number): ValidatorFn => {
    return (control: AbstractControl): { [key: string]: any } => {
        if (Util.isNotPresent(control)) return undefined;
        let value: string = control.value;
        if (value.length <= minLength) {
            return undefined;
        }
        return { 'minLength': true };
    };
};

const maxLength = (maxLength: number): ValidatorFn => {
    return (control: AbstractControl): { [key: string]: any } => {
        if (Util.isNotPresent(control)) return undefined;
        let value: string = control.value;
        if (maxLength >= value.length) {
            return undefined;
        }
        return { 'maxLength': true };
    };
};

const min = (min: number): ValidatorFn => {
    return (control: AbstractControl): { [key: string]: any } => {
        if (Util.isNotPresent(control)) return undefined;
        let value: string = control.value;
        if (isNaN(control.value)) {
            return { 'numberRequired': true };
        }
        if (+value >= min) {
            return undefined;
        }
        return { 'min': true };
    };
};

const max = (max: number): ValidatorFn => {
    return (control: AbstractControl): { [key: string]: any } => {
        if (Util.isNotPresent(control)) return undefined;
        let value: string = control.value;
        if (isNaN(control.value)) {
            return { 'numberRequired': true };
        }
        if (max >= +value) {
            return undefined;
        }
        return { 'max': true };
    };
};

// tslint:disable-next-line:variable-name
export const UniversalValidators: any = {
    max,
    min,
    maxLength,
    minLength,
    isInRange,
    isNumber,
    noWhitespace
};
