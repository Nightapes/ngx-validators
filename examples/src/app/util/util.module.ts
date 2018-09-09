import { MatCardModule, MatListModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatTabsModule } from '@angular/material';
import { CodeviewerComponent } from './codeviewer/codeviewer.component';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    MatListModule,
    MatButtonModule,
    MatTabsModule,
    HighlightModule.forRoot()
  ],
  declarations: [
    CodeviewerComponent
  ],
  exports: [
    CodeviewerComponent
  ]
})
export class UtilModule { }
