import { AbstractControl, ValidatorFn } from "@angular/forms";
import { AbstractControlUtil } from "../abstract-control-util";

export class EqualToValidator {
  static equalTo(c1Name: string, c2Name: string): ValidatorFn {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const validator = (parent: AbstractControl): any => {
      const c1 = parent.get(c1Name);
      const c2 = parent.get(c2Name);

      if (c1.value === c2.value) {
        AbstractControlUtil.removeError(c2, "notEqualTo");
      } else {
        AbstractControlUtil.addError(c2, "notEqualTo", true);
      }
    };
    return validator;
  }
}
