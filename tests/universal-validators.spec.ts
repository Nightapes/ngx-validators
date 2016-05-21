import {UniversalValidators} from '../src/universal-validators';
import {Control} from '@angular/common';

export function main() {

    describe('Universal validators service', () => {

        describe('whitespaceRule', () => {

            it('should work for empty control', () => {
                let control: Control = new Control('');
                let validated = UniversalValidators.noWhitespace()(control);
                expect(validated).toBeUndefined();
            });

            it('should work for valid password', () => {
                let control: Control = new Control('aaabbbccc');
                let validated = UniversalValidators.noWhitespace()(control);
                expect(validated).toBeUndefined();
            });

            it('should work for invalid password', () => {
                let control: Control = new Control('aaab bbccc');
                let validated = UniversalValidators.noWhitespace()(control);
                expect(validated).toEqual({ 'noWhitespaceRequired': true });
            });
        });

        describe('numberRule', () => {

            it('should work for empty control', () => {
                let control: Control = new Control('');
                let validated = UniversalValidators.isNumber()(control);
                expect(validated).toBeUndefined();
            });

            it('should work for valid number', () => {
                let control: Control = new Control('453');
                let validated = UniversalValidators.isNumber()(control);
                expect(validated).toBeUndefined();
            });

            it('should work for valid number 2', () => {
                let control: Control = new Control('453.5');
                let validated = UniversalValidators.isNumber()(control);
                expect(validated).toBeUndefined();
            });

            it('should work for invalid number', () => {
                let control: Control = new Control('abbccc');
                let validated = UniversalValidators.isNumber()(control);
                expect(validated).toEqual({ 'numberRequired': true });
            });

        });

        describe('isInRangeRule', () => {

            it('should work for empty control', () => {
                let control: Control = new Control('');
                let validated = UniversalValidators.isInRange(5, 10)(control);
                expect(validated).toBeUndefined();
            });

            it('should work for valid number', () => {
                let control: Control = new Control('7');
                let validated = UniversalValidators.isInRange(5, 10)(control);
                expect(validated).toBeUndefined();
            });

            it('should work for invalid number small', () => {
                let control: Control = new Control('4');
                let validated = UniversalValidators.isInRange(5, 10)(control);
                expect(validated).toEqual({ 'rangeValueToSmall': true });
            });

            it('should work for invalid number big', () => {
                let control: Control = new Control('11');
                let validated = UniversalValidators.isInRange(5, 10)(control);
                expect(validated).toEqual({ 'rangeValueToBig': true });
            });

            it('should work for invalid input', () => {
                let control: Control = new Control('sdsd');
                let validated = UniversalValidators.isInRange(5, 10)(control);
                expect(validated).toEqual({ 'numberRequired': true });
            });

        });

        describe('minLength', () => {

            it('should work for empty control', () => {
                let control: Control = new Control('');
                let validated = UniversalValidators.minLength(2)(control);
                expect(validated).toBeUndefined();
            });

            it('should work for valid length', () => {
                let control: Control = new Control('453');
                let validated = UniversalValidators.minLength(2)(control);
                expect(validated).toBeUndefined();
            });

            it('should work for invalid length', () => {
                let control: Control = new Control('abbccc');
                let validated = UniversalValidators.minLength(6)(control);
                expect(validated).toEqual({ 'minLength': true });
            });

        });

        describe('maxLength', () => {

            it('should work for empty control', () => {
                let control: Control = new Control('');
                let validated = UniversalValidators.maxLength(2)(control);
                expect(validated).toBeUndefined();
            });

            it('should work for valid length', () => {
                let control: Control = new Control('453');
                let validated = UniversalValidators.maxLength(4)(control);
                expect(validated).toBeUndefined();
            });

            it('should work for invalid length', () => {
                let control: Control = new Control('abbccc');
                let validated = UniversalValidators.maxLength(2)(control);
                expect(validated).toEqual({ 'maxLength': true });
            });

        });



    });
}