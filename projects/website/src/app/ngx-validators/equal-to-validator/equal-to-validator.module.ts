import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormEqualToComponent } from "./form/equal-to/form-equal-to.component";
import { UtilModule } from "../../util/util.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ValidatorsModule } from "ngx-validators";
import { ReactiveFormEqualToComponent } from "./reactive-form/equal-to/reactive-form-equal-to.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatOptionModule } from "@angular/material/core";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { Items } from "../../util/example-view/example-view.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UtilModule,
    ValidatorsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule,
    MatButtonModule,
  ],
  declarations: [FormEqualToComponent, ReactiveFormEqualToComponent],
  exports: [FormEqualToComponent, ReactiveFormEqualToComponent],
})
export class EqualToValidatorModule {}

export const EqualToExamples: Items = {
  linkPrefix: "equal-to/",
  name: "Equal To",
  api: 'import { ValidatorsModule } from "ngx-validators";',
  validators: [
    {
      name: "normal",
      reactiveComponent: ReactiveFormEqualToComponent,
      formComponent: FormEqualToComponent,
      reactiveformTS: require("!raw-loader!./reactive-form/equal-to/reactive-form-equal-to.component")
        .default,
      reactiveformHTML: require("!raw-loader!./reactive-form/equal-to/reactive-form-equal-to.component.html")
        .default,
      formTS: require("!raw-loader!./form/equal-to/form-equal-to.component")
        .default,
      formHTML: require("!raw-loader!./form/equal-to/form-equal-to.component.html")
        .default,
    },
  ],
};
