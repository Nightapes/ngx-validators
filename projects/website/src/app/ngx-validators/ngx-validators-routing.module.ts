import { NgxValidatorsExamplesComponent } from "./ngx-validators-examples.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NgxValidatorsComponent } from "./ngx-validators.component";

const routes: Routes = [
  {
    path: "ngx-validators",
    component: NgxValidatorsComponent,
  },
  {
    path: "ngx-validators/:name",
    component: NgxValidatorsExamplesComponent,
  },
  {
    path: "ngx-validators/:name/:id",
    component: NgxValidatorsExamplesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgxValidatorsRoutingModule {}
