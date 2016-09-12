import {EmailValidators} from '../src/email/email-validators';
import {FormControl} from '@angular/forms';

export function main() {

    describe('Email validators service', () => {
        describe('simpleRule', () => {

            it('should work for empty control', () => {
                let control: FormControl = new FormControl('');
                let validated = EmailValidators.simple()(control);
                expect(validated).toBeUndefined();
            });

            it('should work for valid emails', () => {
                const mail = [
                    'prettyandsimple@example.com',
                    'very.common@example.com',
                    'disposable.style.email.with+symbol@example.com',
                    'other.email-with-dash@example.com',
                    'x@example.com',
                    'example@s.solutions',
                    'example-indeed@strange-example.com',

                ];

                mail.forEach(element => {
                    let control: FormControl = new FormControl(element);
                    let validated = EmailValidators.simple()(control);
                    expect(validated).toBeUndefined();
                });

            });

            it('should work for invalid email', () => {
                const invalidEmail = [
                    'Abc.example.com',
                    //  'A@b@c@example.com',
                    //  'john.doe@example..com',
                    //  'john..doe@example.com',
                ];
                invalidEmail.forEach(element => {
                    let control: FormControl = new FormControl(element);
                    let validated = EmailValidators.simple()(control);
                    expect(validated).toEqual({ 'simpleEmailRule': true });
                });
            });

        });

        describe('normalRule', () => {

            it('should work for empty control', () => {
                let control: FormControl = new FormControl('');
                let validated = EmailValidators.normal()(control);
                expect(validated).toBeUndefined();
            });

            it('should work for valid emails', () => {
                const mail = [
                    'prettyandsimple@example.com',
                    'very.common@example.com',
                    'disposable.style.email.with+symbol@example.com',
                    'other.email-with-dash@example.com',
                    'x@example.com',
                    'example@s.solutions',
                    'example-indeed@strange-example.com',

                ];

                mail.forEach(element => {
                    let control: FormControl = new FormControl(element);
                    let validated = EmailValidators.normal()(control);
                    expect(validated).toBeUndefined();
                });

            });

            it('should work for invalid email', () => {
                const invalidEmail = [
                    'Abc.example.com',
                    'A@b@c@example.com',
                    'john.doe@example..com',
                    'john.doe123456789012345678901234567890123456789012345678901234567890@example..com',
                    'john.doe@123456789012345678901234567890123456789012345678901234567890example..com',
                    'prett[~]yandsimple@example.com',
                ];
                invalidEmail.forEach(element => {
                    let control: FormControl = new FormControl(element);
                    let validated = EmailValidators.normal()(control);
                    expect(validated).toEqual({ 'normalEmailRule': true });
                });
            });

        });

    });
}
