import { NgModule } from "@angular/core";

import {
  PhoneValidatorDirective,
  PossiblePhoneValidatorDirective,
  CountryCodeValidatorDirective,
} from "./phone/phone.directive";

@NgModule({
  declarations: [
    PhoneValidatorDirective,
    PossiblePhoneValidatorDirective,
    CountryCodeValidatorDirective,
  ],
  exports: [
    PhoneValidatorDirective,
    PossiblePhoneValidatorDirective,
    CountryCodeValidatorDirective,
  ],
})
export class PhoneValidatorsModule {}
