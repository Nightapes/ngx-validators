import { AbstractControl, ValidatorFn } from '@angular/forms';
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

export function checkRegionCode(local: string): boolean {
    return !(regionsCode[local] === undefined);
};

export const isValidRegionCode: ValidatorFn = (control: AbstractControl): { [key: string]: boolean } => {
    if (Util.isNotPresent(control)) {
        return undefined;
    }

    if (!checkRegionCode(control.value)) {
        return { 'noValidRegionCode': true };
    }
    return undefined;
};

export const isPhoneNumber = (local: string): ValidatorFn => {
    return function validate(control: AbstractControl): { [key: string]: any } {
        if (Util.isNotPresent(control)) {
            return undefined;
        }

        if (!checkRegionCode(local)) {
            return { 'noValidRegionCode': true };
        }

        let phoneParser: PhoneNumberUtil = PhoneNumberUtil.getInstance();

        let error = { 'noPhoneNumber': true };
        try {
            let phoneNumber: libPhoneNumber.PhoneNumber = phoneParser.parse(control.value, local);
            if (phoneParser.isValidNumber(phoneNumber)) {
                error = undefined;
            }
        } catch (err) {
            error = { 'noPhoneNumber': true };
        }

        return error;
    };
};

export const isPossibleNumberWithReason = (local: string): ValidatorFn => {
    return function validate(control: AbstractControl): { [key: string]: any } {
        if (Util.isNotPresent(control)) {
            return undefined;
        }

        if (!checkRegionCode(local)) {
            return { 'noValidRegionCode': true };
        }

        let phoneParser: PhoneNumberUtil = PhoneNumberUtil.getInstance();

        let error: any = { 'noPhoneNumber': true };
        try {
            let phoneNumber: libPhoneNumber.PhoneNumber = phoneParser.parse(control.value, local);
            let reason: PhoneNumberUtil.ValidationResult = phoneParser.isPossibleNumberWithReason(phoneNumber);
            switch (reason) {
                case PhoneNumberUtil.ValidationResult.IS_POSSIBLE:
                    error = undefined;
                    break;
                case PhoneNumberUtil.ValidationResult.TOO_LONG:
                    error = { 'phoneNumberTooLong': true };
                    break;
                case PhoneNumberUtil.ValidationResult.TOO_SHORT:
                    error = { 'phoneNumberTooShort': true };
                    break;
                case PhoneNumberUtil.ValidationResult.INVALID_COUNTRY_CODE:
                    error = { 'phoneNumberInvalidCountryCode': true };
                    break;
                default:
                    error = { 'noPhoneNumber': true };
                    break;
            }
        } catch (err) {
            error = { 'noPhoneNumber': true };
        }

        return error;

    };
};

// tslint:disable-next-line:variable-name
export const PhoneValidators = {
    isPossibleNumberWithReason,
    isPhoneNumber,
    checkRegionCode,
    isValidRegionCode,
    regionsCode
};
