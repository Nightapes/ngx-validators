import { NgxPhoneValidatorsModule } from "./ngx-phone-validators.module";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NgxPhoneValidatorsComponent } from "./ngx-phone-validators.component";
import { NgxPhoneValidatorsExamplesComponent } from "./ngx-phone-validators-examples.component";

const routes: Routes = [
  {
    path: "ngx-phone-validators",
    component: NgxPhoneValidatorsComponent,
  },
  {
    path: "ngx-phone-validators/:name",
    component: NgxPhoneValidatorsExamplesComponent,
  },
  {
    path: "ngx-phone-validators/:name/:id",
    component: NgxPhoneValidatorsExamplesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxPhoneValidatorsRoutingModule {}
