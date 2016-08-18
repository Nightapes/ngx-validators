import { AbstractControl } from '@angular/common';
import {Util} from './util';

let visa = '(?:4[0-9]{12})(?:[0-9]{3})?$';
let americanExpress = '(?:3[47][0-9]{13})$';
let maestro = '(?:(?:5[0678]\\d\\d|6304|6390|67\\d\\d)\\d{8,15})$';
let jcb = '(?:(?:2131|1800|35\\d{3})\\d{11})$';
let discover = '(?:6(?:011|5[0-9]{2})(?:[0-9]{12}))$';
let dinersclub = '(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$';
let mastercard = '(?:5[1-5][0-9]{14})$';

export class CreditCardValidators {

    static isCreditCard(): any {
        return function validate(control: AbstractControl): { [key: string]: any } {
            if (Util.isNotPresent(control)) return undefined;
            if (new RegExp(americanExpress + '|' +
                visa + '|' +
                maestro + '|' +
                jcb + '|' +
                discover + '|' +
                mastercard + '|' +
                dinersclub).test(control.value)) {
                return undefined;
            }
            return { 'creditcard': true };
        };
    }


    static americanExpress(): any {
        return function validate(control: AbstractControl): { [key: string]: any } {
            if (Util.isNotPresent(control)) return undefined;
            if (new RegExp(americanExpress).test(control.value)) {
                return undefined;
            }
            return { 'americanExpress': true };
        };
    }

    static dinersclub(): any {
        return function validate(control: AbstractControl): { [key: string]: any } {
            if (Util.isNotPresent(control)) return undefined;
            if (new RegExp(dinersclub).test(control.value)) {
                return undefined;
            }
            return { 'dinersclub': true };
        };
    }

    static discover(): any {
        return function validate(control: AbstractControl): { [key: string]: any } {
            if (Util.isNotPresent(control)) return undefined;
            if (new RegExp(discover).test(control.value)) {
                return undefined;
            }
            return { 'discover': true };
        };
    }
    static jcb(): any {
        return function validate(control: AbstractControl): { [key: string]: any } {
            if (Util.isNotPresent(control)) return undefined;
            if (new RegExp(jcb).test(control.value)) {
                return undefined;
            }
            return { 'jcb': true };
        };
    }
    static maestro(): any {
        return function validate(control: AbstractControl): { [key: string]: any } {
            if (Util.isNotPresent(control)) return undefined;
            if (new RegExp(maestro).test(control.value)) {
                return undefined;
            }
            return { 'maestro': true };
        };
    }

    static mastercard(): any {
        return function validate(control: AbstractControl): { [key: string]: any } {
            if (Util.isNotPresent(control)) return undefined;
            if (new RegExp(mastercard).test(control.value)) {
                return undefined;
            }
            return { 'mastercard': true };
        };
    }


    static visa(): any {
        return function validate(control: AbstractControl): { [key: string]: any } {
            if (Util.isNotPresent(control)) return undefined;
            if (new RegExp(visa).test(control.value)) {
                return undefined;
            }
            return { 'visa': true };
        };
    }

}

