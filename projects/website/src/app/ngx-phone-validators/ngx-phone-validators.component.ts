import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ngx-phone-validators",
  template: `
    <app-lib-overview
      [items]="menuItems"
      title="ngx-phone-validators"
      subtitle="Angular validators for phone number using google-libphonenumber"
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
      <p>Angular validators for phone number using google-libphonenumber</p>
      <h2>Install</h2>
      <pre><code>npm install ngx-phone-validators --save</code></pre>
    </app-lib-overview>
  `,
  styleUrls: [],
})
export class NgxPhoneValidatorsComponent implements OnInit {
  menuItems = [];
  constructor() {}

  ngOnInit(): void {}
}
