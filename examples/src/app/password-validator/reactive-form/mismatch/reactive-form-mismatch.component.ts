import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { UniversalValidators, PasswordValidators } from "ngx-validators";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reactive-mismatch",
  templateUrl: "./reactive-form-mismatch.component.html",
})
export class ReactiveFormMismatchComponent implements OnInit {
  form: FormGroup;
  password: FormControl = new FormControl("");
  confirmPassword: FormControl = new FormControl("");

  constructor(protected _fb: FormBuilder) {}

  ngOnInit() {
    this.form = this._fb.group({
      newPassword: this.password,
      confirmPassword: this.confirmPassword,
    });
    this.form.validator = PasswordValidators.mismatchedPasswords("newPassword", "confirmPassword");
  }
}
