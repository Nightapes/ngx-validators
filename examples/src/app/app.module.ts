import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material/toolbar';
import { MdInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ValidatorsModule } from './../../../src/validators.module';
import { ReactiveFormValidatorsComponent } from './reactive-form-validators/reactive-form-validators.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormValidatorsComponent,
    FormsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    HttpModule,
    ValidatorsModule,
    MaterialModule,
    MdInputModule,
    MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
