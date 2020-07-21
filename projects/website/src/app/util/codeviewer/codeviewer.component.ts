import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-codeviewer",
  templateUrl: "./codeviewer.component.html",
  styleUrls: ["./codeviewer.component.scss"],
})
export class CodeviewerComponent {
  @Input() html: string;
  @Input() tsCode: string;
}
