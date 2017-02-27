// validators
export { PasswordValidators } from './src/password/password-validators';
export { EmailValidators } from './src/email/email-validators';
export { UniversalValidators } from './src/universal/universal-validators';
export { CreditCardValidators } from './src/creditcard/creditcard-validators';
export { PhoneValidators } from './src/phone/phone-validators';

//Directive
export { PasswordValidatorDirective } from './src/password/password.directive';
export { EmailValidatorDirective } from './src/email/email.directive';
export {
    IsInRangeValidatorDirective, IsNumberValidatorDirective, MaxValidatorDirective,
    MinValidatorDirective, WhiteSpaceValidatorDirective
} from './src/universal/universal.directive';
export { CreditCardValidatorDirective } from './src/creditcard/creditcard.directive';
export { PhoneValidatorDirective, CountryCodeValidatorDirective, PossiblePhoneValidatorDirective } from './src/phone/phone.directive';

//Module
export { ValidatorsModule } from './src/validators.module';
