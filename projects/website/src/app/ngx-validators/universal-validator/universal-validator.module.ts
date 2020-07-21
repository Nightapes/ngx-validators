import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { UtilModule } from "../../util/util.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ReactiveFormWhitespaceComponent } from "./reactive-form/no-whitespace/reactive-form-no-whitespace.component";
import { ReactiveFormNoEmptyStringComponent } from "./reactive-form/no-empty-string/reactive-form-no-empty-string.component";
import { ReactiveFormMinLengthComponent } from "./reactive-form/min-length/reactive-form-min-length.component";
import { ReactiveFormMaxLengthComponent } from "./reactive-form/max-length/reactive-form-max-length.component";
import { ReactiveFormMinComponent } from "./reactive-form/min/reactive-form-min.component";
import { ReactiveFormMaxComponent } from "./reactive-form/max/reactive-form-max.component";
import { ReactiveFormIsInRangeComponent } from "./reactive-form/is-in-range/reactive-form-is-in-range.component";
import { ReactiveFormIsNumberComponent } from "./reactive-form/is-number/reactive-form-is-number.component";

import { FormWhitespaceComponent } from "./form/no-whitespace/form-no-whitespace.component";
import { FormMinComponent } from "./form/min/form-min.component";
import { FormMaxComponent } from "./form/max/form-max.component";
import { FormIsInRangeComponent } from "./form/is-in-range/form-is-in-range.component";
import { FormIsNumberComponent } from "./form/is-number/form-is-number.component";
import { ValidatorsModule } from "ngx-validators";
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
  ReactiveFormWhitespaceComponent,
  ReactiveFormNoEmptyStringComponent,
  ReactiveFormMinLengthComponent,
  ReactiveFormMaxLengthComponent,
  ReactiveFormMaxComponent,
  ReactiveFormMinComponent,
  ReactiveFormIsInRangeComponent,
  ReactiveFormIsNumberComponent,
  FormWhitespaceComponent,
  FormMinComponent,
  FormMaxComponent,
  FormIsInRangeComponent,
  FormIsNumberComponent,
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
  exports: components,
  declarations: components,
})
export class UniversalModule {}

export const UniversalExamples: Items = {
  linkPrefix: "universal/",
  name: "Universal",
  api: 'import { ValidatorsModule } from "ngx-validators";',
  validators: [
    {
      name: "noWhitespace",
      reactiveComponent: ReactiveFormWhitespaceComponent,
      formComponent: FormWhitespaceComponent,
      reactiveformTS: require("!raw-loader!./reactive-form/no-whitespace/reactive-form-no-whitespace.component")
        .default,
      reactiveformHTML: require("!raw-loader!./reactive-form/no-whitespace/reactive-form-no-whitespace.component.html")
        .default,
      formTS: require("!raw-loader!./form/no-whitespace/form-no-whitespace.component")
        .default,
      formHTML: require("!raw-loader!./form/no-whitespace/form-no-whitespace.component.html")
        .default,
    },
    {
      name: "noEmptyString",
      reactiveComponent: ReactiveFormNoEmptyStringComponent,
      reactiveformTS: require("!raw-loader!./reactive-form/no-empty-string/reactive-form-no-empty-string.component")
        .default,
      reactiveformHTML: require("!raw-loader!./reactive-form/no-empty-string/reactive-form-no-empty-string.component.html")
        .default,
    },
    {
      name: "isNumber",
      reactiveComponent: ReactiveFormIsNumberComponent,
      formComponent: FormIsNumberComponent,
      reactiveformTS: require("!raw-loader!./reactive-form/is-number/reactive-form-is-number.component")
        .default,
      reactiveformHTML: require("!raw-loader!./reactive-form/is-number/reactive-form-is-number.component.html")
        .default,
      formTS: require("!raw-loader!./form/is-number/form-is-number.component")
        .default,
      formHTML: require("!raw-loader!./form/is-number/form-is-number.component.html")
        .default,
    },
    {
      name: "isInRange",
      reactiveComponent: ReactiveFormIsInRangeComponent,
      formComponent: FormIsInRangeComponent,
      reactiveformTS: require("!raw-loader!./reactive-form/is-in-range/reactive-form-is-in-range.component")
        .default,
      reactiveformHTML: require("!raw-loader!./reactive-form/is-in-range/reactive-form-is-in-range.component.html")
        .default,
      formTS: require("!raw-loader!./form/is-in-range/form-is-in-range.component")
        .default,
      formHTML: require("!raw-loader!./form/is-in-range/form-is-in-range.component.html")
        .default,
    },
    {
      reactiveComponent: ReactiveFormMinLengthComponent,
      name: "minLength",
      reactiveformTS: require("!raw-loader!./reactive-form/min-length/reactive-form-min-length.component")
        .default,
      reactiveformHTML: require("!raw-loader!./reactive-form/min-length/reactive-form-min-length.component.html")
        .default,
    },
    {
      name: "maxLength",
      reactiveComponent: ReactiveFormMaxLengthComponent,
      reactiveformTS: require("!raw-loader!./reactive-form/max-length/reactive-form-max-length.component")
        .default,
      reactiveformHTML: require("!raw-loader!./reactive-form/max-length/reactive-form-max-length.component.html")
        .default,
    },
    {
      name: "min",
      reactiveComponent: ReactiveFormMinComponent,
      formComponent: FormMinComponent,
      reactiveformTS: require("!raw-loader!./reactive-form/min/reactive-form-min.component")
        .default,
      reactiveformHTML: require("!raw-loader!./reactive-form/min/reactive-form-min.component.html")
        .default,
      formTS: require("!raw-loader!./form/min/form-min.component").default,
      formHTML: require("!raw-loader!./form/min/form-min.component.html")
        .default,
    },
    {
      name: "max",
      reactiveComponent: ReactiveFormMaxComponent,
      formComponent: FormMaxComponent,
      reactiveformTS: require("!raw-loader!./reactive-form/max/reactive-form-max.component")
        .default,
      reactiveformHTML: require("!raw-loader!./reactive-form/max/reactive-form-max.component.html")
        .default,
      formTS: require("!raw-loader!./form/max/form-max.component").default,
      formHTML: require("!raw-loader!./form/max/form-max.component.html")
        .default,
    },
  ],
};
