import type { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { AbstractControlUtil } from './../abstract-control-util';
import type { EmailOptions } from './email-util';
import { EmailSuggestion } from './email-util';

export class EmailValidators {
  private static emailSuggestion: EmailSuggestion = new EmailSuggestion();

  public static simple(control: AbstractControl): ValidationErrors | null {
    if (AbstractControlUtil.isNotPresent(control)) {
      return null;
    }

    const pattern = /.+@.+\..+/i;
    if (pattern.test(control.value)) {
      return null;
    }
    return { simpleEmailRule: true };
  }

  // https://www.w3.org/TR/html5/forms.html#valid-e-mail-address
  public static normal(control: AbstractControl): ValidationErrors | null {
    if (AbstractControlUtil.isNotPresent(control)) {
      return null;
    }

    const pattern =
      // tslint:disable-next-line:max-line-length
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (pattern.test(control.value)) {
      return null;
    }
    return { normalEmailRule: true };
  }

  public static suggest(options?: EmailOptions): ValidatorFn {
    const validator = (control: AbstractControl): ValidationErrors | null => {
      if (AbstractControlUtil.isNotPresent(control)) {
        return null;
      }
      return this.emailSuggestion.suggest(control.value, options);
    };
    return validator;
  }
}
