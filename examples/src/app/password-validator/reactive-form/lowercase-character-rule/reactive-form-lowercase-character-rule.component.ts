import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { UniversalValidators, PasswordValidators } from "ngx-validators";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reactive-lowercase-character-rule",
  templateUrl: "./reactive-form-lowercase-character-rule.component.html",
})
export class ReactiveFormLowercaseCharacterRuleComponent implements OnInit {
  form: FormGroup;

  lowercaseCharacterRule: FormControl = new FormControl(
    "",
    Validators.compose([Validators.required, PasswordValidators.lowercaseCharacterRule(1)])
  );

  constructor(protected _fb: FormBuilder) {}

  ngOnInit() {
    this.form = this._fb.group({
      newPassword: this.lowercaseCharacterRule,
    });
  }
}
