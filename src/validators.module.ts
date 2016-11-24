import { NgModule } from '@angular/core';

import { CreditCardValidatorDirective } from './creditcard/creditcard.directive';
import { EmailValidatorDirective } from './email/email.directive';
import {
    IsInRangeValidatorDirective, IsNumberValidatorDirective,
    MaxValidatorDirective, MinValidatorDirective, WhiteSpaceValidatorDirective
} from './universal/universal.directive';
import { PasswordValidatorDirective } from './password/password.directive';
import { PhoneValidatorDirective, PossiblePhoneValidatorDirective, CountryCodeValidatorDirective } from './phone/phone.directive';

@NgModule({
    declarations: [CreditCardValidatorDirective,
        EmailValidatorDirective,
        PasswordValidatorDirective,
        IsInRangeValidatorDirective,
        IsNumberValidatorDirective,
        MaxValidatorDirective,
        MinValidatorDirective,
        WhiteSpaceValidatorDirective,
        PhoneValidatorDirective,
        PossiblePhoneValidatorDirective,
        CountryCodeValidatorDirective],
    exports: [CreditCardValidatorDirective,
        EmailValidatorDirective,
        PasswordValidatorDirective,
        IsInRangeValidatorDirective,
        IsNumberValidatorDirective,
        MaxValidatorDirective,
        MinValidatorDirective,
        WhiteSpaceValidatorDirective,
        PhoneValidatorDirective,
        PossiblePhoneValidatorDirective,
        CountryCodeValidatorDirective]
})
export class ValidatorsModule { }
