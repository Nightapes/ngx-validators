import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Util } from './../util';

export class UniversalValidators {

    public static noWhitespace(control: AbstractControl): { [key: string]: boolean } {
        if (Util.isNotPresent(control)) return undefined;
        let pattern = '\\s';
        if (new RegExp(pattern).test(control.value)) {
            return { 'noWhitespaceRequired': true };
        }
        return undefined;
    };

    public static noEmptyString (control: AbstractControl): { [key: string]: boolean } {
        if (Util.isNotPresent(control)) return undefined;
        if (control.value.trim().length === 0) {
            return { 'noEmptyString': true };
        }
        return undefined;
    };

    public static isNumber(control: AbstractControl): { [key: string]: boolean } {
        if (Util.isNotPresent(control)) return undefined;
        if (isNaN(control.value)) {
            return { 'numberRequired': true };
        }
        return undefined;
    };

    static maxLength2(maxLength: number): ValidatorFn {
        const validator = (control: AbstractControl): { [key: string]: any } => {
            const length: number = control.value ? control.value.length : 0;
            return length > maxLength ?
                { 'maxlength': { 'requiredLength': maxLength, 'actualLength': length } } :
                null;
        };
        return validator;
    }

    public static isInRange(minValue: number, maxValue: number): ValidatorFn {
        const validator = (control: AbstractControl): { [key: string]: any } => {
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
        return validator;
    };

    public static minLength(minLength: number) {
        const validator = (control: AbstractControl): { [key: string]: any } => {
            if (Util.isNotPresent(control)) return undefined;
            let value: string = control.value;
            if (value.length >= minLength) {
                return undefined;
            }
            return { 'minLength': true };
        };
        return validator;
    };

    public static maxLength(maxLength: number) {
        const validator = (control: AbstractControl): { [key: string]: any } => {
            if (Util.isNotPresent(control)) return undefined;
            let value: string = control.value;
            if (maxLength >= value.length) {
                return undefined;
            }
            return { 'maxLength': true };
        };
        return validator;
    };

    public static min(min: number) {
        const validator = (control: AbstractControl): { [key: string]: any } => {
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
        return validator;
    };

    public static max(max: number) {
        const validator = (control: AbstractControl): { [key: string]: any } => {
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
        return validator;
    };

}
