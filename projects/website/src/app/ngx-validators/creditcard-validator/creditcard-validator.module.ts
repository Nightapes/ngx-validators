import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { UtilModule } from "../../util/util.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ValidatorsModule } from "ngx-validators";
import { FormDiscoverComponent } from "./form/discover/form-discover.component";
import { FormCreditcardComponent } from "./form/creditcard/form-creditcard.component";
import { FormMastercardComponent } from "./form/mastercard/form-mastercard.component";
import { FormDinersclubComponent } from "./form/dinersclub/form-dinersclub.component";
import { FormJcpComponent } from "./form/jcb/form-jcb.component";
import { FormMaestroComponent } from "./form/maestro/form-maestro.component";
import { FormVisaComponent } from "./form/visa/form-visa.component";
import { FormAmericanExpressComponent } from "./form/american-express/form-american-express.component";
import { ReactiveFormDiscoverComponent } from "./reactive-form/discover/reactive-form-discover.component";
import { ReactiveFormCreditcardComponent } from "./reactive-form/creditcard/reactive-form-creditcard.component";
import { ReactiveFormMastercardComponent } from "./reactive-form/mastercard/reactive-form-mastercard.component";
import { ReactiveFormDinersclubComponent } from "./reactive-form/dinersclub/reactive-form-dinersclub.component";
import { ReactiveFormJcpComponent } from "./reactive-form/jcb/reactive-form-jcb.component";
import { ReactiveFormMaestroComponent } from "./reactive-form/maestro/reactive-form-maestro.component";
import { ReactiveFormVisaComponent } from "./reactive-form/visa/reactive-form-visa.component";
import { ReactiveFormAmericanExpressComponent } from "./reactive-form/american-express/reactive-form-american-express.component";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from "@angular/material/tabs";
import { Items } from "./../../util/example-view/example-view.component";

const components = [
  FormAmericanExpressComponent,
  FormVisaComponent,
  FormMaestroComponent,
  FormJcpComponent,
  FormDiscoverComponent,
  FormDinersclubComponent,
  FormMaestroComponent,
  FormCreditcardComponent,
  FormMastercardComponent,
  ReactiveFormAmericanExpressComponent,
  ReactiveFormVisaComponent,
  ReactiveFormMaestroComponent,
  ReactiveFormJcpComponent,
  ReactiveFormDiscoverComponent,
  ReactiveFormDinersclubComponent,
  ReactiveFormMaestroComponent,
  ReactiveFormCreditcardComponent,
  ReactiveFormMastercardComponent,
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
export class CreditcardModule {}

export const CreditcardExamples: Items = {
  linkPrefix: "creditcard/",
  name: "Creditcards",
  api: 'import { ValidatorsModule } from "ngx-validators";',
  validators: [
    {
      name: "all",
      reactiveComponent: ReactiveFormCreditcardComponent,
      formComponent: FormCreditcardComponent,
      reactiveformTS: require("!raw-loader!./reactive-form/creditcard/reactive-form-creditcard.component")
        .default,
      reactiveformHTML: require("!raw-loader!./reactive-form/creditcard/reactive-form-creditcard.component.html")
        .default,
      formTS: require("!raw-loader!./form/creditcard/form-creditcard.component")
        .default,
      formHTML: require("!raw-loader!./form/creditcard/form-creditcard.component.html")
        .default,
    },
    {
      name: "americanexpress",
      reactiveComponent: ReactiveFormAmericanExpressComponent,
      formComponent: FormAmericanExpressComponent,
      reactiveformTS: require("!raw-loader!./reactive-form/american-express/reactive-form-american-express.component")
        .default,
      reactiveformHTML: require("!raw-loader!./reactive-form/american-express/reactive-form-american-express.component.html")
        .default,
      formTS: require("!raw-loader!./form/american-express/form-american-express.component")
        .default,
      formHTML: require("!raw-loader!./form/american-express/form-american-express.component.html")
        .default,
    },
    {
      name: "visa",
      reactiveComponent: ReactiveFormVisaComponent,
      formComponent: FormVisaComponent,
      reactiveformTS: require("!raw-loader!./reactive-form/visa/reactive-form-visa.component")
        .default,
      reactiveformHTML: require("!raw-loader!./reactive-form/visa/reactive-form-visa.component.html")
        .default,
      formTS: require("!raw-loader!./form/visa/form-visa.component").default,
      formHTML: require("!raw-loader!./form/visa/form-visa.component.html")
        .default,
    },
    {
      name: "dinersclub",
      reactiveComponent: ReactiveFormDinersclubComponent,
      formComponent: FormDinersclubComponent,
      reactiveformTS: require("!raw-loader!./reactive-form/dinersclub/reactive-form-dinersclub.component")
        .default,
      reactiveformHTML: require("!raw-loader!./reactive-form/dinersclub/reactive-form-dinersclub.component.html")
        .default,
      formTS: require("!raw-loader!./form/dinersclub/form-dinersclub.component")
        .default,
      formHTML: require("!raw-loader!./form/dinersclub/form-dinersclub.component.html")
        .default,
    },
    {
      name: "discover",
      reactiveComponent: ReactiveFormDiscoverComponent,
      formComponent: FormDiscoverComponent,
      reactiveformTS: require("!raw-loader!./reactive-form/discover/reactive-form-discover.component")
        .default,
      reactiveformHTML: require("!raw-loader!./reactive-form/discover/reactive-form-discover.component.html")
        .default,
      formTS: require("!raw-loader!./form/discover/form-discover.component")
        .default,
      formHTML: require("!raw-loader!./form/discover/form-discover.component.html")
        .default,
    },
    {
      name: "jcb",
      reactiveComponent: ReactiveFormJcpComponent,
      formComponent: FormJcpComponent,
      reactiveformTS: require("!raw-loader!./reactive-form/jcb/reactive-form-jcb.component")
        .default,
      reactiveformHTML: require("!raw-loader!./reactive-form/jcb/reactive-form-jcb.component.html")
        .default,
      formTS: require("!raw-loader!./form/jcb/form-jcb.component").default,
      formHTML: require("!raw-loader!./form/jcb/form-jcb.component.html")
        .default,
    },
    {
      name: "maestro",
      reactiveComponent: ReactiveFormMaestroComponent,
      formComponent: FormMaestroComponent,
      reactiveformTS: require("!raw-loader!./reactive-form/maestro/reactive-form-maestro.component")
        .default,
      reactiveformHTML: require("!raw-loader!./reactive-form/maestro/reactive-form-maestro.component.html")
        .default,
      formTS: require("!raw-loader!./form/maestro/form-maestro.component")
        .default,
      formHTML: require("!raw-loader!./form/maestro/form-maestro.component.html")
        .default,
    },
    {
      name: "mastercard",
      reactiveComponent: ReactiveFormMastercardComponent,
      formComponent: FormMaestroComponent,
      reactiveformTS: require("!raw-loader!./reactive-form/mastercard/reactive-form-mastercard.component")
        .default,
      reactiveformHTML: require("!raw-loader!./reactive-form/mastercard/reactive-form-mastercard.component.html")
        .default,
      formTS: require("!raw-loader!./form/mastercard/form-mastercard.component")
        .default,
      formHTML: require("!raw-loader!./form/mastercard/form-mastercard.component.html")
        .default,
    },
  ],
};
