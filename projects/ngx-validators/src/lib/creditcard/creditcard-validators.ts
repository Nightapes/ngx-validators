import type { AbstractControl, ValidationErrors } from "@angular/forms";
import { AbstractControlUtil } from "./../abstract-control-util";

const visaRegex = "^(?:4[0-9]{12})(?:[0-9]{3})?$";
const americanExpressRegex = "^(?:3[47][0-9]{13})$";
const maestroRegex = "^(?:(?:5[0678]\\d\\d|6304|6390|67\\d\\d)\\d{8,15})$";
const jcbRegex = "^(?:(?:2131|1800|35\\d{3})\\d{11})$";
const discoverRegex = "^(?:6(?:011|5[0-9]{2})(?:[0-9]{12}))$";
const dinersclubRegex = "^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$";
const mastercardRegex = "^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$";

export class CreditCardValidators {
  public static isCreditCard(control: AbstractControl): ValidationErrors | null {
    if (AbstractControlUtil.isNotPresent(control)) return null;
    if (
      new RegExp(
        americanExpressRegex +
          "|" +
          visaRegex +
          "|" +
          maestroRegex +
          "|" +
          jcbRegex +
          "|" +
          discoverRegex +
          "|" +
          mastercardRegex +
          "|" +
          dinersclubRegex
      ).test(control.value)
    ) {
      return null;
    }
    return { creditcard: true };
  }

  public static americanExpress(control: AbstractControl): ValidationErrors | null {
    if (AbstractControlUtil.isNotPresent(control)) return null;
    if (new RegExp(americanExpressRegex).test(control.value)) {
      return null;
    }
    return { americanExpress: true };
  }

  public static dinersclub(control: AbstractControl): ValidationErrors | null {
    if (AbstractControlUtil.isNotPresent(control)) return null;
    if (new RegExp(dinersclubRegex).test(control.value)) {
      return null;
    }
    return { dinersclub: true };
  }

  public static discover(control: AbstractControl): ValidationErrors | null {
    if (AbstractControlUtil.isNotPresent(control)) return null;
    if (new RegExp(discoverRegex).test(control.value)) {
      return null;
    }
    return { discover: true };
  }
  public static jcb(control: AbstractControl): ValidationErrors | null {
    if (AbstractControlUtil.isNotPresent(control)) return null;
    if (new RegExp(jcbRegex).test(control.value)) {
      return null;
    }
    return { jcb: true };
  }
  public static maestro(control: AbstractControl): ValidationErrors | null {
    if (AbstractControlUtil.isNotPresent(control)) return null;
    if (new RegExp(maestroRegex).test(control.value)) {
      return null;
    }
    return { maestro: true };
  }

  public static mastercard(control: AbstractControl): ValidationErrors | null {
    if (AbstractControlUtil.isNotPresent(control)) return null;
    if (new RegExp(mastercardRegex).test(control.value)) {
      return null;
    }
    return { mastercard: true };
  }

  public static visa(control: AbstractControl): ValidationErrors | null {
    if (AbstractControlUtil.isNotPresent(control)) return null;
    if (new RegExp(visaRegex).test(control.value)) {
      return null;
    }
    return { visa: true };
  }
}
