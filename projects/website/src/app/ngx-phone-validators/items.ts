export interface Items {
  linkPrefix: string;
  validators: Validator[];
  name: string;
}

export interface Validator {
  name: string;
  hint?: string;
  formTS?: any;
  formHTML?: any;
  reactiveformTS?: any;
  reactiveformHTML?: any;
}

// tslint:disable:max-line-length

export const phone: Validator[] = [
  {
    name: "phone",
  },
  // {
  //   name: "county code",
  //   reactiveformTS: require("!raw-loader!./email-validator/reactive-form/suggest/reactive-form-email-suggest.component")
  //     .default,
  //   reactiveformHTML: require("!raw-loader!./email-validator/reactive-form/suggest/reactive-form-email-suggest.component.html")
  //     .default,
  //   formTS: require("!raw-loader!./email-validator/form/suggest/form-email-suggest.component")
  //     .default,
  //   formHTML: require("!raw-loader!./email-validator/form/suggest/form-email-suggest.component.html")
  //     .default,
  // },
  // {
  //   name: "Possible phone number",
  //   reactiveformTS: require("!raw-loader!./email-validator/reactive-form/suggest/reactive-form-email-suggest.component")
  //     .default,
  //   reactiveformHTML: require("!raw-loader!./email-validator/reactive-form/suggest/reactive-form-email-suggest.component.html")
  //     .default,
  //   formTS: require("!raw-loader!./email-validator/form/suggest/form-email-suggest.component")
  //     .default,
  //   formHTML: require("!raw-loader!./email-validator/form/suggest/form-email-suggest.component.html")
  //     .default,
  // },
];

export const items: Items[] = [
  { linkPrefix: "phone/", validators: phone, name: "Phone number" },
];
