import { GuideComponent } from './guide/guide.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'reactive-forms',
    component: ReactiveFormsComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'guide',
    component: GuideComponent
  }, {
    path: '',
    redirectTo: 'guide',
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
