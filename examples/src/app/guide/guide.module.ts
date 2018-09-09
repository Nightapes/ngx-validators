import { MatCardModule, MatListModule } from '@angular/material';
import { GuideComponent } from './guide.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    RouterModule
  ],
  declarations: [
    GuideComponent
  ]
})
export class GuideModule { }
