import { ReactiveFormDigitCharacterRuleComponent } from "./reactive-form/digit-character-rule/reactive-form-digit-character-rule.component";
import { ReactiveFormLowercaseCharacterRuleComponent } from "./reactive-form/lowercase-character-rule/reactive-form-lowercase-character-rule.component";
import { ReactiveFormAlphabeticalCharacterRuleComponent } from "./reactive-form/alphabetical-character-rule/reactive-form-alphabetical-character-rule.component";
import { ReactiveFormRepeatCharacterRegexRuleComponent } from "./reactive-form/repeat-character-regex-rule/reactive-form-repeat-character-regex-rule.component";
import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UtilModule } from "../../util/util.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ValidatorsModule } from "ngx-validators";
import { FormAlphabeticalCharacterRuleComponent } from "./form/alphabetical-character-rule/form-alphabetical-character-rule.component";
import { FormRepeatCharacterRegexRuleComponent } from "./form/repeat-character-regex-rule/form-repeat-character-regex-rule.component";
import { FormUppercaseCharacterRuleComponent } from "./form/uppercase-character-rule/form-uppercase-character-rule.component";
import { FormDigitCharacterRuleComponent } from "./form/digit-character-rule/form-digit-character-rule.component";
import { FormLowercaseCharacterRuleComponent } from "./form/lowercase-character-rule/form-lowercase-character-rule.component";
import { ReactiveFormUppercaseCharacterRuleComponent } from "./reactive-form/uppercase-character-rule/reactive-form-uppercase-character-rule.component";
import { ReactiveFormSpecialCharacterRuleComponent } from "./reactive-form/special-character-rule/reactive-form-special-character-rule.component";
import { ReactiveFormMismatchComponent } from "./reactive-form/mismatch/reactive-form-mismatch.component";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from "@angular/material/tabs";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatTooltipModule } from "@angular/material/tooltip";
import { Items } from "../../util/example-view/example-view.component";

const components = [
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
];

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
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
  declarations: components,
  exports: components,
})
export class PasswordModule {}

export const PasswordExamples: Items = {
  linkPrefix: "password/",
  name: "Password",
  api: 'import { ValidatorsModule } from "ngx-validators";',
  validators: [
    {
      name: "alphabeticalCharacterRule",
      reactiveComponent: ReactiveFormAlphabeticalCharacterRuleComponent,
      formComponent: FormAlphabeticalCharacterRuleComponent,
      reactiveformTS: require("!raw-loader!./reactive-form/alphabetical-character-rule/reactive-form-alphabetical-character-rule.component.ts")
        .default,
      reactiveformHTML: require("!raw-loader!./reactive-form/alphabetical-character-rule/reactive-form-alphabetical-character-rule.component.html")
        .default,
      formTS: require("!raw-loader!./form/alphabetical-character-rule/form-alphabetical-character-rule.component")
        .default,
      formHTML: require("!raw-loader!./form/alphabetical-character-rule/form-alphabetical-character-rule.component.html")
        .default,
    },
    {
      name: "digitCharacterRule",
      reactiveComponent: ReactiveFormDigitCharacterRuleComponent,
      formComponent: FormDigitCharacterRuleComponent,
      reactiveformTS: require("!raw-loader!./reactive-form/digit-character-rule/reactive-form-digit-character-rule.component")
        .default,
      reactiveformHTML: require("!raw-loader!./reactive-form/digit-character-rule/reactive-form-digit-character-rule.component.html")
        .default,
      formTS: require("!raw-loader!./form/digit-character-rule/form-digit-character-rule.component")
        .default,
      formHTML: require("!raw-loader!./form/digit-character-rule/form-digit-character-rule.component.html")
        .default,
    },
    {
      name: "lowercaseCharacterRule",
      reactiveComponent: ReactiveFormLowercaseCharacterRuleComponent,
      formComponent: FormLowercaseCharacterRuleComponent,
      reactiveformTS: require("!raw-loader!./reactive-form/lowercase-character-rule/reactive-form-lowercase-character-rule.component")
        .default,
      reactiveformHTML: require("!raw-loader!./reactive-form/lowercase-character-rule/reactive-form-lowercase-character-rule.component.html")
        .default,
      formTS: require("!raw-loader!./form/lowercase-character-rule/form-lowercase-character-rule.component")
        .default,
      formHTML: require("!raw-loader!./form/lowercase-character-rule/form-lowercase-character-rule.component.html")
        .default,
    },
    {
      name: "repeatCharacterRegexRule",
      reactiveComponent: ReactiveFormRepeatCharacterRegexRuleComponent,
      formComponent: FormRepeatCharacterRegexRuleComponent,
      reactiveformTS: require("!raw-loader!./reactive-form/repeat-character-regex-rule/reactive-form-repeat-character-regex-rule.component")
        .default,
      reactiveformHTML: require("!raw-loader!./reactive-form/repeat-character-regex-rule/reactive-form-repeat-character-regex-rule.component.html")
        .default,
      formTS: require("!raw-loader!./form/repeat-character-regex-rule/form-repeat-character-regex-rule.component")
        .default,
      formHTML: require("!raw-loader!./form/repeat-character-regex-rule/form-repeat-character-regex-rule.component.html")
        .default,
    },
    {
      name: "uppercaseCharacterRule",
      reactiveComponent: ReactiveFormUppercaseCharacterRuleComponent,
      formComponent: FormUppercaseCharacterRuleComponent,
      reactiveformTS: require("!raw-loader!./reactive-form/uppercase-character-rule/reactive-form-uppercase-character-rule.component")
        .default,
      reactiveformHTML: require("!raw-loader!./reactive-form/uppercase-character-rule/reactive-form-uppercase-character-rule.component.html")
        .default,
      formTS: require("!raw-loader!./form/uppercase-character-rule/form-uppercase-character-rule.component")
        .default,
      formHTML: require("!raw-loader!./form/uppercase-character-rule/form-uppercase-character-rule.component.html")
        .default,
    },
    {
      name: "specialCharacterRule",
      reactiveComponent: ReactiveFormSpecialCharacterRuleComponent,
      reactiveformTS: require("!raw-loader!./reactive-form/special-character-rule/reactive-form-special-character-rule.component")
        .default,
      reactiveformHTML: require("!raw-loader!./reactive-form/special-character-rule/reactive-form-special-character-rule.component.html")
        .default,
    },
    {
      name: "mismatch",
      reactiveComponent: ReactiveFormMismatchComponent,
      reactiveformTS: require("!raw-loader!./reactive-form/mismatch/reactive-form-mismatch.component")
        .default,
      reactiveformHTML: require("!raw-loader!./reactive-form/mismatch/reactive-form-mismatch.component.html")
        .default,
    },
  ],
};
