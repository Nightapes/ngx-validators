import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { UniversalValidators } from "ngx-validators";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reactive-max",
  templateUrl: "./reactive-form-max.component.html",
})
export class ReactiveFormMaxComponent implements OnInit {
  form: FormGroup;

  max: FormControl = new FormControl("", Validators.compose([Validators.required, UniversalValidators.max(10)]));

  constructor(protected _fb: FormBuilder) {}

  ngOnInit() {
    this.form = this._fb.group({
      max: this.max,
    });
  }
}
