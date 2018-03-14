import { PhoneValidators, regionsCode } from './phone-validators';
import { FormControl } from '@angular/forms';
import { } from 'jasmine';

describe('isPhoneNumber', () => {

    it('should work for empty control', () => {
        let control: FormControl = new FormControl('');
        let validated = PhoneValidators.isPhoneNumber(regionsCode.US)(control);
        expect(validated).toBeUndefined();
    });

    it('should work for wrong region code', () => {
        let control: FormControl = new FormControl('202-456-1414');
        let validated = PhoneValidators.isPhoneNumber('REGIONCODE')(control);
        expect(validated).toEqual({ 'noValidRegionCode': true });
    });

    it('should work for valid Phones', () => {
        const phone = [
            '202-456-1414',
            '(202) 456-1414',
            '+1 (202) 456-1414',
            '202.456.1414',
            '202/4561414',
            '1 202 456 1414',
            '+12024561414',
            '1 202-456-1414'
        ];

        phone.forEach(element => {
            let control: FormControl = new FormControl(element);
            let validated = PhoneValidators.isPhoneNumber(regionsCode.US)(control);
            expect(validated).toBeUndefined();
        });

    });

    it('should work for invalid Phone', () => {
        const invalidPhone = [
            '123SDDSD',
            'sd',
            'sdsd322323',
            'sdsdc43v4c34v',
            'sdsfdfd44d',
            'sd434343sd',
            '3434s3434dsd',
            '43434343434sdsd',
            '343434343.sdsd',
        ];
        invalidPhone.forEach(element => {
            let control: FormControl = new FormControl(element);
            let validated = PhoneValidators.isPhoneNumber(regionsCode.US)(control);
            expect(validated).toEqual({ 'noPhoneNumber': true });
        });
    });

});

describe('isPossibleNumberWithReason', () => {

    it('should work for empty control', () => {
        let control: FormControl = new FormControl('');
        let validated = PhoneValidators.isPossibleNumberWithReason(regionsCode.US)(control);
        expect(validated).toBeUndefined();
    });

    it('should work for wrong region code', () => {
        let control: FormControl = new FormControl('202-456-1414');
        let validated = PhoneValidators.isPossibleNumberWithReason('REGIONCODE')(control);
        expect(validated).toEqual({ 'noValidRegionCode': true });
    });

    it('should work for invalid Phones', () => {
        const phone = [
            'sd',
            'sdsdsdsd'
        ];

        phone.forEach(element => {
            let control: FormControl = new FormControl(element);
            let validated = PhoneValidators.isPossibleNumberWithReason(regionsCode.US)(control);
            expect(validated).toEqual({ 'noPhoneNumber': true });
        });

    });

    it('should work for invalid Phones', () => {
        const invalidPhone = [
            '202-456-14',
            '(202) 456-14',
            '+1 (202) 456-14',
            '202.456.14',
            '202/45614',
            '1 202 456 14',
            '+120245614',
            '1 202-456-14'
        ];
        invalidPhone.forEach(element => {
            let control: FormControl = new FormControl(element);
            let validated = PhoneValidators.isPossibleNumberWithReason(regionsCode.US)(control);
            expect(validated).toEqual({ 'phoneNumberTooShort': true });
        });
    });

    it('should work for invalid Phones (short)', () => {
        const invalidPhone = [
            '202-456-14',
            '(202) 456-14',
            '+1 (202) 456-14',
            '202.456.14',
            '202/45614',
            '1 202 456 14',
            '+120245614',
            '1 202-456-14'
        ];
        invalidPhone.forEach(element => {
            let control: FormControl = new FormControl(element);
            let validated = PhoneValidators.isPossibleNumberWithReason(regionsCode.US)(control);
            expect(validated).toEqual({ 'phoneNumberTooShort': true });
        });
    });

    it('should work for invalid Phones (long)', () => {
        const invalidPhone = [
            '202-456-1414555',
            '(202) 456-1414555',
            '+1 (202) 456-1414555',
            '202.456.1414555',
            '202/4561414555',
            '1 202 456 1414555',
            '+12024561414555',
            '1 202-456-1414555',
        ];
        invalidPhone.forEach(element => {
            let control: FormControl = new FormControl(element);
            let validated = PhoneValidators.isPossibleNumberWithReason(regionsCode.US)(control);
            expect(validated).toEqual({ 'phoneNumberTooLong': true });
        });
    });

});

describe('isValidRegionCode', () => {

    it('should work for empty control', () => {
        let control: FormControl = new FormControl('');
        let validated = PhoneValidators.isValidRegionCode(control);
        expect(validated).toBeUndefined();
    });

    it('should work for wrong region code', () => {
        let control: FormControl = new FormControl('REGIONCODE');
        let validated = PhoneValidators.isValidRegionCode(control);
        expect(validated).toEqual({ 'noValidRegionCode': true });
    });

    it('should work for region code', () => {
        for (let code in regionsCode) {
            let control: FormControl = new FormControl(code);
            let validated = PhoneValidators.isValidRegionCode(control);
            expect(validated).toBeUndefined();
        };

    });

});
