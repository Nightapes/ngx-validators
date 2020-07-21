import { UniversalExamples } from "./universal-validator/universal-validator.module";
import { Subscription } from "rxjs";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Items } from "../util/example-view/example-view.component";
import { EmailExamples } from "./email-validator/email-validator.module";
import { CreditcardExamples } from "./creditcard-validator/creditcard-validator.module";
import { EqualToExamples } from "./equal-to-validator/equal-to-validator.module";
import { PasswordExamples } from "./password-validator/password-validator.module";

@Component({
  selector: "app-ngx-validators-examples",
  template: `<app-example-view
    [api]="validatorsExample.api"
    [title]="validatorsExample.name"
    [items]="validatorsExample.validators"
  ></app-example-view>`,
  styles: [],
})
export class NgxValidatorsExamplesComponent implements OnInit, OnDestroy {
  validatorsExamples: Items[] = [
    EmailExamples,
    UniversalExamples,
    PasswordExamples,
    EqualToExamples,
    CreditcardExamples,
  ];
  private sub: Subscription;
  validatorsExample: Items;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.validatorsExample = this.validatorsExamples[0];
    this.sub = this.route.params.subscribe((params) => {
      const name = params.name;
      this.validatorsExample = this.validatorsExamples.filter((x) => {
        return (
          x.linkPrefix.toLocaleUpperCase() === name.toLocaleUpperCase() + "/"
        );
      })[0];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
