import { Items } from "./../../util/example-view/example-view.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UtilModule } from "../../util/util.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ReactiveFormEmailComponent } from "./reactive-form/email/reactive-form-email.component";

import { FormEmailComponent } from "./form/email/form-email.component";
import { ValidatorsModule } from "ngx-validators";
import { ReactiveFormEmailSuggestComponent } from "./reactive-form/suggest/reactive-form-email-suggest.component";
import { FormEmailSuggestComponent } from "./form/suggest/form-email-suggest.component";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from "@angular/material/tabs";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatTooltipModule } from "@angular/material/tooltip";

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
  declarations: [
    ReactiveFormEmailComponent,
    ReactiveFormEmailSuggestComponent,
    FormEmailComponent,
    FormEmailSuggestComponent,
  ],
  exports: [
    ReactiveFormEmailComponent,
    ReactiveFormEmailSuggestComponent,
    FormEmailComponent,
    FormEmailSuggestComponent,
  ],
})
export class EmailModule {}

export const EmailExamples: Items = {
  linkPrefix: "email/",
  name: "Email",
  api: 'import { ValidatorsModule } from "ngx-validators";',
  validators: [
    {
      name: "normal",
      formComponent: FormEmailComponent,
      reactiveComponent: ReactiveFormEmailComponent,
      reactiveformTS: require("!raw-loader!./reactive-form/email/reactive-form-email.component")
        .default,
      reactiveformHTML: require("!raw-loader!./reactive-form/email/reactive-form-email.component.html")
        .default,
      formTS: require("!raw-loader!./form/email/form-email.component").default,
      formHTML: require("!raw-loader!./form/email/form-email.component.html")
        .default,
      hint:
        '(follows the <a href="https://www.w3.org/TR/html5.html#valid-e-mail-address">HTML5</a> rules)',
    },
    {
      name: "suggest",
      formComponent: FormEmailSuggestComponent,
      reactiveComponent: ReactiveFormEmailSuggestComponent,
      reactiveformTS: require("!raw-loader!./reactive-form/suggest/reactive-form-email-suggest.component")
        .default,
      reactiveformHTML: require("!raw-loader!./reactive-form/suggest/reactive-form-email-suggest.component.html")
        .default,
      formTS: require("!raw-loader!./form/suggest/form-email-suggest.component")
        .default,
      formHTML: require("!raw-loader!./form/suggest/form-email-suggest.component.html")
        .default,
      hint:
        '(thanks to <a href="https://github.com/mailcheck/mailcheck">mailcheck</a>)',
    },
  ],
};
