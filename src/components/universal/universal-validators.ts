import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { AbstractControlUtil } from './../abstract-control-util';

export class UniversalValidators {

    public static noWhitespace(control: AbstractControl): { [key: string]: boolean } {
        if (AbstractControlUtil.isNotPresent(control)) return undefined;
        let pattern = '\\s';
        if (new RegExp(pattern).test(control.value)) {
            return { 'noWhitespaceRequired': true };
        }
        return undefined;
    };

    public static noEmptyString(control: AbstractControl): { [key: string]: boolean } {
        if (AbstractControlUtil.isNotPresent(control)) return undefined;
        if (control.value.trim().length === 0) {
            return { 'noEmptyString': true };
        }
        return undefined;
    };

    public static isNumber(control: AbstractControl): { [key: string]: boolean } {
        if (AbstractControlUtil.isNotPresent(control)) return undefined;
        if (isNaN(control.value)) {
            return { 'numberRequired': true };
        }
        return undefined;
    };

    public static isInRange(minValue: number, maxValue: number): ValidatorFn {
        const validator = (control: AbstractControl): { [key: string]: any } => {
            if (AbstractControlUtil.isNotPresent(control)) return undefined;
            if (isNaN(control.value)) {
                return { 'numberRequired': true };
            }
            if (+control.value < minValue) {
                return { 'rangeValueToSmall': { 'requiredMinValue': minValue, 'requiredMaxValue': maxValue, 'actual': control.value } };
            }

            if (+control.value > maxValue) {
                return { 'rangeValueToBig': { 'requiredMinValue': minValue, 'requiredMaxValue': maxValue, 'actual': control.value } };
            } else {
                return undefined;
            }
        };
        return validator;
    };

    public static minLength(minLength: number) {
        const validator = (control: AbstractControl): { [key: string]: any } => {
            if (AbstractControlUtil.isNotPresent(control)) return undefined;
            let value: string = control.value;
            if (value.length >= minLength) {
                return undefined;
            }
            return { 'minLength': { 'requiredMinLength': minLength, 'actualLength': value.length } };
        };
        return validator;
    };

    public static maxLength(maxLength: number) {
        const validator = (control: AbstractControl): { [key: string]: any } => {
            if (AbstractControlUtil.isNotPresent(control)) return undefined;
            let value: string = control.value;
            if (maxLength >= value.length) {
                return undefined;
            }
            return { 'maxLength': { 'requiredMaxLength': maxLength, 'actualLength': value.length } };
        };
        return validator;
    };

    public static min(min: number) {
        const validator = (control: AbstractControl): { [key: string]: any } => {
            if (AbstractControlUtil.isNotPresent(control)) return undefined;
            let value: string = control.value;
            if (isNaN(control.value)) {
                return { 'numberRequired': true };
            }
            if (+value >= min) {
                return undefined;
            }
            return { 'min': { 'required': min, 'actual': control.value } };
        };
        return validator;
    };

    public static max(max: number) {
        const validator = (control: AbstractControl): { [key: string]: any } => {
            if (AbstractControlUtil.isNotPresent(control)) return undefined;
            let value: string = control.value;
            if (isNaN(control.value)) {
                return { 'numberRequired': true };
            }
            if (max >= +value) {
                return undefined;
            }
            return { 'max': { 'required': max, 'actual': control.value } };
        };
        return validator;
    };

}
