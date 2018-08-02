import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';
import { ReactiveFormsComponent } from './reactive-forms.component';
import { ReactiveFormCreditcardValidatorComponent } from './creditcard-validator/creditcard-validator.component';
import { ReactiveFormEmailValidatorComponent } from './email-validator/email-validator.component';
import { ReactiveFormPasswordValidatorComponent } from './password-validator/password-validator.component';
import { ReactiveFormUniversalValidatorComponent } from './universal-validator/universal-validator.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    ReactiveFormUniversalValidatorComponent,
    ReactiveFormPasswordValidatorComponent,
    ReactiveFormEmailValidatorComponent,
    ReactiveFormCreditcardValidatorComponent,
    ReactiveFormsComponent
  ],
  exports: [
    ReactiveFormUniversalValidatorComponent,
    ReactiveFormPasswordValidatorComponent,
    ReactiveFormEmailValidatorComponent,
    ReactiveFormCreditcardValidatorComponent,
    ReactiveFormsComponent
  ]
})
export class ReactiveFormsExampleModule { }
