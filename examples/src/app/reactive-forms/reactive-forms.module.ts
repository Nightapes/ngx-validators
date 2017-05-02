import { MdInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MdCardModule } from '@angular/material';
import { ReactiveFormsComponent } from './reactive-forms.component';
import { ReactiveFormCreditcardValidatorComponent } from './creditcard-validator/creditcard-validator.component';
import { ReactiveFormEmailValidatorComponent } from './email-validator/email-validator.component';
import { ReactiveFormPhoneValidatorComponent } from './phone-validator/phone-validator.component';
import { ReactiveFormPasswordValidatorComponent } from './password-validator/password-validator.component';
import { ReactiveFormUniversalValidatorComponent } from './universal-validator/universal-validator.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MdButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule
  ],
  declarations: [
    ReactiveFormUniversalValidatorComponent,
    ReactiveFormPasswordValidatorComponent,
    ReactiveFormPhoneValidatorComponent,
    ReactiveFormEmailValidatorComponent,
    ReactiveFormCreditcardValidatorComponent,
    ReactiveFormsComponent
  ],
  exports: [
    ReactiveFormUniversalValidatorComponent,
    ReactiveFormPasswordValidatorComponent,
    ReactiveFormPhoneValidatorComponent,
    ReactiveFormEmailValidatorComponent,
    ReactiveFormCreditcardValidatorComponent,
    ReactiveFormsComponent
  ]
})
export class ReactiveFormsExampleModule { }
