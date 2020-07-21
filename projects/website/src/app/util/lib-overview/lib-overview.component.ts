import { Component, OnInit, Input } from "@angular/core";
import { Items } from "../example-view/example-view.component";

@Component({
  selector: "app-lib-overview",
  templateUrl: "./lib-overview.component.html",
  styleUrls: ["./lib-overview.component.scss"],
})
export class LibOverviewComponent implements OnInit {
  @Input() items: Items[];
  @Input() title: string;
  @Input() subtitle: string;
  constructor() {}

  ngOnInit(): void {}
}
