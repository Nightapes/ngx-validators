import { MatCardModule, MatListModule } from '@angular/material';
import { GuideComponent } from './guide.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule
  ],
  declarations: [
    GuideComponent
  ]
})
export class GuideModule { }
