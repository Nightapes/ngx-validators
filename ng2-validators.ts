// validators
export * from './src/password/password-validators';
export * from './src/email/email-validators';
export * from './src/universal/universal-validators';
export * from './src/creditcard/creditcard-validators';

//Directive
export * from './src/password/password.directive';
export * from './src/email/email.directive';
export * from './src/universal/universal.directive';
export * from './src/creditcard/creditcard.directive';


import { NgModule } from '@angular/core';

import { CreditCardValidator } from './src/creditcard/creditcard.directive';
import { EmailValidator } from './src/email/email.directive';
import { IsInRangealidator, IsNumberValidator, MaxValidator, MinValidator, WhiteSpaceValidator } from './src/universal/universal.directive';
import { PasswordValidator } from './src/password/password.directive';

const VALIDATORS_DIRECTIVES = [
    CreditCardValidator,
    EmailValidator,
    PasswordValidator,
    IsInRangealidator,
    IsNumberValidator,
    MaxValidator,
    MinValidator,
    WhiteSpaceValidator
];

@NgModule({
    declarations: [VALIDATORS_DIRECTIVES],
    exports: [VALIDATORS_DIRECTIVES]
})
export class ValidatorsModule {
}