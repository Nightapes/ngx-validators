import { UniversalValidators } from '../src/universal/universal-validators';
import { FormControl } from '@angular/forms';
import {} from 'jasmine';

export function main() {

    describe('Universal validators service', () => {

        describe('whitespaceRule', () => {

            it('should work for empty control', () => {
                let control: FormControl = new FormControl('');
                let validated = UniversalValidators.noWhitespace()(control);
                expect(validated).toBeUndefined();
            });

            it('should work for valid password', () => {
                let control: FormControl = new FormControl('aaabbbccc');
                let validated = UniversalValidators.noWhitespace()(control);
                expect(validated).toBeUndefined();
            });

            it('should work for invalid password', () => {
                let control: FormControl = new FormControl('aaab bbccc');
                let validated = UniversalValidators.noWhitespace()(control);
                expect(validated).toEqual({ 'noWhitespaceRequired': true });
            });
        });

        describe('numberRule', () => {

            it('should work for empty control', () => {
                let control: FormControl = new FormControl('');
                let validated = UniversalValidators.isNumber()(control);
                expect(validated).toBeUndefined();
            });

            it('should work for valid number', () => {
                let control: FormControl = new FormControl('453');
                let validated = UniversalValidators.isNumber()(control);
                expect(validated).toBeUndefined();
            });

            it('should work for valid number 2', () => {
                let control: FormControl = new FormControl('453.5');
                let validated = UniversalValidators.isNumber()(control);
                expect(validated).toBeUndefined();
            });

            it('should work for invalid number', () => {
                let control: FormControl = new FormControl('abbccc');
                let validated = UniversalValidators.isNumber()(control);
                expect(validated).toEqual({ 'numberRequired': true });
            });

        });

        describe('isInRangeRule', () => {

            it('should work for empty control', () => {
                let control: FormControl = new FormControl('');
                let validated = UniversalValidators.isInRange(5, 10)(control);
                expect(validated).toBeUndefined();
            });

            it('should work for empty control', () => {
                let control: FormControl = new FormControl(null);
                let validated = UniversalValidators.isInRange(5, 10)(control);
                expect(validated).toBeUndefined();
            });

            it('should work for valid number, lower range', () => {
                let control: FormControl = new FormControl('5');
                let validated = UniversalValidators.isInRange(5, 10)(control);
                expect(validated).toBeUndefined();
            });

            it('should work for valid number, higher range', () => {
                let control: FormControl = new FormControl('10');
                let validated = UniversalValidators.isInRange(5, 10)(control);
                expect(validated).toBeUndefined();
            });

            it('should work for valid number', () => {
                let control: FormControl = new FormControl('7');
                let validated = UniversalValidators.isInRange(5, 10)(control);
                expect(validated).toBeUndefined();
            });

            it('should work for invalid number small', () => {
                let control: FormControl = new FormControl('4');
                let validated = UniversalValidators.isInRange(5, 10)(control);
                expect(validated).toEqual({ 'rangeValueToSmall': true });
            });

            it('should work for invalid number big', () => {
                let control: FormControl = new FormControl('11');
                let validated = UniversalValidators.isInRange(5, 10)(control);
                expect(validated).toEqual({ 'rangeValueToBig': true });
            });

            it('should work for invalid input', () => {
                let control: FormControl = new FormControl('sdsd');
                let validated = UniversalValidators.isInRange(5, 10)(control);
                expect(validated).toEqual({ 'numberRequired': true });
            });

        });

        describe('minLength', () => {

            it('should work for empty control', () => {
                let control: FormControl = new FormControl('');
                let validated = UniversalValidators.minLength(2)(control);
                expect(validated).toBeUndefined();
            });

            it('should work for valid length', () => {
                let control: FormControl = new FormControl('12');
                let validated = UniversalValidators.minLength(2)(control);
                expect(validated).toBeUndefined();
            });

            it('should work for invalid length', () => {
                let control: FormControl = new FormControl('1234567');
                let validated = UniversalValidators.minLength(6)(control);
                expect(validated).toEqual({ 'minLength': true });
            });

        });

        describe('maxLength', () => {

            it('should work for empty control', () => {
                let control: FormControl = new FormControl('');
                let validated = UniversalValidators.maxLength(2)(control);
                expect(validated).toBeUndefined();
            });

            it('should work for valid length', () => {
                let control: FormControl = new FormControl('1234');
                let validated = UniversalValidators.maxLength(4)(control);
                expect(validated).toBeUndefined();
            });

            it('should work for invalid length', () => {
                let control: FormControl = new FormControl('123');
                let validated = UniversalValidators.maxLength(2)(control);
                expect(validated).toEqual({ 'maxLength': true });
            });

        });

        describe('min', () => {

            it('should work for empty control', () => {
                let control: FormControl = new FormControl('');
                let validated = UniversalValidators.min(2)(control);
                expect(validated).toBeUndefined();
            });

            it('should work for valid min', () => {
                let control: FormControl = new FormControl('12');
                let validated = UniversalValidators.min(2)(control);
                expect(validated).toBeUndefined();
            });

            it('should work for valid min', () => {
                let control: FormControl = new FormControl('2');
                let validated = UniversalValidators.min(2)(control);
                expect(validated).toBeUndefined();
            });

            it('should work for invalid min', () => {
                let control: FormControl = new FormControl('2');
                let validated = UniversalValidators.min(6)(control);
                expect(validated).toEqual({ 'min': true });
            });

        });

        describe('max', () => {

            it('should work for empty control', () => {
                let control: FormControl = new FormControl('');
                let validated = UniversalValidators.max(2)(control);
                expect(validated).toBeUndefined();
            });

            it('should work for valid max', () => {
                let control: FormControl = new FormControl('2');
                let validated = UniversalValidators.max(4)(control);
                expect(validated).toBeUndefined();
            });

            it('should work for valid max', () => {
                let control: FormControl = new FormControl('4');
                let validated = UniversalValidators.max(4)(control);
                expect(validated).toBeUndefined();
            });

            it('should work for invalid max', () => {
                let control: FormControl = new FormControl('3');
                let validated = UniversalValidators.max(2)(control);
                expect(validated).toEqual({ 'max': true });
            });

        });



    });
}
