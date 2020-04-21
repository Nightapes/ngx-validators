import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { CreditCardValidators } from "ngx-validators";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-reactive-american-express",
  templateUrl: "./reactive-form-american-express.component.html",
})
export class ReactiveFormAmericanExpressComponent implements OnInit {
  form: FormGroup;
  creditcard = new FormControl("", Validators.compose([CreditCardValidators.americanExpress]));
  constructor(protected _fb: FormBuilder) {}

  ngOnInit() {
    this.form = this._fb.group({
      creditcard: this.creditcard,
    });
  }
}
