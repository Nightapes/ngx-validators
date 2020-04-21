import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { UniversalValidators, PasswordValidators } from "ngx-validators";
import { Component, OnInit } from "@angular/core";
import { PasswordModule } from "../../password-validator.module";

@Component({
  selector: "app-reactive-uppercase-character-rule",
  templateUrl: "./reactive-form-uppercase-character-rule.component.html",
})
export class ReactiveFormUppercaseCharacterRuleComponent implements OnInit {
  form: FormGroup;

  uppercaseCharacterRule: FormControl = new FormControl(
    "",
    Validators.compose([Validators.required, PasswordValidators.uppercaseCharacterRule(1)])
  );

  constructor(protected _fb: FormBuilder) {}

  ngOnInit() {
    this.form = this._fb.group({
      newPassword: this.uppercaseCharacterRule,
    });
  }
}
