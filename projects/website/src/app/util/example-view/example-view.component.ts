import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

export interface Items {
  linkPrefix: string;
  validators: ValidatorExample[];
  name: string;
  api: string;
}

export interface ValidatorExample {
  name: string;
  hint?: string;
  formTS?: any;
  formHTML?: any;
  formComponent?: any;
  reactiveComponent?: any;
  reactiveformTS?: any;
  reactiveformHTML?: any;
}

@Component({
  selector: "app-example-view",
  templateUrl: "./example-view.component.html",
  styleUrls: ["./example-view.component.scss"],
})
export class ExampleViewComponent implements OnInit, OnDestroy {
  @Input() items: ValidatorExample[];
  @Input() title: string;
  @Input() api: string;

  private sub: any;
  item: string;
  currentValidator: ValidatorExample;
  selected = "reactiveForm";

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.currentValidator = this.items.filter((x) => x.name === this.item)[0];
    this.sub = this.route.params.subscribe((params) => {
      this.item = params.id;
      if (this.item) {
        this.currentValidator = this.items.filter(
          (x) => x.name === this.item
        )[0];
      }
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
