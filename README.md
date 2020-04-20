# ngx-validators

[![npm](https://david-dm.org/nightapes/ngx-validators.svg)](https://david-dm.org/nightapes/ngx-validators)

An implementation of various angular validators for Angular 2+.

# List of validators

1. Password
1. Email
1. Universal
1. Creditcards

For validation of phone numbers see: [ngx-phone-validators](https://github.com/Nightapes/ngx-phone-validators)

# Install

`npm install ngx-validators --save-dev`

## [Angular CLI](https://github.com/angular/angular-cli)

No config needed

## [Angular Seed](https://github.com/mgechev/angular-seed)

Add following to `project.config.ts`

```ts
let additionalPackages: ExtendPackages[] = [
  {
    name: "ngx-validators",
    path: "node_modules/ngx-validators/bundles/ngx-validators.umd.min.js",
  },
];

this.addPackagesBundles(additionalPackages);
```

## Password validators

The rules are from https://github.com/vt-middleware/passay

The password validators are:

- repeatCharacterRegexRule
- whitespaceRule (moved to UniversalValidators)
- allowedCharacterRule
- alphabeticalCharacterRule
- digitCharacterRule
- lowercaseCharacterRule
- uppercaseCharacterRule
- specialCharacterRule
- more will come

## Email validators

- simple (only checks if it looks like a mail)
- normal (follows the [HTML5](https://www.w3.org/TR/html5/forms.html#valid-e-mail-address) rules)

## Universal validators

- noWhitespace
- noEmptyString
- isNumber
- isInRange
- minLength
- maxLength

## Creditcard validators

- americanexpress
- visa
- dinersclub
- discover
- jcb
- maestro
- mastercard

## Install

```
npm install ngx-validators --save
```

## How to use [model driven]

needs: `ReactiveFormsModule`

### Passwords

```ts
import {PasswordValidators} from 'ngx-validators'

...
password: FormControl = new FormControl('', Validators.compose([
    PasswordValidators.repeatCharacterRegexRule(4),
    PasswordValidators.alphabeticalCharacterRule(1),
    PasswordValidators.digitCharacterRule(1),
    PasswordValidators.lowercaseCharacterRule(1),
    PasswordValidators.uppercaseCharacterRule(1),
    PasswordValidators.specialCharacterRule(1),
    PasswordValidators.allowedCharacterRule(['a', 'b'])
    ]));
```

### Password mismatch

```ts
import {PasswordValidators} from 'ngx-validators'

...

let password: FormControl = new FormControl('testPassword');
let confirmPassword: FormControl = new FormControl('testPassword');
let form = new FormGroup({
    'newPassword': password,
    'confirmPassword': confirmPassword
}, PasswordValidators.mismatchedPasswords()
);

```

#### Override control name

```ts
import {PasswordValidators} from 'ngx-validators'

...

let password: FormControl = new FormControl('testPassword');
let confirmPassword: FormControl = new FormControl('testPassword');
let form = new FormGroup({
    'testName': password,
    'testName2': confirmPassword
}, PasswordValidators.mismatchedPasswords('testName', 'testName2' )
);

```

### Email

```ts
import {EmailValidators} from 'ngx-validators'

...

email: FormControl = new FormControl('', EmailValidators.normal);
email2: FormControl = new FormControl('', EmailValidators.simple);
email3: FormControl = new FormControl('', EmailValidators.suggest);
```

### Universal

```ts
import {UniversalValidators} from 'ngx-validators'

...

control: FormControl = new FormControl('', UniversalValidators.noWhitespace);
control: FormControl = new FormControl('', UniversalValidators.isNumber);
control: FormControl = new FormControl('', UniversalValidators.isInRange(2, 5));
control: FormControl = new FormControl('', UniversalValidators.minLength(2));
control: FormControl = new FormControl('', UniversalValidators.maxLength(7));
control: FormControl = new FormControl('', UniversalValidators.min(2));
control: FormControl = new FormControl('', UniversalValidators.max(2));
```

### Creditcards

```ts
import {CreditCardValidators} from 'ngx-validators'

...

control: FormControl = new FormControl('', UniversalValidators.isCreditCard);
control: FormControl = new FormControl('', UniversalValidators.americanExpress);
control: FormControl = new FormControl('', UniversalValidators.dinersclub);
control: FormControl = new FormControl('', UniversalValidators.discover);
control: FormControl = new FormControl('', UniversalValidators.jcb);
control: FormControl = new FormControl('', UniversalValidators.maestro);
control: FormControl = new FormControl('', UniversalValidators.mastercard);
control: FormControl = new FormControl('', UniversalValidators.visa);

```

## How to use [template driven]

needs `FormsModule and ValidatorsModule`

```ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ValidatorsModule } from "ngx-validators";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ValidatorsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Password

```html
<form>
  <input type="password" [(ngModel)]="model.password" name="password" #formControl="ngModel" password />
  <span *ngIf="formControl.hasError('repeatCharacterRegexRule')">Password contains repeating characters</span>
  <span *ngIf="formControl.hasError('digitCharacterRule')">Password should contain at least on digit</span>
  <span *ngIf="formControl.hasError('alphabeticalCharacterRule')"
    >Password should contain at least on alphabetical character</span
  >
  <span *ngIf="formControl.hasError('lowercaseCharacterRule')"
    >Password should contain at least on lowercase character</span
  >
  <span *ngIf="formControl.hasError('uppercaseCharacterRule')"
    >Password should contain at least on uppercase character</span
  >
</form>

// Override values
<input
  type="password"
  [(ngModel)]="model.password"
  name="password"
  #formControl="ngModel"
  password
  [repeatCharacter]="2"
  [alphabeticalCharacter]="2"
  [digitCharacter]="2"
  [lowercaseCharacter]="2"
  [uppercaseCharacter]="2"
/>
```

### Creditcard

```html
<form>
  <input type="text" [(ngModel)]="model.creditcard" name="creditcard" #formControl="ngModel" creditCard />
  <span *ngIf="formControl.hasError('creditcard')">Is not a creditcard</span>
</form>

// Override values // Test only for a specific creditcard
<input
  type="text"
  [(ngModel)]="model.creditcard"
  name="creditcard"
  #formControl="ngModel"
  [creditCard]="all|americanExpress|dinersclub|discover|jcb|maestro|mastercard|visa"
/>
```

### Email

#### Normal

```html
<form>
  <input type="text" [(ngModel)]="model.email" name="email" #formControl="ngModel" email />
  <span *ngIf="formControl.hasError('normalEmailRule')">Is not a email</span>
</form>
```

#### Suggest

```html
<form>
  <input type="text" [(ngModel)]="model.email" name="email" #formControl="ngModel" emailSuggest />
  <span *ngIf="formControl.hasError('suggestion')">Maybe check the mail again</span>
</form>
```

### Universal

#### whitespace

```html
<form>
  <input type="text" [(ngModel)]="model.firstname" name="firstname" #formControl="ngModel" noWhitespace />
  <span *ngIf="formControl.hasError('noWhitespaceRequired')">Should not contain a whitespace</span>
</form>
```

#### isNumber

```html
<form>
  <input type="number" [(ngModel)]="model.amount" name="amount" #formControl="ngModel" isNumber />
  <span *ngIf="formControl.hasError('numberRequired')">Needs to be a number</span>
</form>
```

#### isInRange

```html
<form>
  <input
    type="number"
    [(ngModel)]="model.amount"
    name="amount"
    #formControl="ngModel"
    isInRange
    [minValue]="2"
    [maxValue]="4"
  />
  <span *ngIf="formControl.hasError('numberRequired')">Needs to be a number</span>
  <span *ngIf="formControl.hasError('rangeValueToSmall')">Number to small</span>
  <span *ngIf="formControl.hasError('rangeValueToBig')">Number to big</span>
</form>
```

#### min

```html
<form>
  <input type="number" [(ngModel)]="model.amount" name="amount" #formControl="ngModel" [min]="2" />
  <span *ngIf="formControl.hasError('numberRequired')">Needs to be a number</span>
  <span *ngIf="formControl.hasError('min')">Number to small</span>
</form>
```

#### max

```html
<form>
  <input type="number" [(ngModel)]="model.amount" name="amount" #formControl="ngModel" [max]="2" />
  <span *ngIf="formControl.hasError('numberRequired')">Needs to be a number</span>
  <span *ngIf="formControl.hasError('max')">Number to small</span>
</form>
```

##Todo

- Add more password rules
- Add address validator

Get the complete changelog here: https://github.com/Nightapes/ngx-validators/releases
