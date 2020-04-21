import { UniversalModule } from "./universal-validator/universal-validator.module";
import { GuideModule } from "./guide/guide.module";
import { ValidatorsModule } from "ngx-validators";
import { RouterModule } from "@angular/router";
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from "@angular/material";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EmailModule } from "./email-validator/email-validator.module";
import { PasswordModule } from "./password-validator/password-validator.module";
import { CreditcardModule } from "./creditcard-validator/creditcard-validator.module";
import { EqualToValidatorModule } from "./equal-to-validator/equal-to-validator.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
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
    CreditcardModule,
    EqualToValidatorModule,
  ],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: "standard" } }],
  bootstrap: [AppComponent],
})
export class AppModule {}
