import { GuideModule } from './guide/guide.module';
import { FormsExampleModule } from './forms/forms.module';
import { ReactiveFormsExampleModule } from './reactive-forms/reactive-forms.module';
import { ValidatorsModule } from 'ng2-validators';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule, MdCardModule, MdTabsModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material/toolbar';
import { MdInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GuideComponent } from './guide/guide.component';

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
    HttpModule,
    ValidatorsModule,
    GuideModule,
    MdToolbarModule,
    MdTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
