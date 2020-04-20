import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { EmailValidators, EqualToValidator } from "ngx-validators";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reactive-equal-to",
  templateUrl: "./reactive-form-equal-to.component.html",
})
export class ReactiveFormEqualToComponent implements OnInit {
  form: FormGroup;
  constructor(protected _fb: FormBuilder) {}

  ngOnInit() {
    this.form = this._fb.group(
      {
        email: [""],
        emailConfirm: [""],
        password: [""],
        passwordConfirm: [""],
      },
      {
        validator: [
          EqualToValidator.equalTo("email", "emailConfirm"),
          EqualToValidator.equalTo("password", "passwordConfirm"),
        ],
      }
    );
  }
}
