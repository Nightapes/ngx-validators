import { MatCardModule, MatListModule, MatFormFieldModule, MatTooltipModule, MatInputModule, MatSelectModule } from '@angular/material';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatTabsModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { UtilModule } from '../util/util.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ValidatorsModule } from 'ngx-validators';
import { CreditcardValidatorComponent } from './creditcard-validator.component';
import { FormDiscoverComponent } from './form/discover/form-discover.component';
import { FormCreditcardComponent } from './form/creditcard/form-creditcard.component';
import { FormMastercardComponent } from './form/mastercard/form-mastercard.component';
import { FormDinersclubComponent } from './form/dinersclub/form-dinersclub.component';
import { FormJcpComponent } from './form/jcb/form-jcb.component';
import { FormMaestroComponent } from './form/maestro/form-maestro.component';
import { FormVisaComponent } from './form/visa/form-visa.component';
import { FormAmericanExpressComponent } from './form/american-express/form-american-express.component';
import { ReactiveFormDiscoverComponent } from './reactive-form/discover/reactive-form-discover.component';
import { ReactiveFormCreditcardComponent } from './reactive-form/creditcard/reactive-form-creditcard.component';
import { ReactiveFormMastercardComponent } from './reactive-form/mastercard/reactive-form-mastercard.component';
import { ReactiveFormDinersclubComponent } from './reactive-form/dinersclub/reactive-form-dinersclub.component';
import { ReactiveFormJcpComponent } from './reactive-form/jcb/reactive-form-jcb.component';
import { ReactiveFormMaestroComponent } from './reactive-form/maestro/reactive-form-maestro.component';
import { ReactiveFormVisaComponent } from './reactive-form/visa/reactive-form-visa.component';
import { ReactiveFormAmericanExpressComponent } from './reactive-form/american-express/reactive-form-american-express.component';

const routes: Routes = [
  {
    path: 'creditcard',
    component: CreditcardValidatorComponent,
  },
  {
    path: 'creditcard/:id',
    component: CreditcardValidatorComponent,
  }
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
    ValidatorsModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
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
    CreditcardValidatorComponent
  ]
})
export class CreditcardModule { }
