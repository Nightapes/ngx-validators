import { Validator } from "./../items";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { EmailValidators } from "ngx-validators";
import { ActivatedRoute } from "@angular/router";

import { isNumber } from "util";
import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { OnDestroy } from "@angular/core";
import { email } from "../items";

@Component({
  selector: "email-validator",
  templateUrl: "./email-validator.component.html",
})
export class EmailValidatorComponent implements OnInit, OnDestroy {
  private sub: any;
  emailItems = email;
  item: string = this.emailItems[0].name;
  currentValidator: Validator;
  selected = "reactiveForm";

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.currentValidator = this.emailItems.filter((x) => x.name === this.item)[0];
    this.sub = this.route.params.subscribe((params) => {
      this.item = params["id"];
      if (this.item) {
        this.currentValidator = this.emailItems.filter((x) => x.name === this.item)[0];
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
