import { MatCardModule, MatListModule } from "@angular/material";
import { GuideComponent } from "./guide.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: GuideComponent,
  },
  {
    path: "guide",
    component: GuideComponent,
  },
];

@NgModule({
  imports: [CommonModule, MatCardModule, MatListModule, RouterModule.forChild(routes)],
  declarations: [GuideComponent],
})
export class GuideModule {}
