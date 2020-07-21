import { FormsModule } from "@angular/forms";
import { NgxPhoneValidatorsModule } from "./ngx-phone-validators/ngx-phone-validators.module";
import { NgxValidatorsModule } from "./ngx-validators/ngx-validators.module";
import { MatExpansionModule } from "@angular/material/expansion";
import { ValidatorsModule } from "ngx-validators";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatCardModule } from "@angular/material/card";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
import { HomeModule } from "./home/home.module";
import { NgxValidatorsRoutingModule } from "./ngx-validators/ngx-validators-routing.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { useHash: true }),
    BrowserAnimationsModule,
    HttpClientModule,
    ValidatorsModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    FormsModule,
    HomeModule,
    NgxValidatorsModule,
    NgxPhoneValidatorsModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: "standard" },
    },
  ],
  exports: [FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
