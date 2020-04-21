import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { CreditCardValidators } from "ngx-validators";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reactive-creditcard",
  templateUrl: "./reactive-form-creditcard.component.html",
})
export class ReactiveFormCreditcardComponent implements OnInit {
  form: FormGroup;
  creditcard = new FormControl("", Validators.compose([CreditCardValidators.isCreditCard]));
  constructor(protected _fb: FormBuilder) {}

  ngOnInit() {
    this.form = this._fb.group({
      creditcard: this.creditcard,
    });
  }
}
