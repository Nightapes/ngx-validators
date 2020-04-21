import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { UniversalValidators, PasswordValidators } from "ngx-validators";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reactive-special-character-rule",
  templateUrl: "./reactive-form-special-character-rule.component.html",
})
export class ReactiveFormSpecialCharacterRuleComponent implements OnInit {
  form: FormGroup;
  specialCharacterRule: FormControl = new FormControl("", PasswordValidators.specialCharacterRule(1));

  constructor(protected _fb: FormBuilder) {}

  ngOnInit() {
    this.form = this._fb.group({
      newPassword: this.specialCharacterRule,
    });
  }
}
