import { Directive, Input, forwardRef, OnInit, SimpleChanges, OnChanges } from "@angular/core";
import { NG_VALIDATORS, Validator, Validators, ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

import { PasswordValidators } from "./password-validators";

@Directive({
  selector: "[password][formControlName],[password][formControl],[password][ngModel]",
  providers: [
    {
      provide: NG_VALIDATORS,
      // tslint:disable-next-line:no-forward-ref
      useExisting: forwardRef(() => PasswordValidatorDirective),
      multi: true,
    },
  ],
})
export class PasswordValidatorDirective implements Validator, OnInit, OnChanges {
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
  private onChange: () => void;

  ngOnInit() {
    this.repeatCharacterValidator = PasswordValidators.repeatCharacterRegexRule(this.repeatCharacter);
    this.alphabeticalCharacterValidator = PasswordValidators.alphabeticalCharacterRule(this.alphabeticalCharacter);
    this.digitCharacterValidator = PasswordValidators.digitCharacterRule(this.digitCharacter);
    this.lowercaseCharacterValidator = PasswordValidators.lowercaseCharacterRule(this.lowercaseCharacter);
    this.uppercaseCharacterValidator = PasswordValidators.uppercaseCharacterRule(this.uppercaseCharacter);
  }

  ngOnChanges(changes: SimpleChanges): void {
    let inputChanged = false;
    if (changes.repeatCharacter) {
      this.repeatCharacterValidator = PasswordValidators.repeatCharacterRegexRule(changes.repeatCharacter.currentValue);
      inputChanged = changes.repeatCharacter.isFirstChange() ? false : true;
    }

    if (changes.alphabeticalCharacter) {
      this.alphabeticalCharacterValidator = PasswordValidators.alphabeticalCharacterRule(
        changes.alphabeticalCharacter.currentValue
      );
      inputChanged = changes.alphabeticalCharacter.isFirstChange() ? false : true;
    }

    if (changes.digitCharacter) {
      this.digitCharacterValidator = PasswordValidators.digitCharacterRule(changes.digitCharacter.currentValue);
      inputChanged = changes.digitCharacter.isFirstChange() ? false : true;
    }

    if (changes.lowercaseCharacter) {
      this.lowercaseCharacterValidator = PasswordValidators.lowercaseCharacterRule(
        changes.lowercaseCharacter.currentValue
      );
      inputChanged = changes.lowercaseCharacter.isFirstChange() ? false : true;
    }

    if (changes.uppercaseCharacter) {
      this.uppercaseCharacterValidator = PasswordValidators.uppercaseCharacterRule(
        changes.uppercaseCharacter.currentValue
      );
      inputChanged = changes.uppercaseCharacter.isFirstChange() ? false : true;
    }

    if (inputChanged) {
      this.onChange();
    }
  }

  validate(c: AbstractControl): ValidationErrors {
    const compose: ValidatorFn = Validators.compose([
      this.repeatCharacterValidator,
      this.digitCharacterValidator,
      this.alphabeticalCharacterValidator,
      this.lowercaseCharacterValidator,
      this.uppercaseCharacterValidator,
    ]);
    return compose(c);
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onChange = fn;
  }
}
