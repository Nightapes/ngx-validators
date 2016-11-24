import { AbstractControl } from '@angular/forms';
import { Util } from './../util';
import { PhoneNumberUtil } from 'google-libphonenumber';
import * as libPhoneNumber from 'google-libphonenumber';


export const regionsCode: any = {
    // Region code for global networks (e.g. +800 numbers).
    UN001: '001',
    AD: 'AD',
    AE: 'AE',
    AO: 'AO',
    AQ: 'AQ',
    AR: 'AR',
    AU: 'AU',
    BB: 'BB',
    BR: 'BR',
    BS: 'BS',
    BY: 'BY',
    CA: 'CA',
    CH: 'CH',
    CN: 'CN',
    CS: 'CS',
    CX: 'CX',
    DE: 'DE',
    GB: 'GB',
    HU: 'HU',
    IT: 'IT',
    JP: 'JP',
    KR: 'KR',
    MX: 'MX',
    NZ: 'NZ',
    PL: 'PL',
    RE: 'RE',
    SE: 'SE',
    SG: 'SG',
    US: 'US',
    YT: 'YT',
    ZW: 'ZW',
    // Official code for the unknown region.
    ZZ: 'ZZ'
};

export class PhoneValidators {

    static checkRegionCode(local: string): boolean {
        return !(regionsCode[local] === undefined);
    }

    static isValidRegionCode(): any {
        return function validate(control: AbstractControl): { [key: string]: any } {
            if (Util.isNotPresent(control)) {
                return undefined;
            }

            if (!PhoneValidators.checkRegionCode(control.value)) {
                return { 'noValidRegionCode': true };
            }
            return undefined;
        };
    }


    static isPhoneNumber(local: string): any {
        return function validate(control: AbstractControl): { [key: string]: any } {
            if (Util.isNotPresent(control)) {
                return undefined;
            }

            if (!PhoneValidators.checkRegionCode(local)) {
                return { 'noValidRegionCode': true };
            }

            let phoneParser: PhoneNumberUtil = PhoneNumberUtil.getInstance();
            let phoneNumber: libPhoneNumber.PhoneNumber = phoneParser.parse(control.value, local);
            if (phoneParser.isValidNumber(phoneNumber)) {
                return undefined;
            }
            return { 'noPhoneNumber': true };
        };
    }

    static isPossibleNumberWithReason(local: string): any {
        return function validate(control: AbstractControl): { [key: string]: any } {
            if (Util.isNotPresent(control)) {
                return undefined;
            }

            if (!PhoneValidators.checkRegionCode(local)) {
                return { 'noValidRegionCode': true };
            }

            let phoneParser: PhoneNumberUtil = PhoneNumberUtil.getInstance();
            let phoneNumber: libPhoneNumber.PhoneNumber = phoneParser.parse(control.value, local);
            let reason: PhoneNumberUtil.ValidationResult = phoneParser.isPossibleNumberWithReason(phoneNumber);

            if (reason === PhoneNumberUtil.ValidationResult.IS_POSSIBLE) {
                return undefined;
            }

            switch (reason) {
                case PhoneNumberUtil.ValidationResult.TOO_LONG:
                    return { 'phoneNumberTooLong': true };
                case PhoneNumberUtil.ValidationResult.TOO_SHORT:
                    return { 'phoneNumberTooShort': true };
                case PhoneNumberUtil.ValidationResult.INVALID_COUNTRY_CODE:
                    return { 'phoneNumberInvalidCountryCode': true };
                default:
                    return { 'noPhoneNumber': true };
            }

        };
    }


}
