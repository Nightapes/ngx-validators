import { Subscription } from "rxjs";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Items } from "../util/example-view/example-view.component";

@Component({
  selector: "app-ngx-phone-validators-examples",
  template: `<app-example-view
    [api]="validatorsExample.api"
    [title]="validatorsExample.name"
    [items]="validatorsExample.validators"
  ></app-example-view>`,
  styles: [],
})
export class NgxPhoneValidatorsExamplesComponent implements OnInit, OnDestroy {
  validatorsExamples: Items[] = [];
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
