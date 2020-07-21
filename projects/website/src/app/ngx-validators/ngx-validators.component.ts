import { Component, OnInit } from "@angular/core";
import { EmailExamples } from "./email-validator/email-validator.module";
import { CreditcardExamples } from "./creditcard-validator/creditcard-validator.module";
import { EqualToExamples } from "./equal-to-validator/equal-to-validator.module";
import { PasswordExamples } from "./password-validator/password-validator.module";
import { UniversalExamples } from "./universal-validator/universal-validator.module";

@Component({
  selector: "app-ngx-validators",
  template: `
    <app-lib-overview
      [items]="menuItems"
      title="ngx-validators"
      subtitle="An implementation of various angular validators for Angular 2+"
    >
      <h1>
        <div>
          <a
            href="https://github.com/Nightapes/ngx-validators/workflows/Node/badge.svg"
            ><img
              src="https://github.com/Nightapes/ngx-validators/workflows/Node/badge.svg"
              alt="Build Status"
          /></a>
        </div>
      </h1>
      <p>An implementation of various angular validators for Angular 2+.</p>
      <h2>Install</h2>
      <pre><code>npm install ngx-validators --save</code></pre>
    </app-lib-overview>
  `,
  styleUrls: [],
})
export class NgxValidatorsComponent implements OnInit {
  menuItems = [
    UniversalExamples,
    PasswordExamples,
    EmailExamples,
    EqualToExamples,
    CreditcardExamples,
  ];
  constructor() {}

  ngOnInit(): void {}
}
