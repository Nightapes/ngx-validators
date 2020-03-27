import { Directive, Input, forwardRef, OnInit } from "@angular/core";
import {
  NG_VALIDATORS,
  Validator,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors
} from "@angular/forms";

import { PasswordValidators } from "./password-validators";

@Directive({
  selector:
    "[password][formControlName],[password][formControl],[password][ngModel]",
  providers: [
    {
      provide: NG_VALIDATORS,
      // tslint:disable-next-line:no-forward-ref
      useExisting: forwardRef(() => PasswordValidatorDirective),
      multi: true
    }
  ]
})
export class PasswordValidatorDirective implements Validator, OnInit {
  @Input() repeatCharacter = 4;
  @Input() alphabeticalCharacter = 1;
  @Input() digitCharacter = 1;
  @Input() lowercaseCharacter = 1;
  @Input() uppercaseCharacter = 1;

  private repeatCharacterValidator: ValidatorFn;
  private alphabeticalCharacterValidator: ValidatorFn;
  private digitCharacterValidator: ValidatorFn;
  private lowercaseCharacterValidator: ValidatorFn;
  private uppercaseCharacterValidator: ValidatorFn;

  ngOnInit() {
    this.repeatCharacterValidator = PasswordValidators.repeatCharacterRegexRule(
      this.repeatCharacter
    );
    this.alphabeticalCharacterValidator = PasswordValidators.alphabeticalCharacterRule(
      this.alphabeticalCharacter
    );
    this.digitCharacterValidator = PasswordValidators.digitCharacterRule(
      this.digitCharacter
    );
    this.lowercaseCharacterValidator = PasswordValidators.lowercaseCharacterRule(
      this.lowercaseCharacter
    );
    this.uppercaseCharacterValidator = PasswordValidators.uppercaseCharacterRule(
      this.uppercaseCharacter
    );
  }

  validate(c: AbstractControl): ValidationErrors {
    const compose: ValidatorFn = Validators.compose([
      this.repeatCharacterValidator,
      this.digitCharacterValidator,
      this.alphabeticalCharacterValidator,
      this.lowercaseCharacterValidator,
      this.uppercaseCharacterValidator
    ]);
    return compose(c);
  }
}
