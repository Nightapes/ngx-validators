import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { UniversalValidators } from "ngx-validators";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reactive-no-whitespace",
  templateUrl: "./reactive-form-no-whitespace.component.html",
})
export class ReactiveFormWhitespaceComponent implements OnInit {
  form: FormGroup;
  noWhitespace: FormControl = new FormControl("", UniversalValidators.noWhitespace);

  constructor(protected _fb: FormBuilder) {}

  ngOnInit() {
    this.form = this._fb.group({
      noWhitespace: this.noWhitespace,
    });
  }
}
