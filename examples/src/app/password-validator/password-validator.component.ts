import { Validator } from "./../items";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { PasswordValidators } from "ngx-validators";
import { ActivatedRoute } from "@angular/router";

import { isNumber } from "util";
import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { OnDestroy } from "@angular/core";
import { password } from "../items";

@Component({
  selector: "password-validator",
  templateUrl: "./password-validator.component.html",
})
export class PasswordValidatorComponent implements OnInit, OnDestroy {
  private sub: any;
  passwordItems = password;
  item: string = this.passwordItems[0].name;
  currentValidator: Validator;
  selected = "reactiveForm";

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.currentValidator = this.passwordItems.filter((x) => x.name === this.item)[0];
    this.sub = this.route.params.subscribe((params) => {
      this.item = params["id"];
      if (this.item) {
        this.currentValidator = this.passwordItems.filter((x) => x.name === this.item)[0];
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
