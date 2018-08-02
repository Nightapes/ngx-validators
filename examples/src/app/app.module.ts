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
  MatToolbarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ReactiveFormsExampleModule,
    FormsExampleModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([], { useHash: true }),
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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
