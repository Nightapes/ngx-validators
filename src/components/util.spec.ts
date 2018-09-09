import { Util } from './util';
import { FormControl } from '@angular/forms';

describe('Util service', () => {

    describe('isNotPresent', () => {

        it('should work for empty control', () => {
            let control: FormControl = new FormControl('');
            let validated = Util.isNotPresent(control);
            expect(validated).toBeTruthy();
        });

        it('should work for control with text', () => {
            let control: FormControl = new FormControl('aaabbbccc');
            let validated = Util.isNotPresent(control);
            expect(validated).toBeFalsy();
        });

    });

    describe('add error', () => {

        it('should work for control without error', () => {
            let control: FormControl = new FormControl('');
            let validated = Util.addError(control, 'newError', true);
            expect(control.hasError('newError')).toBeTruthy();
        });

        it('should work for control with error', () => {
            let control: FormControl = new FormControl('');
            control.setErrors({ oldError: 'test' });
            let validated = Util.addError(control, 'newError', true);
            expect(control.hasError('newError')).toBeTruthy();
            expect(control.hasError('oldError')).toBeTruthy();
        });
    });

    describe('remove error', () => {

        it('should work for control without error', () => {
            let control: FormControl = new FormControl('');
            let validated = Util.removeError(control, 'newError');
            expect(control.hasError('newError')).toBeFalsy();
        });

        it('should work for control with error', () => {
            let control: FormControl = new FormControl('');
            control.setErrors({ oldError: 'test', newError: 'test' });
            let validated = Util.removeError(control, 'newError');
            expect(control.hasError('newError')).toBeFalsy();
            expect(control.hasError('oldError')).toBeTruthy();
        });

        it('should work for control with one error', () => {
            let control: FormControl = new FormControl('');
            control.setErrors({ newError: 'test' });
            let validated = Util.removeError(control, 'newError');
            expect(control.hasError('newError')).toBeFalsy();
        });
    });

});
