import { PasswordValidators } from '../src/password/password-validators';
import { FormControl, FormGroup } from '@angular/forms';

export function main() {
    describe('Password validators service', () => {
        describe('repeatCharacterRegexRule', () => {

            it('should work for empty control', () => {
                let control: FormControl = new FormControl('');
                let validated = PasswordValidators.repeatCharacterRegexRule(4)(control);
                expect(validated).toBeUndefined();
            });
            it('should work for valid password', () => {
                let control: FormControl = new FormControl('aaabbbccc');
                let validated = PasswordValidators.repeatCharacterRegexRule(4)(control);
                expect(validated).toBeUndefined();
            });
            it('should work for invalid password', () => {
                let control: FormControl = new FormControl('aaabbbbccc');
                let validated = PasswordValidators.repeatCharacterRegexRule(4)(control);
                expect(validated).toEqual({ 'repeatCharacterRegexRule': true });
            });
            it('should work for invalid password with length 9', () => {
                let control: FormControl = new FormControl('aaabbbbbbbbbccc');
                let validated = PasswordValidators.repeatCharacterRegexRule(4)(control);
                expect(validated).toEqual({ 'repeatCharacterRegexRule': true });
            });
            it('should work for valid password with length 9', () => {
                let control: FormControl = new FormControl('aaabbbccc');
                let validated = PasswordValidators.repeatCharacterRegexRule(4)(control);
                expect(validated).toBeUndefined();
            });
        });

        describe('allowedCharacterRule', () => {

            it('should work for empty control', () => {
                let control: FormControl = new FormControl('');
                let allowedCharacter: string[] = ['a', 'b', 'c'];
                let validated = PasswordValidators.allowedCharacterRule(allowedCharacter)(control);
                expect(validated).toBeUndefined();
            });
            it('should work for valid password', () => {
                let control: FormControl = new FormControl('aaabbbccc');
                let allowedCharacter: string[] = ['a', 'b', 'c'];
                let validated = PasswordValidators.allowedCharacterRule(allowedCharacter)(control);
                expect(validated).toBeUndefined();
            });
            it('should work for invalid password with one wrong char', () => {
                let control: FormControl = new FormControl('aaabbbcccd');
                let allowedCharacter: string[] = ['a', 'b', 'c'];
                let validated = PasswordValidators.allowedCharacterRule(allowedCharacter)(control);
                expect(validated).toEqual({ 'allowedCharacterRule': ['d'] });
            });

            it('should work for invalid password with multiple wrong char', () => {
                let control: FormControl = new FormControl('aaafb bbccc) d!');
                let allowedCharacter: string[] = ['a', 'b', 'c'];
                let validated = PasswordValidators.allowedCharacterRule(allowedCharacter)(control);
                expect(validated).toEqual({ 'allowedCharacterRule': ['f', ' ', ')', 'd', '!'] });
            });

        });

        describe('alphabeticalCharacterRule', () => {

            it('should work for empty control', () => {
                let control: FormControl = new FormControl('');
                let validated = PasswordValidators.alphabeticalCharacterRule(5)(control);
                expect(validated).toBeUndefined();
            });
            it('should work for valid password', () => {
                let control: FormControl = new FormControl('aAa345b!bdDb"c cc76');
                let validated = PasswordValidators.alphabeticalCharacterRule(5)(control);
                expect(validated).toBeUndefined();
            });

            it('should work for invalid password', () => {
                let control: FormControl = new FormControl('1234Abc!');
                let validated = PasswordValidators.alphabeticalCharacterRule(5)(control);
                expect(validated).toEqual({ 'alphabeticalCharacterRule': true });
            });

        });

        describe('digitCharacterRule', () => {

            it('should work for empty control', () => {
                let control: FormControl = new FormControl('');
                let validated = PasswordValidators.digitCharacterRule(5)(control);
                expect(validated).toBeUndefined();
            });
            it('should work for valid password', () => {
                let control: FormControl = new FormControl('aAa345b!bdDb"c cc76');
                let validated = PasswordValidators.digitCharacterRule(5)(control);
                expect(validated).toBeUndefined();
            });

            it('should work for invalid password', () => {
                let control: FormControl = new FormControl('1234Abc!');
                let validated = PasswordValidators.digitCharacterRule(5)(control);
                expect(validated).toEqual({ 'digitCharacterRule': true });
            });

        });

        describe('lowercaseCharacterRule', () => {

            it('should work for empty control', () => {
                let control: FormControl = new FormControl('');
                let validated = PasswordValidators.lowercaseCharacterRule(5)(control);
                expect(validated).toBeUndefined();
            });
            it('should work for valid password', () => {
                let control: FormControl = new FormControl('abcdeAACDEF!231');
                let validated = PasswordValidators.lowercaseCharacterRule(5)(control);
                expect(validated).toBeUndefined();
            });

            it('should work for invalid password', () => {
                let control: FormControl = new FormControl('1234abcADc!');
                let validated = PasswordValidators.lowercaseCharacterRule(5)(control);
                expect(validated).toEqual({ 'lowercaseCharacterRule': true });
            });

        });

        describe('uppercaseCharacterRule', () => {

            it('should work for empty control', () => {
                let control: FormControl = new FormControl('');
                let validated = PasswordValidators.uppercaseCharacterRule(5)(control);
                expect(validated).toBeUndefined();
            });

            it('should work for valid password', () => {
                let control: FormControl = new FormControl('abcdeAACDEF!231');
                let validated = PasswordValidators.uppercaseCharacterRule(5)(control);
                expect(validated).toBeUndefined();
            });
            it('should work for invalid password', () => {
                let control: FormControl = new FormControl('1234abcAbc!');
                let validated = PasswordValidators.uppercaseCharacterRule(5)(control);
                expect(validated).toEqual({ 'uppercaseCharacterRule': true });
            });

        });

        describe('mismatchedPasswords', () => {

            it('should work for empty control', () => {
                let password: FormControl = new FormControl('');
                let confirmPassword: FormControl = new FormControl('');
                let form = new FormGroup({
                    'newPassword': password,
                    'confirmPassword': confirmPassword
                }, PasswordValidators.mismatchedPasswords()
                );
                form.updateValueAndValidity();
                expect(confirmPassword.getError('mismatchedPasswords')).toBeNull();
            });

            it('should work for valid password', () => {
                let password: FormControl = new FormControl('testPassword');
                let confirmPassword: FormControl = new FormControl('testPassword');
                let form = new FormGroup({
                    'newPassword': password,
                    'confirmPassword': confirmPassword
                }, PasswordValidators.mismatchedPasswords()
                );
                form.updateValueAndValidity();
                expect(confirmPassword.getError('mismatchedPasswords')).toBeNull();
            });


            it('should work for override password', () => {
                let password: FormControl = new FormControl('testPassword');
                let confirmPassword: FormControl = new FormControl('testPassword');
                let form = new FormGroup({
                    'test': password,
                    'test2': confirmPassword
                }, PasswordValidators.mismatchedPasswords('test', 'test2')
                );
                form.updateValueAndValidity();
                expect(confirmPassword.getError('mismatchedPasswords')).toBeNull();
            });


            it('should work for override password', () => {
                let password: FormControl = new FormControl('testPassword');
                let confirmPassword: FormControl = new FormControl('testPassword2');
                let form = new FormGroup({
                    'test': password,
                    'test2': confirmPassword
                }, PasswordValidators.mismatchedPasswords('test', 'test2')
                );
                form.updateValueAndValidity();
                expect(confirmPassword.getError('mismatchedPasswords')).not.toBeUndefined();
            });


            it('should work for invalid password', () => {
                let password: FormControl = new FormControl('testPassword');
                let confirmPassword: FormControl = new FormControl('testPasswords');
                let form = new FormGroup({
                    'newPassword': password,
                    'confirmPassword': confirmPassword
                }, PasswordValidators.mismatchedPasswords()
                );
                form.updateValueAndValidity();
                expect(confirmPassword.getError('mismatchedPasswords')).not.toBeUndefined();
            });

        });


    });
}
