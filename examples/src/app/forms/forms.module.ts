import { FormPasswordValidatorComponent } from './password-validator/password-validator.component';
import { FormUniversalValidatorComponent } from './universal-validator/universal-validator.component';
import { FormPhoneValidatorComponent } from './phone-validator/phone-validator.component';
import { FormEmailValidatorComponent } from './email-validator/email-validator.component';
import { FormCreditcardValidatorComponent } from './creditcard-validator/creditcard-validator.component';
import { ValidatorsModule } from 'ngx-validators';
import { MdCardModule, MdInputModule } from '@angular/material';
import { FormsComponent } from './forms.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ValidatorsModule,
    MdCardModule,
    MdInputModule
  ],
  declarations: [
    FormsComponent,
    FormUniversalValidatorComponent,
    FormPhoneValidatorComponent,
    FormEmailValidatorComponent,
    FormCreditcardValidatorComponent,
    FormPasswordValidatorComponent
  ]
})
export class FormsExampleModule { }
