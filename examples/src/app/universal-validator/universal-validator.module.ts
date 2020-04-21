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
import { UniversalValidatorComponent } from "./universal-validator.component";
import { UtilModule } from "../util/util.module";
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

const routes: Routes = [
  {
    path: "universal",
    component: UniversalValidatorComponent,
  },
  {
    path: "universal/:id",
    component: UniversalValidatorComponent,
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
    UniversalValidatorComponent,
  ],
})
export class UniversalModule {}
