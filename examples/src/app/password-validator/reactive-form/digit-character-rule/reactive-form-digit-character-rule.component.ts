import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { PasswordValidators } from "ngx-validators";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reactive-digit-character-rule",
  templateUrl: "./reactive-form-digit-character-rule.component.html",
})
export class ReactiveFormDigitCharacterRuleComponent implements OnInit {
  form: FormGroup;

  digitCharacterRule: FormControl = new FormControl(
    "",
    Validators.compose([Validators.required, PasswordValidators.digitCharacterRule(1)])
  );

  constructor(protected _fb: FormBuilder) {}

  ngOnInit() {
    this.form = this._fb.group({
      newPassword: this.digitCharacterRule,
    });
  }
}
