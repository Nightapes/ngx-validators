import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { PasswordValidators } from "ngx-validators";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reactive-alphabetical-character-rule",
  templateUrl: "./reactive-form-alphabetical-character-rule.component.html",
})
export class ReactiveFormAlphabeticalCharacterRuleComponent implements OnInit {
  form: FormGroup;

  alphabeticalCharacterRule: FormControl = new FormControl(
    "",
    Validators.compose([Validators.required, PasswordValidators.alphabeticalCharacterRule(1)])
  );
  constructor(protected _fb: FormBuilder) {}

  ngOnInit() {
    this.form = this._fb.group({
      newPassword: this.alphabeticalCharacterRule,
    });
  }
}
