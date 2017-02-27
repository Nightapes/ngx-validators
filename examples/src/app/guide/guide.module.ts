import { MdCardModule, MdListModule } from '@angular/material';
import { GuideComponent } from './guide.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    MdListModule
  ],
  declarations: [
    GuideComponent
  ]
})
export class GuideModule { }
