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

        describe('allowedCharacterRule', () => {

            it('should work for empty control', () => {
                let control: Control = new Control('');
                let allowedCharacter: string[] = ['a', 'b', 'c'];
                let validated = PasswordValidators.allowedCharacterRule(allowedCharacter)(control);
                expect(validated).toBeUndefined();
            });
            it('should work for valid password', () => {
                let control: Control = new Control('aaabbbccc');
                let allowedCharacter: string[] = ['a', 'b', 'c'];
                let validated = PasswordValidators.allowedCharacterRule(allowedCharacter)(control);
                expect(validated).toBeUndefined();
            });
            it('should work for invalid password with one wrong char', () => {
                let control: Control = new Control('aaabbbcccd');
                let allowedCharacter: string[] = ['a', 'b', 'c'];
                let validated = PasswordValidators.allowedCharacterRule(allowedCharacter)(control);
                expect(validated).toEqual({ 'allowedCharacterRule': ['d'] });
            });

            it('should work for invalid password with multiple wrong char', () => {
                let control: Control = new Control('aaafb bbccc) d!');
                let allowedCharacter: string[] = ['a', 'b', 'c'];
                let validated = PasswordValidators.allowedCharacterRule(allowedCharacter)(control);
                expect(validated).toEqual({ 'allowedCharacterRule': ['f', ' ', ')', 'd', '!'] });
            });

        });

        describe('alphabeticalCharacterRule', () => {

            it('should work for empty control', () => {
                let control: Control = new Control('');
                let validated = PasswordValidators.alphabeticalCharacterRule(5)(control);
                expect(validated).toBeUndefined();
            });
            it('should work for valid password', () => {
                let control: Control = new Control('aAa345b!bdDb"c cc76');
                let validated = PasswordValidators.alphabeticalCharacterRule(5)(control);
                expect(validated).toBeUndefined();
            });

            it('should work for invalid password', () => {
                let control: Control = new Control('1234Abc!');
                let validated = PasswordValidators.alphabeticalCharacterRule(5)(control);
                expect(validated).toEqual({ 'alphabeticalCharacterRule': true });
            });

        });

        describe('digitCharacterRule', () => {

            it('should work for empty control', () => {
                let control: Control = new Control('');
                let validated = PasswordValidators.digitCharacterRule(5)(control);
                expect(validated).toBeUndefined();
            });
            it('should work for valid password', () => {
                let control: Control = new Control('aAa345b!bdDb"c cc76');
                let validated = PasswordValidators.digitCharacterRule(5)(control);
                expect(validated).toBeUndefined();
            });

            it('should work for invalid password', () => {
                let control: Control = new Control('1234Abc!');
                let validated = PasswordValidators.digitCharacterRule(5)(control);
                expect(validated).toEqual({ 'digitCharacterRule': true });
            });

        });

        describe('lowercaseCharacterRule', () => {

            it('should work for empty control', () => {
                let control: Control = new Control('');
                let validated = PasswordValidators.lowercaseCharacterRule(5)(control);
                expect(validated).toBeUndefined();
            });
            it('should work for valid password', () => {
                let control: Control = new Control('abcdeAACDEF!231');
                let validated = PasswordValidators.lowercaseCharacterRule(5)(control);
                expect(validated).toBeUndefined();
            });

            it('should work for invalid password', () => {
                let control: Control = new Control('1234abcADc!');
                let validated = PasswordValidators.lowercaseCharacterRule(5)(control);
                expect(validated).toEqual({ 'lowercaseCharacterRule': true });
            });

        });

        describe('uppercaseCharacterRule', () => {

            it('should work for empty control', () => {
                let control: Control = new Control('');
                let validated = PasswordValidators.uppercaseCharacterRule(5)(control);
                expect(validated).toBeUndefined();
            });

            it('should work for valid password', () => {
                let control: Control = new Control('abcdeAACDEF!231');
                let validated = PasswordValidators.uppercaseCharacterRule(5)(control);
                expect(validated).toBeUndefined();
            });
            it('should work for invalid password', () => {
                let control: Control = new Control('1234abcAbc!');
                let validated = PasswordValidators.uppercaseCharacterRule(5)(control);
                expect(validated).toEqual({ 'uppercaseCharacterRule': true });
            });

        });

    });
}