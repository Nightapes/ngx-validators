import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Util } from './../util';
import { PhoneNumberUtil } from 'google-libphonenumber';
import * as libPhoneNumber from 'google-libphonenumber';

export const regionsCode: string[] = [
    // Region code for global networks (e.g. +800 numbers).
    'UN001', 'US', 'AG', 'AI', 'AS', 'BB', 'BM', 'BS', 'CA', 'DM', 'DO', 'GD', 'GU', 'JM', 'KN', 'KY', 'LC',
    'MP', 'MS', 'PR', 'SX', 'TC', 'TT', 'VC', 'VG', 'VI', 'RU', 'KZ', 'EG', 'ZA', 'GR', 'NL', 'BE', 'FR',
    'ES', 'HU', 'IT', 'VA', 'RO', 'CH', 'AT', 'GB', 'GG', 'IM', 'JE', 'DK', 'SE', 'NO', 'SJ', 'PL', 'DE',
    'PE', 'MX', 'CU', 'AR', 'BR', 'CL', 'CO', 'VE', 'MY', 'AU', 'CC', 'CX', 'ID', 'PH', 'NZ', 'SG', 'TH',
    'JP', 'KR', 'VN', 'CN', 'TR', 'IN', 'PK', 'AF', 'LK', 'MM', 'IR', 'SS', 'MA', 'EH', 'DZ', 'TN', 'LY',
    'GM', 'SN', 'MR', 'ML', 'GN', 'CI', 'BF', 'NE', 'TG', 'BJ', 'MU', 'LR', 'SL', 'GH', 'NG', 'TD', 'CF',
    'CM', 'CV', 'ST', 'GQ', 'GA', 'CG', 'CD', 'AO', 'GW', 'IO', 'AC', 'SC', 'SD', 'RW', 'ET', 'SO', 'DJ',
    'KE', 'TZ', 'UG', 'BI', 'MZ', 'ZM', 'MG', 'RE', 'YT', 'ZW', 'NA', 'MW', 'LS', 'BW', 'SZ', 'KM', 'SH',
    'TA', 'ER', 'AW', 'FO', 'GL', 'GI', 'PT', 'LU', 'IE', 'IS', 'AL', 'MT', 'CY', 'FI', 'AX', 'BG', 'LT',
    'LV', 'EE', 'MD', 'AM', 'BY', 'AD', 'MC', 'SM', 'UA', 'RS', 'ME', 'HR', 'SI', 'BA', 'MK', 'CZ', 'SK',
    'LI', 'FK', 'BZ', 'GT', 'SV', 'HN', 'NI', 'CR', 'PA', 'PM', 'HT', 'GP', 'BL', 'MF', 'BO', 'GY', 'EC',
    'GF', 'PY', 'MQ', 'SR', 'UY', 'CW', 'BQ', 'TL', 'NF', 'BN', 'NR', 'PG', 'TO', 'SB', 'VU', 'FJ', 'PW',
    'WF', 'CK', 'NU', 'WS', 'KI', 'NC', 'TV', 'PF', 'TK', 'FM', 'MH', 'KP', 'HK', 'MO', 'KH', 'LA', 'BD',
    'TW', 'MV', 'LB', 'JO', 'SY', 'IQ', 'KW', 'SA', 'YE', 'OM', 'PS', 'AE', 'IL', 'BH', 'QA', 'BT', 'MN',
    'NP', 'TJ', 'TM', 'AZ', 'GE', 'KG', 'UZ', 'ZZ'
];

export class PhoneValidators {

    static checkRegionCode(local: string): boolean {
        return !(regionsCode.indexOf(local) === -1);
    };

    static isValidRegionCode(control: AbstractControl): { [key: string]: boolean } {
        if (Util.isNotPresent(control)) {
            return undefined;
        }

        if (!PhoneValidators.checkRegionCode(control.value)) {
            return { 'noValidRegionCode': true };
        }
        return undefined;
    };

    public static isPhoneNumber(local: string): ValidatorFn {
        const validator = (control: AbstractControl): { [key: string]: any } => {
            if (Util.isNotPresent(control)) {
                return undefined;
            }

            if (!PhoneValidators.checkRegionCode(local)) {
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
        return validator;
    };

    public static isPossibleNumberWithReason(local: string): ValidatorFn {
        const validator = (control: AbstractControl): { [key: string]: any } => {
            if (Util.isNotPresent(control)) {
                return undefined;
            }

            if (!PhoneValidators.checkRegionCode(local)) {
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
        return validator;
    };
}