import { Component, OnDestroy, OnInit } from "@angular/core";
import { equalTo, Validator } from "../items";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-equals-to-field-validator",
  templateUrl: "./equal-to-validator.component.html",
})
export class EqualToValidatorComponent implements OnInit, OnDestroy {
  private sub: any;
  validatorItems = equalTo;
  item: string = this.validatorItems[0].name;
  currentValidator: Validator;
  selected = "reactiveForm";

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.currentValidator = this.validatorItems.filter((x) => x.name === this.item)[0];
    this.sub = this.route.params.subscribe((params) => {
      this.item = params["id"];
      if (this.item) {
        this.currentValidator = this.validatorItems.filter((x) => x.name === this.item)[0];
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
