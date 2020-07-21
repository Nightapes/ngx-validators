import { UtilModule } from "./../util/util.module";
import { NgxValidatorsRoutingModule } from "./ngx-validators-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxValidatorsComponent } from "./ngx-validators.component";
import { NgxValidatorsExamplesComponent } from "./ngx-validators-examples.component";

@NgModule({
  declarations: [NgxValidatorsComponent, NgxValidatorsExamplesComponent],
  imports: [CommonModule, NgxValidatorsRoutingModule, UtilModule],
})
export class NgxValidatorsModule {}
