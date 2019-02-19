import { FormControl, FormGroup } from '@angular/forms';
import { EqualToValidator } from './equal-to-validator';

describe('EqualTo Validator Test', function () {

  describe('equalTo', () => {

    it('should not show error when both values are empty', () => {
      let password: FormControl = new FormControl('');
      let confirmPassword: FormControl = new FormControl('');
      let form = new FormGroup({
          'newPassword': password,
          'confirmPassword': confirmPassword
        }, EqualToValidator.equalTo('newPassword', 'confirmPassword')
      );
      form.updateValueAndValidity();
      expect(confirmPassword.getError('notEqualTo')).toBeNull();
      expect(confirmPassword.hasError('notEqualTo')).toBe(false);
    });

    it('should not show error when values are equal', () => {
      let password: FormControl = new FormControl('testPassword');
      let confirmPassword: FormControl = new FormControl('testPassword');
      let form = new FormGroup({
          'newPassword': password,
          'confirmPassword': confirmPassword
        }, EqualToValidator.equalTo('newPassword', 'confirmPassword')
      );
      form.updateValueAndValidity();
      expect(confirmPassword.getError('notEqualTo')).toBeNull();
      expect(confirmPassword.hasError('notEqualTo')).toBe(false);
    });

    it('should get error when values are different', () => {
      let password: FormControl = new FormControl('testPassword');
      let confirmPassword: FormControl = new FormControl('testPassword2');
      let form = new FormGroup({
          'newPassword': password,
          'confirmPassword': confirmPassword
        }, EqualToValidator.equalTo('newPassword', 'confirmPassword')
      );
      form.updateValueAndValidity();
      expect(confirmPassword.getError('notEqualTo')).toBe(true);
      expect(confirmPassword.hasError('notEqualTo')).toBe(true);
    });
  });

});
