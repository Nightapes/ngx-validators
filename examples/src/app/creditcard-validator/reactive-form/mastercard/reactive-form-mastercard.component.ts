import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { CreditCardValidators } from "ngx-validators";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reactive-mastercard",
  templateUrl: "./reactive-form-mastercard.component.html",
})
export class ReactiveFormMastercardComponent implements OnInit {
  form: FormGroup;
  creditcard = new FormControl("", Validators.compose([CreditCardValidators.mastercard]));
  constructor(protected _fb: FormBuilder) {}

  ngOnInit() {
    this.form = this._fb.group({
      creditcard: this.creditcard,
    });
  }
}
