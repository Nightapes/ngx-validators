import { UtilModule } from "./../util/util.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgxPhoneValidatorsRoutingModule } from "./ngx-phone-validators-routing.module";
import { NgxPhoneValidatorsComponent } from "./ngx-phone-validators.component";
import { NgxPhoneValidatorsExamplesComponent } from "./ngx-phone-validators-examples.component";

@NgModule({
  declarations: [
    NgxPhoneValidatorsExamplesComponent,
    NgxPhoneValidatorsComponent,
  ],
  imports: [CommonModule, NgxPhoneValidatorsRoutingModule, UtilModule],
})
export class NgxPhoneValidatorsModule {}
