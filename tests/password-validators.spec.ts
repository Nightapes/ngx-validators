import {PasswordValidators} from '../src/password-validators';
import {Control} from '@angular/common';

export function main() {
    describe('Password validators service', () => {
        describe('repeatCharacterRegexRule', () => {

            it('should work for empty control', () => {
                let control: Control = new Control('');
                let validated = PasswordValidators.repeatCharacterRegexRule(4)(control);
                expect(validated).toBeUndefined();
            });
            it('should work for valid password', () => {
                let control: Control = new Control('aaabbbccc');
                let validated = PasswordValidators.repeatCharacterRegexRule(4)(control);
                expect(validated).toBeUndefined();
            });
            it('should work for invalid password', () => {
                let control: Control = new Control('aaabbbbccc');
                let validated = PasswordValidators.repeatCharacterRegexRule(4)(control);
                expect(validated).toEqual({ 'repeatCharacterRegexRule': true });
            });
            it('should work for invalid password with length 9', () => {
                let control: Control = new Control('aaabbbbbbbbbccc');
                let validated = PasswordValidators.repeatCharacterRegexRule(4)(control);
                expect(validated).toEqual({ 'repeatCharacterRegexRule': true });
            });
            it('should work for valid password with length 9', () => {
                let control: Control = new Control('aaabbbccc');
                let validated = PasswordValidators.repeatCharacterRegexRule(4)(control);
                expect(validated).toBeUndefined();
            });
        });
        describe('whitespaceRule', () => {

            it('should work for empty control', () => {
                let control: Control = new Control('');
                let validated = PasswordValidators.whitespaceRule()(control);
                expect(validated).toBeUndefined();
            });
            it('should work for valid password', () => {
                let control: Control = new Control('aaabbbccc');
                let validated = PasswordValidators.whitespaceRule()(control);
                expect(validated).toBeUndefined();
            });
            it('should work for invalid password', () => {
                let control: Control = new Control('aaab bbccc');
                let validated = PasswordValidators.whitespaceRule()(control);
                expect(validated).toEqual({ 'whitespaceRule': true });
            });
        });
    });
}