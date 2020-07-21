import { Component } from "@angular/core";

@Component({
  selector: "app-is-in-range",
  templateUrl: "./form-is-in-range.component.html",
})
export class FormIsInRangeComponent {
  model: any = {
    range: "",
    min: 0,
    max: 2,
  };
}
