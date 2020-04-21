import { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";
import { AbstractControlUtil } from "./../abstract-control-util";

// tslint:disable-next-line:variable-name
export class PasswordValidators {
  public static repeatCharacterRegexRule(repeatCount: number) {
    const validator = (control: AbstractControl): ValidationErrors => {
      if (AbstractControlUtil.isNotPresent(control)) return undefined;
      const repeatDec = repeatCount - 1;
      const pattern = "([^\\x00-\\x1F])\\1{" + repeatDec + "}";
      if (control.value !== "" && new RegExp(pattern).test(control.value)) {
        return { repeatCharacterRegexRule: { repeatCount } };
      }
      return undefined;
    };
    return validator;
  }

  public static allowedCharacterRule(allowedChars: string[]): ValidatorFn {
    const validator = (control: AbstractControl): ValidationErrors => {
      if (AbstractControlUtil.isNotPresent(control)) return undefined;
      const value: string = control.value;
      let valid = true;
      const invalidChars: string[] = [];

      for (const char of value) {
        if (allowedChars.indexOf(char) === -1) {
          valid = false;
          if (invalidChars.indexOf(char) === -1) {
            invalidChars.push(char);
          }
        }
      }
      if (!valid) {
        return {
          allowedCharacterRule: {
            invalidChars,
            allowedChars,
          },
        };
      }
      return undefined;
    };
    return validator;
  }

  public static alphabeticalCharacterRule(amount: number): ValidatorFn {
    const validator = (control: AbstractControl): ValidationErrors => {
      if (AbstractControlUtil.isNotPresent(control)) return undefined;
      const value: string = control.value;
      if (value.length === 0) {
        return undefined;
      }
      const pattern = /[^A-Za-z]+/g;
      const stripped = value.replace(pattern, "");
      if (stripped.length < amount) {
        return {
          alphabeticalCharacterRule: {
            required: amount,
            actual: stripped.length,
          },
        };
      }
      return undefined;
    };
    return validator;
  }

  public static digitCharacterRule(amount: number): ValidatorFn {
    const validator = (control: AbstractControl): ValidationErrors => {
      if (AbstractControlUtil.isNotPresent(control)) return undefined;
      const value: string = control.value;
      if (value.length === 0) {
        return undefined;
      }
      const pattern = /[^0-9\.]+/g;
      const stripped = value.replace(pattern, "");
      if (stripped.length < amount) {
        return {
          digitCharacterRule: { required: amount, actual: stripped.length },
        };
      }
      return undefined;
    };
    return validator;
  }

  public static lowercaseCharacterRule(amount: number): ValidatorFn {
    const validator = (control: AbstractControl): ValidationErrors => {
      if (AbstractControlUtil.isNotPresent(control)) return undefined;
      const value: string = control.value;
      if (value.length === 0) {
        return undefined;
      }
      const pattern = /[^a-z]+/g;
      const stripped = value.replace(pattern, "");
      if (stripped.length < amount) {
        return {
          lowercaseCharacterRule: { required: amount, actual: stripped.length },
        };
      }
      return undefined;
    };
    return validator;
  }

  public static uppercaseCharacterRule(amount: number): ValidatorFn {
    const validator = (control: AbstractControl): ValidationErrors => {
      if (AbstractControlUtil.isNotPresent(control)) return undefined;
      const value: string = control.value;
      if (value.length === 0) {
        return undefined;
      }
      const pattern = /[^A-Z]+/g;
      const stripped = value.replace(pattern, "");
      if (stripped.length < amount) {
        return {
          uppercaseCharacterRule: { required: amount, actual: stripped.length },
        };
      }
      return undefined;
    };
    return validator;
  }

  public static specialCharacterRule(amount: number): ValidatorFn {
    const validator = (control: AbstractControl): ValidationErrors => {
      if (AbstractControlUtil.isNotPresent(control)) return undefined;
      const value: string = control.value;
      if (value.length === 0) {
        return undefined;
      }
      const pattern = /[\w\s]+/g;
      const stripped = value.replace(pattern, "");
      if (stripped.length < amount) {
        return {
          specialCharacterRule: { required: amount, actual: stripped.length },
        };
      }
      return undefined;
    };
    return validator;
  }

  public static mismatchedPasswords(passwordControlName?: string, confirmPasswordControlName?: string): ValidatorFn {
    const validator = (group: AbstractControl): ValidationErrors => {
      const newPasswordValue = group.get(passwordControlName ? passwordControlName : "newPassword").value;
      const newPasswordConfirmValue = group.get(
        confirmPasswordControlName ? confirmPasswordControlName : "confirmPassword"
      ).value;
      if (newPasswordValue !== newPasswordConfirmValue) {
        AbstractControlUtil.addError(
          group.get(confirmPasswordControlName ? confirmPasswordControlName : "confirmPassword"),
          "mismatchedPasswords",
          true
        );

        return { mismatchedPasswords: true };
      } else {
        AbstractControlUtil.removeError(
          group.get(confirmPasswordControlName ? confirmPasswordControlName : "confirmPassword"),
          "mismatchedPasswords"
        );
      }
      return undefined;
    };
    return validator;
  }
}
