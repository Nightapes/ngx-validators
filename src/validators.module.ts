import { NgModule } from '@angular/core';

import { CreditCardValidator } from './creditcard/creditcard.directive';
import { EmailValidator } from './email/email.directive';
import { IsInRangealidator, IsNumberValidator, MaxValidator, MinValidator, WhiteSpaceValidator } from './universal/universal.directive';
import { PasswordValidator } from './password/password.directive';

@NgModule({
    declarations: [CreditCardValidator,
        EmailValidator,
        PasswordValidator,
        IsInRangealidator,
        IsNumberValidator,
        MaxValidator,
        MinValidator,
        WhiteSpaceValidator],
    exports: [CreditCardValidator,
        EmailValidator,
        PasswordValidator,
        IsInRangealidator,
        IsNumberValidator,
        MaxValidator,
        MinValidator,
        WhiteSpaceValidator]
})
export class ValidatorsModule {}