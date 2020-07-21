import { Component } from "@angular/core";

@Component({
  selector: "app-no-whitespace",
  templateUrl: "./form-no-whitespace.component.html",
})
export class FormWhitespaceComponent {
  model: any = {
    whitespace: "",
  };
}
