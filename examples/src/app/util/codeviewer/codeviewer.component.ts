import { Component, Input } from "@angular/core";
// import * as hljs from 'highlight.js';

@Component({
  selector: "app-codeviewer",
  templateUrl: "./codeviewer.component.html",
  styleUrls: ["./codeviewer.component.css"],
})
export class CodeviewerComponent {
  @Input() html: any;
  @Input() tsCode: any;
}
