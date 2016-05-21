import { AbstractControl } from '@angular/common';
import { NumberWrapper} from '@angular/core/src/facade/lang';
import {Util} from './util'

export class UniversalValidators {

    static noWhitespace(): any {
        return function validate(control: AbstractControl): { [key: string]: any } {
            if (Util.isNotPresent(control)) return undefined;
            let pattern = '\\s';
            if (new RegExp(pattern).test(control.value)) {
                return { 'noWhitespaceRequired': true };
            }
            return undefined;
        };
    }

    static isNumber(): any {
        return function validate(control: AbstractControl): { [key: string]: any } {
            if (Util.isNotPresent(control)) return undefined;
            if (NumberWrapper.isNaN(control.value)) {
                return { 'numberRequired': true };
            }
            return undefined;
        };
    }

    static isInRange(minValue: number, maxValue: number): any {
        return function validate(control: AbstractControl): { [key: string]: any } {
            if (Util.isNotPresent(control)) return undefined;
            if (NumberWrapper.isNaN(control.value)) {
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
    }

    static minLength(minLength: number): any {
        return function validate(control: AbstractControl): { [key: string]: any } {
            if (Util.isNotPresent(control)) return undefined;
            let value: string = control.value;
            if (value.length > minLength) {
                return undefined;
            }
            return { 'minLength': true };
        };
    }

    static maxLength(maxLength: number): any {
        return function validate(control: AbstractControl): { [key: string]: any } {
            if (Util.isNotPresent(control)) return undefined;
            let value: string = control.value;
            if (maxLength > value.length) {
                return undefined;
            }
            return { 'maxLength': true };
        };
    }

}