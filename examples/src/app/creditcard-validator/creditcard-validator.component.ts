import { Validator } from "./../items";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { CreditCardValidators } from "ngx-validators";
import { ActivatedRoute } from "@angular/router";

import { isNumber } from "util";
import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { OnDestroy } from "@angular/core";
import { creditcards } from "../items";

@Component({
  selector: "creditcard-validator",
  templateUrl: "./creditcard-validator.component.html",
})
export class CreditcardValidatorComponent implements OnInit, OnDestroy {
  private sub: any;
  creditcardItems = creditcards;
  item: string = this.creditcardItems[0].name;
  currentValidator: Validator;
  selected = "reactiveForm";

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.currentValidator = this.creditcardItems.filter((x) => x.name === this.item)[0];
    this.sub = this.route.params.subscribe((params) => {
      this.item = params["id"];
      if (this.item) {
        this.currentValidator = this.creditcardItems.filter((x) => x.name === this.item)[0];
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
