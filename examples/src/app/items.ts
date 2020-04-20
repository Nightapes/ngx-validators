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

export const password: Validator[] = [
  {
    name: "alphabeticalCharacterRule",
    reactiveformTS: require("!raw-loader!./password-validator/reactive-form/alphabetical-character-rule/reactive-form-alphabetical-character-rule.component"),
    reactiveformHTML: require("!raw-loader!./password-validator/reactive-form/alphabetical-character-rule/reactive-form-alphabetical-character-rule.component.html"),
    formTS: require("!raw-loader!./password-validator/form/alphabetical-character-rule/form-alphabetical-character-rule.component"),
    formHTML: require("!raw-loader!./password-validator/form/alphabetical-character-rule/form-alphabetical-character-rule.component.html"),
  },
  {
    name: "digitCharacterRule",
    reactiveformTS: require("!raw-loader!./password-validator/reactive-form/digit-character-rule/reactive-form-digit-character-rule.component"),
    reactiveformHTML: require("!raw-loader!./password-validator/reactive-form/digit-character-rule/reactive-form-digit-character-rule.component.html"),
    formTS: require("!raw-loader!./password-validator/form/digit-character-rule/form-digit-character-rule.component"),
    formHTML: require("!raw-loader!./password-validator/form/digit-character-rule/form-digit-character-rule.component.html"),
  },
  {
    name: "lowercaseCharacterRule",
    reactiveformTS: require("!raw-loader!./password-validator/reactive-form/lowercase-character-rule/reactive-form-lowercase-character-rule.component"),
    reactiveformHTML: require("!raw-loader!./password-validator/reactive-form/lowercase-character-rule/reactive-form-lowercase-character-rule.component.html"),
    formTS: require("!raw-loader!./password-validator/form/lowercase-character-rule/form-lowercase-character-rule.component"),
    formHTML: require("!raw-loader!./password-validator/form/lowercase-character-rule/form-lowercase-character-rule.component.html"),
  },
  {
    name: "repeatCharacterRegexRule",
    reactiveformTS: require("!raw-loader!./password-validator/reactive-form/repeat-character-regex-rule/reactive-form-repeat-character-regex-rule.component"),
    reactiveformHTML: require("!raw-loader!./password-validator/reactive-form/repeat-character-regex-rule/reactive-form-repeat-character-regex-rule.component.html"),
    formTS: require("!raw-loader!./password-validator/form/repeat-character-regex-rule/form-repeat-character-regex-rule.component"),
    formHTML: require("!raw-loader!./password-validator/form/repeat-character-regex-rule/form-repeat-character-regex-rule.component.html"),
  },
  {
    name: "uppercaseCharacterRule",
    reactiveformTS: require("!raw-loader!./password-validator/reactive-form/uppercase-character-rule/reactive-form-uppercase-character-rule.component"),
    reactiveformHTML: require("!raw-loader!./password-validator/reactive-form/uppercase-character-rule/reactive-form-uppercase-character-rule.component.html"),
    formTS: require("!raw-loader!./password-validator/form/uppercase-character-rule/form-uppercase-character-rule.component"),
    formHTML: require("!raw-loader!./password-validator/form/uppercase-character-rule/form-uppercase-character-rule.component.html"),
  },
  {
    name: "specialCharacterRule",
    reactiveformTS: require("!raw-loader!./password-validator/reactive-form/special-character-rule/reactive-form-special-character-rule.component"),
    reactiveformHTML: require("!raw-loader!./password-validator/reactive-form/special-character-rule/reactive-form-special-character-rule.component.html"),
  },
  {
    name: "mismatch",
    reactiveformTS: require("!raw-loader!./password-validator/reactive-form/mismatch/reactive-form-mismatch.component"),
    reactiveformHTML: require("!raw-loader!./password-validator/reactive-form/mismatch/reactive-form-mismatch.component.html"),
  },
];

export const email: Validator[] = [
  {
    name: "normal",
    reactiveformTS: require("!raw-loader!./email-validator/reactive-form/email/reactive-form-email.component"),
    reactiveformHTML: require("!raw-loader!./email-validator/reactive-form/email/reactive-form-email.component.html"),
    formTS: require("!raw-loader!./email-validator/form/email/form-email.component"),
    formHTML: require("!raw-loader!./email-validator/form/email/form-email.component.html"),
    hint: '(follows the <a href="https://www.w3.org/TR/html5.html#valid-e-mail-address">HTML5</a> rules)',
  },
  {
    name: "suggest",
    reactiveformTS: require("!raw-loader!./email-validator/reactive-form/suggest/reactive-form-email-suggest.component"),
    reactiveformHTML: require("!raw-loader!./email-validator/reactive-form/suggest/reactive-form-email-suggest.component.html"),
    formTS: require("!raw-loader!./email-validator/form/suggest/form-email-suggest.component"),
    formHTML: require("!raw-loader!./email-validator/form/suggest/form-email-suggest.component.html"),
    hint: '(thanks to <a href="https://github.com/mailcheck/mailcheck">mailcheck</a>)',
  },
];

export const equalTo: Validator[] = [
  {
    name: "normal",
    reactiveformTS: require("!raw-loader!./equal-to-validator/reactive-form/equal-to/reactive-form-equal-to.component"),
    reactiveformHTML: require("!raw-loader!./equal-to-validator/reactive-form/equal-to/reactive-form-equal-to.component.html"),
    formTS: require("!raw-loader!./equal-to-validator/form/equal-to/form-equal-to.component"),
    formHTML: require("!raw-loader!./equal-to-validator/form/equal-to/form-equal-to.component.html"),
  },
];

export const universal: Validator[] = [
  {
    name: "noWhitespace",
    reactiveformTS: require("!raw-loader!./universal-validator/reactive-form/no-whitespace/reactive-form-no-whitespace.component"),
    reactiveformHTML: require("!raw-loader!./universal-validator/reactive-form/no-whitespace/reactive-form-no-whitespace.component.html"),
    formTS: require("!raw-loader!./universal-validator/form/no-whitespace/form-no-whitespace.component"),
    formHTML: require("!raw-loader!./universal-validator/form/no-whitespace/form-no-whitespace.component.html"),
  },
  {
    name: "noEmptyString",
    reactiveformTS: require("!raw-loader!./universal-validator/reactive-form/no-empty-string/reactive-form-no-empty-string.component"),
    reactiveformHTML: require("!raw-loader!./universal-validator/reactive-form/no-empty-string/reactive-form-no-empty-string.component.html"),
  },
  {
    name: "isNumber",
    reactiveformTS: require("!raw-loader!./universal-validator/reactive-form/is-number/reactive-form-is-number.component"),
    reactiveformHTML: require("!raw-loader!./universal-validator/reactive-form/is-number/reactive-form-is-number.component.html"),
    formTS: require("!raw-loader!./universal-validator/form/is-number/form-is-number.component"),
    formHTML: require("!raw-loader!./universal-validator/form/is-number/form-is-number.component.html"),
  },
  {
    name: "isInRange",
    reactiveformTS: require("!raw-loader!./universal-validator/reactive-form/is-in-range/reactive-form-is-in-range.component"),
    reactiveformHTML: require("!raw-loader!./universal-validator/reactive-form/is-in-range/reactive-form-is-in-range.component.html"),
    formTS: require("!raw-loader!./universal-validator/form/is-in-range/form-is-in-range.component"),
    formHTML: require("!raw-loader!./universal-validator/form/is-in-range/form-is-in-range.component.html"),
  },
  {
    name: "minLength",
    reactiveformTS: require("!raw-loader!./universal-validator/reactive-form/min-length/reactive-form-min-length.component"),
    reactiveformHTML: require("!raw-loader!./universal-validator/reactive-form/min-length/reactive-form-min-length.component.html"),
  },
  {
    name: "maxLength",
    reactiveformTS: require("!raw-loader!./universal-validator/reactive-form/max-length/reactive-form-max-length.component"),
    reactiveformHTML: require("!raw-loader!./universal-validator/reactive-form/max-length/reactive-form-max-length.component.html"),
  },
  {
    name: "min",
    reactiveformTS: require("!raw-loader!./universal-validator/reactive-form/min/reactive-form-min.component"),
    reactiveformHTML: require("!raw-loader!./universal-validator/reactive-form/min/reactive-form-min.component.html"),
    formTS: require("!raw-loader!./universal-validator/form/min/form-min.component"),
    formHTML: require("!raw-loader!./universal-validator/form/min/form-min.component.html"),
  },
  {
    name: "max",
    reactiveformTS: require("!raw-loader!./universal-validator/reactive-form/max/reactive-form-max.component"),
    reactiveformHTML: require("!raw-loader!./universal-validator/reactive-form/max/reactive-form-max.component.html"),
    formTS: require("!raw-loader!./universal-validator/form/max/form-max.component"),
    formHTML: require("!raw-loader!./universal-validator/form/max/form-max.component.html"),
  },
];

export const creditcards: Validator[] = [
  {
    name: "all",
    reactiveformTS: require("!raw-loader!./creditcard-validator/reactive-form/creditcard/reactive-form-creditcard.component"),
    reactiveformHTML: require("!raw-loader!./creditcard-validator/reactive-form/creditcard/reactive-form-creditcard.component.html"),
    formTS: require("!raw-loader!./creditcard-validator/form/creditcard/form-creditcard.component"),
    formHTML: require("!raw-loader!./creditcard-validator/form/creditcard/form-creditcard.component.html"),
  },
  {
    name: "americanexpress",
    reactiveformTS: require("!raw-loader!./creditcard-validator/reactive-form/american-express/reactive-form-american-express.component"),
    reactiveformHTML: require("!raw-loader!./creditcard-validator/reactive-form/american-express/reactive-form-american-express.component.html"),
    formTS: require("!raw-loader!./creditcard-validator/form/american-express/form-american-express.component"),
    formHTML: require("!raw-loader!./creditcard-validator/form/american-express/form-american-express.component.html"),
  },
  {
    name: "visa",
    reactiveformTS: require("!raw-loader!./creditcard-validator/reactive-form/visa/reactive-form-visa.component"),
    reactiveformHTML: require("!raw-loader!./creditcard-validator/reactive-form/visa/reactive-form-visa.component.html"),
    formTS: require("!raw-loader!./creditcard-validator/form/visa/form-visa.component"),
    formHTML: require("!raw-loader!./creditcard-validator/form/visa/form-visa.component.html"),
  },
  {
    name: "dinersclub",
    reactiveformTS: require("!raw-loader!./creditcard-validator/reactive-form/dinersclub/reactive-form-dinersclub.component"),
    reactiveformHTML: require("!raw-loader!./creditcard-validator/reactive-form/dinersclub/reactive-form-dinersclub.component.html"),
    formTS: require("!raw-loader!./creditcard-validator/form/dinersclub/form-dinersclub.component"),
    formHTML: require("!raw-loader!./creditcard-validator/form/dinersclub/form-dinersclub.component.html"),
  },
  {
    name: "discover",
    reactiveformTS: require("!raw-loader!./creditcard-validator/reactive-form/discover/reactive-form-discover.component"),
    reactiveformHTML: require("!raw-loader!./creditcard-validator/reactive-form/discover/reactive-form-discover.component.html"),
    formTS: require("!raw-loader!./creditcard-validator/form/discover/form-discover.component"),
    formHTML: require("!raw-loader!./creditcard-validator/form/discover/form-discover.component.html"),
  },
  {
    name: "jcb",
    reactiveformTS: require("!raw-loader!./creditcard-validator/reactive-form/jcb/reactive-form-jcb.component"),
    reactiveformHTML: require("!raw-loader!./creditcard-validator/reactive-form/jcb/reactive-form-jcb.component.html"),
    formTS: require("!raw-loader!./creditcard-validator/form/jcb/form-jcb.component"),
    formHTML: require("!raw-loader!./creditcard-validator/form/jcb/form-jcb.component.html"),
  },
  {
    name: "maestro",
    reactiveformTS: require("!raw-loader!./creditcard-validator/reactive-form/maestro/reactive-form-maestro.component"),
    reactiveformHTML: require("!raw-loader!./creditcard-validator/reactive-form/maestro/reactive-form-maestro.component.html"),
    formTS: require("!raw-loader!./creditcard-validator/form/maestro/form-maestro.component"),
    formHTML: require("!raw-loader!./creditcard-validator/form/maestro/form-maestro.component.html"),
  },
  {
    name: "mastercard",
    reactiveformTS: require("!raw-loader!./creditcard-validator/reactive-form/mastercard/reactive-form-mastercard.component"),
    reactiveformHTML: require("!raw-loader!./creditcard-validator/reactive-form/mastercard/reactive-form-mastercard.component.html"),
    formTS: require("!raw-loader!./creditcard-validator/form/mastercard/form-mastercard.component"),
    formHTML: require("!raw-loader!./creditcard-validator/form/mastercard/form-mastercard.component.html"),
  },
];

export const items: Items[] = [
  { linkPrefix: "/email/", validators: email, name: "Email" },
  { linkPrefix: "/password/", validators: password, name: "Password" },
  { linkPrefix: "/equal-to/", validators: equalTo, name: "Equal To" },
  { linkPrefix: "/creditcard/", validators: creditcards, name: "Creditcards" },
  { linkPrefix: "/universal/", validators: universal, name: "Universal" },
];
