import { MatCardModule, MatListModule, MatFormFieldModule, MatTooltipModule, MatInputModule, MatSelectModule } from '@angular/material';
import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatTabsModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { EmailValidatorComponent } from './email-validator.component';
import { UtilModule } from '../util/util.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormEmailComponent } from './reactive-form/email/reactive-form-email.component';

import { FormEmailComponent } from './form/email/form-email.component';
import { ValidatorsModule } from 'ngx-validators';
import { ReactiveFormEmailSuggestComponent } from './reactive-form/suggest/reactive-form-email-suggest.component';
import { FormEmailSuggestComponent } from './form/suggest/form-email-suggest.component';



const routes: Routes = [
  {
    path: 'email',
    component: EmailValidatorComponent,
  },
  {
    path: 'email/:id',
    component: EmailValidatorComponent,
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
    ReactiveFormEmailComponent,
    ReactiveFormEmailSuggestComponent,
    FormEmailComponent,
    EmailValidatorComponent,
    FormEmailSuggestComponent
  ]
})
export class EmailModule { }
