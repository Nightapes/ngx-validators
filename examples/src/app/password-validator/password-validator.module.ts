import { ReactiveFormDigitCharacterRuleComponent } from "./reactive-form/digit-character-rule/reactive-form-digit-character-rule.component";
import { ReactiveFormLowercaseCharacterRuleComponent } from "./reactive-form/lowercase-character-rule/reactive-form-lowercase-character-rule.component";
import { ReactiveFormAlphabeticalCharacterRuleComponent } from "./reactive-form/alphabetical-character-rule/reactive-form-alphabetical-character-rule.component";
import { ReactiveFormRepeatCharacterRegexRuleComponent } from "./reactive-form/repeat-character-regex-rule/reactive-form-repeat-character-regex-rule.component";
import {
  MatCardModule,
  MatListModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatInputModule,
  MatSelectModule,
} from "@angular/material";
import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule, MatTabsModule } from "@angular/material";
import { Routes, RouterModule } from "@angular/router";
import { UtilModule } from "../util/util.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ValidatorsModule } from "ngx-validators";
import { PasswordValidatorComponent } from "./password-validator.component";
import { FormAlphabeticalCharacterRuleComponent } from "./form/alphabetical-character-rule/form-alphabetical-character-rule.component";
import { FormRepeatCharacterRegexRuleComponent } from "./form/repeat-character-regex-rule/form-repeat-character-regex-rule.component";
import { FormUppercaseCharacterRuleComponent } from "./form/uppercase-character-rule/form-uppercase-character-rule.component";
import { FormDigitCharacterRuleComponent } from "app/password-validator/form/digit-character-rule/form-digit-character-rule.component";
import { FormLowercaseCharacterRuleComponent } from "app/password-validator/form/lowercase-character-rule/form-lowercase-character-rule.component";
import { ReactiveFormUppercaseCharacterRuleComponent } from "./reactive-form/uppercase-character-rule/reactive-form-uppercase-character-rule.component";
import { ReactiveFormSpecialCharacterRuleComponent } from "./reactive-form/special-character-rule/reactive-form-special-character-rule.component";
import { ReactiveFormMismatchComponent } from "./reactive-form/mismatch/reactive-form-mismatch.component";

const routes: Routes = [
  {
    path: "password",
    component: PasswordValidatorComponent,
  },
  {
    path: "password/:id",
    component: PasswordValidatorComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTooltipModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    UtilModule,
    ValidatorsModule,
  ],
  exports: [RouterModule],
  declarations: [
    ReactiveFormRepeatCharacterRegexRuleComponent,
    ReactiveFormAlphabeticalCharacterRuleComponent,
    ReactiveFormLowercaseCharacterRuleComponent,
    ReactiveFormUppercaseCharacterRuleComponent,
    ReactiveFormSpecialCharacterRuleComponent,
    ReactiveFormDigitCharacterRuleComponent,
    ReactiveFormRepeatCharacterRegexRuleComponent,
    ReactiveFormMismatchComponent,
    FormAlphabeticalCharacterRuleComponent,
    FormRepeatCharacterRegexRuleComponent,
    FormDigitCharacterRuleComponent,
    FormLowercaseCharacterRuleComponent,
    FormUppercaseCharacterRuleComponent,
    PasswordValidatorComponent,
  ],
})
export class PasswordModule {}
