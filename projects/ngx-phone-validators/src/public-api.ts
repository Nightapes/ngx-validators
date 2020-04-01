/*
 * Public API Surface of ngx-phone-validators
 */

// validators
export { PhoneValidators } from "./lib/phone/phone-validators";

//Directive
export {
  PhoneValidatorDirective,
  CountryCodeValidatorDirective,
  PossiblePhoneValidatorDirective,
} from "./lib/phone/phone.directive";

//Module
export * from "./lib/ngx-phone-validators.module";
