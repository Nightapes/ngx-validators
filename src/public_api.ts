// validators
export { PasswordValidators } from './components/password/password-validators';
export { EmailValidators } from './components/email/email-validators';
export { UniversalValidators } from './components/universal/universal-validators';
export { CreditCardValidators } from './components/creditcard/creditcard-validators';
export { PhoneValidators } from './components/phone/phone-validators';

//Directive
export { PasswordValidatorDirective } from './components/password/password.directive';
export { EmailValidatorDirective } from './components/email/email.directive';
export {
    IsInRangeValidatorDirective, IsNumberValidatorDirective, MaxValidatorDirective,
    MinValidatorDirective, WhiteSpaceValidatorDirective, EmptyStringValidatorDirective
} from './components/universal/universal.directive';
export { CreditCardValidatorDirective } from './components/creditcard/creditcard.directive';
export { PhoneValidatorDirective, CountryCodeValidatorDirective, PossiblePhoneValidatorDirective } from './components/phone/phone.directive';

//Module
export { ValidatorsModule } from './components/validators.module';
