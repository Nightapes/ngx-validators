import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EqualToValidatorComponent } from "./equal-to-validator.component";
import { FormEqualToComponent } from "./form/equal-to/form-equal-to.component";
import { RouterModule, Routes } from "@angular/router";
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
} from "@angular/material";
import { UtilModule } from "../util/util.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ValidatorsModule } from "ngx-validators";
import { ReactiveFormEqualToComponent } from "./reactive-form/equal-to/reactive-form-equal-to.component";

const routes: Routes = [
  { path: "equal-to", component: EqualToValidatorComponent },
  { path: "equal-to/:id", component: EqualToValidatorComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    UtilModule,
    ValidatorsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule,
    MatButtonModule,
  ],
  declarations: [EqualToValidatorComponent, FormEqualToComponent, ReactiveFormEqualToComponent],
})
export class EqualToValidatorModule {}
