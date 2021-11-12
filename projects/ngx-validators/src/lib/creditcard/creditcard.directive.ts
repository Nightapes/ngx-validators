import type { OnInit, SimpleChanges, OnChanges } from "@angular/core";
import { Directive, Input, forwardRef } from "@angular/core";
import type { Validator, ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";
import { NG_VALIDATORS } from "@angular/forms";

import { CreditCardValidators } from "./creditcard-validators";

@Directive({
  selector: "[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]",
  providers: [
    {
      provide: NG_VALIDATORS,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => CreditCardValidatorDirective),
      multi: true,
    },
  ],
})
export class CreditCardValidatorDirective implements Validator, OnInit, OnChanges {
  @Input() creditCard = "all";

  private validator?: ValidatorFn;
  private onChange?: () => void;

  ngOnInit() {
    this.setCreditcardValidator(this.creditCard);
  }

  setCreditcardValidator(type: string) {
    switch (type) {
      case "all":
        this.validator = CreditCardValidators.isCreditCard;
        break;
      case "americanExpress":
        this.validator = CreditCardValidators.americanExpress;
        break;
      case "dinersclub":
        this.validator = CreditCardValidators.dinersclub;
        break;
      case "discover":
        this.validator = CreditCardValidators.discover;
        break;
      case "jcb":
        this.validator = CreditCardValidators.jcb;
        break;
      case "maestro":
        this.validator = CreditCardValidators.maestro;
        break;
      case "mastercard":
        this.validator = CreditCardValidators.mastercard;
        break;
      case "visa":
        this.validator = CreditCardValidators.visa;
        break;
      default:
        this.validator = CreditCardValidators.isCreditCard;
        break;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["creditCard"] && !changes["creditCard"].isFirstChange()) {
      this.setCreditcardValidator(changes["creditCard"].currentValue);
      if (this.onChange) {
        this.onChange();
      }
    }
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this.validator ? this.validator(c) : null;
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onChange = fn;
  }
}
