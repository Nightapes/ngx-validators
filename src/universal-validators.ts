import { AbstractControl } from '@angular/common';
import { NumberWrapper} from '@angular/core/src/facade/lang';
export class UniversalValidators {

    static noWhitespace(): any {
        return function validate(control: AbstractControl): { [key: string]: any } {
            let pattern = '\\s';
            if (control.value !== '' && new RegExp(pattern).test(control.value)) {
                return { 'noWhitespaceRequired': true };
            }
            return undefined;
        };
    }

    static isNumber(): any {
        return function validate(control: AbstractControl): { [key: string]: any } {
            if (control.value !== '' && NumberWrapper.isNaN(control.value)) {
                return { 'numberRequired': true };
            }
            return undefined;
        };
    }


}