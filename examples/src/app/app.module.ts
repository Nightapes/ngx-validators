import { UniversalModule } from './universal-validator/universal-validator.module';
import { GuideModule } from './guide/guide.module';
import { FormsExampleModule } from './forms/forms.module';
import { ReactiveFormsExampleModule } from './reactive-forms/reactive-forms.module';
import { ValidatorsModule } from 'ngx-validators';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes } from '@angular/router';
import { ReactiveFormsComponent } from 'app/reactive-forms/reactive-forms.component';
import { GuideComponent } from 'app/guide/guide.component';
import { EmailModule } from './email-validator/email-validator.module';
import { PasswordModule } from './password-validator/password-validator.module';
import { CreditcardModule } from './creditcard-validator/creditcard-validator.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ReactiveFormsExampleModule,
    FormsExampleModule,
    AppRoutingModule,
    BrowserModule,
    RouterModule.forRoot([], { useHash: true }),
    BrowserAnimationsModule,
    HttpModule,
    ValidatorsModule,
    GuideModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    UniversalModule,
    PasswordModule,
    EmailModule,
    CreditcardModule
  ],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'standard' } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
