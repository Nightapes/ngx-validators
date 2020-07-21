import { MatExpansionModule } from "@angular/material/expansion";
import { MatSelectModule } from "@angular/material/select";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { CodeviewerComponent } from "./codeviewer/codeviewer.component";
import { HighlightModule } from "ngx-highlightjs";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from "@angular/material/tabs";
import { ExampleViewComponent } from "./example-view/example-view.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { LibOverviewComponent } from "./lib-overview/lib-overview.component";

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    MatListModule,
    MatSelectModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    HighlightModule,
  ],
  declarations: [
    CodeviewerComponent,
    ExampleViewComponent,
    LibOverviewComponent,
  ],
  exports: [CodeviewerComponent, ExampleViewComponent, LibOverviewComponent],
})
export class UtilModule {}
