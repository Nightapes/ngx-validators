import type { AbstractControl, ValidatorFn, ValidationErrors } from "@angular/forms";
import { AbstractControlUtil } from "../abstract-control-util";

export class UniversalValidators {
  public static noWhitespace(control: AbstractControl): ValidationErrors | null {
    if (AbstractControlUtil.isNotPresent(control)) return null;
    const pattern = "\\s";
    if (new RegExp(pattern).test(control.value)) {
      return { noWhitespaceRequired: true };
    }
    return null;
  }

  public static noEmptyString(control: AbstractControl): ValidationErrors | null {
    if (AbstractControlUtil.isNotPresent(control)) return null;
    if (control.value.trim().length === 0) {
      return { noEmptyString: true };
    }
    return null;
  }

  public static isNumber(control: AbstractControl): ValidationErrors | null {
    if (AbstractControlUtil.isNotPresent(control)) return null;
    if (isNaN(control.value)) {
      return { numberRequired: true };
    }
    return null;
  }

  public static isInRange(minValue: number, maxValue: number): ValidatorFn {
    const validator = (control: AbstractControl): ValidationErrors | null => {
      if (AbstractControlUtil.isNotPresent(control)) return null;
      if (isNaN(control.value)) {
        return { numberRequired: true };
      }
      if (+control.value < minValue) {
        return {
          rangeValueToSmall: {
            requiredMinValue: minValue,
            requiredMaxValue: maxValue,
            actual: control.value,
          },
        };
      }

      if (+control.value > maxValue) {
        return {
          rangeValueToBig: {
            requiredMinValue: minValue,
            requiredMaxValue: maxValue,
            actual: control.value,
          },
        };
      } else {
        return null;
      }
    };
    return validator;
  }

  public static minLength(minLength: number) {
    const validator = (control: AbstractControl): ValidationErrors | null => {
      if (AbstractControlUtil.isNotPresent(control)) return null;
      const value: string = control.value;
      if (value.length >= minLength) {
        return null;
      }
      return {
        minLength: { requiredMinLength: minLength, actualLength: value.length },
      };
    };
    return validator;
  }

  public static maxLength(maxLength: number) {
    const validator = (control: AbstractControl): ValidationErrors | null => {
      if (AbstractControlUtil.isNotPresent(control)) return null;
      const value: string = control.value;
      if (maxLength >= value.length) {
        return null;
      }
      return {
        maxLength: { requiredMaxLength: maxLength, actualLength: value.length },
      };
    };
    return validator;
  }

  public static min(min: number) {
    const validator = (control: AbstractControl): ValidationErrors | null => {
      if (AbstractControlUtil.isNotPresent(control)) return null;
      const value: string = control.value;
      if (isNaN(control.value)) {
        return { numberRequired: true };
      }
      if (+value >= min) {
        return null;
      }
      return { min: { required: min, actual: control.value } };
    };
    return validator;
  }

  public static max(max: number) {
    const validator = (control: AbstractControl): ValidationErrors | null => {
      if (AbstractControlUtil.isNotPresent(control)) return null;
      const value: string = control.value;
      if (isNaN(control.value)) {
        return { numberRequired: true };
      }
      if (max >= +value) {
        return null;
      }
      return { max: { required: max, actual: control.value } };
    };
    return validator;
  }

  public static minDate(minDate: Date) {
    const validator = (control: AbstractControl): ValidationErrors | null => {
      if (AbstractControlUtil.isNotPresent(control)) return null;
      const date: Date = new Date(control.value);
      if (isNaN(date.getTime())) {
        return { dateRequired: true };
      }
      if (date.getTime() >= minDate.getTime()) {
        return null;
      }
      return { minDate: { required: minDate, actual: date } };
    };
    return validator;
  }

  public static maxDate(minDate: Date) {
    const validator = (control: AbstractControl): ValidationErrors | null => {
      if (AbstractControlUtil.isNotPresent(control)) return null;
      const date: Date = new Date(control.value);
      if (isNaN(date.getTime())) {
        return { dateRequired: true };
      }
      if (date.getTime() <= minDate.getTime()) {
        return null;
      }
      return { maxDate: { required: minDate, actual: date } };
    };
    return validator;
  }

  /**
   * @description
   * Validator that requires the control's type to equal to the provided type.
   *
   * @usageNotes
   *
   * ### Validate against a string type
   *
   * ```typescript
   * const control = new FormControl(2, Validators.type('string'));
   *
   * console.log(control.errors); // {type: {required: 'string', actual: 'number'}}
   * ```
   *
   * @returns A validator function that returns an error map with the
   * `type` property if the validation check fails, otherwise `null`.
   *
   */
  public static type(type: "number" | "string" | "object" | "boolean") {
    const validator = (control: AbstractControl): ValidationErrors | null => {
      if (AbstractControlUtil.isNotPresent(control)) return null;
      const typeOfControl = typeof control.value;
      return typeOfControl !== type ? { type: { required: type, actual: typeOfControl } } : null;
    };
    return validator;
  }
}
